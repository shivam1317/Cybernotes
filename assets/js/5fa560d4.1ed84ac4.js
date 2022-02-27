"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[5677],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=u(n),m=a,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},67147:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={slug:"sar-1",title:"Vulnhub SAR-1 writeup",description:"SAR-1 machine writeup from Vulnhub",authors:["shivam"],image:"/img/Vulnhub/SAR-1.png",tags:["RCE","crontab"]},s=void 0,u={permalink:"/Cybernotes/blog/sar-1",source:"@site/blog/2022-02-27-sar1/index.md",title:"Vulnhub SAR-1 writeup",description:"SAR-1 machine writeup from Vulnhub",date:"2022-02-27T00:00:00.000Z",formattedDate:"February 27, 2022",tags:[{label:"RCE",permalink:"/Cybernotes/blog/tags/rce"},{label:"crontab",permalink:"/Cybernotes/blog/tags/crontab"}],readingTime:1.21,truncated:!0,authors:[{name:"0xSH1V4M",title:"Author",url:"https://github.com/shivam1317",imageURL:"https://avatars.githubusercontent.com/u/70281451?v=4",key:"shivam"}],frontMatter:{slug:"sar-1",title:"Vulnhub SAR-1 writeup",description:"SAR-1 machine writeup from Vulnhub",authors:["shivam"],image:"/img/Vulnhub/SAR-1.png",tags:["RCE","crontab"]},prevItem:{title:"THM Bounty Hacker",permalink:"/Cybernotes/blog/bounty-hacker"},nextItem:{title:"Vulnhub troll-1 writeup",permalink:"/Cybernotes/blog/troll-1"}},c={authorsImageUrls:[void 0]},p=[{value:"basic Enumration",id:"basic-enumration",children:[],level:2},{value:"sar2HTML",id:"sar2html",children:[],level:2},{value:"privesc",id:"privesc",children:[],level:2}],h={toc:p};function m(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hello everyone,"),(0,i.kt)("p",null,"Today we are going to solve SAR-1 machine from vulnhub. we will learn about sar2HTML RCE and crontabs."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(31194).Z,width:"1024",height:"355"})),(0,i.kt)("h2",{id:"basic-enumration"},"basic Enumration"),(0,i.kt)("p",null,"--\x3e nmap results:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"PORT STATE SERVICE VERSION\n80/tcp open http Apache httpd 2.4.29 ((Ubuntu))\n|\\_http-server-header: Apache/2.4.29 (Ubuntu)\n|\\_http-title: Apache2 Ubuntu Default Page: It works\nMAC Address: 08:00:27:C8:DD:67 (Oracle VirtualBox virtual NIC)\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"--\x3e gobuster results:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[08:18:06] 200 - 11KB - /index.html\n[08:18:11] 200 - 94KB - /phpinfo.php\n[08:18:14] 200 - 9B - /robots.txt\n[08:18:15] 403 - 274B - /server-status\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"=> got this in robots.txt"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sar2HTML\n")),(0,i.kt)("h2",{id:"sar2html"},"sar2HTML"),(0,i.kt)("p",null,"--\x3e got this in ",(0,i.kt)("a",{parentName:"p",href:"http://10.0.2.16/sar2HTML"},"http://10.0.2.16/sar2HTML")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(42405).Z,width:"1675",height:"831"})),(0,i.kt)("p",null,"--\x3e searched for sar2HTML 3.2.1 version exploit and got this :"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3627).Z,width:"1127",height:"659"})),(0,i.kt)("p",null,"--\x3e used exploit and got remote code execution as ",(0,i.kt)("em",{parentName:"p"},"www-data")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(39376).Z,width:"795",height:"323"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,"==> got reverse shell using python3 payload"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(11629).Z,width:"1709",height:"631"})),(0,i.kt)("p",null,"--\x3e got user.txt in ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/love/Desktop/user.txt")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(59642).Z,width:"743",height:"317"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"privesc"},"privesc"),(0,i.kt)("p",null,"--\x3e found one cronjob which is running as a root at every 5 minutes of interval"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(67212).Z,width:"921",height:"95"})),(0,i.kt)("p",null,"==> so Let's try to change this file and try to get reverse shell !"),(0,i.kt)("p",null,"--\x3e i also found crontabs as a vulnrable so now i am 100% sure it's crontab exploitation!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(66619).Z,width:"659",height:"279"})),(0,i.kt)("p",null,"--\x3e finally.sh file is executing another file which is write.sh"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(84565).Z,width:"919",height:"461"})),(0,i.kt)("p",null,"--\x3e so Let's read that file !"),(0,i.kt)("p",null,"--\x3e and i added netcat mkfifo reverse shell into it and after 5 minutes i got reverse shell as root !"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8734).Z,width:"1053",height:"727"})),(0,i.kt)("p",null,"---\x3e and we pwned the machine!"))}m.isMDXComponent=!0},42405:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210702082406-cc849063db8616b964bb24dd05b70372.png"},3627:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210702082553-a4b9ecfcc56cdfb5a1882e321be58ba7.png"},39376:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210702082943-4f3f244ec26aab01ab9a83056d15c1a9.png"},11629:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210702083137-5bf390aebb40b37f965339b3ecf48a35.png"},59642:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210702083502-062a5d4ee2d9241ed85a115def3dd357.png"},67212:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210702084459-e5890a6fb22b9f669cdc7b8dea41ed0c.png"},66619:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210702085258-0e1a6dae636b4c7f0cf7da3502e8cb83.png"},84565:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210702085645-3840a3dfe1e2457c1f0849ce1ec8accb.png"},8734:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210702090247-170e6c7d81c58a739ec3a3c20e0da5d2.png"},31194:function(e,t,n){t.Z=n.p+"assets/images/SAR-1-d88212031bd58a40f9da43b88930f416.png"}}]);