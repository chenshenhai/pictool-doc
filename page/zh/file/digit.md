# Pictool.digit

## 数字化API

```js
import Pictool from 'pictool';
const digit = Pictool.digit;
```

`Pictool.digit` 主要分装了图像数字化的一些操作方法和类。

为了更好的减少对浏览器的依赖，同时浏览器自带的`ImageData`是`只读的`，虽然`js`可以对其操作赋值，但是严格意义上是不能直接做写操作的。

因此，这里分装了一系列数字化处理图像的工具类和方法，为了更加严谨处理图像的数字化处理。如果后续有支持`Node.js`环境运行图像处理需要的时候，相关图像处理的方法和类可以比较平滑的迁移。

### 数字化图像类 digit.DigitImageData

```js
const DigitImageData = Pictool.digit.DigitImageData;
```

`DigitImageData` 数字图像数据类，类似浏览器提供的`ImageData`，不同的是 `DigitImageData` 里分装了一些更高阶的图像转换方法。

`Pictool.digit.DigitImageData` 是整个`Pictool`图像处理的数据基础，所有在浏览器获取到的图片数据都会在`Pictool`中转转换成 `DigitImageData` 数据类型，再基于该数据类型做各种各样的数字图像处理。



### 图像效果类 digit.Effect

```js
const Effect = Pictool.digit.Effect;
```
`Pictool.digit.Effect` 是`Pictool`数字图像效果处理的高阶类，主要是用于连续处理多种图像算法的操作。


### 图像转换对象 digit.transform

```js
const transform = Pictool.digit.transform;
```

`Pictool.digit.transform` 是一个对象，里面分装了图像基础数据类型的转换方法，目前支持了图像数据的 `RBG`和`HSL` 的转换。

### 图像处理对象 digit.process

```js
const process = Pictool.digit.process;
```
`Pictool.digit.process` 是一个对象，里面分装了图像处理的的算法操作，是`Pictool`图像效果操作类 `Pictool.digit.Effect` 的操作基础


## digit.DigitImageData




## digit.Effect

