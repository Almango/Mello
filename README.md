### 🍃 Astro Theme Mello

Mello 是基于上一代博客主题设计思路，重新设计的新一代博客主题，它更加极简、优雅、高性能，以阅读体验为核心，专注于内容本身，回归文字最本真的状态，
没有冗余装饰，没有复杂交互，只保留最纯粹的阅读与写作环境。 (🖥️[Demo](https://blog.almango.cn))

[![](https://img.shields.io/badge/Astro-v6.1.8-BC52EE?logo=astro)]({linkUrl})
[![](https://img.shields.io/badge/Vercel-success-2A2F3D?logo=vercel)]({linkUrl})
[![](https://img.shields.io/badge/Node.js->=21-5FA04E?logo=nodedotjs)]({linkUrl})
[![](https://img.shields.io/badge/pnpm-v10.26.2-F69220?logo=pnpm)]({linkUrl})
[![](https://img.shields.io/badge/许可-MIT-D1AB66)]({linkUrl})


> [!important]
> 使用该主题部署后请先删除 content/posts/ 的文章！！！

### ✨ 特性

**极简设计**：极度简约的设计风格，专注于内容本身

**高性能**：基于 Astro 构建，零 JS 默认加载，极致的性能体验

**响应式布局**：完美适配桌面端和移动端

**自动适配主题**：支持系统偏好自动切换深色/浅色主题浅色主题

**美观文档**：采用 Github Markdown 格式，增强阅读体验

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
├── public/                # 静态资源
│   └──fonts/              # 字体文件
├── src/
│   ├── components/        # 组件
│   │   ├── Header.astro   # 导航栏
│   │   ├── Footer.astro   # 页脚
│   │   ├── Post.astro     # 文章列表
│   │   ├── Turnpage.astro # 分页组件
│   │   └── Comment.astro  # 评论组件
│   ├── content/           # 内容数据
│   │   ├── posts/         # Markdown 文章
│   │   └── about.md       # 关于页面内容
│   ├── data/              # 数据文件
│   │   └── links.ts       # 友链集合
│   ├── layouts/           # 布局模板
│   │   └── Layout.astro   # 基础布局
│   ├── pages/             # 页面路由
│   │   ├── index.astro    # 首页
│   │   ├── archive.astro  # 归档
│   │   ├── logs.astro     # 日志
│   │   ├── link.astro     # 友链页面
│   │   ├── about.astro    # 关于页面
│   │   └── post/          # 文章详情页
│   ├── styles/            # 样式文件
│   │   ├── global.css     # 全局样式
│   │   └── markdown.css   # Markdown 样式
│   ├── config.ts          # 站点配置
│   └── content.config.ts  # 内容集合配置
├── astro.config.mjs       # Astro 配置
└── package.json
```

### 🔄 配置站点信息

你可以在 `src/config.ts` 中配置站点信息：

```ts
// src/config.ts
export const BASE_CONFIG = {
  title: 'Almango',  // 站点标题
  subtitle: '天真永不消逝，浪漫至死不渝',  // 站点副标题
  author: 'Almango',  // 站点作者
  favicon: '/favicon.png',  // 站点图标
  site_url: 'https://blog.almango.cn',  // 站点 URL
  create_time: '2024-01-23',  // 创建时间
}

export const POST_CONFIG = {
  page_size: 8,  // 每页显示的文章数量
}

export const CommentConfig = {
  enable: true,
  provider: 'twikoo',
  twikoo: {
    envId: 'https://your-twikoo-url.vercel.app',  // Twikoo 环境 ID
    path: 'auto',
  }
}
```

### ✒️ 创建文章

在 `content/posts/` 目录下创建 markdown 文件，添加 frontmatter：

> [!WARNING]
> 需严格遵守 frontmatter 格式，否则会导致文章渲染错误

```md
---
title: Hello World
description: this is a article description.
published: 2026-03-24 12:00:00
cover: https://example.com/cover.webp
category: 分类
tags: ["标签"]
id: "x8032l7x2"
---

文章内容...
```

### 📣 反馈

如果您有任何问题或建议，欢迎提交 Pull Request 或创建 Issue。
