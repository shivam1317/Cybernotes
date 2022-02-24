"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[8735],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3617:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],l={},s=void 0,c={unversionedId:"portswigger/File-upload/Lab-4 Overriding-the-server-configuration",id:"portswigger/File-upload/Lab-4 Overriding-the-server-configuration",title:"Lab-4 Overriding-the-server-configuration",description:"Overriding the server configuration",source:"@site/docs/portswigger/File-upload/Lab-4 Overriding-the-server-configuration.md",sourceDirName:"portswigger/File-upload",slug:"/portswigger/File-upload/Lab-4 Overriding-the-server-configuration",permalink:"/Cybernotes/docs/portswigger/File-upload/Lab-4 Overriding-the-server-configuration",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab-3 File-upload-with-directory-traversal",permalink:"/Cybernotes/docs/portswigger/File-upload/Lab-3 File-upload-with-directory-traversal"},next:{title:"Lab-5 Obfuscating-file-extensions",permalink:"/Cybernotes/docs/portswigger/File-upload/Lab-5 Obfuscating-file-extensions"}},p=[{value:"Overriding the server configuration",id:"overriding-the-server-configuration",children:[],level:2},{value:"Challenge",id:"challenge",children:[],level:2}],u={toc:p};function d(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overriding-the-server-configuration"},"Overriding the server configuration"),(0,o.kt)("p",null,"As we discussed in the previous section, servers typically won't execute files unless they have been configured to do so. For example, before an Apache server will execute PHP files requested by a client, developers might have to add the following directives to their ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/apache2/apache2.conf")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"LoadModule php_module /usr/lib/apache2/modules/libphp.so\nAddType application/x-httpd-php .php\n")),(0,o.kt)("p",null,"Many servers also allow developers to create special configuration files within individual directories in order to override or add to one or more of the global settings. Apache servers, for example, will load a directory-specific configuration from a file called ",(0,o.kt)("inlineCode",{parentName:"p"},".htaccess")," if one is present."),(0,o.kt)("p",null,"Similarly, developers can make directory-specific configuration on IIS servers using a ",(0,o.kt)("inlineCode",{parentName:"p"},"web.config")," file. This might include directives such as the following, which in this case allows JSON files to be served to users:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<staticContent>\n\xa0\xa0<mimeMap fileExtension=".json" mimeType="application/json" />\n</staticContent>`\n')),(0,o.kt)("p",null,"Web servers use these kinds of configuration files when present, but you're not normally allowed to access them using HTTP requests. However, you may occasionally find servers that fail to stop you from uploading your own malicious configuration file. In this case, even if the file extension you need is blacklisted, you may be able to trick the server into mapping an arbitrary, custom file extension to an executable MIME type."),(0,o.kt)("h2",{id:"challenge"},"Challenge"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"we have to read the content of ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/carlos/secret")," to find the flag")),(0,o.kt)("p",null,"I used the same payload as previous challenges :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php echo shell_exec('cat /home/carlos/secret'); ?>\n")),(0,o.kt)("p",null,"--\x3e i just changed the filename ",(0,o.kt)("inlineCode",{parentName:"p"},"webshell.php")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"webshell.phar")," and it got uploaded !"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: You can try other extensions also like ",(0,o.kt)("inlineCode",{parentName:"p"},"php3"),",",(0,o.kt)("inlineCode",{parentName:"p"},"php5"),"and ",(0,o.kt)("inlineCode",{parentName:"p"},"phtml"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(4002).Z,width:"1895",height:"779"})),(0,o.kt)("p",null,"--\x3e And after copying the image path and pasting in url i got the secret !"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(5285).Z,width:"1317",height:"215"})))}d.isMDXComponent=!0},5285:function(e,t,r){t.Z=r.p+"assets/images/Pastedimage20220124133127-cd5afe603639d7df70bdd79feba97ab8.png"},4002:function(e,t,r){t.Z=r.p+"assets/images/Pastedimage20220124133154-e9a867fdf6c2e97b685bc3c86f391e6c.png"}}]);