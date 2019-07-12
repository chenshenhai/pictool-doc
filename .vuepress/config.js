module.exports = {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Pictool',
      description: 'Pictool. A front-end gadget for image processing',
    },

    '/zh/': {
      lang: 'zh-CN',
      title: 'Pictool',
      description: 'Pictool 一个前端图像处理小工具',
    }
  },
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        items: [
          // { text: 'Chinese', link: '/language/chinese' },
          // { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ],
    locales: {
      '/': {
        sidebar: [
          ['/nested/01-quickstart', 'Quick Start'],
        ]
      },
      '/zh/': {
        sidebar: [
          ['/zh/nested/01-quickstart', 'zh:Quick Start'],
        ]
      }
    }
  },
}