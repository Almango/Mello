---
title: C#(CSharp)学习笔记_封装【十八】
published: 2024-06-16 15:55:00
cover: img/cover/csharp.jpg           # 设置文章封面
tags: [C#, .NET]                                # 添加分类
category: 学习笔记 
slug: "b101b397"
---

## 什么是封装？

1. 封装是面向对象思维的三大特性之一。
2. 封装是将数据和对数据进行操作的函数绑定到一起的机制。它隐藏了对象的内部状态和实现细节，只对外提供必要的接口，从而确保对象内部状态的完整性和安全性。封装的主要目的是增强安全性和简化编程，用户只需要知道对象提供哪些方法，而不需要了解内部细节。
3. 就好比是一部手机，我们知道手机的具体硬件，他给我们提供了很多功能，但同时呢也隐藏了一部分不让我们用户知晓的信息，以确保手机的安全和完整。

## 访问修饰符

1. 访问修饰符是关键字，用于指定成员或类型已声明的可访问性。
2. 我们在进行封装时，可以给予封装体不同级别的访问权限。

![在这里插入图片描述](https://testingcf.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_package.png)
4. 可使用访问修饰符指定以下 7 个可访问性级别：
   - [`public`](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/public)：访问不受限制。
   - [`protected`](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/protected)：访问限于包含类或派生自包含类的类型。
   - [`internal`](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/internal)：访问限于当前程序集。
   - [`protected internal`](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/protected-internal)：访问限于当前程序集或派生自包含类的类型。
   - [`private`](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/private)：访问限于包含类。
   - [`private protected`](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/private-protected)：访问限于包含类或当前程序集中派生自包含类的类型。
   - [`file`](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/file)：已声明的类型仅在当前源文件中可见。 文件范围的类型通常用于源生成器。

5. 例如：当我们创建一个类，并在其中定义一个Simple( )私有方法，那么在另一个类的Main( )方法中将无法调用该类中的私有方法，若我们在Main( )所处的类中定义一个Ease( )私有方法，我们会发现，我们可以直接调用该方法。这是因为*Private修饰符访问限于包含类*，也就是说只能访问本类中的私有方法。

```csharp

using System;
namespace Project
{
    public class Boom
    {
        private static void Simple()    // 定义私有方法
        {
            Console.Write("Hello World");
        }
    }
    public class Almango
    {
        private static void Ease()    // 定义私有方法
        {
            Console.Write("你好世界");
        }
        static void Main(string[] args)
        {
            Boom.Simple();    
            // 无法调用“Boom.Simple()”不可访问，因为它具有一定的保护级别 CS0122
            Almango.Ease()
            //  可调用
            
        }
    }
}
```

6. 本次以Private作为例子，更多修饰符的具体用法，可参考[官方文档](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/access-modifiers)
## 实例演示
```csharp
using System;
namespace Almango
{
    public class Fight()
    {
        public int attack;   // 声明攻击力
        public int blood;    // 声明血量

        public void FunctionFight( int attack, int blood)   // 定义构造函数
        {
            this.attack = attack;   
            this.blood = blood;
        }
        public void Fightting()
        {

            Fight A = new Fight();   // 实例化 A玩家
            Fight B = new Fight();   // 实例化 B玩家
            A.FunctionFight(20, 100);
            B.FunctionFight(40, 100);

            A.blood -= B.attack;    // 模拟A玩家被B玩家攻击扣血场景

            Console.WriteLine("A玩家受到B玩家的攻击：" + "-" + B.attack);
            Console.Write("A玩家剩余血量：" + A.blood + "\n");
            Console.Write("B玩家剩余血量：" + B.blood + "\n");
        }
        public static void Main(string[] args)
        {
            Fight Play = new Fight();

            Play.Fightting();   

        }
    }
}
```

```csharp
>>> A玩家受到B玩家的攻击：-40
>>> A玩家剩余血量：60
>>> B玩家剩余血量：100
```
1. 示例代码通过封装游戏在战斗模式中的不同过程：从攻击，到攻击计算，到输出受击后的血量，它使得我们大大减少了代码量和提高了代码的运行效率，不仅如此，这样看上去更简约和优雅。
2. 对于每一位面向对象语言的初学者来说，多学多练，掌握好面向对象的三大特征，这对于往后开发效率的提高和可扩展性至关重要。
