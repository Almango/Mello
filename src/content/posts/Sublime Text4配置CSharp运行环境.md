---
title: Sublime Text4配置C#运行环境
published: 2024-02-24 15:48:30
cover: img/cover/sublime.jpg         # 设置文章封面
top_img: false
tags: [C#, .NET, 开发工具]                                # 添加分类
category: IDE 
slug: "353077b0"
---

@[TOC](这里写自定义目录标题)

## 前言
1. 今天把家里的9年前的远古神机搬了出来，重装了个win7的精简版，本打算装个VScode测试一下是否能写C#代码，结果是可以的，但，卡成PPT了……
2. 所以就选择了SublimeText，即便捷又快速。
3. 但，网上对于Sublime Text4配置C#的文章实在是少的可怜，而且效果还不咋地。
4. 我琢磨了一下午，终于是琢磨出来了。
5. 今天就带大家学习一下如何快速，简单地在sublime中配置好C#的运行环境。

## 部署.NET环境
1. 前提当然是部署.NET啦。
2. 我们直接去Microsoft官网下载：[https://dotnet.microsoft.com/zh-cn/download](https://dotnet.microsoft.com/zh-cn/download)（[可以参考我往期的文章](https://blog.csdn.net/weixin_51290138/article/details/136002993?spm=1001.2014.3001.5501)）
3. 部署的话后面就不赘述了……

## Sublime Text4配置C#编译环境
#### 1. 下载插件
1. GitHub中有个叫 “***csharp-build-singlefile-sublime-text-2***“的插件，用于直接在Sublime中调用终端并运行程序， 由国外大佬**chrokh**开发。
2. 这个插件原本是用在SublimeText2上的，可以看到，作者也已经有8年没更新了，但用在Sublime Text4中效果是一样的。

3. 我们直接去GitHub中下载这个插件：[https://github.com/chrokh/csharp-build-singlefile-sublime-text-2](https://github.com/chrokh/csharp-build-singlefile-sublime-text-2)
4. 下载下来后，我们将其解压，将里面的名为：CSharpSingleFileBuild.sublime-build的文件复制到SublimeText的Packges文件夹中（可以从编辑器的Preferences > Browse Packages打开）

![post_sublimecsharp_1.png](https://s2.loli.net/2024/02/24/xVdfj4QRU3vLrqZ.png)
6. 打开这个文件，将里面的代码修改为下列代码并保存。

```bash
{
  "selector"  : "source.cs",
  "cmd"       : "mcs $file_name",
  "shell"     : true,

  "windows" : {
    "cmd"  : "csc.exe $file_name"
  },

  "variants"  : [
    {
      "cmd"   : "mono $file_base_name.exe",
      "name"  : "Run",
      "shell" : true,

      "windows" : {       
        "cmd": ["start", "cmd", "/k", " dotnet run ${file_path}/${file_base_name}"]
        
      }
    }
  ]
}
```
7. 最后我们在编辑器中选择 Tool > Build System > CSharpSingleFileBuild  即可。

![post_sublimecsharp_2.png](https://s2.loli.net/2024/02/24/Tsw9guXjv4fS2Dq.png)

## 运行测试
1. 我们写一段C#程序测试一下是否可以运行。
2. 快捷键<kbd>Ctrl + Shift + B</kbd> 选择下面的方式运行（以后可以直接使用<kbd>Crtl + B</kbd>）。

![post_sublimecsharp_3.png](https://s2.loli.net/2024/02/24/pTcAGJdvqj3L6kw.png)
3. 结果可以看到，运行成功了！！！

![post_sublimecsharp_4.png](https://s2.loli.net/2024/02/24/CGMmFELSyAvaHi5.png)

5. 如果你追求的编译速度，我认为使用Subliem Text是个很不错的选择，毕竟，轻装上阵嘛~
6. 本期讲解就到这，Bye~