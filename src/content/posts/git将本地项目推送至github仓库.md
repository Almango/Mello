---
title: 使用Git将本地项目推送至Github仓库
published: 2024-07-21 15:36:23
tags: [Git]
category: Git                         # 添加分类
slug: "2b852c80"
---

> 由于我本人无法将本地项目推送到Github的`main`默认分支，所以这里使用的是`master`分支，当然这个可以在仓库的setting中修改默认分支。
> 我真搞不明白，为什么不能上传到`main`分支，`master`却可以……


## 创建仓库

1 . 首先在github创建一个仓库
2 . 创建仓库后，我们用终端打开项目，随后我们将如下命令逐步输入到终端：（这些命令在刚创建好的仓库中看到）
## 连接仓库
```bash
git init
git add README.md
git commit -m "README(项目说明)"
git branch -M main
git remote add origin [你的仓库地址]
git push -u origin master
```
3 . 在刷新一下仓库的页面，可以看到README.md被生成在仓库中了。

## 上传项目
1 . 随后我们开始上传项目。
2 . 再次逐步输入下列命令：

```bash
git add .
git commit -m "[你的注释]"
git push -u origin
```

![f2c9015fae3020f95039164f915a778c.png](https://s2.loli.net/2024/07/21/xVwlIKUTCNm2FGp.png)

3 . 看到上图所示则说明没什么问题。
4 . 我们回到Github仓库刷新一下也页面，可以看到项目已经被推送到仓库了。

![eb2773650f59dda2b1a4a13ea66f5789.png](https://s2.loli.net/2024/07/21/k1XdxwI658uFbQW.png)


5 . 连接远程仓库
假设已有远程仓库（如 GitHub、GitLab 等），获取其 HTTPS 或 SSH 地址（例如 https://github.com/yourname/yourrepo.git），执行：

bash
> 关联远程仓库（origin 是远程仓库的别名，可自定义）

```bash
git remote add origin 远程仓库地址
```

6 . 若已关联过错误的远程仓库，可先删除再重新关联：

```bash
bash
git remote rm origin
git remote add origin 正确的远程仓库地址
```

7 . 推送本地代码到远程仓库
首次推送（需指定分支，通常为 main 或 master）：
bash

 -u 表示将本地分支与远程分支关联，后续推送可简化命令

```bash
git push -u origin main
```

非首次推送（已关联分支后）：

```bash
bash
git push
```
### 更新/合并项目

1 . 这里合并项目的意思将Github中最新的项目合并到本地项目中，其实就是更新的意思。

2 . 在此之前我一直不知道怎么更新到新的项目，就比如我使用Butterfly主题，随着作者的不断更新，从4.4更新到了5.3.2。如果我们想更新到远程仓库中的版本时，就需要对项目进行合并（这个还是我最近才发现的，之前更新主题只会重构项目，只能说我对Github的认知程度还不到10%）

3 . 当然了，这里的合并并不会将本地项目覆盖掉，而是针对新增代码进行插入，下面开始讲解过程：

4 . 首先我们需要关`联原作者仓库作为上游`，我们拿Mizuki主题仓库举例。

```git
git remote add upstream https://github.com/matsuzaka-yuki/Mizuki.git
```

5 . 获取项目最新的一次更新。

```git
git fetch upstream
```

6 . 合并更新到本地分支，（如果远程仓库的分支是`master`，则需要将`main`改为`master`）。

```
git merge upstream/main
```

7 . 这个时候，远程仓库中的新项目就会开始于本地项目进行合并，只需要在VSCode中对新的代码内容进行操作即可。