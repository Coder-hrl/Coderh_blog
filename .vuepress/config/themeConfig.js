module.exports = {
  nav: [
    {
      text: 'JavaScript',
      link: '/',
    },
    {
      text: 'CSS',
      link: '/timeline/',
    },
    {
      text: 'Vue',
      link: '/',
    },
    {
      text: 'Node',
      link: '/',
    },
    {
      text: '项目记录',
      link: '/',
    },
    {
      text: '读书笔记',
      link: '/',
    },
    {
      text: '关于我',
      items: [
        {
          text: 'GitHub',
          link: 'https://github.com/Coder-hrl',
          icon: 'reco-github',
        },
        {
          text: '掘金',
          link: 'https://juejin.cn/user/2929541598425223',
          icon: 'iconfont icon-juejin',
        },
        {
          text: 'LeetCode',
          link: 'https://leetcode-cn.com/u/coder-hrl/',
          icon: 'iconfont icon-leetcode',
        },
      ],
    },
  ],
  sidebar: {
    '/docs/theme-reco/': ['', 'theme', 'plugin', 'api'],
  },
  type: 'blog',
  // blogConfig: {
  //   category: {
  //     location: 2,
  //     text: '项目',
  //   },
  //   tag: {
  //     location: 3,
  //     text: 'Tag',
  //   },
  // },
  friendLink: [
    // {
    //   title: '午后南杂',
    //   desc: 'Enjoy when you can, and endure when you must.',
    //   email: '1156743527@qq.com',
    //   link: 'https://www.recoluan.com',
    // },
  ],
  logo: '/avatar.png',
  search: true,
  searchMaxSuggestions: 10,
  lastUpdated: '最近更新时间',
  author: 'Coderh',
  authorAvatar: '/avatar.png',
  record: 'xxxx',
  startYear: '2022',
}
