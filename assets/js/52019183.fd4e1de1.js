"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[8447],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),h=i,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6651:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],p={tags:["open redirect"],image:"img/Portswigger/SSRF.png"},l=void 0,s={unversionedId:"portswigger/SSRF/Bypassing-SSRF-filters-via-open-redirection",id:"portswigger/SSRF/Bypassing-SSRF-filters-via-open-redirection",title:"Bypassing-SSRF-filters-via-open-redirection",description:"Bypassing SSRF filters via open redirection",source:"@site/docs/portswigger/SSRF/Bypassing-SSRF-filters-via-open-redirection.md",sourceDirName:"portswigger/SSRF",slug:"/portswigger/SSRF/Bypassing-SSRF-filters-via-open-redirection",permalink:"/Cybernotes/docs/portswigger/SSRF/Bypassing-SSRF-filters-via-open-redirection",tags:[{label:"open redirect",permalink:"/Cybernotes/docs/tags/open-redirect"}],version:"current",frontMatter:{tags:["open redirect"],image:"img/Portswigger/SSRF.png"},sidebar:"tutorialSidebar",previous:{title:"Blind SSRF",permalink:"/Cybernotes/docs/portswigger/SSRF/Blind SSRF"},next:{title:"Intro",permalink:"/Cybernotes/docs/portswigger/SSRF/Intro"}},c=[{value:"Bypassing SSRF filters via open redirection",id:"bypassing-ssrf-filters-via-open-redirection",children:[],level:2},{value:"Challenge",id:"challenge",children:[],level:2}],d={toc:c};function u(e){var t=e.components,p=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"bypassing-ssrf-filters-via-open-redirection"},"Bypassing SSRF filters via open redirection"),(0,o.kt)("p",null,"It is sometimes possible to circumvent any kind of filter-based defenses by exploiting an open redirection vulnerability."),(0,o.kt)("p",null,"In the preceding SSRF example, suppose the user-submitted URL is strictly validated to prevent malicious exploitation of the SSRF behavior. However, the application whose URLs are allowed contains an open redirection vulnerability. Provided the API used to make the back-end HTTP request supports redirections, you can construct a URL that satisfies the filter and results in a redirected request to the desired back-end target."),(0,o.kt)("p",null,"For example, suppose the application contains an open redirection vulnerability in which the following URL:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/product/nextProduct?currentProductId=6&path=http://evil-user.net")),(0,o.kt)("p",null,"returns a redirection to:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"http://evil-user.net")),(0,o.kt)("p",null,"You can leverage the open redirection vulnerability to bypass the URL filter, and exploit the SSRF vulnerability as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST /product/stock HTTP/1.0\nContent-Type: application/x-www-form-urlencoded Content-Length: 118 stockApi=http://weliketoshop.net/product/nextProduct?currentProductId=6&path=http://192.168.0.68/admin\n")),(0,o.kt)("p",null,"This SSRF exploit works because the application first validates that the supplied ",(0,o.kt)("inlineCode",{parentName:"p"},"stockAPI")," URL is on an allowed domain, which it is. The application then requests the supplied URL, which triggers the open redirection. It follows the redirection, and makes a request to the internal URL of the attacker's choosing."),(0,o.kt)("h2",{id:"challenge"},"Challenge"),(0,o.kt)("p",null,"--\x3e In this challenge we have to find the open redirection vulnerability and escalate it to SSRF"),(0,o.kt)("p",null,"We have ip address given which is ",(0,o.kt)("inlineCode",{parentName:"p"},"http://192.168.0.12:8080/admin")),(0,o.kt)("p",null,"--\x3e i was playing with ",(0,o.kt)("inlineCode",{parentName:"p"},"stockApi")," but i was unable to find the open redirect and after some time i decided to see other requests And i found that when we click on ",(0,o.kt)("inlineCode",{parentName:"p"},"next post")," the request looks like this :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /product/nextProduct?currentProductId=2&path=/product?productId=3\n")),(0,o.kt)("p",null,"Here we have ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," parameter in which i tried to write ",(0,o.kt)("inlineCode",{parentName:"p"},"https://google.com")," and boom i got the open redirect!"),(0,o.kt)("p",null,"--\x3e After that i tried to change it with ",(0,o.kt)("inlineCode",{parentName:"p"},"http://192.168.0.12:8080/admin")," but the page was keep loading so that means it can't find the page!"),(0,o.kt)("p",null,"So after that i tried to put something like this in ",(0,o.kt)("inlineCode",{parentName:"p"},"stockApi")," value and encoded it with url encode."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/product/nextProduct?currentProductId=2&path=http://192.168.0.12:8080/admin/delete?username=carlos\n")),(0,o.kt)("p",null,"So final request looks like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4630).Z,width:"1491",height:"721"})),(0,o.kt)("p",null,"And we solved the lab!"))}u.isMDXComponent=!0},4630:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220220133813-9a5494aef2dd66bfa36931fd69e4a0e5.png"}}]);