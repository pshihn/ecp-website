---
layout: cp-layout.njk
title: Dino Color Picker
description: This color picker is inspired by the color picker in Chrome Dev Tools.
script: /scripts/dino-color-picker.js
element: dino-color-picker
size: 5.66 KB
date: 2020-01-02
tags: ['pickers']
---

# Dino Color Picker

A color picker inspired by Chrome's Dev Tools. One can toggle between HSLA, RGBA, and Hex Values. 

## Installation 
This color picker is shipped as an ES Module. You can add it to your project via npm

```shell
npm install --save dino-color-picker
```

Or load the ES module directly

```html
<script type="module" src="https://unpkg.com/dino-color-picker"></script>
```

## Usage
Simply add the `dino-color-picker` element in your HTML. This element accepts a `value` attribute to set the value of the color. 
The values can be HEX, HEX with Alpha, RGB, RGBA, HSL, HSLA.

```html
<dino-color-picker><dino-color-picker>

// or with some value
<dino-color-picker value="#FF55A7"><dino-color-picker>
```

## Demos
You can play with the color picker at the top of this page or check out the following links to play in the sandbox.

[No Framework](https://codesandbox.io/s/dino-color-picker-ymlvm)

[Svelet example](https://codesandbox.io/s/dino-color-picker-svelte-mhc11)

[Vue example](https://codesandbox.io/s/dino-color-picker-vue-0x62j)

[React example](https://codesandbox.io/s/dino-color-picker-react-uf17d)

## Properties and Attributes

#### value
The value can be set on the element as a property or as an attribute to the node. The values can be HEX, HEX with Alpha, RGB, RGBA, HSL, HSLA.

```javascript
const picker = document.querySelector('dino-color-picker');
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
const picker = document.querySelector('dino-color-picker');
picker.addEventListener('change', () => {
  console.log(`Color changed to ${picker.value}`);
});
```

## License & Source
The source code is available [on Github](https://github.com/pshihn/every-color-picker) under the [MIT License](https://github.com/pshihn/every-color-picker/blob/master/LICENSE). You can sponsor this project via [Github Sponsors](https://github.com/sponsors/pshihn).