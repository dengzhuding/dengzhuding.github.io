---
title: post title
date: 2020-08-16 11:55:15
tags: test hello-world
---
# 语法效果

## markdown 语法

##  标题2

### 标题3

#### 标题4

##### 标题5

**这是加粗**

*这是斜体*

~~这是横线~~

* 无序列表
* 无序列表

1. 有序列表
2. 有序列表
3. 有序列表

`
内嵌代码
`

---
代码块
---

> 引用

## 标签插件（Tag Plugins）
* 引用块
{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}

* 代码块
{% codeblock _.compact http://underscorejs.org/#compact Underscore.js %}
_.compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
{% endcodeblock %}

* Link
{% link hexo-标签插件 https://hexo.io/zh-cn/docs/tag-plugins [external] [title] %}
