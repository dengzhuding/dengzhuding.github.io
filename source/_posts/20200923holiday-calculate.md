---
layout: post
title: 节假日计算相关
date: 2020-09-23 11:56:35
updated: 2020-09-27 10:00:00
categories:
- [notes, javascript]
tags:
- 节假日
- javascript
- Date
permalink:
excerpt: 根据万年历取得节假日、调休数据，记录一些常规用法。
---

## 一、获取节假日数据
> 2种方式
* 1、通过[官网](http://sousuo.gov.cn/s.htm?t=govall&q=%E8%8A%82%E5%81%87%E6%97%A5)通知获取节假日信息，手动收集
   {% asset_img t1.png '"2020年节假日放假安排公布" "2020年节假日放假安排公布"' %}
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
************************
通过以上操作可获取结构为`[{date: '2020-01-01', status: '1'}]`的数组`holidayArr`，其中status = 1-节假日、2 - 工作日，如下图：
{% asset_img t2.png '"节假日/调休Array" "节假日/调休Array"' %}

## 二、相关算法
### 2.1 判断一个日期是假期还是工作日
> 首先判断日期是否在`holidayArr`中，在里面就根据`status`可以确定，不在里面再根据是否为周末判断，如下图：
> {% asset_img t3.png %}
```javascript
// 收集到的节假/调休日期
const holidayArr = [];
// 是否为工作日 dateParam - Date | String
const isWorkDay = (dateParam) => {
  let date = null;
  const result = {
    check: 1, // 是否正常判断
    value: false,
    warningMsg: '' // check=0时提示信息
  }
  if (dateParam instanceof Date) {
    date = dateParam;
  } else if (typeof dateParam === 'string') {
    date = new Date(dateParam);
  } else {
    result.check = 0;
    result.warningMsg = '暂不支持其他格式解析！';
    return result
  }
  const year = date.getFullYear();
  // 这里根据年份支持情况调整
  if (year !== 2020) {
    result.check = 0;
    result.warningMsg = '暂时仅支持2020年工作日判断！';
    return result
  }
  const dateStr = `${year}-${date.getMonth() + 1}-${date.getDate()}`;
  const dateItem = holidayArr.find(item => {
    return item.date === dateStr;
  })
  if (dateItem !== undefined) {
    // 1-节假日，2-工作日
    result.value = dateItem.status === '2';
    return result
  }
  // 判断是否为周末,week表示日期对象的星期中的第几天（0-6）
  const week = date.getDay();
  result.value = week.toString().match(/[1-5]/) !== null;
  return result
}
const result = isWorkDay('2020-09-27');
console.log((result.check === 1 && result.value) || result.warningMsg); // true
```

### 2.2 计算n个工作日后的日期
> 使用比较笨的方法，传入值依次添加 **1** 天，判断为工作日则累计值`m`（默认0）加 **1** ，直到 `n === m`
> 如2020-09-27，增加1个工作日为2020-09-28,增加5个工作日后为2020-10-10
> <span class="color-red">注：计算范围必须在节假日时间范围内，比如此例子计算范围为2020年整年，若计算结果可能不在2020年，则不会准确。</span>**可通过添加`holidayArr`子项解决此问题**
```javascript
// 获取经过n个工作日后日期 dateParam - Date | String, n - Number | String
const getAddWorkDayDate = (dateParam, addNum) => {
  // addNum为数字或数字符串，负数表示经过addNum天到达传入dateParam，返回之前的日期
  const addNumType = typeof addNum;
  if (addNumType.match(/string|number/) === null || isNaN(addNum)) {
    console.warn('计算参数传参格式有误！');
    return ''
  }
  const num = Number.parseInt(addNum, 10);
  // tag - true(正向日期计算)，- false(反向计算)
  const tag = num > 0;
  // 增加或减少的工作日
  let calcDay = Math.abs(num);

  // 返回日期，初始值为传入值
  let date = null;
  if (dateParam instanceof Date) {
    date = dateParam;
  } else if (typeof dateParam === 'string') {
    date = new Date(dateParam);
  } else {
    console.log('暂不支持其他格式解析！');
    return ''
  }
  while (calcDay) {
    let curDay = date.getDate();
    date.setDate(tag ? (curDay + 1) : (curDay - 1));
    // 判断是否为工作日
    const result = isWorkDay(date);
    if (result.value) {
      calcDay--;
    }
  }
  const dateStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  return dateStr;
}

console.log(getAddWorkDayDate('2020-09-27', 1)); // 2020-09-28
console.log(getAddWorkDayDate('2020-09-27', 5)); // 2020-10-10
console.log(getAddWorkDayDate('2020-09-27', -5)); // 2020-9-21
```

### 2.2 计算2个日期之间的工作日数
> 有时间再写，原理跟上面步骤类似。。