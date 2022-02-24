"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[2101],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,b=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},842:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={},s=void 0,c={unversionedId:"portswigger/Directory-traversal/Lab-2",id:"portswigger/Directory-traversal/Lab-2",title:"Lab-2",description:"Common obstacles to exploiting file path traversal vulnerabilities",source:"@site/docs/portswigger/Directory-traversal/Lab-2.md",sourceDirName:"portswigger/Directory-traversal",slug:"/portswigger/Directory-traversal/Lab-2",permalink:"/Cybernotes/docs/portswigger/Directory-traversal/Lab-2",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab-1",permalink:"/Cybernotes/docs/portswigger/Directory-traversal/Lab-1"},next:{title:"Lab-3",permalink:"/Cybernotes/docs/portswigger/Directory-traversal/Lab-3"}},p=[{value:"Common obstacles to exploiting file path traversal vulnerabilities",id:"common-obstacles-to-exploiting-file-path-traversal-vulnerabilities",children:[],level:2},{value:"Challenge",id:"challenge",children:[],level:2}],u={toc:p};function f(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"common-obstacles-to-exploiting-file-path-traversal-vulnerabilities"},"Common obstacles to exploiting file path traversal vulnerabilities"),(0,o.kt)("p",null,"Many applications that place user input into file paths implement some kind of defense against path traversal attacks, and these can often be circumvented."),(0,o.kt)("p",null,"If an application strips or blocks directory traversal sequences from the user-supplied filename, then it might be possible to bypass the defense using a variety of techniques."),(0,o.kt)("p",null,"You might be able to use an absolute path from the filesystem root, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"filename=/etc/passwd"),", to directly reference a file without using any traversal sequences."),(0,o.kt)("h2",{id:"challenge"},"Challenge"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(7852).Z,width:"1273",height:"451"})),(0,o.kt)("p",null,"--\x3e Then goto ",(0,o.kt)("inlineCode",{parentName:"p"},"Actions->Do intercept->Response")," and you can intercept the response also!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(2502).Z,width:"1697",height:"803"})),(0,o.kt)("p",null,"--\x3e And we solved the lab!"))}f.isMDXComponent=!0},7852:function(e,t,r){t.Z=r.p+"assets/images/Pastedimage20220122115720-41546f84627f235f397919103d21150d.png"},2502:function(e,t,r){t.Z=r.p+"assets/images/Pastedimage20220122120055-9aebd01f959762f7f39d0253c63f740e.png"}}]);