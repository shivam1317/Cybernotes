"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[8914],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73031:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={image:"img/Portswigger/xss.png"},c=void 0,l={unversionedId:"portswigger/XSS/Lab-3",id:"portswigger/XSS/Lab-3",title:"Lab-3",description:"--\x3e Here most of the tags are blocked. only custom tags are allowed so we have to use payloads with custom tags",source:"@site/docs/portswigger/XSS/Lab-3.md",sourceDirName:"portswigger/XSS",slug:"/portswigger/XSS/Lab-3",permalink:"/Cybernotes/docs/portswigger/XSS/Lab-3",tags:[],version:"current",frontMatter:{image:"img/Portswigger/xss.png"},sidebar:"tutorialSidebar",previous:{title:"Lab-2",permalink:"/Cybernotes/docs/portswigger/XSS/Lab-2"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"--\x3e Here most of the tags are blocked. only custom tags are allowed so we have to use payloads with custom tags"),(0,a.kt)("p",null,"With custom tag, we can use most of the events but in most of the events user have to do something to trigger the payload. But then i found that ",(0,a.kt)("inlineCode",{parentName:"p"},"focus")," is very easy to do and that's why i chosen focus payload"),(0,a.kt)("p",null,"--\x3e Also i found same payload for focus on this website :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://book.hacktricks.xyz/pentesting-web/xss-cross-site-scripting"},"https://book.hacktricks.xyz/pentesting-web/xss-cross-site-scripting"))),(0,a.kt)("p",null,"which was like this :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"%3Cxss+id%253dx+onfocus%253dalert(document.cookie)+tabindex%253d1%3E#x\n")),(0,a.kt)("p",null,"--\x3e Now goto ",(0,a.kt)("inlineCode",{parentName:"p"},"exploit server")," and then add below code and then click ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," and then ",(0,a.kt)("inlineCode",{parentName:"p"},"send to victim")),(0,a.kt)("p",null,"(idk why they used script and location to give the link to victim, i also found similar payload on hacktricks but it didn't worked :/ )"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script>\n  location =\n    "https://your-lab-id.web-security-academy.net/?search=%3Cxss+id%3Dx+onfocus%3Dalert%28document.cookie%29%20tabindex=1%3E#x";\n<\/script>\n')))}d.isMDXComponent=!0}}]);