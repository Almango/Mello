// ============================================================
// 代码高亮主题 · 与站点色板同源
// 亮色：宣纸底（#EAE3D1）上的松烟墨与朱砂
// 暗色：夜读底（#11120E）上的月白与灯朱
// 所有文字色与底色对比度 ≥ 4.5:1
// 色值与 src/styles/global.css 中的 --syntax-* 保持一致
// ============================================================

export const melloLight = {
  name: 'mello-paper',
  type: 'light',
  colors: {
    'editor.background': '#EAE3D1',
    'editor.foreground': '#38352C',
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#6B6657', fontStyle: 'italic' },
    },
    {
      scope: [
        'string',
        'string.quoted',
        'string.template',
        'string.regexp',
        'punctuation.definition.string',
      ],
      settings: { foreground: '#42634B' },
    },
    {
      scope: [
        'constant.numeric',
        'constant.language',
        'constant.character',
        'support.constant',
        'variable.other.constant',
      ],
      settings: { foreground: '#8A5A22' },
    },
    {
      scope: [
        'keyword',
        'keyword.control',
        'keyword.operator',
        'storage',
        'storage.type',
        'storage.modifier',
      ],
      settings: { foreground: '#A2452D' },
    },
    {
      scope: [
        'entity.name.function',
        'support.function',
        'meta.function-call',
        'variable.function',
      ],
      settings: { foreground: '#6A4F74' },
    },
    {
      scope: [
        'entity.name.type',
        'entity.name.class',
        'entity.name.namespace',
        'support.type',
        'support.class',
      ],
      settings: { foreground: '#3E5C66' },
    },
    {
      scope: ['entity.name.tag', 'punctuation.definition.tag'],
      settings: { foreground: '#A2452D' },
    },
    {
      scope: ['entity.other.attribute-name'],
      settings: { foreground: '#8A5A22' },
    },
    {
      // 终端命令里的裸参数保持墨色，只有真正的引号字符串才用绿色
      scope: ['string.unquoted'],
      settings: { foreground: '#38352C' },
    },
    {
      scope: [
        'variable',
        'variable.parameter',
        'variable.other',
        'variable.language',
        'meta.object-literal.key',
      ],
      settings: { foreground: '#38352C' },
    },
    {
      scope: ['punctuation', 'meta.brace'],
      settings: { foreground: '#6B6657' },
    },
    {
      scope: ['invalid', 'invalid.illegal'],
      settings: { foreground: '#B3261E' },
    },
    {
      scope: ['markup.heading', 'markup.bold', 'markup.italic', 'markup.list'],
      settings: { foreground: '#8A5A22' },
    },
    {
      scope: ['markup.inserted'],
      settings: { foreground: '#42634B' },
    },
    {
      scope: ['markup.deleted'],
      settings: { foreground: '#B3261E' },
    },
  ],
} as const;

export const melloDark = {
  name: 'mello-night',
  type: 'dark',
  colors: {
    'editor.background': '#11120E',
    'editor.foreground': '#DCD6C6',
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#85806F', fontStyle: 'italic' },
    },
    {
      scope: [
        'string',
        'string.quoted',
        'string.template',
        'string.regexp',
        'punctuation.definition.string',
      ],
      settings: { foreground: '#A9C08D' },
    },
    {
      scope: [
        'constant.numeric',
        'constant.language',
        'constant.character',
        'support.constant',
        'variable.other.constant',
      ],
      settings: { foreground: '#D9B36B' },
    },
    {
      scope: [
        'keyword',
        'keyword.control',
        'keyword.operator',
        'storage',
        'storage.type',
        'storage.modifier',
      ],
      settings: { foreground: '#E2856B' },
    },
    {
      scope: [
        'entity.name.function',
        'support.function',
        'meta.function-call',
        'variable.function',
      ],
      settings: { foreground: '#C9A9DE' },
    },
    {
      scope: [
        'entity.name.type',
        'entity.name.class',
        'entity.name.namespace',
        'support.type',
        'support.class',
      ],
      settings: { foreground: '#9FBCC0' },
    },
    {
      scope: ['entity.name.tag', 'punctuation.definition.tag'],
      settings: { foreground: '#E2856B' },
    },
    {
      scope: ['entity.other.attribute-name'],
      settings: { foreground: '#D9B36B' },
    },
    {
      // 终端命令里的裸参数保持月白，只有真正的引号字符串才用绿色
      scope: ['string.unquoted'],
      settings: { foreground: '#DCD6C6' },
    },
    {
      scope: [
        'variable',
        'variable.parameter',
        'variable.other',
        'variable.language',
        'meta.object-literal.key',
      ],
      settings: { foreground: '#DCD6C6' },
    },
    {
      scope: ['punctuation', 'meta.brace'],
      settings: { foreground: '#A8A293' },
    },
    {
      scope: ['invalid', 'invalid.illegal'],
      settings: { foreground: '#F07B72' },
    },
    {
      scope: ['markup.heading', 'markup.bold', 'markup.italic', 'markup.list'],
      settings: { foreground: '#E0C08A' },
    },
    {
      scope: ['markup.inserted'],
      settings: { foreground: '#A9C08D' },
    },
    {
      scope: ['markup.deleted'],
      settings: { foreground: '#F07B72' },
    },
  ],
} as const;
