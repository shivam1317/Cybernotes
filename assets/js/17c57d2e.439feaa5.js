"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[6539],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(g,a(a({ref:t},u),{},{components:n})):o.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6702:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],s={tags:["github","git","gitTools"]},l=void 0,c={unversionedId:"portswigger/Information-disclosure/Lab-5 Version-control-history",id:"portswigger/Information-disclosure/Lab-5 Version-control-history",title:"Lab-5 Version-control-history",description:"Version control history",source:"@site/docs/portswigger/Information-disclosure/Lab-5 Version-control-history.md",sourceDirName:"portswigger/Information-disclosure",slug:"/portswigger/Information-disclosure/Lab-5 Version-control-history",permalink:"/Cybernotes/docs/portswigger/Information-disclosure/Lab-5 Version-control-history",tags:[{label:"github",permalink:"/Cybernotes/docs/tags/github"},{label:"git",permalink:"/Cybernotes/docs/tags/git"},{label:"gitTools",permalink:"/Cybernotes/docs/tags/git-tools"}],version:"current",frontMatter:{tags:["github","git","gitTools"]},sidebar:"tutorialSidebar",previous:{title:"Lab-4 insecure-configuration",permalink:"/Cybernotes/docs/portswigger/Information-disclosure/Lab-4 insecure-configuration"},next:{title:"Blind Sqli with out-of-band interaction",permalink:"/Cybernotes/docs/portswigger/Sql-injection/Blind Sqli with out-of-band interaction"}},u=[{value:"Version control history",id:"version-control-history",children:[],level:3},{value:"Challenge",id:"challenge",children:[],level:2}],d={toc:u};function p(e){var t=e.components,s=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"version-control-history"},"Version control history"),(0,r.kt)("p",null,"Virtually all websites are developed using some form of version control system, such as Git. By default, a Git project stores all of its version control data in a folder called ",(0,r.kt)("inlineCode",{parentName:"p"},".git"),". Occasionally, websites expose this directory in the production environment. In this case, you might be able to access it by simply browsing to ",(0,r.kt)("inlineCode",{parentName:"p"},"/.git"),"."),(0,r.kt)("p",null,"While it is often impractical to manually browse the raw file structure and contents, there are various methods for downloading the entire ",(0,r.kt)("inlineCode",{parentName:"p"},".git")," directory. You can then open it using your local installation of Git to gain access to the website's version control history. This may include logs containing committed changes and other interesting information."),(0,r.kt)("p",null,"This might not give you access to the full source code, but comparing the diff will allow you to read small snippets of code. As with any source code, you might also find sensitive data hard-coded within some of the changed lines."),(0,r.kt)("h2",{id:"challenge"},"Challenge"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This lab discloses sensitive information via its version control history. To solve the lab, obtain the password for the ",(0,r.kt)("inlineCode",{parentName:"p"},"administrator")," user then log in and delete Carlos's account.")),(0,r.kt)("p",null,"--\x3e I Found this in ",(0,r.kt)("inlineCode",{parentName:"p"},".git")," directory of website"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7966).Z,width:"1305",height:"557"})),(0,r.kt)("p",null,"Then i enumrated these folders and found this in ",(0,r.kt)("inlineCode",{parentName:"p"},"logs"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3088).Z,width:"1579",height:"373"})),(0,r.kt)("p",null,"So i searched for how to get previous commits from ",(0,r.kt)("inlineCode",{parentName:"p"},".git")," folder and i found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/internetwache/GitTools"},"this")," tool in which we can dump all the folders at one time !"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/internetwache/GitTools.git\ncd Dumper\n./gitdumper.sh https://acc31fc91fffc025c0222ac6001e0060.web-security-academy.net/.git/ test\n#Usage ./gitdumper.sh <url> <destination_folder>\n")),(0,r.kt)("p",null,"--\x3e Now we have ",(0,r.kt)("inlineCode",{parentName:"p"},".git")," folder so we can run git commands on it !"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git status\ngit restore .\n")),(0,r.kt)("p",null,"--\x3e we can see that there are 2 files are modified !"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5876).Z,width:"1205",height:"349"})),(0,r.kt)("p",null,"--\x3e After that i done ",(0,r.kt)("inlineCode",{parentName:"p"},"git log")," to find the commit-id for commits and i found 2 commits"),(0,r.kt)("p",null,"we can get the previous commits with the ",(0,r.kt)("inlineCode",{parentName:"p"},"git checkout")," commands but for that we need the ",(0,r.kt)("inlineCode",{parentName:"p"},"commit-id")," which we can get from ",(0,r.kt)("inlineCode",{parentName:"p"},"git log")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9522).Z,width:"1147",height:"341"})),(0,r.kt)("p",null,"--\x3e I found nothing from first commit so i tried with second commit and found the password !"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6262).Z,width:"1309",height:"557"})))}p.isMDXComponent=!0},5876:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220123141103-ffeeba3000b8535e5ff2237007037a82.png"},9522:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220123141151-cccb0ac0bdf745011df5c335a1d766d7.png"},6262:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220123141339-f55a495e52ee72fc9b919e45bb1a5047.png"},7966:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220123141709-0d8bbf5f9d20d356a86316895a4023e9.png"},3088:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220123141843-afa9f9ba8f0b47533c8a49f1b785d03e.png"}}]);