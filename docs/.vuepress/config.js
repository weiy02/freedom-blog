module.exports = {
  // 部署到 GitHub Pages 时的基础路径
  // 仓库名为 freedom-blog，则 base 必须是 '/freedom-blog/'
  base: '/freedom-blog/',

  // 基本站点配置
  title: 'Freedom',
  description: '网页描述',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    // SEO 相关基础 meta
    ['meta', { name: 'keywords', content: '博客, 前端, JavaScript, Vue, 技术分享' }],
    ['meta', { name: 'author', content: 'Freedom' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1' }]
  ],

  // 使用博客主题，支持分类 / 标签 / 归档等
  theme: 'reco',

  themeConfig: {
    type: 'blog',
    logo: '/logo.png',
    author: 'Freedom',
    authorAvatar: '/photos/my-avatar.jpg',

    // 顶部导航
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      // 直接跳到当前已有文章所属的第一个分类“前端”，保证能看到文章列表
      { text: '分类', link: '/categories/前端/', icon: 'reco-category' },
      // 标签总览页（主题路由为 /tag/，注意是单数）
      { text: '标签', link: '/tag/', icon: 'reco-tag' },
      { text: 'GitHub', link: 'https://github.com/', icon: 'reco-github' }
    ],

    // 博客配置：自动生成分类 / 标签入口
    blogConfig: {
      category: {
        location: 2, // 在导航栏中的位置
        text: '分类'
      },
      tag: {
        location: 3,
        text: '标签'
      },
      socialLinks: [
        // 可以按需补充你的社交链接
        { icon: 'reco-github', link: 'https://github.com/' }
      ]
    },

    // 侧边栏：根据当前页面标题自动生成，提升沉浸式阅读体验
    subSidebar: 'auto',

    // 多种颜色模式（浅色 / 深色）
    mode: 'auto', // 根据系统自动切换
    modePicker: true, // 显示切换按钮

    // 评论系统占位配置（Gitalk/Valine 二选一，按需填写）
    // Gitalk 配置示例（需要 GitHub OAuth）
    /*
    gitalkConfig: {
      clientID: '你的 GitHub OAuth Client ID',
      clientSecret: '你的 GitHub OAuth Client Secret',
      repo: '你的评论仓库名',
      owner: '你的 GitHub 用户名',
      admin: ['你的 GitHub 用户名'],
      distractionFreeMode: false
    },
    */

    // Valine 配置示例（需要 LeanCloud）
    /*
    valineConfig: {
      appId: '你的 LeanCloud appId',
      appKey: '你的 LeanCloud appKey',
      placeholder: '欢迎评论交流~',
      notify: false,
      verify: false,
      visitor: true, // 开启访问量统计
      recordIP: true
    },
    */

    // 其它 UI 细节
    noFoundPageByTencent: false,
    smoothScroll: true
  },

  plugins: [
    // 全文搜索
    ['fulltext-search'],

    // Google Analytics（按需替换 ID）
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-XXXXXX-X' // TODO: 替换为你的 Google Analytics ID
      }
    ],

    // 百度统计（按需替换 hm ID）
    [
      'vuepress-plugin-baidu-tongji',
      {
        hm: '你的百度统计 hm ID'
      }
    ],

    // SEO 增强
    [
      '@vuepress/seo',
      {
        // 根据 Frontmatter 自动生成 SEO meta
      }
    ],

    // sitemap（需要配置你自己的站点 URL）
    [
      'sitemap',
      {
        // TODO: 将下面的 URL 换成你真实的博客域名
        // 例如：'https://your-name.github.io/YBlog' 或 'https://blog.your-domain.com'
        hostname: 'https://weiy02.github.io/freedom-blog'
      }
    ]
  ]
}