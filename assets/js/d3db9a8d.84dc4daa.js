"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[2006],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||g[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},49448:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={tags:["debugging"],image:"img/Portswigger/information-disclosure.png"},l=void 0,c={unversionedId:"portswigger/Information-disclosure/Lab-2 Debugging-data",id:"portswigger/Information-disclosure/Lab-2 Debugging-data",title:"Lab-2 Debugging-data",description:"Debugging data",source:"@site/docs/portswigger/Information-disclosure/Lab-2 Debugging-data.md",sourceDirName:"portswigger/Information-disclosure",slug:"/portswigger/Information-disclosure/Lab-2 Debugging-data",permalink:"/Cybernotes/docs/portswigger/Information-disclosure/Lab-2 Debugging-data",tags:[{label:"debugging",permalink:"/Cybernotes/docs/tags/debugging"}],version:"current",frontMatter:{tags:["debugging"],image:"img/Portswigger/information-disclosure.png"},sidebar:"tutorialSidebar",previous:{title:"Lab-1 Error messages",permalink:"/Cybernotes/docs/portswigger/Information-disclosure/Lab-1 Error messages"},next:{title:"Lab-3 Backup-files",permalink:"/Cybernotes/docs/portswigger/Information-disclosure/Lab-3 Backup-files"}},u=[{value:"Debugging data",id:"debugging-data",children:[],level:2},{value:"Challenge",id:"challenge",children:[],level:2}],g={toc:u};function p(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"debugging-data"},"Debugging data"),(0,i.kt)("p",null,"For debugging purposes, many websites generate custom error messages and logs that contain large amounts of information about the application's behavior. While this information is useful during development, it is also extremely useful to an attacker if it is leaked in the production environment."),(0,i.kt)("p",null,"Debug messages can sometimes contain vital information for developing an attack, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Values for key session variables that can be manipulated via user input"),(0,i.kt)("li",{parentName:"ul"},"Hostnames and credentials for back-end components"),(0,i.kt)("li",{parentName:"ul"},"File and directory names on the server"),(0,i.kt)("li",{parentName:"ul"},"Keys used to encrypt data transmitted via the client")),(0,i.kt)("p",null,"Debugging information may sometimes be logged in a separate file. If an attacker is able to gain access to this file, it can serve as a useful reference for understanding the application's runtime state. It can also provide several clues as to how they can supply crafted input to manipulate the application state and control the information received."),(0,i.kt)("h2",{id:"challenge"},"Challenge"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This lab contains a debug page that discloses sensitive information about the application. To solve the lab, obtain and submit the ",(0,i.kt)("inlineCode",{parentName:"p"},"SECRET_KEY")," environment variable.")),(0,i.kt)("p",null,"--\x3e I found one directory in the source code !"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(57926).Z,width:"1441",height:"419"})),(0,i.kt)("p",null,"--\x3e After going to that directory i found the ",(0,i.kt)("inlineCode",{parentName:"p"},"SECRET_KEY")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(13201).Z,width:"1439",height:"823"})))}p.isMDXComponent=!0},13201:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220123120317-62458e2f521a9d7bc0c6f238a0d54c5a.png"},57926:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220123120346-ed7ad724c126e01abf0fc6d860032166.png"}}]);