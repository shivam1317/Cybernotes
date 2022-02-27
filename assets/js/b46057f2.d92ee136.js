"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[6923],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89004:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={tags:["sqli"],image:"img/Portswigger/sql-injection.png"},s=void 0,c={unversionedId:"portswigger/Sql-injection/Retrieving multiple values within a single column",id:"portswigger/Sql-injection/Retrieving multiple values within a single column",title:"Retrieving multiple values within a single column",description:"description",source:"@site/docs/portswigger/Sql-injection/Retrieving multiple values within a single column.md",sourceDirName:"portswigger/Sql-injection",slug:"/portswigger/Sql-injection/Retrieving multiple values within a single column",permalink:"/Cybernotes/docs/portswigger/Sql-injection/Retrieving multiple values within a single column",tags:[{label:"sqli",permalink:"/Cybernotes/docs/tags/sqli"}],version:"current",frontMatter:{tags:["sqli"],image:"img/Portswigger/sql-injection.png"},sidebar:"tutorialSidebar",previous:{title:"Information-schema",permalink:"/Cybernotes/docs/portswigger/Sql-injection/Information-schema"},next:{title:"Time based SQLi",permalink:"/Cybernotes/docs/portswigger/Sql-injection/Time based sqli"}},p=[{value:"description",id:"description",children:[],level:2},{value:"Challenge :",id:"challenge-",children:[],level:2}],u={toc:p};function d(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("p",null,"In the preceding example, suppose instead that the query only returns a single column."),(0,a.kt)("p",null,"You can easily retrieve multiple values together within this single column by concatenating the values together, ideally including a suitable separator to let you distinguish the combined values. For example, on Oracle you could submit the input:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"' UNION SELECT username || '~' || password FROM users--")),(0,a.kt)("p",null,"This uses the double-pipe sequence ",(0,a.kt)("inlineCode",{parentName:"p"},"||")," which is a string concatenation operator on Oracle. The injected query concatenates together the values of the ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"password")," fields, separated by the ",(0,a.kt)("inlineCode",{parentName:"p"},"~")," character."),(0,a.kt)("p",null,"The results from the query will let you read all of the usernames and passwords, for example:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"... administrator~s3cure wiener~peter carlos~montoya ...")),(0,a.kt)("p",null,"Note that different databases use different syntax to perform string concatenation. For more details, see the ",(0,a.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/sql-injection/cheat-sheet"},"SQL injection cheat sheet"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"challenge-"},"Challenge :"),(0,a.kt)("p",null,"--\x3e we have given 2 columns username and password and we have one table called ",(0,a.kt)("inlineCode",{parentName:"p"},"users")),(0,a.kt)("p",null,"so i directly tried to read the content of file and i got the ",(0,a.kt)("inlineCode",{parentName:"p"},"internal server error")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(12258).Z,width:"1635",height:"401"})),(0,a.kt)("p",null,"--\x3e then i tried with the payload given in description of this vulnerability but it didn't worked"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(70631).Z,width:"1589",height:"293"})),(0,a.kt)("p",null,"Let's swap the position and make payload looks like this\n",(0,a.kt)("inlineCode",{parentName:"p"},"'+UNION+SELECT+NULL,username+||'~'||+password+FROM+users--")),(0,a.kt)("p",null,"And i got the results !"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(26253).Z,width:"1873",height:"711"})),(0,a.kt)("p",null,"--\x3e and we solved the lab !"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(52540).Z,width:"1461",height:"527"})))}d.isMDXComponent=!0},12258:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210926070315-f9c0705feb99512447df3cfb245c7b50.png"},70631:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210926070507-80de9fda550cab471408f60229f36e20.png"},26253:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210926070636-89b2fd47baa848cacbe9e20cbff60b6a.png"},52540:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20210926070905-7c6766ade07a4095bd89d70806bbc9ac.png"}}]);