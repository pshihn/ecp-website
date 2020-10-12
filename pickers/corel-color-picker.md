---
layout: cp-layout.njk
title: Corel Color Picker
description: This color picker is inspired by the color picker in Corel Paint. 
script: https://unpkg.com/corel-color-picker
element: corel-color-picker
tags: ['pickers']
---

# Corel Color Picker

A HSL based color picker inspired by Corel Paint. The outer color wheel sets the Hue of the color. The pointer on the inscribed triangle sets the saturation and brightness of the color. 

## Installation 
This color picker is shipped as an ES Module. You can add it to your project via npm

```shell
npm install --save corel-color-picker
```

Or load the ES module directly

```html
<script type="module" src="https://unpkg.com/corel-color-picker"></script>
```

## Usage
Simply add the `corel-color-picker` element in your HTML. This element accepts a `value` attribute to set the value of the color. 
The values can be HEX, HEX with Alpha, RGB, RGBA, HSL, HSLA.

```html
<corel-color-picker><corel-color-picker>

// or with some value
<corel-color-picker value="#FF55A7"><corel-color-picker>
```

## Demos
You can play with the color picker at the top of this page or checkout the following links to play in the sandbox.

[No Framework](https://codesandbox.io/s/corel-color-picker-k6t1i)

[Svelet example](https://codesandbox.io/s/corel-color-picker-svelte-elqk3)

[Vue example](https://codesandbox.io/s/corel-color-picker-vue-tmndw)

[React example](https://codesandbox.io/s/corel-color-picker-react-vpxex)

## Properties and Attributes

#### value
The value can be set on the element as a property or as an attribute to the node. The values can be HEX, HEX with Alpha, RGB, RGBA, HSL, HSLA.

```javascript
const picker = document.querySelector('corel-color-picker');
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
const picker = document.querySelector('corel-color-picker');
picker.addEventListener('change', () => {
  console.log(`Color changed to ${picker.value}`);
});
```

## License & Source
The source code is available [on Github](https://github.com/pshihn/every-color-picker) under the [MIT License](https://github.com/pshihn/every-color-picker/blob/master/LICENSE). You can sponsor this project [Github Sponsors](https://github.com/sponsors/pshihn).