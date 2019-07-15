# Pictool.digit

## 数字化API

```js
import Pictool from 'pictool';
const digit = Pictool.digit;
```

`Pictool.digit` 主要封装了图像数字化的一些操作方法和类。

为了更好的减少对浏览器的依赖，同时浏览器自带的`ImageData`是`只读的`，虽然`js`可以对其操作赋值，但是严格意义上是不能直接做写操作的。

因此，这里封装了一系列数字化处理图像的工具类和方法，为了更加严谨处理图像的数字化处理。如果后续有支持`Node.js`环境运行图像处理需要的时候，相关图像处理的方法和类可以比较平滑的迁移。

### 数字化图像类 digit.DigitImageData

```js
const DigitImageData = Pictool.digit.DigitImageData;
```

`DigitImageData` 数字图像数据类，类似浏览器提供的`ImageData`，不同的是 `DigitImageData` 里封装了一些更高阶的图像转换方法。


### 图像效果类 digit.Effect

```js
const Effect = Pictool.digit.Effect;
```
`Pictool.digit.Effect` 是`Pictool`数字图像效果处理的高阶类，主要是用于连续处理多种图像算法的操作。


### 图像转换对象 digit.transform

```js
const transform = Pictool.digit.transform;
```

`Pictool.digit.transform` 是一个对象，里面封装了图像基础数据类型的转换方法，目前支持了图像数据的 `RBG`和`HSL` 的转换。

### 图像处理对象 digit.process

```js
const process = Pictool.digit.process;
```
`Pictool.digit.process` 是一个对象，里面封装了图像处理的的算法操作，是`Pictool`图像效果操作类 `Pictool.digit.Effect` 的操作基础


## digit.DigitImageData

`DigitImageData` 数字图像数据类，类似浏览器提供的`ImageData`，不同的是 `DigitImageData` 里封装了一些更高阶的图像转换方法。

`Pictool.digit.DigitImageData` 是整个`Pictool`图像处理的数据基础，所有在浏览器获取到的图片数据都会在`Pictool`中转转换成 `DigitImageData` 数据类型，再基于该数据类型做各种各样的数字图像处理。



```js
const DigitImageData = Pictool.digit.DigitImageData;

const arr = [];
const width = 16;
const height = 16;
for (let i = 0; i < width * height; i ++) {
  // 天蓝色的 RGBA 值
  arr.push(96, 207, 245, 255);
}
const data = new Uint8ClampedArray(arr);

const options = { width, height, data};
const digitImg = new DigitImageData(options);
```

- 参数 `options` 是一个对象
  - `options.width {number}` `[必填]` 是数字图像的宽度
  - `options.height {number}` `[必填]` 是数字图像的高度
  - `options.data {Uint8ClampedArray}` `[选填]` 是数字图像的`RGBA`数据
    - 不填时，默认为`new Uint8ClampedArray(width * height * 4)`
    - 即不填时候，为透明的 `RGBA` 色彩数据



### DigitImageData.getWidth()

方法 `DigitImageData.getWidth()`
获取图像宽度信息

返回 `width {number}`

```js
const options = { width, height, data};
const digitImg = new DigitImageData(options);

digitImg.getWidth()  // width
```


### DigitImageData.getHeight()

方法 `DigitImageData.getHeight()`
获取图像高度信息

返回 `height {number}`

```js
const options = { width, height, data};
const digitImg = new DigitImageData(options);

digitImg.getHeight()  // height
```

### DigitImageData.getData()

方法 `DigitImageData.getData()`
获取图像RGBA数据信息

返回 `data {Uint8ClampedArray}`

```js
const options = { width, height, data};
const digitImg = new getData(options);

digitImg.getData()  // height
```

### DigitImageData.getData()

方法 `DigitImageData.getData()`
获取图像RGBA数据信息

返回 `data {Uint8ClampedArray}`

```js
const options = { width, height, data};
const digitImg = new getData(options);

digitImg.getData()  // data
```

### DigitImageData.pixelAt(x, y)

方法 `DigitImageData.pixelAt(x, y)`
获取图像坐标为`(x, y)`的 RGBA数据信息

- 参数 `x {number}` 像素的X轴坐标 
- 参数 `y {number}` 像素的Y轴坐标 
- 返回 `{r: number, g: number, b: number, a: number }` 像素的 RGBA 信息

```js
const data = [
  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  
  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,
  0, 0, 0, 0,  1, 2, 3, 255,  0, 0, 0, 0 
];
const width = 3;
const width = 3;
const options = { width, height, data};
const digitImg = new getData(options);

digitImg.pixelAt(1, 2)  // {r: 1, g: 2, b: 3, a: 255 }
```

### DigitImageData.setDataUnit(index, unit)

方法 `DigitImageData.setDataUnit(index, unit)`
设置图像数据`data`索引为`index`位置的图形单元信息`unit`

- 参数 `index {number}` 像素的X轴坐标 
- 参数 `unit {number}` 像素的Y轴坐标 

```js
const data = [
  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  
  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,
  0, 0, 0, 0,  0, 0, 0, 0,   0, 0, 0, 0 
];
const width = 3;
const width = 3;
const options = { width, height, data};
const digitImg = new getData(options);

digitImg.setDataUnit(1, 255)  // {r: 1, g: 2, b: 3, a: 255 }

digitImg.getData();
/*
[
  0, 255, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  
  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,
  0, 0, 0, 0,  0, 0, 0, 0,   0, 0, 0, 0 
];
*/
```


### DigitImageData.destory()

方法 `DigitImageData.destory()`
销毁数字图像信息，为了释放内存

```js
const data = [
  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  
  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,
  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0 
];
const width = 3;
const width = 3;
const options = { width, height, data};
const digitImg = new getData(options);

digitImg.destory()  // {r: 1, g: 2, b: 3, a: 255 }


digitImg.getHeight(); // 0
digitImg.getWidth(); // 0
digitImg.getData(); // Uint8ClampedArray[] 空数组

```


## digit.Effect

`Pictool.digit.Effect` 是`Pictool`数字图像效果处理的高阶类，主要是用于连续处理多种图像算法的操作。

```js
const Effect = Pictool.digit.Effect;

// digitImg 参数为一个原始的 DigitImageData 数据
const effect = new Effect(digitImg);

// 按照顺序进行 sobel算法、invert算法 的图形换算处理
// 即先处理边缘化，再取反色，把彩色图片变成黑色描边的素描图片
effect.process('sobel', {}).process('invert', {});

// 获取数字图像数据 DigitImageData
const digitImg = effect.getDigitImageData();

// 获取浏览器图像数据 ImageData 可以直接用 canvas 渲染显示
const imgData = effect.getImageData();

```
