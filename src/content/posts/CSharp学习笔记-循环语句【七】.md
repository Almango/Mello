---
title: C#(CSharp)学习笔记_循环语句【七】
published: 2024-02-16 13:46:50
cover: img/cover/csharp.jpg           # 设置文章封面
tags: [C#, .NET]                                # 添加分类
category: 学习笔记 
slug: "b42cfcfd"
---

## 什么是循环语句？

> 循环语句是由循环体及循环的终止条件两部分组成的。

> 在不少实际问题中有许多具有规律性的重复操作，因此在程序中就需要重复执行某些语句。一组被重复执行的语句称之为循环体，能否继续重复，决定循环的终止条件。循环结构是在一定条件下反复执行某段程序的流程结构，被反复执行的程序被称为循环体。

1. 编程语言中的循环语句大致分为两种：**While，For和Do...while**。那么这两种语句的本质区别在哪呢,接下来一起看看吧。

## While
1. While是计算机编程中的一种基本循环模式。若满足条件时则进入循环体，进入循环体后，若条件不满足时，则跳出循环。

![post_CSharp7_1.png](https://s2.loli.net/2024/03/31/LYsXQF4yz3Dc6vk.png)

2. 这是一种很典型的循环方式，所以语法也很简单。
```csharp
// While语句的表达式

while ( /*条件表达式*/ )
         {
             /*循环体*/
         }
 ```
3. 让我们来看看实例吧！  
```csharp
using System;
namespace Whiles
{
    class First_6
    {
        static void Main(string[] args){

            int a = 0;
            while (true)                     // 条件为true
            {
                a++;
                Console.WriteLine(a);
                
                if (a > 10){                // 当a大于10时，跳出循环
                    break;
                }
            }
        }
    }
}
```
输出的结果为：

```c
1
2
3
4
5
6
7
8
9
10
11
```
4. 可以看到，当while的条件满足时，则进入循环，不满足则跳出循环。

## For
1. for循环是编程语言中一种循环语句，而循环语句由循环体及循环的判定条件两部分组成。

![post_CSharp7_2.png](https://s2.loli.net/2024/03/31/Mf2AEcdn8zJ67sI.png)

2. for相当于While来说要更简洁。它的能够在条件表达式内定义变量并自定义条件。
```csharp
// For语句的表达式

for (  /* 单次表达式 ; 条件表达式 ; 末尾循环体 */)
         {
             /* 循环体 */
         }
```
3. 看下列代码。在for的条件表达式中，第一项为定义变量，第二项为条件，第三项为变量行为。
    1. 我们分析一下以下代码：我们定义一个数据类型为整数的i值为1，设置i<11，满足条件，进入循环体，每循环一次递增1，当i递增到11后，i < 11条件不满足，则跳出循环。  
    2. 所以最后输出的内容和上面while输出的内容是一样。
    3. 但我们可以明显的看到，for是要比while简洁的多的。（当然，这也得看应用场合）



```csharp
using System;
namespace Fors
{
    class First_6
    {
        static void Main(string[] args){

         for (int i = 1; i < 11; i++){

            Console.WriteLine(i);
         }
        }
    }
}
```
输出的结果为：

```c
1
2
3
4
5
6
7
8
9
10
11
```
## Do...while

>  do...while 循环是
> while循环的变体。在检查while条件是否为真之前，该循环首先会执行一次do之内的语句，然后在while内检查条件是否为真，如果条件为真的话，就会重复do...while这个循环,直至while为假。


![post_CSharp7_3.png](https://s2.loli.net/2024/03/31/7kvKNYX1J3WGidy.png)

1. do...while的语法也很简单，比while简洁得多。
 ```csharp
// Do...while 语句的表达式

do
     {
            /* 循环体 */ 
            
     } while ( /*条件表达式*/ );
```

2. 虽然do...while在实际开发中用的可能并不多，但掌握基础对以后的开发还是有所帮助的。
3. 接下来让我们看代码实例：
   1. 可以看到，条件表达式被写在了后面，do内为循环体，按照程序的先后顺序，其实已经无条件进入do的循环体了，do会被先执行，随后才开始条件判断，当不满足，第二次的循环黑背跳出。



```csharp
using System;
namespace While
{
    class First_6
    {
        static void Main(string[] args){

            int i = 0;

            do
            {
                Console.WriteLine(i);        // 第一循环无条件执行
                i++;
            } while (i < 10);                // 当不满足时，则跳出循环
        }
    }
}

```
## 结语
1. 我们时隔10天，终于动笔写了篇文章。
2. 只说基础。
3. 本期讲的是循环语句，当然，这篇文章：不论是C/C++还是C#都是通用的。语法相差不大。
4. 咱们下期见，下期应该要很久……Bye