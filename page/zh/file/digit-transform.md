# Pictool.digit.transform

## digit.transform

图像信息的数字化转换

## RGB转HSL RGB2HSL 

```js
const transform = Pictool.digit.transform;
const rgb = {r: 12, g: 15, b: 10};
const hsl = transform.RGB2HSL(rgb);
// {h:96, s:20, l:5};
```


## HSL转RGB HSL2RGB

```js
const transform = Pictool.digit.transform;
const hsl = {h:96, s:20, l:5};
const rgb = transform.HSL2RGB(rgb);
// {r: 12, g: 15, b: 10};
```