
export const BASE_CONFIG = {
  title: 'Almango',
  subtitle: '天真永不消逝，浪漫至死不渝',
  author: 'Almango',
  favicon: '/favicon.png',
  site_url: 'https://blog.almango.cn',
  create_time: '2024-01-23',
}
export const POST_CONFIG = {
  page_size: 8,     // 每页显示数量
}
export const CommentConfig = {
  enable: true, 
  provider: 'twikoo', 
  twikoo: {
    envId: 'https://twikoo-eb5.pages.dev/', 
    path: 'auto', 
  }
}
export const DEVELOPMENT = {
  VERSION: '1.1.5',
}