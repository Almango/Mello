---
title: Python网络爬虫 _XPath解析【6】 #  设置文章标题
published: 2023-07-22 15:13:52             # 设置发布时间（默认不设）
cover: https://bu.dusays.com/2026/03/24/69c23136dbd2c.webp
tags: [Python]                                # 添加分类
category: 技能 
slug: "9112f4ce"
---



## 问题引入：
> 前面我们可以通过HTTP Requests请求获取到网站的HTML源代码，但是仍没有得到我们想要的信息。 那怎么办呢，这时我们就需要通过代码解析，从复杂的源码中提取出我们想要的信息。


## 爬虫解析器
爬虫解析器**用作于从复杂的网页代码中解析提取出我们想要的数据**。如下图，通过解析我们可以从结构复杂的代码中提取出我们想要的。

爬虫解析器有三大类，分别是正则表达式解析器，Bs解析器和Lxml解析器。

其对于的解析方法如下：
    -  **正则表达式解析**：正则表达式(Regular Expression) 简称 ‘Re’ 是一种特殊的字符串模式,利用这些元字符可以从结构复杂的文本中简化，提取出匹配的内容，是最传统的爬虫解析方式。
    - **BeautifulSoup解析**：用于从HTML和XML文件中提取数据。它能够解析HTML文档,从中提取出标签、属性、文本等内容,方便我们进行二次开发和数据分析。
    - **XPath解析**：当前最为流行的解析方式，通过标签定位解析提取出目标信息。

由于XPath相对其他解析方法具有解析**精度高，速度快，和操作灵活**的特点，所以我们才用XPath作为我们解析器去提取数据。
## 什么是XPath?

**XPath**：**XML路径语言（XML Path Language），它是一种用来确定XML文档中某部分位置的语言**。

XPath 的选择功能十分强大，它提供了非常简洁明了的路径选择表达式，另外它还提供了超过 100 个内建函数用于字符串、数值、时间的匹配以及节点、序列的处理等等，几乎所有我们想要定位的节点都可以用XPath来选择。

### 作用

XPath的最初作用是搜索Xml代码中的目标，但后来也可以用作于HTML的代码搜索，**它可以在复杂的代码中筛选提取出目标代码，以至于现在被称为‘无能标记语’。**

在网络爬虫领域中，XPath扮演这重要的角色，爬虫在处理复杂的网页源码时，同样可以利用XPath来解析提取出你想要的数据。
## XPath解析
前面说过，当我们拿到页面源码后，并不能直接得到我们想要的数据，这时我们则需要用到爬虫解析器XPath，任何使用呢？看操作：

### 1.安装Lxml库
XPath是第三方库，所以我们需要进行安装才可以使用。

安装只需要在终端输入一下命令即可：

如果安装失败，可以尝试切换安装源。

默认安装
> pip install lxml 


清华大学镜像源（推荐）
> pip install lxml -i https://pypi.tuna.tsinghua.edu.cn/simple 

若显示” Successfully installed lxml “则说明安装成功了。
!![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_spider6_1.png)

若显示” Requirement already satisfied “则说明已经安装过了，无需再安装。 

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_spider6_2.png)

完事之后就可以正常使用XPath了。

### 2.提取数据

我们先看一下百度的原页面，再看一下运行代码后的效果。可以看到代码杂乱无章，很难让人想到这两张图有任何关联，但其实页面显示的一切都被包含在HTML代码内。只是经过浏览器的渲染，才得到页面内的效果。


![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_spider6_3.png)

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_spider6_4.png)

现在我们开始真正的使用XPath解析来从代页面代码中提取出我们想要的内容。

> 假如我们只想要得到百度热搜内的数据，要怎么样提取呢？



首先新建一个Py文档，导入Requests库和安装好的lxml库。定义一个请求对象也就是百度，之后再定义一个请求头传给请求内的headers可选参数这是为了将程序伪装成浏览器，防止服务器拒绝接受请求，将请求到的页面代码储存到容器中，respones_text容器内的就是百度页面的HTML源代码了。


```python
import requests  # 导入请求库
from lxml import etree  # 导入Xpath必要库

tou = {
    "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
}   # 定义请求头

respones = requests.get('https://www.baidu.com/', headers=tou)  # 获取请求对象
respones_text = respones.text   #  获取的页面源码储存到容器中
```
获取到源代码后，我们就可以定义一个要解析的对象了，引用的etree，因为我们解析的对象是HTML代码，使用用HTML()方法，括号参数是获取到的百度源码respones_text。

```python
import requests  # 导入请求库
from lxml import etree  # 导入Xpath必要库

tou = {
    "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
}   # 定义请求头

respones = requests.get('https://www.baidu.com/', headers=tou)  # 获取请求对象
respones_text = respones.text   #  获取的页面源码储存到容器中

objects = etree.HTML(respones_text)  # 定义一个解析的对象
```
定义好解析对象后，就可以使用XPath更加精确的定位到我们想要的内容。在浏览器<kbd>F2</kbd>打开检查功能，使用圆圈内的定位小箭头指向你想提取的内容，比如百度热搜的第一条内容，右侧就会显示该内容的HTML源码位置。

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_spider6_5.png)

找到了源码位置后，我们就可以通过分析这串标签代码来完成提取。可以看到内容被包含在Span标签内，我们右键该标签Copy—> Copy XPath复杂该标签的XPath层级位置。

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_spider6_6.png)
定义一个容器对象，利用xpath()方法将复制下来的标签路径内的数据提取出来，并保存到容器内。xpath()内的参数就是复制下来的路径。


```python
import requests  # 导入请求库
from lxml import etree  # 导入Xpath必要库

tou = {
    "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
}   # 定义请求头

respones = requests.get('https://www.baidu.com/', headers=tou)  # 获取请求对象
respones_text = respones.text   #  获取的页面源码储存到容器中

objects = etree.HTML(respones_text)  # 定义一个解析的对象
after = objects.xpath('//*[@id="hotsearch-content-wrapper"]/li[1]/a/span[2]') # 获取层级标签内的数据
print(after)
```
我们运行这串代码，可以看到只是输出span元素的信息，仍没有我们需要的。

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_spider6_7.png)

别急，我们只需要在路径后面加上个`/text()`即可

```python
after = objects.xpath('//*[@id="hotsearch-content-wrapper"]/li[1]/a/span[2]/text()') # 获取层级标签内的数据
```
运行一下，成功地将我们想要的内容解析提取了出来！！！


那有人要问了，如果我想将热搜中所有的词条全搞出来，怎么弄呢？
很简单，通过分析源码我们可以发现，包含内容的span标签的都有一个共同的属性值：class=''title-content-title''，利用这一发现我们XPath快速定位。

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_spider6_8.png)

我们可以利用XPath指定标签属性，以快速的定位到目标内容。

这样我们再次运行，就可以得到所有热搜词条了。
```python
after = objects.xpath('//span[@class="title-content-title"]/text()') # 获取层级标签内的数据
```

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_spider6_9.png)

因为XPath提取到到数据一般都是以列表的形式储存的，所以我们可以用循环语句将数据迭代给新的容器以达到自动换行美化数据的效果。

```python
import requests  # 导入请求库
from lxml import etree  # 导入Xpath必要库

tou = {
    "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
}   # 定义请求头

respones = requests.get('https://www.baidu.com/', headers=tou)  # 获取请求对象
respones_text = respones.text   #  获取的页面源码储存到容器中

objects = etree.HTML(respones_text)  # 定义一个解析的对象
after = objects.xpath('//span[@class="title-content-title"]/text()') # 获取层级标签内的数据

for x in after:  # 自动换行
    print(x)
```



**怎么样？整个过程下来是不是简单又神奇，这也正是XPath功能强大的所在。**

## 总结

> 本次简单地讲到了XPath用作于提取内容的过程。
> 作为当前最流行火爆的爬虫解析器，其根本因素它拥有强大的数据分析能力和多样的定位功能，让爬虫有了更多的选择。
> 以上只是XPath的简单操作，其精髓还需要更加深入的探索和学习。
> 内容为本人学习笔记,难免有不足之处,恳请大家批评指正。
