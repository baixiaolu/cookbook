# Fastadmin快速部署

## 1. 明确需求

建一个钉钉文档，写明需求的插件

## 2. 分配域名

登录阿里云，添加A记录，略

## 3. 宝塔部署基座

1. 网站 - 添加php项目，填写域名，选择php版本为7.4，自动创建数据库
2. 申请一个`Let's Encrypt`的`ssl`证书，有效期90天
3. 进入网站目录，上传fastadmin基座源码，解压。
4. 进入站点配置，设置站点的运行目录为 /public（注意：这是 FastAdmin 后台框架的运行目录，必须设置为 /public，否则无法正常运行），并设置站点的伪静态为 thinkphp 规则。
5. 访问你的站点域名进行安装，比如：https://demo.fastadmin.net/install.php
6. 安装完成后即可进入后台，比如： https://demo.fastadmin.net/奇怪的文件名.php （奇怪的文件名.php 是后台安全入口）

## fastadmin后台配置

1. 关闭登录验证码

`/application/config.php`文件275行，把`login_captcha`改为`false`即可。

2. 