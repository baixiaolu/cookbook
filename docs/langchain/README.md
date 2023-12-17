# LangChain开箱即用手册

## 安装

## 配置源


## github项目Langchain-Chatchat部署命令

```shell
ll /root/miniconda3/envs/
conda create --prefix /root/miniconda3/envs/chatchat python=3.10
conda activate /root/miniconda3/envs/chatchat
source activate /root/miniconda3/envs/chatchat
git clone git@github.com:chatchat-space/Langchain-Chatchat.git
git config --global user.name "autodl231203"
git config --global user.email "autodl231203@autodl.com"
ssh-keygen -t rsa -C "autodl231203@autodl.com"
cat ~/.ssh/id_rsa.pub 
git clone git@github.com:chatchat-space/Langchain-Chatchat.git
cd Langchain-Chatchat/
pip install -r requirements.txt 
pip install -r requirements_api.txt
pip install -r requirements_webui.txt  
git lfs install
curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | sudo bash
sudo apt-get install git-lfs
git lfs install
git clone https://huggingface.co/THUDM/chatglm2-6b
export http_proxy=http://172.31.72.89:7890
export https_proxy=https://172.31.72.89:7890
git clone https://huggingface.co/THUDM/chatglm2-6b
source /etc/network_turbo
git clone https://huggingface.co/THUDM/chatglm2-6b
git clone https://huggingface.co/moka-ai/m3e-base
cd ..
rm -rf Langchain-Chatchat
ll
cd /root/autodl-tmp/
ll
git clone git@github.com:chatchat-space/Langchain-Chatchat.git
cd Langchain-Chatchat
pip install -r requirements.txt 
pip install -r requirements_api.txt
pip install -r requirements_webui.txt  
git clone https://huggingface.co/THUDM/chatglm2-6b
git clone https://huggingface.co/moka-ai/m3e-base
python copy_config_example.py
python init_database.py --recreate-vs
python startup.py -a
unset http_proxy && unset https_proxy
python startup.py -a
env | grep -i proxy
source /etc/network_turbo
env | grep -i proxy
unset http_proxy && unset https_proxy
env | grep -i proxy
python startup.py -a
exit
history 
```