// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.almango.cn',
  integrations: [sitemap(), 
    expressiveCode({
      themes: ['rose-pine', 'rose-pine-dawn'],
      themeCssSelector: (theme) => `[data-theme='${theme.type}']`,
    }),
  ],
  markdown: {
      remarkPlugins: ['remark-directive', 'remark-breaks', 'remark-math', 'remark-blackout', 'remark-alert'],
      rehypePlugins: ['rehype-mathjax'],
  }
});