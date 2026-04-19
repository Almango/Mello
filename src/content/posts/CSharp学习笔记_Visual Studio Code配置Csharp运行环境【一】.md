---
title: C#(CSharp)学习笔记_前言及Visual Studio Code配置C#运行环境【一】
published: 2024-02-03 11:10:44
cover: img/cover/csharp.jpg           # 设置文章封面
tags: [C#, .NET]                                # 添加分类
category: 学习笔记 

slug: "32402894"
---


## 前言
> 1. 这可以说是我第一次正式的踏入C#的学习道路，我真没想过我两年前是怎么跳过C#去学Unity3D游戏开发的（当然了，游戏开发肯定是没有成功的，都是照搬代码）。而现在，我真正地学习一下C#，就和去年学的Python那样。
> 2. C#对于我来说，可以做的和我想做的有很多，比如：桌面应用开发，移动应用开发，游戏开发，等等，不仅如此，学习C#对于我以后学习C/C++也是起到很大的帮助的。
> 3. 虽然我对这门语言抱有很多看法，但是学总比不学好，谁叫我和它有如此缘遇。
> 4. 希望我的路顺风顺水。

## 1.什么是C#和.NET？
### C# (C Sharp)

> 1. C#是微软公司发布的一种由C和C++衍生出来的面向对象的编程语言、运行于.NET Framework和.NET Core(完全开源，跨平台)之上的高级程序设计语言。并定于在微软职业开发者论坛(PDC)上登台亮相。
> 
> 2. C#是由C和C++衍生出来的一种安全的、稳定的、简单的、优雅的面向对象编程语言。它在继承C和C++强大功能的同时去掉了一些它们的复杂特性（例如没有宏以及不允许多重继承）。C#综合了VB简单的可视化操作和C++的高运行效率，以其强大的操作能力、优雅的语法风格、创新的语言特性和便捷的面向组件编程的支持成为.NET开发的首选语言
> 3. C#使得C++程序员可以高效的开发程序，且因可调用由 C/C++ 编写的本机原生函数，而绝不损失C/C++原有的强大的功能。因为这种继承关系，C#与C/C++具有极大的相似性，熟悉类似语言的开发者可以很快的转向C#.。

![post_CSharp1_1.jpg](https://s2.loli.net/2024/02/03/s6WVpHeEr1xIjD5.jpg)

### .NET

> 1. .NET 是一个免费的跨平台开放源代码开发人员平台，用于生成多种类型的应用程序。 .NET 可以运行使用多种语言编写的程序，其中 C# 是最常用的语言。 .NET 依赖于许多大规模应用在生产中使用的高性能运行时。
> 
> 2. .NET 平台专为实现高效工作、性能、安全性和可靠性而设计。 它通过垃圾回收器 (GC) 提供自动内存管理。 由于使用了 GC 和严格的语言编译器，.NET 的类型安全且内存安全。 它通过 async/await 和 Task 基元实现并发。 .NET
> 包含大量库，这些库具有广泛的功能，并针对多个操作系统和芯片体系结构的性能进行了优化。

![post_CSharp1_2.png](https://s2.loli.net/2024/02/03/rIDQ8mhuFWdxY7S.png)
## 2.安装.NET

> 1 .NET是一种用于构建多种应用的免费开源开发平台，可以使用C#、F#或Visual Basic编写.NET应用。
>2. 部署.NET平台用于运行C#程序

1. NET8是目前最新的.NET版本，它是世界领先的开发平台之一的最新 LTS 版本。.NET 8 提供了数以千计的性能、稳定性和安全性改进，以及平台和工具增强功能，有助于提高开发人员的工作效率和创新速度。
2. 话不多说，直接前往Microsoft官网下载：[https://dotnet.microsoft.com/zh-cn/download](https://dotnet.microsoft.com/zh-cn/download)

3. 点击中间的下载按钮即可。
![post_CSharp1_3.png](https://s2.loli.net/2024/02/03/6qg8dbrSzMo4YHR.png)

4. 下载完成后打开文件直接安装。等待安装完成即可……!
![post_CSharp1_4.png](https://s2.loli.net/2024/02/03/hzoSx4nKUrHwYiG.png)
5. 安装完成后，使用cmd命令验证一下是否成功。

```bash
dotnet --version
```

5. 当显示版本号后，则说明安装成功了。
![post_CSharp1_5.png](https://s2.loli.net/2024/02/03/xYOTFi1RgQtKJsc.png)

## 3.VSCode配置环境
1. 启动Visual Studio Code ,搜索“ C#” 扩展，并下载……
![post_CSharp1_6 .png](https://s2.loli.net/2024/02/03/LPZhnKABbewN13u.png)
2. 下载完成后重启软件。
## 4.执行"Hello World"代码
1. C#执行“Hello World”其实也挺简单的。
2. 我们打开终端，确定好文件夹，输入一下命令创建一个工程项目

```csharp
dotnet new console
```
![post_CSharp1_7.png](https://s2.loli.net/2024/02/03/xy8BEjuJgrWPvG4.png)

3. 选择一个.cs后缀的文件，编写好代码。
4. 在控制台输入一下命令，可直接执行C#代码（当然了，对于初学者来说包括我，什么类，命名空间，是啥都不知道，但是以后我们会慢慢熟悉的）

```csharp
dotnet run
```

![post_CSharp1_8.png](https://s2.loli.net/2024/02/03/MPkVFjJeQUnXT68.png)
5. 我们也可以使用快捷键 <kbd>Ctrl + F5</kbd> 实现调试运行。
## 5.Code Runner运行代码
1. 使用cmd命令或者调试运行往往是不太灵活和快速的，为了更加方便，我们可以使用VScode的一个插件：**Code Runner**。
2. 在扩展市场搜索 "**Code Runner**"  ，点击安装。
![post_CSharp1_10.png](https://s2.loli.net/2024/02/03/wBS1gshVQEYxZcd.png)
3. 安装好后进入该扩展的扩展设置，将 "**Run In Terminal**" 选项勾选上，这样代码就会在终端上执行。
![post_CSharp1_11.png](https://s2.loli.net/2024/02/03/Kqeol73FWkfyb2u.png)
4. 最后我们点击 "**Executor Map**"的编辑选项，我们找到"csharp"，将里面的参数改为 "**dotnet run**" 即可
![post_CSharp1_12.png](https://s2.loli.net/2024/02/03/w3nrOxpFg2AYvcz.png)![post_CSharp1_13.png](https://s2.loli.net/2024/02/03/5g9tWuGSaAMFUHd.png)
 5. OK，完成后我们可以直接点击**右上角的三角形按钮**就可以直接运行C#程序了，十分的方便！

![post_CSharp1_14.png](https://s2.loli.net/2024/02/03/FTtl3A84CkKYEs9.png)
## 结语
1. 有关C#从认识到搭建运行环境到这里就结束了，如果有地方有问题还请大家指出
2. 下期见 bye……