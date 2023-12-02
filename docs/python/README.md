# python开箱即用手册

## 安装miniconda

> 推荐使用miniconda管理环境

- 官网下载：https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe
- 管理员身份运行
- 最好安装在C盘根目录
- 下一步-完成
- 开始菜单找到“Anaconda Prompt (miniconda3)”，管理员身份运行，输入python能看到版本号安装完毕！
- 开始菜单找到“Anaconda Prompt (miniconda3)”，管理员身份运行

## 配置源

- 各系统都可以通过修改用户目录下的 .condarc 文件来使用 TUNA 镜像源。Windows 用户无法直接创建名为 .condarc 的文件，可先执行 conda config --set show_channel_urls yes 生成该文件之后再修改。

```shell
conda config --set show_channel_urls yes #windows生成.condarc文件

vim .condarc #配置conda源为清华源https://mirrors4.tuna.tsinghua.edu.cn/help/anaconda/

conda clean -i #清除索引缓存，保证用的是镜像站提供的索引

conda create -n test python=3.10 #创建虚拟环境

conda activate test #激活环境

python #查看python版本

pip list #查看安装的包

pip install opencv-python #安装某个包
```

如果pip install太慢，要配置pypi的源，搜清华pypi，点进去，就能看到方法，如果只临时用一次，可使用下面的命令：

```shell
#临时使用清华的源
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package

#永久修改源
python -m pip install --upgrade pip #升级 pip 到最新的版本 (>=10.0.0) 
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple #配置源

# 参考资料：https://mirrors.tuna.tsinghua.edu.cn/help/pypi/
```
## miniconda常用命令

```shell
conda env list # 列出所有环境

conda create --name/-n ENVNAME python=3.6 # 新建环境

conda create -n ENVNAME python=3.7 numpy=1.16.4 matplotlib # 创建环境时安装一些包,同时指定包的版本

conda activate ENVNAME # 激活/切换环境
 
conda activate /path/to/environment-dir # 激活特定路径的环境

conda deactivate # 关闭当前环境

conda remove -n ENVNAME --all # 删除环境，也可以直接删掉 miniconda 安装目录下 envs 里面的对应文件夹

# 复制环境, 笔者注: 不可通过复制 anaconda 安装目录下 envs 下的文件夹来复制环境, 因为这样的操作不会自己改变此环境里的配置信息, 对复制后的环境的操作会影响到原环境# 复制 ENVNAME1, 新环境命名为 ENVNAME2
conda create -n ENVNAME2 --clone ENVNAME1

# 重命名, 目前没有直接重命名的命令, 需要先 clone 再 remove 旧环境
conda create -n ENVNAME2 --clone ENVNAME1
conda remove -n ENVNAME1 --all

# 更多命令参考：https://zhuanlan.zhihu.com/p/597570432
```
