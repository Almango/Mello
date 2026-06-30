---
title: Python Socket TCP单线程通信【三】
published: 2023-06-22 17:43:10             # 设置发布时间（默认不设）
cover: img/cover/python.jpg           # 设置文章封面
top_img: false
tags: [Python, Socket, 网络编程]                                # 添加分类
category: 学习笔记 
slug: "7cc3999a"
---
## 一. 前言
1. 前一期的简单通信只是草草的说到了它能够达到通信的效果，但它并不是很灵活，因为它没法自定义客户端要发送的内容，并且只能够发送一次消息至服务器。现在完善一下代码。

## 二.客户端持续发送与接收
1. 我们在发送消息时，不可能是发送一次就完事了，那就相当于是邮箱，而如果要持续向服务器发送消息，我们就需要用到while循环，循环send( )函数，为了达到自定义编写消息内容，可以将input( )的内容赋值到send( )内。

```python
while True:
    # 发送服务器消息
    Contest_server = input()
    Client.send(Contest_server.encode('utf-8'))
```
2. 当然了，因为是通信，也不可能是只有一方向另一方发送，应该是彼此之间通信，所以，客户端也可以用到recv( )函数用于接收服务器发送的消息。和上面一样，利用循环语句保持同步。

```python
while True:
    # 发送服务器消息
    Contest_server = input()
    Client.send(Contest_server.encode('utf-8'))
    
    # 接收服务器消息
    Data_Server = Client.recv(1024).decode('utf-8')
    print('服务器发来消息>>>' + Data_Server)
```

## 三.服务器持续发送与接收
1. 服务器和客户端一样，同样拥有发送的功能。这样，客户端和服务器彼此之间就能够进行自定义内容的通信。

```python
while True:
    socket, addr_info = Server.accept()  # 返回值传参赋值
    # 循环接收与发送消息（保持在线）
    while True:
        # 接收客户端消息
        data_info = socket.recv(1024).decode('utf-8')         # 接收客户端消息
        print('客户端发来消息>>>' + f'{data_info}')  # 输出该消息
        
         # 发送客户端消息
        data_client = input()
        socket.send(data_client.encode('utf-8'))
```

## 四. 断开连接
1. 由于两端的循环是无条件的，就会导致两端无法断开连接，这就需要给它添加一个条件，当任意一端发送了‘拜拜’的消息，则跳出循环，最后断开连接。（见整体代码）

## 五.整体代码与总结
1. Client.py：

```python
# 这是客户端
import socket

# 创建Socket TCP对象
Client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 绑定客户端地址
Client_address = (('192.168.0.193', 2023))
Client.connect(Client_address)
print('-----------------客户端----------------')

# 循环接收与发送消息（保持在线）
while True:
    # 发送服务器消息
    Contest_server = input()
    Client.send(Contest_server.encode('utf-8'))
    # 当客户端说拜拜，则断开连接
    if Contest_server == '拜拜':
        break

    # 接收服务器消息
    Data_Server = Client.recv(1024).decode('utf-8')
    print('服务器发来消息>>>' + Data_Server)
    # 当服务器说拜拜，则断开连接
    if Data_Server == '拜拜':
        break


Client.close()  # 断开字节流

```
2. Server.py：

```python
# 这是服务器端
import socket

# 创建Socket TCP对象
Server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
Server.bind(('', 2023))   # 绑定本地端口
print('-----------------服务器端----------------')

# 启动监听
Server.listen(5)

# 循环接纳客户端
while True:
    socket, addr_info = Server.accept()  # 返回值传参赋值
    # 循环接收与发送消息（保持在线）
    while True:
        # 接收客户端消息
        data_info = socket.recv(1024).decode('utf-8')                 # 接收客户端消息
        print('客户端发来消息>>>' + f'{data_info}')  # 输出该消息
        if data_info == '拜拜':  # 当服务器说拜拜，则断开连接
            break

        # 发送客户端消息
        data_client = input()
        socket.send(data_client.encode('utf-8'))
        if data_client == '拜拜':  # 当客户端说拜拜，则断开连接
            break

    socket.close()  # 断开现有的连接...
    print(f'{addr_info}' + "断开了与服务器的连接...")

```
3.当我们运行客户端与服务器时，会发现，彼此是能够正常交流的，但是还存在有点问题：两者只能一对一的交流，也就是说，你说一句，我再说一句，不能一下说两句。
![post_pysocket3_1.png](https://s2.loli.net/2024/02/02/J5snf6OrmcUCWH8.png)

4. 对于这种问题，直接原因发送和接收的代码是写在循环语句内的，当发送消息代码完成时，等待的是对方消息的接收，如果对方无作为，则无法执行下一步代码。根本原因还是因为线程。