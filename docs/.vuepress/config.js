module.exports = {
  base: '/jquery-study_docs/', /* 基础虚拟路径 */
  dest: 'docs/dist', /* 打包文件基础路径, 在命令所在目录下 */
  title: 'jQuery 快速上手', // 标题
  description: '尚硅谷Java研究院', // 标题下的描述
  themeConfig: { // 主题配置
    logo: '/logo.png',
    nav: [
      { text: '官网', link: 'http://www.atguigu.com' },
      { text: '谷粒学院', link: 'http://www.gulixueyuan.com/' },
      { 
        text: '学习路线', 
        items: [
          { 
            text: 'Java', 
            items: [
              { text: 'Java11', link: 'http://www.atguigu11.com' },
              { text: 'Java22', link: 'http://www.atguigu22.com' },
              { text: 'Java33', link: 'http://www.atguigu33.com' }
            ]
          },
          { text: '前端', link: 'http://www.atguigu.com/web/' },
          { text: '大数据', link: 'http://www.atguigu.com/bigdata/' }
        ] 
      },
    ],
    sidebar: [ // 左侧导航
      {
        title: 'jQuery快速入门', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          'chapter1/第1章 jQuery简介',
          'chapter1/第2章 jQuery快速入门',
          'chapter1/第3章 jQuery基本语法',
          'chapter1/第4章 jQuery选择器（重点）',
          'chapter1/第5章 文档处理（CRUD）',
          'chapter1/第6章 jQuery操作DOM',
          'chapter1/第7章 事件',
          'chapter1/第8章 效果（选学）',
          'chapter1/面试题',
        ]
      },
      'chapterLast/',
    ]
  },

  head: [ 
    // 指定网页标题图标
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
  ]
}