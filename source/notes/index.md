---
layout: post
title: 日常小笔记
date: 2020-09-03 10:19:53
# updated: 2020-09-10 14:02:00
excerpt: 日常笔记记录，想到啥就记啥
---

<style>
blockquote {
   margin: 0 -1rem;
   font-size: 1rem;
   font-weight: bold;
   /* background: linear-gradient(to left, #f2f2f2, transparent); */
   position: relative;
   border-radius: 0px;
   background: none;
}

/* blockquote::after {
   content: '';
   position: absolute;
   width: 4rem;
   height: 4rem;
   border-radius: 2rem;
   box-shadow: inset 0 0 0px 1px #f3cfa2;
   right: -3rem;
   top: -3rem;
   background: #f2f2f2;
} */
</style>
<div class="pd-b-10"></div>

***
> 2022-05-07
> css 粘性边界

**通过filter的2个函数方法: 对比度-`filter: contrast(10);`、高斯模糊-`filter: blur(4px);`组合产生粘性效果**
效果：
<div style="height: 300px;">
    <div style="width: 200px;height: 200px;filter: contrast(10);position: relative;left: 50%;top: 50%;transform: translate(-50%, -50%);background: black;border-radius: 50%;" class="test-div">
        <style>
        .test-div > * {
            filter: blur(4px);
            left: 50%;
            top: 50%;
            border-radius: 50%;transform: translate(-50%, -50%);
        }
        @keyframes ball {
            0%, 100% {
                left: 20px;
                width: 40px;
                height: 40px;
            }
            50%{
                left: 180px
            }
        }
        </style>
        <div style="position: relative;width: 80px;height: 80px;background: white;"></div>
        <span style="position: absolute;background: red;animation: ball 5s infinite;animation-timing-function: linear;"></span>
    </div>
</div>

***
> 2021-04-01
> loading加载效果

效果：
<style type="text/css">
   @keyframes color-t {
      0% {
         background: #008eff;
      }
      50% {
         background: #0001ff;
      }
      100% {
         background: #008eff;
      }
   }
   @keyframes bgc-t {
      0% {
         transform: rotateZ(0);
      }
      100% {
         transform: rotateZ(360deg);
      }
   }
   .loading-div {
      display: flex;
      flex-direction: column;
      height: 100px;
      width: 100px;
      position: relative;
      overflow: hidden;
      border-radius: 50%;
      user-select: none;
      margin: 0 auto;
      background: #448de0;
      animation: color-t 2s infinite ease;
   }
   .loading-div .bg-translate {
      position: absolute;
      padding: 72%;
      left: -22%;
      top: -22%;
      z-index: 1;
      background-image: linear-gradient(#fff,#448de000);
      animation: bgc-t 2s infinite linear;
   }
   .loading-div .bg-content {
      z-index: 2;
      flex-grow: 1;
      margin: 8px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: sans-serif;
      color: #6b6b6b;
      font-size: 12px;
   }
</style>
<div class="loading-div">
   <div class="bg-translate"></div>
   <div class="bg-content">
      <span>loading...</span>
   </div>
</div>

html:
{% codeblock lang:html line_number:false %}
<div class="test-div">
   <div class="bg-translate"></div>
   <div class="bg-content">
      <span>loading...</span>
   </div>
</div>
{% endcodeblock %}
css:

{% codeblock lang:css line_number:true %}
   @keyframes color-t {
      0% {
         background: #008eff;
      }
      50% {
         background: #0001ff;
      }
      100% {
         background: #008eff;
      }
   }
   @keyframes bgc-t {
      0% {
         transform: rotateZ(0);
      }
      100% {
         transform: rotateZ(360deg);
      }
   }
   .loading-div {
      display: flex;
      flex-direction: column;
      height: 100px;
      width: 100px;
      position: relative;
      overflow: hidden;
      border-radius: 50%;
      user-select: none;
      margin: 0 auto;
      background: #448de0;
      animation: color-t 2s infinite ease;
   }
   .loading-div .bg-translate {
      position: absolute;
      padding: 72%;
      left: -22%;
      top: -22%;
      z-index: 1;
      background-image: linear-gradient(#fff,#448de000);
      animation: bgc-t 2s infinite linear;
   }
   .loading-div .bg-content {
      z-index: 2;
      flex-grow: 1;
      margin: 8px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: sans-serif;
      color: #6b6b6b;
      font-size: 12px;
   }
{% endcodeblock %}

***
> 2021-03-17
> github.com能ping通，但是无法访问，试试添加以下解析至hosts文件(windows - `C:\Windows\System32\drivers\etc`, linux - `/etc/hosts`)
```bash
# ...
140.82.114.4      github.com
151.101.88.249    github.global.ssl.fastly.net
151.101.73.194    github.global.ssl.fastly.net
151.101.229.194   github.global.ssl.fastly.net
```

***
> 2021-01-17
> 移除自动插入的广告js
{% codeblock lang:javascript line_number:false %}
document.querySelectorAll('.google-auto-placed.ap_container').forEach(item => item.parentElement.removeChild(item))
{% endcodeblock %}

***
> 2020-11-17
> html空格
* `&nbsp;`---&nbsp;---空格键产生，受字体影响
* `&thinsp;`---&thinsp;---占据的宽度比较小
* `&tensp;`---&ensp;---1/2中文字符宽度
* `&emsp;`---&emsp;---1个中文字符狂赌

* `&amp;`---&amp;---&的转义字符

***
> 2020-11-11
> 将正常格式.vue格式化为vscode用户代码片段
#### 步骤
* a.新建用户代码模板：`File> Preferences> User Snippets> new ...`，输入名称确认；
* b.将代码贴到body属性值里；
* c.将模板代码中双引号`"`转为`\"`(用vscode替换文本功能)；
* d.将模板代码行做替换-`^(\s{6})(.+)`转为`$1"$2",`(选择匹配正则表达式)，注意有空行需要手动加上；
![vscode快速生产用户代码](/images/vscode快速生产用户代码.png "vscode快速生产用户代码")
***
> 2020-09-10
> 计算日期相差天数
```javascript
const dateStart = new Date('2020-09-01');
const dateEnd = new Date('2020-09-15');
const difValue = (dateEnd - dateStart) / (1000 * 60 * 60 * 24); // 14
```

***
> 2020-09-03

1\. 从表格复制单行数据格式为JSON数组
{% codeblock  lang:javascript line_number:true highlight:true %}
   // copyStr-从excel复制的文本
   let copyStr = ''
   // 返回 Object
   copyStr.replace(/\n/g, '').replace(/\s+/g, ',').replace(/\"/g, '').split(',').map(strItem => ({label: strItem}))
{% endcodeblock %}

2\. 空格分隔的字符串首字母转为小写
{% codeblock  lang:javascript line_number:true highlight:true %}
   const str = 'Hello World! Man.'
   // 返回 hello world! man.
   str.replace(/\s([^\s])/g, word => (' ' + word.toLocaleLowerCase()))
{% endcodeblock %}

