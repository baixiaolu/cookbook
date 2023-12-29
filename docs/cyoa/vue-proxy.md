# vue的代理

## 应用场景
在开发时遇到跨域问题，需要配置代理解决。
vue提供了一个devServer.proxy的配置项，可以实现跨域请求。
以下是实际代码中的配置：
```js
	devServer: {
		open: false, //运行后自动打开浏览器
		port: process.env.VUE_APP_PORT, //挂载端口
		proxy: {
			'/capi': {
				target: "http://182.42.93.43:8000/capi",
				// target: "http://192.168.1.8:91",
				//ws: true,
				secure: false,
				changeOrigin: true,
				pathRewrite: {'^/capi/': '/'},
				overlay: {
					warnings: false,
					errors: true
				},
			},
			'/zyyt': {
				target: "http://192.168.1.8:30010",
				secure: false,
				changeOrigin: true,
				pathRewrite: {'^/zyyt/': '/'},
				overlay: {
					warnings: false,
					errors: true
				},
			}
		},
	},
```

## 正式环境配置

以上配置是开发环境的配置，正式环境需要配置nginx代理。具体如下：
```nginx
location ^~/api/ {
     proxy_pass http://xxx.xxx.xxx.xxx:8889/api/;
 }
```

最后重载nginx生效：
```bash
nginx -s reload
```

参考资料：
[Vue项目打包部署上线时devServer.proxy代理失效如何解决？使用nginx的proxy_pass 代理跨域转发](https://blog.csdn.net/qq_45890970/article/details/123654674)  


## 更多资料
[vue项目配置代理devServer解决跨域问题(开发环境使用)](https://blog.csdn.net/bamboozjy/article/details/109284024)  
[终于有人把正向代理和反向代理解释的明明白白了](https://cloud.tencent.com/developer/article/1418457)