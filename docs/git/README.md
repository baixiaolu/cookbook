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
[使用快10倍的Ed25519算法](./ssh-keygen-ed25519.md)

## windows关闭CRLF换行符警告

```shell
git config --global core.autocrlf false
```

## git diff提示filemode发生改变

提交代码到仓库时，发现明明没有改动的文件提示有修改，并且是很多的文件都提示有修改。但是修改的添加行和删除行都是 0。`git diff`提示`filemode`发生改变。

这种情况一般发生在`windows`、`Linux`、`MacOS`三系统之间切换时，解决方法如下：
```shell
git config core.filemode false
```
也可以直接修改代码仓库 .git 目录里的 config 文件的 filemode (在 [core] 段中)字段，将其改为 false。

如果要全局修改的话，加 --global 选项：
```shell
git config --global core.filemode false
```

## 更多

[gitignore](gitignore.md)
[使用 Ed25519 算法生成你的 SSH 密钥](ssh-keygen-ed25519.md)
