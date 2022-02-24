"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[6287],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6570:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={},s=void 0,c={unversionedId:"portswigger/File-upload/Lab-6 Flawed-validation",id:"portswigger/File-upload/Lab-6 Flawed-validation",title:"Lab-6 Flawed-validation",description:"Flawed validation of the file's contents",source:"@site/docs/portswigger/File-upload/Lab-6 Flawed-validation.md",sourceDirName:"portswigger/File-upload",slug:"/portswigger/File-upload/Lab-6 Flawed-validation",permalink:"/Cybernotes/docs/portswigger/File-upload/Lab-6 Flawed-validation",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portswigger/File-upload/Lab-6 Flawed-validation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab-5 Obfuscating-file-extensions",permalink:"/Cybernotes/docs/portswigger/File-upload/Lab-5 Obfuscating-file-extensions"},next:{title:"Lab-7 Race-conditions",permalink:"/Cybernotes/docs/portswigger/File-upload/Lab-7 Race-conditions"}},p=[{value:"Flawed validation of the file&#39;s contents",id:"flawed-validation-of-the-files-contents",children:[],level:2},{value:"Challenge",id:"challenge",children:[],level:2}],u={toc:p};function d(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"flawed-validation-of-the-files-contents"},"Flawed validation of the file's contents"),(0,o.kt)("p",null,"Instead of implicitly trusting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Type")," specified in a request, more secure servers try to verify that the contents of the file actually match what is expected."),(0,o.kt)("p",null,"In the case of an image upload function, the server might try to verify certain intrinsic properties of an image, such as its dimensions. If you try uploading a PHP script, for example, it won't have any dimensions at all. Therefore, the server can deduce that it can't possibly be an image, and reject the upload accordingly."),(0,o.kt)("p",null,"Similarly, certain file types may always contain a specific sequence of bytes in their header or footer. These can be used like a fingerprint or signature to determine whether the contents match the expected type. For example, JPEG files always begin with the bytes ",(0,o.kt)("inlineCode",{parentName:"p"},"FF D8 FF"),"."),(0,o.kt)("p",null,"This is a much more robust way of validating the file type, but even this isn't foolproof. Using special tools, such as ExifTool, it can be trivial to create a polyglot JPEG file containing malicious code within its metadata."),(0,o.kt)("h2",{id:"challenge"},"Challenge"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This lab contains a vulnerable image upload function. Although it checks the contents of the file to verify that it is a genuine image, it is still possible to upload and execute server-side code.\nTo solve the lab, upload a basic PHP web shell, then use it to exfiltrate the contents of the file ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/carlos/secret"),". Submit this secret using the button provided in the lab banner.\nYou can log in to your own account using the following credentials: ",(0,o.kt)("inlineCode",{parentName:"p"},"wiener:peter"))),(0,o.kt)("p",null,"--\x3e i used exiftool to add the comment in the image with this command !"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"exiftool -comment=\"<?php echo shell_exec('cat /home/carlos/secret'); ?>\" imageShell.jpeg\n")),(0,o.kt)("p",null,"Now upload the image!"),(0,o.kt)("p",null,"--\x3e intercept the request and change the filename with ",(0,o.kt)("inlineCode",{parentName:"p"},".php")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(382).Z,width:"1469",height:"779"})),(0,o.kt)("p",null,"Remember that our answer will start after ",(0,o.kt)("inlineCode",{parentName:"p"},"6")," and end before ",(0,o.kt)("inlineCode",{parentName:"p"},"y")),(0,o.kt)("p",null,"and i got this output!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7259).Z,width:"1883",height:"725"})),(0,o.kt)("p",null,"--\x3e In the other method you can place 2 identifiers or texts to check the password like ",(0,o.kt)("inlineCode",{parentName:"p"},"START")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"END")),(0,o.kt)("p",null,"So the payload will be like this :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php echo 'START ' . file_get_contents('/home/carlos/secret') . ' END'; ?>\n")),(0,o.kt)("p",null,"--\x3e And when you send the above request you can see the secret between 2 texts ",(0,o.kt)("inlineCode",{parentName:"p"},"START")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"END")))}d.isMDXComponent=!0},382:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220125130219-9b2ec41decd3417af381aad93cc57e71.png"},7259:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220125130328-679d2062afbb3f5abc3e382a561f3007.png"}}]);