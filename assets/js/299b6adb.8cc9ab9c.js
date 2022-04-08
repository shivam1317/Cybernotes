"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[255],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14035:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={sidebar_position:9,image:"https://www.cloudflare.com/img/learning/security/threats/cross-site-scripting/xss-attack.png",tags:["DOM"]},l=void 0,c={unversionedId:"portswigger/XSS/DOM-XSS-In-Third-Party-Apps",id:"portswigger/XSS/DOM-XSS-In-Third-Party-Apps",title:"DOM-XSS-In-Third-Party-Apps",description:"Sources and sinks in third-party dependencies",source:"@site/docs/portswigger/XSS/DOM-XSS-In-Third-Party-Apps.md",sourceDirName:"portswigger/XSS",slug:"/portswigger/XSS/DOM-XSS-In-Third-Party-Apps",permalink:"/Cybernotes/docs/portswigger/XSS/DOM-XSS-In-Third-Party-Apps",tags:[{label:"DOM",permalink:"/Cybernotes/docs/tags/dom"}],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,image:"https://www.cloudflare.com/img/learning/security/threats/cross-site-scripting/xss-attack.png",tags:["DOM"]},sidebar:"tutorialSidebar",previous:{title:"DOM-XSS-With-reflected-and-Stored-Data",permalink:"/Cybernotes/docs/portswigger/XSS/DOM-XSS-With-reflected-and-Stored-Data"},next:{title:"Content-Security-Policy",permalink:"/Cybernotes/docs/portswigger/XSS/Content-Security-Policy"}},p=[{value:"Sources and sinks in third-party dependencies",id:"sources-and-sinks-in-third-party-dependencies",children:[],level:4},{value:"DOM XSS in jQuery",id:"dom-xss-in-jquery",children:[],level:4},{value:"Lab: DOM XSS in jQuery anchor <code>href</code> attribute sink using <code>location.search</code> source",id:"lab-dom-xss-in-jquery-anchor-href-attribute-sink-using-locationsearch-source",children:[{value:"Note",id:"note",children:[],level:4}],level:2},{value:"Lab: DOM XSS in jQuery selector sink using a hashchange event",id:"lab-dom-xss-in-jquery-selector-sink-using-a-hashchange-event",children:[],level:2},{value:"DOM XSS in AngularJS",id:"dom-xss-in-angularjs",children:[],level:2},{value:"Lab: DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded",id:"lab-dom-xss-in-angularjs-expression-with-angle-brackets-and-double-quotes-html-encoded",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"sources-and-sinks-in-third-party-dependencies"},"Sources and sinks in third-party dependencies"),(0,i.kt)("p",null,"Modern web applications are typically built using a number of third-party libraries and frameworks, which often provide additional functions and capabilities for developers. It's important to remember that some of these are also potential sources and sinks for DOM XSS."),(0,i.kt)("h4",{id:"dom-xss-in-jquery"},"DOM XSS in jQuery"),(0,i.kt)("p",null,"If a JavaScript library such as jQuery is being used, look out for sinks that can alter DOM elements on the page. For instance, jQuery's ",(0,i.kt)("inlineCode",{parentName:"p"},"attr()")," function can change the attributes of DOM elements. If data is read from a user-controlled source like the URL, then passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"attr()")," function, then it may be possible to manipulate the value sent to cause XSS. For example, here we have some JavaScript that changes an anchor element's ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," attribute using data from the URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'$(function () {\n  $("#backLink").attr(\n    "href",\n    new URLSearchParams(window.location.search).get("returnUrl")\n  );\n});\n')),(0,i.kt)("p",null,"You can exploit this by modifying the URL so that the ",(0,i.kt)("inlineCode",{parentName:"p"},"location.search")," source contains a malicious JavaScript URL. After the page's JavaScript applies this malicious URL to the back link's ",(0,i.kt)("inlineCode",{parentName:"p"},"href"),", clicking on the back link will execute it:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"?returnUrl=javascript:alert(document.domain)")),(0,i.kt)("h2",{id:"lab-dom-xss-in-jquery-anchor-href-attribute-sink-using-locationsearch-source"},"Lab: DOM XSS in jQuery anchor ",(0,i.kt)("inlineCode",{parentName:"h2"},"href")," attribute sink using ",(0,i.kt)("inlineCode",{parentName:"h2"},"location.search")," source"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This lab contains a ",(0,i.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/cross-site-scripting/dom-based"},"DOM-based cross-site scripting")," vulnerability in the submit feedback page. It uses the jQuery library's ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," selector function to find an anchor element, and changes its ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," attribute using data from ",(0,i.kt)("inlineCode",{parentName:"p"},"location.search"),'.\nTo solve this lab, make the "back" link alert ',(0,i.kt)("inlineCode",{parentName:"p"},"document.cookie"),".")),(0,i.kt)("p",null,"--\x3e So we know that ",(0,i.kt)("inlineCode",{parentName:"p"},"returnPath")," is vulnerable so i just changed it's value in URL to ",(0,i.kt)("inlineCode",{parentName:"p"},"javascript:alert(document.domain)")),(0,i.kt)("p",null,"And final url looks like this:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"?returnPath=javascript:alert(document.domain)")),(0,i.kt)("p",null,"And we solved the lab!"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Another potential sink to look out for is jQuery's ",(0,i.kt)("inlineCode",{parentName:"p"},"$()")," selector function, which can be used to inject malicious objects into the DOM."),(0,i.kt)("p",null,"jQuery used to be extremely popular, and a classic DOM XSS vulnerability was caused by websites using this selector in conjunction with the ",(0,i.kt)("inlineCode",{parentName:"p"},"location.hash")," source for animations or auto-scrolling to a particular element on the page. This behavior was often implemented using a vulnerable ",(0,i.kt)("inlineCode",{parentName:"p"},"hashchange")," event handler, similar to the following:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$(window).on('hashchange', function() { var element = $(location.hash); element[0].scrollIntoView(); });")),(0,i.kt)("p",null,"As the ",(0,i.kt)("inlineCode",{parentName:"p"},"hash")," is user controllable, an attacker could use this to inject an XSS vector into the ",(0,i.kt)("inlineCode",{parentName:"p"},"$()")," selector sink. More recent versions of jQuery have patched this particular vulnerability by preventing you from injecting HTML into a selector when the input begins with a hash character (",(0,i.kt)("inlineCode",{parentName:"p"},"#"),"). However, you may still find vulnerable code in the wild."),(0,i.kt)("p",null,"To actually exploit this classic vulnerability, you'll need to find a way to trigger a ",(0,i.kt)("inlineCode",{parentName:"p"},"hashchange")," event without user interaction. One of the simplest ways of doing this is to deliver your exploit via an ",(0,i.kt)("inlineCode",{parentName:"p"},"iframe"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'<iframe src="https://vulnerable-website.com#" onload="this.src+=\'<img src=1 onerror=alert(1)>\'">')),(0,i.kt)("p",null,"In this example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," attribute points to the vulnerable page with an empty hash value. When the ",(0,i.kt)("inlineCode",{parentName:"p"},"iframe")," is loaded, an XSS vector is appended to the hash, causing the ",(0,i.kt)("inlineCode",{parentName:"p"},"hashchange")," event to fire."),(0,i.kt)("h4",{id:"note"},"Note"),(0,i.kt)("p",null,"Even newer versions of jQuery can still be vulnerable via the ",(0,i.kt)("inlineCode",{parentName:"p"},"$()")," selector sink, provided you have full control over its input from a source that doesn't require a ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," prefix."),(0,i.kt)("h2",{id:"lab-dom-xss-in-jquery-selector-sink-using-a-hashchange-event"},"Lab: DOM XSS in jQuery selector sink using a hashchange event"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This lab contains a ",(0,i.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/cross-site-scripting/dom-based"},"DOM-based cross-site scripting")," vulnerability on the home page. It uses jQuery's ",(0,i.kt)("inlineCode",{parentName:"p"},"$()")," selector function to auto-scroll to a given post, whose title is passed via the ",(0,i.kt)("inlineCode",{parentName:"p"},"location.hash")," property.\nTo solve the lab, deliver an exploit to the victim that calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"print()")," function in their browser.")),(0,i.kt)("p",null,"--\x3e I went to exploit server and tried this payload:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<iframe src="LAB-URL/#" onload="javascript:print()"></iframe>\n')),(0,i.kt)("p",null,"But idk it didn't worked :/ i also went to see the exploit and it was triggering the print function but portswigger labs will only show you solved status when you use their payload."),(0,i.kt)("p",null,"So after that i used that image payload which will trigger print function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<iframe src="LAB-URL/#" onload="this.src+=\'<img src=1 onerror=print()>\'"\n  >"></iframe\n>\n')),(0,i.kt)("p",null,"--\x3e Click ",(0,i.kt)("inlineCode",{parentName:"p"},"store")," and then ",(0,i.kt)("inlineCode",{parentName:"p"},"deliver exploit to victim")),(0,i.kt)("p",null,"And we solved the lab!"),(0,i.kt)("h2",{id:"dom-xss-in-angularjs"},"DOM XSS in ",(0,i.kt)("a",{parentName:"h2",href:"https://portswigger.net/web-security/cross-site-scripting/contexts/angularjs-sandbox"},"AngularJS")),(0,i.kt)("p",null,"If a framework like AngularJS is used, it may be possible to execute JavaScript without angle brackets or events. When a site uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"ng-app")," attribute on an HTML element, it will be processed by AngularJS. In this case, AngularJS will execute JavaScript inside double curly braces that can occur directly in HTML or inside attributes."),(0,i.kt)("h2",{id:"lab-dom-xss-in-angularjs-expression-with-angle-brackets-and-double-quotes-html-encoded"},"Lab: DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This lab contains a ",(0,i.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/cross-site-scripting/dom-based"},"DOM-based cross-site scripting")," vulnerability in a ",(0,i.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/cross-site-scripting/contexts/angularjs-sandbox"},"AngularJS")," expression within the search functionality.\nAngularJS is a popular JavaScript library, which scans the contents of HTML nodes containing the ",(0,i.kt)("inlineCode",{parentName:"p"},"ng-app")," attribute (also known as an AngularJS directive). When a directive is added to the HTML code, you can execute JavaScript expressions within double curly braces. This technique is useful when angle brackets are being encoded.\nTo solve this lab, perform a cross-site scripting attack that executes an AngularJS expression and calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"alert")," function.")),(0,i.kt)("p",null,"I searched for ",(0,i.kt)("inlineCode",{parentName:"p"},"DOM xss in angular with ng-app")," and found some resources."),(0,i.kt)("p",null,"--\x3e I tried this payload and it worked!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  {\n    $on.constructor("alert(1)")();\n  }\n}\n')),(0,i.kt)("p",null,"Resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/XSS%20Injection/XSS%20in%20Angular.md"},"https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/XSS%20Injection/XSS%20in%20Angular.md")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://spring.io/blog/2016/01/28/angularjs-escaping-the-expression-sandbox-for-xss"},"https://spring.io/blog/2016/01/28/angularjs-escaping-the-expression-sandbox-for-xss"))))}d.isMDXComponent=!0}}]);