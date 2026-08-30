---
title: HarmonyOS4.0应用开发【学习笔记3：安装DevEco Studio开发环境】 #  设置文章标题
published: 2024-01-14 22:47:33             # 设置发布时间（默认不设）
cover: img/cover/harmony.jpg           # 设置文章封面 
category: 操作系统                          # 添加分类
tags: [HarmonyOS]
slug: "693c51fb"
---

## DevEco Studio

> 1. HUAWEI DevEco Studio 是基于IntelliJ IDEA Community开源版本打造，为运行在HarmonyOS和OpenHarmony系统上的应用和服务（以下简称应用/服务）提供一站式的开发平台。
> 2. 是面向全场景多设备，提供一站式的分布式应用开发平台，支持分布式多端开发、分布式多端调测、多端模拟仿真，全方位的质量与安全保障。


>### 特点
>- 高效智能代码编辑：支持ArkTS、JS、C/C++等语言的代码高亮、代码智能补齐、代码错误检查、代码自动跳转、代码格式化、代码查找等功能，提升代码编写效率。更多详细信息，请参考编辑器使用技巧。
>- 低代码可视化开发：丰富的UI界面编辑能力，支持自由拖拽组件和可视化数据绑定，可快速预览效果，所见即所得；同时支持卡片的零代码开发，降低开发门槛和提升界面开发效率。更多详细信息，请参考使用低代码开发应用/服务。
>- 多端双向实时预览：支持UI界面代码的双向预览、实时预览、动态预览、组件预览以及多端设备预览，便于快速查看代码运行效果。更多详细信息，请参考使用预览器预览应用/服务界面效果。
>- 多端设备模拟仿真：提供HarmonyOS本地模拟器，支持手机等设备的模拟仿真，便捷获取调试环境。更多详细信息，请参考使用模拟器运行应用/服务。

## 安装DevEco Studio
1. 所谓工欲善其事，必先利其器。在学习开发HarmonyOS应用之前，我们需要安装套件之一DevEco Studio，前面我们也说了，我们可以把这个软件理解为一个总编辑器，相当于Unity引擎一样。
2.  前往官网下载
 - HarmonyOS DevEco Studio官网下载：[https://developer.harmonyos.com/cn/develop/deveco-studio/#download](https://developer.harmonyos.com/cn/develop/deveco-studio/#download)

3. 在下载安装之前 Windows和Mac操作系统分别需要需要符合以下条件（开发者慎重考虑）
- 操作系统：Windows 10/11 64 位  ||  macOS(X86) 10.15/11/12/13 macOS(ARM) 11/12/13
- 内存：8GB 及以上  ||  8GB 及以上
- 硬盘：100GB 及以上  || 100GB 及以上
- 分辨率：1280*800 像素及以上  ||  1280*800 像素及以上


 3. 选择好对应的系统版本

![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/c5e117588f0e43eab6144879290f4cf6.png)
5. 下载完成后将安装包解压出来
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/675850efbb8b40718929a739097798da.png)
## 安装DevEco Studio
 1. 选择好安装目录（需要3GB以上的空间)
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/0670f882955a4921ae7abfe8eba38e45.png)
 2.  安装选项
 - 勾选 "创建桌面快捷键" 选项（必选）
 - 勾选 "添加环境变量" 选项（必选）
 - 创建Vscode工程项目 可选可不选
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/c600f8e545004570bcad2d1bb2aa1be9.png)

3. 是否重启电脑，选择第二项，单击 "Finish" 完成安装
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/c8a79876c30c40e7be24485a4873286a.png)
## 配置DevEco Studio
1. 是否导入已下载好的开发者工具，不导入选择第二项 并OK![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/2b127f1f6ecd46ba88e8ca475564e788.png)
2. Basic Setup安装界面配置：
  -  安装Node.JS（如果有则选择Local，没有则选择Install，并确定好选择好文件夹）
  - 安装Ohpm环境 （一般都没有，所以选择Install选项，并确定好文件夹）

**注意：如果你安装了Node.JS环境，一般版本不能大于或晚于所这支持的版本，如果显示了如图所示的提示，那么则说明你需要重新安装一个所需的版本**
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/6d1876a0d7634c93928cdc6b55cfb0ff.png)
  - "Next
  - ![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/e6b1eac79a1740f8aaeb426ae2e27318.png)
3. SDK安装界面：选择好安装位置即可。![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/a22058f53a9d4bfcb14147dca59ce997.png)
4. Summry协议界面：选择Accept，直接一路点击Next即可
5. 最后会开始安装所有开发环境（安装可能会花比较长的时间，耐心等待……）。![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/527d4425acff426eab57ef201cb85d1c.png)

6. 出现这个界面，就说明安装完成了，你也可以在左下角的 "Help" > "Diagnose Development Environment" 中检查环境是否完整，如果不完整可以在在里面补全。
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/42e46d13fed0405ea1d8a50aaec71ffa.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/5a72bd389f88443eb3b91be9b8ef2902.png)

7. 到这里，安装就完成了，总体来说还是比较简单的，唯独环境配置安装却是最有可能出错的，我们有可以通过HarmonyOS官方提供的文档指导安装：[https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V3/deveco_overview-0000001053582387-V3?catalogVersion=V3](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V3/deveco_overview-0000001053582387-V3?catalogVersion=V3)