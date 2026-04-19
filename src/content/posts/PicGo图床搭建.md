---
title: PicGo + Github图床搭建    #  设置文章标题
published: 2024-07-28 22:05:02             # 设置发布时间（默认不设）
cover: img/cover/picgo.png           # 设置文章封面
top_img: false
tags: [图床, PicGo]                                 # 添加分类
category: 图床
slug: "01b09ff2"
---



> 图床是一个网络术语，指的是用于存放图片的服务器。用户可以将图片上传到图床服务器，图床服务器会为这些图片生成一个可以公开访问的链接（URL）。这样，用户就可以在网页、博客、论坛等地方通过这个链接引用图片，而不需要将图片文件直接存储在这些地方。

1 . 我在使用图床之前，我一种是将图片保存在本地，这个方法有很大的不足，就当上传文章的时候，图片也跟着上传了，其次是处理起来很麻烦，每次都要打开本地目录寻找图片，写文章，添加插图的效率十分底下，为此不得不寻找新的方法来提高效率。

2 . 所以：`Github + PicGo + jsdelivr`，就是一个很不错的选择。
3 . 接下来的话，看看如何搭建这样的图床吧！

### 安装PicGo
>PicGo 是一个用于快速上传图片并获取图片 URL 的工具，它支持多种图床服务，如 GitHub、阿里云 OSS、腾讯云 COS 等。通过 PicGo，用户可以方便地将图片上传到指定的图床，并获取到图片的链接，用于在网页、博客或其他文档中展示图片。

1 . 需要先下载并安装PicGo。

**官网地址**：[https://picgo.github.io/PicGo-Doc/zh/](https://picgo.github.io/PicGo-Doc/zh/)


### 创建Github仓库
> 创建一个仓库用作图床的储存库

1 . 创建完成成后，打开gihub的设置选项：`Settings`.
2 . 在侧边栏点击：`Developer settings`。
3 . 将`Personal access tokens` 展开，并点击`Tokens (Classic)`，新建一个tokens，自定义一个秘钥并确认。
4 . 最后将`Select scopes`勾选框的repo全部勾选上即可。



![](https://jsd.cdn.zzko.cn/gh/Almango/Blog_imgbed@main/post/post_picgo_1.png)

4 . 新建秘钥后，将秘钥复制下来。

### 配置PicGo

1 . 启动PicGo。
2 . 在侧边栏，将`图床设置`展开，点击Github项。
3 . 在设置选项中：

 - 设置仓库名：用户名/仓库名
 - 设定分支名：分支名（main / master）
 - 设定Token：Github创建的秘钥
 - 设定存储路径：仓库里的子目录名称（可选）
 - 设定自定义域名：https://cdn.jsdelivr.net/gh/[用户名]/[仓库名]@main




![](https://jsd.cdn.zzko.cn/gh/Almango/Blog_imgbed%40main/post/post_picgo_2.png)

4 . 到这里，PicGo已经配置完成。
5 . 可以正常上传图片。

### 说明

1 . Github被当做图床的储存仓库，通过Token将仓库和PicGo连接起来，可以在PicGo中快速的向仓库中上传图片。
2 . 为了防止Github被DNS污染，这里使用JSDliver来解决此问题。
>jsDelivr是一个免费开源的CDN解决方案，用于帮助开发者和站长。 包含 JavaScript 库、jQuery 插件、CSS 框架、字体等等 Web 上常用的静态资源。

3 . 虽然起到CDN加速作用，但效果并不显著，若有效果更好的CDN，我会在后面补充到。

4 . 以上就是对整个图床的搭建及其大概说明。



###  补充

**若jsdelivr效果差，可以切换成国内的`Chinajsdelivr`**

> 一个免费面向中国境内外的高速jsdelivr镜像站

Gitee：[https://github.com/momo54181/Chinajsdelivr](https://github.com/momo54181/Chinajsdelivr)

Github：[https://github.com/momo54181/Chinajsdelivr](https://github.com/momo54181/Chinajsdelivr)



**使用**

只需要把

[https://cdn.jsDelivr.net](https://gitee.com/link?target=https%3A%2F%2Fcdn.jsDelivr.net)

全局替换成

[https://jsd.cdn.zzko.cn](https://gitee.com/link?target=https%3A%2F%2Fjsd.cdn.zzko.cn) 或者是 [https://cdn.jsdelivr.us](https://gitee.com/link?target=https%3A%2F%2Fcdn.jsdelivr.us)

可以再加一个判断，如果上方不可达的话

[https://cdn.jsdelivr.us](https://gitee.com/link?target=https%3A%2F%2Fcdn.jsdelivr.us)