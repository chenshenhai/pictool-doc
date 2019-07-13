module.exports = {
  base: '/pictool-doc/',
  locales: {
    '/': {
      lang: 'en-US', 
      title: 'Pictool',
      description: 'Pictool. A front-end gadget for image processing',
    },

    '/page/zh/': {
      lang: 'zh-CN',
      title: 'Pictool',
      description: 'Pictool 一个前端图像处理小工具',
    }
  },
  themeConfig: {
    nav: [],
    locales: {
      '/': {
        sidebar: [
          ['/page/en-US/file/quickstart', 'Quick Start'],
        ]
      },
      '/page/zh/': {
        sidebar: [
          ['/page/zh/file/quickstart', '快速开始'],
        ]
      }
    }
  },
}