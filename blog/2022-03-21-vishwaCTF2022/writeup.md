---
title: VishwaCTF 2022 writeups
description: VishwaCTF 2022 web,osint,crypto and forensics challenge writeups
authors: ["shivam"]
image: /img/ctftime/vishwactf2022.png
slug: vishwactf2022
tags: ["web", "OSINT", "forensics", "crypto"]
---

## Intro

VishwaCTF 2022 was Fun CTF challenge. me and my team participated in it as `W3 4R3 N00BS` team and we got top 100 in this CTF. ofcourse it's not a good rank because we don't have any forensics,crypto and reversing players and also their OSINT and stegno challenges were only related to guesswork. that's why we were able to do only 1 OSINT challenge. If you are interested in joining our team then contact us through our [discord server](https://discord.gg/2KJJMQ8DRP)

This is the scoreboard for our team.

![](https://cdn.discordapp.com/attachments/833787171130834951/955090566348152902/unknown.png)

--> I solved 11 challenges from my team. And in total our team have solved 18 challenges.

![](Attachments/Pastedimage20220321040319.png)

These are the writeups for challenges which i solved.

## web

### Request me FLAG

So first of all if we go to main page then we will see this 404 page. This page is not really 404 but it's there just as rabbit hole.

![](Attachments/Pastedimage20220321032855.png)

So it says request me so i tried to do things like going to `flag.php` or `home.php` but i haven't got anything.

I also tried to find parameteres for this `404.php` file but no luck :(

And after some time i again read the challenge description and i realized that it says `request me` so maybe what if we change the request method from `GET` to `FLAG`?

So let's try this!

i intercepted the request and changed request method to `FLAG` like this:

![](Attachments/Pastedimage20220321033308.png)

But i didn't found anything. but wait! let's try this method for `/`

And boom i got the flag!

![](Attachments/Pastedimage20220321033404.png)

### Keep your secrets

--> In this challenge we have one api with GET method route which is `/api/signup/{username}` and POST method route which is `/api/login/user` with token in header

![](Attachments/Pastedimage20220321033546.png)

But what's token here? So let's first try to register a user and let's name it `admin`

so i intercepted the request and registereed a user and i got one jwt token.

![](Attachments/Pastedimage20220321033745.png)

And token looks like this:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2NDc4NDgyMjV9.nl2_Vz9Vq5cfmhssnV_djgGGJ09f3KpCf_hMxu18jsY
```

So let's goto [jwt.io](https://jwt.io/) and check this token

And i found that there is 3 fields in token: `username`,`role` and `iat`

![](Attachments/Pastedimage20220321033932.png)

So now let's check the POST route which says it's only accessible by admins and it's asking for a token. So maybe if we can change the `role` to `admin` in jwt token and pass it in `token` header then we can access this page!

So for that first we need to crack the secret for this jwt.

And i found it with john the ripper tool.

![](https://cdn.discordapp.com/attachments/898560816457072691/955016432796725269/unknown.png)

So now we just have to use this secret to sign our jwt token which have admin as role and then just pass it in token header!

So after changing required fields, jwt token looks like this:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjQ3ODQ4MjI1fQ.7oOS5McgiZO-TZx3aIMB8u4XkcOA98MlmYPxFKk6N7Y
```

So now let's just pass it through headers in POST route.

Request:

![](Attachments/Pastedimage20220321034503.png)

Response:

![](Attachments/Pastedimage20220321034517.png)

And we got our flag : `vishwactf{w3@k_$ecr3t$}`

### strong encryption

--> This challenge was more like reversing the encryption. so going to the page gives us this php code which have encryption function and we have given one encrypted flag and we have to decrypt it by analysing this encryption method!

```php
 <?php // Decrypt -> 576e78697e65445c4a7c8033766770357c3960377460357360703a6f6982452f12f4712f4c769a75b33cb995fa169056168939a8b0b28eafe0d724f18dc4a7 $flag="";

    function encrypt($str,$enKey){ $strHex=''; $Key=''; $rKey=69; $tmpKey='';

        for($i=0;$i<strlen($enKey);$i++){ $Key.=ord($enKey[$i])+$rKey; $tmpKey.=chr(ord($enKey[$i])+$rKey);
        } $rKeyHex=dechex($rKey); $enKeyHash = hash('sha256',$tmpKey);

        for ($i=0,$j=0; $i < strlen($str); $i++,$j++){
            if($j==strlen($Key)){ $j=0;
            } $strHex .= dechex(ord($str[$i])+$Key[$j]);
        } $encTxt = $strHex.$rKeyHex.$enKeyHash;
        return $encTxt;
    } $encTxt = encrypt($flag, "VishwaCTF");

    echo $encTxt;

?>
```

So i made this script for decrypting the flag:

```php
<?php

$flag = "576e78697e65445c4a7c8033766770357c3960377460357360703a6f6982";
$key = "155174184173188166136153139";

$finalflag = '';

for($i=0,$j=0;$i<strlen($flag);$i+=2,$j++){
	if($j==strlen($key)){
		$j=0;
	}
	$temp = $flag[$i].$flag[$i+1];
	$dectemp = hexdec($temp);
	$dectemp = $dectemp - $key[$j];
	$chrtemp = chr($dectemp);
	$finalflag .= $chrtemp;
}
echo $finalflag;

?>
```

And i got the flag: `VishwaCTF{y0u_h4v3_4n_0p_m1nd}`

## Cryptography

### John the Rocker

--> In this challenge, we have one `id_rsa` which have a passphrase and we have to decrypt it to get the flag. We can do this using [ssh2john](https://github.com/openwall/john/blob/bleeding-jumbo/run/ssh2john.py)

First convert this id_rsa file to john readable format using ssh2john

```
ssh2john.py id_rsa > converted
```

After that use john the ripper tool to crack the passphrase for this id_rsa

```
john --wordlist=/usr/share/wordlists/rockyou.txt converted
```

And we got our flag!

![](Attachments/Pastedimage20220321035246.png)

`vishwactf{!!**john**!!}`

## Forensics

### So grateful

--> In this challenge, we have one pcap file in which we have to find the password. so let's analyse it using [wireshark](https://www.wireshark.org/)

And after analysing the tcp streams i found password in 5th TCP stream which looks like this:

```
POST /pages/main.html HTTP/1.1
Referer: 10.0.0.1:8080/index.html
User-Agent: User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64; rv:44.0) Gecko/20100101 Firefox/44.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9*/*;q=0.8
Host: 10.0.0.1:8080
Connection: Keep-Alive
Content-Type: application/x-www-form-urlencoded
Content-Length: 41
Accept-Language: en-US,en;q=0.5

userid=spiveyp&pswrd=S04xWjZQWFZ5OQ%3D%3DHTTP/1.0 200 OK
Server: BaseHTTP/0.3 Python/2.7.9
Date: Sat, 19 Mar 2016 02:12:42 GMT
Content-type: text/html
```

And after decoding the password with `URL->base64` i found the flag!

`vishwactf{KN1Z6PXVy9}`

## OSINT

### Rocket Raccoon

Challenge description was like this:

```
Who is 'racckoonn' exactly? Intel has that their owner has leaked some private information.
```

--> So i googled for it but didn't found anything relatable. So after that i guessed that it can be a username so i used [sherlock](https://github.com/sherlock-project/sherlock) to find the accounts for that username.

And i found many accounts but instagram looks interesting!

![](Attachments/Pastedimage20220321041057.png)

And i found [this](https://www.instagram.com/racckoonn/) account in which i found one more interesting thing!

I found this caption in one of the post:

```
Check out my mum's new YouTube channel!
https://www.youtube.com/channel/UCDurVPcUypifNkJVrHxJ3vQ
```

So After going there i found one more username as `JohnsonM3llisa` So i used sherlock on this also!

![](Attachments/Pastedimage20220321041359.png)

And boom i found twitter account!

After going there i found one tweet :

```
OOPS! Almost leaked some private information, hope there is no way to get it back haha
```

So maybe they deleted the private info and there is a one way to see deleted info from social media accounts which is [waybackmachine](https://archive.org/web/)

So i went there and pasted their twitter profile link and found the flag!

![](Attachments/Pastedimage20220321041639.png)

And we found the flag : `Vishwactf{R4cc00ns_4r3_Sm4rt}`

## Conclusion

--> All web challenges were fun but i didn't liked their OSINT,misc and stegnography challenges because there were too many guesswork to do.

Thanks for reading. :)
