"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[1030],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(t),f=o,g=m["".concat(p,".").concat(f)]||m[f]||l[f]||a;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},44860:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return s},toc:function(){return l},default:function(){return f}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={slug:"openadmin",title:"HTB OpenAdmin writeup",image:"/img/HTB/openadmin.png",authors:["shivam"],tags:["openadmin","rce","ssh2john","nano"]},p="openAdmin",u={permalink:"/Cybernotes/blog/openadmin",source:"@site/blog/2022-02-26-OpenAdmin/openAdmin.md",title:"HTB OpenAdmin writeup",description:"nmap results",date:"2022-02-26T00:00:00.000Z",formattedDate:"February 26, 2022",tags:[{label:"openadmin",permalink:"/Cybernotes/blog/tags/openadmin"},{label:"rce",permalink:"/Cybernotes/blog/tags/rce"},{label:"ssh2john",permalink:"/Cybernotes/blog/tags/ssh-2-john"},{label:"nano",permalink:"/Cybernotes/blog/tags/nano"}],readingTime:2.56,truncated:!0,authors:[{name:"0xSH1V4M",title:"Author",url:"https://github.com/shivam1317",imageURL:"https://avatars.githubusercontent.com/u/70281451?v=4",key:"shivam"}],frontMatter:{slug:"openadmin",title:"HTB OpenAdmin writeup",image:"/img/HTB/openadmin.png",authors:["shivam"],tags:["openadmin","rce","ssh2john","nano"]},prevItem:{title:"THM Gamingserver writeup",permalink:"/Cybernotes/blog/gamingserver"},nextItem:{title:"THM Road writeup",permalink:"/Cybernotes/blog/road"}},s={authorsImageUrls:[void 0]},l=[],m={toc:l};function f(e){var n=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,c,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(86608).Z,width:"1155",height:"635"})))}f.isMDXComponent=!0},86608:function(e,n,t){n.Z=t.p+"assets/images/openadmin-34ce8055c962e2c065c6916ba4a5004d.png"}}]);