---
title: Welcome to here
date: 2020-08-16 16:24:47
tags:
---
# Welcome here
<!--more-->
> 静态图片
{% asset_img 91870.jpg hello, Spiderman! %}

> 公共数据
<% for (var link in site.data.menu) { %>
  <a href="<%= site.data.menu[link] %>"> <%= link %> </a>
<% } %>