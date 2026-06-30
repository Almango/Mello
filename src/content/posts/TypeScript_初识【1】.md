---
title: TypeScript_初始【1】
published: 2024-07-30 11:30:12
cover: img/cover/typescript.png         # 设置文章封面
top_img: false
tags: [TS]                                # 添加分类
category: 学习笔记 


slug: "9398f8e8"
---


### 介绍

1 . **TypeScript**是由微软开发的一种开源编程语言，它是JavaScript的一个`严格超集`，这意味着任何有效的JavaScript代码也是有效的TypeScript代码。TypeScript的主要目标是开发大型应用程序，提供JavaScript所不具备的类型安全和易于维护的特性。

2 . 同时TypeScript是一种静态语言，TypeScript通过静态类型系统，允许开发者在编译时就确定变量的类型，从而减少运行时错误。


### TS与JS的关系

![](http://testingcf.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_ts_1.png)

>TypeScript 是 JavaScript 的`超集`，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript 一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查。

`何为超集？你可以理解为Ts是一个全新的JavaScript，它在保留了JavaScript语法的同时还扩展了更多功能，性能和安全性也有很大的升级。`

1 . TypeScript 与 JavaScript 有着不同寻常的关系。TypeScript 提供了 JavaScript 的所有功能，并在这些功能之上添加了一层： TypeScript 的类型系统。

2 . 例如，JavaScript 提供了诸如 string 和 number 这样的原始类型，但它不检查你在赋值时与类型是否匹配。TypeScript 提供了这样的功能。

3 . 这意味着你现有的运行良好的 JavaScript 代码也是 TypeScript 代码。TypeScript 的主要好处是，它可以检查代码中的意外行为，从而降低出现错误的机会。

### 为什么选择TypeScript？

**类型安全**
类型安全是TypeScript最大的卖点之一。在JavaScript中，变量的类型可以在任何时候改变，这可能导致难以追踪的错误。TypeScript通过静态类型系统，允许开发者在编译时就确定变量的类型，从而减少运行时错误。

**面向对象编程**
TypeScript支持类、接口、继承等面向对象编程（OOP）特性，这使得代码更加模块化和可重用。开发者可以定义接口来确保对象符合预期的结构，使用类来封装数据和行为。

**工具支持**
TypeScript拥有强大的工具链支持，包括Visual Studio Code、WebStorm等集成开发环境（IDE），它们提供了代码高亮、智能提示、自动补全和重构工具，极大地提高了开发效率。

**编译时检查**


TypeScript代码在运行前需要被编译成JavaScript，编译过程中会进行类型检查和语法检查，这意味着，当可以正常编译时，编译成的Javascript代码一定是合法的。若语法有错，则无法通过编译，这有助于提前发现潜在的错误。

![](http://testingcf.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_ts_2.png)


**兼容性**
TypeScript与JavaScript完全兼容，这意味着开发者可以逐步将现有项目迁移到TypeScript，或者在新项目中混合使用JavaScript和TypeScript代码。

### TypeScript的应用

**前端开发**
在前端开发中，TypeScript常与React、Angular或Vue等现代JavaScript框架结合使用。这些框架提供了丰富的组件和工具，与TypeScript结合可以进一步增强应用程序的可维护性和可扩展性。

**Node.js后端开发****
TypeScript也适用于Node.js后端开发。通过使用TypeScript，开发者可以编写类型安全的服务器端代码，提高后端服务的稳定性和可维护性。

**跨平台开发**
TypeScript支持跨平台开发，无论是Web、桌面还是移动应用程序，都可以使用TypeScript来编写代码，然后编译成适用于不同平台的JavaScript代码。