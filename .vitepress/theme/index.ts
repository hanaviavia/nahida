// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import MNavLinks from "./components/MNavLinks.vue";
import MNavLink from "./components/MNavLink.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component("MNavLinks", MNavLinks)
    app.component("MNavLink", MNavLink)
  }
} satisfies Theme
