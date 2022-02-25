"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[2],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||r;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6339:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={tags:["null byte"],image:"img/Portswigger/file-upload.jpg"},s=void 0,p={unversionedId:"portswigger/File-upload/Lab-5 Obfuscating-file-extensions",id:"portswigger/File-upload/Lab-5 Obfuscating-file-extensions",title:"Lab-5 Obfuscating-file-extensions",description:"Obfuscating file extensions",source:"@site/docs/portswigger/File-upload/Lab-5 Obfuscating-file-extensions.md",sourceDirName:"portswigger/File-upload",slug:"/portswigger/File-upload/Lab-5 Obfuscating-file-extensions",permalink:"/Cybernotes/docs/portswigger/File-upload/Lab-5 Obfuscating-file-extensions",tags:[{label:"null byte",permalink:"/Cybernotes/docs/tags/null-byte"}],version:"current",frontMatter:{tags:["null byte"],image:"img/Portswigger/file-upload.jpg"},sidebar:"tutorialSidebar",previous:{title:"Lab-4 Overriding-the-server-configuration",permalink:"/Cybernotes/docs/portswigger/File-upload/Lab-4 Overriding-the-server-configuration"},next:{title:"Lab-6 Flawed-validation",permalink:"/Cybernotes/docs/portswigger/File-upload/Lab-6 Flawed-validation"}},c=[{value:"Obfuscating file extensions",id:"obfuscating-file-extensions",children:[],level:2},{value:"Challenge",id:"challenge",children:[],level:2}],u={toc:c};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"obfuscating-file-extensions"},"Obfuscating file extensions"),(0,r.kt)("p",null,"Even the most exhaustive blacklists can potentially be bypassed using classic obfuscation techniques. Let's say the validation code is case sensitive and fails to recognize that ",(0,r.kt)("inlineCode",{parentName:"p"},"exploit.pHp")," is in fact a ",(0,r.kt)("inlineCode",{parentName:"p"},".php")," file. If the code that subsequently maps the file extension to a MIME type is ",(0,r.kt)("strong",{parentName:"p"},"not")," case sensitive, this discrepancy allows you to sneak malicious PHP files past validation that may eventually be executed by the server."),(0,r.kt)("p",null,"You can also achieve similar results using the following techniques:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Provide multiple extensions. Depending on the algorithm used to parse the filename, the following file may be interpreted as either a PHP file or JPG image: ",(0,r.kt)("inlineCode",{parentName:"li"},"exploit.php.jpg")),(0,r.kt)("li",{parentName:"ul"},"Add trailing characters. Some components will strip or ignore trailing whitespaces, dots, and suchlike: ",(0,r.kt)("inlineCode",{parentName:"li"},"exploit.php.")),(0,r.kt)("li",{parentName:"ul"},"Try using the URL encoding (or double URL encoding) for dots, forward slashes, and backward slashes. If the value isn't decoded when validating the file extension, but is later decoded server-side, this can also allow you to upload malicious files that would otherwise be blocked: ",(0,r.kt)("inlineCode",{parentName:"li"},"exploit%2Ephp")),(0,r.kt)("li",{parentName:"ul"},"Add semicolons or URL-encoded null byte characters before the file extension. If validation is written in a high-level language like PHP or Java, but the server processes the file using lower-level functions in C/C++, for example, this can cause discrepancies in what is treated as the end of the filename: ",(0,r.kt)("inlineCode",{parentName:"li"},"exploit.asp;.jpg")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"exploit.asp%00.jpg")),(0,r.kt)("li",{parentName:"ul"},"Try using multibyte unicode characters, which may be converted to null bytes and dots after unicode conversion or normalization. Sequences like ",(0,r.kt)("inlineCode",{parentName:"li"},"xC0 x2E"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"xC4 xAE")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"xC0 xAE")," may be translated to ",(0,r.kt)("inlineCode",{parentName:"li"},"x2E")," if the filename parsed as a UTF-8 string, but then converted to ASCII characters before being used in a path.")),(0,r.kt)("p",null,"Other defenses involve stripping or replacing dangerous extensions to prevent the file from being executed. If this transformation isn't applied recursively, you can position the prohibited string in such a way that removing it still leaves behind a valid file extension. For example, consider what happens if you strip ",(0,r.kt)("inlineCode",{parentName:"p"},".php")," from the following filename:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"exploit.p.phphp")),(0,r.kt)("p",null,"This is just a small selection of the many ways it's possible to obfuscate file extensions."),(0,r.kt)("h2",{id:"challenge"},"Challenge"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This lab contains a vulnerable image upload function. Certain file extensions are blacklisted, but this defense can be bypassed using a classic obfuscation technique.\nTo solve the lab, upload a basic PHP web shell, then use it to exfiltrate the contents of the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/carlos/secret"),". Submit this secret using the button provided in the lab banner.\nYou can log in to your own account using the following credentials: ",(0,r.kt)("inlineCode",{parentName:"p"},"wiener:peter"))),(0,r.kt)("p",null,"--\x3e So i used the same payload as always !"),(0,r.kt)("p",null,"I intercepted the upload request and tried to change the filename to something like this :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"webshell.php%00.jpg\n")),(0,r.kt)("p",null,"--\x3e Here ",(0,r.kt)("inlineCode",{parentName:"p"},"%00")," is known as null byte or null character which will comment out the text after that character on the server and the server was checking the filename from last extension of file so i uploaded file with this name and it got uploaded !"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9429).Z,width:"1853",height:"725"})),(0,r.kt)("p",null,"--\x3e And after going to filepath, i got the sercret !"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3356).Z,width:"1203",height:"275"})))}d.isMDXComponent=!0},3356:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220125121119-88173e0792988baa7f9846f1518feeb5.png"},9429:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220125121144-d3d29b5354e2f77ae23568392a25aedd.png"}}]);