---
layout: cp-layout.njk
title: Lucid Color Picker
description: A simple color wheel based color picker.
script: https://unpkg.com/lucid-color-picker
element: lucid-color-picker
size: 3.95 KB
tags: ['pickers']
---

# Lucid Color Picker

HSL based color picker. The sliders on the right and the bottom set the Hue and Alpha of the color. The pointer on the rectangle adjusts the Saturation and Brightness.

## Installation 
This color picker is shipped as an ES Module. You can add it to your project via npm

```shell
npm install --save lucid-color-picker
```

Or load the ES module directly

```html
<script type="module" src="https://unpkg.com/lucid-color-picker"></script>
```

## Usage
Simply add the `lucid-color-picker` element in your HTML. This element accepts a `value` attribute to set the value of the color. 
The values can be HEX, HEX with Alpha, RGB, RGBA, HSL, HSLA.

```html
<lucid-color-picker><lucid-color-picker>

// or with some value
<lucid-color-picker value="#FF55A7"><lucid-color-picker>
```

## Demos
You can play with the color picker at the top of this page or checkout the following links to play in the sandbox.

[No Framework](https://codesandbox.io/s/lucid-color-picker-8jyss)

[Svelet example](https://codesandbox.io/s/lucid-color-picker-svelte-zcygj)

[Vue example](https://codesandbox.io/s/lucid-color-picker-vue-3voty)

[React example](https://codesandbox.io/s/lucid-color-picker-react-2b4c9)

## Properties and Attributes

#### value
The value can be set on the element as a property or as an attribute to the node. The values can be HEX, HEX with Alpha, RGB, RGBA, HSL, HSLA.

```javascript
const picker = document.querySelector('lucid-color-picker');
picker.value = '#ff00aa';
picker.value = 'rgb(10, 200, 255)';
picker.value = 'hsl(200, 100%, 50%)';
```

When reading the value property, it returns the HEX value. 

#### rgb
Read only property that returns the RGBA value of the color. Returns and array of four numbers, matching R, G, B, and Alpha value.

#### hsl
Read only property that returns the HSLA value of the color. Returns and array of four numbers, matching H, S, L, and Alpha value.

## Events
The element fires a `change` event when the color is changed by the user

```javascript
const picker = document.querySelector('lucid-color-picker');
picker.addEventListener('change', () => {
  console.log(`Color changed to ${picker.value}`);
});
```

## License & Source
The source code is available [on Github](https://github.com/pshihn/every-color-picker) under the [MIT License](https://github.com/pshihn/every-color-picker/blob/master/LICENSE). You can sponsor this project [Github Sponsors](https://github.com/sponsors/pshihn).