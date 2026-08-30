---
title: Python网络爬虫 _反爬虫【4】 #  设置文章标题
published: 2023-07-16 11:56:54           # 设置发布时间（默认不设）
cover: https://bu.dusays.com/2026/03/24/69c23136dbd2c.webp
tags: [Python]                                # 添加分类
category: 技能 
slug: "a515b568"
---

> 由于网络爬虫具有一定的弊端，使用网络爬虫可以悄无声息的从互联网上获取很多资源，包括一些付费，原创和不公开的资源。所以很多大型网站都采取了反爬虫机制，来抵御爬虫的不正当行为。
> 本次介绍了**什么是反网络爬虫？**，**简单的爬虫伪装操作？**以及**如何应对网络爬虫？**。

## 什么是反网络爬虫？
反爬虫：**是指对扫描器中的网络爬虫环节进行反制，它会根据ip访问频率，浏览网页速度和User-Agent等参数来判断是否为网络爬虫，随后通过一些反网络爬虫机制来阻止或妨碍网络爬虫的正常爬取。**以此达到网络爬虫恶意获取网站资源的效果。


## 爬虫伪装
### 1. 什么是爬虫伪装？
爬虫伪装：**指的是将爬虫伪装成其他工具，**

我们知道请求头中的User-Agent是用于告诉服务器请求是通过什么工具发出的（浏览器，程序，），以及工具对应的版本和类型是什么。

现在大多网站，都会根据User-Agent的参数来判断请求是否为网络爬虫发出的，服务器都希望访问网站的用户，是浏览器发出的请求，而不是爬虫程序。因为爬虫本身就是一种程序，所以就会被反爬虫机制给阻止。

我们只需要将User-Agent的参数更改一下即可。
#### 

#### 2. 反爬实例：
豆瓣网带有反网络爬虫机制。

套用上期代码，当我们正常的去爬取豆瓣页面时，会出现如下错误。

![](http://testingcf.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_spider4_1.png)

什么意思呢？**HTTP Error : 418的意思是服务器检测到是爬虫发来的请求而不是浏览器，所以果断拒绝了请求**。这正是网站的反爬虫机制。

现在我们就可以更改一下User-Agent代码，将爬虫伪装成浏览器。

User-Agent被包含在请求头中，而**请求头的类型是个字典**。所以我们这样定义：

![](http://testingcf.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_spider4_2.png)


   -  ReHeads为请求头的对象，它的类型是个字典
   -  'User-Agent'的值为发送请求的工具及对于的类型和版本。我们需要将浏览器的版本类型等参数传入即可。
  
那么怎么查看浏览器的版本类型等参数呢？很简单，我们可以<kbd>F12</kbd>打开调试，随便复制一份浏览器向其他服务器发送的请求，请求头内就包含了浏览器的相关信息。


![](http://testingcf.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_spider4_3.png)

将它复制下来，传给'User-Agent'，最后将ReHeads赋值给send内的可选参数headers。

```python
import requests  # 导入模块


ReHeads = {
    'User-Agent': 'Mozilla/6.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36'
}
send = requests.get('https://www.douban.com/', headers=ReHeads)  # 获取服务器对象
if send.status_code == 200:
    print(f'请求的服务器成功...\n状态码：{send.status_code}')
    print(send.text)  # 获取页面源代码

else:
    print(f'服务器请求失败...\n状态码：{send.status_code}')
```
运行代码，可以看到，服务接受了请求，并成功返回了源代码。这说明伪装很有效。

![](http://testingcf.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_spider4_4.png)

## 如何防范网络爬虫？
近几年，网络爬虫的肆虐，使得各大网络平台的数据防不胜防，保护数据，反对爬虫恶意行为势在必行。

了解了以上的网络爬虫伪装。也可以总结出一些防范方法了：

>  **通过user-agent来控制访问**：最经典的反爬虫方法，判断发送请求的对象，来达到反爬虫的目的。
>  **加密服务器内参数**：将网站内的数据加密，返回时利用js代码进行拼接，达到爬虫抓取了而无法使用的效果。
>  **使用IP代理池来反反爬虫**：根据对方IP的频繁访问服务器，可检测到对方对方是否为爬虫，并限制访问。

以上是最常用的反爬虫方法。

## 总结
本期介绍了反爬虫的相关概念，并总结了一些反爬虫方法。

通过本期介绍，将会对爬虫有个更深入的认识。

> 内容为本人学习笔记,难免有不足之处,恳请大家批评指正。
