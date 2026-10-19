// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.almango.cn',
  markdown: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeMathjax],
  }
});