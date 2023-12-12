module.exports = {
    title: '白大白的开箱即用手册',  // 设置网站标题
    dest: './docs/.vuepress/dist',    // 设置输出目录
    base: '/', // 设置站点根路径
    repo: 'https://github.com/baixiaolu/init', // 添加 github 链接
    themeConfig: {
        search: false,
        searchMaxSuggestions: 5,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
        ]
    }
}