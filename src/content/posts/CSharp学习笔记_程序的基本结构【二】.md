---
title: C#(CSharp)学习笔记_程序的基本结构【二】
published: 2024-02-03 16:08:41
cover: img/cover/csharp.jpg           # 设置文章封面
tags: [C#, .NET]                                # 添加分类
category: 学习笔记 
slug: "b7e3a09f"
---



## 前言：

1. 对于一个初学者来说，理解程序的基本结构是非常有必要的，我们可以知道代码的用途，用法和编写准则。
2. 学习任何一门编程语言第一步都是输出“Hello World”，但途中我们会用到一些代码，而这些就是程序运行的最基本的结构。
3. 看下面代码。是不是除了个“Hello World”，其他啥都不知道？那么接下来就让我们一起了解一下C#的那些基本程序结构吧！（**注意**：以下解释都是本人观点，一部分会拿Python做对比，就是说：通俗易懂吧……）

## 语法须知：

 - C#的文件后缀为  **.cs**。 
 - C#的语法和Java非常相似，对于大小写非常敏感，使用注意命名规则。
 - C#是以 ***花括号***和 ***分号*** 来将代码分隔开来。

```csharp
using System;  //引入System命名空间

namespace helloWorld
 {  
    class First_1
     {
        static void Main(string[] args) 
        {
             Console.WriteLine("Hello World");
        }
    }
}
```

## Using

> using是C# 语言中定义一个范围，将在此范围之外释放一个或多个对象。

1. using（英文翻译：使用；利用），顾名思义就是**引用**的意思，和Python的import引用语句差不多
2. using是用来引入命名空间的语句，如代码：using System;，在输出“Hello World”时使用的Console方法就需要引入System，因为输出要用到控制台。
3. 我们可以尝试引用外部或内部的命名空间试试（结果是没有报错的）。

```csharp
using System;  //引入System命名空间
using HelloWorld;  //引用本程序内的命名空间
```

## NameSpace

> namespace 关键字用于声明一组相关对象的大小。可以使用命名空间组织代码元素和创建全局唯一类型。

1. namespace（**命名空间**）类和函数的整体区块，通过命名空间我们可以获取到类和函数。
2. namespace 是唯一的，如果其他外部人员，如开发团队主要是通过using命名空间来调用命名空间内的代码。
3. 程序的执行从 Main（函数）开始。
4. namespace的值一般与项目名同名（除非文件内有多个命名空间）

```csharp
namespace HelloWorld {}
```

## Class

> class关键字用来定义一个类，“Program”则是类的名为，类中通常用来存放程序中要使用的数据和函数（也叫方法）。

1. class（**类**）当需要引用代码时，我们需要先调用namespace再引用class
2. class命名法：开头字母必须大写；不允许将关键字作为名称；不允许特殊字符

```csharp
 class First_1 {}
```

##  static void Main(string[] args)

> 在class中，该代码的Main 为定义的函数名称，Main 函数是整个 C# 程序的入口，其中包含了程序运行时需要执行的操作。static 和 void 都是用来修饰 Main 函数的关键字。

1. 可以将 static void Main(string[] args) 理解为定义一个**函数**。
   - static：是将Main方法声明为静态， 是应用程序的入口。
   - void：说明main方法不会返回任何内容。 
   - string[] args：这是用来接收命令行传入的参数。string[]是声明args的数据类型，可以存储字符串数组。
2. 函数名必须唯一
3. 函数名首字母必须大写

```csharp
static void Main(string[] args) {}
```

## Console.WriteLine();

1. 程序的根代码，由方法和方法值组成，
2. 分号严格区分。
3. 方法来源于命名空间，比如"Console.WriteLine"就来源于System命名空间。

## 补充
1. C#不和Python一样创建一个文件就可以直接运行，在C#中，应该工程项目(又称：解决方案)才是一个文件的主体，应该工程项目不能有两个及更多.cs程序文件。
2. 所以我们将一个文件夹(工程项目)作为一个文件来开发。


## 结语

1. 当我们理解了C#程序的基本结构后，对于往后阅读代码和理解代码就会轻松很多。
2. 本来是不打算写这篇文章的，但是谁叫我脑子笨。（学了Python再去学其他编程语言，这语法差别是真的大，无情……）
3. 咱们下期见吧，Bye@_@……