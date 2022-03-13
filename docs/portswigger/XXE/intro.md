---
sidebar_position: 1
tags: ["intro"]
image: https://cdn.acunetix.com/wp-content/uploads/2017/07/11110651/XXE_600x315.png
---

## What is XML external entity injection?

![](https://cdn.acunetix.com/wp-content/uploads/2017/07/11110651/XXE_600x315.png)

XML external entity injection (also known as XXE) is a web security vulnerability that allows an attacker to interfere with an application's processing of XML data. It often allows an attacker to view files on the application server filesystem, and to interact with any back-end or external systems that the application itself can access.

:::note

In some situations, an attacker can escalate an XXE attack to compromise the underlying server or other back-end infrastructure, by leveraging the XXE vulnerability to perform [server-side request forgery](https://portswigger.net/web-security/ssrf) (SSRF) attacks.

:::
