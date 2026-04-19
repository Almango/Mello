---
title: JavaScript DOM 方法详解
published: 2024-08-05 21:36:11             # 设置发布时间（默认不设）
#cover: https://sh.jsdmirror.com/gh/Almango/Blog_imgbed@main/cover/js.png        # 设置文章封面
top_img: false
tags: [JS]                               # 添加分类
category: 学习笔记
slug: "84162408"
---

## DOM

DOM全称（Document Object Model）文档对象模型，一个编程接口，它表示和操作HTML和XML文档。DOM将网页结构化为一个由节点和对象（如元素、属性和文本）组成的树状结构，使得Web文档可以被程序化地访问和修改。`当网页被加载时，浏览器会创建页面的文档对象模型`



## 获取元素
JavaScript提供了一些用于通过DOM获取元素的方法

>`document.getElementById()`: 通过元素的ID获取元素。
>`document.getElementsByTagName()`: 通过标签的名称获取元素集合。
> `document.getElementsByClassName()`: 通过类名获取元素集合。
> `document.getElementsByName()`: 通过name值获取元素集合
> `document.querySelector()`: 根据CSS选择器获取第一个匹配的元素。
> `document.querySelectorAll()`: 根据CSS选择器获取所有匹配的元素集合。

**使用方法**

我们以`<p>`标签为例，使用JS的DOM对象方法对元素进行`获取`和`修改`
```html
<p>段落1</p>
<p id="a">段落2</p>
<p class="b">段落3</p>
<p id="c">段落4</p>
<p class="d">段落5</p>

```

1 . 首先是`getElementsByTagName()`方法，该方法可以通过标签名获取对应的元素，当存在多个相同标签，则返回的`HTMLCollection`或`NodeList`，它是一个类似数组的对象，包含了所有匹配的元素，如果要精确选择，可以通过`[]`索引定位。

2 . `getElementById()`方法，用于通过标签的ID获取元素，因为ID是唯一的，所以使用该方法获取元素会更加准确。


3 . `getElementsByClassName()`方法，通过类名获取元素，不同ID的是，类名可以重复，返回的是HTMLCollection对象，所以必须再通过`[]`索引来精确到目标元素。

4 . `getElementsByName()`方法，通过name值获取元素集合，一般用于表单元素，返回的是`NodeList`，同样需要索引精确目标。

5 .`querySelector()`方法是在H5后新增的方法，它会比getelementby更加高效，通过该方法，可以获取到任何指定的标签元素，可以是id，class，也可以是类名。但要注意的是，当存在多个指定的标签，则默认选择第一个元素对象，例如指定`<p>`标签，若存在多个`<p>`标签，它会默认选择第一个。

6 . `querySelectorAll()`方法，和上面的一样，它会返回是HTMLCollection对象，可以通过`[]`所以精确目标
```javascript
document.getElementsByTagName("p")[0].innerHTML = '芝士雪豹'

document.getElementById("a").innerHTML = "雪豹闭嘴"

document.getElementsByClassName("b")[0].innerHTML = "妈妈省的"

document.getElementsByName("c")[0].innerHTML = "因为他善"

document.querySelector("#d").innerHTML = "演的什么玩意这是"

document.querySelectorAll("p")[5].innerHTML = "我沉沦几回只因你倾城的美"

```
    
7 . 最终运行的结果是，`<p>`标签中的内容都被更改了，这就是通过DOM对象方法获取标签，再修改内容实现。

![](https://sh.jsdmirror.com/gh/Almango/Blog_imgbed@main/post/post_dom_1.png)

## 获取和修改元素内容
>`innerHTML`：用于获取或设置元素的HTML标记内容
>`innerText`：用于获取或设置元素的可见文本内容（不包含HTML标记）
>`textContent`：用于获取或设置元素内部的`纯文本内容`

**使用方法：**
1 . 在这三个方法中，都有着各自的特征，接下来一一解答：
2 . `innerHTML`方法，用于获取或设置元素的HTML内容，当一个元素存在子节点或更多时，它可以获取和修改这些节点。
3 . `innerText`方法，用于获取或设置元素的可见文本内容，和innerHTML不同的是，它仅能获取和修改元素中可见的文本，如果文本是隐藏的，则不会返回该文本，最后它不包含HTML标记。
4 . `textContent`方法，用于获取或设置元素内部的纯文本内容，它只能单纯的获取和修改元素中的所有文本内容，不仅如此，它还能够获取到隐藏的文本内容，包括那些通过CSS隐藏的文本。

```html
<div id="innerHTML">
    <ul>
        <li>0帧起手</li>
        <li>神金</li>
    </ul>
    <p>T0战士</p>
</div>

<div id="innerText">
    <ul>
        <li>人机</li>
        <li>入机</li>
    </ul>
</div>

<div id="textContent">
    <ul>
        <li>逆马</li>
        <li>逆蝶</li>
    </ul>
</div>

```
5 . 这里我们分开执行，区别更显而易见。
6 . 可见，我们可以使用`innerHTML `方法直接获取到元素内的所以HTML标签节点，修改时也可以通过直接输入标签代码来修改节点。在`innerText`方法示例中，它可以获取标签中的所有可见文本，也可以直接修改该可见文本，最后在`textContent`方法中，它仅单纯获取和修改所有纯文本（包括隐藏文本）

```javascript
//innerHTML
let a = document.querySelector("#innerHTML").innerHTML // 获取元素
console.log(a)    // 返回获取的元素内容
document.getElementsByTagName("p")[0].innerHTML = "我想要你UZI跳枪教程" //修改元素内容

//innerText
let b = document.querySelector("#innerText").innerText // 获取元素
console.log(b)    // 返回获取的元素内容
document.getElementsByTagName("li")[3].innerText = "不是你配吗？" //修改文本内容    

//textContent
let c = document.querySelector("#textContent").textContent // 获取元素    
console.log(c)    // 返回获取的元素内容
document.getElementsByTagName("li")[5].textContent = "我是嫩蝶" //修改文本内容    

```
![](https://sh.jsdmirror.com/gh/Almango/Blog_imgbed@main/post/post_dom_3.png)
## 创建元素

`document.createElement()` - 用于创建一个新的元素。

**使用方法：**
1 . 可以使用该方法创建一个指定的元素，**注意**：这仅仅只是创建一个元素，后续还需要使用插入方法将创建好的元素插入到HTML节点中。
2 . 例如我们可以创建一个`<li>`列表标签，示例如下：

```javascript
document.createElement("li")  // 创建一个li标签
document.createElement("div")  // 创建一个div标签
document.createElement("img")    // 创建一个p标签
```

## 追加 & 插入元素

>`document.appendChild()`：将元素`追加`到某个节点的子节点中。

>`document.insertBefore( , )`：将元素`插入`到某个节点的子节点前面。

**使用方法：**


1 . `appendChild()`方法主要是将创建好的元素追加到某个节点的子节点后面，追加顾名思义就是按顺序排在后面，例如在节点`div`中已经存在3个子节点，那么新追加的元素索引值则为


2 . `insertBefore( , )`方法是将创建好的元素插入到某个节点的子节点前面，和追加不同的是，它可以指定插入的位置。它存在两个传参位，前者是将要插入的元素，后者是需要插入的子节点位置。

3 . 看个示例便一目了然：

4 . **示例中**，我们先创建一个项目列表`<ul>`，在里面创建一个`<li>`列表，接着我们将使用两个方法往项目列表中追加和插入新元素。

```html
<ul id="bq">
    <li>真的是你呀~</li>
</ul>
```
5 . js我们需要先创建两个列表元素来分别实现`追加`和`插入`，因为创建一个元素，只能进行一个添加操作。随后我们使用`textContent`方法往列表中设置文本内容。

6 .  分别获取到要追加的节点和需要插入的子节点，这样即可直接使用两个方法追加和插入元素。


```javascript
let a = document.createElement("li")   // 创建li元素
let i = document.createElement("li")   // 创建li元素

a.textContent = "你干嘛，哎哟~"     // 设置li元素文本内容
i.textContent = "鸡你太美"       // 设置li元素文本内容

let divs = document.querySelector("#bq")  // 获取节点
let child = document.getElementsByTagName("li")[0]  // 获取子节点

divs.appendChild(a)
divs.insertBefore(i, child)

```
7 . 运行结果可以看到，`你干嘛，哎哟~`被追加到了最下方，`鸡你太美`被插入到了`真的是你呀~`前面，这就是`appendChild()`和`insertBefore()`两个方法使用方法。

![](https://sh.jsdmirror.com/gh/Almango/Blog_imgbed@main/post/post_dom_2.png)

## 移除元素

>`document.removeChild()`：用于移除节点中的子节点

**使用方法：**

1 . `removeChild()`方法，通过指定子节点来达到移除节点的效果。


```html
<ul id="list">
    <li>刚满18岁</li>
    <li>我让你永远18岁</li>
</ul>
```
```javascript
let a = document.querySelector("#list")  // 获取节点
a.removeChild(a.firstlementChild)   // 移除第一个子节点
```

## 修改元素属性

>`document.getAttribute()`：获取元素的属性值
>`document.setAttribute( , )`：用于修改元素的属性值


**使用方法：**

1 . `document.getAttribute()`该方法用于获取元素的属性值，如（type，id，class，title）等，只需在传参位传入属性即可返回属性值。
2 . `document.setAttribute( , )`：使用该方法，可以修改元素的属性，方法内含两个传参位，前者为`属性`，后者为`属性值`。

```html
<div id="box">
    <form>
        <input name="inputtext"  value="输入框">
    </form>
    <p id="sy">UZI跳枪已经失传</p>
</div>
```
3 . 代码不必过多解释了，这里演示了如何获取`<input>`标签的value值，以及修改`<input>`的type值和`<p>`标签的id值，最返回了整个修改后的HTML标记。一目了然。

```javascript
// 获取input的value属性值
let a = document.getElementsByName("inputtext")[0].getAttribute("value")
console.log(a)
// 修改input的Type属性值
let b = document.getElementsByName("inputtext")[0]
b.setAttribute("type","submit")

//修改p的id属性值
let c = document.getElementsByTagName("p")[0]
c.setAttribute("id", "uzi")

// 输出修改后的元素
let d = document.querySelector("#box").innerHTML 
console.log(d)
```

![](https://sh.jsdmirror.com/gh/Almango/Blog_imgbed@main/post/post_dom_4.jpg)

## 修改元素样式

>`document.style`：修改元素样式

**使用方法：**

1 . 使用其实很简单，看示例：
2 . 在style.后面加上样式属性，并为其设定值即可。
3 . 当然了，这个方法里的样式名可能和css中的不太一样。

```html
<p id="error">错的不是我，是这个世界</p>
```

```javascript
document.querySelector("#error").style.color = "blue"
document.querySelector("#error").style.fontSize = "25px"
document.querySelector("#error").style.background = "yellow"
```

![](https://sh.jsdmirror.com/gh/Almango/Blog_imgbed@main/post/post_dom_5.png)


<hr>



## 补充

> 若存在问题或遗漏，后续会进行补充……
