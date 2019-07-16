# Pictool.digit.process

## digit.process 

```js
const process = Pictool.digit.process;
```

数字化处理图像操作对象，封装了几个常用的图像处理操作方法。

封装的方法，都是是将原类型为 `{DigitImageData}` 的图像数字数据，进行响应的要求图像处理，最后输出一个处理后的 `{DigitImageData}` 数据

## process.lightness(digitImg, options)

图像亮度处理

- 参数 `digitImg {DigitImageData}` 待处理的数字图像数据
- 参数 `options {object}`
  - `options.percent {number}` 百分比， 取值范围为`[-100, 100]`
  - `options.value {number}` 亮度值， 取值范围为`[0, 100]`
  - `value`优先级最高，当`percent`和`value`同时出现，只取`value`配置

```js
const process = Pictool.digit.process;

// 将亮度提升 70%
const rsDigitImg = process.lightness(digitImg, { percent: 70 });

// 将亮度值设为 50
const rsDigitImg = process.lightness(digitImg, { value: 50 });
```

#### process.lightness CDN方式使用例子


```html
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      .box {width: 200px; height: 200px; float: left; margin-left: 10px; }
      img { max-height: 200px; max-width: 200px; }
    </style>
    <script src="https://unpkg.com/pictool/dist/index.js"></script>
  </head>
  <body>

    <div class="box">
      <img src="./assets/image/test.jpg" />
    </div>

    <div  class="box" id="J_Example"></div>

  </body>
  <script>
  (async function(Pictool) {
    const util = Pictool.browser.util;
    const process = Pictool.digit.process;
    const imgData = await util.getImageDataBySrc('./assets/image/test.jpg');
    if (imgData instanceof Error) {
      console.log(imgData);
      return;
    }

    const digitImg = util.imageData2DigitImageData(imgData);

    // 亮度提高 70%
    const rsDigitImg = process.lightness(digitImg, { percent: 70 });
    
    const rsImgData = util.digitImageData2ImageData(rsDigitImg);
    const base64 = util.imageData2Base64(rsImgData);

    document.getElementById('J_Example').innerHTML = `<img src="${base64}">`

  })(window.Pictool);
  </script>
</html>
```

效果如下

> 注: 例子使用图片来源于网络

![example-digit-process-lightness](./../../../assets/image/example-digit-process-lightness.jpg)


## process.hua 

## process.saturation 

## process.grayscale 

## process.invert 

## process.sobel



