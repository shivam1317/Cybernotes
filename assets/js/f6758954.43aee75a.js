"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[697],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=l(t),m=o,f=g["".concat(c,".").concat(m)]||g[m]||p[m]||a;return t?n.createElement(f,s(s({ref:r},u),{},{components:t})):n.createElement(f,s({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=g;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7914:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return g}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],i={},c=void 0,l={unversionedId:"portswigger/Information-disclosure/Lab-1 Error messages",id:"portswigger/Information-disclosure/Lab-1 Error messages",title:"Lab-1 Error messages",description:"Error messages",source:"@site/docs/portswigger/Information-disclosure/Lab-1 Error messages.md",sourceDirName:"portswigger/Information-disclosure",slug:"/portswigger/Information-disclosure/Lab-1 Error messages",permalink:"/Cybernotes/docs/portswigger/Information-disclosure/Lab-1 Error messages",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab-6",permalink:"/Cybernotes/docs/portswigger/Directory-traversal/Lab-6"},next:{title:"Lab-2 Debugging-data",permalink:"/Cybernotes/docs/portswigger/Information-disclosure/Lab-2 Debugging-data"}},u=[{value:"Error messages",id:"error-messages",children:[],level:3},{value:"Challenge",id:"challenge",children:[],level:2}],p={toc:u};function g(e){var r=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"error-messages"},"Error messages"),(0,a.kt)("p",null,"One of the most common causes of information disclosure is verbose error messages. As a general rule, you should pay close attention to all error messages you encounter during auditing."),(0,a.kt)("p",null,"The content of error messages can reveal information about what input or data type is expected from a given parameter. This can help you to narrow down your attack by identifying exploitable parameters. It may even just prevent you from wasting time trying to inject payloads that simply won't work."),(0,a.kt)("p",null,"Verbose error messages can also provide information about different technologies being used by the website. For example, they might explicitly name a template engine, database type, or server that the website is using, along with its version number. This information can be useful because you can easily search for any documented exploits that may exist for this version. Similarly, you can check whether there are any common configuration errors or dangerous default settings that you may be able to exploit. Some of these may be highlighted in the official documentation."),(0,a.kt)("p",null,"You might also discover that the website is using some kind of open-source framework. In this case, you can study the publicly available source code, which is an invaluable resource for constructing your own exploits."),(0,a.kt)("p",null,"Differences between error messages can also reveal different application behavior that is occurring behind the scenes. Observing differences in error messages is a crucial aspect of many techniques, such as ",(0,a.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/sql-injection"},"SQL injection"),", ",(0,a.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/authentication/password-based#username-enumeration"},"username enumeration"),", and so on."),(0,a.kt)("h2",{id:"challenge"},"Challenge"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In this challenge we have to find the version of open-source software running on the website by generating an error message !")),(0,a.kt)("p",null,"--\x3e When we goto the challenge page we can see that when we click on any product then the website is checking it with the productid so we can try sqli payload here to generate an error !"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(8769).Z,width:"1149",height:"205"})),(0,a.kt)("p",null,"--\x3e I used this payload and got the error !"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"'+OR+1=1--+-\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(9228).Z,width:"1207",height:"903"})))}g.isMDXComponent=!0},9228:function(e,r,t){r.Z=t.p+"assets/images/Pastedimage20220123115740-fb9f4e0039ef0153aaad433541ea5859.png"},8769:function(e,r,t){r.Z=t.p+"assets/images/Pastedimage20220123115835-e8f62671be04de6324b0fb33a824b4a7.png"}}]);