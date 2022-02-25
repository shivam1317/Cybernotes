"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[6101],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,g=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5257:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={tags:["2FA"]},c=void 0,l={unversionedId:"portswigger/Authentication/Bypassing-2FA",id:"portswigger/Authentication/Bypassing-2FA",title:"Bypassing-2FA",description:"Bypassing two-factor authentication",source:"@site/docs/portswigger/Authentication/Bypassing-2FA.md",sourceDirName:"portswigger/Authentication",slug:"/portswigger/Authentication/Bypassing-2FA",permalink:"/Cybernotes/docs/portswigger/Authentication/Bypassing-2FA",tags:[{label:"2FA",permalink:"/Cybernotes/docs/tags/2-fa"}],version:"current",frontMatter:{tags:["2FA"]},sidebar:"tutorialSidebar",previous:{title:"Brute-force attacks",permalink:"/Cybernotes/docs/portswigger/Authentication/Brute-force attacks"},next:{title:"Changing-user-passwords",permalink:"/Cybernotes/docs/portswigger/Authentication/Changing-user-passwords"}},p=[{value:"Bypassing two-factor authentication",id:"bypassing-two-factor-authentication",children:[],level:2},{value:"lab 2FA simple bypass",id:"lab-2fa-simple-bypass",children:[],level:2},{value:"Brute-forcing 2FA verification codes",id:"brute-forcing-2fa-verification-codes",children:[],level:2},{value:"Lab: 2FA bypass using a brute-force attack",id:"lab-2fa-bypass-using-a-brute-force-attack",children:[],level:2}],u={toc:p};function d(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"bypassing-two-factor-authentication"},"Bypassing two-factor authentication"),(0,o.kt)("p",null,"At times, the implementation of two-factor authentication is flawed to the point where it can be bypassed entirely."),(0,o.kt)("p",null,'If the user is first prompted to enter a password, and then prompted to enter a verification code on a separate page, the user is effectively in a "logged in" state before they have entered the verification code. In this case, it is worth testing to see if you can directly skip to "logged-in only" pages after completing the first authentication step. Occasionally, you will find that a website doesn\'t actually check whether or not you completed the second step before loading the page.'),(0,o.kt)("h2",{id:"lab-2fa-simple-bypass"},"lab 2FA simple bypass"),(0,o.kt)("p",null,"--\x3e This lab's two-factor authentication can be bypassed. You have already obtained a valid username and password, but do not have access to the user's 2FA verification code. To solve the lab, access Carlos's account page."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your credentials: ",(0,o.kt)("inlineCode",{parentName:"li"},"wiener:peter")),(0,o.kt)("li",{parentName:"ul"},"Victim's credentials ",(0,o.kt)("inlineCode",{parentName:"li"},"carlos:montoya"))),(0,o.kt)("p",null,"I logged in using my creds and 2FA code and after that i found that it was redirecting me to ",(0,o.kt)("inlineCode",{parentName:"p"},"/my-account")," page so i took note of that route and then i logged out. N"),(0,o.kt)("p",null,"Now we will try to login as ",(0,o.kt)("inlineCode",{parentName:"p"},"carlos")),(0,o.kt)("p",null,"--\x3e After login when it asked for 2FA code i just replaced the url with the one which i copied and i solved the lab!"),(0,o.kt)("p",null,"And here we have skipped the second verification step!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4112).Z,width:"1365",height:"427"})),(0,o.kt)("h2",{id:"brute-forcing-2fa-verification-codes"},"Brute-forcing 2FA verification codes"),(0,o.kt)("p",null,"As with passwords, websites need to take steps to prevent brute-forcing of the 2FA verification code. This is especially important because the code is often a simple 4 or 6-digit number. Without adequate brute-force protection, cracking such a code is trivial."),(0,o.kt)("p",null,"Some websites attempt to prevent this by automatically logging a user out if they enter a certain number of incorrect verification codes. This is ineffective in practice because an advanced attacker can even automate this multi-step process by ",(0,o.kt)("a",{parentName:"p",href:"https://portswigger.net/burp/documentation/desktop/options/sessions#macros"},"creating macros")," for Burp Intruder. The ",(0,o.kt)("a",{parentName:"p",href:"https://portswigger.net/bappstore/9abaa233088242e8be252cd4ff534988"},"Turbo Intruder")," extension can also be used for this purpose."),(0,o.kt)("h2",{id:"lab-2fa-bypass-using-a-brute-force-attack"},"Lab: 2FA bypass using a brute-force attack"),(0,o.kt)("p",null,"This lab's two-factor authentication is vulnerable to brute-forcing. You have already obtained a valid username and password, but do not have access to the user's 2FA verification code. To solve the lab, brute-force the 2FA code and access Carlos's account page."),(0,o.kt)("p",null,"Victim's credentials: ",(0,o.kt)("inlineCode",{parentName:"p"},"carlos:montoya")),(0,o.kt)("p",null,"--\x3e So In this lab the website is logging out the user after some failed login attempts so we have to make a macro and session handling rule which makes the burp to login again whenever the user gets logged out."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"First we will follow the good path and store all the request in HTTP history")),(0,o.kt)("p",null,"So we will start by creating a macro. So to create a macro goto ",(0,o.kt)("inlineCode",{parentName:"p"},"project options -> session -> macro -> click add"),". it will open the macro recorder in which you can find all the request which you made so select the following requests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /login\nPOST /login\nGET /login2\n")),(0,o.kt)("p",null,"--\x3e After selecting the requests you will be in macro editor. You have to order them as given below:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7346).Z,width:"1809",height:"825"})),(0,o.kt)("p",null,"--\x3e Now we will add the session handling rule. To add it goto ",(0,o.kt)("inlineCode",{parentName:"p"},"project options -> session -> session handling rules -> click add")),(0,o.kt)("p",null,"In rule actions tab, click add and select ",(0,o.kt)("inlineCode",{parentName:"p"},"run a micro")," and after that select the micro which we made."),(0,o.kt)("p",null,"Click ok\n",(0,o.kt)("img",{src:n(7623).Z,width:"1325",height:"917"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7203).Z,width:"1323",height:"917"})),(0,o.kt)("p",null,"--\x3e Now goto ",(0,o.kt)("inlineCode",{parentName:"p"},"scope")," tab and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Include all URLs")," as shown in the image"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1445).Z,width:"1323",height:"705"})),(0,o.kt)("p",null,"--\x3e Click ",(0,o.kt)("inlineCode",{parentName:"p"},"ok")," and you have made the rule!"),(0,o.kt)("p",null,"Now click ",(0,o.kt)("inlineCode",{parentName:"p"},"up")," button to give it more priority"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8510).Z,width:"1281",height:"309"})),(0,o.kt)("p",null,"--\x3e Now find the request with ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /login2")," and send it to intruder and now we have to brute force the 2FA code so just select it and add ",(0,o.kt)("inlineCode",{parentName:"p"},"\xa7")," and then goto payloads and select ",(0,o.kt)("inlineCode",{parentName:"p"},"numbers")," and set the values as shown below:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8401).Z,width:"953",height:"785"})),(0,o.kt)("p",null,"--\x3e After that goto resource pool and set the maximum concurrent request to ",(0,o.kt)("strong",{parentName:"p"},"1"),"\n",(0,o.kt)("img",{src:n(2711).Z,width:"707",height:"263"})),(0,o.kt)("p",null,"And then start the attack!"),(0,o.kt)("p",null,"--\x3e And after half an hour i found one status code ",(0,o.kt)("inlineCode",{parentName:"p"},"302")," that means we found the correct otp!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1788).Z,width:"1109",height:"347"})),(0,o.kt)("p",null,"--\x3e And after selecting ",(0,o.kt)("inlineCode",{parentName:"p"},"show response in browser")," i solved the lab!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3493).Z,width:"1311",height:"275"})))}d.isMDXComponent=!0},4112:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220203131027-1d50921e254b760a20cc7ed16674b0fa.png"},7346:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220203140523-562cb6e11e9a0f1236cb98eb270dcca8.png"},7623:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220203140736-c387cde62a483f754291318a85a4d29a.png"},7203:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220203140751-1d001c3c49f50455a7a2c9e81ee18b0a.png"},1445:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220203140856-ad94b4653c1b83c7fee7d04ab39369d7.png"},8510:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220203140926-c7978f3cfed1a9b2f2a9be3f0eb52362.png"},8401:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220203141141-5202d2c30bf92f31d3480de4828b3c8f.png"},2711:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220203141201-20bfe526155a59e4ed5536daa4f0eba8.png"},1788:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220204120050-115a9c39ab4b09e1e296ad19bcb6daf6.png"},3493:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220204120419-5a4abab9238906ed873de4b15ad8899d.png"}}]);