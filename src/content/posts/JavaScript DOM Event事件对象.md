---
title: JavaScript event事件对象
published: 2024-08-09 22:35:50             # 设置发布时间（默认不设）
#cover: https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/cover/js.png        # 设置文章封面
top_img: false
tags: [JS]                               # 添加分类
category: 学习笔记
slug: "c13a855c"
---

## 事件对象

1 . JavaScript 中，事件对象是一个特殊的对象，它包含了与当前事件相关的所有信息和方法。每当一个事件被触发时，这个事件对象就会被创建并传递给事件处理函数。
2 . 通过事件对象，我们可以更加精确的获得到当前事件的详细信息，也可以通过对象的方法做出一些事件处理操作。
3 . 事件对象在事件发生时就会被创建，并传递给事件处理函数，JavaScript中用`event`来表示这个事件对象。

## 常用属性

>`event.type`：返回当前 Event 对象表示的事件的名称
>`event.target`：	返回触发此事件的元素（事件的目标节点）
>`event.currentTarget`：返回其事件监听器触发该事件的元素
>`event.bubbles`：返回布尔值，指示事件是否是起泡事件类型

1 . 我们可以将它们输出一下，实例看看四个分别起到什么样的作用：
```html
<body>
    <input name="main" type="button" value="按钮">
</body>
<script>
    let a = document.getElementsByName("main")[0]
    a.addEventListener("click", Object, false)

function Object(event)
{
    console.log(event.type)
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(event.bubbles)
}
</script>
```

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_dom3_1.png)

2 . 可以看到，四个属性的返回值最终被输出出来，type属性返回的是事件触发的类型。target返回的是触发该事件的元素。currentTarget返回的值似乎和target的一样，但前者返回的的是事件处理函数正在其上执行的那个元素，也有一定的区别。最后是bubbles，它返回的是一个布尔值，即是否起到冒泡事件类型。

4 .**这里有个误区需要注意一下**，就在这个DOM2级事件的方法中，`addEventListener("click", Object, false)`，监听器仅仅只是在引用函数并立即执行，而不是调用函数，所以它不能直接传参，也无法传入event对象。如果想直接往监听器中的函数传参，可以用到匿名函数，监听器会在内部直接执行，而无需引用。正确的写法是这样的：

```javascript
let a = document.getElementsByName("main")[0]
a.addEventListener("click", function(event){
    console.log(event.type)
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(event.bubbles)
}, false)
```

## 对象方法

1.JavaScript的事件对象中也提供了几种常用的方法，用于处理事件。

>`event.preventDefault()`：用于阻止浏览器对当前事件的默认行为
>`event.composedPath()`：返回一个包含事件在其中传播的所有元素的数组
>`event.stopImmediatePropagation()`：阻止在同一元素上注册的其他任何事件监听器被调用。


2 . 这里我们演示看看三个方法的效果。

```html
<a href="https://www.bilibili.com/">点击跳转</a>
```

3 . 在下列代码中，我们设置了一个监听器，当触发`<a>`标签时，按照默认情况下页面是会跳转到哔哩哔哩的，但是我们在事件处理中使用对象方法`preventDefault()`将这默认行为给阻止了。
4 . 另外是`composedPath()`方法，当`<a>`标签事件触发时，事件冒泡会进行传播给每一个包含它的元素，这一方法可以将这些被波及到的元素返回成一个数组。
5 . 最后是`stopImmediatePropagation()`方法，这一方法用于解决：当存在两个或更多以同一个节点触为事件触发的监听器时，用于阻止其他的监听器引用函数。在代码中可以看到，存在着另一个监听器，且引用的函数为`AotherListener`，` function(event)`将会阻止这一监听器的函数行为，但前提是，指定的监听器一定要在另一个监听器的前面，否则会被覆盖。
```JavaScript
let a = document.getElementsByTagName("a")[0]
   
a.addEventListener("click", function(event){
    event.preventDefault()   // 阻止当前事件的默认行为
    console.log("已阻止页面跳转")
    let array = event.composedPath()  //返回事件传播的所有元素的数组。
    console.log(array)
    event.stopImmediatePropagation()  //阻止其他同一元素事件的监听器执行
}, false)

a.addEventListener("click", AotherListener,false)

function AotherListener()
{
    console.log("Hello World")
}
```

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_dom3_2.png)
