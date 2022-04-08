>This lab contains a [reflected XSS](https://portswigger.net/web-security/cross-site-scripting/reflected) vulnerability with some whitelisted tags, but all events and anchor `href` attributes are blocked..
To solve the lab, perform a [cross-site scripting](https://portswigger.net/web-security/cross-site-scripting) attack that injects a vector that, when clicked, calls the `alert` function.
Note that you need to label your vector with the word "Click" in order to induce the simulated lab user to click your vector. For example:
`<a href="">Click me</a>`

--> So here i tried many payloads like `image` or `img` with `src` and some payloads from [brutelogic](https://brutelogic.com.br/blog/xss-without-event-handlers/) but none of them worked :(

And then i found that we can change the attribute value for any tag with `animate` tag so i made one payload with this tag:

```
<svg><a><animate attributeName=href values=javascript:alert(1) /><text x=20 y=20>Click me</text></a>
```

--> The above payload will create an `svg`. inside that there is a anchor tag which contains `animate` tag. There is a property for animate tag which is `attributeName` which allows us to control the value of it's parent's attribute value. So here we are using `href` as attributeName and to change it's value we use `values` attribute. So here i have changed it to `javascript:alert(1)` which will trigger alert. And also we want to trigger alert only when someone clicks and we want to show `Click` word to victim so that's why i have used `text` tag here.

And after entering this payload with `URL encode All characters` i solved the lab!

