"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[7003],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=s,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||n;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,o=new Array(n);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<n;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1811:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var a=r(7462),s=r(3366),n=(r(7294),r(3905)),o=["components"],i={},c="Brute-force attacks",l={unversionedId:"portswigger/Authentication/Brute-force attacks",id:"portswigger/Authentication/Brute-force attacks",title:"Brute-force attacks",description:"A brute-force attack is when an attacker uses a system of trial and error in an attempt to guess valid user credentials. These attacks are typically automated using wordlists of usernames and passwords. Automating this process, especially using dedicated tools, potentially enables an attacker to make vast numbers of login attempts at high speed.",source:"@site/docs/portswigger/Authentication/Brute-force attacks.md",sourceDirName:"portswigger/Authentication",slug:"/portswigger/Authentication/Brute-force attacks",permalink:"/Cybernotes/docs/portswigger/Authentication/Brute-force attacks",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome to Cybernotes",permalink:"/Cybernotes/docs/intro"},next:{title:"Bypassing-2FA",permalink:"/Cybernotes/docs/portswigger/Authentication/Bypassing-2FA"}},u=[{value:"Brute-forcing usernames",id:"brute-forcing-usernames",children:[],level:2},{value:"Brute-forcing passwords",id:"brute-forcing-passwords",children:[],level:2},{value:"Username enumeration",id:"username-enumeration",children:[],level:2}],p={toc:u};function m(e){var t=e.components,r=(0,s.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"brute-force-attacks"},"Brute-force attacks"),(0,n.kt)("p",null,"A brute-force attack is when an attacker uses a system of trial and error in an attempt to guess valid user credentials. These attacks are typically automated using wordlists of usernames and passwords. Automating this process, especially using dedicated tools, potentially enables an attacker to make vast numbers of login attempts at high speed."),(0,n.kt)("p",null,"Brute-forcing is not always just a case of making completely random guesses at usernames and passwords. By also using basic logic or publicly available knowledge, attackers can fine-tune brute-force attacks to make much more educated guesses. This considerably increases the efficiency of such attacks. Websites that rely on password-based login as their sole method of authenticating users can be highly vulnerable if they do not implement sufficient brute-force protection."),(0,n.kt)("h2",{id:"brute-forcing-usernames"},"Brute-forcing usernames"),(0,n.kt)("p",null,"Usernames are especially easy to guess if they conform to a recognizable pattern, such as an email address. For example, it is very common to see business logins in the format ",(0,n.kt)("inlineCode",{parentName:"p"},"firstname.lastname@somecompany.com"),". However, even if there is no obvious pattern, sometimes even high-privileged accounts are created using predictable usernames, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"admin")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"administrator"),"."),(0,n.kt)("p",null,"During auditing, check whether the website discloses potential usernames publicly. For example, are you able to access user profiles without logging in? Even if the actual content of the profiles is hidden, the name used in the profile is sometimes the same as the login username. You should also check HTTP responses to see if any email addresses are disclosed. Occasionally, responses contain emails addresses of high-privileged users like administrators and IT support."),(0,n.kt)("h2",{id:"brute-forcing-passwords"},"Brute-forcing passwords"),(0,n.kt)("p",null,"Passwords can similarly be brute-forced, with the difficulty varying based on the strength of the password. Many websites adopt some form of password policy, which forces users to create high-entropy passwords that are, theoretically at least, harder to crack using brute-force alone. This typically involves enforcing passwords with:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A minimum number of characters"),(0,n.kt)("li",{parentName:"ul"},"A mixture of lower and uppercase letters"),(0,n.kt)("li",{parentName:"ul"},"At least one special character")),(0,n.kt)("p",null,"However, while high-entropy passwords are difficult for computers alone to crack, we can use a basic knowledge of human behavior to exploit the vulnerabilities that users unwittingly introduce to this system. Rather than creating a strong password with a random combination of characters, users often take a password that they can remember and try to crowbar it into fitting the password policy. For example, if ",(0,n.kt)("inlineCode",{parentName:"p"},"mypassword")," is not allowed, users may try something like ",(0,n.kt)("inlineCode",{parentName:"p"},"Mypassword1!")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Myp4$$w0rd")," instead."),(0,n.kt)("p",null,"In cases where the policy requires users to change their passwords on a regular basis, it is also common for users to just make minor, predictable changes to their preferred password. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"Mypassword1!")," becomes ",(0,n.kt)("inlineCode",{parentName:"p"},"Mypassword1?")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Mypassword2!.")),(0,n.kt)("p",null,"This knowledge of likely credentials and predictable patterns means that brute-force attacks can often be much more sophisticated, and therefore effective, than simply iterating through every possible combination of characters."),(0,n.kt)("h2",{id:"username-enumeration"},"Username enumeration"),(0,n.kt)("p",null,"Username enumeration is when an attacker is able to observe changes in the website's behavior in order to identify whether a given username is valid."),(0,n.kt)("p",null,"Username enumeration typically occurs either on the login page, for example, when you enter a valid username but an incorrect password, or on registration forms when you enter a username that is already taken. This greatly reduces the time and effort required to brute-force a login because the attacker is able to quickly generate a shortlist of valid usernames."),(0,n.kt)("p",null,"While attempting to brute-force a login page, you should pay particular attention to any differences in:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Status codes"),": During a brute-force attack, the returned HTTP status code is likely to be the same for the vast majority of guesses because most of them will be wrong. If a guess returns a different status code, this is a strong indication that the username was correct. It is best practice for websites to always return the same status code regardless of the outcome, but this practice is not always followed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Error messages"),": Sometimes the returned error message is different depending on whether both the username AND password are incorrect or only the password was incorrect. It is best practice for websites to use identical, generic messages in both cases, but small typing errors sometimes creep in. Just one character out of place makes the two messages distinct, even in cases where the character is not visible on the rendered page."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Response times"),": If most of the requests were handled with a similar response time, any that deviate from this suggest that something different was happening behind the scenes. This is another indication that the guessed username might be correct. For example, a website might only check whether the password is correct if the username is valid. This extra step might cause a slight increase in the response time. This may be subtle, but an attacker can make this delay more obvious by entering an excessively long password that the website takes noticeably longer to handle.")))}m.isMDXComponent=!0}}]);