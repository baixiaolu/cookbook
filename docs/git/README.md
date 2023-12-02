# git开箱即用手册

## 安装

## 设置用户名密码

```shell
git config --global user.name "用户名"
git config --global user.email "邮箱地址"
```

## 生成公钥

```shell
ssh-keygen -t rsa -C '邮箱地址'
```

## windows关闭CRLF换行符警告

```shell
git config --global core.autocrlf false
```
