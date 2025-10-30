import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "快捷方式使用手册",
  description: "快捷方式使用手册",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '概览', link: '/guide' },
      { text: '更新日志', link: '/updateInfo'}
    ],

    sidebar: [
      {
        text: '使用手册',
        items: [
          { text: '概览', link: '/guide' }
        ]
      }
    ],

    socialLinks: [
//       { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  base: "/QuickShort-Docs/",
  srcDir: "src",
})
