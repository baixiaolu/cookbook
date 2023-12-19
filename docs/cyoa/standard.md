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
2. `@Api`、`@ApiOperation`、`@ApiParam`等注解要写明，以便生成文档
3. `uuid`字段调用`SysTools.getGUID()`即可，不要自己实现。 
4. 在`\cyunsoft-appservice\src\main\resources\application.properties`文件中的`app.nocheck.url`配置项添加你的接口，就可以跳过鉴权直接调试。