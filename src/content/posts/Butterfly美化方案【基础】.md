---
title: Butterfly美化方案【基础】
published: 2024-07-19 20:20:03
pinned: false
tags: [Hexo,]                                # 添加分类
category: 魔改
draft: false
slug: "f39358af"
---









## 页脚徽标

#### Footer_Beautify徽标插件
1 . 安装插件[Hexo-butterfly-footer-beautify](https://github.com/Akilarlxh/hexo-butterfly-footer-beautify)
> `npm install hexo-butterfly-footer-beautify --save`

2 . 将下列代码插入到`主题配置文件_config.yml`中即可使用

```yml
# footer_beautify
# 页脚计时器：[Native JS Timer](https://akilar.top/posts/b941af/)
# 页脚徽标：[Add Github Badge](https://akilar.top/posts/e87ad7f8/)
footer_beautify:
  enable:
    timer: true # 计时器开关
    bdage: true # 徽标开关
  priority: 5 #过滤器优先权
  enable_page: all # 应用页面
  exclude: #屏蔽页面
    # - /posts/
    # - /about/
  layout: # 挂载容器类型
    type: id
    name: footer-wrap
    index: 0
  # 计时器部分配置项
  runtime_js: https://unpkg.zhimg.com/hexo-butterfly-footer-beautify@1.0.0/lib/runtime.js
  runtime_css: https://unpkg.zhimg.com/hexo-butterfly-footer-beautify@1.0.0/lib/runtime.css
  # 徽标部分配置项
  swiperpara: 3 #若非0，则开启轮播功能，每行徽标个数
  bdageitem:
    - link: https://hexo.io/ #徽标指向网站链接
      shields: https://img.shields.io/badge/Frame-Hexo-blue?style=flat&logo=hexo #徽标API
      message: 博客框架为Hexo_v5.4.0 #徽标提示语
    - link: https://butterfly.js.org/
      shields: https://img.shields.io/badge/Theme-Butterfly-6513df?style=flat&logo=bitdefender
      message: 主题版本Butterfly_v3.8.2
    - link: https://www.jsdelivr.com/
      shields: https://img.shields.io/badge/CDN-jsDelivr-orange?style=flat&logo=jsDelivr
      message: 本站使用JsDelivr为静态资源提供CDN加速
    - link: https://vercel.com/
      shields: https://img.shields.io/badge/Hosted-Vercel-brightgreen?style=flat&logo=Vercel
      message: 本站采用双线部署，默认线路托管于Vercel
    - link: https://vercel.com/
      shields: https://img.shields.io/badge/Hosted-Coding-0cedbe?style=flat&logo=Codio
      message: 本站采用双线部署，联通线路托管于Coding
    - link: https://github.com/
      shields: https://img.shields.io/badge/Source-Github-d021d6?style=flat&logo=GitHub
      message: 本站项目由Github托管
    - link: http://creativecommons.org/licenses/by-nc-sa/4.0/
      shields: https://img.shields.io/badge/Copyright-BY--NC--SA%204.0-d42328?style=flat&logo=Claris
      message: 本站采用知识共享署名-非商业性使用-相同方式共享4.0国际许可协议进行许可
  swiper_css: https://unpkg.zhimg.com/hexo-butterfly-swiper/lib/swiper.min.css
  swiper_js: https://unpkg.zhimg.com/hexo-butterfly-swiper/lib/swiper.min.js
  swiperbdage_init_js: https://unpkg.zhimg.com/hexo-butterfly-footer-beautify/lib/swiperbdage_init.min.js
```
#### 效果图

![cd2ad8d3051db874556f30914adf7a11.png](https://s2.loli.net/2024/07/21/qobM2U7yitdEkvO.png)

## 侧边栏插件

#### 那年今日
1 . 这个插件，可以在侧边栏中显示过去的今天所发生过的事情，还是挺有意思的。
2 . 教程也很简单，我们直接安装这个插件。

>`npm i hexo-history-calendar --save`

3 . 最后在配置文件Config.yml插入下列代码，启用即可。

```yml
## history_calendar那年今日
history_calendar:
  priority: 4
  enable: true
  enable_page: all
  layout:
    type: class
    name: sticky_layout
    index: 0
  temple_html: '<div class="card-widget card-history"><div class="card-content"><div class="item-headline"><i class="fas fa-clock fa-spin"></i><span>往年今日</span></div><div id="history-baidu" style="height: 100px;overflow: hidden"><div class="history_swiper-container" id="history-container" style="width: 100%;height: 100%"><div class="swiper-wrapper" id="history_container_wrapper" style="height:20px"></div></div></div></div>'

```
#### 效果图

![9c4e1ccea17d35109035eedc1de9a5e4.png](https://s2.loli.net/2024/07/21/oYSUyqQXg4hFCR5.png)

## 关于页面
#### 技能展示

1 . Skill Icons官网：[https://skillicons.dev/](https://skillicons.dev/)
2 . Github：[https://github.com/tandpfun/skill-icons/tree/main?tab=readme-ov-file#centering-icons](https://github.com/tandpfun/skill-icons/tree/main?tab=readme-ov-file#centering-icons)

3 . 可以按照Github中的`README.md`教程来设置图标。
4 . 教程提供了4种方法分别是：
>只需要将下列链接或代码粘贴到文档中即可使用。
>按照自己的需求，可以自定义链接中的图标名称：`icons?i=[技能名称],[...],[...],[...]`
>对于的技能名称可以在`README.md`中找到。
  - Specifying Icons
```markdown
[![My Skills](https://skillicons.dev/icons?i=js,html,css,wasm)](https://skillicons.dev)
```

 - Themed Icons
```markdown
[![My Skills](https://skillicons.dev/icons?i=java,kotlin,nodejs,figma&theme=light)](https://skillicons.dev)

```
 - Icons Per Line
```markdown
[![My Skills](https://skillicons.dev/icons?i=aws,gcp,azure,react,vue,flutter&perline=3)](https://skillicons.dev)

```
 - Centering Icons
```svg
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=git,kubernetes,docker,c,vim" />
  </a>
</p>
```

5 . 如果觉得上面链接图片加载很慢，可以将将其以svg的格式保存在本地使用。例如：

6 . 打开链接：[https://skillicons.dev/icons?i=html,css,python,cs,dotnet,markdown&theme=dark]()

7 . 右键查看页面源代码，将源代码复制到新建文件，并重命名格式为.svg即可。

## 页面加载

**参考**：[一款基于Butterfly主题的loading动画](https://happylee.cn/post/butterfly-loading/)

## 主页顶部视频背景
>**参考文章：**[butterfly 主题首页图背景替换为视频](https://sarakale.top/blog/posts/3ecfae3a)
>主题版本：4.x

1 . 我们首先在`主题文件`设置好一个图片背景

```yml
index_img: img/background/2.png
```

2 . 随后只需要在`themes\butterfly\layout\includes\header\index.pug`修改些代码即可

3 . 我们在文件的第3行插入这段代码：`- var top_img = false`，把图片背景禁用掉。

```pug
if !theme.disable_top_img && page.top_img !== false
  if is_post()
+    - var top_img = false
    - var top_img = page.top_img || page.cover || theme.default_top_img
  else if is_page()
.......
```
4 . 在第38行和第41行分别插入这两段代码：`- var isHomeClass = 'not-top-img'`和`video(src=...`

```pug
  if top_img !== false
    if is_post()
+      - var isHomeClass = 'not-top-img'
      include ./post-info.pug
    else if is_home() 
+      video(src='视频文件地址.mp4' autoplay="" loop="" muted="" style='min-height:100%;height:100%;width:100%;object-fit:cover')
      #site-info
```

5 . 到这里就大功告成了，教程参考[butterfly 主题首页图背景替换为视频](https://sarakale.top/blog/posts/3ecfae3a)为准



