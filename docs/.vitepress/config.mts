import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

const vitePressSidebarOptions = [
  {
    documentRootPath: 'docs',
    scanStartPath: 'notes',
    resolvePath: '/notes/',
    collapsed: true,
    useTitleFromFileHeading: true
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'post',
    resolvePath: '/post/',
    collapsed: true,
    useTitleFromFileHeading: true
  }
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Banished Knight",
  description: "YasakaKanoko",
  lang: 'en-US',
  markdown: {
    // 数学公式
    math: true,
    // 图片懒加载
    image: {
      lazyLoading: true
    },
    // 显示三级标题
    toc: {
      level: [2, 3, 4]
    }
  },
  srcDir: '.', // 指定项目根目录, 默认.
  // outDir:'../public', // 指定输出目录
  // assetsDir:'../assets', // 指定静态资源目录, 该目录需与outDir在同一目录
  // cacheDir: './.vitepress/.vite', // 缓存目录
  // ignoreDeadLinks: true, // 跳过死链接
  base: '/blog/', // 部署到github pages时，需要指定base路径, 默认/
  lastUpdated: true, // 最后更新时间
  cleanUrls: true, // 路径是否为hash模式，默认false
  head: [
    [
      'link',
      // favicon.ico
      { rel: 'icon', href: 'https://www.loliapi.com/acg/pp/' }
    ]
  ],
  // 主题配置
  themeConfig: {
    // 图标
    logo: 'https://www.loliapi.com/acg/pp/',
    // 标题
    siteTitle: 'Atmosphere',
    // https://vitepress.dev/reference/default-theme-config
    // 导航
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Notes', items: [
          { text: 'JavaScript', link: '/notes/javascript' },
          { text: "TypeScript", link: '/notes/typescript' },
        ]
      },
      { text: 'Blog', link: '/post' },
      { text: 'About', link: '/about' },
    ],
    // 搜索
    search: {
      provider: 'local'
    },
    // 为不同页面指定不同的侧边栏
    // https://vitepress-sidebar.cdget.com/zhHans/guide/getting-started
    sidebar: generateSidebar(vitePressSidebarOptions),
    // 社交媒体
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YasakaKanoko' },
      { icon: 'x', link: 'https://x.com/yasakakanoko' },
      { icon: 'telegram', link: 'https://t.me/yasakakanoko' },
    ],
    // 页脚
    footer: {
      copyright: `<a href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY-NC-SA 4.0</a> 2025-${new Date().getFullYear()} © <a href="https://github.com/YasakaKanoko">Banished Knight</a>`
    }
  }
})
