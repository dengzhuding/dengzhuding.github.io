---
layout: post
title: Centos7.5安装docker及基础配置使用
date: 2021-03-12 11:23:23
updated: 2021-03-12 11:23:23
categories: [docker]
tags:
  - docker
permalink:
excerpt: 记录过程
---

### 一、安装docker
#### 1.1 使用repository安装
> [官方文档](https://docs.docker.com/engine/install/centos/#install-using-the-repository)
* 安装`yum-utils`（用于配置安装源，也可手动添加`/etc/yum.repos.d/${packageName}.repo`文件，参考
{% post_link '架设私人git托管服务器' %}中安装 <b>安装mongodb</b> 过程）
``` bash
# 安装
sudo yum install -y yum-utils
# 添加repo文件
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
# 查看版本
yum list docker docker-ce --showduplicates | sort -r
# Install the latest version of Docker Engine and containerd
# 安装最新版
# 指定版本可用：sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io
sudo yum install docker-ce docker-ce-cli containerd.io

```

#### 1.2 启动docker服务
> 到上一步完了，会生成用户组-docker（如果没有，手动添加：`sudo groupadd docker`），查看docker组：cat /etc/group | grep docker
> 我们可以添加用户到docker用户组，就不用每次执行docker命令都在前面添加sudo了
> 添加用户到docker用户组（username为你登录的用户，如果是root用户可不用）：`sudo usermod -a -G docker username`
> 查看：`cat /etc/group | grep docker`，里面如果有username代表已经加组成功


此时还不能使用docker命令，需执行以下命令

``` bash
# start docker
# 会在/var/run/路径下生成 docker docker.pid docker.sock 文件
sudo systemctl start docker
```
使用`docker version`后能正常输出版本信息即可
> 加完docker组后，如果执行不加sudo执行如`docker ps`或其他docker命令还是会提示"permission denied"，重新登录即可

#### 1.3 基础配置
* 配置远程连接（需要配置证书，不然不安全，也可以配置单一ip。。。有空再弄）
> 参考(https://docs.docker.com/engine/install/linux-postinstall/#configuring-remote-access-with-systemd-unit-file)
> (https://www.cnblogs.com/niceyoo/p/13270224.html)

### 二、搭建基础环境

### 三、简单使用
