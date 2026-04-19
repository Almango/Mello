---
title: Python网络爬虫_HTTP请求与响应【2】 #  设置文章标题
published: 2023-07-11 20:02:53             # 设置发布时间（默认不设）
cover: https://bu.dusays.com/2026/03/24/69c23136dbd2c.webp
tags: [Python, Socket, 网络编程]                                # 添加分类
category: 技能 
slug: "7280656c"
---

## 问题引入：
> 网络爬虫爬取的对象的是Web，我们将它称之为服务端，而爬虫就是本地的客户端。那么要怎样才能使客户端与服务端建立连接并爬取数据呢？这时就需要利用HTTP了

## 什么是HTTP?
HTTP：超文本传输协议（Hypertext Transfer Protocol，简称：[HTTP](https://blog.csdn.net/weixin_51367845/article/details/123313047?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522168913470416800227440124%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=168913470416800227440124&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-123313047-null-null.142%5Ev88%5Econtrol_2,239%5Ev2%5Einsert_chatgpt&utm_term=HTTP&spm=1018.2226.3001.4187)）它是一个简单的请求-响应协议，架构运行在TCP之上。这套协议定义了客户端可发送什么样的请求（Request）信号和服务器可返回什么样的响应（Response）。

它的作用是规定www服务器与浏览器之间信息传递规范，是二者共同遵守的协议。

**当用户使用浏览器输入网址访问目标网站时，需要向网站服务器发送HTTP请求，通过发送请求即可从服务器获取页面内容的响应。但实际上服务器只会发送网页代码，我们所看到的页面效果是经过浏览器渲染而成的**。

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_spider2_1.jpg)

## 请求类型：
HTTP请求类型有八种：（GET、POST、HEAD、PUT、DELETE、OPTIONS、TRACE、CONNECT）

但我们常用的只有两种**：GET**和POST。

- GET ： 用于获取数据，一般用于搜索排序和筛选之类的操作。
- POST ：用于将数据发送给服务器，一般用于修改和写入数据，比如注册一个表单账号。

因为网络爬虫是爬取数据，获取数据用到的是GET，所以POST很少被用于爬虫。

## HTTP请求的组成
HTTP请求由三部分组成：(**请求行；请求头；请求体**）
   

- 请求行：请求方法、请求路径、HTTP协议及版本组成。
- 请求头：包含Host，User-Agent，Accept（用于告诉服务器一些相关的信息）
- 请求体：向服务器发送的附加信息

 
![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_spider2_2.jpg)


**请求行**：
- GET：请求类型，也可以为POST
- User/info：需要访问的URL根路径（你需要访问的服务器资源根URL）
- HTTP/1.1：HTTP传输协议及1.1版本


**请求头**：
- User-Agent：用于告诉服务器客户端相关的信息（如请求是通过什么工具发出的，工具类型和版本是什么）。
- Accpet：用于告诉服务器客户端想要接收的资源类型
   
**请求体**：
- {...}：用于传给服务器任意数据（POST方法为空）
    
我们也可以通过浏览器的调试功能来查看这些参数，以百度为例，向百度的服务器发送请求。快捷键<kbd>F12</kbd>打开调试，刷新，打开NetWork，随便找个文件，即可看到请求数据，


![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_spider2_3.png)

## HTTP响应的组成：
当客户端浏览器发送以上请求后，服务器会根据请求内容响应给浏览器相关数据。

响应由三大部分组成：(**状态行；请求头；请求体**）

- 状态行：包含了协议版本，状态码和状态信息
- 请求头：包含Host，User-Agent，Accept（用于告诉服务器一些相关的信息）
- 请求体：向服务器发送的附加信息

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_spider2_4.jpg)

**状态行**：
  - HTTP/1.1：HTTP传输协议及1.1版本
  - 200：[状态码](https://blog.csdn.net/qq_43418737/article/details/121851847?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522168912807516800192298756%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=168912807516800192298756&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-2-121851847-null-null.142%5Ev88%5Econtrol_2,239%5Ev2%5Einsert_chatgpt&utm_term=%E7%8A%B6%E6%80%81%E7%A0%81&spm=1018.2226.3001.4187)为200
   - OK：和状态码相对应，表示服务器请求成功
   
 **请求头**：
  - Date：表示的是服务器响应的时间
  - Content-Type：服务器所返回内容的类型及编码格式

   
**请求体**：
 - 为服务器要给客户端响应的内容。一般是HTML代码，即网页源码
   
通过调试，我们同样可以查看服务器的响应

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_spider2_5.png)
  
  ## 总结
> 了解HTTP请求和响应的原理后，将会对网络爬虫有了跟多的看法，对后期的学习也有很大的帮助。
> 下期将利用Python发送一个爬虫请求。
