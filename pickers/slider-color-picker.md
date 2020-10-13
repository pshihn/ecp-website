---
layout: cp-layout.njk
title: Slider Color Picker
description: A simple color picker based on sliders.
script: /scripts/slider-color-picker.js
element: slider-color-picker
date: 2020-01-05
size: 3.9 KB
tags: ['pickers']
---

# Slider Color Picker

Thie color picker has two modes — HSBA and RGBA. Sliders control the Hue, Saturation, Brightness, or the Red, Green, and Blue values of the color along with the Alpha value (opacity).

## Installation 
This color picker is shipped as an ES Module. You can add it to your project via npm

```shell
npm install --save slider-color-picker
```

Or load the ES module directly

```html
<script type="module" src="https://unpkg.com/slider-color-picker"></script>
```

## Usage
Simply add the `slider-color-picker` element in your HTML. This element accepts a `value` attribute to set the value of the color. 
The values can be HEX, HEX with Alpha, RGB, RGBA, HSL, HSLA.

```html
<slider-color-picker><slider-color-picker>

// RGB sliders with some initial value
<slider-color-picker mode="rgba" value="#FF55A7"><slider-color-picker>
```

## Demos
You can play with the color picker at the top of this page or check out the following links to play in the sandbox.

[No Framework](https://codesandbox.io/s/slider-color-picker-q6bp4)

[Svelet example](https://codesandbox.io/s/slider-color-picker-svelte-zs2wp)

[Vue example](https://codesandbox.io/s/slider-color-picker-vue-pyzbd)

[React example](https://codesandbox.io/s/slider-color-picker-react-256yc)

## Properties and Attributes

#### mode
The mode can be set as a property or an attribute. It accepts two values: `rgba` and `hsba`. This determines if the sliders represent the parameters in the HSB color space or the RGB color space.

#### value
The value can be set on the element as a property or as an attribute to the node. The values can be HEX, HEX with Alpha, RGB, RGBA, HSL, HSLA.

```javascript
const picker = document.querySelector('slider-color-picker');
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
const picker = document.querySelector('slider-color-picker');
picker.addEventListener('change', () => {
  console.log(`Color changed to ${picker.value}`);
});
```

## License & Source
The source code is available [on Github](https://github.com/pshihn/every-color-picker) under the [MIT License](https://github.com/pshihn/every-color-picker/blob/master/LICENSE). You can sponsor this project via [Github Sponsors](https://github.com/sponsors/pshihn).