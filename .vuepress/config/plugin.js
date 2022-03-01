module.exports = [
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        // 不要忘了安装 moment
        const dayjs = require('dayjs')
        dayjs.locale(lang)
        return dayjs(timestamp).format('YYYY/MM/DD,HH:mm:ss')
      },
    },
  ],
]
