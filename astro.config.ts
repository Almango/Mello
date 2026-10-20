// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
import { melloLight, melloDark } from './src/theme/shiki-themes';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.almango.cn',
  markdown: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeMathjax],
      // 与站点同源的亮/暗代码主题，由 markdown.css 根据 data-theme 切换
      shikiConfig: {
          themes: {
              light: melloLight,
              dark: melloDark,
          },
          defaultColor: false,
          wrap: false,
      },
  }
});
