# Pictool.digit.transform



## RGB to HSL 

```js
const transform = Pictool.digit.transform;
const rgb = {r: 12, g: 15, b: 10};
const hsl = transform.RGB2HSL(rgb);
// {h:96, s:20, l:5};
```


## HSL to RGB

```js
const transform = Pictool.digit.transform;
const hsl = {h:96, s:20, l:5};
const rgb = transform.HSL2RGB(rgb);
// {r: 12, g: 15, b: 10};
```