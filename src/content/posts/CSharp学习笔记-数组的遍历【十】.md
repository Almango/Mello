---
title: C#(CSharp)学习笔记_数组的遍历【十】
published: 2024-03-04 18:43:03
cover: img/cover/csharp.jpg         # 设置文章封面
tags: [C#, .NET]                                # 添加分类
category: 学习笔记 

slug: "35cf8a29"
---

## 输出数组内容
1. 一般而言，我们会使用索引来输出指定的内容。
```csharp
int[] arrayInt = new int[]  {4, 5, 2, 7, 9};
Console.WriteLine(arrayInt[3]);
```
2. 但这样只能输出指定的索引指向的内容，无法一下子查看数组全部的值。
3. 所以我们需要用到遍历方法输出所有元素。

## 几种常用的遍历方法
### 1. foreach( )
1. forach十分适合用作遍历数组，因为语法很简单。
2. 用过Python的都知道，它就相当于是Python语言中的for循环语句，当然，在C#中它也可以算作是一种循环语句。
3. 它的具体流程是**将数组内的元素，迭代给临时变量，每执行一次迭代一个元素给临时变量，直到全部迭代完成**。
```csharp
foreach (Type in Collection) {}
```

4. 看下面的案例：

```csharp
int[] arrayInt = new int[]  {4, 5, 2, 7, 9};

foreach (int temp in  arrayInt) 
{
	 Console.WriteLine(temp);
}
```

//  运行结果：

```csharp
>>>4
>>>5
>>>2
>>>7
>>>9
```
### 2. For
1. 其实用于遍历的主要就是循环语句。
2. for语句我们可以通过编写特定程序，也能够实现遍历。
3. 直接看实例吧：

```csharp
for (int temp = 0; temp < arrayInt.Length; temp++)
{
	 Console.WriteLine(arrayInt[temp]);
}
```
//  运行结果：

```csharp
>>>4
>>>5
>>>2
>>>7
>>>9
```
4. 其中：.Length是一种方法，用于获取各种容器中的长度。我们通过循环，将索引叠加，直到无法满足大于该长度即可。

### 3. While
1. while遍历数组的原理和for一样，其实没必要用while语句

```csharp
int[] arrayInt = new int[]  {4, 5, 2, 7, 9};

int temp = 0;
while (true) 
{
	Console.WriteLine(arrayInt[temp]);
	if (temp > arrayInt.Length) 
	{
		break;
	}
	else
	{
		temp ++;
    }
}
```
//  运行结果：

```csharp
>>>4
>>>5
>>>2
>>>7
>>>9
```

