import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '白大白的开箱即用手册',
    base: '/', // 设置站点根路径
    dest: './docs/.vuepress/dist',    // 设置输出目录
    description: '欢迎来到白大白的开箱即用手册',

    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            { text: '首页', link: '/', },
            { text: '百度', link: 'http://www.baidu.com/', },
            {
                text: '结果集合', children: [
                    {
                        text: 'vuepress', children: [
                            { text: '基础使用', link: '/vuepress', },
                            { text: '主题', link: '/vuepress', },
                            { text: '生态', link: '/vuepress', },
                        ]
                    },
                ]
            },
            {
                text: '小攻关', children: [
                    {
                        text: 'license.xml', children: [
                            { text: '场景', link: '/vuepress', },
                            { text: '几种思路', link: '/vuepress', },
                            { text: '选择', link: '/vuepress', },
                        ]
                    },
                ]
            },
            {
                text: '人工智能', children: [
                    {
                        text: '大模型', children: [
                            { text: 'ChatGPT', link: '/chatgpt', },
                            { text: 'ChatGLM', link: '/chatglm', },
                            { text: 'Claude', link: '/claude', },
                        ]
                    },
                    {
                        text: '应用开发', children: [
                            { text: 'LangChain', link: '/langchain', },
                        ]
                    },
                    {
                        text: '快讯', children: [
                            { text: 'Gemini', link: '/gemini', },
                            { text: 'kimi', link: '/kimi', },
                        ]
                    },
                ]
            },
            {
                text: '大数据', children: [
                    {
                        text: '思想', children: [
                            { text: '提炼概括', link: '/chatglm', },
                            { text: '好文章', link: '/chatgpt', },
                        ]
                    },
                    {
                        text: '实践', children: [
                            { text: '维度表', link: '/chatgpt', },
                            { text: '事实表', link: '/chatglm', },
                            { text: '度量', link: '/claude', },
                        ]
                    },
                ]
            },
            {
                text: '快速项目', children: [
                    {
                        text: '思想', children: [
                            { text: '指导思想', link: '/chatgpt', },
                            { text: '对抗惰性', link: '/chatglm', },
                            { text: '捕捉灵感', link: '/claude', },
                        ]
                    },
                    {
                        text: '方法论', children: [
                            { text: '跟海总学', link: '/langchain', },
                        ]
                    },
                    {
                        text: '实践路径', children: [
                            { text: '修炼之路', link: '/gemini', },
                            { text: '干', link: '/kimi', },
                        ]
                    },
                ]
            },
            {
                text: '项目应用', children: [
                    {
                        text: '稠云OA', children: [
                            { text: '基本思想', link: '/cyoa', },
                            { text: '学习灵魂', link: '/cyoa', },
                        ]
                    },
                    {
                        text: '若依', children: [
                            { text: '快速搭建', link: '/ruoyi', },
                            { text: '代码生成', link: '/ruoyi', },
                            { text: '快速整合', link: '/ruoyi', },
                        ]
                    },
                    {
                        text: 'FastAdmin', children: [
                            { text: '快速搭建', link: '/fastadmin', },
                            { text: '插件生态', link: '/fastadmin', },
                            { text: '自研插件', link: '/fastadmin', },
                        ]
                    },
                    {
                        text: 'eggjs', children: [
                            { text: '快速搭建', link: '/eggjs', },
                            { text: '通用技巧', link: '/eggjs', },
                            { text: '进阶', link: '/eggjs', },
                        ]
                    },
                ]
            },
            {
                text: '基础编程', children: [
                    {
                        text: '工具', children: [
                            { text: 'Git', link: '/git', },
                            { text: 'VSCode', link: '/vscode', },
                        ]
                    },
                    {
                        text: '语言环境', children: [
                            { text: 'NodeJS', link: '/nodejs', },
                            { text: 'Python', link: '/python', },
                        ]
                    },
                    {
                        text: '数据库', children: [
                            { text: 'MySQL', link: '/mysql/', },
                            { text: 'MongoDB', link: '/mongodb/', },
                        ]
                    },
                ]
            },
        ],
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
        ]
    }),

    plugins: [
        searchPlugin({
            // 配置项
        }),
    ],
})
