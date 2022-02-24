"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[5216],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3359:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={},u=void 0,c={unversionedId:"portswigger/Information-disclosure/Lab-4 insecure-configuration",id:"portswigger/Information-disclosure/Lab-4 insecure-configuration",title:"Lab-4 insecure-configuration",description:"Information disclosure due to insecure configuration",source:"@site/docs/portswigger/Information-disclosure/Lab-4 insecure-configuration.md",sourceDirName:"portswigger/Information-disclosure",slug:"/portswigger/Information-disclosure/Lab-4 insecure-configuration",permalink:"/Cybernotes/docs/portswigger/Information-disclosure/Lab-4 insecure-configuration",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portswigger/Information-disclosure/Lab-4 insecure-configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab-3 Backup-files",permalink:"/Cybernotes/docs/portswigger/Information-disclosure/Lab-3 Backup-files"},next:{title:"Lab-5 Version-control-history",permalink:"/Cybernotes/docs/portswigger/Information-disclosure/Lab-5 Version-control-history"}},l=[{value:"Information disclosure due to insecure configuration",id:"information-disclosure-due-to-insecure-configuration",children:[],level:3},{value:"Challenge",id:"challenge",children:[],level:2}],d={toc:l};function p(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"information-disclosure-due-to-insecure-configuration"},"Information disclosure due to insecure configuration"),(0,i.kt)("p",null,"Websites are sometimes vulnerable as a result of improper configuration. This is especially common due to the widespread use of third-party technologies, whose vast array of configuration options are not necessarily well-understood by those implementing them."),(0,i.kt)("p",null,"In other cases, developers might forget to disable various debugging options in the production environment. For example, the HTTP ",(0,i.kt)("inlineCode",{parentName:"p"},"TRACE")," method is designed for diagnostic purposes. If enabled, the web server will respond to requests that use the ",(0,i.kt)("inlineCode",{parentName:"p"},"TRACE")," method by echoing in the response the exact request that was received. This behavior is often harmless, but occasionally leads to information disclosure, such as the name of internal authentication headers that may be appended to requests by reverse proxies."),(0,i.kt)("h2",{id:"challenge"},"Challenge"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This lab's administration interface has an authentication bypass vulnerability, but it is impractical to exploit without knowledge of a custom HTTP header used by the front-end.\nTo solve the lab, obtain the header name then use it to bypass the lab's authentication. Access the admin interface and delete Carlos's account.\nYou can log in to your own account using the following credentials: ",(0,i.kt)("inlineCode",{parentName:"p"},"wiener:peter"))),(0,i.kt)("p",null,"--\x3e I ran gobuster on it to find the hidden directories and found one directory called ",(0,i.kt)("inlineCode",{parentName:"p"},"/admin")," in which i found this !"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Admin interface only available to local users\n")),(0,i.kt)("p",null,"--\x3e I tried ",(0,i.kt)("inlineCode",{parentName:"p"},"TRACE")," method on /admin and i found this respose in which i found this header"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"X-Custom-IP-Authorization\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(847).Z,width:"1775",height:"673"})),(0,i.kt)("p",null,"--\x3e So this page says it's only available to local users so i added this header in ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request on ",(0,i.kt)("inlineCode",{parentName:"p"},"/admin")," and i found the admin panel."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"X-Custom-IP-Authorization : 127.0.0.1\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3678).Z,width:"1920",height:"825"})),(0,i.kt)("p",null,"--\x3e Then you will see 2 users here , i have deleted ",(0,i.kt)("inlineCode",{parentName:"p"},"carlos")," already that's why you are seeing only one account but in your case you will see 2 accounts."),(0,i.kt)("p",null,"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," and intercept it also!"),(0,i.kt)("p",null,"And there also you have to add the header ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Custom-IP-Authorization:127.0.0.1")),(0,i.kt)("p",null,"And you deleted the acoount !"))}p.isMDXComponent=!0},847:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220123125744-74a88f7a64adae761d75d7494061e7ac.png"},3678:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220123125834-e11bf0a841ae82355e32607f579f970f.png"}}]);