# NodeJS开箱即用手册

## 安装

## 配置源

```shell
npm config set registry https://registry.npm.taobao.org
npm config get registry  
```

## 版本管理工具n常用命令

```shell
npm i -g n #安装n
# 如果提示Unsupported platform for n@9.2.0: wanted {"os":"!win32"} (current: {"os":"win32","arch":"x64"})，就使用 npm i -g n --force

export N_NODE_MIRROR=https://npm.taobao.org/mirrors/node #给n换源

n [install/i] <version> # 安装指定版本

n lts/stable # 安装稳定版本

n latest/current # 安装最新版本

n #查看已安装的版本，直接输入n后输出当前已经安装的node版本以及正在使用的版本（前面有一个o），你可以通过移动上下方向键来选择要使用的版本，最后按回车生效。
```
