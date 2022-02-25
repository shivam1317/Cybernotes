"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[7569],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,w=d["".concat(c,".").concat(g)]||d[g]||u[g]||s;return n?r.createElement(w,o(o({ref:t},l),{},{components:n})):r.createElement(w,o({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6793:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],i={tags:["password reset"]},c=void 0,p={unversionedId:"portswigger/Authentication/Changing-user-passwords",id:"portswigger/Authentication/Changing-user-passwords",title:"Changing-user-passwords",description:"Changing user passwords",source:"@site/docs/portswigger/Authentication/Changing-user-passwords.md",sourceDirName:"portswigger/Authentication",slug:"/portswigger/Authentication/Changing-user-passwords",permalink:"/Cybernotes/docs/portswigger/Authentication/Changing-user-passwords",tags:[{label:"password reset",permalink:"/Cybernotes/docs/tags/password-reset"}],version:"current",frontMatter:{tags:["password reset"]},sidebar:"tutorialSidebar",previous:{title:"Bypassing-2FA",permalink:"/Cybernotes/docs/portswigger/Authentication/Bypassing-2FA"},next:{title:"Password-based-login-1",permalink:"/Cybernotes/docs/portswigger/Authentication/password-based-login-1"}},l=[{value:"Changing user passwords",id:"changing-user-passwords",children:[],level:2},{value:"Lab: Password brute-force via password change",id:"lab-password-brute-force-via-password-change",children:[],level:2}],u={toc:l};function d(e){var t=e.components,i=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"changing-user-passwords"},"Changing user passwords"),(0,s.kt)("p",null,"Typically, changing your password involves entering your current password and then the new password twice. These pages fundamentally rely on the same process for checking that usernames and current passwords match as a normal login page does. Therefore, these pages can be vulnerable to the same techniques."),(0,s.kt)("p",null,"Password change functionality can be particularly dangerous if it allows an attacker to access it directly without being logged in as the victim user. For example, if the username is provided in a hidden field, an attacker might be able to edit this value in the request to target arbitrary users. This can potentially be exploited to enumerate usernames and brute-force passwords."),(0,s.kt)("h2",{id:"lab-password-brute-force-via-password-change"},"Lab: Password brute-force via password change"),(0,s.kt)("p",null,"This lab's password change functionality makes it vulnerable to brute-force attacks. To solve the lab, use the list of candidate passwords to brute-force Carlos's account and access his \"My account\" page."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Your credentials: ",(0,s.kt)("inlineCode",{parentName:"li"},"wiener:peter")),(0,s.kt)("li",{parentName:"ul"},"Victim's username: ",(0,s.kt)("inlineCode",{parentName:"li"},"carlos"))),(0,s.kt)("p",null,"--\x3e In this lab, After login you can change your current password So i entered the correct password in ",(0,s.kt)("inlineCode",{parentName:"p"},"current password")," and entered 2 new passwords and intercepted it and i found that there are 4 parameters"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1.username\n2.current-password\n3.new-password-1\n4.new-password-2\n")),(0,s.kt)("p",null,"--\x3e So i brute forced it to check what we can get and i got ",(0,s.kt)("inlineCode",{parentName:"p"},"302")," on all the requests So this trick didn't worked :("),(0,s.kt)("p",null,"So then i again went to the website and noticed that when we enter the wrong current password and correct new passwords 2 times then it's redirecting us to login page and when we add the correct password and 2 different new passwords then it's giving us this error"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"New passwords do not match\n")),(0,s.kt)("p",null,"And if we enter the wrong ",(0,s.kt)("inlineCode",{parentName:"p"},"current-password")," and 2 different new passwords then we get this error:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Current password is incorrect\n")),(0,s.kt)("p",null,"So now we can conclude that if we brute force the current password with 2 different new passwords then if we get ",(0,s.kt)("inlineCode",{parentName:"p"},"New passwords do not match")," Error then the password is correct so let's try it!"),(0,s.kt)("p",null,"We can grep it but here i got the difference with content-length!"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Don't forget to change the username to ",(0,s.kt)("inlineCode",{parentName:"p"},"carlos"))),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(2431).Z,width:"1513",height:"531"})),(0,s.kt)("p",null,"And we got different content length for ",(0,s.kt)("inlineCode",{parentName:"p"},"iloveyou")," password"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(736).Z,width:"1325",height:"895"})),(0,s.kt)("p",null,"So let's try to login!"),(0,s.kt)("p",null,"And we solved the lab!"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(3492).Z,width:"1699",height:"507"})))}d.isMDXComponent=!0},2431:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220208140028-8a1ef02c1095a2a0f3d998c717dafb8a.png"},736:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220208140306-c6d204d6204ec8884b654286a2ae18b5.png"},3492:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220208140528-19b30c64c44c90145a579f8ef83e8f2d.png"}}]);