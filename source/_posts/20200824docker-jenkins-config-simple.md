---
title: 学习笔记-docker环境使用jenkins构建Vue项目，使用nginx部署
date: 2020-08-24 23:20:43
category: study notes
tags:
- docker
- jenkins
- vue
excerpt: 使用虚拟机模拟主机运行docker服务，启用Jenkins实现自动pull代码、构建，并部署nginx网站
---


> 说明：运行环境为虚拟机安装的centOs7操作系统（[下载地址](http://mirrors.aliyun.com/centos/7/isos/x86_64/CentOS-7-x86_64-DVD-2003.iso)），安装的docker版本为19.03.12。环境准备阶段不做赘述，下面从安装jenkins开始：

1. ### jenkins准备阶段
    * 新建一个目录**jenkins_home**，用来挂载到jenkins容器里面，可以保存配置
    `mkdir -p /var/workspace-20200824/jenkins_home`
    * 拉取jenkins镜像
    `docker pull jenkins/jenkins:lts`
    * 启动jenkins
    ```
    docker run -u root --name jenkins_node \
    -p 9080:8080 -p 50000:50000 \
    -v $(which docker):/usr/bin/docker \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v /var/workspace-20200824/jenkins_home:/var/jenkins_home \
    -e TZ="Asia/Shanghai" -v /etc/localtime:/etc/localtime:ro \
    jenkins/jenkins:lts
    ```
    > {% asset_img t2.png '"运行效果图" "运行效果图"' %}
    * 打开网站x.x.x.x:9080，要稍等一会，然后安装插件，我这里自己选的需要的
    > {% asset_img t1.png '"安装插件" "安装插件"' %}
    * 然后创建用户
    > {% asset_img t3.png '"创建用户" "创建用户"' %}
    * 一些配置
    > {% asset_img t4.png '"进入全局配置" "进入全局配置"' %}
    > {% asset_img t5.png '"配置node" "配置node"' %}
    > {% asset_img t6.png '"进入系统配置" "进入系统配置"' %}
    > {% asset_img t7.png '"配置SSH连接并测试连接" "配置SSH连接并测试连接"' %}

2. ### 准备github仓库
    * 待写。。。