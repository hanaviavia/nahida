import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '常用工具',
    items: [
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        desc: '前端 API 兼容性查询',
        link: 'https://caniuse.com',
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com',
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech',
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://tool.lu',
      },
      {
        icon: '/icons/json-cn.ico',
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn',
      },
    ],
  },
  {
    title: '教程',
    items: [
      {
        icon: 'https://th.bing.com/th?id=ODLS.0dc18014-3388-4dd0-af06-c7b7a1d04d8f&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
        title: '生成式 AI 学习指南',
        desc: 'GitHub 上一份颇为全面的生成式 AI 学习指南',
        link: 'https://github.com/aishwaryanr/awesome-generative-ai-guide',
        target: '_blank'
      },
      {
        icon: 'https://celthi.github.io/effective-debugging-zh/favicon.png',
        title: 'Effective Debugging（中文翻译）',
        desc: '电子书 [高效C/C++调试] （Effective Debugging的中文翻译）',
        link: 'https://celthi.github.io/effective-debugging-zh/translator_preface.html',
        target: '_blank'
      },
      {
        icon: 'https://es6.ruanyifeng.com/favicon.ico',
        title: 'ES6 入门教程',
        desc: '阮一峰的ES6 入门教程',
        link: 'https://es6.ruanyifeng.com/',
        target: '_blank'
      },
      {
        icon: 'https://ts2.cn.mm.bing.net/th?id=ODLS.ff05fb38-bb9c-4b44-81f4-f3b19c9611b7&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
        title: 'TypeScript 教程',
        desc: 'ypeScript 开源教程，介绍基本概念和用法，面向初学者。',
        link: 'https://wangdoc.com/typescript/',
        target: '_blank'
      },
    ],
  },
  {
    title: '软件',
    items: [
      {
        icon: 'https://raw.githubusercontent.com/agalwood/Motrix/master/static/512x512.png',
        title: 'Motrix',
        desc: '一款开源免费全能的下载工具',
        link: 'https://github.com/agalwood/Motrix',
        target: '_blank'
      }
    ]
  }
]
