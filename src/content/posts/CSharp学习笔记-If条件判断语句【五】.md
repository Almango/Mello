---
title: C#(CSharp)学习笔记_If条件判断语句【五】
published: 2024-02-06 16:50:11
cover: img/cover/csharp.jpg     # 设置文章封面
tags: [C#, .NET]                                # 添加分类
category: 学习笔记 
slug: "e38a78d4"
---




## 前言：
1. 本期学习的是编程语言中的主要语句：**if**-条件判断语句。
2. 在这里我们会学到：if语法，if-else，和if嵌套。
3. 话不多说，我们开始吧！
## 什么是条件判断语句？
> 条件语句是用来判断给定的条件是否满足(表达式值是否为0)，并根据判断的结果(真或假)决定执行的语句，选择结构就是用条件语句来实现的。
1. 条件判断语句在程序中扮演着一个重要的角色。
2. 通过条件判断我们可以有更多的选择面对程序中产生的问题。
![post_CSharp5_1.png](https://s2.loli.net/2024/02/06/HbUcnOkpmgl4jCR.png)

## If语句
1. 语法如下：
2. 括号中 “conditional expression” 为**条件表达式**，我们通过在括号中写入条件表达式，语句将判断条件表达式是真还是假。
3. 花括号中的为：当条件为真（True）时，执行的语句。

```csharp
if(conditional expression)
{
   /* 当条件为真时将执行的语句 */
}
```
4. 下面看实例：
5. 结果成功输出了：Hello World
```csharp
// if代码实例：
int a = 17;

if (a > 16)
{
   Console.WriteLine(Hello World");         // 输出：“Hello World”
}
```

## If...else语句 
1. 一般来讲，当条件表达式不满足时，程序将不采取采取任何措施。
2. 而else则用来处理当条件为假时的问题。**也就是说当条件不满足时，执行else里的代码。**

![post_CSharp5_2.png](https://s2.loli.net/2024/02/06/bje7XqUrnhfQxkd.png)



```csharp
if(conditional expression)
{
   /* 当条件为真时将执行的语句 */
}
else
{
   /* 当条件为假时将执行的语句 */
}
```
3. 看实例：
4. 发现当条件不满足时，则输出了：”你好世界"

```csharp
// if...else代码实例：
int a = 17;

if (a > 16)
{
   Console.WriteLine(Hello World");         
}
else
{
    Console.WriteLine("你好世界");           // 输出：“你好世界”
}

```

## else-if语句 
1. 这个语句是用来处理当if不满足时，可以判断多个if分支的问题，**相当于有多个if语句**。
2. 按照编程语言从上往下的执行方式，**当if不满足，则执行else if，再不满足继续下一个else if……**
![post_CSharp5_3.png](https://s2.loli.net/2024/02/06/Cu8lzO3tQaS7xHr.png)


3. 看演示：
```csharp
// else-if代码实例：
            if (a > 18){
                Console.WriteLine("Hello World");
            }
            else if (a > 19){
                Console.WriteLine("Hello World -2");
            }
            else if (a > 15)
            {
                Console.WriteLine("Hello World -3");        // 输出："Hello World -3"
            }
            else if (a > 16)
            {
                Console.WriteLine("Hello World -4");
            }
```
4. 要注意的是：因为else if是包含在一个if语句中的，所以当其中一个else if条件满足时，执行完语句后，将跳出else if，结束整个if判断
## if-嵌套
1. 在if的执行语句中中我们是可以继续写if语句的，就跟套娃一样。
2. 被嵌套与嵌套的关系我们称为父子级关系，当然也有孙级，爷级……
3. 同理，可以按照这种逻辑往下继续写。
```csharp
// if嵌套代码实例：
int a = 17;

if (a > 15)
{
   Console.WriteLine("Hello World");         // 输出：“Hello World”

    if (a > 16)
    {
       Console.WriteLine("Hello C#");        // 输出：“Hello C#”
    }
    else
    {
       Console.WriteLine("你好世界");
    }
}
```
## if-逻辑表达式
1. 因为if语句是用来判断布尔值的，所以我们可以加入逻辑运算符，使得条件更严谨。
2. 我们可以回到上一期参考一下[逻辑运算符](https://tiamo17.gitee.io/2024/02/03/CSharp%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0-%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0_%E8%BF%90%E7%AE%97%E7%AC%A6%E3%80%90%E5%9B%9B%E3%80%91/)
3. 我们在条件表达式内设置个 && :当两个表达式同时满足时则条件为真。看实例：

```csharp
// if-逻辑表达式实例：
int a = 17;

 if (a >= 17 && a > 16)
 {
       Console.WriteLine("Hello World");     // 输出：“Hello World”
 }
```

## 结语：
1. 这篇文章大部分时间都用在画图和检查代码上了，总之写完了学会了就是好的！
2. 希望的努力不会白费。
3. 下期见：Bye~~