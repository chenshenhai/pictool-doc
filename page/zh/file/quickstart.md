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

- 将图像处理素描效果
  - 步骤1: 设置图片URL(绝对路径或者相对路径)
  - 步骤2: 利用`sobel`算法计算处理图像边缘
  - 步骤3: 利用`invert`反色算法处理成边缘黑色效果

```js
import Pictool from 'pictool';

// 步骤1: 设置图片URL(绝对路径或者相对路径)
const src = './image/xxxx.jpg';
const Sandbox = Pictool.browser.Sandbox;
const sandbox = new Sandbox(src);
const dom = document.querySelector('#display');

sandbox.queueProcess([
  // 步骤2: 利用 sobel 算法计算处理图像边缘
  {
    process: 'sobel',
    options: {},
  },
  // 步骤3: 利用 invert 反色算法处理成边缘黑色效果
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