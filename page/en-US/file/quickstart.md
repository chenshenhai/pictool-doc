# Quick Start


## Prerequisites

- Operating System: Windows，macOS，Linux
- Node.js Runtime: `12.3+`


## The Quick Way

### NPM Usage

```sh
npm i --save pictool
```


```js
import Pictool from 'pictool';
```

or

```js
import PictoolBrowser from 'pictool/dist/browser';
import PictoolUI from 'pictool/dist/ui';
import PictoolDigit from 'pictool/dist/digit';
```

### CDN Usage


```html
<script src="https://unpkg.com/pictool/dist/index.js"></script>
```

or

```html
<script src="https://unpkg.com/pictool/dist/browser.js"></script>
<script src="https://unpkg.com/pictool/dist/digit.js"></script>
<script src="https://unpkg.com/pictool/dist/ui.js"></script>
```


## Simple Usage

### JavaScript code

```js
import Pictool from 'pictool';

const src = './image/test.jpg';
const Sandbox = Pictool.browser.Sandbox;
const sandbox = new Sandbox(src);
const dom = document.querySelector('#J_Example_01');

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
    <style>
      .box {float: left; margin-right: 10px;}
      img { max-height: 200px; min-width: 100px;}
    </style>
  </head>
  <body>
    <div class="box">
      <img src="./image/test.jpg" />
    </div>

    <div class="box" id="J_Example_01">
      <img />
    </div>
    <script src="./index.js"></script>
  </body>
</html>
```

### 浏览器结果


![result](./../../../assets/image/001.jpg)