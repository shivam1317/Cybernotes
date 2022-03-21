"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[3245],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),g=a,d=f["".concat(s,".").concat(g)]||f[g]||u[g]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24296:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={tags:["null byte"],image:"img/Portswigger/directory-traversal.png"},s=void 0,c={unversionedId:"portswigger/Directory-traversal/Lab-6",id:"portswigger/Directory-traversal/Lab-6",title:"Lab-6",description:"If an application requires that the user-supplied filename must end with an expected file extension, such as .png, then it might be possible to use a null byte to effectively terminate the file path before the required extension. For example:",source:"@site/docs/portswigger/Directory-traversal/Lab-6.md",sourceDirName:"portswigger/Directory-traversal",slug:"/portswigger/Directory-traversal/Lab-6",permalink:"/Cybernotes/docs/portswigger/Directory-traversal/Lab-6",tags:[{label:"null byte",permalink:"/Cybernotes/docs/tags/null-byte"}],version:"current",frontMatter:{tags:["null byte"],image:"img/Portswigger/directory-traversal.png"},sidebar:"tutorialSidebar",previous:{title:"Lab-5",permalink:"/Cybernotes/docs/portswigger/Directory-traversal/Lab-5"},next:{title:"Lab-1 Unrestricted-file-uploads",permalink:"/Cybernotes/docs/portswigger/File-upload/Lab-1 Unrestricted-file-uploads"}},p=[{value:"Challenge",id:"challenge",children:[],level:2}],u={toc:p};function f(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If an application requires that the user-supplied filename must end with an expected file extension, such as ",(0,i.kt)("inlineCode",{parentName:"p"},".png"),", then it might be possible to use a null byte to effectively terminate the file path before the required extension. For example:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"filename=../../../etc/passwd%00.png")),(0,i.kt)("h2",{id:"challenge"},"Challenge"),(0,i.kt)("p",null,"--\x3e This lab must require the ",(0,i.kt)("inlineCode",{parentName:"p"},".png")," extension at the end of filename so we can bypass it with the null character ",(0,i.kt)("inlineCode",{parentName:"p"},"%00")," so i used this payload :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/images?filename=../../../etc/passwd%00.png\n")),(0,i.kt)("p",null,"--\x3e And i got the conent of ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/passwd")," file !"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(64109).Z,width:"1767",height:"805"})))}f.isMDXComponent=!0},64109:function(e,t,r){t.Z=r.p+"assets/images/Pastedimage20220122123013-a9c401115e9a849d66aefdb4550b1c43.png"}}]);