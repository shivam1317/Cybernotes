---
sidebar_position: 9
image: "https://www.cloudflare.com/img/learning/security/threats/cross-site-scripting/xss-attack.png"
tags: ["DOM"]
---

#### Sources and sinks in third-party dependencies

Modern web applications are typically built using a number of third-party libraries and frameworks, which often provide additional functions and capabilities for developers. It's important to remember that some of these are also potential sources and sinks for DOM XSS.

#### DOM XSS in jQuery

If a JavaScript library such as jQuery is being used, look out for sinks that can alter DOM elements on the page. For instance, jQuery's `attr()` function can change the attributes of DOM elements. If data is read from a user-controlled source like the URL, then passed to the `attr()` function, then it may be possible to manipulate the value sent to cause XSS. For example, here we have some JavaScript that changes an anchor element's `href` attribute using data from the URL:

```js
$(function () {
  $("#backLink").attr(
    "href",
    new URLSearchParams(window.location.search).get("returnUrl")
  );
});
```

You can exploit this by modifying the URL so that the `location.search` source contains a malicious JavaScript URL. After the page's JavaScript applies this malicious URL to the back link's `href`, clicking on the back link will execute it:

`?returnUrl=javascript:alert(document.domain)`

## Lab: DOM XSS in jQuery anchor `href` attribute sink using `location.search` source

> This lab contains a [DOM-based cross-site scripting](https://portswigger.net/web-security/cross-site-scripting/dom-based) vulnerability in the submit feedback page. It uses the jQuery library's `$` selector function to find an anchor element, and changes its `href` attribute using data from `location.search`.
> To solve this lab, make the "back" link alert `document.cookie`.

--> So we know that `returnPath` is vulnerable so i just changed it's value in URL to `javascript:alert(document.domain)`

And final url looks like this:

`?returnPath=javascript:alert(document.domain)`

And we solved the lab!

---

Another potential sink to look out for is jQuery's `$()` selector function, which can be used to inject malicious objects into the DOM.

jQuery used to be extremely popular, and a classic DOM XSS vulnerability was caused by websites using this selector in conjunction with the `location.hash` source for animations or auto-scrolling to a particular element on the page. This behavior was often implemented using a vulnerable `hashchange` event handler, similar to the following:

`$(window).on('hashchange', function() { var element = $(location.hash); element[0].scrollIntoView(); });`

As the `hash` is user controllable, an attacker could use this to inject an XSS vector into the `$()` selector sink. More recent versions of jQuery have patched this particular vulnerability by preventing you from injecting HTML into a selector when the input begins with a hash character (`#`). However, you may still find vulnerable code in the wild.

To actually exploit this classic vulnerability, you'll need to find a way to trigger a `hashchange` event without user interaction. One of the simplest ways of doing this is to deliver your exploit via an `iframe`:

`<iframe src="https://vulnerable-website.com#" onload="this.src+='<img src=1 onerror=alert(1)>'">`

In this example, the `src` attribute points to the vulnerable page with an empty hash value. When the `iframe` is loaded, an XSS vector is appended to the hash, causing the `hashchange` event to fire.

#### Note

Even newer versions of jQuery can still be vulnerable via the `$()` selector sink, provided you have full control over its input from a source that doesn't require a `#` prefix.

## Lab: DOM XSS in jQuery selector sink using a hashchange event

> This lab contains a [DOM-based cross-site scripting](https://portswigger.net/web-security/cross-site-scripting/dom-based) vulnerability on the home page. It uses jQuery's `$()` selector function to auto-scroll to a given post, whose title is passed via the `location.hash` property.
> To solve the lab, deliver an exploit to the victim that calls the `print()` function in their browser.

--> I went to exploit server and tried this payload:

```html
<iframe src="LAB-URL/#" onload="javascript:print()"></iframe>
```

But idk it didn't worked :/ i also went to see the exploit and it was triggering the print function but portswigger labs will only show you solved status when you use their payload.

So after that i used that image payload which will trigger print function.

```html
<iframe src="LAB-URL/#" onload="this.src+='<img src=1 onerror=print()>'"
  >"></iframe
>
```

--> Click `store` and then `deliver exploit to victim`

And we solved the lab!

## DOM XSS in [AngularJS](https://portswigger.net/web-security/cross-site-scripting/contexts/angularjs-sandbox)

If a framework like AngularJS is used, it may be possible to execute JavaScript without angle brackets or events. When a site uses the `ng-app` attribute on an HTML element, it will be processed by AngularJS. In this case, AngularJS will execute JavaScript inside double curly braces that can occur directly in HTML or inside attributes.

## Lab: DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded

> This lab contains a [DOM-based cross-site scripting](https://portswigger.net/web-security/cross-site-scripting/dom-based) vulnerability in a [AngularJS](https://portswigger.net/web-security/cross-site-scripting/contexts/angularjs-sandbox) expression within the search functionality.
> AngularJS is a popular JavaScript library, which scans the contents of HTML nodes containing the `ng-app` attribute (also known as an AngularJS directive). When a directive is added to the HTML code, you can execute JavaScript expressions within double curly braces. This technique is useful when angle brackets are being encoded.
> To solve this lab, perform a cross-site scripting attack that executes an AngularJS expression and calls the `alert` function.

I searched for `DOM xss in angular with ng-app` and found some resources.

--> I tried this payload and it worked!

```js
{
  {
    $on.constructor("alert(1)")();
  }
}
```

Resources:

- https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/XSS%20Injection/XSS%20in%20Angular.md
- https://spring.io/blog/2016/01/28/angularjs-escaping-the-expression-sandbox-for-xss
