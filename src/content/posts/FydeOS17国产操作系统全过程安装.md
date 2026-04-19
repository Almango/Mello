---
title: FydeOS17国产操作系统全过程安装【保姆级教程】
published: 2024-01-23 10:15:06
cover: img/cover/fydeos.png
tags: [FydeOS]
category: 操作系统                          # 添加分类


description: 基于Linux + Chromium Project国产操作系统开箱。
swiper_index: 2 #置顶轮播图顺序，非负整数，数字越大越靠前
slug: "ed1d45a3"
---


@[toc]
## 系统介绍
**什么是FydeOS ?**


> FydeOS （原名 Flint OS）是由燧炻科技创新（北京）有限责任公司基于开源项目 Chromium Project 二次开发，适配
> x86 与 ARM 硬件平台，定位于中国版的 Google Chrome OS。
> FydeOS提供包括操作系统产品定制化的技术咨询、解决方案以及商业授权服务。 
![post_fydeos17_1.png](https://s2.loli.net/2024/02/02/IC489kAt3TnUZz5.png)

>
>FydeOS 是一款基于Linux+Chromium Project开发的轻量级操作系统，它的和Google的Chrome OS极为相似，有着ChromeBook和MacOS类似的使用体验，能够在大部分主流硬件上平稳运行，并且兼容Android应用程序和Linux。
>以浏览器平台为基础，加入更多符合国内用户习惯的本地化功能以提升用户体验。经过长期的技术积累，FydeOS 有能力运行在各种主流的硬件设备之中并提供围绕 FydeOS 展开的整体解决方案。

>FydeOS适应了时代的发展，作为轻量级的操作系统，它能够轻松运行在老旧的计算机中，甚至是十几年前的电脑，从关机到桌面显示只需要几秒钟，正如它的价值观所说：“世间众生平等，硬件亦无高低贵贱之分。”

## 材料：
- 一个至少空闲16GB的U盘
- 电脑运行内存至少4GB以上
- USB 启动盘的辅助工具

## 下载安装
### FydeOS镜像下载
 1. 下载镜像首先登陆Fyde OS的官方网站 [https://fydeos.com/download/](https://fydeos.com/download/)
 2. 选择你所对应的设备。支持PC机，虚拟机，和定制系统，
 3.  我们选择 FydeOS For PC
 4. FydeOS For PC有三个选项可选
    
     1.还在使用三代或七代的英特尔(Intel)处理器并且是集成显卡的老电脑可以选择，一般十多年前的老电脑就可以选择。
     2.八代到十二代的英特尔(Intel)处理器并且是集成显卡的新机可以选择。
     3.搭载的是AMD Radeon系列的集成显卡及处理器的电脑可以选择。

我们选择第一个选项。

![post_fydeos17_2.png](https://s2.loli.net/2024/02/02/tSVfuoR9BNEDm2I.png)

5. 我们选择推荐下载："通过OneDrive下载"。
![post_fydeos17_3.png](https://s2.loli.net/2024/02/02/bszCM7hlGUtDaZo.png)
6. 页面跳转后，直接点击下载。并等待下载完成。
![post_fydeos17_4.png](https://s2.loli.net/2024/02/02/1D4mSjKNrMIy8Vn.png)


### Rufus U盘启动工具下载

> Rufus 是一个开源免费的快速制作 U 盘系统启动盘和格式化 USB 的实用小工具，它可以快速把 ISO
> 格式的系统镜像文件快速制作成可引导的 USB 启动安装盘，支持 Windows 或 Linux 启动。Rufus 小巧玲珑，软件体积仅 7
> 百多 KB，然而麻雀虽小，它却五脏俱全……

1. 前往Rufus中文官网：[https://rufus.ie/zh/](https://rufus.ie/zh/)
2. 下拉找到最新版本，并点击标准版下载。

![post_fydeos17_5.png](https://s2.loli.net/2024/02/02/EgBK3NJtnbvTSDO.png)
### 制作U盘系统启动盘
1. FydeOS镜像和Rufus下载好后，会出现以下文件。
![post_fydeos17_6.png](https://s2.loli.net/2024/02/02/IxKWqZbPXeOMR91.png)
2. 我们双击打开rufus。
3. 制作U盘系统启动工具我们需要进行一下操作：
   1. 选择可用的U盘设备（注意：如U盘内有重要文件，请及时备份！！！）
   2. 选择一下载好的FydeOS系统镜像文件
   3. 其他均默认
   4. 当状态显示准备就绪时，则开始制作
   
![post_fydeos17_7.png](https://s2.loli.net/2024/02/02/N8xcMv4fABmgdoQ.png)

4. 再次确认U盘内的数据备份，确认完毕后点击确定。

![post_fydeos17_8.png](https://s2.loli.net/2024/02/02/QPgsoYKr3pNifXq.png)



5. 最后等待镜像数据写入……
![post_fydeos17_9.png](https://s2.loli.net/2024/02/02/ixa64C3BImhg9EW.png)
6. 写入完成后点击关闭。
![post_fydeos17_10.png](https://s2.loli.net/2024/02/02/lEHBJSU8jYAi5P7.png)
## 安装FydeOS

### 设置U盘UEFI模式启动
1. 我们将U盘插入到需要安装的电脑中，并点击开机
2. 在进入到系统前，我们立即点击<kbd>ESC</kbd> 或 <kbd>F8</kbd>键进入到Bios面板。
3. 选择到Boot界面，将Boot Option优先权设置为U盘启动，这样我们在启动时进入的就是U盘中的FydeOS系统。
![post_fydeos17_11.png](https://s2.loli.net/2024/02/02/Bn8klCGKLufyp9c.png)
4. 选择到Save&Exit界面，选择 "Save Changes and Exit" 保存并退出![post_fydeos17_12.png](https://s2.loli.net/2024/02/02/XejHZ1AmdhqCpTE.png)

### FydeOS部署
1. 重启后它会自动进入U盘中的FydeOS系统，并出现开机图标。
![post_fydeos17_13.png](https://s2.loli.net/2024/02/02/uUETlxeiGSYFD6L.png)
2. 显示欢迎界面后，选择好语言 [中文（简体）]
![post_fydeos17_14.png](https://s2.loli.net/2024/02/02/HyXNxwR7nc18BrP.png)

3. 直接下一步
![post_fydeos17_15.png](https://s2.loli.net/2024/02/02/kfWJ15EOqt8cNFK.png)
4. 选择 “安装FydeOS” （正式地在电脑中安装FydeOS），选择好后就点击 “下一步”




5. 如果你不想保留分区只保留一个FydeOS系统的话，就选择 “全盘安装” ，并 “下一步”
![post_fydeos17_16.png](https://s2.loli.net/2024/02/02/OV2IEvBNyxkYThW.png)

6. 安装需要要在有网络的环境下进行，所以在此之前你需要先连接一下网络，否则会卡在安装界面。在右下角时间栏内可配置网络。

7. 完事之后点击安装即可。（大约会花个7-10分钟)
![post_fydeos17_17.png](https://s2.loli.net/2024/02/02/UaiNQmG6cEOwlZS.png)
![post_fydeos17_18.png](https://s2.loli.net/2024/02/02/b3ySrwQKeB64X1u.png)
8. 安装完成后，重启电脑。

9. 重启后可能要重新配置语言，同意服务协议，配置网络信息，和注册本地账号。这里就不再赘述。

## 体验
1. 配置完后即可进入桌面，如图：

![post_fydeos17_19.png](https://s2.loli.net/2024/02/02/X3AV2MYFPZQ7RnK.png)
2. 我们打开任务正中间的蓝色图标（Chromium浏览器）看看是否能正常浏览网页，我们再下载个壁纸装上试试。一切都很正常！！！
![post_fydeos17_20.png](https://s2.loli.net/2024/02/02/Sre5zTPxmdVLaJv.png)
![post_fydeos17_21.png](https://s2.loli.net/2024/02/02/uiCZWxI9BtnDXkh.png)
![post_fydeos17_22.png](https://s2.loli.net/2024/02/02/iPuK2n8sGNwAhxe.png)


### 结语
1. FydeOS给人第一感受就是非常非常的简约，轻便，和快速。十分适合用来创作，设计，和开发小项目。
2. 我也是首次体验国产操作系统，它的使用效果还是令人出乎意料的，不过目前我对它的认知程度也只是像文章内容的那样。
如果后续有什么新的探索发现我们再分享。
小伙伴们赶紧去体验吧！！!