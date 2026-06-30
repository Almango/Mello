---
title: C#(CSharp)学习笔记_编程练习题_输出奇偶数, 九九乘法表, 猜数字游戏【八】
published: 2024-02-16 16:16:18
cover: img/cover/csharp.jpg           # 设置文章封面
tags: [C#, .NET]                                # 添加分类
category: 学习笔记 
slug: "82b37c58"
---

## 1. 输出奇偶数

1. 要求：输出从1到100的所有偶数

2. 分析：
> 1. 首先我们需要用到循环（while也好，for也好，但for会更加优雅），输出0到100的所以数。
> 2. 在for的循环体内写入if条件判断语句，条件表达式为：当输出的数除于2等于0时（也就是可以被2整除）则输出这个数。
> 3. 这样下来，可以被2整除的偶数都会被输出出来。
> 4. 以此类推，我们只需要在for表达式内将参数改改，就可以输出质数。

```csharp
using System;
namespace Test_1
{
    public class Program
    {
        static void Main(string[] args){

            // 输出偶数
            for (int i = 0; i < 101; i++){

                if(i % 2 == 0){
                    Console.WriteLine(i);
                }
             }
        }
    }
}
```
## 2. 九九乘法表
1. 要求：使用循环语句输出九九乘法表
2. 分析：

>1. 选择for语句进行嵌套循环
> 2. 最外层循环9次，子循环递增到9次


```csharp
using System;
namespace jiujiu
{
    public class Program
    {  
        static void Main(string[] args)
        {
            string str = " ";
            int i;
            int j;
            int sum;
            for (i = 1; i < 10; i++)
            {
                for (j = 1; j <=i; j++)
                {
                    sum = i * j;
                    Console.Write(j);
                    Console.Write("*");
                    Console.Write(i);
                    Console.Write("=");
                    Console.Write(sum);
                    Console.Write(str);
                }
                Console.WriteLine();
            }
            Console.Read();
        }
    }
}
```
3. 输出结果：


```csharp
PS G:\C#\test_1> dotnet run "g:\C#\test_1\Program.cs"
1*1=1 
1*2=2 2*2=4 
1*3=3 2*3=6 3*3=9 
1*4=4 2*4=8 3*4=12 4*4=16 
1*5=5 2*5=10 3*5=15 4*5=20 5*5=25 
1*6=6 2*6=12 3*6=18 4*6=24 5*6=30 6*6=36 
1*7=7 2*7=14 3*7=21 4*7=28 5*7=35 6*7=42 7*7=49 
1*8=8 2*8=16 3*8=24 4*8=32 5*8=40 6*8=48 7*8=56 8*8=64 
1*9=9 2*9=18 3*9=27 4*9=36 5*9=45 6*9=54 7*9=63 8*9=72 9*9=81 
```
## 3. 猜数字游戏
1. 要求：生成区间为(0, 12)的随机整数，并通过输入进行交互。
2. 分析：

> 1. 可使用Random函数，进行随机整数的生成
> 2. 将random类型转换为整数类型
> 3. 将输入写进while循环，并在内使用if进行对错判断，猜对了则break结束循环，否则继续循环。


```csharp
using System;
namespace Test_2
{
    public class Program
    {
        static void Main(string[] args){

            // 猜数字小游戏
            Random number = new Random();
            int a = Convert.ToInt32(number.Next(0, 12));
             
             Console.WriteLine("请输入你要猜的数字：");
               
               while (true)
               {
                    int b = Convert.ToInt32(Console.ReadLine()!);

                     if (b == a){
                            
                            Console.WriteLine("恭喜你♂，猜对啦！！！Boy Next Door♂");
                            break;
                     }
                     else{
                         
                         Console.WriteLine("猜错了！！！♂");
                 }
               }
        }
    }
}
```
3. 运行效果如下：


```csharp
猜错了！！！♂
9
猜错了！！！♂
8
猜错了！！！♂
1
猜错了！！！♂
10
恭喜你♂，猜对啦！！！Boy Next Door♂
```
