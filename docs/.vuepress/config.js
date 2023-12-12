import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '白大白的开箱即用手册',
    base: '/', // 设置站点根路径
    dest: './docs/.vuepress/dist',    // 设置输出目录
    description: '欢迎来到白大白的开箱即用手册',
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            {
                text: '首页',
                link: '/',
            },
        ],
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
        ]
    }),
})
