"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[837],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return y}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(r),y=a,f=m["".concat(u,".").concat(y)]||m[y]||p[y]||o;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46075:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return s},toc:function(){return p},default:function(){return y}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],i={slug:"bounty-hacker",title:"THM Bounty Hacker",description:"Tryhackme Bounty Hacker writeup",authors:["shivam"],image:"https://tryhackme-images.s3.amazonaws.com/room-icons/9ad38a2cc31d6ae0030c888aca7fe646.jpeg",tags:["hydra","FTP","tar"]},u=void 0,l={permalink:"/Cybernotes/blog/bounty-hacker",source:"@site/blog/2022-02-27-Bounty-Hunter/index.md",title:"THM Bounty Hacker",description:"Tryhackme Bounty Hacker writeup",date:"2022-02-27T00:00:00.000Z",formattedDate:"February 27, 2022",tags:[{label:"hydra",permalink:"/Cybernotes/blog/tags/hydra"},{label:"FTP",permalink:"/Cybernotes/blog/tags/ftp"},{label:"tar",permalink:"/Cybernotes/blog/tags/tar"}],readingTime:1.86,truncated:!0,authors:[{name:"0xSH1V4M",title:"Author",url:"https://github.com/shivam1317",imageURL:"https://avatars.githubusercontent.com/u/70281451?v=4",key:"shivam"}],frontMatter:{slug:"bounty-hacker",title:"THM Bounty Hacker",description:"Tryhackme Bounty Hacker writeup",authors:["shivam"],image:"https://tryhackme-images.s3.amazonaws.com/room-icons/9ad38a2cc31d6ae0030c888aca7fe646.jpeg",tags:["hydra","FTP","tar"]},prevItem:{title:"THM Anthem writeup",permalink:"/Cybernotes/blog/anthem"},nextItem:{title:"THM Brooklyn writeup",permalink:"/Cybernotes/blog/Brooklyn"}},s={authorsImageUrls:[void 0]},p=[],m={toc:p};function y(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hello everyone,"),(0,o.kt)("p",null,"Today we are going to solve Bounty hacker room from tryhackme. we will learn about hydra,FTP enumration and how to get root shell with tar."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tryhackme-images.s3.amazonaws.com/room-icons/9ad38a2cc31d6ae0030c888aca7fe646.jpeg",alt:null})))}y.isMDXComponent=!0}}]);