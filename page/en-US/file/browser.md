# Pictool Browser

## util.getImageBySrc

- param `imgSrc {string}`
- return `Promise<HTMLImageElement>`

```js
const imgSrc = './assets/image/test.jpg';

Pictool.browser.util.getImageBySrc(imgSrc).then(function(img) {
  document.getElementById('J_Example_02').appendChild(img);
}).catch((err) => {
  console.log(err);
});
```

## util.getImageDataBySrc

`util.getImageDataBySrc` 

- param `imgSrc {string}`
- return `Promise<ImageData>` [ImageData](https://developer.mozilla.org/en/docs/Web/API/ImageData/ImageData)

```js
const imgSrc = './assets/image/test.jpg';

Pictool.browser.util.getImageDataBySrc(imgSrc).then(function(imgData) {
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

`
- param `img {HTMLImageElement}`
- param `options {object}`
  - `options.type {string}`  `image/png`, `image/jpeg` or `image/webp`
    - default `image/png`
  - `options.encoderOptions {number}` `[0, 1]`
    - default `1`
- return `string`

```js
const compressImage =  Pictool.browser.util.compressImage;
const options = {
  type: 'image/jpeg',  encoderOptions: 0.1
}
const compressImgSrc = compressImage(img, options);
document.getElementById('J_Example_04').innerHTML = `<img src="${compressImgSrc}">`;
```


## util.imageData2Base64

- param `imgData {ImageData}`
- return `string`

```js
const base64 = Pictool.browser.util.imageData2Base64(imgData)

document.getElementById('J_Example_05').innerHTML = `<img src="${base64}">`;
```

## util.imageData2DigitImageData

- param `imgData {ImageData}`
- return `imgData {DigitImageData}` [DigitImageData](/page/en-US/file/digit.html#digit-digitimagedata)

```js
const digitImg = Pictool.browser.util.imageData2DigitImageData(imgData)
```

## util.digitImageData2ImageData


- param `imgData {DigitImageData}`  [DigitImageData](/page/zh/file/digit.html#digit-digitimagedata)
- return `imgData {ImageData}`

```js
const imgData = Pictool.browser.util.imageData2DigitImageData(digitImg)
```



## Sandbox

- options `imgSrc {string}`
- method `queueProcess`
  - param `opts {array}`
    - `{process: string, options: any}`
    - `process`  `// TODO`
    - `options`  `// TODO`
  - return `Promise<string>`


```js
const sandbox = new Pictool.browser.Sandbox(imgSrc);
const opts = [
  {
    process: 'sobel',
    options: {},
  },
  {
    process: 'invert',
    options: {},
  }
]

sandbox.queueProcess(opts).then(function(base64) {
  document.getElementById('J_Example_06').innerHTML = `<img src="${base64}" />`;
}).catch(function(err) {
  console.log(err);
});
```