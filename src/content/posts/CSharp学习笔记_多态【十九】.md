---
title: C#(CSharp)学习笔记_多态【十九】
published: 2024-06-17 21:10:18
cover: img/cover/csharp.jpg           # 设置文章封面
tags: [C#, .NET]                                # 添加分类
category: 学习笔记 
slug: "63a8df61"
---

## 前言
1. 个人觉得多态在面向对象编程中还比较重要的，而且不容易理解。
2. 也是学了一个下午，才把笔记写得相对比较完善，但仍欠缺一些内容。
3. 慢慢来吧……
# 什么是多态？
## 基本概念
1. 在编程语言和类型论中，多态（**Polymorphism**）指为不同数据类型的实体提供统一的接口。 多态类型（**Polymorphic Type**）可以将自身所支持的操作套用到其它类型的值上。
2. **多态是面向对象编程（OOP）的一个基本概念，是面向对象的三大特征之一**。它允许不同的对象对同一消息做出响应，但具体的行为会根据对象的实际类型而有所不同。在C#中，多态主要通过继承和接口实现。本文将探讨多态的基本概念、实现方式以及在C#中的一些实际应用。
3. 多态性可以定义为允许不同类的对象对同一消息做出响应的能力，但具体响应取决于消息接收者的实际类型。简单来说，多态性允许我们编写更通用的代码，可以处理不同类型的对象。
## 多态的作用
**1. 接口实现**：多态使得一个接口可以有多种不同的实现方式。子类可以重写父类的方法，以提供特定的实现。

**2. 代码复用**：通过继承和多态，可以减少代码的重复编写，提高代码的复用性。

**3. 灵活性和扩展性**：多态允许程序在不修改现有代码的情况下，通过增加新的子类来扩展功能。

**4. 解耦**：多态减少了代码之间的耦合度。高层模块可以操作抽象类型，而具体的实现可以由子类提供，这使得高层模块不依赖于具体实现。

**5. 动态绑定**：在运行时，多态允许调用正确的方法版本，这是通过动态绑定或晚期绑定实现的。

**6. 简化复杂性**：多态简化了处理复杂系统的方式，因为可以使用统一的接口来处理不同类型的对象。

**7. 支持开放/封闭原则**：多态支持开放/封闭原则，即软件实体应该对扩展开放，对修改封闭。这意味着可以在不改变现有代码的基础上增加新功能。

**8. 提高代码的可维护性**：由于多态减少了代码间的依赖，因此当需要修改或更新时，可以更容易地进行维护。

**9. 支持设计模式**：多态是许多设计模式的基础，如工厂模式、策略模式等，这些模式可以进一步增强代码的灵活性和可维护性。

**10. 促进面向对象设计**：多态是面向对象设计的核心概念之一，它鼓励开发者采用面向对象的方法来思考和解决问题。

在C#中实现多态，通常涉及到接口、抽象类和虚方法的使用。通过这些机制，开发者可以创建灵活且可扩展的应用程序。


# 多态的实现方法
## 虚方法重写
1. 虚方法（Virtual Methods）和方法重写（Override）是实现多态的两种机制，它们允许子类改变继承自父类的行为。
2. **虚方法（Virtual Methods）**

> - *定义*：虚方法是在基类中使用virtual关键字声明的方法，它允许在派生类中被重写。
> - *目的*：虚方法的目的是为了在派生类中提供特定于派生类的行为。 
> - *调用*：虚方法可以在基类中被调用，也可以在派生类中被调用，调用哪个方法取决于对象的运行时类型。
> - 使用场景：当你希望提供一个默认的行为，并且允许派生类根据需要修改这个行为时，使用虚方法。

3. **方法重写（Override）**

> - 定义：方法重写是在派生类中使用override关键字来重写基类中的虚方法。
> - 目的：方法重写的目的是为了提供与基类不同的实现，以适应派生类的具体需求。
> - 调用：方法重写只能在派生类中调用，用于改变或扩展基类的行为。
> - 使用场景：当你需要根据派生类的特性来改变基类方法的行为时，使用方法重写。


![在这里插入图片描述](https://testingcf.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_duotai_1.png)


**注意：*虚方法重写不能出现在同一个类中，重写方法必须在派生类中***
5. 看实例：C#中的virtual关键字允许我们定义一个可以在派生类中被重写的方法。我们先定义一个Fruit类，在里面用virtual关键字写一个Apple( )方法，看的出来，被virtual修饰符修饰的方法我们称它为虚方法。


```csharp
public class Fruit
{
    public virtual void Apple()
    {
        Console.Write("我是一个苹果");
    }
}
```
6. 在写完虚方法后，我们再定义一个继承Fruit类的派生类RedFuJiApple。在里面写一个重写方法Apple( )，什么叫重写呢？说明白点，就是把上面的虚方法重写，重写方法要用override关键字修饰。

```csharp
public class RedFuJiApple():Fruit
{
    public override void Apple()
    {
        Console.Write("我是一个红富士苹果");
    }
}
```
7. 最后执行代码，会发现：原本调用RedFuJiApple对象时，输出的应该是父类被继承的Apple方法，但因为我们在派生类中重写了Apple方法，所以最终输出的是：“我是一个红富士苹果"。父类中被重写的虚方法相当于被覆盖掉了。
```csharp
Fruit Eat = new RedFuJiApple();
Eat.Apple();
```

## 函数重载
1. 函数重载（Function Overload）是实现多态的方式之一。方法重载发生在同一个类中，它允许一个类中存在多个同名的方法，但它们的实际参数不能相同(包括实参的类型、数量或顺序不同，其中之一不同即可)。
**温馨提示**：*方法和函数本质上是没什么区别的，在面向对象中，它们俩经常被交替称呼，所以方法重载和函数重载其实指的是同一件事情。*
```csharp
public class Overload()
{
    public void calculation(int addition, int addition_2)
    {
        Console.WriteLine(addition + addition_2);
    }

    public void calculation(int multiplication)
    {
        Console.WriteLine(multiplication * multiplication);
    }
}
```
2. 我们可以在一个类中写多个同名方法，前提是实参内容不能相同。

```csharp
Overload Math = new Overload();
Math.calculation(1, 2);
Math.calculation(2);
```

3. C#编译器在编译时会根据传递给函数的参数类型和数量来确定调用哪个重载的方法。如果存在多个重载的函数，并且编译器无法确定调用哪一个，编译器将会报错。
4.  在调用方法时，我们只需要区分开来即可，这就是重载函数的使用，也是实现多态的方式之一。

## 抽象类与抽象方法

> 1. 抽象类往往用来表征对问题领域进行分析、设计中得出的抽象概念，是对一系列看上去不同，但是本质上相同的具体概念的抽象。
> 2. 在面向对象的概念中，所有的对象都是通过类来描绘的，但是反过来，并不是所有的类都是用来描绘对象的，如果一个类中没有包含足够的信息来描绘一个具体的对象，这样的类就是抽象类。

1. **抽象类(Abstract)是一种不能被实例化的类**，它通常用作其他类的**基类**。
2. 抽象类允许你定义一些通用的行为和属性，这些可以被派生类继承和扩展。
3. 抽象类也可以定义抽象方法。 方法是将关键字 **abstract** 添加到方法的返回类型的前面。

![在这里插入图片描述](https://testingcf.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_duotai_2.png)



4. 实例操作一下：我们定义一个抽象类Drink，并在类里面定义一个抽象方法Coffee，这个抽象方法不允许包含任何内容，其次我们在写一个普通的方法。
```csharp
public abstract class Drink()    // 抽象类
{
    public abstract void Coffee();   // 抽象方法

    public void MilkTea()
    {
        Console.WriteLine("我是一杯奶茶");
    }
}
```
5. 再另外定义一个派生类，重写一个Coffee方法。
```csharp
public class Juice() : Drink
{
    public override void Coffee()
    {
        Console.WriteLine("我是一杯咖啡");
    }
}
```
6. 在运行时我们会发现，我们无法直接实例化抽象类，也无法直接调用抽象方法，仅能够实例化派生类和调用重写方法。
```csharp
 Drink Eat = new Juice();
//Drink Eat = new Drink();  不允许实例化抽象类和调用抽象方法
Eat.Coffee();
Eat.MilkTea();
```
8.抽象类和抽象方法的主要用途是实现代码的复用和多态性，同时为派生类提供一个必须遵循的契约。

## 整体代码参考

```csharp
using System;
namespace Almango
{
    public class Fruit
    {
        public virtual void Apple()
        {
            Console.Write("我是一个苹果");
        }

    }
    public class RedFuJiApple():Fruit
    {
        public override void Apple()
        {
            Console.Write("我是一个红富士苹果");
        }
    }

public class Overload()
{
    public void calculation(int addition, int addition_2)
    {
        Console.WriteLine(addition + addition_2);
    }

    public void calculation(int multiplication)
    {
        Console.WriteLine(multiplication * multiplication);
    }
}

public abstract class Drink()    // 抽象类
{
    public abstract void Coffee();   // 抽象方法

    public void MilkTea()
    {
        Console.WriteLine("我是一杯奶茶");
    }
}

public class Juice() : Drink
{
    public override void Coffee()
    {
        Console.WriteLine("我是一杯咖啡");
    }
}


    class Run()
    {
        static void Main(string[] args)   // Main方法
        {
         
        }
    }

}
```
1. 到这里，面向对象编程的基本原理我们心里已经一知半解了，我们也离入门更进一步了。继续努力！！！