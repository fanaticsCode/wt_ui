module.exports = {
    title: 'wt-ui',       //设置网站标题
    description: 'ui 库', //描述
    dest: './build', // 设置输出目录
    port: 1111, //端口
    themeConfig: { //主题配置
        nav: [ // 导航条
            {
                text: '主页',
                link: '/'
			},
            {
                text: 'demo',
                link: '/components/button'
            },
			{
                text: 'ts',
                link: '/ts_note/test'
            },
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/components/': [
                {
                    title:'组件',
                    collapsable: true,
                    children: [
                        'button'
                    ]
                }
            ],
            '/ts_note/':[
                {
                    title:'typeScript',
                    collapsable: true,
                    children: [
                        'test'
                    ]
                }
            ],
        }
    }
}
