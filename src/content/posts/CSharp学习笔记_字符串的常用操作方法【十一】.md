---
title: C#(CSharp)学习笔记_字符串的常用操作方法【十一】
published: 2024-03-10 17:36:00
cover: img/cover/csharp.jpg       # 设置文章封面
tags: [C#, .NET]                                # 添加分类
category: 学习笔记 
slug: "0c567812"
---


@[toc]
## 索引字符串( Index )
1. 当我们要查看字符串中的某个字符时，我们可以使用索引功能。

```csharp
string ax = "我是大帅哥";

char temp = ax[2];
Console.WriteLine(temp);
```
2. 查看运行效果：

```csharp
>>>大
```
## 遍历字符串( for )
1. 遍历字符串可以使用for语句，通过循环迭代的索引值，获取字符串的每一个字。
2. 其中**ax.Length**表示获取字符串中的字符个数。

```csharp
using System;
namespace tiamo
{
	public class Program
	{
	    static void Main(string[] args)
	    {
	    	string ax = "我是大帅哥";    // 定义一个字符串

	    	for(int i = 0; i < ax.Length; i++)   
	    	{
	    		Console.WriteLine(ax[i]);   // 利用循环索引，打印
	    	}
	    }
	}
}
```
3. 查看运行效果：

```csharp
>>>我
>>>是
>>>大
>>>帅
>>>哥
```

## 拆分字符串( Split )
1. 拆分字符串我们通常采用Split()方法，它会以某个字符作为拆分点，并将拆分下来的字符串或字符转变为一个字符串数组。
2.  Split 方法是 System.String 类的一个静态方法，用于将字符串拆分为字符串数组。
3. 该方法的具体语法：**Spilt("分割点")**
4. 所以我们需要通过遍历才能拿查看数组内的所有值。
5. 虽然foreach()无法直接遍历字符串类型，但可以遍历出数组类型中的字符串。
6. 其中Split(",")中的,表示将，作为拆分点。更多相关可参考   [官方文档](https://learn.microsoft.com/zh-cn/dotnet/csharp/how-to/parse-strings-using-split)

```csharp
string ax = "我是大帅哥，我很想低调，但这很难";

string[] temp = ax.Split("，");	  

foreach (string x in temp) 
{
	Console.WriteLine(x);
}
```
5. 查看运行效果：

```csharp
>>>我是大帅哥
>>>我很想低调
>>>但这很难
```

## 替代字符串( Replace )
1. 完美可以使用Replace( )方法来实现替代字符串。
2. 该方法的具体语法：**Replace("被替代的", "要替代的" )**

```csharp
string ax = "精益求精，至臻至善";

string temp = ax.Replace("至臻至善", "成就完美");

Console.WriteLine(temp);
```

3. 查看运行效果：

```csharp
>>>精益求精，成就完美
```

## 提取字符串( Substring )
1. 使用Substring( )方法可以从指定的索引值开始提取。
2. 该方法的具体语法：**Substring(index, length)**，其中index表示该索引值开始提取，length表示提取的字符长度，如果只指定一个参数，则默认为index。

```csharp
string ax = "我是大帅哥";  

string temp = ax.Substring(2);     // 从索引2开始提取（包括索引2）
Console.WriteLine(temp);

string temp_2 = ax.Substring(1, 3);  // 从索引1开始提取，只提取3个字符
Console.WriteLine(temp_2);
```
3. 查看运行效果：

```csharp
>>>大帅哥
>>>是大帅
```
## 插入字符串( Insert )
1. Insert( )方法为我们提供了插入字符串的功能。
2. Insert 方法是 StringBuilder 类的一个成员，它用于在 StringBuilder 对象的指定位置插入一个字符串。
3.  该方法的具体语法：**Insert(index, value)**其中，index表示在该索引值后面插入，value表示要插入的字符串或字符。
```csharp
string ax = "我是大帅哥";

string temp = ax.Insert(2, "超级");
Console.WriteLine(temp);
```

```csharp
>>>我是超级大帅哥
```
## 移除字符串( Remove )
1. Remove 方法是 StringBuilder 类的一个成员，它用于从 StringBuilder 对象中删除指定范围的字符。
2. 该方法的具体语法：**Remove(index, value)**，其中index表示该索引值开始移除，length表示移除的字符长度，如果只指定一个参数，则默认为index，如果为0，则表示全部移除为空

```csharp
string ax = "我是大帅哥";

string temp = ax.Remove(1);
Console.WriteLine(temp);

string temp_2 = ax.Remove(2, 2);
Console.WriteLine(temp_2);
```

```csharp
>>>我是
>>>我是哥
```