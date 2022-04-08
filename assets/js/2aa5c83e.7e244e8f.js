"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[1036],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=i,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},31305:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={},s=void 0,c={unversionedId:"portswigger/XSS/XSS-In-HTML-Tag-Attributes",id:"portswigger/XSS/XSS-In-HTML-Tag-Attributes",title:"XSS-In-HTML-Tag-Attributes",description:"When the XSS context is into an HTML tag attribute value, you might sometimes be able to terminate the attribute value, close the tag, and introduce a new one. For example:",source:"@site/docs/portswigger/XSS/XSS-In-HTML-Tag-Attributes.md",sourceDirName:"portswigger/XSS",slug:"/portswigger/XSS/XSS-In-HTML-Tag-Attributes",permalink:"/Cybernotes/docs/portswigger/XSS/XSS-In-HTML-Tag-Attributes",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Making-use-of-HTML-encoding",permalink:"/Cybernotes/docs/portswigger/XSS/Making-use-of-HTML-encoding"},next:{title:"XSS-Into-Javascript",permalink:"/Cybernotes/docs/portswigger/XSS/XSS-Into-Javascript"}},u=[{value:"Challenge",id:"challenge",children:[],level:2},{value:"Challenge",id:"challenge-1",children:[],level:2},{value:"Challenge",id:"challenge-2",children:[],level:2}],p={toc:u};function h(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When the XSS context is into an HTML tag attribute value, you might sometimes be able to terminate the attribute value, close the tag, and introduce a new one. For example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"><script>alert(document.domain)<\/script>')),(0,r.kt)("p",null,"More commonly in this situation, angle brackets are blocked or encoded, so your input cannot break out of the tag in which it appears. Provided you can terminate the attribute value, you can normally introduce a new attribute that creates a scriptable context, such as an event handler. For example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'" autofocus onfocus=alert(document.domain) x="')),(0,r.kt)("p",null,"The above payload creates an ",(0,r.kt)("inlineCode",{parentName:"p"},"onfocus")," event that will execute JavaScript when the element receives the focus, and also adds the ",(0,r.kt)("inlineCode",{parentName:"p"},"autofocus")," attribute to try to trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"onfocus")," event automatically without any user interaction. Finally, it adds ",(0,r.kt)("inlineCode",{parentName:"p"},'x="')," to gracefully repair the following markup."),(0,r.kt)("h2",{id:"challenge"},"Challenge"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This lab contains a ",(0,r.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/cross-site-scripting/reflected"},"reflected cross-site scripting")," vulnerability in the search blog functionality where angle brackets are HTML-encoded. To solve this lab, perform a cross-site scripting attack that injects an attribute and calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"alert")," function.")),(0,r.kt)("p",null,"--\x3e So i tried the payload which don't have html tags because they said that it's encoding the angle brackets. So i tried this payload:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'" autofocus onfocus=alert(document.domain) x="\n')),(0,r.kt)("p",null,"And after forwarding request i solved the lab!"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(60662).Z,width:"1687",height:"739"})),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Sometimes the XSS context is into a type of HTML tag attribute that itself can create a scriptable context. Here, you can execute JavaScript without needing to terminate the attribute value. For example, if the XSS context is into the ",(0,r.kt)("inlineCode",{parentName:"p"},"href")," attribute of an anchor tag, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"javascript")," pseudo-protocol to execute script. For example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'<a href="javascript:alert(document.domain)">')),(0,r.kt)("h2",{id:"challenge-1"},"Challenge"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This lab contains a ",(0,r.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/cross-site-scripting/stored"},"stored cross-site scripting")," vulnerability in the comment functionality. To solve this lab, submit a comment that calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"alert")," function when the comment author name is clicked.")),(0,r.kt)("p",null,"--\x3e I first tried the basic payloads like ",(0,r.kt)("inlineCode",{parentName:"p"},'<a href="javascript:alert(document.domain)">')," or ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>alert(1)<\/script>")," with encoding the tags but it didn't worked. And that time i was not putting anything in website and that was the thing which i was doing wrong!"),(0,r.kt)("p",null,"So i entered sample values again but this time i enetered ",(0,r.kt)("inlineCode",{parentName:"p"},"test.com")," in website and after posting comment i found that my username converted into a link which was redirecting me to my website!!"),(0,r.kt)("p",null,"So this means website is putting our website name inside ",(0,r.kt)("inlineCode",{parentName:"p"},"href")," and we can easily alert here using ",(0,r.kt)("inlineCode",{parentName:"p"},"javascript:alert(document.domain)"),"."),(0,r.kt)("p",null,"So i entered above payload in website field. And i solved the lab!"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(12560).Z,width:"1113",height:"599"})),(0,r.kt)("hr",null),(0,r.kt)("p",null,"You might encounter websites that encode angle brackets but still allow you to inject attributes. Sometimes, these injections are possible even within tags that don't usually fire events automatically, such as a canonical tag. You can exploit this behavior using access keys and user interaction on Chrome. Access keys allow you to provide keyboard shortcuts that reference a specific element. The ",(0,r.kt)("inlineCode",{parentName:"p"},"accesskey")," attribute allows you to define a letter that, when pressed in combination with other keys (these vary across different platforms), will cause events to fire. In the next lab you can experiment with access keys and exploit a canonical tag."),(0,r.kt)("h2",{id:"challenge-2"},"Challenge"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This lab reflects user input in a canonical link tag and escapes angle brackets.\nTo solve the lab, perform a ",(0,r.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/cross-site-scripting"},"cross-site scripting")," attack on the home page that injects an attribute that calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"alert")," function.\nTo assist with your exploit, you can assume that the simulated user will press the following key combinations:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ALT+SHIFT+X")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CTRL+ALT+X")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Alt+X"))),(0,r.kt)("p",null,"Please note that the intended solution to this lab is only possible in Chrome."),(0,r.kt)("p",null,"--\x3e I searched about conical tags and i found this definition :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"A canonical tag (rel=\u201ccanonical\u201d)\xa0is a snippet of HTML code that defines the main version for duplicate, near-duplicate and similar pages. In other words, if you have the same or similar content available under different URLs, you can use canonical tags to specify which version is the main one and thus, should be indexed.\n")),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://ahrefs.com/blog/canonical-tags/"},"https://ahrefs.com/blog/canonical-tags/")),(0,r.kt)("p",null,"and also we can use canonical tags in website url and using ",(0,r.kt)("inlineCode",{parentName:"p"},"accesskey")," parameter you can trigger an event whenever some specific keys will be pressed. So i used ",(0,r.kt)("inlineCode",{parentName:"p"},"accesskey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onclick")," events to trigger an alert."),(0,r.kt)("p",null,"So i used this payload after the url :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/?'accesskey='x'+onclick='alert(1)\n--After encoding--\n/?%27accesskey=%27x%27onclick=%27alert(1)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2916).Z,width:"1661",height:"473"})),(0,r.kt)("p",null,"And i solved the lab!"),(0,r.kt)("p",null,"Reference :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://security.stackexchange.com/questions/205975/is-xss-in-canonical-link-possible"},"https://security.stackexchange.com/questions/205975/is-xss-in-canonical-link-possible")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.hackingtruth.in/2020/08/portswigger-reflected-xss-in-canonical.html"},"https://www.hackingtruth.in/2020/08/portswigger-reflected-xss-in-canonical.html"))))}h.isMDXComponent=!0},60662:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220313061743-59222526ada67836a9f682a35a455ae2.png"},12560:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220313064452-1290a1d5b94bfaeb8e61537be4bd0f68.png"},2916:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220313073618-aa1d2aa101dc86797221fa6c4318859a.png"}}]);