"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[2006],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=l(n),d=a,f=g["".concat(c,".").concat(d)]||g[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9448:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return g}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},c=void 0,l={unversionedId:"portswigger/Information-disclosure/Lab-2 Debugging-data",id:"portswigger/Information-disclosure/Lab-2 Debugging-data",title:"Lab-2 Debugging-data",description:"Debugging data",source:"@site/docs/portswigger/Information-disclosure/Lab-2 Debugging-data.md",sourceDirName:"portswigger/Information-disclosure",slug:"/portswigger/Information-disclosure/Lab-2 Debugging-data",permalink:"/Cybernotes/docs/portswigger/Information-disclosure/Lab-2 Debugging-data",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portswigger/Information-disclosure/Lab-2 Debugging-data.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab-1 Error messages",permalink:"/Cybernotes/docs/portswigger/Information-disclosure/Lab-1 Error messages"},next:{title:"Lab-3 Backup-files",permalink:"/Cybernotes/docs/portswigger/Information-disclosure/Lab-3 Backup-files"}},u=[{value:"Debugging data",id:"debugging-data",children:[],level:2},{value:"Challenge",id:"challenge",children:[],level:2}],p={toc:u};function g(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"debugging-data"},"Debugging data"),(0,o.kt)("p",null,"For debugging purposes, many websites generate custom error messages and logs that contain large amounts of information about the application's behavior. While this information is useful during development, it is also extremely useful to an attacker if it is leaked in the production environment."),(0,o.kt)("p",null,"Debug messages can sometimes contain vital information for developing an attack, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Values for key session variables that can be manipulated via user input"),(0,o.kt)("li",{parentName:"ul"},"Hostnames and credentials for back-end components"),(0,o.kt)("li",{parentName:"ul"},"File and directory names on the server"),(0,o.kt)("li",{parentName:"ul"},"Keys used to encrypt data transmitted via the client")),(0,o.kt)("p",null,"Debugging information may sometimes be logged in a separate file. If an attacker is able to gain access to this file, it can serve as a useful reference for understanding the application's runtime state. It can also provide several clues as to how they can supply crafted input to manipulate the application state and control the information received."),(0,o.kt)("h2",{id:"challenge"},"Challenge"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This lab contains a debug page that discloses sensitive information about the application. To solve the lab, obtain and submit the ",(0,o.kt)("inlineCode",{parentName:"p"},"SECRET_KEY")," environment variable.")),(0,o.kt)("p",null,"--\x3e I found one directory in the source code !"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7926).Z,width:"1441",height:"419"})),(0,o.kt)("p",null,"--\x3e After going to that directory i found the ",(0,o.kt)("inlineCode",{parentName:"p"},"SECRET_KEY")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3201).Z,width:"1439",height:"823"})))}g.isMDXComponent=!0},3201:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220123120317-62458e2f521a9d7bc0c6f238a0d54c5a.png"},7926:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220123120346-ed7ad724c126e01abf0fc6d860032166.png"}}]);