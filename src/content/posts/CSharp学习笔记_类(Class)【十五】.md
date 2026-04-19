---
title: C#(CSharp)学习笔记_类(Class)【十五】
published: 2024-05-01 19:10:24
cover: img/cover/csharp.jpg           # 设置文章封面
tags: [C#, .NET]                                # 添加分类
category: 学习笔记 
slug: "98f9a243"
---

## 什么是类？
1. 类（Class）是面向对象程序设计（OOP，Object-Oriented Programming）实现信息封装的基础。类是一种用户定义的引用数据类型，也称类类型。每个类包含数据说明和一组操作数据或传递消息的函数。类的实例称为对象。

## 类的三大特性
1. **封装 (Encapsulation)**
封装是将数据（属性）和行为（方法）结合在一起的机制，同时限制对对象内部实现的直接访问。在C#中，封装通常是通过使用访问修饰符来实现的，比如private、protected、internal和public。封装的主要目的是隐藏对象的内部状态和复杂性，只暴露出一个清晰和简洁的接口供外部调用。

```csharp
public class MyClass
{
    private int myPrivateField; // 私有字段，外部无法直接访问

    public int MyProperty
    {
        get { return myPrivateField; }
        set { myPrivateField = value; }
    }

    public void MyMethod()
    {
        // 方法实现
    }
}
```
2. **继承 (Inheritance)**
继承是一种可以让新创建的类（子类或派生类）接收另一个类（父类或基类）的属性和方法的机制。继承支持代码的重用，并允许创建分层的类结构。在C#中，使用:操作符来表示继承关系。
```csharp
public class BaseClass
{
    public void BaseMethod()
    {
        // 方法实现
    }
}

public class DerivedClass : BaseClass
{
    public void DerivedMethod()
    {
        // 方法实现
    }
}
```

3. **多态 (Polymorphism)**
多态是指允许不同类的对象对同一消息做出响应的能力，即同一个接口，不同的表现。在C#中，多态性主要通过虚方法（virtual methods）、抽象类（abstract classes）和接口（interfaces）来实现。
```csharp
public abstract class Animal
{
    public abstract void MakeSound();
}

public class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Woof!");
    }
}

public class Cat : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Meow!");
    }
}
```
## 类的组成
1. 类由 **类名**，**属性**，**方法** 组成，同时我们也可以将它们称作为“***类的成员***”
- 类名：类名是类的标识符，用于定义和区分不同的类。
- 属性：类的属性是描述类的状态和特征的重要元素，它们可以通过不同的方式进行定义和访问，具体取决于所使用的编程语言和面向对象的设计原则。
- 方法：方法是类的成员函数，方法的设定赋予了类更多功能，比如我们要完成某个事，只需要提前将方法写好，就可以在同一种事情上充分利用方法。

```csharp
public class ClassName
{
    // 类的属性（字段）
    private int myField; // 私有字段
    public string MyProperty { get; set; } // 公共属性

    // 类的构造函数
    public ClassName() 
    {
        // 默认构造函数
    }
    
    public ClassName(string name) 
    {
        // 带参数的构造函数
    }

    // 类的方法
    public void MyMethod()
    {
        // 方法的实现
    }

    // 可以包含其他方法、属性、事件等
}
```