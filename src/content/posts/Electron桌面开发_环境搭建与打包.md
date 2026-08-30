---
title: Electron桌面应用开发_环境搭建与应用打包
published: 2024-10-20 09:36:01
cover: img/cover/electron.png     
top_img: false
tags: [Electron]                                
category: 学习笔记
slug: "e256093f"
---
> **这是我写的一篇关于Electron的文章**，这也代表着我已经开始学习桌面应用开发了。很难Electron居然是通过Html，css，js这三件套来开发应用的，想到我已经近三年没有写过web了（除了Hexo和css），没想到居然能在这应用上我最擅长的……😁😁，太幸运了。
> 当时我学习C++的时候，一部分原因就是因为QT（我想开发桌面应用），但Electron的出现让我有了转机，我可以通过web快速的构建一个理想美观的应用程序，我一开始以为需要vue或者react，后来才知道，这两个只是Electron所支持的两个框架而已……关于这两个框架我以后再说吧……


>**Electron**是一个使用 JavaScript、HTML 和 CSS 构建桌面应用程序的框架。 嵌入 Chromium 和 Node.js 到 二进制的 Electron 允许您保持一个 JavaScript 代码代码库并创建 在Windows上运行的跨平台应用 macOS和Linux——不需要本地开发 经验。

## 创建项目
1 . 创建项目之前，需要先新建一个项目目录（目录名称为软件的标题名）
### 初始化配置文

1 . 打开项目目录，在该目录中打开终端，输入：`npm init -y`。
2 . 之后该目录内就会生成一个名为`package.json`配置文件，它用于`描述项目的元数据信息和依赖项`
3 . 将`package.json`中的`test`改为：
```
"scripts": {
    "start": "electron ."
  },
```
3 . 继续新建一个名称为：`.npmrc`的文件，输入以下代码：
```
registry=https://registry.npmmirror.com/
electron mirror=https://npmmirror.com/mirrors/electron/
electron_builder_binaries_mirror=https://registry.npmmirror.com/-/binary/electron-builder-binaries/
```

### 部署Electron

1 . 在项目根目录的终端输入：`npm i electron -d`
2 . 新建一个文件：`index.js`，并在该文件中输入以下代码：
```js
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,  // 窗体宽度
    height: 600,  // 窗体长度
    //autoHideMenuBar: true, // 自动隐藏菜单栏
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

//创建托盘
//  const createTray = () => {
//     const icon = path.resolve(__dirname,"img/icon.ico") //托盘图标
//   }
```
### 运行项目

1 . 在终端输入：`npm start`即可。

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_electron1_1.png)

## 打包（两种方式）

### 构建安装包（1）
> 该打包方式会生成安装包，运行安装包会有安装向导，可以在package中自定义安装行为，软件安装后，它会自动在桌面生成一个快捷键，当你想删除的时候，可以通过第三方卸载软件删除，也可以在根目录的`Uninstall.exe`程序卸载。这还是十分方便的，就和我们安装QQ，微信，vscode等软件一样。


1 . 在`package.json`中的`script`下面插入代码：
```
"build": {
  "productName": "QQ",   // 项目名称
  "appId": "app.almango.cn",  // 软件标识（自定义）
  "win": {
    "icon": "/img/icon.ico",  // 软件图标
    "target": [
      {
        "target": "nsis",  // 安装行为
        "arch": [
          "x64"   // 架构支持
        ]
      }
    ]
  },
  "nsis": {
    "oneClick": false, // 是否一键安装（true）还是辅助安装（false）。
    "perMachine": true,  // 是否为user安装（true）,还是全局安装（false）
    "allowToChangeInstallationDirectory": true  是否可以自定义安装目录（只对为user安装有效）
  }
},
```
2 . 对于nsis各参数的作用可以参考文章：[「稀土掘金」electron-builder打包，NSIS脚本的一些使用](https://juejin.cn/post/7004398823082557476)
3 . 最后在终端运行代码：`npm run build`

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_electron1_2.png)

4 . 可以看到，安装完成后，桌面生成了一个软件快捷键，点击后可以正常运行，和其他软件的启动方式是一致的。我个人还是比较喜欢用这种方法打包应用程序。

### 免安装打包（2）
> 这种方法就更加直接了，它不需要安装软件，打包后就是一个文件应用程序需要自己去文件夹中打开，不会和上面的方式一样创建快捷键，不仅如此，当你想卸载的时候，卸载软件也无法索引到，需要自己将整个目录删除才行。这种方法一般后期都会被封装为压缩包……

1 . 打包很简单，只需要在终端输入一串命令：`npm run pack`
2 . 个人不太推荐，除非是用于测试软件，不然挺繁琐的。