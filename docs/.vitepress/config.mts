import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// 根据环境变量决定 base 路径
const getBasePath = () => {
  // 如果是在 GitHub Pages 构建环境，使用仓库名作为路径
  if (process.env.GITHUB_PAGES === 'true') {
    return '/QuickShort-Docs/';
  }
  // 在 Cloudflare Pages 或其他环境，使用根路径
  return '/';
};

export default defineConfig({
  base: getBasePath(),
  srcDir: "src",
  build: {
    outDir: 'docs/.vitepress/dist'   //构建产物输出目录
  },
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
          { text: '概览', link: '/guide' },
          { text: 'WebDav配置', link: '/webdavHelp' },
          { text: '网络导入-源规则文档', link: '/sourceRule' }
        ]
      }
    ],

    socialLinks: [
//       { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }

})
