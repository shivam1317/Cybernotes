"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[1090],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9361:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={},s=void 0,l={unversionedId:"portswigger/Command-Injection/Lab-1 simple case",id:"portswigger/Command-Injection/Lab-1 simple case",title:"Lab-1 simple case",description:"--\x3e In this lab the vulnerability is in check stock button which will check the stock in perticular place.",source:"@site/docs/portswigger/Command-Injection/Lab-1 simple case.md",sourceDirName:"portswigger/Command-Injection",slug:"/portswigger/Command-Injection/Lab-1 simple case",permalink:"/Cybernotes/docs/portswigger/Command-Injection/Lab-1 simple case",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portswigger/Command-Injection/Lab-1 simple case.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is OS command injection?",permalink:"/Cybernotes/docs/portswigger/Command-Injection/Intro"},next:{title:"Lab-2 blind command injection with time delay",permalink:"/Cybernotes/docs/portswigger/Command-Injection/Lab-2 blind command injection with time delay"}},p=[],u={toc:p};function m(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"--\x3e In this lab the vulnerability is in check stock button which will check the stock in perticular place."),(0,o.kt)("p",null,"--\x3e Main page looks like this :"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3587).Z,width:"1653",height:"753"})),(0,o.kt)("p",null,"--\x3e Vulnerability is in check stock when we click on ",(0,o.kt)("inlineCode",{parentName:"p"},"view details")," tab"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4825).Z,width:"1599",height:"251"})),(0,o.kt)("p",null,"--\x3e Just intercept the request and add this payload :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"+%26+whoami+%26\nwhich is equal to\n & whoami &\n")),(0,o.kt)("p",null,"--\x3e And solved the lab !"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2841).Z,width:"1745",height:"603"})))}m.isMDXComponent=!0},2841:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220120114946-50bc036cfd934f78f59c74758a89c5d7.png"},3587:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220120115138-879862a7ce51725328be999044b73af4.png"},4825:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220120115217-b7acd786e0d960bce98cd404265a708f.png"}}]);