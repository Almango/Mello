---
title: Node.JS Express
published: 2025-03-08 22:35:50             # 设置发布时间（默认不设）
tags: [nodejs]                               # 添加分类
category: 学习笔记
slug: "70c2f689"
---
# 创建HTTP服务器

1. 引入'http'插件，
2. 创建一个HTTP服务器实例，并使用一个常量server来接收
3. 设置端口。

4. 随后设置'request' 监听，每当收到http请求时触发。server.on提供了两个参数event（要监听的事件名称），listener（事件触发时要执行的回调函数。）
5. 最后启动服务，输出语句

```bash
node demo.js
```
```js
const http = require('http'); // 引入 Node.js 的 http 模块

const server = http.createServer(); // 创建一个 HTTP 服务器实例

const port = 3000; // 定义服务器监听的端口号

// 监听 'request' 事件，每当有 HTTP 请求到达服务器时触发
server.on('request', function(req, res) {
    const me = req.method; // 获取请求的方法（如 GET、POST 等）
    console.log(me); // 打印请求方法
});

// 监听端口，启动服务器
server.listen(port, function() {
    console.log("Web服务器启动成功：http://127.0.0.1:3000");
});
```



|  方法   | 参数  |作用|
|  ----  | ----  |----|
| server.on()  | event，listener |用于为 http.Server 或 https.Server 对象添加事件监听器。|
| server.listen()  | port， callback |用于启动服务器并监听指定的端口或文件描述符。|

## GET与POST

>GET 和 POST 是 HTTP 协议中最常用的两种请求方法，它们用于客户端与服务器之间的通信。每种方法都有其特定的用途和行为。

**GET**：请求用于从服务器获取资源。它是 HTTP 请求中最常用的方法之一，通常用于请求网页、API 数据等。

**POST**：请求用于向服务器提交数据，通常用于创建新资源或更新现有资源。例如，用户提交表单数据时通常使用 POST 请求。

|特性	|GET|	POST|
|  ----  | ----  |----|
|用途	|获取资源|	提交数据|
|参数传递	|通过 URL 查询字符串|	通过请求体|
|安全性	|参数暴露在 URL 中，不安全|	参数在请求体中，相对安全|
|缓存	|可缓存	|不可缓存|
|书签	|可书签|	不可书签|
|长度限制	|URL 长度有限制|	请求体长度无限制|



## Request与Response

>在 Node.js 的 HTTP 模块中，req 和 res 是两个非常重要的对象，分别代表 HTTP 请求和 HTTP 响应。它们是处理 HTTP 通信的核心对象，提供了丰富的属性和方法来处理请求和发送响应。


**req**：它代表客户端的 `HTTP 请求`。它包含了请求的所有信息，例如请求方法、URL、请求头、请求体等。 
**res**：它对象代表服务器发送给客户端的 `HTTP 响应`。它提供了方法来设置响应头、状态码和发送响应体。


1. 例如，我们可以使用`req`的各种方法`拿到客户端返回的请求数据`：

```js
server.on('request', function(req,res){
    console.log(`收到请求：${req.method} ${req.url}`);
    console.log('请求头：', req.headers);
    console.log('请求方法：', req.method);
    console.log('请求 URL：', req.url);
})
```

2. 我们也可以使用`res`的各种方法来`将内容响应给客户端`。

```js
server.on('request', function(req,res){
    res.statusCode = 200;
    // 设置响应头
    res.setHeader('Content-Type', 'text/plain');
    // 发送响应体
    res.send('Hello, World!');
})

```
|  属性/方法   | 参数  |作用|
|  ----  | ----  |----|
| req.method  | NULL |用于为获取客户端返回的请求类型（GET、POST、PUT、DELETE等）|
| req.httpVersion  | NULL |用于获取HTTP 版本|
| req.headers  | NULL |用于获取请求头，一个对象，包含所有请求头字段。|
| req.url  | NULL |用于获取请求的 URL|
| res.statusCode  | NULL |用于获取响应状态码。|
| req.on() | event， listener |用于监听事件|
| res.setHeader()  | name，value |用于设置响应头|



# Express.js

## 创建服务器

1. 只需要导入express模块，再创建express实例，最后启动服务器即可。
2. 可以发现，服务器创建方式与http不同的是，express不用直接创建服务器实例，只需要创建一个express实例即可，这事因为express内部`对http进行了封装`。

3. 在监听方面，需要单独对某一个页面的请求方法进行监听，例如下列代码中对`'/'`页面进行的GET请求的监听
```js
const express = require('express')   // 导入express模块

const app = express()   // 创建express实例

app.get('/', function(req, res){   // 监听GET请求
    res.send("Index")
})

app.listen(3000, function(req, res){    // 启动服务器
    console.log("服务器启动成功：http://127.0.0.1:80")
})
```



## 静态资源绑定

>静态资源（如 HTML 文件、CSS 文件、JavaScript 文件、图片等）可以通过 express.static 中间件来提供服务。


`express.static` 是一个内置的中间件，用于提供静态文件服务。它允许你指定一个目录路径，该目录中的文件将被公开访问。你可以通过 express.static 提供一个 URL 参数，将该参数映射为服务器的 URL 前缀。这样，客户端可以通过指定的 URL 前缀访问静态文件。例如，如果你将 public 目录映射到 /static，那么客户端可以通过 /static 前缀访问 public 目录中的文件。

1. 假设我们现有的静态资源目录为：

```bash
project/
└─── public/
    ├── login.html
    └── app.js

```
3. 例如通过以下代码，我们可以访问到html资源：http://localhost/login.html
```js
const express = require('express')

const app = express()

app.use(express.static('../public'))

app.listen(3000, function(req, res){
    console.log("服务器启动成功：http://127.0.0.1:3000")
})
```


## 路由模块

>`路由（Router）` 是一个非常重要的概念，它定义了应用程序如何响应客户端的请求。具体来说，路由决定了当用户访问某个 URL 或提交某个请求时，应用程序应该执行哪些操作。

1. 在 Express 中，路由是通过 app 对象的 get、post、put、delete 等方法定义的。每个方法对应一种 HTTP 请求方法，并且可以指定一个或多个处理函数。


2. 我们可以通过新建一个js文件来专门地挂载路由，并通过module将router对象共享出去。
```js
const express = require('express')  // 导入express模块
const router = express.Router()     // 创建路由对象

router.get('/', function(req, res){
    res.send("Welcome to MangoChat Index")
})

router.get('/about', function(req, res){
    res.send("There is about for MangoChat")
})

module.exports = router
```

3. 回到index,js，我们将共享的router对象接收，最后绑定路由即可使用。

```js
const router = require('./router.js')
app.use(router)
```


## 中间件

>中间件（Middleware） 是一个非常强大的功能，它允许你在请求和响应的生命周期中插入自定义逻辑。中间件可以执行各种任务，例如解析请求体、验证用户身份、日志记录、错误处理等。

1. 中间件是一个函数，它接收 req（请求对象）、res（响应对象）和 next（一个函数，用于将控制权传递给下一个中间件或路由处理函数）作为参数。中间件可以执行以下操作：

- 访问请求和响应对象：通过 req 和 res 访问请求和响应的详细信息。
- 执行任意代码：在请求处理过程中执行自定义逻辑。
- 调用堆栈中的下一个中间件：通过调用 next() 将控制权传递给下一个中间件或路由处理函数。
- 终止请求-响应周期：通过调用 res.send()、res.json() 或其他响应方法来结束响应。

**中间件的类型**
Express 中间件可以分为以下几种类型：
- 应用级中间件：绑定到 app 对象，使用 `app.use()`或路由方法（如 app.get()、app.post() 等）。
- 路由级中间件：绑定到 Router 对象，使用 `router.use()` 或路由方法（如 router.get()、router.post() 等）。
- 错误处理中间件：专门用于捕获和处理错误，通常有四个参数：err、req、res 和 next。
- 内置中间件：Express 自带的中间件，如 `express.static`。
- 第三方中间件：由社区提供的中间件，如 `body-parser`、`cookie-parser`、`morgan` 等。

>如果当前中间件函数没有结束请求-响应循环，它必须调用 `next()` 将控制权传递给下一个中间件函数。否则，请求将被挂起。

### 全局中间件
>全局中间件 是一种应用级中间件，它会在每个请求和响应的生命周期中被调用，而不管请求的路径或方法是什么。

1. 将中间件绑定到`路由`或者`app.use()`中，便即可实现全局中间件的效果，每当有客户端向服务器发生请求必定触发该中间件。

```js
var Mw = function(req, res, next){
    console.log("成功调用一个全局中间件")
    next()
}
router.use(Mw)
```
2. 为了更加优雅，我们也可以写成一下形式。
```js
router.use((req, res, next)=>{
    console.log("成功调用一个全局中间件")
    next()
})
```

### 局部中间件

>局部中间件会在指定的请求页面中被调用。

1. 只需要将中间件放到需要监听的位置即可。

```js
const mv = function(req,res, next){
    console.log("局部中间件")
}
router.get('/',function(req, res){
    res.send("Welcome to MangoChat Index")
})
```

## MySQL数据库
#### 配置数据库
1. 安装`mysql`模块
```npm
npm install mysql
```

2. 导入`mysql`模块，并创建mysql的连接对象。
3. 这里通过 `mysql.createConnection()` 方法创建了一个数据库连接对象。配置对象中包含了连接数据库所需的参数：
- host：数据库服务器地址（通常是 localhost）。
- user：数据库用户名。
- password：数据库密码。
- database：要连接的数据库名称。

4. 接着我们执行一个简单的查询，查询语句是 `select 1`，这是一个简单的测试查询，用于检查连接是否正常。
5. 其中`err` 和 `result` 是 mysql 模块在执行数据库操作时，回调函数中返回的`两个参数`，它们分别代表了操作的`错误信息`和`操作`的结果。
6. 当返回`[ RowDataPacket { '1': 1 } ]`则表示连接和查询成功了，否则输出报错。
```js
const mysql = require('mysql')

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mc_user',
})

connect.query('select 1', (err, result)=>{
    if(err) return console.log(err.message)
    console.log(result)
})
```


### 查询与插入
#### 查询
1. 补充一下上面的query方法 
2. `query`是 `mysql 模块提供的一个核心方法`，用于执行 SQL 查询语句。它是 mysql 模块中最常用的方法之一，允许开发者在 Node.js 中与 MySQL 数据库交互。
3. 例如如下代码，我们可以通过在query中给定一个SQL语句：`SELECT * FROM user_info`，来查询到表`user_info`中的所有数据并输出在控制台。
```js
connect.query('SELECT * FROM user_info', (err, result)=>{
    if(err) return console.log(err.message)
    console.log(result)
})
```


#### 插入

1. 当我们需要插入数据的时候，可以先定义一个对象方便插入。
2. 为了语句更加优雅，所以我们将SQL写在字面量中。
3. 在`(id, user_name, user_password, user_creatdata)`括号中的分别都是表中已经定义好的表字段。`VALUES()`则表示以何种数据类型的方式进行插入，默认使用`?`，它作用是将用户输入的值`安全地插入到 SQL 查询中`，从而`防止 SQL 注入`攻击。
4. 最后在判断语句中利用`affectedRows`的值来判断插入是否成功。affectedRows表示的是受当前 SQL 操作影响的行数，当值为`1`时，则表明语句执行成功。
```js
// 定义插入的对象数据
const user = {id:2, user_name:'Boom', user_password:'root', user_creatdata:'2025-03-02'}   
const SQLexpress = 'INSERT INTO user_info (id, user_name, user_password, user_creatdata) VALUES(?, ?, ?, ?)'  

// 定义SQL语句
connect.query(SQLexpress, [user.id, user.user_name, user.user_password, user.user_creatdata], function(err, result){
        if(err) return console.log(err.message)   // 出现错误则报错
        if(result.affectedRows == 1) console.log(result) 
        console.log("数据插入成功")   // 输出成功
}) 
```

#### 更新

1. 当我们需要更新的时候，也可以使用同样的方法，下面是一个模拟了用户更改密码的例子。
2. 定一个对象，例如，用户almango想将旧密码修改为'123'。
3. SQL语句：`'UPDATE user_info SET user_password = ? WHERE user_name = ?'`，可以理解为从user_name开始修改字段为：user_password的内容。
4. 和上面的一样，当affectedRows为1，则执行成功。

```js
const update_user = {user_name:'almango', user_password: '123'}
const SQLexpress = 'UPDATE user_info SET user_password = ? WHERE user_name = ?'
    
connect.query(SQLexpress, [update_user.user_password, update_user.user_name, ], function(err, result){
    if(err) return console.log(err.message)   // 出现错误则报错
    if(result.affectedRows == 1) console.log(result)
    console.log("数据修改成功")   // 输出成功
})
```
#### 删除


```js
const SQLexpress = 'DELETE FROM user_info WHERE user_name=?';
    connect.query(SQLexpress, [NAME], function(err, result){
        if(err) return console.log(err.message)   // 出现错误则报错
        if(result.affectedRows == 1) console.log(result)  // 输出成功
        console.log("数据删除成功")
})
```

>本人不敢苟同，我认为意大利面就应该拌42号混泥土，因为螺丝钉的长度会直接影响到挖掘机的扭矩



### 用户注册

1. 编写好html的注册页面
2. 将`method`设置为`post`，action为当前页面的路径
3. 注意一下input的`name属性，一定要设置`，因为提交的数据会自动生成一个json数据，name对应的就是用户和密码。

```html
<body>
   <div class="container">
      <p style="font-size: 25px; text-align: center;padding: 30px;font-family: 'Josefin Sans', sans-serif;">MangoChat</p>
      <div class="input-box">
      <form method="post" action="/register">
         <input type="text" placeholder="请输入账户ID" required="required" name="username" autocomplete="off"><br><br>
         <input type="password" placeholder="请输入账户密码" required name="password"><br><br>
         <input type="password" placeholder="请输入再次确认密码" required name="res_password"><br><br>
         <input id="submit" type="submit" value="注册">
            <p class="register-now"style="text-align: left;">已有账户？<a href="/login.html" style="color: rgb(68, 116, 218);text-decoration: none;">前往登录</a></p>
         </form>
      </div>
   </div>
</body>
```



```js
const mysql = require('mysql')
const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mc_user',
})
function SQLInsert(NAME, PASSWORD, CREATION_DATE) {
    const user = {user_name: NAME, user_password: PASSWORD, user_creationdate: CREATION_DATE }   // 定义插入的对象数据
    const SQLexpress = 'INSERT INTO user_info (user_name, user_password, user_creationdate) VALUES(?, ?, ?)'  // 定义SQL语句

    connect.query(SQLexpress, [user.user_name, user.user_password, user.user_creationdate], function (err, result) {
        if (err) return console.log(err.message)   // 出现错误则报错
        if (result.affectedRows == 1) console.log(result)  // 输出成功
        console.log("数据插入成功")
    })
}
module.exports = {SQLInsert,};
```
