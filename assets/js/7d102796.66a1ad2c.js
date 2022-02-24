"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[3708],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9833:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={},c=void 0,l={unversionedId:"portswigger/Directory-traversal/Lab-4",id:"portswigger/Directory-traversal/Lab-4",title:"Lab-4",description:"In some contexts, such as in a URL path or the filename parameter of a multipart/form-data request, web servers may strip any directory traversal sequences before passing your input to the application. You can sometimes bypass this kind of sanitization by URL encoding, or even double URL encoding, the ../ characters, resulting in %2e%2e%2f or %252e%252e%252f respectively. Various non-standard encodings, such as ..%c0%af or ..%ef%bc%8f, may also do the trick.",source:"@site/docs/portswigger/Directory-traversal/Lab-4.md",sourceDirName:"portswigger/Directory-traversal",slug:"/portswigger/Directory-traversal/Lab-4",permalink:"/Cybernotes/docs/portswigger/Directory-traversal/Lab-4",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab-3",permalink:"/Cybernotes/docs/portswigger/Directory-traversal/Lab-3"},next:{title:"Lab-5",permalink:"/Cybernotes/docs/portswigger/Directory-traversal/Lab-5"}},p=[{value:"Challegne",id:"challegne",children:[],level:2}],u={toc:p};function f(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In some contexts, such as in a URL path or the ",(0,o.kt)("inlineCode",{parentName:"p"},"filename")," parameter of a ",(0,o.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," request, web servers may strip any directory traversal sequences before passing your input to the application. You can sometimes bypass this kind of sanitization by URL encoding, or even double URL encoding, the ",(0,o.kt)("inlineCode",{parentName:"p"},"../")," characters, resulting in ",(0,o.kt)("inlineCode",{parentName:"p"},"%2e%2e%2f")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"%252e%252e%252f")," respectively. Various non-standard encodings, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"..%c0%af")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"..%ef%bc%8f"),", may also do the trick."),(0,o.kt)("h2",{id:"challegne"},"Challegne"),(0,o.kt)("p",null,"--\x3e This lab contains a ",(0,o.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/file-path-traversal"},"file path traversal")," vulnerability in the display of product images."),(0,o.kt)("p",null,"The application blocks input containing ",(0,o.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/file-path-traversal"},"path traversal")," sequences. It then performs a URL-decode of the input before using it."),(0,o.kt)("p",null,"To solve the lab, retrieve the contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/passwd")," file."),(0,o.kt)("p",null,"--\x3e i tried to encode ",(0,o.kt)("inlineCode",{parentName:"p"},"../../")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"....//....//")," payloads in url encode but it didn't worked but after i encoded them twice and it worked with ",(0,o.kt)("inlineCode",{parentName:"p"},"../../../etc/passwd")," payload"),(0,o.kt)("p",null,"Payload :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/image?filename=%252e%252e%252f%252e%252e%252f%252e%252e%252f%2565%2574%2563%252f%2570%2561%2573%2573%2577%2564\n")),(0,o.kt)("p",null,"--\x3e And we solved the lab!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(3323).Z,width:"1765",height:"875"})))}f.isMDXComponent=!0},3323:function(e,t,r){t.Z=r.p+"assets/images/Pastedimage20220122121717-50f515fbfe8226399a3e3a6d5d943cef.png"}}]);