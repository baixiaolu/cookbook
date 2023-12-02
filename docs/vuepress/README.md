# VuePress开箱即用手册

## 安装、使用、发布8步走

- 步骤 1: 创建并进入一个新目录
```shell
mkdir vuepress-starter
cd vuepress-starter
```

- 步骤 2: 初始化项目
```shell
git init
npm init
```

- 步骤 3: 将 VuePress 安装为本地依赖
```shell
npm install -D vuepress@next
```

- 步骤 4: 在 `package.json` 中添加一些 scripts
```javascript
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

- 步骤 5: 将默认的临时目录和缓存目录添加到`.gitignore`文件中
```shell
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```

- 步骤 6: 创建你的第一篇文档
```shell
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

- 步骤 7: 在本地启动服务器来开发你的文档网站
```shell
npm run docs:dev
```

- 步骤 8: 打包
```shell
npm run docs:build
```
