---
title: Python Socket TCP初始【一】 #  设置文章标题
published: 2023-06-22 17:41:10             # 设置发布时间（默认不设）
cover: img/cover/python.jpg            # 设置文章封面
top_img: false
tags: [Python, Socket, 网络编程]                                # 添加分类
category: 学习笔记 
slug: "bda42016"
---

# Python Socket TCP通信初识
## 一.什么是Socket ？
1. Socket（套接字）：一种独立于协议的网络编程接口，它就是对网络中不同主机上的应用进程之间进行双向通信的端点的抽象。一个套接字就是网络上进程通信的一端，提供了应用层进程利用网络协议交换数据的机制。从所处的地位来讲，套接字上联应用进程，下联网络协议栈，是应用程序通过网络协议进行通信的接口，是应用程序与网络协议栈进行交互的接口。
2. 我们使用的任何一个网络通信工具都是以Socket为底层编写出来的，如QQ，WeChat，Email，浏览器等。利用Socket我们可以完成很多与网络通信有关的操作。
## 二.Socket多人聊天
1. 最近突发奇想，想学一下Python的Socket技术，设计一款属于自己的聊天工具。因为最近太闲了，Python的干货也看不下去了，基本上，那些语法基础，函数，类之类的都已经掌握了，现在先想来点新鲜的。
2.网上还是有很多关于Python Socket的教程的，我也总结一些，给大家和自己也写一份教程，加深记忆。

## 三. 利用Python 开发Socket多人聊天
### 1.Socket TCP协议开发
1. 基本上TCP协议在Socket的类型上是用的最多的，UDP其实也还可以，但，我是蹭热度。
2. 下面直接开始吧！！！
### 1.1创建客户端 Socket TCP对象
3. 新建一个Client.py的文件，首先是创建TCP类型的Socket，创建TCP对象之前需要将Socket模块导入。
4.  利用模块内置函数传参，以此定义好Socket对象的类型，这样我们就创建好了一个Socket TCP类型的对象。
```python
# 这是客户端
import socket # 导入模块
Client = socket.socket(socket.AF_INET, socket.SOCK_STREAM) # 创建并定义Socket对象
```
Socket( )函数内有两个参数，
- AF_INET是一个地址系列,用于指定套接字可以与之通信的地址类型
- SOCK_STREAM 用于定义套接字的通信传输类型，STREAM表示TCP协议，DGRAM表示UDP协议。

### 1.2.绑定服务器地址
1. 对于通信来说，每个客户端都有唯一一个相当于的IP地址，端口也是唯一不能重复的，在访问服务器时它是代表外网客户端的标志，而绑定一个客户端地址也就相当于创建一个IP连接对象。
2. 首先，写入需要连接的服务器地址和端口，因为在后期的服务器和客户端对接时可以使用tuple元组，str字符串，和byte字节类型的地址，所以我们在写入地址时使用字符串和字节类型。
注意：端口范围（1 - 65535）并且不能占用其他端口。

```python
Client_address = ('127.0.0.1', 2023)
```
3. 服务器地址对象定义后，需要绑定到客户端，告诉它和指定对象连接。
4. 调用Socket对象，并写入connect( ）函数，参数为地址，直接将服务器地址代入。这样就绑定好了服务器地址。

```python
Client_address = ('127.0.0.1', 2023)
Client.connect(Client_address)
```

### 2.1创建服务器Socket TCP对象
1. 有了客户端，当然还得有服务器，这样两者之间才有通信的对象。
2. 创建服务器对象其实和创建客户端对象一样，只是说后面的行为不一样。
创建一个新的文件名为Server.py，直接照搬上面的内容。
```python
# 这是服务器端
import socket # 导入模块

# 创建Socket TCP对象
Client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  创建并定义Socket对象
```
### 2.2绑定服务器端口
1.前面说了，客户端已经绑定了服务器的地址和端口，而服务器也同样要绑定端口，这样的话客户端才可以和服务器端口相对应并完成连接。
2.调用Socket对象并写入bind( )函数，参数为本地地址和端口，同样可以用元组类型的。
注意：地址可以使用空字符串，这代表是服务器的默认地址，端口自定义，但客户端端口一定要追随服务器。

```python
Server.bind(('', 2023)) #绑定服务器端口
```
### 2.3服务器监听访客
1. 当服务器启动后，要开始监听外网访问，使用listen( )函数

```python
Server.listen(10) # 启动监听
```
### 2.4循环接纳客户端
1. 当客户端访问服务器时，服务器接纳，并做出相应的操作，随后断开连接，并再次接纳下一个客户端，循环操作，这就完成了服务器与客户端的通信。
2. 完成这种操作首先需要写入循环语句，然后调用服务器的Socket对象并写入accept( )函数，当客户端服务器服务器时，该函数会接纳监听列队中的客户端的连接，并创建一个新的Socket以接收客户端发送的数据以及向客户端发送回应信息，最后返回文件描述符。
```python
# 循环接纳客户端
while True:
    socket, addr_info = Server.accept()  # 返回值传参赋值
    print(socket, addr_info)  # 打印返回值
    socket.close()  # 断开现有的连接...
```
3. 上述代码，当客户端发送连接服务器后，若没有对服务器发出请求则会立即断开现有的连接 并完成一个对监听列队中客户端的连接。
 - socket 为accept函数返回时新建立的Socket的连接。
 - addr_info 为accept函数返回的为这个新socket的文件描述符。

### 3.整体代码
1. 客户端Client.py：

```python
# 这是客户端
import socket

# 创建Socket TCP对象
Client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 绑定目标服务器端地址
Client_address = (('127.0.0.1', 2023)) #IP地址为需要连接服务器的IP
# 连接目标服务器
Client.connect(Client_address)
```
2. 服务器端Server.py：

```python
# 这是服务器端
import socket

# 创建Socket TCP对象
Server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
Server.bind(('', 2023))   # 绑定本地端口

# 启动监听列队
Server.listen(5)

# 循环接纳客户端
while True:
    socket, addr_info = Server.accept()  # 返回值传参赋值
    print(socket, addr_info)  # 打印返回值
    socket.close()  # 断开现有的连接...
    print(f'{addr_info}' + "断开了与服务器的连接...")
```
## 四.总结
1. 以上介绍的是在本地局域网内搭建的Sockect客户端与服务器之间的对接，后期会介绍更多关于Socket相关的通信操作。