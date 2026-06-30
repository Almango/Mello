---
title: 我的世界Java版本搭建本地服务器：实现开服与联机自由 #  设置文章标题
published: 2024-11-15 14:34:01             # 设置发布时间（默认不设）
top_img: false  
# cover: https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/EXPLORE_PDPScreenshotRefresh2024_multipleBiomes_01.png           # 设置文章封面
tags: [开服,MC]                                # 添加分类
category: Minecraft
slug: "4185c5cc"
---

> 最近因为某些原因，我和兄弟临时转MC玩了，开始是考虑了一下冈易我的世界，但想到冈易那代理mc环境跟一坨一样，甚至高质量的光影全要钱，干脆不如玩纯净版的MC，于是就想着自己搭建一个本地服务器。虽然第一次有点麻烦，但我还是将全过程记录了下来。

本期介绍的是Java版我的世界本地服务器和实现多人联机的实现过程：`仅供参考`


## 前提条件

>  - Java 11或以上版本1
> - Minecraft Edition 任意版本


## 部署Server核心

> 服务器核心文件是一个JAR文件，内部的文件按下列结构组织，是用于运行服务器的软件。在这个软件中，有几个核心要素是关键的，它们共同构成了服务器的基础架构。以下是我的世界服务器核心的主要组成部分

常用的Minecraft服务器核心有以下几种：

- **Bukkit**
- **Paper**
- **Velocity**
- **Spigot**


这里我就以`Spigot`为例，搭建一个本地服务器。
> 注意：Spigot版本不能低于Minecraft游戏版本。


首先下载Server核心：Getbukkit官网网站：https://getbukkit.org/download/spigot/
- 备用地址1：[https://www.fastmirror.net/#/home](https://www.fastmirror.net/#/home)
- 备用地址2：[https://sync.mcsl.com.cn/](https://sync.mcsl.com.cn/)


创建一个目录用于存放服务器文件，并将下载好的`核心文件.jar`放进去（目录名称不能存在中文或特殊字符）

在该目录新建一个文本文档，并进行编辑：

```bat
@echo off
java -Xmx2g -Xms1g -jar Spigot-1.20.4-4074.jar
pause
```

>Spigot-1.20.4-4074.jar：服务器核心文件名称
>Xmx2g：申请本地的最大~最小内存为2G（可自定义`>= 1G`）

保存后，将其名称及后缀名改为`Launch.bat`


![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_mcserver_1.png)

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_mcserver_3.png)

双击运行`Launch.bat`

这个时候，会弹出终端并初始化服务器所需的配置文件。

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_mcserver_2.png)

当提示“`请按任意键继续...`”时，退出终端。

这个时候目录就已经生成了一个名为`eula.text`的文本文档。我们将其打开，并将代码`eula`的值改为`true`。

重新打开`Launch.bat`，等待加载。

当出现如下图所示，则说明服务器核心已配置完成，可以正常使用。

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_mcserver_4.png)


## 加入服务器

我们打开游戏，点击多人游戏，并添加服务器地址：`127.0.0.1:25565`，这个时候可以看到添加后的服务器状态是正常的，随即进入服务器。
这里有两个点要注意：
>- 如果你是盗版用户，默认是无法加入游戏的，进去时会弹出：`验证用户名失败！`，需要将服务器配置文件`server.properties`中的代码`online-mode`值设置为`false`
>- 服务器IP默认端口是`25565`
>- 服务器核心会默认选择你的最新存档作为地图。

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_mcserver_5.png)

## 互联网多人联机

> 此时的状态，只有局域网内才能联机，广域网的玩家是无法看到的。这个时候我们可以用到`内网穿透`来实现互联网范围的多人联机。

注册一个樱花内网穿透账号：[SAKURA FRP](https://www.natfrp.com/?page=panel&module=download)

登录官网，随机在官网打开控制面板，点击导航栏的用户页面中的`重设用户密钥`，并将新的密钥复制下来。

下载并安装樱花内网穿透软件：[前往官网下载](https://www.natfrp.com/tunnel/download)

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_mcserver_6.png)

启动`SakuraFrp启动器`，并在设置中登录自己的密钥。

点击侧边栏的隧道。并创建一个新的隧道。

在创建面板中：
- 节点你可以选择一个离你比较近的`节点`
- 隧道类型选择：`TCP隧道`，
- 随后输入隧道名（可自定义）
- 主机IP为：`127.0.0.1`，
- 端口为MC服务器的端口`25565`，

其他的可以默认不填，随即创建隧道。

随后你就可以在隧道面板中启动隧道了，启动后打开日志，下图所示的链接就是服务器的IP地址了。

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_mcserver_7.png)

下次启动服务器就一直会用到这串地址，广域网的玩家也可以通过这个IP来找到你的服务器并一起游戏。

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_mcserver_8.png)
## 自定义服务器配置文件

> 在服务器核心目录，我们可以找到名为：`server.properties`的文件，这个就是服务器的配置文件，我们可以通过修改其参数来调整服务器，例如：游戏模式，最大玩家数，游戏难度，服务器IP和端口等...

`online-mode`：正版用户验证（建议关闭）

`server-port`：服务器端口（不建议修改）

`max-players`：最大玩家数

`enable-command-block`：是否启用命令方块

`motd`：服务器描述

Server.properties各参数详解可参考：[Minecraft Wiki](https://zh.minecraft.wiki/w/%E6%9C%8D%E5%8A%A1%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%BC%E5%BC%8F?variant=zh) 或者 [Spigot中文开发指南](https://spigotmc-cn.netlify.app/)

>必须保证在服务器关闭的前提下修改配置参数，重新启动后才会生效。


## 使用命令

我们可以直接通过服务器核心来使用指令。
例如

```bash
# 赋予玩家管理员权限
op [玩家名]
# 踢出玩家
kick [玩家名]
# 死亡不掉落
gamerule keepinventory true
```
你也可以通过`help`来查看指令集

当然，如果你是服主，可以给自己赋予管理员权限，这样你就可以在游戏内使用指令了。  

>至于如何添加mod和地图，这个后续会再次补充...


>到这里服务器就已经配置完成啦，快去和小伙伴们一起冒险吧！


