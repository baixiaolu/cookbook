# Mac常用配置

## 开发相关

### mysql相关

#### 启动停止命令

```shell
sudo /usr/local/bin/mysql.server start
sudo /usr/local/bin/mysql.server stop
sudo /usr/local/bin/mysql.server restart
```

#### 导入报错：`[ERR] 1118 - Row size too large (> 8126)`

编辑sql文件，在开头设置一下innodb_strict_mode为0
```sql
SET innodb_strict_mode = 0;
```

或者找到mysql配置文件mysql.ini
```ini
innodb_strict_mode=0
# 可通过show variables like '%innodb_strict_mode%';命令查看
```

### redis相关

#### 安装

```shell
brew install redis
```

redis 默认安装在 /usr/local/Cellar下，配置文件redis.conf在 /usr/local/etc下。有两种方式来启动redis

#### 启动

1. 通过brew services 来启动(后台启动) 推荐
```shell
brew services start redis
```

2. 通过redis默认的命令 redis-server 来启动
由于Home Brew 会帮我们配置好环境变量(创建相关可执行文件的符号链接 到 /usr/local/bin 目录)，所以我们可以在终端的任意目录下运行命令
```shell
# 指定配置文件，后台启动必须这样做
 redis-server /usr/local/etc/redis.conf
# 默认参数启动，这样启动后关闭窗口服务就停止了，不推荐
redis-server
```
两种启动方式我更推荐前一种，可以通过两种方式同时启动服务，会创建两个redis-server 进程，数据不互通，也不会存在端口号冲突问题

#### 连接服务
redis默认端口为 6379， 端口的由来还很有趣，大家自行了解
```shell
# 远程服务连接
redis-cli -h IP -p 6379
# 本机服务连接
redis-cli
```

#### 关闭服务
```shell
redis-cli shutdown
```
上面提到的通过redis-server 加配置文件进行后台启动，需要修改配置文件，打开配置文件后，找到 daemonize no改为daemonize yes 保存即可

### maven

大概以下步骤：  
1. 下载
2. 解压
3. 修改配置文件（本地仓库、阿里云源）
4. 配置环境变量并生效
5. mvn -version验证

参考资料：
- [Mac Maven 安装及配置](https://zhuanlan.zhihu.com/p/439934300)
- [2023最新国内maven仓库镜像地址](https://blog.csdn.net/qq_38217990/article/details/129257106)

### JDK

大概以下步骤：  
1. 下载
2. 安装
3. 找到jdk安装目录
4. 配置环境变量
5. 验证

参考资料：
- [Mac系统安装JDK1.8及环境变量配置](https://www.jianshu.com/p/a85658902f26)