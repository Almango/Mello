---
title: Butterfly_一图流背景与页脚美化
published: 2024-10-03 13:20:03
pinned: false
tags: [Hexo,Butterfly,美化]                                 # 添加分类
category: 魔改
slug: "902acb75"
---







## 一图流背景

1.一图流背景简单来说就将背景作为文章的顶部封面，相当于把原有的封面去除了，这样看起来会更加清爽。
2.本站参考了博主**闪闪发光的 ZZZ**：[Hexo+Butterfly 主题一图流背景与顶部图修改](https://blog.captainz.cc/posts/hexo_butterfly_top_img.html)


**效果图**：
![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_bgandfoot_1.png)

### 代码

1.将主题文件中的`index_img:`设为`transparent透明`。
2.在`background:`处设置自己喜欢的背景。
```yml
# The banner image of home page
index_img: transparent
————————————————————————————————————————————
# If the banner of page not setting, it will show the top_img
default_top_img: false         
# The banner image of archive page
archive_img: false
......
# Website Background (設置網站背景)
background: url(/img/background/g.jpg) top / cover no-repeat
```
3.在目录`source/css/`内新建一个文件：`modify.styl`，参入以下内容。
```css
@import 'nib'

// 顶部图
#page-header
  background: transparent !important

  &.post-bg, &.not-home-page
    height: 280px !important
     
  #post-info          // 标题居中
    bottom: 40px !important
    text-align: center
  #page-site-info     // 标题下信息居中
    top: 140px !important

  @media screen and (max-width: 768px)
    &.not-home-page
      height: 200px !important
    #post-info
      bottom: 10px !important
    #page-site-info
      top: 100px !important

.top-img
  height: 250px
  margin: -50px -40px 50px
  border-top-left-radius: inherit
  border-top-right-radius: inherit
  background-position: center center
  background-size: cover
  transition: all 0.3s

  @media screen and (max-width: 768px)
    height: 230px
    margin: -36px -14px 36px

  [data-theme='dark'] &
    filter: brightness(0.8)

// 页脚
#footer:before
  background-color: alpha(#FFF, .5)

  [data-theme='dark'] &
    background-color: alpha(#000, .5)

#footer-wrap, #footer-wrap a
  color: #111
  transition: unset

  [data-theme='dark'] &
    color: var(--light-grey) 
```

4.最后在主题文件内引入`modify.css`即可
> modify.styl 会被 Hexo 渲染成 modify.css 文件，所以此处应为 modify.css。
```css
# 插入代码到头部 </head> 之前 和 底部 </body> 之前
inject:
  head:
    - <link rel="stylesheet" href="/css/modify.css">
```



## 页脚美化
1.本期页脚美化新增了快速回到顶栏的功能。
2.本站参考了博主**ichika**：[本站的一些样式魔改](https://ichika.cc/Article/beautiful_MyBeautiful/#%E9%A1%B5%E8%84%9A) 的教程
**效果图**：
![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_bgandfoot_2.png)

### 代码

1.打开`layout/includes/footer.pug`，覆盖上以下代码：（记得将信息改为自己的）

```pug
#footer-wrap
  #footer-left
    .footer-title
      span= config.title + ' | '
      if theme.footer.owner.enable
        - var now = new Date()
        - var nowYear = now.getFullYear()
      if theme.footer.owner.since && theme.footer.owner.since != nowYear
        span.footer-copyright!= `&copy;${theme.footer.owner.since} - ${nowYear} By ${config.author}`
      else
        span.footer-copyright!= `&copy;${nowYear} By ${config.author}`
    .footer-button
      a(title='GitHub' href='https://github.com/Almango')
        i.fab.fa-github
      a(title='微博' href='https://weibo.com/u/7936064867')
        i.fab.fa-weibo
      a(title='bilibili' href='https://space.bilibili.com/18247019?spm_id_from=333.1007.0.0')
        i.fab.fa-bilibili
      a(title='twitterb' href='https://twitter.com/Receiver99xkk?t=UoMBRIY0a-csS_gUb9aIRg&s=09')
        <i class="fa-brands fa-x-twitter"></i>
      a(title='Email' href='https://www.microsoft.com/zh-cn/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook?deeplink=%2fowa%2f0%2f%3fstate%3d1%26redirectTo%3daHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwvMC8&sdf=0')
        <i class="fa-solid fa-envelope"></i>
    .wordcount
    - let allword = totalcount(site)
    span= 'Almano已经写了 ' + allword + ' 字，'
    if isNaN(allword)
      - allword= Number(allword.replace('k', ''))
      if allword< 50
        span= "还在努力更新中.. 加油！加油啦！"
      else if allword< 70
        span= "好像写完一本 埃克苏佩里 的 《小王子》 了啊"
      else if allword< 90
        span= "好像写完一本 鲁迅 的 《呐喊》 了啊"
      else if allword< 100
        span= "好像写完一本 林海音 的 《城南旧事》 了啊"
      else if allword< 110
        span= "好像写完一本 马克·吐温 的 《王子与乞丐》了！ 了啊"
      else if allword< 120
        span= "好像写完一本 鲁迅 的 《彷徨》 了啊"
      else if allword< 130
        span= "好像写完一本 余华 的 《活着》 了啊"
      else if allword< 140
        span= "好像写完一本 曹禺 的 《雷雨》 了啊"
      else if allword< 150
        span= "好像写完一本 史铁生 的 《宿命的写作》 了啊"
      else if allword< 160
        span= "好像写完一本 伯内特 的 《秘密花园》 了啊"
      else if allword< 170
        span= "好像写完一本 曹禺 的 《日出》 了啊"
      else if allword< 180
        span= "好像写完一本 马克·吐温 的 《汤姆·索亚历险记》 了啊"
      else if allword< 190
        span= "好像写完一本 沈从文 的 《边城》 了啊"
      else if allword< 200
        span= "好像写完一本 亚米契斯 的 《爱的教育》 了啊"
      else if allword< 210
        span= "好像写完一本 巴金 的 《寒夜》 了啊"
      else if allword< 220
        span= "好像写完一本 东野圭吾 的 《解忧杂货店》 了啊"
      else if allword< 230
        span= "好像写完一本 莫泊桑 的 《一生》 了啊"
      else if allword< 250
        span= "好像写完一本 简·奥斯汀 的 《傲慢与偏见》 了啊"
      else if allword< 280
        span= "好像写完一本 钱钟书 的 《围城》 了啊"
      else if allword< 300
        span= "好像写完一本 张炜 的 《古船》 了啊"
      else if allword< 310
        span= "好像写完一本 茅盾 的 《子夜》 了啊"
      else if allword< 320
        span= "好像写完一本 阿来 的 《尘埃落定》 了啊"
      else if allword< 340
        span= "好像写完一本 艾米莉·勃朗特 的 《呼啸山庄》 了啊"
      else if allword< 350
        span= "好像写完一本 雨果 的 《巴黎圣母院》 了啊"
      else if allword< 360
        span= "好像写完一本 东野圭吾 的 《白夜行》 了啊"
      else
        span= "好像写完一本我国著名的 四大名著 了！！！"
    else
      span= "还在努力更新中.. 加油！加油啦！"
  #footer-right
    .footer-totop
      i.fas.fa-chevron-up(onclick='scrollToTop()')
    .footer-info
      p= '使用Hexo框架 | 本站基于butterfly主题魔改'
      
      a(title='萌ICP备号 20240146' href='https://icp.gov.moe/?keyword=20240146') #[img(src='/img/footer_moe.png' alt='备案图标' style='height: 16px;margin-right: 3px;filter: grayscale(1);')]萌ICP备号: 20240146号
     
      a(title='喵喵ICP备案: 20240008号' href='https://www.nyaicp.xyz/?id=20240008" target="_blank"') #[img(src='https://520524.xyz/icptb/' alt='备案图标' style='height: 16px;margin-right: 3px;filter: grayscale(1);')]喵喵ICP备案: 20240008号

    .footer-service
      a(title='腾讯云' href='https://cloud.tencent.com')
        img(alt='腾讯云' src='https://cdn.ichika.cc/typora/202211071552681.png!towebp')
      a(title='51LA' href='https://www.51.la')
        img(alt='51LA' src='https://cdn.ichika.cc/typora/202211071552427.png!towebp')
      a(title='CC BY-NC-SA 4.0' href='https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh')
        img(alt='CC BY-NC-SA 4.0' src='https://cdn.ichika.cc/typora/202211071552856.png!towebp')
```

2.在`source/css`内新建一个`custom.css`，并参入以下代码：
```css
/* 页脚 */
.footer_custom_text a{
    margin:0 5px;
}

#footer::before{
    content:none;
}

#footer-wrap{
    color:var(--font-color);
    padding:50px 5% 35px 5%;
    display:flex;
    flex-wrap:wrap;
    background:var(--ichika-footer-bg);
    position:relative;
}

#footer-wrap > div{
    width:50%;
}

#footer-left{
    text-align:left
   
}

.footer-title{
    font-size:1.5rem;
    font-weight:bold;
}

.footer-copyright{
    font-size:1rem;
    font-weight:normal;
}

#footer-wrap .footer-button {
    display: flex;
    margin: 15px 0;
}

#footer-wrap .footer-button > a {
    font-size: 1.3rem;
    margin-right:24px;
    transition: 0.2s;
    background: black;
    width: 40px;
    height: 40px;
    display: flex;
    border-radius: 50%;
    color: white;
}

#footer-wrap .footer-button > a:hover{
    background: pink;
    transition:0.2s;
    text-decoration-line: none;
}

#footer-wrap .footer-button > a i{
    margin:auto;
    margin-left: 9.5px;
    margin-bottom: 1px;
    line-height:42px;
}

#footer-wrap .iconfont{
    font-size:1.3rem;
}

#footer-right {
    text-align: right;
    height: max-content;
    margin-top: auto;
}

#footer-right p,#footer-right a{
    color:var(--ichika-font-grey);
}

.footer-totop {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
}

.footer-totop i {
    font-size: 2rem;
    animation: footerToTop 1.2s linear infinite;
}

.footer-info p{
    font-size:14px;
    margin:0;
}

.footer-info a{
    margin-left:20px;
    transition:0.2s;
}

.footer-info a:hover{
    color:var(--ichika-color)!important;
    transition:0.2s;
}

.footer-info a:hover img{
    filter: none!important;
    transition:0.2s;
}

.footer-service img{
    height:20px;
    filter:grayscale(1);
    margin-left:20px;
    margin-top:10px;
    transition:0.2s;
}

.footer-service img:hover{
    filter:none;
    transition:0.2s;
}

@keyframes footerToTop{
    0%{
        transform:translateY(0);
    }
    60% {
        transform: translateY(-25%);
    }
    100% {
        transform: translateY(0);
    }
}

@media screen and (max-width:768px) {
    #footer-wrap > div {
        width: 100%;
        text-align:center;
    }

    #footer-wrap .footer-button > a{
        margin:0 auto;
    }
}

```

3.在`source/js`内新建一个custom.js文件，参入以下代码：

```js
function scrollToTop() {
    btf.scrollToDest(0, 500);
}
```
