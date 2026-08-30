---
title: Python网络爬虫_发送HTTP请求【3】 #  设置文章标题
published: 2023-07-13 15:32:10             # 设置发布时间（默认不设）
cover: https://bu.dusays.com/2026/03/24/69c23136dbd2c.webp
tags: [Python]                                # 添加分类
category: 学习笔记 
slug: "91fa9024"
---

> 了解HTTP协议相关知识后，我们可以尝试利用Python发送一次HTTP请求。
>Request是Python的第三方库，用于构建和发送HTTP请求。

## 安装Requests：
因为是第三方库，所以我们需要用到命令行终端的pip来进行安装。

打开终端，输入 `pip install requests` 再回车。

当显示如图所示，则表示安装成功了。

**#安装成功：**

但是如果显示如下，则表示你已经安装过了Requests，不需要再进行安装了。

**#安装失败（重复）：**

打开该库后可以看到里面包含了很多方法模块，而我们待会就会用到里面的status_codes

## 编写代码：
### 1. 发送HTTP请求
当Requests库安装好之后，就到了编写Python代码的环节了，新建一个py文本。

导入Requests模块。因为爬虫的主要行为是爬取内容，所以我用GET请求方法，获取一个服务器对象。我们拿百度为例。get内写的是要获取的完整的URL。 **注意**：URL要带上http协议，加密协议带https。


```python
import requests  # 导入模块

send = requests.get('https://www.baidu.com/')  # 获取服务器对象
```
当运行这串代码后，就相当于已经发送了HTTP请求了，而服务器响应的内容在send对象中。但是当我们打印对象内容时，会发现输出的是响应发出的状态码。状态码为200，则说明服务器接受了请求并得到响应。

<!-- ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/1b0b8cea35078fe2dddd278a673a71b7.png) -->
**有的时候，当我们发送请求是，并不一直都是可以正常进行的。因为服务器的原因，也可能会出现其他状态**。

**#常见的状态及状态码有如下：**
- 200：服务器接受了请求，并响应页面。
- 201：服务器接受了请求，但尚未处理。
- 204：服务器接受了请求，但没有返回任何内容。
- 300：针对完成的请求,您需要进一步进行操作。
- 301：请求的URL网页已经移动到新的位置。
- 400：服务器不理解请求的语法。
- 403：服务器拒绝接受请求。
- 404：服务器找不到请求的页面，该页面不存在。
- 500：服务器发生错误，无法完成请求。
- 503：服务器目前无法使用，服务器正在维护或停机。

稍微将代码改动一下，如果请求成功则打印成功状态码，如果失败，则打印失败和状态码。

```python
if send.status_code == 200:
    print(f'请求的服务器成功...\n状态码：{send.status_code}')
    print(send.text)  # 获取页面源代码

else:
    print(f'服务器请求失败...\n状态码：{send.status_code}')

```

### 2. 获取页面内容
简单这么操作后，这也并不是我们想要的内容，我们要的是更多的信息，比如页面源代码。

这很简单，只需要加个方法

```python
import requests  # 导入模块

send = requests.get('https://baidu.com/')  # 获取服务器对象
if send.status_code == 200:
    print(f'请求的服务器成功...\n状态码：{send.status_code}')
    print(send.text)  # 获取页面源代码

else:
    print(f'服务器请求失败...\n状态码：{send.status_code}')

```
运行之后，以下得到的就是页面的HTML源代码。

<!-- ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/3c30de91ba43b93a82458cbbcefe37d3.png) -->

关于什么是HTML，这个后期会进行讲解。

## 总结：
本次我们简单地介绍如何用Python Requests模块来发送HTTP请求并得到响应内容。

这下有人可能会说：就这？这不在浏览器就能搞的源码吗？但我想说的是：这只是爬虫的第一步，小试牛刀而言。

我也是学一步，写一步。我相信后面一定会更精彩。

后面讲解反爬虫机制。


>内容为本人学习笔记,难免有不足之处,恳请大家批评指正。