"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[7565],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=i,f=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4569:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={},s=void 0,u={unversionedId:"portswigger/SSRF/Blind SSRF",id:"portswigger/SSRF/Blind SSRF",title:"Blind SSRF",description:"What is blind SSRF?",source:"@site/docs/portswigger/SSRF/Blind SSRF.md",sourceDirName:"portswigger/SSRF",slug:"/portswigger/SSRF/Blind SSRF",permalink:"/Cybernotes/docs/portswigger/SSRF/Blind SSRF",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Time based SQLi",permalink:"/Cybernotes/docs/portswigger/Sql-injection/Time based sqli"},next:{title:"Bypassing-SSRF-filters-via-open-redirection",permalink:"/Cybernotes/docs/portswigger/SSRF/Bypassing-SSRF-filters-via-open-redirection"}},c=[{value:"What is blind SSRF?",id:"what-is-blind-ssrf",children:[],level:2},{value:"What is the impact of blind SSRF vulnerabilities?",id:"what-is-the-impact-of-blind-ssrf-vulnerabilities",children:[],level:2},{value:"How to find and exploit blind SSRF vulnerabilities",id:"how-to-find-and-exploit-blind-ssrf-vulnerabilities",children:[],level:2},{value:"Challenge",id:"challenge",children:[],level:2}],p={toc:c};function d(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-blind-ssrf"},"What is blind SSRF?"),(0,o.kt)("p",null,"Blind SSRF vulnerabilities arise when an application can be induced to issue a back-end HTTP request to a supplied URL, but the response from the back-end request is not returned in the application's front-end response."),(0,o.kt)("h2",{id:"what-is-the-impact-of-blind-ssrf-vulnerabilities"},"What is the impact of blind SSRF vulnerabilities?"),(0,o.kt)("p",null,"The impact of blind SSRF vulnerabilities is often lower than fully informed SSRF vulnerabilities because of their one-way nature. They cannot be trivially exploited to retrieve sensitive data from back-end systems, although in some situations they can be exploited to achieve full remote code execution."),(0,o.kt)("h2",{id:"how-to-find-and-exploit-blind-ssrf-vulnerabilities"},"How to find and exploit blind SSRF vulnerabilities"),(0,o.kt)("p",null,"The most reliable way to detect blind SSRF vulnerabilities is using out-of-band (",(0,o.kt)("a",{parentName:"p",href:"https://portswigger.net/burp/application-security-testing/oast"},"OAST"),") techniques. This involves attempting to trigger an HTTP request to an external system that you control, and monitoring for network interactions with that system."),(0,o.kt)("p",null,"The easiest and most effective way to use out-of-band techniques is using ",(0,o.kt)("a",{parentName:"p",href:"https://portswigger.net/burp/documentation/collaborator"},"Burp Collaborator"),". You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://portswigger.net/burp/documentation/desktop/tools/collaborator-client"},"Burp Collaborator client")," to generate unique domain names, send these in payloads to the application, and monitor for any interaction with those domains. If an incoming HTTP request is observed coming from the application, then it is vulnerable to SSRF."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It is common when testing for SSRF vulnerabilities to observe a DNS look-up for the supplied Collaborator domain, but no subsequent HTTP request. This typically happens because the application attempted to make an HTTP request to the domain, which caused the initial DNS lookup, but the actual HTTP request was blocked by network-level filtering. It is relatively common for infrastructure to allow outbound DNS traffic, since this is needed for so many purposes, but block HTTP connections to unexpected destinations.")),(0,o.kt)("h2",{id:"challenge"},"Challenge"),(0,o.kt)("p",null,"--\x3e In this lab we have to do DNS lookup with burp collaborator in ",(0,o.kt)("inlineCode",{parentName:"p"},"referrer")," header while fetching the product."),(0,o.kt)("p",null,"So i intercepted the product request and changed the ",(0,o.kt)("inlineCode",{parentName:"p"},"referrer")," header with my burp collaborator's server link."),(0,o.kt)("p",null,"Example link:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://e8nuiexucuqxps7atdlb90qympsgg5.burpcollaborator.net\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8212).Z,width:"1869",height:"835"})),(0,o.kt)("p",null,"--\x3e And after that click ",(0,o.kt)("inlineCode",{parentName:"p"},"poll now")," and you will get DNS lookup perfromed on your domain!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2444).Z,width:"1399",height:"931"})),(0,o.kt)("p",null,"And we solved the lab!"))}d.isMDXComponent=!0},2444:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220222114813-1d897ed7cd569a5ac3bea84f6a7034c7.png"},8212:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220222114935-43b8497b0514a11370eedce8a8df323d.png"}}]);