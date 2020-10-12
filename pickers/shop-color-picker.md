---
layout: cp-layout.njk
title: Shop Color Picker
description: This color picker is inspired by Adobe's Photoshop and Illustrator.
script: https://unpkg.com/shop-color-picker
element: shop-color-picker
size: 5.78 KB
tags: ['pickers']
---

# Shop Color Picker

A color picker inspired by the color picker in Adobe's Photoshop and Illustrator. A radio selects what value the slider controls - Hue, Saturation, Brightness, Red, Green, Blue value. The rectangle next to the slider adjusts based on the current selection to create a plane representing the other two values in the color space. For example, if Hue is selected, the pointer on the plane affects the Saturation and Brightness; when Red is selected, the plane adjusts the Green and Blue values of the color. 

## Installation 
This color picker is shipped as an ES Module. You can add it to your project via npm

```shell
npm install --save shop-color-picker
```

Or load the ES module directly

```html
<script type="module" src="https://unpkg.com/shop-color-picker"></script>
```

## Usage
Simply add the `shop-color-picker` element in your HTML. This element accepts a `value` attribute to set the value of the color. 
The values can be HEX, HEX with Alpha, RGB, RGBA, HSL, HSLA.

```html
<shop-color-picker><shop-color-picker>

// or with some value
<shop-color-picker value="#FF55A7"><shop-color-picker>
```

## Demos
You can play with the color picker at the top of this page or checkout the following links to play in the sandbox.

[No Framework](https://codesandbox.io/s/shop-color-picker-yv4p3)

[Svelet example](https://codesandbox.io/s/shop-color-picker-svelte-cx8hf)

[Vue example](https://codesandbox.io/s/shop-color-picker-vue-3m9n6)

[React example](https://codesandbox.io/s/shop-color-picker-react-ctt32)

## Properties and Attributes

#### value
The value can be set on the element as a property or as an attribute to the node. The values can be HEX, HEX with Alpha, RGB, RGBA, HSL, HSLA.

```javascript
const picker = document.querySelector('shop-color-picker');
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
const picker = document.querySelector('shop-color-picker');
picker.addEventListener('change', () => {
  console.log(`Color changed to ${picker.value}`);
});
```

## License & Source
The source code is available [on Github](https://github.com/pshihn/every-color-picker) under the [MIT License](https://github.com/pshihn/every-color-picker/blob/master/LICENSE). You can sponsor this project [Github Sponsors](https://github.com/sponsors/pshihn).