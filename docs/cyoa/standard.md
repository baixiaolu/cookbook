# 数据库和代码约定

## 1. 数据库约定

1. 表名全部`ici_`开头，使用小写加下划线命名法，多个单词都用下划线分隔，如：`ici_park_info`
2. 表名和字段名使用简洁明了的英文单词，不要使用拼音、拼音缩写、数字等
3. 表名和字段名不要使用数据库保留字，比如`user`、`group`、`order`等
4. 每个表必备以下字段：
```sql
	id int auto_increment comment '表id',
	carrier_id varchar(50) comment 'xx表uuid',
	org_id varchar(50) default '8EADB678-A646-1E51-3E87-75A547B8AF19',
	create_time timestamp default CURRENT_TIMESTAMP,
	update_time timestamp on update CURRENT_TIMESTAMP,
```

## 2. 代码约定及说明

1. 按java规范，使用驼峰命名法，类名使用大写开头，如：`UserInfo`、`UserVo`，方法名使用小写开头，如：`getUserInfo`、`getUserVo`
2. `@Api`、`@ApiOperation`、`@ApiParam`等注解要写明，以便生成文档，每个接口文件夹命名要和excel对应，比如`E1-1`这样开头
3. `uuid`字段调用`SysTools.getGUID()`即可，不要自己实现。 
4. 在`\cyunsoft-appservice\src\main\resources\application.properties`文件中的`app.nocheck.url`配置项添加你的接口，就可以跳过鉴权直接调试。

## 3. 接口及接口文档约定
1. 接口请求方式只有get和post，不支持put和delete请求方式，delete请求方式改为post
2. post请求的格式使用form-data
3. 交付的接口文档
4. 所有表都有park_id字段，相对应的，接口都可使用park_id参数查询数据

## 4. 交付
交付结果有3项内容：
1. 数据库表和合理的测试数据
2. apifox导出的接口文档，按excel的sheet分好文件夹，命名：sheet表英文名-中文接口名-开发者名字简称，比如：`A1.用户信息-zhang`，里面放增删改查查5个接口。多个文件夹加编号，比如`A1-1.用户信息-zhang`、`A1-2.角色信息-zhang`
3. 代码提交到指定的分支
4. 接口在自己本地调试成功的录屏

每天晚上交付以上内容