---
slug: sar-1
title: Vulnhub SAR-1 writeup
description: SAR-1 machine writeup from Vulnhub
authors: ["shivam"]
image: "/img/Vulnhub/SAR-1.png"
tags: ["RCE", "crontab"]
---

Hello everyone,

Today we are going to solve SAR-1 machine from vulnhub. we will learn about sar2HTML RCE and crontabs.

![](/img/Vulnhub/SAR-1.png)

<!--truncate-->

## basic Enumration

--> nmap results:

```bash
PORT STATE SERVICE VERSION
80/tcp open http Apache httpd 2.4.29 ((Ubuntu))
|\_http-server-header: Apache/2.4.29 (Ubuntu)
|\_http-title: Apache2 Ubuntu Default Page: It works
MAC Address: 08:00:27:C8:DD:67 (Oracle VirtualBox virtual NIC)
```

---

--> gobuster results:

```bash
[08:18:06] 200 - 11KB - /index.html
[08:18:11] 200 - 94KB - /phpinfo.php
[08:18:14] 200 - 9B - /robots.txt
[08:18:15] 403 - 274B - /server-status
```

---

=> got this in robots.txt

```
sar2HTML
```

## sar2HTML

--> got this in http://10.0.2.16/sar2HTML

![](Attachments/Pastedimage20210702082406.png)

--> searched for sar2HTML 3.2.1 version exploit and got this :

![](Attachments/Pastedimage20210702082553.png)

--> used exploit and got remote code execution as _www-data_

![](Attachments/Pastedimage20210702082943.png)

---

==> got reverse shell using python3 payload

![](Attachments/Pastedimage20210702083137.png)

--> got user.txt in `/home/love/Desktop/user.txt`

![](Attachments/Pastedimage20210702083502.png)

---

## privesc

--> found one cronjob which is running as a root at every 5 minutes of interval

![](Attachments/Pastedimage20210702084459.png)

==> so Let's try to change this file and try to get reverse shell !

--> i also found crontabs as a vulnrable so now i am 100% sure it's crontab exploitation!

![](Attachments/Pastedimage20210702085258.png)

--> finally.sh file is executing another file which is write.sh

![](Attachments/Pastedimage20210702085645.png)

--> so Let's read that file !

--> and i added netcat mkfifo reverse shell into it and after 5 minutes i got reverse shell as root !

![](Attachments/Pastedimage20210702090247.png)

---> and we pwned the machine!
