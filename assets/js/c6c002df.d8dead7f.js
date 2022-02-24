"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[2275],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2425:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={},u=void 0,l={unversionedId:"portswigger/Command-Injection/Lab-3 output redirection",id:"portswigger/Command-Injection/Lab-3 output redirection",title:"Lab-3 output redirection",description:"--\x3e same vulnearbilty as Lab-2 but this time we have to find the username by redirecting the output in one of the file in server which we can do with > operator in linux.",source:"@site/docs/portswigger/Command-Injection/Lab-3 output redirection.md",sourceDirName:"portswigger/Command-Injection",slug:"/portswigger/Command-Injection/Lab-3 output redirection",permalink:"/Cybernotes/docs/portswigger/Command-Injection/Lab-3 output redirection",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portswigger/Command-Injection/Lab-3 output redirection.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab-2 blind command injection with time delay",permalink:"/Cybernotes/docs/portswigger/Command-Injection/Lab-2 blind command injection with time delay"},next:{title:"Lab-4 OAST with nslookup",permalink:"/Cybernotes/docs/portswigger/Command-Injection/Lab-4 OAST with nslookup"}},s=[],p={toc:s};function d(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"--\x3e same vulnearbilty as Lab-2 but this time we have to find the username by redirecting the output in one of the file in server which we can do with ",(0,o.kt)("inlineCode",{parentName:"p"},">")," operator in linux."),(0,o.kt)("p",null,"we have write permissions in ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/www/images")," so we will redirect our output here."),(0,o.kt)("p",null,"--\x3e i used the following payload in message field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," & whoami > /var/www/images/test.txt &\n #After url encode\n +%26+whoami+>+/var/www/images/test.txt+%26\n")),(0,o.kt)("p",null,"--\x3e But it didn't worked so i tried it in different fields and it worked in ",(0,o.kt)("inlineCode",{parentName:"p"},"subject")," field"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(166).Z,width:"1647",height:"641"})),(0,o.kt)("p",null,"--\x3e Now to find the file which got created click on any image from cataglogue and select ",(0,o.kt)("inlineCode",{parentName:"p"},"view image")," and you will find the url like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/image?filename=6.jpg\n")),(0,o.kt)("p",null,"I just change the filename with ",(0,o.kt)("inlineCode",{parentName:"p"},"test.txt")," and solved the lab!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4314).Z,width:"1567",height:"785"})))}d.isMDXComponent=!0},4314:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220120122231-8b5788827e1dd9d0ae3b61dbf57add87.png"},166:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220120122548-67f98cfd0f4daac565564df002bc3f2b.png"}}]);