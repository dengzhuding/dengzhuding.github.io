---
title: 使用百度统计显示网站访问数据
date: 2020-09-07 22:03:41
category: study notes
tags:
- data
- baidu
excerpt: 在网站中插入百度统计外链，实现简单的网站访问统计，以及在页面中展示简单的数据，例如访问量、访问人数等
---
## 一、准备阶段
1. 用百度账号登录[百度统计](https://tongji.baidu.com/)，建立一个应用，按照官方教程埋码直到能查看网站访问数据
  > {% asset_img t1-a.png '"新建网站" "新建网站"' %}
  > {% asset_img t1-b.png '"插入代码" "插入代码"' %}
  > {% asset_img t1-c.png '"查看统计" "查看统计"' %}
2. 用百度账号登录[百度开发者中心](http://developer.baidu.com/)，同样【创建工程】，创建完了在 *** 基本信息 ***模块可以看到2个参数：API Key - {CLIENT_ID}，Secret Key - {CLIENT_SECRET}；在【安全设置】页配置授权回调页面，也就是第3个参数{REDIRECT_URI}
  > {% asset_img t2-a.png '"工程基本信息" "工程基本信息"' %}
  > {% asset_img t1-b.png '"工程安全设置" "工程安全设置"' %}

## 二、以下操作全部基于下图-2.1实现
  > {% asset_img t3-a.png '"图 2.1 接入方法" "图 2.1 接入方法"' %}

1. 如果 *** 准备阶段 *** 步骤已完成，可获得下面3个参数
  ```
  {
    // API Key - 开发者工程key
    client_id: Cxxxxxxxxxxxxx5,
    // Secret Key - 开发者密钥
    client_secret: uxxxxxxxxxxxxxxxG,
    // 登录重定向地址 - 开发者配置
    redirect_uri: https://www.dengzhuding.site
  }
  ```
2. 浏览器输入一下地址，用百度账号登录，得到 ` {code} = bxxxxxxxxxxxxxxxxxxxxxxx7 `

  `https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=Cxxxxxxxxxxxxx5&redirect_uri=https://dengzhuding.site&scope=basic&display=popup`
  > {% asset_img t3-b.png '"第三方登录页" "第三方登录页"' %} 

  **重定向后的地址为：**`https://www.dengzhuding.site/?code=bxxxxxxxxxxxxxxxxxxxxxxx7`
  > {% asset_img t3-c.png '"登录完成" "登录完成"' %} 

3. 通过code, client_id, client_secret, 及redirect_uri参数，换取ACCESS_TOKEN

  `http://openapi.baidu.com/oauth/2.0/token?grant_type=authorization_code&code=bxxxxxxxxxxxxxxxxxxxxxxx7&client_id=Cxxxxxxxxxxxxx5&client_secret=uxxxxxxxxxxxxxxxG&redirect_uri=https://www.dengzhuding.site`

  ```
  // return
  {
    "expires_in": 2592000,
    "refresh_token": "122.yyyyyyyy.CwR_uQ",
    "access_token": "121.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.F9-Dcg",
    "session_secret": "",
    "session_key": "",
    "scope": "basic"
  }
  ```
 
4. 调用百度统计API，这里可使用*postman* 或者[在线调试工具](https://tongji.baidu.com/api/debug/#)调试接口

  `https://openapi.baidu.com/rest/2.0/tongji/config/getSiteList?access_token=121.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.F9-Dcg`

  ```
  {
    "list": [
      {
        "site_id": 15798554,
        "domain": "dengzhuding.site",
        "status": 0,
        "create_time": "2020-09-07 11:15:11",
        "sub_dir_list": []
      }
    ]
  }
  ```

## 三、网站数据应用
> 没想好