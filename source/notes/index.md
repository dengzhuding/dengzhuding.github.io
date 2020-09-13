---
layout: post
title: 日常小笔记
date: 2020-09-03 10:19:53
updated: 2020-09-10 14:02:00
excerpt: 日常笔记记录，想到啥就记啥
---

***
> 2020-09-10
1. 计算日期相差天数
```javascript
const dateStart = new Date('2020-09-01');
const dateEnd = new Date('2020-09-15');
const difValue = (dateEnd - dateStart) / (1000 * 60 * 60 * 24); // 14
```

***
> 2020-09-03

1. 从表格复制单行数据格式为JSON数组
{% codeblock  lang:javascript line_number:true highlight:true %}
   // copyStr-从excel复制的文本
   let copyStr = ''
   // 返回 Object
   copyStr.replace(/\n/g, '').replace(/\s+/g, ',').replace(/\"/g, '').split(',').map(strItem => ({label: strItem}))
{% endcodeblock %}

2. 空格分隔的字符串首字母转为小写
{% codeblock  lang:javascript line_number:true highlight:true %}
   const str = 'Hello World! Man.'
   // 返回 hello world! man.
   str.replace(/\s([^\s])/g, word => (' ' + word.toLocaleLowerCase()))
{% endcodeblock %}

