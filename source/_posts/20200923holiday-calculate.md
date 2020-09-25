---
layout: post
title: 节假日计算相关
date: 2020-09-23 11:56:35
updated: 
categories:
- [notes]
tags: holiday
permalink:
excerpt: 根据万年历取得节假日、调休数据，记录一些常规用法。
---

## 一、获取节假日数据
> 2种方式
* 1、通过[官网](http://sousuo.gov.cn/s.htm?t=govall&q=%E8%8A%82%E5%81%87%E6%97%A5)通知获取节假日信息，手动收集
   {% asset_img t1.PNG '"2020年节假日放假安排公布" "2020年节假日放假安排公布"' %}
* 2、通过其他公开Api获取
   百度万年历节接口：<https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?query=202010&resource_id=6018>，其中`query=年[月]`，如`202010`·`,月份为空默认为01
   返回主要信息：
    ```javascript
    {
        // 当前查询年月
        OriginQuery: "202010",
        // 本月日历
        almanac: [],
        // 本年节假日及调休数据
        holiday: [
            {
                // 节假日起始日
                festival: "2020-10-1",
                // 节假日期list
                list: [
                    date: "2020-10-1",
                    // 节假日-'1'，调休（工作日）-'2'
                    status: "1"
                ]
            }
            // ...
        ],
        // 本年节假
        holidaylist: []
    }
    ```
    提取所有节假日期和调休
    ```javascript
    let holidayArr = []
    // response - 上面接口返回的数据
    const temp1 = response.data[0].holiday
    temp1.forEach(item => {
        // 已添加的不必重复
        if (holidayArr.findIndex(hasItem => hasItem.date === item.festival) !== -1) {
            return
        }
        item.list.forEach(dateItem => {
            holidayArr.push({...dateItem, des: `${item.name}:${item.desc}`})
        })
    })
    ```

## 二、相关算法
> 通过上一步骤，可获取结构为`[{date: '2020-01-01', status: '1'}]`的数组，其中status = 1-节假日、2 - 工作日
> 判断一个日期是假期还是工作日

```flow
st=>start: Start
op=>operation: Your Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
```