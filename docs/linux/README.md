# Linux常用命令

## 关机

重启命令：
1. reboot
2. shutdown -r now 立刻重启(root用户使用)
3. shutdown -r 10 过10分钟自动重启(root用户使用)
4. shutdown -r 20:35 在时间为20:35时候重启(root用户使用)
如果是通过shutdown命令设置重启的话，可以用shutdown -c命令取消重启

关机命令：
1. halt   立刻关机
2. poweroff 立刻关机
3. shutdown -h now 立刻关机(root用户使用)
4. shutdown -h 10 10分钟后自动关机
如果是通过shutdown命令设置关机的话，可以用shutdown -c命令取消重启

一些常识
1. shutdown是最安全的命令
2. shutdown需要root权限
3. halt参数有好有坏，具体去查
4. poweroff是halt的链接
5. init是所有进程的祖先
6. reboot的工作过程差不多跟halt一样

参考资料：
[ubuntu关机和重启命令](https://blog.csdn.net/calm_thinker/article/details/50704603)