import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '前端',
    items: [
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: '工程化',
        desc: '把软件工程相关的方法和思想应用到前端开发',
        link: '/frontend/engineering/index',
      },
    ],
  },
  {
    title: '大数据',
    items: [
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: '工程化',
        desc: '把软件工程相关的方法和思想应用到前端开发',
        link: '/frontend/engineering/index',
      },
    ],
  },
]
