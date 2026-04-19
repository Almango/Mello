---
title: C#(CSharp)学习笔记_三个经典算法题【十四】
published: 2024-05-01 10:57:18
cover: img/cover/csharp.jpg           # 设置文章封面
tags: [C#, .NET]                                # 添加分类
category: 学习笔记 

slug: "d94c1aed"
---

## 冒泡排序
```csharp
using System;
namespace Prosose
{
    public class Fibonacci
    {
        static void Main(string[] args)
        {
            int[] array = new int[] {3, 5, 1, 8, 6, 4, 33, 13, 26, 13};
            int temp;

            for(int a = 0; a < array.Length - 1; a ++)
            {
                for(int i = 0; i < array.Length -1; i ++)
                {
                    if (array[i] > array[i + 1])
                    {
                        temp = array[i];
                        array[i] = array[i + 1];
                        array[i + 1] = temp;
                    }
                }
            }
            foreach (int Recursive in array)
            {
                Console.Write(Recursive + ",");
            }
        }
    }
}
```


## 3n + 1问题
```csharp
using System;
namespace Prosose
{
    public class Fibonacci
    {
        static void Main(string[] args)
        {
            int a = 7;
            int again = 0;

            while (true)
            {
                if (a % 2 == 0)
                {
                    a /= 2;
                    if (a < 2)
                    {
                        Console.WriteLine("\n" + "一共运行了" + again + "次");
                        break;
                    }
                }
                else
                {
                    a *= 3;
                    a += 1;
                }
                again ++;
            Console.Write(a + ", ");

            }
        }
    }
}
```
## 九九乘法表
```csharp
using System;
namespace Prosose
{
    public class Fibonacci
    {
        static void Main(string[] args)
        {
            int k = 0;
            for(int a = 0; a < 10; a ++)
            {
                k ++;
                
                for(int b = 1; b < k; b ++)
                {
                    Console.Write(b + "*" + a + "=" + a*b + "  ");
                }
                Console.WriteLine("");
            }
        }
    }
}
```