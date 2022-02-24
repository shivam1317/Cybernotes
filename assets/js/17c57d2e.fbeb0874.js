"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[6539],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6702:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={},c=void 0,l={unversionedId:"portswigger/Information-disclosure/Lab-5 Version-control-history",id:"portswigger/Information-disclosure/Lab-5 Version-control-history",title:"Lab-5 Version-control-history",description:"Version control history",source:"@site/docs/portswigger/Information-disclosure/Lab-5 Version-control-history.md",sourceDirName:"portswigger/Information-disclosure",slug:"/portswigger/Information-disclosure/Lab-5 Version-control-history",permalink:"/Cybernotes/docs/portswigger/Information-disclosure/Lab-5 Version-control-history",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portswigger/Information-disclosure/Lab-5 Version-control-history.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab-4 insecure-configuration",permalink:"/Cybernotes/docs/portswigger/Information-disclosure/Lab-4 insecure-configuration"},next:{title:"Blind Sqli with out-of-band interaction",permalink:"/Cybernotes/docs/portswigger/Sql-injection/Blind Sqli with out-of-band interaction"}},u=[{value:"Version control history",id:"version-control-history",children:[],level:3},{value:"Challenge",id:"challenge",children:[],level:2}],d={toc:u};function p(e){var t=e.components,s=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"version-control-history"},"Version control history"),(0,i.kt)("p",null,"Virtually all websites are developed using some form of version control system, such as Git. By default, a Git project stores all of its version control data in a folder called ",(0,i.kt)("inlineCode",{parentName:"p"},".git"),". Occasionally, websites expose this directory in the production environment. In this case, you might be able to access it by simply browsing to ",(0,i.kt)("inlineCode",{parentName:"p"},"/.git"),"."),(0,i.kt)("p",null,"While it is often impractical to manually browse the raw file structure and contents, there are various methods for downloading the entire ",(0,i.kt)("inlineCode",{parentName:"p"},".git")," directory. You can then open it using your local installation of Git to gain access to the website's version control history. This may include logs containing committed changes and other interesting information."),(0,i.kt)("p",null,"This might not give you access to the full source code, but comparing the diff will allow you to read small snippets of code. As with any source code, you might also find sensitive data hard-coded within some of the changed lines."),(0,i.kt)("h2",{id:"challenge"},"Challenge"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This lab discloses sensitive information via its version control history. To solve the lab, obtain the password for the ",(0,i.kt)("inlineCode",{parentName:"p"},"administrator")," user then log in and delete Carlos's account.")),(0,i.kt)("p",null,"--\x3e I Found this in ",(0,i.kt)("inlineCode",{parentName:"p"},".git")," directory of website"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7966).Z,width:"1305",height:"557"})),(0,i.kt)("p",null,"Then i enumrated these folders and found this in ",(0,i.kt)("inlineCode",{parentName:"p"},"logs"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3088).Z,width:"1579",height:"373"})),(0,i.kt)("p",null,"So i searched for how to get previous commits from ",(0,i.kt)("inlineCode",{parentName:"p"},".git")," folder and i found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/internetwache/GitTools"},"this")," tool in which we can dump all the folders at one time !"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/internetwache/GitTools.git\ncd Dumper\n./gitdumper.sh https://acc31fc91fffc025c0222ac6001e0060.web-security-academy.net/.git/ test\n#Usage ./gitdumper.sh <url> <destination_folder>\n")),(0,i.kt)("p",null,"--\x3e Now we have ",(0,i.kt)("inlineCode",{parentName:"p"},".git")," folder so we can run git commands on it !"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git status\ngit restore .\n")),(0,i.kt)("p",null,"--\x3e we can see that there are 2 files are modified !"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5876).Z,width:"1205",height:"349"})),(0,i.kt)("p",null,"--\x3e After that i done ",(0,i.kt)("inlineCode",{parentName:"p"},"git log")," to find the commit-id for commits and i found 2 commits"),(0,i.kt)("p",null,"we can get the previous commits with the ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout")," commands but for that we need the ",(0,i.kt)("inlineCode",{parentName:"p"},"commit-id")," which we can get from ",(0,i.kt)("inlineCode",{parentName:"p"},"git log")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9522).Z,width:"1147",height:"341"})),(0,i.kt)("p",null,"--\x3e I found nothing from first commit so i tried with second commit and found the password !"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6262).Z,width:"1309",height:"557"})))}p.isMDXComponent=!0},5876:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220123141103-ffeeba3000b8535e5ff2237007037a82.png"},9522:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220123141151-cccb0ac0bdf745011df5c335a1d766d7.png"},6262:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220123141339-f55a495e52ee72fc9b919e45bb1a5047.png"},7966:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220123141709-0d8bbf5f9d20d356a86316895a4023e9.png"},3088:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220123141843-afa9f9ba8f0b47533c8a49f1b785d03e.png"}}]);