// 基础配置
export const BASE_CONFIG = {
  title: '啊芒果',
  subtitle: '啊芒果',
  description: '天真永不消逝，浪漫致死不渝',
  author: '啊芒果',
  favicon: '/favicon.png',
  site_url: 'https://blog.almango.cn',
  create_time: '2024-01-23',
}

// 文章页配置
export const POST_CONFIG = {
  toc: true,        // 文章页是否显示右侧浮动目录
  page_size: 4,     // 首页显示的文章数量
}

// 导航栏配置
export const HEADER_CONFIG = {
  nav: [
    { label: '归档', href: '/archive' },
    { label: '手记', href: '/record' },
    { label: '统计', href: '/statistics' },
    { label: '邻居', href: '/link' },
    { label: '关于', href: '/about' },
  ],
}

// 页脚配置
export const FOOTER_CONFIG = {
  link: [
    { name: '萌ICP备20240146号', url: 'https://icp.gov.moe/?keyword=20240146'},
    { name: 'RSS', url: '/rss.xml'},
    { name: '2.1.2', url: 'https://github.com/Almango/Mello'},
  ],
} 

// 评论配置
export const COMMENT_CONFIG = {
  enable: true,
  provider: 'waline',
  waline: {
    serverURL: 'https://waline.almango.cn/',
  },
}