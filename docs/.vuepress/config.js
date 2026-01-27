module.exports = {
    // 网站的一些基本配置
    // base:配置部署站点的基础路径，后续再介绍
    title: 'wangye', // 网站的标题
    description: '网页描述', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }] // 需要被注入到当前页面的 HTML <head> 中的标签
    ],
    themeConfig: {
        logo: '/logo.jpg',
        nav: [
            { text: 'Home', link: '/' },
            // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
            { text: '百度', link: 'https://www.baidu.com' },
            { text: 'CSDN', link: 'https://blog.csdn.net', target: '_blank' },
            { text: 'Github', link: 'https://movie.douban.com', target: '_self', rel: '' },
            // 支持嵌套,形成下拉式的导航菜单
            {
              text: '语言',
              ariaLabel: 'Language Menu',
              items: [
                { text: '中文', link: '/language/chinese/' },
                { text: '英文', link: '/language/english/' }
              ]
            }
          ],
          sidebar: [
            {
              title: '分类1',   // 必要的
              path: '/categroy1/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              collapsable: false,// 是否可折叠，默认为true
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
               {
                title: '分类1-1',   // 必要的
                path: '/categroy1/one',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              
               },
               {
                title: '分类1-2',   // 必要的
                path: '/categroy1/two',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              
               }
              ]
            },
            {
              title: '分类2',  
              path: '/categroy2/',    
              collapsable: true, 
              children: [
               {
                title: '分类2-1',  
                path: '/categroy2/one'    
               },
               {
                title: '分类2-2',  
                path: '/categroy2/two'   
               }
              ]
            }
          ]
    }
}