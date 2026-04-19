---
title: Linux学习笔记：Fedora操作系统的介绍与部署【2】
published: 2024-07-15 23:22:32
top_img: false
tags: [Linux,操作系统,开源]                               # 添加分类
category: Linux 
slug: "6631b8a8"
---



![img](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_fedora_1.png)

## 什么是Fedora？

1. **Fedora**是一种**基于Linux的操作系统**，由社区支持和开发。**Fedora是一个免费开源的操作系统**，提供了最新的软件和技术，适用于开发人员、系统管理员和普通用户。Fedora采用RPM软件包管理系统，并**使用GNOME桌面环境作为默认桌面**。Fedora还提供了许多工具和应用程序，如编程语言、开发工具、办公软件等，使用户能够轻松地完成各种任务。
2. Fedora是由Fedora项目社区开发、红帽公司赞助，目标是创建一套新颖、多功能并且自由（开放源代码）的操作系统。Fedora是商业化的Red Hat Enterprise Linux发行版的上游源码。
3. Fedora是一个以社区为基础的Linux操作系统，由Fedora Project社区维护，并由红帽（Red Hat）公司提供赞助。它以其快速的创新和对开源软件的承诺而闻名。Fedora是许多其他Linux发行版的基础，包括红帽企业Linux（RHEL）。

4. **特点**：

- **更新速度快**：Fedora每六个月发布一个新的版本，确保用户能够快速获得最新的软件和功能。
- **稳定性**：尽管更新速度快，但Fedora的每个版本都会在正式发布前经过严格的测试，以确保稳定性。
- **社区驱动**：Fedora由一群志愿者和开发者社区管理，他们贡献代码、文档、设计和翻译。

## 部署Fedora Workstation
##### 版本选择

1. Fedora官方提供了多种不同的Fedora Linux 变种版本，适用于不同用途，如Workstation，Server，CoreOS，Iot，Cloud。不仅如此，还提供了定制版，如KDE桌面版，Xfce，LXDE，Budgie等等。

2. 但为了方便，本次我们安装**Fedora Workstation**作为Linux发行版的学习对象。
#### 下载镜像

1. 首先我们需要下载Fedora Workstation的镜像。可在官网下载。

- Fedora官网：[https://fedoraproject.org/zh-Hans/workstation/download](https://fedoraproject.org/zh-Hans/workstation/download)

2. 下载完成后会得到一个.iso镜像。
3. 下面打开VMware虚拟机。

#### 配置虚拟机

1. 这里我仅在虚拟机中进行演示，如果有时间，我会重新写一篇在主机中安装Fedora的文章。那这里废话不多说……
2. 启动VMware，点击创建新的虚拟机。
3. 在“安装程序光盘映像文件”中选择好下载好的Fedora镜像文件.iso。

![img](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_fedora_2.png)

4. 在下一步我们需要为安装系统选择一个本地的虚拟硬盘空间，预计分配**40-50GB**的空间即可（宁可多分配点，也不要分少）。
5. 点击下一步。

6. 这里是即将准备创建的虚拟机配置信息，当然，如果对配置有意见，可以自定义硬件，比如修改内存分配，CPU核心之类的。

7. 内存：建议内存分配至少4GB以上，以保证系统稳定运行。

8. 处理器：至少分配**2**个核心（帮不能超过本地主机运行所需的核心数）

9. 最后点击完成，即可完成创建虚拟机。

#### 部署Fedora Workstation系统

1. 开机后我们会进入到Fedora Workstation的安装向导（该系统和Ubuntu一样人性化，安装门槛较低）

2. 所以接下来的事就更简单啦。

3. 我们为安装选择一个磁盘位置。



![img](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_fedora_3.png)


![img](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_fedora_4.png)


1. 在储存配置中，勾选自动配置，和通过删除或压缩已有分区释放空间。
2. 按照如下，逐步点击全部删除和回收空间
3. 最后点击完成即可开始安装。
4. 当安装完成后，右上角重启即可。

#### 使用前配置


![img](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_fedora_5.png)

1. 启动后，我们需要开始配置一下使用项。
2. 其实很简单：
3. 首先是**启动第三方软件安装权限**，设置用户名，和密码即可

![img](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_fedora_6.png)



![img](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_fedora_7.png)

## 结束

1. Fedora操作系统的安装就到此为止吧。
2. 总体来说，相对于其他Linux发行版（Arch，Debian，Manjaro）Fedora的部署会更简单些，和Windows一样有安装向导，可以说无脑安装。
3. 当我看到Fedora的桌面的那一刻，两个字：“简约”。太简约了，给人一种清爽便捷的视觉体验，当然了，UI，动画之类的也做得相当不错，很舒服。
4. 本次安装的是Fedora Workstation，是一款**适用于笔记本电脑和台式电脑的精美、易于使用的操作系统**，所以桌面看上去会十分的简约，代价是我们无法使用更多的linux功能，如果希望使用更多的功能可以体验KDE版本……。
5. 当然了，安装Fedora也只是我们临时作为Linux的学习对象。我们不会用它做过多的事。



