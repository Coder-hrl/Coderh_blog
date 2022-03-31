module.exports = {
  title: 'Coderh学习笔记',
  description: 'Coderh个人博客 | 学习记录',
  dest: './dist',
  port: 8081,
  head: [
    // [
    //   'link',
    //   {
    //     rel: 'icon',
    //     href: '/favicon.ico',
    //   },
    // ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  theme: 'reco',
  themeConfig: require('./config/themeConfig.js'),
  markdown: {
    lineNumbers: true,
  },
  plugins: require('./config/plugin.js'),
}
