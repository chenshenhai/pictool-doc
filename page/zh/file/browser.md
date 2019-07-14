# Pictool.browser

## 浏览器API

### 工具对象 util

```js
import Pictool from 'pictool';

const util = Pictool.browser.util;
```

`Pictool.browser.util` 是个对象，主要封装了一下方法

- `util.getImageBySrc` 通过图片URL获取生产图片元素 `HTMLImageElement`
- `util.getImageDataBySrc` 通过图片URL获取生产图片数据 [ImageData](https://developer.mozilla.org/zh-CN/docs/Web/API/ImageData/ImageData)
- `util.compressImage` 通过图片元素`HTMLImageElement`将图片进行压缩处理
- `util.imageData2Base64` 通过图片数据`ImageData`将图片进行转换成`Base64`字符串



### 沙箱类 Sandbox


```js
import Pictool from 'pictool';

const Sandbox = Pictool.browser.Sandbox;
```

`Pictool.browser.util` 是个`class`，主要提供一个对单一图片的图像处理沙箱

## util.getImageBySrc

`util.getImageBySrc` 通过图片URL获取生产图片元素 `HTMLImageElement`

- 参数 `imgSrc` 可以是`图片URL`或者图片的`base64`字符串
- 返回 `Promise<HTMLImageElement>`

```js
const imgSrc = './assets/image/test.jpg';

Pictool.browser.util.getImageBySrc(imgSrc).then(function(img) {
  // 测试结果
  document.getElementById('J_Example_02').appendChild(img);
}).catch((err) => {
  console.log(err);
});
```

## util.getImageDataBySrc

`util.getImageDataBySrc` 通过图片URL获取生产图片数据 [ImageData](https://developer.mozilla.org/zh-CN/docs/Web/API/ImageData/ImageData)

- 参数 `imgSrc {string}` 可以是`图片URL`或者图片的`base64`字符串
- 返回 `Promise<ImageData>`

```js
const imgSrc = './assets/image/test.jpg';

Pictool.browser.util.getImageDataBySrc(imgSrc).then(function(imgData) {

  // 测试结果
  document.getElementById('J_Example_03').innerHTML = `
    <code>
      ${JSON.stringify(imgData)}
    </code>
  `;
}).catch((err) => {
  console.log(err);
});
```

## util.compressImage

`util.compressImage` 通过图片元素`HTMLImageElement`将图片进行压缩处理

- 参数 `img {HTMLImageElement}`: 可以是`图片URL`或者图片的`base64`字符串
- 参数 `options {object}`: 是压缩图像的配置
  - `options.type {string}` 可选 `image/png`，`image/jpeg`和`image/webp`
    - 默认是 `image/png`
  - `options.encoderOptions {number}`，图片质量压缩比例， 范围在`[0, 1]`之间的小数
    - 当 `options.type`为`image/jpeg`或`image/webp`，压缩效果才能生效
    - 默认为`1`
- 返回 `string`，为图片压缩后的 `base64`字符串

```js
const compressImage =  Pictool.browser.util.compressImage;
const options = {
  type: 'image/jpeg',  encoderOptions: 0.1
}
const compressImgSrc = compressImage(img, options);

// 测试结果
document.getElementById('J_Example_04').innerHTML = `<img src="${compressImgSrc}">`;
```


## util.imageData2Base64

`util.imageData2Base64` 通过图片数据`ImageData`将图片进行转换成`Base64`字符串

- 参数 `imgData {ImageData}` 是图像的数据类型
- 返回 `string`，为图片转换后的 `base64`字符串

```js
const base64 = Pictool.browser.util.imageData2Base64(imgData)

// 测试结果
document.getElementById('J_Example_05').innerHTML = `<img src="${base64}">`;
```


## 沙箱 Sandbox