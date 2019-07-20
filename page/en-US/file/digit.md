# Pictool.digit



## digit.DigitImageData



```js
const DigitImageData = Pictool.digit.DigitImageData;

const arr = [];
const width = 16;
const height = 16;
for (let i = 0; i < width * height; i ++) {
  //  RGBA value
  arr.push(96, 207, 245, 255);
}
const data = new Uint8ClampedArray(arr);

const options = { width, height, data};
const digitImg = new DigitImageData(options);
```

- param `options`
  - `options.width {number}` `[required]`
  - `options.height {number}` `[required]`
  - `options.data {Uint8ClampedArray}` 
    - default `new Uint8ClampedArray(width * height * 4)`



### DigitImageData.getWidth()

method `DigitImageData.getWidth()`

return `width {number}`

```js
const options = { width, height, data};
const digitImg = new DigitImageData(options);

digitImg.getWidth()  // width
```


### DigitImageData.getHeight()

method `DigitImageData.getHeight()`

return `height {number}`

```js
const options = { width, height, data};
const digitImg = new DigitImageData(options);

digitImg.getHeight()  // height
```

### DigitImageData.getData()

method `DigitImageData.getData()`

return `data {Uint8ClampedArray}`

```js
const options = { width, height, data};
const digitImg = new getData(options);

digitImg.getData()  // height
```

### DigitImageData.getData()

method `DigitImageData.getData()`

return `data {Uint8ClampedArray}`

```js
const options = { width, height, data};
const digitImg = new getData(options);

digitImg.getData()  // data
```

### DigitImageData.pixelAt(x, y)

method `DigitImageData.pixelAt(x, y)`

- param `x {number}` 
- param `y {number}` 
- return `{r: number, g: number, b: number, a: number }`

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

method `DigitImageData.setDataUnit(index, unit)`

- return `index {number}`  
- return `unit {number}`  

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

return `DigitImageData.destory()`

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


```js
const Effect = Pictool.digit.Effect;

const effect = new Effect(digitImg);

effect.process('sobel', {}).process('invert', {});

const digitImg = effect.getDigitImageData();

const imgData = effect.getImageData();
```
