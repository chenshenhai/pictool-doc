# 快速开始

## 准备环境

- 系统环境: Windows，macOS，Linux
- Node版本: 建议 `12.3+`


## 快速安装

```sh
npm i --save pictool
```

## 简单的图像处理

### JavaScript代码

```js
import Pictool from 'pictool';

const src = './image/xxxx.jpg';
const Sandbox = Pictool.browser.Sandbox;
const sandbox = new Sandbox(src);
const dom = document.querySelector('#display');

sandbox.queueProcess([
  {
    process: 'sobel',
    options: {},
  },
  {
    process: 'invert',
    options: {},
  }
]).then(function(base64) {
  dom.innerHTML = `<img src="${base64}" />`;
}).catch(function(err) {
  console.log(err);
});
```

### 页面代码

```html
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <style>
    img {
      max-height: 200px;
      min-width: 100px;
    }
    </style>
  </head>
  <body>

    <div>
      <img src="./image/xxx.jpg" />
    </div>

    <div id="display">
      <img />
    </div>

    <script src="./index.js"></script>
    <script>
    </script>
  </body>
</html>
```

### 浏览器结果

![result](./../../../assets/image/001.jpg)