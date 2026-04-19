---
title: C#(CSharp)学习笔记_Switch条件判断分支语句【六】
published: 2024-02-06 22:56:05
cover: img/cover/csharp.jpg           # 设置文章封面
tags: [C#, .NET]                                # 添加分类
category: 学习笔记 

slug: "656b4469"
---

## Switch语句

> Switch在一些计算机语言中是保留字，其作用大多情况下是进行判断选择。以C语言来说，switch（开关语句）常和case break
> default一起使用。
1. Switch语句就相当于是else if语句，有着很相似的作用：根据条件执行相对应的代码。
2. Switch通常和case,break和deault配合使用。
    - **case**：当case条件满足时要执行的代码区快
    - **break**：当执行case内的代码后，跳出Switch语句。
    - **default**：当所有的case条件都不满足时，程序会执行的代码块
3. 语法如下：

```csharp
switch (expression)
{
	case label1:
		code to be executed if expression = label1;
		break;
	case label2:
		code to be executed if expression = label2;
		break;
	default:
		code to be executed
	if expression is different
	from both label1 and label2;
}
```

4. 实例：

```csharp
int week = 2;

switch (week)
{
    case 1:
        Console.WriteLine("今天星期一");
        break;
    case 2:   
        Console.WriteLine("今天星期二");            // 输出：“今天星期二”
        break;
    case 3:
        Console.WriteLine("今天星期三");
        break;
    case 4:
        Console.WriteLine("今天星期四");
        break;
    case 5:
        Console.WriteLine("今天星期五");
        break;
    case 6:
        Console.WriteLine("今天星期六");
        break;
    case 7:
        Console.WriteLine("今天星期天");
        break;
}
```
## 结语：
1. 今天暂时先更新到这，明天再写完整一点。
