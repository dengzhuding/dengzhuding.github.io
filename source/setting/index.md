---
layout: page
title: setting
date: 2022-08-11 14:46:14
updated:
categories:
tags:
permalink:
excerpt: 页面设置
---

## Setting
* **ads**   
  <div class="check-box-div">
    <script>
      document.addEventListener('DOMContentLoaded', checkboxLoad)
      function checkboxLoad(event) {
        const checkbox = document.querySelector('#change-google-ads');
        if (!checkbox) {
          return;
        }
        const adsOpenStatus = localStorage.getItem('googole-ads-open');
        if (adsOpenStatus !== 'true') {
          return;
        }
        checkbox.checked = true;
        checkboxChange(checkbox);
      }
      function checkboxChange(target) {
        if (!target) {
          return
        }
        // 
        const checked = target.checked;
        localStorage.setItem('googole-ads-open', checked);
        // 
        target.nextElementSibling.firstElementChild.style.setProperty('--color-curreent', checked ? 'var(--color-blue)' : 'var(--color-gray)');
        target.nextElementSibling.firstElementChild.lastElementChild.style.setProperty('right', checked ? 0 : '1.3rem');
        // console.log(event);
        // throw('test error');
      }
    </script>
    <input type="checkbox" id="change-google-ads" style="display: none;" onchange="checkboxChange(this)" />
    <label for="change-google-ads" style="" class="cursor-pointer display-flex">
      <div class="display-flex mg-r-5" style="
          display: inline-block;
          position: relative;
          --color-blue: #005aff;
          --color-gray: #ccc;
          --color-curreent: var(--color-gray);
      ">
        <div style="
          width: 2.5rem;
          height: 1rem;
          border-radius: 10px;
          background: var(--color-curreent);
          opacity: 0.4;
        " class=""></div>
        <div style="
          position: absolute;
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 50%;
          background: var(--color-curreent);
          top: 50%;
          transform: translateY(-50%);
          box-shadow: 0 0 3px 0px var(--color-curreent);
          right: 1.3rem;
          transition: right .2s;
        "></div>
      </div>
      启用 google ads
    </label>
  </div>