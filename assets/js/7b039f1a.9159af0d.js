"use strict";(self.webpackChunkcybersec_notes=self.webpackChunkcybersec_notes||[]).push([[5066],{1685:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/02/23/Blue","metadata":{"permalink":"/Cybernotes/blog/2022/02/23/Blue","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-02-23-Blue/index.md","source":"@site/blog/2022-02-23-Blue/index.md","title":"THM Blue writeup","description":"nmap results","date":"2022-02-23T00:00:00.000Z","formattedDate":"February 23, 2022","tags":[{"label":"windows","permalink":"/Cybernotes/blog/tags/windows"},{"label":"blue","permalink":"/Cybernotes/blog/tags/blue"}],"readingTime":1.62,"truncated":true,"authors":[{"name":"0xSH1V4M","title":"Author","url":"https://github.com/shivam1317","imageURL":"https://avatars.githubusercontent.com/u/70281451?v=4","key":"shivam"}],"frontMatter":{"authors":["shivam"],"tags":["windows","blue"]},"nextItem":{"title":"welcome","permalink":"/Cybernotes/blog/welcome"}},"content":"## nmap results\\n\\n```\\nPORT      STATE SERVICE            VERSION\\n135/tcp   open  msrpc              Microsoft Windows RPC\\n139/tcp   open  netbios-ssn        Microsoft Windows netbios-ssn\\n445/tcp   open  microsoft-ds       Windows 7 Professional 7601 Service Pack 1 microsoft-ds (workgroup: WORKGROUP)\\n3389/tcp  open  ssl/ms-wbt-server?\\n| ssl-cert: Subject: commonName=Jon-PC\\n| Not valid before: 2021-07-11T16:51:30\\n|_Not valid after:  2022-01-10T16:51:30\\n|_ssl-date: 2021-07-12T16:53:44+00:00; +1s from scanner time.\\n49152/tcp open  msrpc              Microsoft Windows RPC\\n49153/tcp open  msrpc              Microsoft Windows RPC\\n49154/tcp open  msrpc              Microsoft Windows RPC\\n49158/tcp open  msrpc              Microsoft Windows RPC\\n49160/tcp open  msrpc              Microsoft Windows RPC\\nService Info: Host: JON-PC; OS: Windows; CPE: cpe:/o:microsoft:windows\\n\\nHost script results:\\n|_clock-skew: mean: 1h15m01s, deviation: 2h30m00s, median: 0s\\n|_nbstat: NetBIOS name: JON-PC, NetBIOS user: <unknown>, NetBIOS MAC: 02:9f:c6:68:b1:03 (unknown)\\n| smb-os-discovery:\\n|   OS: Windows 7 Professional 7601 Service Pack 1 (Windows 7 Professional 6.1)\\n|   OS CPE: cpe:/o:microsoft:windows_7::sp1:professional\\n|   Computer name: Jon-PC\\n|   NetBIOS computer name: JON-PC\\\\x00\\n|   Workgroup: WORKGROUP\\\\x00\\n|_  System time: 2021-07-12T11:53:37-05:00\\n| smb-security-mode:\\n|   account_used: <blank>\\n|   authentication_level: user\\n|   challenge_response: supported\\n|_  message_signing: disabled (dangerous, but default)\\n| smb2-security-mode:\\n|   2.02:\\n|_    Message signing enabled but not required\\n| smb2-time:\\n|   date: 2021-07-12T16:53:37\\n|_  start_date: 2021-07-12T16:51:28\\n```\\n\\n\x3c!--truncate--\x3e\\n\\n## msfconsole\\n\\n--\x3e i searched for eternal blue exploit and found this in metasploit\\n\\n![](Attachments/Pastedimage20210712130527.png)\\n\\n--\x3e then set the options\\n\\n![](Attachments/Pastedimage20210712130556.png)\\n\\n--\x3e if you want meterpreter shell then use this payload\\n\\n```c\\nwindows/x64/meterpreter/reverse_tcp\\n```\\n\\n--\x3e now exploit the payload and i got shell !\\n\\n---\\n\\n## Privesc\\n\\n--\x3e i typed hashdump and found password hashes for user and root\\n\\n--\x3e so Let\'s crack them\\n\\n![](Attachments/Pastedimage20210712133425.png)\\n\\n--\x3e and i got the password for Jon\\n\\n![](Attachments/Pastedimage20210712134201.png)\\n\\n---\\n\\n### Flag finding\\n\\n--\x3e i got first flag at c directory\\n\\n![](Attachments/Pastedimage20210712133451.png)\\n\\n--\x3e we can\'t use cat here so we have to use **more** command to read the file\\n\\n![](Attachments/Pastedimage20210712133507.png)\\n\\n--\x3e i got second password at c:\\\\Windows\\\\system32\\\\config where the passwords are stored within Windows\\n\\n![](Attachments/Pastedimage20210712133600.png)\\n\\n--\x3e and i got 3rd flag at C:\\\\Users\\\\Jon\\\\Documents\\n\\n![](Attachments/Pastedimage20210712134022.png)\\n\\n==> and we completed the machine !\\n\\n---"},{"id":"welcome","metadata":{"permalink":"/Cybernotes/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/Cybernotes/blog/tags/facebook"},{"label":"hello","permalink":"/Cybernotes/blog/tags/hello"},{"label":"docusaurus","permalink":"/Cybernotes/blog/tags/docusaurus"}],"readingTime":0.405,"truncated":false,"authors":[{"name":"0xSH1V4M","title":"Author","url":"https://github.com/shivam1317","imageURL":"https://avatars.githubusercontent.com/u/70281451?v=4","key":"shivam"}],"frontMatter":{"slug":"welcome","title":"welcome","authors":"shivam","tags":["facebook","hello","docusaurus"]},"prevItem":{"title":"THM Blue writeup","permalink":"/Cybernotes/blog/2022/02/23/Blue"},"nextItem":{"title":"MDX Blog Post","permalink":"/Cybernotes/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/Cybernotes/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"docusaurus","permalink":"/Cybernotes/blog/tags/docusaurus"}],"readingTime":0.175,"truncated":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"prevItem":{"title":"welcome","permalink":"/Cybernotes/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/Cybernotes/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\\"button clicked!\\")}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\\"button clicked!\\")}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/Cybernotes/blog/long-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"May 29, 2019","tags":[{"label":"hello","permalink":"/Cybernotes/blog/tags/hello"},{"label":"docusaurus","permalink":"/Cybernotes/blog/tags/docusaurus"}],"readingTime":2.05,"truncated":true,"authors":[{"name":"0xSH1V4M","title":"Author","url":"https://github.com/shivam1317","imageURL":"https://avatars.githubusercontent.com/u/70281451?v=4","key":"shivam"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"shivam","tags":["hello","docusaurus"]},"prevItem":{"title":"MDX Blog Post","permalink":"/Cybernotes/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/Cybernotes/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/Cybernotes/blog/first-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"hola","permalink":"/Cybernotes/blog/tags/hola"},{"label":"docusaurus","permalink":"/Cybernotes/blog/tags/docusaurus"}],"readingTime":0.12,"truncated":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"prevItem":{"title":"Long Blog Post","permalink":"/Cybernotes/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);