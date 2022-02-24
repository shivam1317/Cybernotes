"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[106],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5728:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={},c=void 0,l={unversionedId:"portswigger/Information-disclosure/Lab-3 Backup-files",id:"portswigger/Information-disclosure/Lab-3 Backup-files",title:"Lab-3 Backup-files",description:"Source code disclosure via backup files",source:"@site/docs/portswigger/Information-disclosure/Lab-3 Backup-files.md",sourceDirName:"portswigger/Information-disclosure",slug:"/portswigger/Information-disclosure/Lab-3 Backup-files",permalink:"/Cybernotes/docs/portswigger/Information-disclosure/Lab-3 Backup-files",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portswigger/Information-disclosure/Lab-3 Backup-files.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab-2 Debugging-data",permalink:"/Cybernotes/docs/portswigger/Information-disclosure/Lab-2 Debugging-data"},next:{title:"Lab-4 insecure-configuration",permalink:"/Cybernotes/docs/portswigger/Information-disclosure/Lab-4 insecure-configuration"}},u=[{value:"Source code disclosure via backup files",id:"source-code-disclosure-via-backup-files",children:[],level:3},{value:"Challenges",id:"challenges",children:[],level:2}],d={toc:u};function p(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"source-code-disclosure-via-backup-files"},"Source code disclosure via backup files"),(0,o.kt)("p",null,"Obtaining source code access makes it much easier for an attacker to understand the application's behavior and construct high-severity attacks. Sensitive data is sometimes even hard-coded within the source code. Typical examples of this include API keys and credentials for accessing back-end components."),(0,o.kt)("p",null,"If you can identify that a particular open-source technology is being used, this provides easy access to a limited amount of source code."),(0,o.kt)("p",null,"Occasionally, it is even possible to cause the website to expose its own source code. When mapping out a website, you might find that some source code files are referenced explicitly. Unfortunately, requesting them does not usually reveal the code itself. When a server handles files with a particular extension, such as ",(0,o.kt)("inlineCode",{parentName:"p"},".php"),", it will typically execute the code, rather than simply sending it to the client as text. However, in some situations, you can trick a website into returning the contents of the file instead. For example, text editors often generate temporary backup files while the original file is being edited. These temporary files are usually indicated in some way, such as by appending a tilde (",(0,o.kt)("inlineCode",{parentName:"p"},"~"),") to the filename or adding a different file extension. Requesting a code file using a backup file extension can sometimes allow you to read the contents of the file in the response."),(0,o.kt)("h2",{id:"challenges"},"Challenges"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This lab leaks its source code via backup files in a hidden directory. To solve the lab, identify and submit the database password, which is hard-coded in the leaked source code.")),(0,o.kt)("p",null,"--\x3e I found one directory in the ",(0,o.kt)("inlineCode",{parentName:"p"},"robots.txt")," file!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(334).Z,width:"1223",height:"237"})),(0,o.kt)("p",null,"in ",(0,o.kt)("inlineCode",{parentName:"p"},"/backup")," folder i found one file"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7405).Z,width:"1245",height:"353"})),(0,o.kt)("p",null,"--\x3e In that file i found the database password !"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(78).Z,width:"1481",height:"543"})))}p.isMDXComponent=!0},334:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220123121359-ca8954f0f92e22958393e8018e585ea5.png"},7405:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220123121424-216ed2fe35616bea135b04ba3b8ae35d.png"},78:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220123121443-0da20714c96d62d814f813a553f3ae83.png"}}]);