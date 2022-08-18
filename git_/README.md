# 笔记

## git常用命令
    命令名称                                  作用
    git config --global user.name 用户名      设置用户签名
    git config --global user.email 邮箱       设置用户签名
    git init                                  初始化本地库
    git status                                查看本地库状态
    git add 文件名                            添加到暂存区
    git commit -m "日志信息" 文件名            提交到本地库
    git reflog                                查看历史记录
    git reset --hard 版本号                   版本穿梭

### 设置用户签名
    1、Git首次安装必须设置一下用户签名，否则无法提交代码（只需设置一次）
    2、要查看是否设置成功，可到当前windows用户下查看.gitconfig文件


## 分支操作常用命令
    命令名称                          作用
    git branch 分支名                 创建分支
    git branch -v                     查看分支
    git checkout 分支名               切换分支
    git merge 分支名                  把指定的分支合并到当前分支上

### 合并分支（冲突合并）注意事项
    1、冲突合并时需要手动修改文件，将特殊符号（<<<<<< HEAD, =====, >>>>>> 分支名）删除，并将不需要保留的部分删除
    2、使用 git add 文件名 将文件添加到暂存区
    3、使用 git commit -m "描述" 将文件保存到本地库（注意此时不需要加文件名）


## 远程库操作
    命令名称                                作用
    git remote -v                           查看当前所有远程仓库别名
    git remote add 别名 远程仓库地址         创建别名
    git push 别名 分支                       推送本地分支上的内容到远程仓库
    git clone 远程仓库地址                   将远程仓库的内容克隆到本地
    git pull 别名 远程分支名                 将远程仓库对于分支最新内容拉下来
                                            后与当前本地分支直接合并
