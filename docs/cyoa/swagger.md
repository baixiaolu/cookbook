# 添加swagger支持

## 使用knife4j添加swagger支持

同事仝工使用的是com.github.xiaoymin的knife4j-spring-boot-starter，版本2.0.9。

官方相关资料如下：  
github：https://github.com/xiaoymin/knife4j  
Gitee：https://gitee.com/xiaoym/knife4j  
官网文档： https://doc.xiaominfo.com/  
预览地址: https://doc.xiaominfo.com/demo/doc.html  
Demo示例: https://gitee.com/xiaoym/swagger-bootstrap-ui-demo  
Demo说明： https://doc.xiaominfo.com/docs/action/action-simple  

同事仝工大概配置如下：

1. 添加依赖
```xml
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-boot-starter</artifactId>
    <version>3.0.0</version>
</dependency>

<dependency>
    <groupId>com.github.xiaoymin</groupId>
    <artifactId>knife4j-spring-boot-starter</artifactId>
    <version>2.0.9</version>
</dependency>
```

2. 添加配置
```java
package com.core136.controller.config;

import springfox.documentation.service.Contact;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Parameter;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.List;

@Configuration
@EnableSwagger2
public class SwaggerDoc {

  public static String token = "";

  @Bean
  public Docket createRestApi() {
    /*添加接口请求头参数配置 没有的话 可以忽略*/
    return new Docket(DocumentationType.OAS_30)
            .apiInfo(apiInfo())
            .select()
            .apis(RequestHandlerSelectors.basePackage("com.core136.controller"))
            .paths(PathSelectors.any())
            .build();
  }

  private ApiInfo apiInfo() {
    Contact contact= new Contact("研发中心","","");
    return new ApiInfoBuilder()
            .title("Spring Boot中使用Swagger2构建RESTful APIs")
            .description("服务相关接口")
            .contact(contact)
            .version("1.0")
            .build();
  }

}
```

3. controller文件中添加注解就可以了
```java
@Api(value = "CommonController",tags = "公共服务")
@ApiOperation(value = "获取省市区列表")
@ApiParam(value="省ID",required = true)
```

4. 访问地址
`http://localhost:91/swagger-ui/index.html#/`
