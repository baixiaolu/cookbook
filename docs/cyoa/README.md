# 稠云OA开发环境部署（Windows版）

## 目录结构（多级）

```
c:\cyoa\
├── apache-maven-3.9.6
├── lib
├── mysql
├── redis
├── repo
└── MysqlRegist.bat
```

## redis

以管理员身份运行：
```shell
cd redis
install.bat
cd ..
```

## mysql

以管理员身份运行：
```shell
MysqlRegist.bat
```
navicat连接mysql://localhost:3338/cyunsoft3
导入cyunsoft3.sql

## maven

```shell
vim /c/cyoa/apache-maven-3.9.6/conf/settings.xml
```

```xml
<!-- 从注释中复制并修改本地仓库地址 -->
<localRepository>c:/cyoa/repo</localRepository>

<!-- 在mirrors中加入阿里云的源 -->
<mirror>
    <id>alimaven</id>
    <name>aliyun maven</name>
    <url>
        http://maven.aliyun.com/nexus/content/groups/public/
    </url>
    <mirrorOf>central</mirrorOf>        
</mirror>
```

```shell
vim /c/cyoa/lib/readme.txt # 把路径修改正确，然后复制出来运行，具体见下
cd /c/cyoa/apache-maven-3.9.6/bin
./mvn install:install-file -DgroupId=cyunsoft.utils -DartifactId=cyunsoft-utils -Dversion=3.1.0 -Dpackaging=jar -Dfile=c:/cyoa/lib/cyunsoft-utils-3.1.0.jar
./mvn install:install-file -DgroupId=cyunsoft.common -DartifactId=cyunsoft-common -Dversion=3.1.0 -Dpackaging=jar -Dfile=c:/cyoa/lib/cyunsoft-common-3.1.0.jar
./mvn install:install-file -DgroupId=cyunsoft.workflow -DartifactId=cyunsoft-workflow -Dversion=3.1.0 -Dpackaging=jar -Dfile=c:/cyoa/lib/cyunsoft-workflow-3.1.0.jar
```

## idea中打开项目

1. File - Project structure 中配置language level为8，Project SDK为1.8
2. File - Settings - Build, Execution, Deployment - Build Tools - Maven - Runner 中配置 maven home directory 为 /c/cyoa/apache-maven-3.9.6，settings file 为 /c/cyoa/apache-maven-3.9.6/conf/settings.xml，并能看到 Local repository 为 /c/cyoa/repo
3. 此时IDEA中右侧没有maven选项，经查，解决方案有3种：

> 方法1.你点击一下你idea界面最左下角的那个小框，maven应该从里面找到<br />
> 方法2.点击菜单栏View->Tool Windows->Maven projects<br />
> 方法3.点击菜单栏Help->Find Action(Ctrl+Shift+A),输入Maven projects，下面第一个Add Maven Projects，然后选择pom文件<br />
> 这里不说Ctrl+Shift+A的快捷键，是因为有很多东西有快捷键，有可能会出现快捷键冲突。
4. 此时maven选项已经出现，但是maven的依赖包没有下载，需要手动下载，点击maven选项，点击右下角的Download，等待下载完成。
5. 中途会报一个错误：`Could not find artifact com.dingtalk.open:taobao-sdk-java-auto:pom:1479188381469-20200218 in alimaven`，需要把c:\cyoa\repo\com\中的dingtalk删除，然后替换成cy给的。重新刷新maven。
6. 修改配置文件时，可能遇到中文乱码，请参考https://blog.csdn.net/m0_37893932/article/details/78280663

## 运行项目
1. 右上角绿色按钮，点击Run，等待运行完成。