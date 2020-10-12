---
layout: cp-layout.njk
title: Disk Color Picker
description: A color wheel based color picker
script: https://unpkg.com/disk-color-picker
element: disk-color-picker
size: 4.24 KB
tags: ['pickers']
---

# Disk Color Picker

Move the cursor on the color wheel to select the Hue and Saturation. The farther from the center, the higher the saturation. The arc below the color wheel selects the Luminance value of the color.

## Installation 
This color picker is shipped as an ES Module. You can add it to your project via npm

```shell
npm install --save disk-color-picker
```

Or load the ES module directly

```html
<script type="module" src="https://unpkg.com/disk-color-picker"></script>
```

## Usage
Simply add the `disk-color-picker` element in your HTML. This element accepts a `value` attribute to set the value of the color. 
The values can be HEX, HEX with Alpha, RGB, RGBA, HSL, HSLA.

```html
<disk-color-picker><disk-color-picker>

// or with some value
<disk-color-picker value="#FF55A7"><disk-color-picker>
```

## Demos
You can play with the color picker at the top of this page or check out the following links to play in the sandbox.

[No Framework](https://codesandbox.io/s/disk-color-picker-njyw5)

[Svelet example](https://codesandbox.io/s/disk-color-picker-svelte-q5v8m)

[Vue example](https://codesandbox.io/s/disk-color-picker-vue-lso2g)

[React example](https://codesandbox.io/s/disk-color-picker-react-vgonl)

## Properties and Attributes

#### value
The value can be set on the element as a property or as an attribute to the node. The values can be HEX, HEX with Alpha, RGB, RGBA, HSL, HSLA.

```javascript
const picker = document.querySelector('disk-color-picker');
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
const picker = document.querySelector('disk-color-picker');
picker.addEventListener('change', () => {
  console.log(`Color changed to ${picker.value}`);
});
```

## License & Source
The source code is available [on Github](https://github.com/pshihn/every-color-picker) under the [MIT License](https://github.com/pshihn/every-color-picker/blob/master/LICENSE). You can sponsor this project [Github Sponsors](https://github.com/sponsors/pshihn).