---
image: "img/Portswigger/xss.png"
---

--> Here most of the tags are blocked. only custom tags are allowed so we have to use payloads with custom tags

With custom tag, we can use most of the events but in most of the events user have to do something to trigger the payload. But then i found that `focus` is very easy to do and that's why i chosen focus payload

--> Also i found same payload for focus on this website :

- https://book.hacktricks.xyz/pentesting-web/xss-cross-site-scripting

which was like this :

```html
%3Cxss+id%253dx+onfocus%253dalert(document.cookie)+tabindex%253d1%3E#x
```

--> Now goto `exploit server` and then add below code and then click `store` and then `send to victim`

(idk why they used script and location to give the link to victim, i also found similar payload on hacktricks but it didn't worked :/ )

```html
<script>
  location =
    "https://your-lab-id.web-security-academy.net/?search=%3Cxss+id%3Dx+onfocus%3Dalert%28document.cookie%29%20tabindex=1%3E#x";
</script>
```
