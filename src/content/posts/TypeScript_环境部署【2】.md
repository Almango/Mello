---
title: TypeScript_环境部署【2】
published: 2024-07-30 12:00:11
cover: img/cover/typescript.png         # 设置文章封面
top_img: false
tags: [TS]                                # 添加分类
category: 学习笔记 


slug: "2bbb8668"
---


### 安装

#### 安装Node.js
> Node.js 是一个开源的、跨平台的 JavaScript 运行时环境。

1 .TypeScript 代码本身不能直接在浏览器中运行，它需要被编译成 JavaScript 代码。Node.js 提供了一个运行时环境，可以执行 JavaScript 代码，因此可以用于运行编译后的 TypeScript 代码。同时它还提供了丰富的工具和库，使得 TypeScript 的开发更加方便和高效。

2 . 官网下载：https://nodejs.cn/

3 . 检查是否安装成功

```bash
node --version
```
#### 安装编译器
>TypeScript一种编译型语言，无法直接在浏览器中运行，需要先将其编译为JavaScript代码才可以，所以我们需要先安装ts编译器`tsc`。

1 . 在终端输入以下命令：

```bash
npm install -g typescript
```
2 . 检查是否成功

```bash
tsc -v
```

### 第一个程序

> 安装完成后，可以试着写一串ts代码

1 . 代码写完后，保存，例如文件名称为：`index.ts`
2 . 接下来进行编译
3 . 在终端输入`tsc index.ts`即可将ts代码编译为js代码。
4 . 编译后的Javascript是可以直接在浏览器中运行的。