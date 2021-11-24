function t(t,e,n){t.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:n}))}class e extends HTMLElement{constructor(){super(),this.__n=new Map,this.root=this.attachShadow({mode:"open"})}static get observedAttributes(){return["value"]}attributeChangedCallback(t,e,n){"value"===t&&(this.value=n)}$(t){if(this.__n.has(t))return this.__n.get(t);const e=this.root.querySelector("#"+t);return this.__n.set(t,e),e}$add(t,e,n){"string"==typeof t&&(t=this.$(t)),t&&t.addEventListener(e,n)}$remove(t,e,n){"string"==typeof t&&(t=this.$(t)),t&&t.removeEventListener(e,n)}fire(e,n){t(this,e,n)}disconnectedCallback(){this.__n.clear()}}class n{constructor(t){this.__n=new Map,this.e=t,this.root=this.e.attachShadow({mode:"open"})}$(t){if(this.__n.has(t))return this.__n.get(t);const e=this.root.querySelector("#"+t);return this.__n.set(t,e),e}$add(t,e,n){"string"==typeof t&&(t=this.$(t)),t&&t.addEventListener(e,n)}$remove(t,e,n){"string"==typeof t&&(t=this.$(t)),t&&t.removeEventListener(e,n)}detach(){this.__n.clear()}fire(e,n){t(this.e,e,n)}}const s="\ninput[type=range] {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  margin: 0;\n  -webkit-appearance: none;\n  background: transparent;\n  outline: none;\n  position: relative;\n  pointer-events: auto;\n  display: block;\n}\ninput[type=range]:focus {\n  outline: none;\n}\ninput[type=range]::-ms-track {\n  width: 100%;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\ninput[type=range]::-moz-focus-outer {\n  outline: none;\n  border: 0;\n}\ninput[type=range]::-moz-range-thumb {\n  border-radius: 50px;\n  background: var(--thumb-color, #ffffff);\n  cursor: pointer;\n  box-shadow: 0 0 4px -1px rgba(0,0,0,0.5);\n  border: 2px solid #fff;\n  margin: 0;\n  height: 20px;\n  width: 20px;\n  transform: scale(0.9);\n  transition: transform 0.18s ease;\n}\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border-radius: 50px;\n  background: var(--thumb-color, #ffffff);\n  cursor: pointer;\n  box-shadow: 0 0 4px -1px rgba(0,0,0,0.5);\n  height: 22px;\n  width: 22px;\n  margin: 0;\n  border: 2px solid #fff;\n  transform: scale(0.9);\n  transition: transform 0.18s ease;\n}\ninput[type=range]:focus::-moz-range-thumb {\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);\n  transform: scale(1);\n}\ninput[type=range]:focus::-webkit-slider-thumb {\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);\n  transform: scale(1);\n}\n";class i extends n{constructor(t){super(t),this.handleInput=t=>{t.stopPropagation(),this.fire("range",{value:this.value})},this.root.innerHTML=`\n    <style>\n      ${s}\n      :host {\n        --thumb-color: transparent;\n      }\n      #container {\n        width: 100%;\n        box-sizing: border-box;\n        height: 12px;\n        border-radius: 12px;\n        position: relative;\n        pointer-events: none;\n      }\n      #gradient {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        pointer-events: none;\n        border-radius: 12px;\n        background-image: linear-gradient(to right, var(--alpha-g1, hsla(0, 100%, 50%, 0)), var(--alpha-g2, hsla(0, 100%, 50%, 1)));\n      }\n      #checker {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        pointer-events: none;\n        border-radius: 12px;\n        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAAAAABzHgM7AAAAF0lEQVR42mM4Awb/wYCBYg6EgghRzAEAWDWBGQVyKPMAAAAASUVORK5CYII=);\n        background-size: 12px 11px;\n      }\n    </style>\n    <div id="container">\n      <div id="checker"></div>\n      <div id="gradient" style=""></div>\n      <input id="range" type="range" min="0" max="100" value="100" aria-label="Alpha">\n    </div>\n    `,this.attach()}attach(){this.$add("range","input",this.handleInput)}detach(){this.$remove("range","input",this.handleInput),super.detach()}set hue(t){this.e.style.setProperty("--alpha-g1",`hsla(${t}, 100%, 50%, 0)`),this.e.style.setProperty("--alpha-g2",`hsla(${t}, 100%, 50%, 1)`)}set hsl(t){this.e.style.setProperty("--alpha-g1",`hsla(${t[0]}, ${t[1]}%, ${t[2]}%, 0)`),this.e.style.setProperty("--alpha-g2",`hsla(${t[0]}, ${t[1]}%, ${t[2]}%, 1)`)}get value(){const t=this.$("range");return t?+t.value/100:0}set value(t){const e=this.$("range");e&&(e.value=""+100*Math.max(0,Math.min(1,t)))}}const a=/^hsla\s*\(\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)%\s*,\s*(\d+.?\d*)%\s*,\s*(\d+.?\d*)\s*\)$/i,r=/^hsl\s*\(\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)%\s*,\s*(\d+.?\d*)%\s*\)$/i,h=/^rgba\s*\(\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)\s*\)$/i,o=/^rgb\s*\(\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)\s*\)$/i,d=t=>`hsl(${t[0]%360}, ${t[1]}%, ${t[2]}%)`;function c(t,e,n){t%=360,e/=100,n/=100;const s=(1-Math.abs(2*n-1))*e,i=s*(1-Math.abs(t/60%2-1)),a=n-s/2;let r=0,h=0,o=0;return[r,h,o]=t<60?[s,i,0]:t<120?[i,s,0]:t<180?[0,s,i]:t<240?[0,i,s]:t<300?[i,0,s]:[s,0,i],[Math.round(255*(r+a)),Math.round(255*(h+a)),Math.round(255*(o+a))]}function l(t){const[e,n,s,i]=t,a=(2-n/100)*s/2,r=a<50?2*a:200-2*a,h=r?n*s/r:0;return[e,Math.round(h),Math.round(a),i]}function u(t){const[e,n,s,i]=t,a=n*(s<50?s:100-s)/100;return[e,Math.round(s+a?200*a/(s+a):0),Math.round(a+s),i]}function g(t,e,n){t/=255,e/=255,n/=255;const s=Math.max(t,e,n),i=Math.min(t,e,n),a=s-i;let r=0;0===a?r=0:s===t?r=(e-n)/a%6*60:s===e?r=60*((n-t)/a+2):s===n&&(r=60*((t-e)/a+4));const h=(s+i)/2,o=0===a?0:a/(1-Math.abs(2*h-1));return[Math.round((360+r)%360),Math.round(100*o),Math.round(100*h)]}function p(t,e,n,s){s=Math.round(255*s);let i=Math.round(t).toString(16),a=Math.round(e).toString(16),r=Math.round(n).toString(16),h=s.toString(16);return 1===i.length&&(i="0"+i),1===a.length&&(a="0"+a),1===r.length&&(r="0"+r),1===h.length&&(h="0"+h),(255===s?`#${i}${a}${r}`:`#${i}${a}${r}${h}`).toUpperCase()}function b(t){const[e,n,s,i]=l(t),[a,r,h]=c(e,n,s);return[a,r,h,i]}function v(t){const[e,n,s,i]=t,[a,r,h]=g(e,n,s);return u([a,r,h,i])}class x extends n{constructor(t,e){super(t),this._mode="h",this._c=[0,97,59,1],this.handleInput=t=>{t.stopPropagation();const e=+this.$("range").value;this.updateThumb(),this.fire("range",{value:e})},this._mode=e,this.root.innerHTML=`\n    <style>\n      ${s}\n      #container {\n        width: 100%;\n        box-sizing: border-box;\n        height: 12px;\n        border-radius: 12px;\n        position: relative;\n        pointer-events: none;\n      }\n      #gradient {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        pointer-events: none;\n        border-radius: 12px;\n        background-image: var(--gc-gradient);\n        border: 1px solid #e5e5e5;\n      }\n    </style>\n    <div id="container">\n      <div id="gradient"></div>\n      <input id="range" type="range" min="0" max="360" value="0">\n    </div>\n    `,this.attach()}attach(){this.$add("range","input",this.handleInput),this.setMode(this._mode,0,!0),this.updateThumb()}detach(){this.$remove("range","input",this.handleInput),super.detach()}get value(){const t=this.$("range");return t?+t.value:0}set value(t){const e=this.$("range"),n=this.value;e&&n!==t&&(t<0?e.value="0":t>+e.max?e.value=e.max:e.value=""+t,this.updateThumb())}setMode(t,e,n){const s=this.$("range");if(n||this._mode!==t){switch(this._mode=t,t){case"h":s.max="360";break;case"s":case"v":s.max="100";break;case"r":case"g":case"b":s.max="255"}s.setAttribute("aria-label",t+" value"),this.updateGradient()}this.value=e}set color(t){this._c=[...t],this.updateGradient(),this.updateThumb()}updateGradient(){let t="";const[e,n,s]=this._c;switch(this._mode){case"h":t="linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(0, 100%, 50%))";break;case"s":{const n=l([e,0,s,1]),i=l([e,100,s,1]);t=`linear-gradient(to right, ${d(n)}, ${d(i)})`;break}case"v":{const s=l([e,n,0,1]),i=l([e,n,100,1]);t=`linear-gradient(to right, ${d(s)}, ${d(i)})`;break}case"r":t=`linear-gradient(to right, rgb(0, ${this._c[1]}, ${this._c[2]}), rgb(255, ${this._c[1]}, ${this._c[2]}))`;break;case"g":t=`linear-gradient(to right, rgb(${this._c[0]}, 0, ${this._c[2]}), rgb(${this._c[0]}, 255, ${this._c[2]}))`;break;case"b":t=`linear-gradient(to right, rgb(${this._c[0]}, ${this._c[1]}, 0), rgb(${this._c[0]}, ${this._c[1]}, 255))`}this.e.style.setProperty("--gc-gradient",t)}updateThumb(){const t=this.$("range");if(t){const e=+t.value;let n="";switch(this._mode){case"h":n=`hsl(${e}, 100%, 50%)`;break;case"s":n=d(l([this._c[0],e,this._c[2],1]));break;case"v":n=d(l([this._c[0],this._c[1],e,1]));break;case"r":n=`rgb(${e}, ${this._c[1]}, ${this._c[2]})`;break;case"g":n=`rgb(${this._c[0]}, ${e}, ${this._c[2]})`;break;case"b":n=`rgb(${this._c[0]}, ${this._c[1]}, ${e})`}this.e.style.setProperty("--thumb-color",n)}}}class $ extends e{constructor(){super(),this._hsva=[0,100,100,1],this._rgba=[255,0,0,1],this._mode="hsba",this.gcs=[],this.onTextInputChange=()=>{const t=[+this.$("in1").value,+this.$("in2").value,+this.$("in3").value,+this.$("in4").value];switch(this._mode){case"hsba":this._hsva=t,this._rgba=b(t);break;case"rgba":this._rgba=t,this._hsva=v(t)}this.deferredUpdateUi(),this._fire()},this.onColorChange=()=>{if(this.gcs.length&&this.alphaC){const t=[this.gcs[0].value,this.gcs[1].value,this.gcs[2].value,this.alphaC.value];switch(this._mode){case"hsba":this._hsva=t,this._rgba=b(this._hsva);break;case"rgba":this._rgba=t,this._hsva=v(this._rgba)}}this.deferredUpdateUi(),this._fire()},this._deferred=!1,this.root.innerHTML='\n    <style>\n      \n* {box-sizing: border-box;}\n.horizontal {display: flex; flex-direction: row;}\n.vertical {display: flex; flex-direction: column;}\n.center {align-items: center;}\n.flex {flex: 1;}\n\n      label {display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; user-select: none;}\n      :host {\n        display: inline-block;\n        touch-action: none;\n        width: 224px;\n        padding: 8px;\n      }\n      #grid {\n        grid-gap: var(--bar-vertical-gap, 10px) 8px;\n        display: grid;\n        grid-template-columns: auto 1fr auto;\n        align-items: center;\n      }\n      input[type="number"] {\n        text-align: center;\n        border-radius: 0;\n        border: none;\n        border-bottom: 1px solid #d8d8d8;\n        outline: none;\n        font-size: 11px;\n        letter-spacing: 0.5px;\n        padding: 2px 2px 4px;\n        margin-bottom: 4px;\n        font-family: inherit;\n        width: 32px;\n        background: none;\n      }\n      input[type="number"]:focus {\n        border-color: var(--focus-ring-color, #000);\n      }\n      input::-webkit-outer-spin-button,\n      input::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n      }\n      input[type=number] {\n        -moz-appearance:textfield;\n      }\n    </style>\n    <div id="grid">\n      <label id="l1">H</label>\n      <div id="p1"></div>\n      <input id="in1" type="number">\n      <label  id="l2">S</label>\n      <div id="p2"></div>\n      <input id="in2" type="number">\n      <label id="l3">B</label>\n      <div id="p3"></div>\n      <input id="in3" type="number">\n      <label>A</label>\n      <div id="p4"></div>\n      <input id="in4" type="number" min="0" max="1" step="0.1">\n    </div>\n    '}static get observedAttributes(){return["value","mode"]}attributeChangedCallback(t,e,n){"mode"===t?this.mode=n:super.attributeChangedCallback(t,e,n)}connectedCallback(){this.gcs=[];for(let t=0;t<3;t++){const e=this.$("p"+(t+1));this.gcs.push(new x(e,"h"))}const t=this.$("p4");this.alphaC=new i(t),this.$add("grid","change",this.onTextInputChange),this.$add("grid","range",this.onColorChange),this.mode=this._mode,this.deferredUpdateUi()}disconnectedCallback(){this.gcs.forEach((t=>t.detach())),this.gcs=[],this.alphaC&&(this.alphaC.detach(),this.alphaC=void 0),this.$remove("grid","change",this.onTextInputChange),this.$remove("grid","range",this.onColorChange),super.disconnectedCallback()}set mode(t){if(this._mode=t,this.gcs.length)switch(t){case"hsba":{const[t,e,n]=this._hsva;this.gcs[0].setMode("h",t),this.gcs[1].setMode("s",e),this.gcs[2].setMode("v",n),["H","S","B"].forEach(((t,e)=>this.$("l"+(e+1)).textContent=t));break}case"rgba":{const[t,e,n]=this._rgba;this.gcs[0].setMode("r",t),this.gcs[1].setMode("g",e),this.gcs[2].setMode("b",n),["R","G","B"].forEach(((t,e)=>this.$("l"+(e+1)).textContent=t));break}}}deferredUpdateUi(){this._deferred||(this._deferred=!0,requestAnimationFrame((()=>{try{if(this.gcs.length&&this.alphaC){switch(this._mode){case"hsba":{const[t,e,n,s]=this._hsva;this.gcs[0].value=t,this.gcs[1].value=e,this.gcs[2].value=n,this.alphaC.value=s,this.gcs.forEach(((t,e)=>{t.color=this._hsva,this.$("in"+(e+1)).value=""+t.value}));break}case"rgba":{const[t,e,n,s]=this._rgba;this.gcs[0].value=t,this.gcs[1].value=e,this.gcs[2].value=n,this.alphaC.value=s,this.gcs.forEach(((t,e)=>{t.color=this._rgba,this.$("in"+(e+1)).value=""+t.value}));break}}this.alphaC.hsl=l(this._hsva),this.$("in4").value=""+this.alphaC.value}}finally{this._deferred=!1}})))}_fire(){this.fire("change")}get hsl(){return l(this._hsva)}get rgb(){return[...this._rgba]}get value(){return p(...this.rgb)}set value(t){const e=function(t){let e=(t=t.trim()).match(a);if(e){const t=+e[1],n=+e[2],s=+e[3],i=+e[4],[a,r,h]=c(t,n,s);return{hex:p(a,r,h,i),hsla:[t,n,s,i],rgba:[a,r,h,i]}}if(e=t.match(r),e){const t=+e[1],n=+e[2],s=+e[3],[i,a,r]=c(t,n,s);return{hex:p(i,a,r,1),hsla:[t,n,s,1],rgba:[i,a,r,1]}}if(e=t.match(h),e){const t=+e[1],n=+e[2],s=+e[3],i=+e[4],[a,r,h]=g(t,n,s);return{hex:p(t,n,s,i),hsla:[a,r,h,i],rgba:[t,n,s,i]}}if(e=t.match(o),e){const t=+e[1],n=+e[2],s=+e[3],[i,a,r]=g(t,n,s);return{hex:p(t,n,s,1),hsla:[i,a,r,1],rgba:[t,n,s,1]}}let n=t;const s=n.lastIndexOf("#");s>=0&&(n=n.substring(s+1));const i=function(t){switch(t.length){case 3:return[+`0x${t[0]}${t[0]}`,+`0x${t[1]}${t[1]}`,+`0x${t[2]}${t[2]}`,1];case 4:return[+`0x${t[0]}${t[0]}`,+`0x${t[1]}${t[1]}`,+`0x${t[2]}${t[2]}`,+`0x${t[3]}${t[3]}`/255];case 6:return[+`0x${t[0]}${t[1]}`,+`0x${t[2]}${t[3]}`,+`0x${t[4]}${t[5]}`,1];case 8:return[+`0x${t[0]}${t[1]}`,+`0x${t[2]}${t[3]}`,+`0x${t[4]}${t[5]}`,+`0x${t[6]}${t[7]}`/255]}return null}(n);if(i){const[t,e,n,s]=i;if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(s))return null;const[a,r,h]=g(t,e,n);return{hex:p(t,e,n,s),hsla:[a,r,h,s],rgba:[t,e,n,s]}}return null}(t);e&&(this._hsva=u(e.hsla),this._rgba=[...e.rgba],this.deferredUpdateUi())}}customElements.define("slider-color-picker",$);export{$ as SliderColorPicker};
