module.exports = {
    title: 'wt-ui',       //设置网站标题
    description: 'ui 库', //描述
    dest: './build', // 设置输出目录
    port: 1111, //端口
    themeConfig: { //主题配置
        nav: [ // 导航条
            {
                text: 'demo',
                link: '/'
			},
			{
                text: 'ts',
                link: '/ts_note/test.md'
            },
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/components/': [
                {
                    collapsable: true,
                    children: [
                        'button'
                    ]
                }
            ],
            '/ts_note/':[
                {
                    collapsable: true,
                    children: [
                        'test'
                    ]
                }
            ],
        }
    }
}
