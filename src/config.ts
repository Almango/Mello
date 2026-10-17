
export const BASE_CONFIG = {
  title: '啊芒果',
  subtitle: '啊芒果',
  description: '天真永不消逝，浪漫致死不渝',
  author: '啊芒果',
  favicon: '/favicon.png',
  site_url: 'https://blog.almango.cn',
  create_time: '2024-01-23',
}
export const POST_CONFIG = {
  page_size: 4,     // 每页显示数量
}
export const CommentConfig = {
  enable: true,
  provider: 'waline',
  waline: {
    serverURL: 'https://waline.almango.cn/',
  },
}
export const DEVELOPMENT = {
  VERSION: '2.1.0',
}