
module.exports = {
  title: 'A23187',
  description: 'Base on VuePress & Github Pages',
  dest: 'dist/',
  head: [
    [ // 设置网站的favicon图标
      'link',
      { 
        rel: 'icon',
        href: '/favicon.png' 
      }
    ]
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    lastUpdated: '上次更新',
    nav: [ // 配置导航栏
      { text: 'Home', link: '/' },
      {
        text: 'Category',
        items: [
          { text: 'Algorithm', link: '/algorithm/' },
          { text: 'BlockChain', link: '/blockchain/' }
        ]
      },
      {
        text: 'Contact',
        items: [
          { text: 'Zhihu', link: 'https://zhihu.com/people/a-23187' },
          { text: 'GitHub', link: 'https://github.com/A-23187' }
        ]
      }
    ]
  },
  plugins: {
    '@vuepress/back-to-top': true
  }
}