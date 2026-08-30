---
title: C++结构体的用法浅析【5】
published: 2024-08-21 11:27:20
cover: img/cover/cpp.png          # 设置文章封面
top_img: false
tags: [C++,]                               # 添加分类
category: 学习笔记 


slug: "20284ace"
---

>C++中的结构体还是挺有必要记录一下，写个笔记的。它和类十分的相似，所以在这里需要做个具体的区分。
>结构体和类最大的区别就是：结构体的成员默认是完全公开`public`的，而类则默认是私有`private的。
## 结构体
1 . C++中的结构体（Struct）是一种数据结构，可以将创建好的结构体作为一个新的数据类型来使用。

2 . `结构体是一个单一名称下不同数据类型的变量的集合`。它与类相似，两者都保存着不同数据类型的数据集合。
3 . 通常情况下，当我们想多个同一属性的变量，在不使用类和结构体的情况下，我们需要声明多个变量来实现这些属性，而为解决这一不优雅的操作，结构体应运而生，它运允许在一个结构体内定义多个属性， 且将不同类型的数据项组合成一个单一的实体。结构体通常用于将数据分组，以便可以轻松地作为一个单元来处理它们。
## 语法
```c++
struct [structName]
{
   member-list
} [declarators];
```
- struct：结构体关键字
- structName：结构体名称
- member-list：成员列表（在这里定义成员数据）
- declarators：对象名（可填可不填）

## 基本使用

1 . 结构体的实现相对简单，你只需要在结构体内提前声明好所需的变量类型和名称。当需要使用这些变量时，可以创建结构体的实例（对象），然后通过这个实例来访问和操作其成员变量。值得注意的是，`每个结构体实例的成员变量都是独立的`，不是共享的。结构体的成员变量可以在结构体定义的作用域内被访问和修改，你可以在程序的适当位置创建结构体实例，并在需要时重复创建多个实例来使用。

2 . 这里我写了一个示例：这里定义一个结构体用来描述不同水果的属性值。模拟通过结构体快速地描述苹果的属性。
3 . 首先，`结构体是被当做一个新的数据类型来使用的`，我们只需`在创建一个对象时，在前面加上结构体名称`即可，这个结构体名称实际上就是一个新的数据类型。
4 . 最终只需要通过一个`.`来达到传入属性值，`也可以通过最便捷的方式传值，如代码注释掉的部分`。


```c++
#include <iostream>
#include <string>

using namespace std;

struct Fruit
{
    string Name;   // 水果的名称
    string TypeName;   // 水果的品种名
    double Sugar_content;  // 水果的含糖量
};

int main()
{
    // 两种对象创建的方式
    struct Fruit Apple;
    Fruit Banana;

    Apple.Name = "苹果";
    Apple.TypeName = "阿克苏红富士";
    Apple.Sugar_content = 0.2;
    // Apple = {"苹果", "阿克苏红富士", 0.2};
    
    // 输出苹果的信息
    cout << Apple.Name << endl;
    cout << Apple.TypeName << endl;
    cout << Apple.Sugar_content << endl;
}
```
5 . 输出苹果在结构体内的属性值，没什么问题。

![](http://testingcf.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_cpp5_1.png)

6 .  `基于每个结构体实例的成员变量都是独立的`，所以我们可以使用同一个结构体来实现描述多个对象。

```c++
int main()
{
    // 两种对象创建的方式
    struct Fruit Apple;
    struct Fruit Banana;
    
    Apple = {"苹果", "阿克苏红富士", 0.2};
    Banana = {"香蕉", "巴西蕉", 0.11};

    cout << Apple.Name << endl;
    cout << Apple.TypeName << endl;
    cout << Apple.Sugar_content << endl;

    cout << "-------------------------------" << endl;  // 分割线

    cout << Banana.Name << endl;
    cout << Banana.TypeName << endl;
    cout << Banana.Sugar_content << endl;
    
}
```

![](http://testingcf.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_cpp5_2.png)

### 补充说明
#### declarators参数创建对象
1 . 这里补充一点: 在结构体的语法中，`declarators参数`是`允许在定义结构体时提前创建对象`的。在`结构体分号前`填入对象名称，即可创建对象而必须要在使用时再次创建对象。

```c++
struct Fruit
{
    string Name;   // 水果的名称
    string TypeName;   // 水果的品种名
    double Sugar_content;  // 水果的含糖量
}Watermelon;

int main()
{
    Watermelon = {"西瓜", "下野地西瓜", 0.08};
}
```

#### 结构体成员的多种用法
1 . 前面也说过，结构体有着和类一定的相似性，以至于它们的区别仅体现在访问权限上。
2 . 所以，类能做的结构体也能做，而不仅仅只是定义一些变量。
3 . 在结构体中你甚至还能写函数：例如写一个加法运算的函数。

```C++
struct Math
{
    int add(int value, int value2)
    {
        int a = value + value2;
        return a;
    }
}Mathmore;

int main()
{
    int result = Mathmore.add(8,9);
    cout << result << endl;
    
}
```

![](http://testingcf.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_cpp5_3.png)

## 结构体的数组对象

1 . 在 C++ 中使用结构体时，我们也可以创建一个数组对象。
2 . 结构体数组对象的声明和使用方式与普通数组类似，但`数值对象中的每一个元素都是一个结构体类型`。
3 . 在创建一个结构体的数组对象时，必须指定其大小，并且无法再次更改。
4 . 下面看一下示例：

```c++
#include <iostream>
#include <string>

using namespace std;

struct Fruit
{
    string TypeName;   // 水果的品种名
    double Sugar_content;  // 水果的含糖量
}Watermelon, Orange[3];


int main()
{
    
    Orange[0] = {"金桔", 0.112};
    Orange[1] = {"柑橘", 0.102};
    Orange[2] = {"箭叶橘", 0.09};

    for(int i = 0; i < 3; i++)
    {
        cout << "品种：" << Orange[i].TypeName << endl;
        cout << "含糖量：" << Orange[i].Sugar_content << endl;
        cout << "=====================" << endl;
    }
    
}
```
5 . 分析上述代码，我们创建了一个长度为`[3]`的数组对象，因为每个元素都代表着一个结构体类型，所以我们可以直接通过元素传值，最后通过for循环遍历出每个元素的结构体类型数据。最终得到下图的效果。

![](http://testingcf.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_cpp5_4.png)


## 结构体指针的花样操作

1 . 一般来说我们是直接通过`对象.结构体成员`的方式给成员变量赋值，当然我们也可以直接使用指针的方式直接指向结构体成员变量给其赋值。
2 . 这种方有着很多好处，例如：`指针访问速度更快`，`灵活性高`，`性能优化强`，`减少复制`等等。

3 . 当我们想通过这种方式给结构体成员变量赋值，可以这样：


```cpp
struct StudentInfomation
{
    string name;
    string sex;
    int age;
};

int main()
{
    struct StudentInfomation Class1;  // 创建结构体对象

    StudentInfomation * Pointer = &Class1;  // 创建指针变量并赋值
    
    Pointer -> name = "Almango";  // 指向name并赋值
    Pointer -> sex = "男";   // 指向sex并赋值
    Pointer -> age = 18;  // 指向age并赋值
    
    // 输出结构体成员变量
    cout << Pointer -> name << endl;
    cout << Pointer -> sex << endl;
    cout << Pointer -> age << endl;   
}
```

4 . 首先创建一个结构体对象，再创建一个指针（指针类型为结构体类型）。将对象的内存地址赋值给指针变量，这样的话，指针代表了对象，最后可以直接通过`指针变量.结构体成员`的方式指向结构体成员变量，即可操作该变量。

5 . 输出结果为：
```cpp
>>>Active code page: 65001
Almango
男
18
```

6 . 另一种操作：
7 . 和前者不同的是：在结构体中定义一个指针变量成员，利用这个结构体中的指针变量获取到对象的地址来访问结构体成员。
8 . 创建了一个StudentInformation类型的变量Class1，再创建一个指向StudentInformation类型的指针变量AdderPointer，并将其初始化为指向Class1。通过指针AdderPointer，设置Class1的成员变量name为"Boom"，sex为"女"，age为18。将AdderPointer的地址赋值给Class1的成员变量MemberPointer，这样Class1.MemberPointer现在指向Class1本身。通过AdderPointer打印出name、sex和age的值。
```cpp
struct StudentInformation
{
    string name;
    string sex;
    int age;
    StudentInformation * MemberPointer;
};


int main()
{
    struct StudentInformation Class1;   // 创建对象
     
    StudentInfomation * AdderPointer = &Class1;  // 创建指针变量

    AdderPointer -> name = "Boom";   
    AdderPointer -> sex = "女";
    AdderPointer -> age = 18;

    Class1.MemberPointer = AdderPointer;   // 将结构体变量中的指针内存地址变量赋值给class1

    cout << AdderPointer -> name << endl;
    cout << AdderPointer -> sex << endl;
    cout << AdderPointer -> age << endl;
 }
```

9 . 最终输出结果为：
```cpp
>>>Active code page: 65001
Boom
女
18
```
