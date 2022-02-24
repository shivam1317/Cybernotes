"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[2060],{3905:function(A,e,t){t.d(e,{Zo:function(){return a},kt:function(){return u}});var n=t(7294);function k(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function i(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function r(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){k(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function J(A,e){if(null==A)return{};var t,n,k=function(A,e){if(null==A)return{};var t,n,k={},i=Object.keys(A);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(k[t]=A[t]);return k}(A,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(k[t]=A[t])}return k}var S=n.createContext({}),o=function(A){var e=n.useContext(S),t=e;return A&&(t="function"==typeof A?A(e):r(r({},e),A)),t},a=function(A){var e=o(A.components);return n.createElement(S.Provider,{value:e},A.children)},s={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},l=n.forwardRef((function(A,e){var t=A.components,k=A.mdxType,i=A.originalType,S=A.parentName,a=J(A,["components","mdxType","originalType","parentName"]),l=o(t),u=k,f=l["".concat(S,".").concat(u)]||l[u]||s[u]||i;return t?n.createElement(f,r(r({ref:e},a),{},{components:t})):n.createElement(f,r({ref:e},a))}));function u(A,e){var t=arguments,k=e&&e.mdxType;if("string"==typeof A||k){var i=t.length,r=new Array(i);r[0]=l;var J={};for(var S in e)hasOwnProperty.call(e,S)&&(J[S]=e[S]);J.originalType=A,J.mdxType="string"==typeof A?A:k,r[1]=J;for(var o=2;o<i;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},3894:function(A,e,t){t.r(e),t.d(e,{frontMatter:function(){return J},contentTitle:function(){return S},metadata:function(){return o},toc:function(){return a},default:function(){return l}});var n=t(7462),k=t(3366),i=(t(7294),t(3905)),r=["components"],J={},S="Password reset logic",o={unversionedId:"portswigger/Authentication/Password-reset-logic",id:"portswigger/Authentication/Password-reset-logic",title:"Password reset logic",description:"A more robust method of resetting passwords is to send a unique URL to users that takes them to a password reset page. Less secure implementations of this method use a URL with an easily guessable parameter to identify which account is being reset, for example:",source:"@site/docs/portswigger/Authentication/Password-reset-logic.md",sourceDirName:"portswigger/Authentication",slug:"/portswigger/Authentication/Password-reset-logic",permalink:"/Cybernotes/docs/portswigger/Authentication/Password-reset-logic",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portswigger/Authentication/Password-reset-logic.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"password-based-login-2",permalink:"/Cybernotes/docs/portswigger/Authentication/password-based-login-2"},next:{title:"Password-reset-poisoning",permalink:"/Cybernotes/docs/portswigger/Authentication/Password-reset-poisoning"}},a=[{value:"Lab: Password reset broken logic",id:"lab-password-reset-broken-logic",children:[],level:2}],s={toc:a};function l(A){var e=A.components,J=(0,k.Z)(A,r);return(0,i.kt)("wrapper",(0,n.Z)({},s,J,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"password-reset-logic"},"Password reset logic"),(0,i.kt)("p",null,"A more robust method of resetting passwords is to send a unique URL to users that takes them to a password reset page. Less secure implementations of this method use a URL with an easily guessable parameter to identify which account is being reset, for example:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"http://vulnerable-website.com/reset-password?user=victim-user")),(0,i.kt)("p",null,"In this example, an attacker could change the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," parameter to refer to any username they have identified. They would then be taken straight to a page where they can potentially set a new password for this arbitrary user."),(0,i.kt)("p",null,"A better implementation of this process is to generate a high-entropy, hard-to-guess token and create the reset URL based on that. In the best case scenario, this URL should provide no hints about which user's password is being reset."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"http://vulnerable-website.com/reset-password?token=a0ba0d1cb3b63d13822572fcff1a241895d893f659164d4cc550b421ebdd48a8")),(0,i.kt)("p",null,"When the user visits this URL, the system should check whether this token exists on the back-end and, if so, which user's password it is supposed to reset. This token should expire after a short period of time and be destroyed immediately after the password has been reset."),(0,i.kt)("p",null,"However, some websites fail to also validate the token again when the reset form is submitted. In this case, an attacker could simply visit the reset form from their own account, delete the token, and leverage this page to reset an arbitrary user's password."),(0,i.kt)("h2",{id:"lab-password-reset-broken-logic"},"Lab: Password reset broken logic"),(0,i.kt)("p",null,"This lab's password reset functionality is vulnerable. To solve the lab, reset Carlos's password then log in and access his \"My account\" page."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your credentials: ",(0,i.kt)("inlineCode",{parentName:"li"},"wiener:peter")),(0,i.kt)("li",{parentName:"ul"},"Victim's username: ",(0,i.kt)("inlineCode",{parentName:"li"},"carlos"))),(0,i.kt)("p",null,"--\x3e So first i tried to reset my own password by clicking on ",(0,i.kt)("inlineCode",{parentName:"p"},"forgot password?")," link and then i analysed every request but i didn't found anything in that."),(0,i.kt)("p",null,"After clicking the link it will ask for your email which you can get from ",(0,i.kt)("inlineCode",{parentName:"p"},"email client")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(7908).Z,width:"805",height:"263"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(5843).Z,width:"1535",height:"159"})),(0,i.kt)("p",null,"--\x3e And we got the email for resetting the password!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(6200).Z,width:"1553",height:"415"})),(0,i.kt)("p",null,"--\x3e Now it's asking for new password so i intercepted this request also"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(601).Z,width:"841",height:"397"})),(0,i.kt)("p",null,"And here you can see the ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," parameter so i changed it to ",(0,i.kt)("inlineCode",{parentName:"p"},"carlos")," and changed the carlos's password!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(3940).Z,width:"1499",height:"625"})),(0,i.kt)("p",null,"And after i tried to log in and i got logged in as carlos!"))}l.isMDXComponent=!0},5843:function(A,e,t){e.Z=t.p+"assets/images/Pastedimage20220208120453-4b9a8b5dda2f1ee72172d0bc97e91450.png"},7908:function(A,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyUAAAEHCAYAAACwb+mLAAAefUlEQVR4nO3dW3Bc933Y8a+w3MV9cQcEEgIECiRFEeYNFAmKJk1SomTJsiMljqNpMqkz7aSZaZ20nXEemmT6EPelfkmTppOqnamVdsZS4twc2daFpCjR4P1uUBBJiBQokOAFdxDAcsEF+gAQBEXIBCGSfwH6fmY8Fha75/x293DmfHHO2X1gZGRkBEmSJEkKJC30AJIkSZK+2IwSSZIkSUEZJZIkSZKCMkokSZIkBWWUSJIkSQrKKJEkSZIUlFEiSZIkKSijRJIkSVJQRokkSZKkoIwSSZIkSUEZJZIkSZKCMkokSZIkBWWUSJIkSQrKKJEkSZIUlFEiSZIkKSijRJIkSVJQRokkSZKkoIwSSZIkSUEZJZIkSZKCMkokSZIkBWWUSJIkSQrKKJEkSZIUlFEiSZIkKSijRJIkSVJQRokkSZKkoIwSSZIkSUEZJZIkSZKCMkokSZIkBWWUSJIkSQrKKJEkSZIUlFEiSZIkKSijRJIkSVJQRokkSZKkoIwSSZIkSUEZJZIkSZKCMkokSZIkBWWUSJIkSQrKKJEkSZIUlFEiSZIkKSijRJIkSVJQRokkSZKkoIwSSZIkSUEZJZIkSZKCmhNqxe09faFWLUmSJN1zxXm5oUeYMTxSIkmSJCkoo0SSJElSUEaJJEmSpKCMEkmSJElBGSWSJEmSgjJKJEmSJAVllEiSJEkKyiiRJEmSFJRRIkmSJCkoo0SSJElSUEaJJEmSpKCMEkmSJElBGSWSJEmSgjJKJEmSJAVllEiSJEkKyiiRJEmSFJRRIkmSJCkoo0SSJElSUEaJJEmSpKCMEkmSJElBGSWSJEmSgpoTeoDP4uN3f8j+CzfflhbNJiu/lJqly5hfnDl6Y+8R3vhZM2VPfpMVxfd/Tkl318c//yH7k6t4fvMCYv77liRpxpvRUQJAVjWPr6kmY+zHVKKXtpONHNnWzsDTz1NbEHS6cHrf5613Bln9K3Xkh55FussKF65ieaqMWOhBJEnSXTHzoyQSp7C0jOzxG8p4cF6c1OvbaW5qpfaJioDDhZPqvsQVckOPId0T2aULmB96CEmSdNfM/CiZTKSYknw429dPAsaPotyQou/sEY41naOzt59UJJfC6i+xYmkVuZGxuyTbaT5wiObLvSSSKaIZBZQtXsnSmuLxv84m209w5MgJLncNcpUIWQXl1Cx/nJri6/cY5MLR/TSd7aAnkSSSUUD54sdZUVNA5JaZpj7b+Z//kD08wZZ5bRxobONKIkVavJRFdfXUFMfoO/o6b3/QB7Sx/bWTFCx/gU2LMkl1nebw4RO0d/eSSMXILa9mSd1yHhw7yy3ZvI3Xj8WpXwtNu08zVP0kX/3E+TB9R1/n7ZMFPPGr63hwwpNINL/FTw/HePxXNvJQLEX3mUMca2qlsy8B0WzyHqyhdtVjlMRGn2PLu3/DQdbwK1+ZP/5apM7u4J92p6j75pNURdo5/Pdv07dkM3Mv7KXxQpwV39xI1S0v3Hn2/e279C39Ok8uyhm/9cLe19jV/SWeeeYxsrkxT09/glQkg9zSm5/76Pt9lNOXuxhIQka8nJoVj1NTOvZe9r7PWz87TdWGL9F5eD8XI19iyzNFnPz7t+lb+lVq+g7ReLaLgWSErNJqVqxeTslNy/4l29LYsuduWkmq8RBnO/pJxeJUrFjP0tw2juxr4mLvIGnZ5Sxau46agvFX7Pbb8SSub7cXu/oZIkpWUQULV6xkfkFsytvB1NZ//T3cQnX3IY6f6yJBJoXVq1i9JELL7v00d/QzHIlTvnQdq6rjN7azswfHljtIKhIjq6iS2lV1zB3768NNp299+lOVJEkzxOyMEvrp6wfiGZMECSTb9rBjdxs5j9az/sv5RHrPcWzfLt4bjLDliQpiJGnZvY1jvRXUraunOBMGLv2Cg/t2cCTjG6yuiEGqlYPvHKKv8gnWri4inQSdJ/dz8J1dpI/tmHcefptdzWlUr1nP6qIYA22/4ODBt9gT+QbrqjMnmWwqszH68QSXD3E4+jirn6snmyucfvcnHNn3PmXPLSe39mnWD73BznPlrH92GYWRGAyepmHrXvpKl1H3VCW5qW7OHNzDrq0pNn69jkKACJC6SGNTATVrn6Qwfuu5b7k1C8j74Ahn2lI8WHF9z3eQ8x91kDZvPXNjkDi7k537uihcuoaNlXEig5do2reXne/Almcem/rxmwgMfHiU8+XLWLekgLxfsqP9S7UfomFfGyWr17OiNIO05Nhzb8jkuacWkUEvJ97ZxvFkOcvXPk1ZRnL0vXx3GzzzLDXxsdeGIVqONVOyeD0biuJk0A8R6Dm+n9al9Ty5Ik5ksJXdb+1k3/FyvraqDKayLUUA+mk5fIala59lWTzF+V0/Yc/e7XQWzWPFhm+wOvMKzdt/wrF9zVQ8s4iMqW4rn9R/gp3vHGJo3irqV5eTRT9th3dxZOtOIs8/SVUmU9oOmOr6I9DzwVHaV69ny5pMEmd28Pa+Xey4VEx13dN8rThC99G32H7gEGXzNvJQDOg6SMPuZtIfXc/6tXEiqV5aDu9iz7uZbHnuDrYfSZI0Y8yyT99KkRzs5fzhPTT3ZVC5cLJTtwY5e/wsQ0XLWLusgvzsHHLLF/H4inkMffw+rYMAMcpXPcvmzfVUFcfJzo5TUr2M6vwhLl7oGl1Mfy99wxmUPFJFYTyH7HgxD63ayMZNyyiJAKlWmk72k7NwAysqi0eXUbOOuodjXGw8Qd+k809ltjHJUhauqiA7AkRyqKopg75uulNAJEY0ApBGNBYjEoHuk420M48Vax/jwXgO2QUV1K5bRsHASU6cTd1Y7nA/+YvXMb+8mPzsSSogu5qakmHaPmwhOT52Ky0dUSpqKohwhZamNlIPrqR+8dzR51A8n9Wrqol2n+B0+528nzAQqaBuRRUlxfFp/0U82d3L1bR8KqqLyc0ee+4bnmZj3TyiAJfe52R3jOo165hfGh97L9dRk9FNU9PFCUtKMFy6jBXVZRTGM8eP8Azl1rC8Oj76c2YF1Q+mcbWjmwQwpW0JgGGyHl7JQ/EIEGNudSkMD5K78PoRlxwqK4uht51u4I62lQk6T75PT6SauicWUBLPITteRs2XV1LGJZo/ujJhnNtsB3ew/qH8GpaWj75e2ZWVFDJEqmgxi4pjQIT86ipyhrvo7B17QPwx1j39LGuXzSU/nkNuwVxqF5eT1tfK5eQko0iSpBlv5h8p6TvKm68dvfm2aD6Vq59kRelkO1MdXO6AvKXlNx1FiZWUk8chOrthfibE0pK0Hj/C4UvdDAwlGU5BagiGs4dGHxAvpyzrKB82bIOF1ZQ/WE5JQSb51z/xq/0SnWRQOS9+09oLy4vgo9F4uPUUm6nNNrr+gpseH4lGgX6GksAtB2GSdHb0Q1EtZRP37DPLKMmC1o5eqLz+1/BiyoomedluTEPFwnkcbjhDW3I+VTFInDtLV0YVy0oBuunshtylRTefopZfSh5n6OlOQvHUD3mkF5VOuF5oemLlFeQdPsTBrXvoe6SSstIy8rPjFI69Fn0d7QxRSvlN20ucstIoJ7u7SVA2/n4Ultx6GlN6wc3BFIvFIDnIEKOnDt52WwIgjdz4hDcuEiNKJrnxyISbIjA8xOij7mBbGZekuyMB+aWjR8bGF1xEcTYc7+gGrp8Cd7vtYOrrz4rHb2wLkRhRICt/wr+LaIQISYaGb9yH/jMcO9xCd3+CoaEUw6QYJpuhBHi+liRJs8/Mj5KsGuq/XEPW9Z8jUbLiOZ++35JKMgT0HPtn/v7Yrb+OJJJAP43vbOMkFdSt2khxbpQIQ7S89xOOj9+zgGXPfJX847/gdPN+zhwbJi2jiKoV9SytjBMZSjJEgg+3/ZAPb1lLLgMJuGVve0qzjT2zSGSS61JSDN9yG0CSoSGgey//9NreW3892A9cj5IIabfZ6YtULKIiup3TZwepqolw/uwlsh5eObqjmxx9DtHoJxYSG90ZHZi8mj59XdHpnrM1QfYi1j+TwcnGZloOv8vxIUjPr2Tx6nrmF0QYSgwBZ9n12tlbH5vRywDXr0tKm/S1iaRNNmOK0eNPXVPYlq4v6JM3pDHp008B3MG2Mi45Gq3x2CdWFSMaA5JJbhwzu812MKVtdfxp3Pr7yCRPbGzlidYGdjRcIu/RelatKSIrDeg4xBsNXbc+RpIkzQozP0oi2eQVFEz9r+ljf6nNWbiZtY/cunMczYhB+1HO9MWofnIdVeN/GE+QSHJzSMQKqFqxgaoVkOy9SGvTfo7t3kE09xvURmNEyaB83ZMsin9yLWmkTzbwVGablhjRKFC0jM2rK27d943e6bGIMuZXZ7Djo7MkKqO0Xs6les1Y1NwUHxPmvSlWIpOeN5hKpSa59XYmX9Zw6uY8i8WrqH2iilpS9Le30nxkP0fe2U/ur9aTkRGFtALqnll58xEEGI3caUw1rr15atvSnZrWtnJzfNzYDm6OlSm9C/dsW01y/uQ5hkpWUb/sxnUxqeGhTwluSZI0G8yya0qmooiSIhjoHyIrHid3/H9R0iLZZMSA4RQpomRN3K9qP03bwI0fU/3tfNzWNb4DF4uXMX/Ncsrop6cvBQWlFJJgIBGdsI44uRlppGV82pGcKcw2LTEKi7Khv5/hm5abTTQSJSvzzo9GFD6yiJyOFk40naG9aAFV4zvY+RTmQ9+ljpt3bjsu0UMGeUWjTyISBYaun4o0qqejlzsXIRJj7GjHdb10dt/4KdHVyvn2wfH7ZxdXsWxpFdGhLnoGIbeomOjwFRLEb3qv0qNppGdk/pJPSpuCKWxL0zOdbSVGflEGdF+ic+LNyQ7a+yCv5E6+0eZebasphoeBWOaEfyNJWpsvfvpDJEnSjPcFjJJMKh+tJHJuP3uaztPdf4X+ros0//xt3ty6hwspRs+5T+ujpamV/sFB+i6doOFggsISRi80TqaIDJ7h2Hs72HdibBn9XVw4eoJ28ikrikCkgoWPZNN+bCeNre309V+h79JpDmz9CW/vPs3k1+tOYbYpimZFIdHBxfZe+gZT5C+spTjZzL5dp7jcNTrv+aadbHv9bRrv8OJzAOLVzC/q4MMP2il+pHrCdQU5VC+eR+TCIfacuEjf4CB9l06x+8AZUkW11IwdUMkrKoKOFlp6U0CKRNtBTrZNYw7iFOenMXCumc4kQJLOpkOcH7qxaQ9dOMKe93aNvw/9XRdpPtnKUFYpxZlA6WMszO+jafd+Wtp76e/vpfPsQRp+9s/sbJ5OKE0whW1peqa3rRQurKUgdYaDu07T2T9If+95Tuw+xMXoPBZX50z+oLu4/qkst7AoAy6doLlrkMRgFx8f2EZLdgU59NPZfYVpv2SSJOlza+afvjUNsYp6Nq49wrHGvew4Nvo9GrlF86jftHz0uzci86lb08G+o3t4+3XIKKhg8dp6yvtjdP+8iR1bYeNzK9mwFo417mXnsQRDZJBVUMTCDWuoyQaIULJqC09E93P84DZOJiCakU3hvMfZuGL+p17zctvZpii78jEqPtzD8W0/o+XRp3l62XzWPQWHD7/Pnq0Hxuet2bCFRZN9BcVtZVL+UD7HurKpqbz52cQq17E+dYhjTTvZdmQIotkUzlvFxhULxs9Yyq6pZ3lHA01bf0QTmeQ+uIi6FeVcbui/wzliPLRqHRd3H6Lhn16DWDaFCx9n6cO97Loweo/cxU9Sn9xP0+EdNA8Mjb2mldR/ZfnYt93HWbRpC5EDh2h672cMpCKkZxdQtmQLS2899+4Ox5vCtvSV6R1WmNa2kr2AdZuGOXKkkYaf7mWIDHJKK3j8qZXMvcMx7ta2+kmFS9azpHcPTVt/TGMsm5KFj1O/OJPW/ksc2/0GB9d+gy/mV6JKkjR7PTAyMjISYsXtPZN/KK5miis0v/nPnCjaPPZ9HJIkSZqoOM9v15qqL+SREn0GqST9/b20N+2hsbeUFRsMEkmSJH02RonuTO/77HzrBEO5ZSze9MToN4BLkiRJn4Gnb0mSJEn3gKdvTd0X8NO3JEmSJH2eGCWSJEmSgjJKJEmSJAU1Yy90Hxq4EnoESZIkzWLRrDv5YmF9FjM2SgDKy8tDjyBJkqRZqK2tLfQIXyieviVJkiQpKKNEkiRJUlBGiSRJkqSgjBJJkiRJQRklkiRJkoIySiRJkiQFZZRIkiRJCsookSRJkhSUUSJJkiQpKKNEkiRJUlBGiSRJkqSgjBJJkiRJQRklkiRJkoIySiRJkiQFZZRIkiRJCsookSRJkhSUUSJJkiQpKKNEkiRJUlBGiSRJkqSgjBJJkiRJQRklkiRJkoIySiRJkiQFZZRIkiRJCsookSRJkhSUUSJJkiQpKKNEkiRJUlBGiSRJkqSgjBJJkiRJQRklkiRJkoIySiRJkiQFNSf0AJ9FW1tb6BEkSZIkfUYzNkqiWTmhR5AkSZJ0F3j6liRJkqSgjBJJkiRJQRklkiRJkoIySiRJkiQFZZRIkiRJCsookSRJkhSUUSJJkiQpKKNEkiRJUlBGiSRJkqSgjBJJkiRJQRklkiRJkoIySiRJkiQFZZRIkiRJCsookSRJkhSUUSJJkiQpKKNEkiRJUlBGiSRJkqSgjBJJkiRJQRklkiRJkoIySiRJkiQFZZRIkiRJCsookSRJkhSUUSJJkiQpKKNEkiRJUlBGiSRJkqSgjBJJkiRJQRklkiRJkoIySiRJkiQFZZRIkiRJCsookSRJkhSUUSJJkiQpqDmhB7gfftF5kbfPneRQ+3k6rg7QnRykJ5kIPdaslhfLID+WSVF6FiuL5/J0xUJqC8pCjyVJkqTPoQdGRkZGQqy4vafvni17eGSEI53neav1FG+fO0XbwL1bl6auPCuXLfMW8HTFQpYXlpP2wAOhR5IkSbpnivNyQ48wY8y6KBkeGeH1jz/gzxsbOD/Qe0/Woc9mblacP6hdx9ceetQwkSRJs5ZRMnWzKkqSwyn+9PB2/u7ML+76snX3fWv+Uv7T8k3E0iKhR5EkSbrrjJKpmzVRcjnRz3d2/ZhjnW13dbm6t5YXzuV/fPkF8mMZoUeRJEm6q4ySqZsVn741NDzMf9j9ukEyAx3pPM93dv2YoeHh0KNIkiQpkFkRJf/lyHYOdZwLPYam6WB7K9//xbuhx5AkSVIgMz5KXv3wKH9z+ljoMfQZ/b9Th3n94w9CjyFJkqQAZnSUpEZG+F8n9oUeQ3fJy037SIW5xEmSJEkBzego+dvTx/wOklmkubedv/WolyRJ0hfOjP5G979uPhR6BCBCzfx6vvvocuoK86lMn0Pi6hU+7mzmlf1v8PLlq3e0tE0b/4jXHpnDpab/Te2uu3+dzL1e/mf1182HeOmRZaHHkCRJ0n00Y4+UnO7t5KO+rtBjUPPob7F901O8WJ5PxpULNLS18jE5LChfzvee+zbfKQw94c0uXW5me2szDZcT47elz/9NLv2rP+CPPwezftTXxeneztBjSJIk6T6asUdKtp5vDj0CMI/fXfUwGUBDw3/nxQ96Rm+OlPHHX/89fr/oQf7No1X8xa6WoFNOdPz4a7x0fOItEV5YUAN0B5roVj+/+BHz45+DQpIkSdJ9MWOj5HD7+dAjABnkpQNco2fgyo2bUxf5/pt/xitc4ePBFAA1q/4tu5YVQ+uPKH1zrAoiS3j1299kM+386Y/+kr/ombDoVAZ1S36N7y99lNrYNU5dOMB339vGrkGAefzX3/rXfDu9mz//8atcWvZNvjsvn/TkBV5t+BF/eLmYP930PC+V5MNgM9/f+iovd47OcdPpW3uL+Ydvv8A6APL5/Rf/M7/fsZW6f2zg43v90v0S+y638tsLVgacQJIkSffTjD1962Li83CBezsHOwDm8Nym3+N/rqrj2ZIi4hG4OtgzHiTTkV7xVV5ZksOpy62cJYMFFV/m1Q1LiANwjaspgBye3fACL1z7iO0918jIquDbm77Jq089T11fMw1XrpGXW8P3nnqKJZOtJHWBV5uaOTu2zMYPD/CDU630THbf+6g9ceX2d5IkSdKsMWOPlLQP9oceAejhlffe4Nnnvsq69GJeXPY8Ly4DSHCq9QNeObqVly9Mb868zAv8xg//jndSkD7v12j8ai15FfW8mHmcVwav32sOpR072LzjBFczL/DQv3ieVXMqqO3+AbU7WyCnm4bfeIoFuQ+zLgeO37Kvf5HXdh3g2cU1VHKF7cd+wvc+B5dztF8dCD2CJEmS7qMZeaTk2sgwXcnE7e94H1zt3MuLP/wzXnhvKz9oaeXU1WtABgsqlvO9r/07/mFB3rSWm2g5wjtjB1qunmukAYAHqfvE4g6ea+YqwGA7zWMf9HWgZewalisXaAQgh4cypzVGEJcGrjA0PBx6DEmSJN0nM/JIyZwH0iiIZXx+/qKe6mHXqQZ2nWoAIpSU1PLddc/z7aIM1q2qZ8mpN7mzDwaGS8mJhzUS9F4D5swhnnXz/XquXj9F7BqJsf/vHT9r7BpXxx6XfofrD6k0K4do2ozsZUmSJE3DjN3zK87MDj0C6ZllbJpfx3cWVI1d6wGQ4vLlo/zhnsbRazOyilkAkBz7dWRCIMRyKP2UZefFcib8lEF8DkCCS5+TDruXitOzbn8nSZIkzRozNkrKM+O3v9M9djWvnpc3Pc+fbHiB71XmTTgakU5dVQV5AAPtnGLCkY+8CmrH7lVSVTv+35+UV1XLE5GxpVXWjn1C1gUO3vVrPq6NHcWZQzxyt5c9PUXp4YNTkiRJ98+MPH0LYE3pQ7zT9mHYIS5s5bstNbxclc9LW/49Lwx083HyGnmZxZSmAyTYfmAPxwFaP6CRh6nNWsUrz83hp935bC6fwykYPZIyJmPsLelJ1fDyC7/J9g6oq6ohD+hp2cM/Jj85xGd1ZfToS1YOL234DTJaG/n+3uNBPxJ4TelDAdcuSZKk+23GHin5ctnDoUcA+vnHrX/FCw172N7RTW8khwX5xcTpprH1CH/8xl/x0qmxD9i9spd/+c4BDvQliJc8yub8dv7kzTdouAowh/Hr18cy8dLxH/G7LVBX8TALuMKplq289N6JO7425fYu8nLDERqvXiMjv4bNRTnBrz/5fLy3kiRJul8eGBkZGQmx4vaez/49I8+9+X/4qK/rLkyjz4uHcwv46TO/E3oMSZKkz6w4Lzf0CDPGjD1SAvDbNX7r92zjeypJkvTFM6Oj5NfnL2VuVvgL3nV3PJJbxK/PXxp6DEmSJN1nMzpKIg88wB8u2xh6DN0l/3HpeiIPPBB6DEmSJN1nMzpKAJ6eV8O3/Ov6jPet+UvZVD4/9BiSJEkKYMZHCcAfLd9MXXFF6DE0TSuL5vFHyzeHHkOSJEmBzIooiaal8d/Wfp3lhXNDj6I7tLSwnD9/4htE02bFpihJkqRpmDV7goXpmfxg46/z/EOPhh5FU/Rr1V/irzd+i8L0zNCjSJIkKaAZ/T0ln+YfWo7zl8d3c36g956tQ9M3NyvOH9Su4+uVi0OPIkmSdM/4PSVTNyuj5LofnDrI/z15iLbBe78u3V55Zi6/tWAlv7OwLvQokiRJ95xRMnWzOkqua+y6yFutJznUfp6OqwN0JwfpSSbu2/q/iPJiGeTHMilKz2Jl8Vy2zFvIlwrLQo8lSZJ03xglU/eFiBJJkiTpfjNKpm7WXOguSZIkaWYySiRJkiQFZZRIkiRJCsookSRJkhSUUSJJkiQpKKNEkiRJUlBGiSRJkqSgjBJJkiRJQRklkiRJkoIySiRJkiQFZZRIkiRJCsookSRJkhSUUSJJkiQpKKNEkiRJUlBGiSRJkqSgjBJJkiRJQRklkiRJkoIySiRJkiQFZZRIkiRJCsookSRJkhSUUSJJkiQpKKNEkiRJUlBGiSRJkqSgjBJJkiRJQRklkiRJkoIySiRJkiQFZZRIkiRJCsookSRJkhSUUSJJkiQpKKNEkiRJUlBGiSRJkqSgHhgZGRkJPYQkSZKkLy6PlEiSJEkKyiiRJEmSFJRRIkmSJCkoo0SSJElSUEaJJEmSpKCMEkmSJElBGSWSJEmSgjJKJEmSJAVllEiSJEkKyiiRJEmSFJRRIkmSJCkoo0SSJElSUEaJJEmSpKCMEkmSJElBGSWSJEmSgjJKJEmSJAVllEiSJEkKyiiRJEmSFJRRIkmSJCkoo0SSJElSUEaJJEmSpKCMEkmSJElBGSWSJEmSgjJKJEmSJAVllEiSJEkKyiiRJEmSFJRRIkmSJCkoo0SSJElSUEaJJEmSpKCMEkmSJElBGSWSJEmSgjJKJEmSJAVllEiSJEkKyiiRJEmSFJRRIkmSJCkoo0SSJElSUEaJJEmSpKCMEkmSJElBGSWSJEmSgjJKJEmSJAVllEiSJEkKyiiRJEmSFJRRIkmSJCkoo0SSJElSUEaJJEmSpKCMEkmSJElBGSWSJEmSgvr/cshfbsRC6qUAAAAASUVORK5CYII="},6200:function(A,e,t){e.Z=t.p+"assets/images/Pastedimage20220208120730-e93624990f1f9976f3588c3d3508bfa2.png"},601:function(A,e){e.Z="data:image/png;base64,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"},3940:function(A,e,t){e.Z=t.p+"assets/images/Pastedimage20220208121239-3e8d4d9a6ff00d326f9f13ad64546f7b.png"}}]);