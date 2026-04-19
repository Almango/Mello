---
title: C#(CSharp)学习笔记_枚举类型【十三】
published: 2024-04-04 11:55:43
cover: img/cover/csharp.jpg           # 设置文章封面
tags: [C#, .NET]                                # 添加分类
category: 学习笔记 

slug: "6d4e3b9e"
---

## 什么是枚举类型
1. 枚举类型(Enum)  是由基础整型数值类型的一组命名常量定义的**值类型。**
2. 枚举包含自己的值，但**不能继承或传递继承。**

## 语法
```csharp
// enum enum_name
// enum_name variable = enum_name.enum_value

// 定义一个枚举类型——例如：
enum enum_name
{
   value_1,
   value_2,
   value_3,
   value_4
}

```

```csharp
enum enum_name {value_1, value_2, value_3, value_4}
```
1. enum表示声明为枚举类型，Drink为枚举名，花括号内为枚举值
2. 枚举不能定义在方法内。
3. 枚举名用于指定枚举的类型名称，在方法中可以被当中类型来使用。
4. 若有多个枚举值，则用逗号来分隔开来。

## 接收和输出枚举值
1. 枚举类型是由基础整型数值类型的一组命名常量定义的**值类型。**
2. **枚举类型一旦被定义，则无法修改枚举值**，因为里面的值为常量。
3. 前面已经说过如何定义，所以我们直接来实例：
```csharp
using System;
namespace Enum_Project
{
    public class Program
    {
    
        //定义一个枚举类型
        enum Drink {MilkTea, CocaCola, BlackCoffee, MangoJuice}
        public static void Main(string[] args)
        {
            // 接收值
            Drink client = Drink.CocaCola;
            // 输出值
            Console.WriteLine(client);
        }
    }
}
```

```csharp

>>> CocaCola
```
## 关联数值转换
1. 一般来讲，我们只能通过枚举的基本值来获取内容，但其实每个值都有一个对于的数值，就和String类型的index索引一样。
2. 比如我们定义一个枚举类型enum a {我, 是, 帅, 哥}，其中“我”对应的就是数值0，“哥”对应的是数值3。
3. 但要注意的是，我们无法直接用和索引一样的方法来获取枚举值，我们需要通过数值的显示转换才可以。
> 对于任何枚举类型，枚举类型与其基础整型类型之间存在显式转换。 如果将枚举值转换为其基础类型，则结果为枚举成员的关联整数值。

4. 话不多说，我们直接用实例来观察：
```csharp
using System;
namespace Enum_Project
{
    public class Program
    {
    
        //定义一个枚举类型
        enum Drink {MilkTea, CocaCola, BlackCoffee, MangoJuice}
        public static void Main(string[] args)
        {
            // 显示转换并输出值
            Console.WriteLine((Drink)2);   // 输出数值“2”对应的值
            Console.WriteLine((int)Drink.MangoJuice);  // 输出值对应的数值
        }
    }
}
```
```csharp
>>> BlackCoffee
>>> 3
```
5. 可以发现，当我们转化为对于的数值2时，输出的就是第三个枚举值。

## Switch实际应用
1. 枚举类型用在Switch语句内，在合适不过了，因为枚举类型是定值，值为常量。
```csharp
using System;

namespace Enum_Project
{
    public class Program
    {

        enum Drink {MilkTea, CocaCola, BlackCoffee, MangoJuice}
        public static void Main(string[] args)
        {
            // Drink client = Drink.CocaCola;
            // Console.WriteLine((int)Drink.MangoJuice); 

            Drink Client = Drink.CocaCola;

            switch (Client)
            {
                case Drink.MilkTea:
                Console.WriteLine("您点了一杯奶茶");
                break;

                case Drink.CocaCola:
                Console.WriteLine("您点了一瓶可口可乐");
                break;

                case Drink.BlackCoffee:
                Console.WriteLine("您点了一杯黑咖啡");
                break;

                case Drink.MangoJuice:
                Console.WriteLine("您点了一杯芒果汁");
                break;

            }
        }
    }
}

```
```csharp
>>> 您点了一瓶可口可乐
```