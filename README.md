### 🍃 Astro Theme Mello

Astro Theme Mello 是基于上一代博客主题设计思路，重新设计的新一代博客主题，它更加极简、优雅、高性能，以阅读体验为核心，专注于内容本身，回归文字最本真的状态，
没有冗余装饰，没有复杂交互，只保留最纯粹的阅读与写作环境。 (🖥️[Demo](https://blog.almango.cn))

[![](https://img.shields.io/badge/Astro-v6-BC52EE?logo=astro)](https://astro.build)
[![](https://img.shields.io/badge/Node.js->=22-5FA04E?logo=nodedotjs)](https://nodejs.org)
[![](https://img.shields.io/badge/pnpm-v12-F69220?logo=pnpm)](https://pnpm.io)
[![](https://img.shields.io/badge/许可-MIT-D1AB66)](./LICENSE)

> \[!important]
> 使用该主题部署后请先删除 content/posts/ 的文章！！！

### ✨ 特性

**极简设计**：极度简约的设计风格，专注于内容本身

**高性能**：基于 Astro 构建，零 JS 默认加载，极致的性能体验

**浮动目录**：文章页右侧悬浮 TOC，滚动高亮当前小节，窄屏自动隐藏

**双端适配**：支持 PC 端和移动端，自动调整布局，丝滑流畅体验

**语法丰富** 支持数学公式、文字模糊隐藏、Alert提示等语法。

**评论系统**：Waline 评论，样式已深度定制融入主题

**聚合页面**：归档、分类、标签、统计，全部静态生成

**SEO 友好**：自动生成 RSS、Sitemap

### 🛠️ 安装

```bash
# 克隆仓库
git clone https://github.com/Almango/Mello.git

# 进入项目目录
cd mello

# 安装依赖
pnpm i

# 启动开发服务器
pnpm dev
```

### 🚀 构建

```bash
# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

### 📁 项目结构

```
.
├── public/                  # 静态资源
│   └── fonts/               # 字体文件
├── src/
│   ├── components/          # 组件
│   │   ├── Header.astro     # 顶部导航栏
│   │   ├── Footer.astro     # 页脚
│   │   ├── ThemeToggle.astro# 主题切换按钮
│   │   ├── Intro.astro      # 首页介绍
│   │   ├── PageHeader.astro # 页面标题头
│   │   ├── PostList.astro   # 文章列表（归档/手记/分类/标签共用）
│   │   ├── PostTOC.astro    # 文章浮动目录
│   │   ├── Recent.astro     # 首页文章列表
│   │   └── Comment.astro    # 评论组件（Waline）
│   ├── content/             # 内容数据
│   │   ├── posts/           # Markdown 文章
│   │   ├── about.md         # 关于页面内容
│   │   └── link.md          # 友链申请说明
│   ├── data/
│   │   └── links.ts         # 友链集合
│   ├── layouts/
│   │   └── Layout.astro     # 基础布局
│   ├── pages/               # 页面路由
│   │   ├── index.astro      # 首页
│   │   ├── archive.astro    # 归档
│   │   ├── record.astro     # 手记
│   │   ├── tag.astro        # 标签
│   │   ├── link.astro       # 友链
│   │   ├── logs.astro       # 日志
│   │   ├── about.astro      # 关于
│   │   ├── rss.xml.js       # RSS 订阅
│   │   ├── post/[id].astro  # 文章详情
│   │   ├── category/[name].astro# 分类聚合
│   │   └── tag/[name].astro     # 标签聚合
│   ├── scripts/
│   │   └── image-zoom.js    # 图片放大
│   ├── styles/
│   │   ├── global.css       # 全局样式 + 主题变量
│   │   ├── markdown.css     # Markdown 正文样式
│   │   └── waline.css       # 评论区定制样式
│   ├── config.ts            # 站点配置（唯一需要改的配置文件）
│   └── content.config.ts    # 内容集合配置
├── astro.config.mjs         # Astro 配置
└── package.json
```

### 📣 许可证

MIT
