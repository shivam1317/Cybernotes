"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[8986],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},727:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},l=void 0,c={unversionedId:"portswigger/Authentication/Password-reset-poisoning",id:"portswigger/Authentication/Password-reset-poisoning",title:"Password-reset-poisoning",description:"Password reset poisoning is a technique whereby an attacker manipulates a vulnerable website into generating a password reset link pointing to a domain under their control. This behavior can be leveraged to steal the secret tokens required to reset arbitrary users' passwords and, ultimately, compromise their accounts.",source:"@site/docs/portswigger/Authentication/Password-reset-poisoning.md",sourceDirName:"portswigger/Authentication",slug:"/portswigger/Authentication/Password-reset-poisoning",permalink:"/Cybernotes/docs/portswigger/Authentication/Password-reset-poisoning",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portswigger/Authentication/Password-reset-poisoning.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Password reset logic",permalink:"/Cybernotes/docs/portswigger/Authentication/Password-reset-logic"},next:{title:"Stay-logged-in-cookie",permalink:"/Cybernotes/docs/portswigger/Authentication/Stay-logged-in-cookie"}},p=[{value:"How to construct a password reset poisoning attack",id:"how-to-construct-a-password-reset-poisoning-attack",children:[],level:2},{value:"Lab: Password reset poisoning via middleware",id:"lab-password-reset-poisoning-via-middleware",children:[],level:2},{value:"Approach",id:"approach",children:[],level:2}],d={toc:p};function u(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Password reset poisoning is a technique whereby an attacker manipulates a vulnerable website into generating a password reset link pointing to a domain under their control. This behavior can be leveraged to steal the secret tokens required to reset arbitrary users' passwords and, ultimately, compromise their accounts."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(563).Z,width:"1273",height:"713"})),(0,o.kt)("h2",{id:"how-to-construct-a-password-reset-poisoning-attack"},"How to construct a password reset poisoning attack"),(0,o.kt)("p",null,"If the URL that is sent to the user is dynamically generated based on controllable input, such as the Host header, it may be possible to construct a password reset poisoning attack as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The attacker obtains the victim's email address or username, as required, and submits a password reset request on their behalf. When submitting the form, they intercept the resulting HTTP request and modify the Host header so that it points to a domain that they control. For this example, we'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"evil-user.net"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The victim receives a genuine password reset email directly from the website. This seems to contain an ordinary link to reset their password and, crucially, contains a valid password reset token that is associated with their account. However, the domain name in the URL points to the attacker's server:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"https://evil-user.net/reset?token=0a1b2c3d4e5f6g7h8i9j"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the victim clicks this link (or it is fetched in some other way, for example, by an antivirus scanner) the password reset token will be delivered to the attacker's server.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The attacker can now visit the real URL for the vulnerable website and supply the victim's stolen token via the corresponding parameter. They will then be able to reset the user's password to whatever they like and subsequently log in to their account."))),(0,o.kt)("p",null,"In a real attack, the attacker may seek to increase the probability of the victim clicking the link by first warming them up with a fake breach notification, for example."),(0,o.kt)("p",null,"Even if you can't control the password reset link, you can sometimes use the Host header to inject HTML into sensitive emails. Note that email clients typically don't execute JavaScript, but other HTML injection techniques like ",(0,o.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/cross-site-scripting/dangling-markup"},"dangling markup attacks")," may still apply."),(0,o.kt)("h2",{id:"lab-password-reset-poisoning-via-middleware"},"Lab: Password reset poisoning via middleware"),(0,o.kt)("p",null,"This lab is vulnerable to password reset poisoning. The user ",(0,o.kt)("inlineCode",{parentName:"p"},"carlos")," will carelessly click on any links in emails that he receives. To solve the lab, log in to Carlos's account. You can log in to your own account using the following credentials: ",(0,o.kt)("inlineCode",{parentName:"p"},"wiener:peter"),". Any emails sent to this account can be read via the email client on the exploit server"),(0,o.kt)("h2",{id:"approach"},"Approach"),(0,o.kt)("p",null,"First of all i followed the flow of reset-password and generated one link for ",(0,o.kt)("inlineCode",{parentName:"p"},"wiener")," to reset the password. Don't reset it now because we will use it later!"),(0,o.kt)("p",null,"Here we can intercept the forgot password request and change it's host to out exploit-server's header but before that let's make one response on ",(0,o.kt)("inlineCode",{parentName:"p"},"/forgot-password")," path!"),(0,o.kt)("p",null,"So i crafted this response:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4147).Z,width:"1357",height:"701"})),(0,o.kt)("p",null,"--\x3e I intercepted the ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /forgot-password")," request when it asks for email and we enter it. So i changed the username to ",(0,o.kt)("inlineCode",{parentName:"p"},"carlos")," and added one more header called ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Forwarded-Host")," and changed it's value to exploit server ip which we can find from exploit-server"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The X-Forwarded-Host (XFH) header is ",(0,o.kt)("strong",{parentName:"p"},"a de-facto standard header for identifying the original host requested by the client in the Host HTTP request header"),". ... Therefore the user's privacy must be kept in mind when deploying this header. A standardized version of this header is the HTTP Forwarded header.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6523).Z,width:"1887",height:"827"})),(0,o.kt)("p",null,"After sending the request i went to ",(0,o.kt)("inlineCode",{parentName:"p"},"access-log")," to see the request to our server and i found one request which contains the password-reset token!"),(0,o.kt)("p",null,"So let's grab it!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8343).Z,width:"1911",height:"483"})),(0,o.kt)("p",null,"--\x3e Now we can use this token to change the ",(0,o.kt)("inlineCode",{parentName:"p"},"carlos"),"'s password using the link which we got in our email. We can replace the token with the token which we just got from exploit server!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8105).Z,width:"1253",height:"355"})),(0,o.kt)("p",null,"Now change the new password and click ",(0,o.kt)("inlineCode",{parentName:"p"},"submit")," and we have changed the carlos's password. Now we can login with the new password and solve the lab!"))}u.isMDXComponent=!0},563:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220208121738-c0f777f1f3ea17eccd2e77b354929966.png"},4147:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220208131335-2f31a6266c6d1fce668a90a4649b1a91.png"},6523:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220208131511-c5e73d585a2106e4304f4d3818f0070c.png"},8343:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220208132332-528eea6c6f63fd99c1546a44f003ec41.png"},8105:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220208132617-cc6febfacf88a9050f7f5eab6e28572e.png"}}]);