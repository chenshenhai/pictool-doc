module.exports = {
  base: '/pictool-doc/',
  locales: {
    '/': {
      lang: '中文',
      title: 'Pictool',
      description: 'Pictool 一个前端图像处理小工具',
    },

    '/page/en-US/': {
      lang: 'en-US', 
      title: 'Pictool',
      description: 'Pictool. A front-end gadget for image processing',
    },
    
  },
  themeConfig: {
    nav: [],
    locales: {
      '/page/en-US/': {
        sidebar: [
          ['/page/en-US/file/quickstart', 'Quick Start'],
          ['/page/en-US/file/ui', 'UI Tool'],
          ['/page/en-US/file/browser', 'Browser Tool'],
          ['/page/en-US/file/digit', 'Digit Base'],
          ['/page/en-US/file/digit-process', 'Digit Process'],
          ['/page/en-US/file/digit-transform', 'Digit Transform'],
        ]
      },
      '/': {
        sidebar: [
          ['/page/zh/file/quickstart', '快速开始'],
          ['/page/zh/file/ui', 'UI工具'],
          ['/page/zh/file/browser', '浏览器工具'],
          ['/page/zh/file/digit', '数字化基础'],
          ['/page/zh/file/digit-process', '图像数字化处理'],
          ['/page/zh/file/digit-transform', '图像数字化转换'],
        ]
      }
    }
  },
}