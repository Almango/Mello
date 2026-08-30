---
title: Python Socket TCP多线程通信【四】
published: 2023-06-22 17:44:10             # 设置发布时间（默认不设）
cover: img/cover/python.jpg           # 设置文章封面
top_img: false
tags: [Python, Socket, 网络编程]                                # 添加分类
category: 学习笔记 
slug: "b8742509"
---



# Python Socket TCP多线程通信
##  一.创建客户端连接
### 一.开启多线程通信
1. 前面说到，因为单线程原因，客户端与服务器无法做到自由对话，则需要用到多线程来处理。我们现在的服务端和客户端最多也就是发送消息和接收消息两种行为，所以我们采用双线程。
2. 或许我们可以新建一个Client.py的客户端和Server.py的服务端，代码照搬第一期的。
3. 首先编写客户端代码。导入内置的线程模块，随后调用模块内置函数threading.Thread( )，因为有两个行为（发送消息和接收消息）所以需要定义并启动双线程。
 - target：与目标函数对接使得目标函数开启一个线程。
 - args：向目标函数传入一个参数。这里两个线程同时将socket传入，可以使得socket获得两个线程的处理。
 - .start：启动线程。

```python
import threading  # 导入线程模块
```

```python
# 启动多线程（多个线程共用一个Socket）
threading.Thread(target=send_msg, args=(Client,)).start()
threading.Thread(target=recv_msg, args=(Client,)).start()
```
### 二.建立多线程任务
1. 当多线程开启后，就可以写入发送消息和接收消息的行为了，我们称它为多线程要完成的任务，它会被写在自定义函数的循环语句内。
2. while循环的作用不必多说：无条件，保持持续的通信（当然后期可以添加条件以跳出循环）
3. 要注意的是，**这两个函数在线程启动后会被同时运行，也就是说，在任何时候，不管是对方有没有发送消息，我们都可以直接向对方发送消息或者说接收消息，这就完美的解决了像单线程一对一的受限通信。起到自由对话的效果。**

```python
# 多线程任务
def send_msg(Client):     # 发送消息（任务线程）
    while True:
        send = input('>>>')
        Client.send(send.encode('utf-8'))


def recv_msg(Client):     # 接收消息（任务线程）
    while True:
        recvv = Client.recv(1024).decode('utf-8')
        print("服务器：" + f'{recvv}')
        
```
## 二.建立服务器连接
### 一.开启多线程通信
1.服务端也一样，直接套用第一期代码，重复和客户端一样的操作给它定义两个线程，但与前者不同的是，服务端的线程需要写在监听列队的内在循环语句内，这样每次有客户端连接服务器时，accept( )会创建一个新的socket并传给多线程任务。

```python
# 循环接纳客户端
while True:
    socket, addr_info = Server.accept()  # 返回值传参赋值
    threading.Thread(target=send_msg, args=(socket,)).start()
    threading.Thread(target=recv_msg, args=(socket,)).start()
    print(f'{addr_info}' + "断开了与服务器的连接...")
```
### 二.建立多线程任务
1. 和客户端一样，任务写在定义的双线程之上。
2. if条件不写也没事。

```python
# 多线程任务
def send_msg(socket):          # 发送消息（任务线程）
    while True:
        msg = input(">>>")
        socket.send(msg.encode('utf-8'))


def recv_msg(socket):          # 接收消息（任务线程）
    while True:
        remsg = socket.recv(1024).decode('utf-8')
        print("客户端：" + f'{remsg}')
        if len(remsg) == 0:
            break
            
```

## 三. 通信测试
### 一.通信效果
1. 效果还不错的，可以进行自由通信。
![post_pysocket4_1.png](https://s2.loli.net/2024/02/02/sFcBoA7kbzmXTZD.png)

## 四. 整体代码与总结
### 一.整体代码
1. Client.py：

```python
# 这是客户端
import socket
import threading

# 创建Socket TCP对象
Client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 绑定目标服务器端地址
Client_address = (('127.0.0.1', 2023))  # IP地址为需要连接服务器的IP
# 连接目标服务器
Client.connect(Client_address)
print('---------------------------客户端--------------------------')


# 多线程任务
def send_msg(Client):     # 发送消息（任务线程）
    while True:
        send = input('>>>')
        Client.send(send.encode('utf-8'))


def recv_msg(Client):     # 接收消息（任务线程）
    while True:
        recvv = Client.recv(1024).decode('utf-8')
        print("服务器：" + f'{recvv}')


# 启动多线程（多个线程共用一个Socket
threading.Thread(target=send_msg, args=(Client,)).start()
threading.Thread(target=recv_msg, args=(Client,)).start()
```
2.Server.py：

```python
# 这是服务器端
import socket
import threading

# 创建Socket TCP对象
Server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
Server.bind(('', 2023))   # 绑定本地端口
print('---------------------------服务器端--------------------------')

# 启动监听列队
Server.listen(5)


# 多线程任务
def send_msg(socket):          # 发送消息（任务线程）
    while True:
        msg = input(">>>")
        socket.send(msg.encode('utf-8'))


def recv_msg(socket):          # 接收消息（任务线程）
    while True:
        remsg = socket.recv(1024).decode('utf-8')
        print("客户端：" + f'{remsg}')
        if len(remsg) == 0:
            break


# 循环接纳客户端
while True:
    socket, addr_info = Server.accept()  # 返回值传参赋值
    threading.Thread(target=send_msg, args=(socket,)).start()
    threading.Thread(target=recv_msg, args=(socket,)).start()
    print(f'{addr_info}' + "客户端与与服务器连接成功...")
```
### 二. 总结
1. 本次应用到了Python的多线程模块，解决了Socket通信的局部问题。
2. 本次的Python Socket TCP通信目前仅局限于局域网，还无法于外网进行通信，往后会进行补充。
3. 说实话，我也才刚学到这里，真的是学一步做一个笔记，以免下次忘记。这个端午过的很充实呢！写了大半天的博客，让我深感体会到创作的不易，但收获却是满满当当的...
