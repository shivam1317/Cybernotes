"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[1397],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=l(r),d=s,f=h["".concat(c,".").concat(d)]||h[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5423:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var n=r(7462),s=r(3366),i=(r(7294),r(3905)),a=["components"],o={},c=void 0,l={unversionedId:"portswigger/XSS/Intro",id:"portswigger/XSS/Intro",title:"Intro",description:"What is cross-site scripting (XSS)?",source:"@site/docs/portswigger/XSS/Intro.md",sourceDirName:"portswigger/XSS",slug:"/portswigger/XSS/Intro",permalink:"/Cybernotes/docs/portswigger/XSS/Intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portswigger/XSS/Intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SSRF-with-whitelist-based-input-filters",permalink:"/Cybernotes/docs/portswigger/SSRF/SSRF-with-whitelist-based-input-filters"},next:{title:"Lab-2",permalink:"/Cybernotes/docs/portswigger/XSS/Lab-2"}},p=[{value:"What is cross-site scripting (XSS)?",id:"what-is-cross-site-scripting-xss",children:[],level:2},{value:"What are the types of XSS attacks?",id:"what-are-the-types-of-xss-attacks",children:[{value:"Lab 1",id:"lab-1",children:[],level:3}],level:2}],u={toc:p};function h(e){var t=e.components,r=(0,s.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-cross-site-scripting-xss"},"What is cross-site scripting (XSS)?"),(0,i.kt)("p",null,"Cross-site scripting (also known as XSS) is a web security vulnerability that allows an attacker to compromise the interactions that users have with a vulnerable application. It allows an attacker to circumvent the same origin policy, which is designed to segregate different websites from each other. Cross-site scripting vulnerabilities normally allow an attacker to masquerade as a victim user, to carry out any actions that the user is able to perform, and to access any of the user's data. If the victim user has privileged access within the application, then the attacker might be able to gain full control over all of the application's functionality and data."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"--\x3e If ",(0,i.kt)("inlineCode",{parentName:"p"},"alert()")," don't work then you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"print()")," which will do the same thing."),(0,i.kt)("h2",{id:"what-are-the-types-of-xss-attacks"},"What are the types of XSS attacks?"),(0,i.kt)("p",null,"There are three main types of XSS attacks. These are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://portswigger.net/web-security/cross-site-scripting#reflected-cross-site-scripting"},"Reflected XSS"),", where the malicious script comes from the current HTTP request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://portswigger.net/web-security/cross-site-scripting#stored-cross-site-scripting"},"Stored XSS"),", where the malicious script comes from the website's database."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://portswigger.net/web-security/cross-site-scripting#dom-based-cross-site-scripting"},"DOM-based XSS"),", where the vulnerability exists in client-side code rather than server-side code.")),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"reflected-xss"},"Reflected XSS"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/cross-site-scripting/reflected"},"Reflected XSS")," is the simplest variety of cross-site scripting. It arises when an application receives data in an HTTP request and includes that data within the immediate response in an unsafe way."),(0,i.kt)("p",null,"Here is a simple example of a reflected XSS vulnerability:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://insecure-website.com/status?message=All+is+well.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<p>Status: All is well.</p>")),(0,i.kt)("p",null,"The application doesn't perform any other processing of the data, so an attacker can easily construct an attack like this:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://insecure-website.com/status?message=<script>/*+Bad+stuff+here...+*/<\/script>")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<p>Status: <script>/* Bad stuff here... */<\/script></p>")),(0,i.kt)("p",null,"If the user visits the URL constructed by the attacker, then the attacker's script executes in the user's browser, in the context of that user's session with the application. At that point, the script can carry out any action, and retrieve any data, to which the user has access."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lab-1"},"Lab 1"),(0,i.kt)("p",null,"--\x3e In this lab we just have to use the common payload for xss : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},"<script>alert(1)<\/script>\n")),(0,i.kt)("p",null,"And we solved the challenge!"))}h.isMDXComponent=!0}}]);