import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Akasha",
  description: "Expect to be as full of knowledge as the Akasha of Greater Lord Rukkhadevata",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Nav', link: '/nav/index' },
      { text: 'Wiki', link: '/wiki/index' }
    ],

    sidebar: {
      "/frontend/engineering": [
        { text: '工程化',
          items: [
            { text: 'monorepo', link: '/frontend/engineering/monorepo.md' },
          ]
        },
      ]
    },

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
