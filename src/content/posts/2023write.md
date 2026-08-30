---
title: 2023我的创作纪念日
description: 写了将近一年多的博客，在这里聊聊我的创作经历吧
published: 2024-01-24 23:26:26
cover: https://s2.loli.net/2024/02/02/TOqARJPuDUHhk61.png
category: 日常
tags: ["2023"]
id: "2023write"
---




![post_2023blog_6.png](https://s2.loli.net/2024/02/02/rRaBf7kX5psGCNt.png)

## 机缘



其实是为了记录学习笔记，但更多是为了和大家分享经验。

在创作的过程中激发我的开发热心，提高写作水平，

通过文章进行与其他博主或访客的技术交流我感到很快乐


## 收获

起初我并不在意粉丝量和访问量的，但如果真和我想象中的那样，就说明我的文章质量不太好，所以后来我尽量避免文章水分，将文章写精细点，后来粉丝数和访问量就上来了。

我开始喜欢上CSDN平台上的勋章了，为了那几枚勋章，我创作了不少优质文章

因为新星计划，我永远不会忘记那个新星导师的名字，使我从Python基础入门到了网络爬虫，这是23年最值得提起的事情

![post_2023blog_1.png](https://s2.loli.net/2024/02/02/5ouzAHXbly2k76F.png)
![post_2023blog_2.png](https://s2.loli.net/2024/02/02/9Imj7oEdhVrNbxn.png)!
![post_2023blog_3.png](https://s2.loli.net/2024/02/02/Jbmt2fyAKxMiRUq.png)
![post_2023blog_4.png](https://s2.loli.net/2024/02/02/i7Gx1umTpDVgldA.png)

   

---

## 日常

现在处于高三阶段，创作的时间并不充裕，暑假一个月能写15篇文章，现在4个月都没有10篇了。

平时会看看极客资讯，看一下其他博主的写作风格。

每次做完一个项目的时候，我都会计划下一个任务。

---

## 成就


我写的Python代码，连它的哲学理念：“优雅”都配不上了，用判断语句代替异常捕捉语句；从来不写类，继承和函数封装……

编程第一法则：“**程序不论写的多么乱，能运行就对了**”。这是我去年写的爬虫代码的一部分，全是if，但一个项目完成后，它是完全可以运行没有任何问题的。

![post_2023blog_10.png](https://s2.loli.net/2024/02/02/yT8YmPMGFUjCfEO.png)

```python
if  lists!= CANCEL:    
        new_title = jsonpath.jsonpath(json_requests, '$..title')[int(lists) - 1]
        new_urls = jsonpath.jsonpath(json_requests, '$..url')[int(lists) - 1]
        new_author = jsonpath.jsonpath(json_requests, '$..author')[int(lists) - 1]

        new_titles = re.sub('[/;,/\']', '',new_title)
        local_name = f'{PATH_loacl}{new_titles}.mp3'
      
        download_return = requests.get(new_urls, stream=True)

        content_size = int(download_return.headers['Content-Length']) / 1024      # 获取文件的字节大小
        
        
        if os.path.exists(PATH_loacl) == False:
            print(os.path.exists)
            os.mkdir(PATH_loacl)

        files = open(local_name, 'wb')

        for j in tqdm(iterable = download_return.iter_content(1024),  # 分段下载
                      total = content_size,   # 总大小
                      unit = 'k',         # 单位为K
                      desc = '文件大小：'  # 注释下载标题
                      ):
            files.write(j)
```

2023年做的最具有成就意义的三件事：

   - **使用Unity3D+C#开发出了我的第一款游戏：RezspairX**
    ![post_2023blog_8.png](https://s2.loli.net/2024/02/02/TOqARJPuDUHhk61.png)![post_2023blog_7.png](https://s2.loli.net/2024/02/02/voemblJSCjT2RX3.png)
   - **使用Python开发出了爬虫小程序：MufreePro**![post_2023blog_5.png](https://s2.loli.net/2024/02/02/PDlKdOTue6jrzvw.png)
   - **使用Hexo+Anzhiyu发布了我目前最好的个人博客**![post_2023blog_9.png](https://s2.loli.net/2024/02/02/Scn3NCRo9lxuki6.png)


## 憧憬

希望高中毕业后，无论如何都要找个大学大专也好，攻读计算机。

此外，我还希望以后能开发一个项目，并开源。

前端工程师；数据分析师；软件开发或设计者；

未来愿如我所期……

![post_2023blog_11.jpg](https://s2.loli.net/2024/02/02/rRBQMNaw7WvcJx5.jpg)