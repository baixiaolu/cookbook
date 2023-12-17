# MongoDB

## 1. 安装

### 1.1 安装MongoDB

1. 下载MongoDB，解压到指定目录，如：/usr/local/mongodb
2. 进入解压后的目录，执行以下命令：
```bash
./bin/mongod --dbpath=/usr/local/mongodb/data --logpath=/usr/local/mongodb/logs/mongodb.log --logappend --fork --port 27017
```

### 1.2 启动MongoDB

启动MongoDB，执行以下命令：
```bash
./bin/mongod --dbpath=/usr/local/mongodb/data --logpath=/usr/local/mongodb/logs/mongodb.log --logappend --fork --port 27017
```

### 1.3 停止MongoDB
1. 停止MongoDB，执行以下命令：
```bash
./bin/mongod --dbpath=/usr/local/mongodb/data --logpath=/usr/local/mongodb/logs/mongodb.log --logappend --fork --port 27017 --shutdown
```

### 1.4 重启MongoDB
1. 重启MongoDB，执行以下命令：
```bash
./bin/mongod --dbpath=/usr/local/mongodb/data --logpath=/usr/local/mongodb/logs/mongodb.log --logappend --fork --port 27017 --shutdown
./bin/mongod --dbpath=/usr/local/mongodb/data --logpath=/usr/local/mongodb/logs/mongodb.log --logappend --fork --port 27017
```

## 2. 连接MongoDB

### 2.1 连接MongoDB

连接MongoDB，可能用到以下命令：
```bash
mongo
/usr/local/mongodb/bin/mongo
/usr/local/mongodb/bin/mongo -u root
/usr/local/mongodb/bin/mongo -u root -p 123456
/usr/local/mongodb/bin/mongo -u root -p 123456 --authenticationDatabase admin
```
### 2.2 退出MongoDB

退出MongoDB，执行以下命令：
```bash
exit
```

## 3. 数据库操作

### 3.1 显示所有数据库

显示所有数据库，执行以下命令：
```bash
show dbs
```
### 3.2 切换数据库

切换数据库，执行以下命令：
```bash
use db_name
```
### 3.3 创建数据库

创建数据库，执行以下命令：
```bash
use db_name #刚创建的数据库并不在数据库的列表中，要显示它，需要向数据库插入一些数据，它才会显示出来。
```

### 3.4 删除数据库
删除数据库，执行以下命令：
```bash
db.dropDatabase()
```

### 3.5 显示所有集合

显示所有集合，执行以下命令：
```bash
show collections
show tables
```

### 3.6 创建集合

创建集合，执行以下命令：
```bash
db.createCollection(collection_name)
```

### 3.7 集合查询操作

显示集合中的所有文档，执行以下命令：
```bash
db.collection_name.find()
db.collection_name.find().pretty()      # 格式化输出
db.collection_name.find({"status": 1})  # 按条件查询
```

### 3.8 集合聚合操作

显示集合中的所有文档，执行以下命令：
```bash
db.collection_name.count()
db.collection_name.count(query)
db.collection_name.find(query).count()
```
关于count，有个坑。
以下返回的不是5，而是user表中所有记录的数量，如下面的代码所示：
```bash
db.users.find().skip(10).limit(5).count();
```
如果要返回限制之后的记录数量，要使用count（true）或者count（非0），如下面的代码所示：
```bash
db.users.find().skip(10).limit(5).count(true);
```

### 3.9 插入文档

插入文档，执行以下命令：
```bash
db.collection_name.insert(document)
```

### 3.10 更新文档

更新文档，执行以下命令：
```bash
db.collection_name.update(query, update)
```

### 3.11 删除文档

删除文档，执行以下命令：
```bash
db.collection_name.remove(query)
```

## 4. 常见问题

### 4.1 如何查看MongoDB的日志？
MongoDB的日志保存在/usr/local/mongodb/logs/mongodb.log中，可以通过tail -f mongodb.log命令查看日志。

### 4.2 如何查看MongoDB的内存使用情况？
MongoDB的内存使用情况可以通过db.serverStatus()命令查看。


## 5. 参考资料
[1] MongoDB官方文档  
[2] MongoDB中文网  
[3] MongoDB中文教程  
[4] [MongoDB 教程 - 菜鸟教程](https://www.runoob.com/mongodb/mongodb-tutorial.html)  
