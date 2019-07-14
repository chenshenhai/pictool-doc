module.exports = {
  base: '/pictool-doc/',
  locales: {
    '/': {
      lang: 'zh-CN',
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
        ]
      },
      '/': {
        sidebar: [
          ['/page/zh/file/quickstart', '快速开始'],
          ['/page/zh/file/browser', '浏览器功能'],
          ['/page/zh/file/digit', '数字化基础'],
          ['/page/zh/file/digit-transform', '数字化转换'],
          ['/page/zh/file/digit-process', '数字化处理'],
          ['/page/zh/file/ui', 'UI工具'],
        ]
      }
    }
  },
}