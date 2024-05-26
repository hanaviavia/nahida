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
        icon: 'https://hadoop.apache.org/elephant.png',
        title: '组件',
        desc: '构成大数据的一些基础组件',
        link: '/frontend/engineering/index',
      },
    ],
  },
  {
    title: '技能',
    items: [
      {
        icon: 'https://ts4.cn.mm.bing.net/th?id=ODLS.34774cc0-2689-44e7-9a1c-7896efe49de9&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
        title: '软路由',
        desc: '玩转软路由',
        link: 'https://www.zhihu.com/column/c_1732038372393218048',
        target: '_blank'
      },
      {
        icon: 'https://ts4.cn.mm.bing.net/th?id=ODLS.34774cc0-2689-44e7-9a1c-7896efe49de9&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
        title: '软考',
        desc: '国家级考试',
        link: 'skill/ruankao/index',
        target: '_blank'
      },
    ],
  }
]
