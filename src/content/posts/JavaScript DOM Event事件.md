---
title: JavaScript event事件
published: 2024-08-08 22:32:02             # 设置发布时间（默认不设）
#cover: https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/cover/js.png        # 设置文章封面
top_img: false
tags: [JS]                                # 添加分类
category: 学习笔记
slug: "bd510a3f"
---

## 事件

在JavaScript中，事件指的是网页上的`用户行为`或`浏览器行为`，例如：点击按钮，提交表单，页面完成加载，鼠标点击，键盘输入等。事件处理是 JavaScript 中非常重要的一部分，我们可以通过监听这些事件以此来触发一些预订好的效果。
>当在 DOM 元素上发生事件时，浏览器会创建一个 Event 对象的实例，并触发绑定到该元素上相应的事件处理函数。这个 Event 对象作为参数传递给事件处理函数，使得开发者能够访问事件的相关信息并对事件做出响应。
## 事件处理

1 . 事件处理指的是当事件被触发时，应该如何处理这些事件。
2 . 举个栗子：当我们进入一个网站时，并且页面完成加载，这就触发了一个事件，在事件处理上，网站可以给用户一个欢迎弹窗，或者当我们输入密码，密码输入错误时，提示密码输入错误。这些都是对事件的处理。

## DOM事件处理方法
>JavaScript中常用的事件处理方法有三种，分别是DOM0，DOM2，DOM3。

### DOM0级事件

1 . DOM0级事件是在Web开发中逐渐形成的，而并非W3C规定的，但却在开发中获得了广泛的应用。
2 . DOM0级事件的原理是：通过直接在HTML元素的事件onclick属性上赋值JavaScript函数或在JavaScript中将函数赋值给DOM元素的事件属性来达到处理事件的效果。
3 . 这种方法较为直观易懂，也存在着一定的不足，当事件被触发时，它无法做到多种处理的效果。

```html
//方式1
<input bottom type="button" value="点击一下">

<script>
// 方式2
let a = document.getElementsByTagName("input")[0].onclick = chufa
function chufa()
{
    console.log("点击事件")
}
</script>
```

### DOM2级事件
1 . DOM2是由W3C组织规定的一个标准，它加入了`addEventListener()`和`removeEventListener()`方法，前者是添加一个事件的监听器（我们直接称它为“监听器”，后者顾名思义就是删除事件了，但这里我们主要讲一下`addEventListener()`方法
2 . 它的工作原理是：将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行
3 . 这个方法允许您指定在特定类型的事件触发时应该调用哪个函数，这样便提供了更丰富的事件处理能力。
4 . addEventListener(type, listener, useCapture)中含有三个参数位，解释如下：
- `type`：事件的名称（click，mousemove，load等）
- `listener`：处理事件的函数
- `useCapture`：用于控制事件的捕获或冒泡阶段（布尔类型）

```html
 <input type="button"  value="点击一下">

<script>

let a = document.getElementsByTagName("input")[0]
a.addEventListener("click" , chufa, false)

function chufa()
{
    console.log("点击事件")
}    
</script>
```

### DOM3级事件

1 . DOM3在DOM0和DOM2的基础上新增了一些事件类型，例如：鼠标事件，键盘事件，滚轮事件等等。
2 . 每一类事件类型的都比较多，这里只讲一下`鼠标事件`和`键盘事件`的一些常用事件类型

| 鼠标事件| 作用 | 键盘事件 |作用 |
|:--|:--|--|--|
|dblclick|双击事件|keyCode|该属性包含键盘中对应键位的键值|
|mousedown|按下鼠标键时触发|target|发生事件的节点|
|mouseup|松开鼠标键时触发|srcElement|发生事件的元素|
|mousemove|鼠标移动|shiftKey|是否按下Shift键|
|mouseover|鼠标移入|ctrlKey|是否按下Ctrl键|
|mouseout|鼠标移出|altKey|是否按下Alt键|
|mouseenter|鼠标移入|metaKey|是否按下Meta键|
|mouseleave|鼠标移出|charCode|该属性包含键盘中对应键位的Unicode编码|

## 事件

在JavaScript中，事件指的是网页上的`用户行为`或`浏览器行为`，例如：点击按钮，提交表单，页面完成加载，鼠标点击，键盘输入等。事件处理是 JavaScript 中非常重要的一部分，我们可以通过监听这些事件以此来触发一些预订好的效果。

## 事件处理

1 . 事件处理指的是当事件被触发时，应该如何处理这些事件。
2 . 举个栗子：当我们进入一个网站时，并且页面完成加载，这就触发了一个事件，在事件处理上，网站可以给用户一个欢迎弹窗，或者当我们输入密码，密码输入错误时，提示密码输入错误。这些都是对事件的处理。

## DOM事件处理方法
>JavaScript中常用的事件处理方法有三种，分别是DOM0，DOM2，DOM3。

### DOM0级事件

1 . DOM0级事件是在Web开发中逐渐形成的，而并非W3C规定的，但却在开发中获得了广泛的应用。
2 . DOM0级事件的原理是：通过直接在HTML元素的事件onclick属性上赋值JavaScript函数或在JavaScript中将函数赋值给DOM元素的事件属性来达到处理事件的效果。
3 . 这种方法较为直观易懂，也存在着一定的不足，当事件被触发时，它无法做到多种处理的效果。

```html
//方式1
<input bottom type="button" value="点击一下">

<script>
// 方式2
let a = document.getElementsByTagName("input")[0].onclick = chufa
function chufa()
{
    console.log("点击事件")
}
</script>
```

### DOM2级事件
1 . DOM2是由W3C组织规定的一个标准，它加入了`addEventListener()`和`removeEventListener()`方法，前者是添加事件，后者顾名思义就是删除事件了，但这里我们主要讲一下`addEventListener()`方法
2 . 它的工作原理是：将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行
3 . 这个方法允许您指定在特定类型的事件触发时应该调用哪个函数，这样便提供了更丰富的事件处理能力。
4 . addEventListener(type, listener, useCapture)中含有三个参数位，解释如下：
- `type`：事件的名称（click，mousemove，load等）
- `listener`：处理事件的函数
- `useCapture`：用于控制事件的捕获或冒泡阶段（布尔类型）

```html
 <input type="button"  value="点击一下">

<script>

let a = document.getElementsByTagName("input")[0]
a.addEventListener("click" , chufa, false)

function chufa()
{
    console.log("点击事件")
}    
</script>
```

### DOM3级事件

1 . DOM3在DOM0和DOM2的基础上新增了一些事件类型，例如：鼠标事件，键盘事件，滚轮事件等等。
2 . 每一类事件类型的都比较多，这里只讲一下`鼠标事件`和`键盘事件`的一些常用事件类型

| 鼠标事件| 作用 | 键盘事件 |作用 |
|:--|:--|--|--|
|dblclick|双击事件|keyCode|该属性包含键盘中对应键位的键值|
|mousedown|按下鼠标键时触发|target|发生事件的节点|
|mouseup|松开鼠标键时触发|srcElement|发生事件的元素|
|mousemove|鼠标移动|shiftKey|是否按下Shift键|
|mouseover|鼠标移入|ctrlKey|是否按下Ctrl键|
|mouseout|鼠标移出|altKey|是否按下Alt键|
|mouseenter|鼠标移入|metaKey|是否按下Meta键|
|mouseleave|鼠标移出|charCode|该属性包含键盘中对应键位的Unicode编码|

更多事件类型可参考：[菜鸟教程](https://www.runoob.com/jsref/dom-obj-event.html)

3 . 我们写段代码做个示例：

```css
#box{
    width: 200px;
    height: 200px;
    background: hotpink;   
}
```
```html
<div id="box"></div>    
<input name="input" value="输入框">
```
4 . 在这段代码中，我们使用了两个事件处理，并通过Switch开关来，判断正在进行哪种事件，最后在控制台返回事件处理的结果。

```javascript

let a = document.querySelector("#box");
let b = document.getElementsByName("input")[0];

// 为鼠标移动添加一个事件监听
a.addEventListener("mousemove", function(event) {
    chufa(event.type);
});

// 为B键添加一个事件监听
b.addEventListener("keydown", function(event) {
    if (event.key === "b") {
        chufa(event.type);
    }
});

function chufa(eventType) {
    switch (eventType) {
        case "mousemove":
            console.log("鼠标正在移动");
            break;
        
        case "keydown":
            console.log("B键被敲击");
            break;
        
        default:
            console.log("Null");
    }
}  
```

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_dom2_2.png)
    
            



3 . 我们写段代码做个示例：

```css
#box{
    width: 200px;
    height: 200px;
    background: hotpink;   
}
```
```html
<div id="box"></div>    
<input name="input" value="输入框">
```
4 . 在这段代码中，我们使用了两个事件处理，并通过Switch开关来，判断正在进行哪种事件，最后在控制台返回事件处理的结果。
5 . `event.type`是事件对象的属性，当然了这次讲的是事件的处理方法，事件对象在下期会讲到。

```javascript

let a = document.querySelector("#box");
let b = document.getElementsByName("input")[0];

// 为鼠标移动添加一个事件监听
a.addEventListener("mousemove", function(event) {
    chufa(event.type);
});

// 为B键添加一个事件监听
b.addEventListener("keydown", function(event) {
    if (event.key === "b") {
        chufa(event.type);
    }
});

function chufa(eventType) {
    switch (eventType) {
        case "mousemove":
            console.log("鼠标正在移动");
            break;
        
        case "keydown":
            console.log("B键被敲击");
            break;
        
        default:
            console.log("Null");
    }
}  
```

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_dom2_2.png)
	
            

