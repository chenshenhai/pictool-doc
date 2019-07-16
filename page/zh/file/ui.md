# Pictool.UI

## UI工具类

`Pictool.UI` 是聚合了 `Pictool`所有图像处理功能的UI工具，可以用来演示处理图片

## 快速使用

- 参数 `imgData {ImageData}` 是浏览器的图像数据类型参数

```js
const pictoolUI = new Pictool.UI(imgData);
pictoolUI.show();
```
#### Pictool.UI 使用CDN例子

```html
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    
    <style>
      .btn { margin: 100px auto; height: 60px; width: 200px; background: #cccccc;}
    </style>
    <script src="https://unpkg.com/pictool/dist/index.js"></script>
  </head>
  <body>

   <button id="J_Btn" class="btn">open Pictool.UI</button>
  </body>
  <script>
  (async function(Pictool) {
    const util = Pictool.browser.util;
    const PictoolUI = Pictool.UI;
    const imgData = await util.getImageDataBySrc('./assets/image/test.jpg');
    if (imgData instanceof Error) {
      console.log(imgData);
      return;
    }

    const pictoolUI = new PictoolUI(imgData);
    pictoolUI.show();

    document.querySelector('#J_Btn').addEventListener('click', function() {
      pictoolUI.show();
    });
  
  })(window.Pictool);
  </script>
</html>
```

> 注: 例子测试的图片来源于网络

![example-ui](./../../../assets/image/example-ui.jpg)



## UI.show

显示UI工具

```js
const pictoolUI = new Pictool.UI(imgData);
pictoolUI.show();
```

## UI.hide

隐藏UI工具

```js
const pictoolUI = new Pictool.UI(imgData);
pictoolUI.hide();
```