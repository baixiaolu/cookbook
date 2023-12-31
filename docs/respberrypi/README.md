# 树莓派

## 烧录系统

使用官方的imager工具，可以根据树莓派硬件型号选择合适的系统版本，并设置ssh登录方式、是否连接wifi、登录用户名密码等信息。烧录完成后可直接插电无屏使用，非常方便！

## 远程连接

## 内网穿透

### 树莓派端

1. 下载

```shell
wget https://github.com/fatedier/frp/releases/download/v0.31.1/frp_0.31.1_linux_arm.tar.gz
tar -xzvf frp_0.31.1_linux_arm.tar.gz 
cd frp_0.31.1_linux_arm
vim frpc.ini
```

2. 配置

```ini
# frpc.ini
[common]
server_addr = 111.111.111.111 #实例的公网IP地址
server_port = 7000

[ssh]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 6000
```

3. 启动
```shell
./frpc -c ./frpc.ini

# 想要后台启动的话可以用nohup命令，可以在frp.log上查看输出日志
nohup ./frpc -c ./frpc.ini &
```

### 服务器端

1. 下载

```shell
wget https://github.com/fatedier/frp/releases/download/v0.31.1/frp_0.31.1_linux_amd64.tar.gz
tar -xzvf frp_0.31.1_linux_amd64.tar.gz 
cd frp_0.31.1_linux_amd64
vim frps.ini
```

2. 配置

```ini
# frps.ini
[common]
bind_port = 7000
```

3. 启动

```shell
nohup ./frps -c ./frps.ini  &
```

4. 开放端口

宝塔和云厂商安全组都需要开放端口，具体有：  
- 服务器端口7000
- 具体映射的端口，本文中是6000

5. 测试

```shell
ssh -oPort=6000 pi@54.185.35.252
ssh -p 6000 pi@54.185.35.252
```

### 使用小惊喜

1. 服务端居然只设置一个服务端口就可以，要穿透的端口在客户端设置完，直接重启即可生效，省事！
2. 服务端杀掉，直接重启后，客户端可自动重连，很赞！

参考资料：  
[使用 AWS + frp 让你的树莓派4实现免费内网穿透](https://www.zhihu.com/tardis/zm/art/103457717)

## Nginx

## MySQL

## PHP

## NodeJS

## Python

