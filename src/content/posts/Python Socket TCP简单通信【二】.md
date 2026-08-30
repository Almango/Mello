---
title: Python Socket TCP简单通信【二】 #  设置文章标题
published: 2023-06-22 17:42:10             # 设置发布时间（默认不设）
cover: img/cover/python.jpg            # 设置文章封面
top_img: false
tags: [Python, Socket, 网络编程]                                # 添加分类
category: 学习笔记 
slug: "0243ee4b"
---

## 一.前言
 1. 接着上期的介绍，现在我们开始利用现有的代码让客户端对服务器发出请求并完成简单的通信。
## 二.TCP协议通信流程
 2. 在开始这项工作之前，我们认识一下客户端向服务器发送请求并完成连接的一个Socket TCP通信执行流程。
### 1.‘三次握手’
 3. 当客户端向服务器发送连接请求时，两者之前会发送三次文段，也就是我们俗话说的“三次握手”。
>  4. 它的具体过程是：
>   - 1.  客户端主动向服务器发送连接请求（文段1）。
>   - 2. 处于监听状态的服务器被动的接收了来自客户端的请求，并将确认的连接请求返回给客户端（文段2）。
>   - 3. 最后客户端也将确认的连接请求返回给了服务器（文段3）   表示客户端完成了与服务器的连接。两端建立连接即可进行通信。
> 
>


![post_pysocket2_1.png](https://s2.loli.net/2024/02/02/WXOScyZkF9wQdpg.png)
> 
### 2. ‘四次挥手’
 5. 当想要断开服务器连接时，也是客户端主动地发出断连请求，两者之前会发送四次文段。这就是我们所说的“四次挥手”。具体过程：

>  - 1. 客户端首先向服务器发送离线请求，客户端进入FIN_WAIT1状态（文段1）。
>  - 2. 服务器接收到请求后并将确认返回给客户端，服务器进入CLOSE_WAIT状态。收到回应的客户端进入FIN_WAIT2状态，等待服务器的FIN。（文段2）。
>  - 3. 接着服务器将FIN发送给客户端，并进入了LAST_ACK状态，等待客户端的确认。（文段3）
>  - 4. 最后客户端将ACK发送给服务器并进入TIME_WAIT状态，服务器则做出回应CLOSE断开了与客户端的连接...（文段4）   
> 
> 
![post_pysocket2_2.jpeg](https://s2.loli.net/2024/02/02/X4KjuCag5eQSBm6.jpg)
>

> 理解了Socket TCP通信协议的工作流程后，有利于轻易地掌握网络通信的关键。对往后的开发将也会变得更加灵活。

## 二.客户端发送信息
 1. 在客户端文件中调用Socket对象，并写入send( )函数，用于向服务器发送信息。
 - send( )内可直接输入需要发送的信息。 send( )内参数必须是bytes字节类型，也就是说，需要将内容转化为utf-8的编码格式，可以利用encode( )进行转化。
  2. 在发送完数据后需要将套接字close掉。
```python
# 发送文字信息
Client.send('你好，世界！！！'.encode('utf-8'))
# 断开字节流
Client.close()
```

## 三. 服务器接收信息
 1. 客户端发送消息后，服务器就可以接收消息，需要用到内置函数recv( )来读取信息。

- recv( )内参数为容器的大小，也就是可容纳多大的客户端发来的数据，同时也包含了数据。
 - ​recv( )内容纳的数据需要再一次用到decode( )进行转化。
 

```python
 # 接收消息
 data_info = socket.recv(1024).decode('utf-8')

 # 输出该消息
 print(f'{addr_info[0]}' + '发来消息>>>' + f'{data_info}')
```
2. 我们运行一下客户端和服务器，运行效果如下，服务器将会输出客户端发来的信息。

![post_pysocket2_3.png](https://s2.loli.net/2024/02/02/bmBQNE1CaXL7oFd.png)
4. 代码解释：

> addr_info是个元组类型，里面包含了两个数据，一个是地址，一个是端口，所以我们可以直接用addr_info[0]来获取地址，而端口直接省略掉。

## 四.整体代码
1. Client.py：

```python
# 这是客户端
import socket

# 创建Socket TCP对象
Client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 绑定客户端地址
Client_address = (('192.168.0.193', 2023))
Client.connect(Client_address)

# 发送文字信息
Client.send('你好，世界！！！'.encode('utf-8'))
# 断开字节流
Client.close()
```
2. Server.py：

```python
# 这是服务器端
import socket

# 创建Socket TCP对象
Server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
Server.bind(('', 2023))   # 绑定本地端口

# 启动监听
Server.listen(5)

# 循环接纳客户端
while True:
    socket, addr_info = Server.accept()  # 返回值传参赋值
    # 接收消息
    data_info = socket.recv(1024).decode('utf-8')
    # 输出该消息
    print(f'{addr_info[0]}' + '发来消息>>>' + f'{data_info}')

    socket.close()  # 断开现有的连接...
    print(f'{addr_info}' + "断开了与服务器的连接...")
```
## 五.总结
1. 以上内容完成了客户端和服务器之间简单的Socket TCP通信。
