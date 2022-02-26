"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[3516],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},305:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={title:"THM Road writeup",description:"Writeup of Road machine from Tryhackme",image:"https://tryhackme-images.s3.amazonaws.com/room-icons/86d73ce54a3f392bd56336da012a8270.png",authors:["shivam"],tags:["mongodb","ld_preload","/etc/hosts"]},l=void 0,p={permalink:"/Cybernotes/blog/2022/02/26/Road",source:"@site/blog/2022-02-26-Road/index.md",title:"THM Road writeup",description:"Writeup of Road machine from Tryhackme",date:"2022-02-26T00:00:00.000Z",formattedDate:"February 26, 2022",tags:[{label:"mongodb",permalink:"/Cybernotes/blog/tags/mongodb"},{label:"ld_preload",permalink:"/Cybernotes/blog/tags/ld-preload"},{label:"/etc/hosts",permalink:"/Cybernotes/blog/tags/etc-hosts"}],readingTime:2.375,truncated:!0,authors:[{name:"0xSH1V4M",title:"Author",url:"https://github.com/shivam1317",imageURL:"https://avatars.githubusercontent.com/u/70281451?v=4",key:"shivam"}],frontMatter:{title:"THM Road writeup",description:"Writeup of Road machine from Tryhackme",image:"https://tryhackme-images.s3.amazonaws.com/room-icons/86d73ce54a3f392bd56336da012a8270.png",authors:["shivam"],tags:["mongodb","ld_preload","/etc/hosts"]},prevItem:{title:"HTB OpenAdmin writeup",permalink:"/Cybernotes/blog/2022/02/26/OpenAdmin/openAdmin"},nextItem:{title:"THM Year-of-the-rabbit writeup",permalink:"/Cybernotes/blog/2022/02/26/Yearoftherabbit"}},u={authorsImageUrls:[void 0]},c=[{value:"Nmap results",id:"nmap-results",children:[],level:2},{value:"Gobuster results",id:"gobuster-results",children:[],level:2},{value:"user Privesc",id:"user-privesc",children:[],level:2},{value:"Root privesc",id:"root-privesc",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2}],d={toc:c};function m(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hello everyone,"),(0,i.kt)("p",null,"Today we are going to solve Road machine from Tryhackme. we will see mongodb enumration and how to do privesc with ",(0,i.kt)("inlineCode",{parentName:"p"},"env_keep")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tryhackme-images.s3.amazonaws.com/room-icons/86d73ce54a3f392bd56336da012a8270.png",alt:null})),(0,i.kt)("h2",{id:"nmap-results"},"Nmap results"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"PORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.2 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey:\n|   3072 e6:dc:88:69:de:a1:73:8e:84:5b:a1:3e:27:9f:07:24 (RSA)\n|   256 6b:ea:18:5d:8d:c7:9e:9a:01:2c:dd:50:c5:f8:c8:05 (ECDSA)\n|_  256 ef:06:d7:e4:b1:65:15:6e:94:62:cc:dd:f0:8a:1a:24 (ED25519)\n80/tcp open  http    Apache httpd 2.4.41 ((Ubuntu))\n|_http-server-header: Apache/2.4.41 (Ubuntu)\n|_http-title: Sky Couriers\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 24.02 seconds\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"--\x3e Port 80"),(0,i.kt)("p",null,"![","[Pasted image 20211205043041.png]","]"),(0,i.kt)("h2",{id:"gobuster-results"},"Gobuster results"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"===============================================================\n/.htaccess            (Status: 403) [Size: 276]\n/.htpasswd            (Status: 403) [Size: 276]\n/assets               (Status: 301) [Size: 311] [--\x3e http://10.10.2.144/assets/]\n/phpMyAdmin           (Status: 301) [Size: 315] [--\x3e http://10.10.2.144/phpMyAdmin/]\n/server-status        (Status: 403) [Size: 276]\n/v2                   (Status: 301) [Size: 307] [--\x3e http://10.10.2.144/v2/]\n===============================================================\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"--\x3e Got one admin login page on ",(0,i.kt)("inlineCode",{parentName:"p"},"http://10.10.2.144/v2/admin/login.html")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9197).Z,width:"1713",height:"889"})),(0,i.kt)("p",null,"--\x3e So lets register a user and login with that username"),(0,i.kt)("p",null,"after login i got this page"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9344).Z,width:"1920",height:"871"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,"--\x3e I found this in ",(0,i.kt)("inlineCode",{parentName:"p"},"profile")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9163).Z,width:"1343",height:"233"})),(0,i.kt)("p",null,"--\x3e So we have to add this ip in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"sky.thm")),(0,i.kt)("p",null,"--\x3e after that i found one tab called ",(0,i.kt)("inlineCode",{parentName:"p"},"reset passwords")," which was resetting the current user's password"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7538).Z,width:"1637",height:"805"})),(0,i.kt)("p",null,"--\x3e so i intercepted it and changed the user with ",(0,i.kt)("inlineCode",{parentName:"p"},"admin@sky.thm")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9434).Z,width:"1503",height:"769"})),(0,i.kt)("p",null,"--\x3e and now let's login as ",(0,i.kt)("inlineCode",{parentName:"p"},"admin@sky.thm")," and we got logged in !"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6309).Z,width:"1918",height:"615"})),(0,i.kt)("p",null,"--\x3e so now let's try to upload the reverse shell"),(0,i.kt)("p",null,"so it got uploaded but from where we can execute it?"),(0,i.kt)("p",null,"--\x3e I found this comment in source code"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7441).Z,width:"1365",height:"773"})),(0,i.kt)("p",null,"so i tried to go in ",(0,i.kt)("inlineCode",{parentName:"p"},"/v2/profileimages")," but it says ",(0,i.kt)("inlineCode",{parentName:"p"},"Directory listing is disabled.")," so then i tried like this ",(0,i.kt)("inlineCode",{parentName:"p"},"/v2/profileimages/shell.php")," and i got the reverse shell !"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"user-privesc"},"user Privesc"),(0,i.kt)("p",null,"--\x3e I got the database password in ",(0,i.kt)("inlineCode",{parentName:"p"},"logincheck.php")," file"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6261).Z,width:"1653",height:"527"})),(0,i.kt)("p",null,"But i got nothing useful in mysql database !"),(0,i.kt)("p",null,"crypted_password"),(0,i.kt)("p",null,"--\x3e I found that there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"mongodb")," running in the background from linpeas."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6158).Z,width:"1351",height:"735"})),(0,i.kt)("p",null,"--\x3e i have used this command and i got the mongodb shell !"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mongo 127.0.0.1:27017\n")),(0,i.kt)("p",null,"--\x3e after some time i got the password for ",(0,i.kt)("inlineCode",{parentName:"p"},"webdeveloper")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," table"),(0,i.kt)("p",null,"==> Some mongo commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"show dbs\nuse backup\nshow collections\ndb.user.find()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1317).Z,width:"1501",height:"499"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"webdeveloper:BahamasChapp123!@#\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"root-privesc"},"Root privesc"),(0,i.kt)("p",null,"--\x3e when i done ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo -l")," then i got this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Matching Defaults entries for webdeveloper on sky:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\\:/snap/bin, env_keep+=LD_PRELOAD\n\nUser webdeveloper may run the following commands on sky:\n    (ALL : ALL) NOPASSWD: /usr/bin/sky_backup_utility\n")),(0,i.kt)("p",null,"--\x3e here after some time i found that there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"env_keep+=LD_PRELOAD")," which is one privilege escalation factor and i have written in detail about it ",(0,i.kt)("a",{href:"https://www.hackingarticles.in/linux-privilege-escalation-using-ld_preload/"},"here")),(0,i.kt)("p",null,"and after following the procedures i got the root shell !"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4487).Z,width:"1321",height:"479"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://book.hacktricks.xyz/pentesting/27017-27018-mongodb"},"https://book.hacktricks.xyz/pentesting/27017-27018-mongodb"))))}m.isMDXComponent=!0},9197:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211205045222-aa0589d8c428018b927f56760f995bad.png"},9344:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211205045254-85fbb021ec6c06c931b32433a0524b40.png"},9163:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211205051631-01aca6b582d29e6c51e379bdfa308947.png"},7538:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211205051744-610245a3e6eaa82f37ce57f4f9d65e5b.png"},9434:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211205051834-4442fbf950820899acbd8a353f2d58ec.png"},6309:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211205051912-66172de18e6f2f4e8cc2900b136e29e2.png"},7441:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211205090025-e5b7d873ec6b458aef90dd80e93a32b8.png"},6261:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211205090624-ea0106d232b7751b30320f9d495e61b8.png"},6158:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211205091553-961587c5b327a82fe8237b29ade1773b.png"},1317:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211205092439-d87e049879830975b55a40accd5bf918.png"},4487:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211205100609-359f4d291b608f7a47ff33a413e29d3d.png"}}]);