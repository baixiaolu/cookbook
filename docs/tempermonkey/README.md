# TemperMonkey

## 引入jquery的示例

```js
// ==UserScript==
// @name         change copyright
// @namespace    https://www.xxx.com/
// @version      2023-12-29
// @description  try to take over the world!
// @author       You
// @match        https://www.xxx.com/*
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('.footer div p')[0].innerHTML = '北京xx公司'

    // Your code here...
})();
```

## 无jquery时，写原生的示例

```js
// ==UserScript==
// @name         sys-hidden-logo
// @namespace    http://222.222.111.111:8888/p/
// @version      2023-12-29
// @description  try to take over the world!
// @author       You
// @match        http://222.222.111.111:8888/p/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
        var imgElement = document.querySelector('.nav-log');
        if(imgElement)
            imgElement.parentNode.removeChild(imgElement);

        var leftElement = document.querySelector('.leftBox')
        if(leftElement)
            leftElement.childNodes[2].textContent = '北京xx公司';
    },100)
})();
```