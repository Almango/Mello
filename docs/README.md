# 配色规范 · 宣纸与松烟

这套配色把原来的「纸 + 墨」往前推了一步：用三层同色系的纸建立层次，用一层克制的朱砂承担交互，暗色则改成灯下的暖炭与月白。

## 文件

| 文件 | 内容 |
| --- | --- |
| `palette.html` | 亮/暗双主题预览 + 全部色板 + 设计说明，浏览器直接打开 |
| `palette.png` | 上面的整页预览图 |
| `preview-light.png` / `preview-dark.png` | 首页实际截图 |
| `preview-post-light.png` / `preview-post-dark.png` | 文章页实际截图（含代码块与目录） |

## 实现入口

- `src/styles/global.css`：设计令牌（颜色、阴影、选区、焦点）
- `src/styles/markdown.css`：Markdown / 行内代码 / 表格 / 引用
- `src/styles/waline.css`：评论区
- `src/components/ThemeToggle.astro`：主题初始化与切换
- `src/layouts/Layout.astro`：页面骨架，不包含主题逻辑

代码块沿用 Astro 默认的 Shiki 主题，颜色不进入站点色板；`palette.html` 里的代码块仅用于展示色板。

## 关键对比度

| 用途 | 亮色 | 暗色 |
| --- | --- | --- |
| 正文 | 11.0:1 | 12.1:1 |
| 辅助文字 | 5.1:1 | 6.4:1 |
| 朱砂强调 | 5.5:1 | 6.5:1 |
| 标题 | 13.3:1 | 13.7:1 |

正文达到 WCAG AAA，辅助文字与强调色达到 AA。

## 换一种气质

只改 `global.css` 里的几个令牌即可整体换色：

- 把 `--accent-color` 换成黛青 `#3E5C66` / 暗色 `#9FBCC0`，就是一套更冷的「青瓷」方案。
- 把 `--bg-color` 的暖度降低（例如 `#F4F3EC`），会更接近原来的中性纸色。
- 暗色想更沉一点，可把 `--bg-color` 调到 `#141510`，同时保持文字令牌不变。
