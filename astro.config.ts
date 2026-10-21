// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';


// https://astro.build/config
export default defineConfig({
  site: 'https://blog.almango.cn',
  integrations: [sitemap(), 
    expressiveCode({
      themes: ['rose-pine-dawn', 'rose-pine'],
      themeCssSelector: (theme) => `[data-theme='${theme.type}']`,
    }),
  ],
  markdown: {
      remarkPlugins: ['remark-breaks', 'remark-math'],
      rehypePlugins: ['rehype-mathjax'],
  }
});