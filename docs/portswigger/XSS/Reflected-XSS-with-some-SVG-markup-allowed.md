---
sidebar_position: 5
image: "https://www.cloudflare.com/img/learning/security/threats/cross-site-scripting/xss-attack.png"
tags: ["SVG"]
---

# Lab: Reflected XSS with some SVG markup allowed

> This lab has a simple [reflected XSS](https://portswigger.net/web-security/cross-site-scripting/reflected) vulnerability. The site is blocking common tags but misses some SVG tags and events.
> To solve the lab, perform a [cross-site scripting](https://portswigger.net/web-security/cross-site-scripting) attack that calls the `alert()` function.

--> So i tried all svg related payloads from [This](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet) cheatsheet and one payload worked which was this:

```
<svg><animatetransform+onbegin%3dalert(1)+attributeName%3dtransform>
```

![](Attachments/Pastedimage20220309133711.png)

So final payload will look like this:

![](Attachments/Pastedimage20220309135336.png)

And after forwarding the request i solved the lab!
