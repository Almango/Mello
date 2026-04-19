---
title: Unity2D开发记录_游戏场景搭建【1】
published: 2024-11-09 12:49:34
cover: img/cover/unity.jpg
top_img: false
tags: [Unity. Unity2D]
category: 学习笔记
slug: "b122fcb8"
---

> 时隔一年，我又重新回到了Unity2D，但这次我是带着一个新的希望来的。
>在此之前我做好了充足的准备：在这里，我不会再和之前一样优哉游哉，而是把所有走过的路全都记录下来，Unity这东西，不记不用很容易生疏，当然了，更多细节这里会一笔带过，重要的会明提。

> 关于搭建Unity啥的就不用说了，这里直接从搭建场景开始吧......


## 创建场景

> 完成场景搭建主要经过以下几个步骤：

 - 下载与导入地形素材
 - 创建`Tilemap`
 - 配置`Tile Palette`
 - 编辑场景

### 下载场景素材

> 可前往Unity官方商店Assets Store下载一些免费的素材 

直达链接：[https://assetstore.unity.com/zh-CN?category=2d&free=true&orderBy=1](https://assetstore.unity.com/zh-CN?category=2d&free=true&orderBy=1)


1 . 找到喜欢的素材后，可以直接添加到Unity编辑器。
2 . 然后在 Window > Asset store 找到并点击`download`来安装素材
3 . 最后点击`import`导入素材即可


### 创建Tilemap

>Tilemap主要起到为编辑场景的辅助作用，它会在场景面板中显示网格，以帮助我们在对应的网格编辑场景。

1 . 右键Hierarchy（层级窗口）窗口，点击2D object > Tilmap > Rectangual，之后层级窗口就会新增一个Grid对象，这就说明Tilmap创建成功了，可以看到，Scene中出现了网格

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_unity1_1.png)


### 配置Tile Palette。

1 . 现在我们需要去配置Tile Palette。
2 . 点击 菜单栏的 Window > 2D > Tile Palette。
3 . 此时的Tile Palette可能是空的，我们需要创建一个新的Palette，点击`Creat New Palette`，可以新建一个文件夹打开。

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_unity1_%202.png)

4 . 随后，我们需要找到我们所导入的素材文件（一般位于`Texture`目录中），在关闭Tilp Palette编辑模式的前提下，直接`将素材文件拖入到Palette`中，再点击右上角的网格图标，这样就能显示网格了。

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_unity1_%203.png)

### 编辑场景

1 . 现在我们就可以编辑场景了。
2 . 我们点击Tile Palette的`画笔工具`，选择要用的场景像素，随后在Scene场景中`点画编辑`即可。
>当然，我们1也可以在Tile Palette中使用其他工具，例如橡皮工具，区域块工具，选择工具等等……


![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_unity1_%204.png)

**编辑完成后，保存即可，而这个地形场景位于Gird > Tilemap中。**

## 问题解疑

>在上述过程中也难免会遇到一些问题，这里是我在应用时所遇到的问题。

### 素材像素与Tilemap网格大小不匹配

1 . 出现这种问题只需要点击素材文件，在右边弹出的`Inspector`(检查器窗口)中，修改`Pixels Per Uint`的数值即可，这个数值需要和素材本身的像素大小一样，也就是说，这个素材是16像素，那么这个值也得是16像素。

