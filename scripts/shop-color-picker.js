function t(t,e,n){t.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:n}))}class e extends HTMLElement{constructor(){super(),this.__n=new Map,this.root=this.attachShadow({mode:"open"})}static get observedAttributes(){return["value"]}attributeChangedCallback(t,e,n){"value"===t&&(this.value=n)}$(t){if(this.__n.has(t))return this.__n.get(t);const e=this.root.querySelector("#"+t);return this.__n.set(t,e),e}$add(t,e,n){"string"==typeof t&&(t=this.$(t)),t&&t.addEventListener(e,n)}$remove(t,e,n){"string"==typeof t&&(t=this.$(t)),t&&t.removeEventListener(e,n)}fire(e,n){t(this,e,n)}disconnectedCallback(){this.__n.clear()}}const n=/^hsla\s*\(\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)%\s*,\s*(\d+.?\d*)%\s*,\s*(\d+.?\d*)\s*\)$/i,i=/^hsl\s*\(\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)%\s*,\s*(\d+.?\d*)%\s*\)$/i,s=/^rgba\s*\(\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)\s*\)$/i,r=/^rgb\s*\(\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)\s*\)$/i,h=t=>`hsla(${t[0]%360}, ${t[1]}%, ${t[2]}%, ${t[3]})`,a=t=>`hsl(${t[0]%360}, ${t[1]}%, ${t[2]}%)`;function o(t,e,n){t%=360,e/=100,n/=100;const i=(1-Math.abs(2*n-1))*e,s=i*(1-Math.abs(t/60%2-1)),r=n-i/2;let h=0,a=0,o=0;return[h,a,o]=t<60?[i,s,0]:t<120?[s,i,0]:t<180?[0,i,s]:t<240?[0,s,i]:t<300?[s,0,i]:[i,0,s],[Math.round(255*(h+r)),Math.round(255*(a+r)),Math.round(255*(o+r))]}function c(t){const[e,n,i,s]=t,r=(2-n/100)*i/2,h=r<50?2*r:200-2*r,a=h?n*i/h:0;return[e,Math.round(a),Math.round(r),s]}function d(t){const[e,n,i,s]=t,r=n*(i<50?i:100-i)/100;return[e,Math.round(i+r?200*r/(i+r):0),Math.round(r+i),s]}function l(t,e,n){t/=255,e/=255,n/=255;const i=Math.max(t,e,n),s=Math.min(t,e,n),r=i-s;let h=0;0===r?h=0:i===t?h=(e-n)/r%6*60:i===e?h=60*((n-t)/r+2):i===n&&(h=60*((t-e)/r+4));const a=(i+s)/2,o=0===r?0:r/(1-Math.abs(2*a-1));return[Math.round((360+h)%360),Math.round(100*o),Math.round(100*a)]}function u(t,e,n,i){i=Math.round(255*i);let s=Math.round(t).toString(16),r=Math.round(e).toString(16),h=Math.round(n).toString(16),a=i.toString(16);return 1===s.length&&(s="0"+s),1===r.length&&(r="0"+r),1===h.length&&(h="0"+h),1===a.length&&(a="0"+a),(255===i?`#${s}${r}${h}`:`#${s}${r}${h}${a}`).toUpperCase()}function p(t){const[e,n,i,s]=c(t),[r,h,a]=o(e,n,i);return[r,h,a,s]}function b(t){const[e,n,i,s]=t,[r,h,a]=l(e,n,i);return d([r,h,a,s])}class g extends class{constructor(t){this.__n=new Map,this.e=t,this.root=this.e.attachShadow({mode:"open"})}$(t){if(this.__n.has(t))return this.__n.get(t);const e=this.root.querySelector("#"+t);return this.__n.set(t,e),e}$add(t,e,n){"string"==typeof t&&(t=this.$(t)),t&&t.addEventListener(e,n)}$remove(t,e,n){"string"==typeof t&&(t=this.$(t)),t&&t.removeEventListener(e,n)}detach(){this.__n.clear()}fire(e,n){t(this.e,e,n)}}{constructor(t,e){super(t),this._mode="h",this._c=[0,97,59,1],this.handleInput=t=>{t.stopPropagation();const e=+this.$("range").value;this.updateThumb(),this.fire("range",{value:e})},this._mode=e,this.root.innerHTML='\n    <style>\n      \ninput[type=range] {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  margin: 0;\n  -webkit-appearance: none;\n  background: transparent;\n  outline: none;\n  position: relative;\n  pointer-events: auto;\n  display: block;\n}\ninput[type=range]:focus {\n  outline: none;\n}\ninput[type=range]::-ms-track {\n  width: 100%;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\ninput[type=range]::-moz-focus-outer {\n  outline: none;\n  border: 0;\n}\ninput[type=range]::-moz-range-thumb {\n  border-radius: 50px;\n  background: var(--thumb-color, #ffffff);\n  cursor: pointer;\n  box-shadow: 0 0 4px -1px rgba(0,0,0,0.5);\n  border: 2px solid #fff;\n  margin: 0;\n  height: 20px;\n  width: 20px;\n  transform: scale(0.9);\n  transition: transform 0.18s ease;\n}\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border-radius: 50px;\n  background: var(--thumb-color, #ffffff);\n  cursor: pointer;\n  box-shadow: 0 0 4px -1px rgba(0,0,0,0.5);\n  height: 22px;\n  width: 22px;\n  margin: 0;\n  border: 2px solid #fff;\n  transform: scale(0.9);\n  transition: transform 0.18s ease;\n}\ninput[type=range]:focus::-moz-range-thumb {\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);\n  transform: scale(1);\n}\ninput[type=range]:focus::-webkit-slider-thumb {\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);\n  transform: scale(1);\n}\n\n      #container {\n        width: 100%;\n        box-sizing: border-box;\n        height: 12px;\n        border-radius: 12px;\n        position: relative;\n        pointer-events: none;\n      }\n      #gradient {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        pointer-events: none;\n        border-radius: 12px;\n        background-image: var(--gc-gradient);\n        border: 1px solid #e5e5e5;\n      }\n    </style>\n    <div id="container">\n      <div id="gradient"></div>\n      <input id="range" type="range" min="0" max="360" value="0">\n    </div>\n    ',this.attach()}attach(){this.$add("range","input",this.handleInput),this.setMode(this._mode,0,!0),this.updateThumb()}detach(){this.$remove("range","input",this.handleInput),super.detach()}get value(){const t=this.$("range");return t?+t.value:0}set value(t){const e=this.$("range"),n=this.value;e&&n!==t&&(t<0?e.value="0":t>+e.max?e.value=e.max:e.value=""+t,this.updateThumb())}setMode(t,e,n){const i=this.$("range");if(n||this._mode!==t){switch(this._mode=t,t){case"h":i.max="360";break;case"s":case"v":i.max="100";break;case"r":case"g":case"b":i.max="255"}i.setAttribute("aria-label",t+" value"),this.updateGradient()}this.value=e}set color(t){this._c=[...t],this.updateGradient(),this.updateThumb()}updateGradient(){let t="";const[e,n,i]=this._c;switch(this._mode){case"h":t="linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(0, 100%, 50%))";break;case"s":{const n=c([e,0,i,1]),s=c([e,100,i,1]);t=`linear-gradient(to right, ${a(n)}, ${a(s)})`;break}case"v":{const i=c([e,n,0,1]),s=c([e,n,100,1]);t=`linear-gradient(to right, ${a(i)}, ${a(s)})`;break}case"r":t=`linear-gradient(to right, rgb(0, ${this._c[1]}, ${this._c[2]}), rgb(255, ${this._c[1]}, ${this._c[2]}))`;break;case"g":t=`linear-gradient(to right, rgb(${this._c[0]}, 0, ${this._c[2]}), rgb(${this._c[0]}, 255, ${this._c[2]}))`;break;case"b":t=`linear-gradient(to right, rgb(${this._c[0]}, ${this._c[1]}, 0), rgb(${this._c[0]}, ${this._c[1]}, 255))`}this.e.style.setProperty("--gc-gradient",t)}updateThumb(){const t=this.$("range");if(t){const e=+t.value;let n="";switch(this._mode){case"h":n=`hsl(${e}, 100%, 50%)`;break;case"s":n=a(c([this._c[0],e,this._c[2],1]));break;case"v":n=a(c([this._c[0],this._c[1],e,1]));break;case"r":n=`rgb(${e}, ${this._c[1]}, ${this._c[2]})`;break;case"g":n=`rgb(${this._c[0]}, ${e}, ${this._c[2]})`;break;case"b":n=`rgb(${this._c[0]}, ${this._c[1]}, ${e})`}this.e.style.setProperty("--thumb-color",n)}}}function m(t){let e=-1;return self.Touch&&t instanceof Touch?e=t.identifier:v(t)&&(e=t.pointerId),{id:e,nativeEvent:t,clientX:t.clientX,clientY:t.clientY}}const v=t=>self.PointerEvent&&t instanceof PointerEvent;class x{constructor(t,e){this.startPointers=[],this.currentPointers=[],this.pointerStart=t=>{if(0===t.button&&this.triggerPointerStart(m(t),t))if(v(t)){(t.target&&"setPointerCapture"in t.target?t.target:this._e).setPointerCapture(t.pointerId),this.ael("pointermove",this.move),this.ael("pointerup",this.pointerEnd),this.ael("pointercancel",this.pointerEnd)}else window.addEventListener("mousemove",this.move),window.addEventListener("mouseup",this.pointerEnd)},this.touchStart=t=>{for(const e of Array.from(t.changedTouches))this.triggerPointerStart(m(e),t)},this.move=t=>{const e="changedTouches"in t?Array.from(t.changedTouches).map((t=>m(t))):[m(t)],n=[];for(const t of e){const e=this.currentPointers.findIndex((e=>e.id===t.id));-1!==e&&(n.push(t),this.currentPointers[e]=t)}0!==n.length&&this._h.onMove(n,t)},this._end=(t,e)=>{const n=this.currentPointers.findIndex((e=>e.id===t.id));return-1!==n&&(this.currentPointers.splice(n,1),this.startPointers.splice(n,1),this._h.onEnd&&this._h.onEnd(t,e,"touchcancel"===e.type||"pointercancel"===e.type),!0)},this.pointerEnd=t=>{if(this._end(m(t),t))if(v(t)){if(this.currentPointers.length)return;this.rel("pointermove",this.move),this.rel("pointerup",this.pointerEnd),this.rel("pointercancel",this.pointerEnd)}else window.removeEventListener("mousemove",this.move),window.removeEventListener("mouseup",this.pointerEnd)},this.touchEnd=t=>{for(const e of Array.from(t.changedTouches))this._end(m(e),t)},this._e=t,this._h=e,self.PointerEvent?this.ael("pointerdown",this.pointerStart):(this.ael("mousedown",this.pointerStart),this.ael("touchstart",this.touchStart),this.ael("touchmove",this.move),this.ael("touchend",this.touchEnd),this.ael("touchcancel",this.touchEnd))}ael(t,e){this._e.addEventListener(t,e)}rel(t,e){this._e.removeEventListener(t,e)}stop(){this.rel("pointerdown",this.pointerStart),this.rel("mousedown",this.pointerStart),this.rel("touchstart",this.touchStart),this.rel("touchmove",this.move),this.rel("touchend",this.touchEnd),this.rel("touchcancel",this.touchEnd),this.rel("pointermove",this.move),this.rel("pointerup",this.pointerEnd),this.rel("pointercancel",this.pointerEnd),window.removeEventListener("mousemove",this.move),window.removeEventListener("mouseup",this.pointerEnd)}triggerPointerStart(t,e){return!!this._h.onStart(t,e)&&(this.currentPointers.push(t),this.startPointers.push(t),!0)}}class f{constructor(t,e){this.anchor=[0,0,0,0],this.p=[0,0],this.pAnchor=[0,0],this.e=t,e&&(this.p=this.clamp(e)),this.tracker=new x(this.e,this)}get position(){return this.p}set position(t){this.p=this.clamp(t)}clamp(t){return[Math.max(0,Math.min(1,t[0])),Math.max(0,Math.min(1,t[1]))]}onStart(t,e){e.preventDefault();const n=this.e.getBoundingClientRect();this.anchor=[n.left||n.x,n.top||n.y,n.width,n.height];const i=this.anchor[2],s=this.anchor[3],r=i?(t.clientX-this.anchor[0])/i:0,h=s?(t.clientY-this.anchor[1])/s:0;return this.setPosition(r,h),this.pAnchor=[...this.p],this.e.style.cursor="pointer",!0}onMove(t){const e=t[0];if(e){const t=this.anchor[2],n=this.anchor[3],i=t?(e.clientX-this.anchor[0])/t:0,s=n?(e.clientY-this.anchor[1])/n:0;this.setPosition(i,s)}}onEnd(t,e,n){this.e.style.cursor="",n&&this.setPosition(...this.pAnchor)}moveBy(t,e){const{width:n,height:i}=this.e.getBoundingClientRect();if(n&&i){let[s,r]=this.position;s+=t/n,r+=e/i,this.setPosition(s,r)}}setPosition(t,e){const[n,i]=this.clamp([t,e]);return(n!==this.p[0]||i!==this.p[1])&&(this.p=[n,i],this.fire(),!0)}fire(){this.e.dispatchEvent(new CustomEvent("p-input",{bubbles:!0,composed:!0,detail:[...this.p]}))}detach(){this.tracker.stop()}}const $="--shop-base-gradient";function _(t,e){return`linear-gradient(to bottom, ${t} 0%, ${e} 100%)`}function y(t,e){return`linear-gradient(to right, ${t} 0%, ${e} 100%)`}function w(t,e){const n=c([0,t,e,1]),i=n[1],s=n[2];return`linear-gradient(to right, hsl(0, ${i}%, ${s}%), hsl(60, ${i}%, ${s}%), hsl(120, ${i}%, ${s}%), hsl(180, ${i}%, ${s}%), hsl(240, ${i}%, ${s}%), hsl(300, ${i}%, ${s}%), hsl(0, ${i}%, ${s}%))`}class k extends e{constructor(){super(),this._hsv=[0,100,100,1],this._rgb=[255,0,0,1],this._hex="#ff0000",this.mode="h",this._cm=!1,this.onThumbFocus=()=>this.$("thumb").classList.add("focused"),this.onThumbBlur=()=>this.$("thumb").classList.remove("focused"),this.onThumbKeyDown=t=>{let e=!0;if(this.rc){switch(t.code){case"ArrowRight":this.rc.moveBy(5,0);break;case"ArrowLeft":this.rc.moveBy(-5,0);break;case"ArrowUp":this.rc.moveBy(0,-5);break;case"ArrowDown":this.rc.moveBy(0,5);break;case"Escape":this.$("triInput").blur();break;default:e=!1}}e&&(t.preventDefault(),t.stopPropagation())},this.onPlanarInput=()=>{this.$("thumbInput").focus();const[t,e]=this.rc.position;let n=!1;switch(this.mode){case"h":this._hsv[1]=Math.max(0,Math.min(100,Math.round(100*t))),this._hsv[2]=Math.max(0,Math.min(100,Math.round(100*(1-e)))),n=!0;break;case"s":this._hsv[0]=Math.max(0,Math.min(360,Math.round(360*t))),this._hsv[2]=Math.max(0,Math.min(100,Math.round(100*(1-e)))),n=!0;break;case"v":this._hsv[0]=Math.max(0,Math.min(360,Math.round(360*t))),this._hsv[1]=Math.max(0,Math.min(100,Math.round(100*(1-e)))),n=!0;break;case"r":this._rgb[2]=Math.max(0,Math.min(255,Math.round(255*t))),this._rgb[1]=Math.max(0,Math.min(255,Math.round(255*(1-e))));break;case"g":this._rgb[2]=Math.max(0,Math.min(255,Math.round(255*t))),this._rgb[0]=Math.max(0,Math.min(255,Math.round(255*(1-e))));break;case"b":this._rgb[0]=Math.max(0,Math.min(255,Math.round(255*t))),this._rgb[1]=Math.max(0,Math.min(255,Math.round(255*(1-e))))}n?this._rgb=p(this._hsv):this._hsv=b(this._rgb),this.updateColor(!1),this._fire()},this.onGradientChange=()=>{if(this.gc){const t=this.gc.value;let e=!1;switch(this.mode){case"h":this._hsv[0]=t,e=!0;break;case"s":this._hsv[1]=t,e=!0;break;case"v":this._hsv[2]=t,e=!0;break;case"r":this._rgb[0]=t;break;case"g":this._rgb[1]=t;break;case"b":this._rgb[2]=t}e?this._rgb=p(this._hsv):this._hsv=b(this._rgb),this.updateColor(!0),this._fire()}},this.root.innerHTML=`\n    <style>\n      \n* {box-sizing: border-box;}\n.horizontal {display: flex; flex-direction: row;}\n.vertical {display: flex; flex-direction: column;}\n.center {align-items: center;}\n.flex {flex: 1;}\n\n      label {display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; user-select: none;}\n      :host {\n        display: inline-block;\n        touch-action: none;\n        background: #ffffff;\n        box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n        padding: 16px;\n      }\n      #base {\n        position: relative;\n        width: var(--shop-cp-size, 280px);\n        height: var(--shop-cp-size, 280px);\n        background: var(${$});\n      }\n      #base1,\n      #base2 {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border: none;\n        background: var(${$});\n      }\n      #thumb {\n        position: absolute;\n        width: 40px;\n        height: 40px;\n        top: -20px;\n        left: -20px;\n        padding: 10px;\n        border-radius: 50%;\n        cursor: pointer;\n        overflow: hidden;\n      }\n      .knob {\n        position: relative;\n        width: 20px;\n        height: 20px;\n        border: 2px solid #fff;\n        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\n        border-radius: 50%;\n        background: var(--ecp-i-thumb-color);\n      }\n      #thumb::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border-radius: 50%;\n        opacity: 0.2;\n        background: var(--ecp-i-thumb-shadow-color);\n        pointer-events: none;\n        transform: scale(0);\n        transition: transform 0.18s ease;\n      }\n      #thumb.focused::before {\n        transform: scale(1);\n      }\n      #thumb input {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border: none;\n        cursor: pointer;\n        opacity: 0;\n      }\n      #inputGrid {\n        grid-gap: 6px;\n        display: grid;\n        grid-template-columns: auto auto 1fr;\n        align-items: center;\n        text-align: left;\n      }\n      input[type=text],\n      input[type=number] {\n        -moz-appearance:textfield;\n        width: 60px;\n        border-radius: 0;\n        border: 1px solid #d8d8d8;\n        outline: none;\n        font-size: 11px;\n        letter-spacing: 0.5px;\n        padding: 6px 4px;\n        font-family: inherit;\n        display: block;\n        margin: 0;\n      }\n      input::-webkit-outer-spin-button,\n      input::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n      }\n      input[type=text]:focus,\n      input[type=number]:focus {\n        border-color: var(--focus-ring-color, #000);\n      }\n      #preview {\n        border: 1px solid #e5e5e5;\n        margin-bottom: 16px;\n      }\n      #sliderPanel {\n        padding: 0 18px 0 12px;\n        width: 52px;\n      }\n      #slider {\n        transform: translate3d(-129px,134px,0) rotate(-90deg);\n        width: var(--shop-cp-size, 280px);\n      }\n      #container {\n        display: flex;\n        flex-direction: row;\n      }\n\n      #container.compact {\n        flex-direction: column;\n      }\n      .compact #sliderPanel {\n        padding: 18px 0;\n        width: 100%;\n      }\n      .compact #slider {\n        transform: none;\n      }\n      .compact #preview {\n        display: none;\n      }\n      .compact #inputGrid {\n        grid-template-columns: auto auto 1fr auto auto 1fr;\n      }\n    </style>\n    <div id="container" class="compact">\n      <div id="base">\n        <div id="base1"></div>\n        <div id="base2">\n          <div id="thumb">\n            <div class="knob"></div>\n            <input id="thumbInput" tabindex="1">\n          </div>\n        </div>\n      </div>\n      <div id="sliderPanel">\n        <div id="slider"></div>\n      </div>\n      <div class="vertical">\n        <div id="preview" class="flex"></div>\n        <div id="inputGrid">\n          <input title="Hue" type="radio" name="bartype" id="rH" checked  data-value="h">\n          <label title="Hue" for="rH">H</label>\n          <input title="Hue" id="inH" type="number">\n          <input title="Saturation" type="radio" name="bartype" id="rS" data-value="s">\n          <label title="Saturation" for="rS">S%</label>\n          <input title="Saturation" id="inS" type="number">\n          <input title="Brightness" type="radio" name="bartype" id="rV"  data-value="v">\n          <label title="Brightness" for="rV">B%</label>\n          <input title="Brightness" id="inV" type="number">\n          <input title="Red" type="radio" name="bartype" id="rR"  data-value="r">\n          <label title="Red" for="rR">R</label>\n          <input title="Red" id="inR" type="number">\n          <input title="Green" type="radio" name="bartype" id="rG"  data-value="g">\n          <label title="Green" for="rG">G</label>\n          <input title="Green" id="inG" type="number">\n          <input title="Blue" type="radio" name="bartype" id="rB"  data-value="b">\n          <label title="Blue" for="rB">B</label>\n          <input title="Blue" id="inB" type="number">\n          <span></span>\n          <label title="Hex">#</label>\n          <input title="Hex" id="inHex" type="text">\n        </div>\n      </div>\n    </div>\n    `}connectedCallback(){this.refreshCompactMode();const t=this.$("base2");this.rc=new f(t,[.5,.5]),this.$add(t,"p-input",this.onPlanarInput);const e=this.$("slider");this.gc=new g(e,this.mode),this.$add(e,"range",this.onGradientChange),this.$add("thumbInput","focus",this.onThumbFocus),this.$add("thumbInput","blur",this.onThumbBlur),this.$add("thumbInput","keydown",this.onThumbKeyDown);this.root.querySelectorAll("input[type=radio]").forEach((t=>t.addEventListener("change",(t=>{this.setSelection(t.target.dataset.value)})))),["R","G","B"].forEach((t=>this.$add("in"+t,"change",(()=>this.onRgbChange())))),["H","S","V"].forEach((t=>this.$add("in"+t,"change",(()=>this.onHsvChange())))),this.$add("inHex","change",(()=>this.onHexChange())),this.setSelection("h",!0)}disconnectedCallback(){this.rc&&(this.rc.detach(),this.rc=void 0),this.gc&&(this.gc.detach(),this.gc=void 0),this.$remove("thumbInput","focus",this.onThumbFocus),this.$remove("thumbInput","blur",this.onThumbBlur),this.$remove("thumbInput","keydown",this.onThumbKeyDown),super.disconnectedCallback()}refreshCompactMode(){let t=!1;if(this.parentElement){const e=Math.min(window.innerWidth,this.parentElement.getBoundingClientRect().width)<480;e!==this._cm&&(this._cm=e,t=!0)}return this.style.setProperty("--shop-cp-size",this._cm?"240px":"280px"),this._cm?this.$("container").classList.add("compact"):this.$("container").classList.remove("compact"),t}setSelection(t,e=!1){(t!==this.mode||e)&&(this.mode=t,this.selectedInput&&(this.selectedInput.checked=!1),this.selectedInput=this.$("r"+t.toUpperCase()),this.selectedInput.checked=!0,this.gc&&this.gc.setMode(t,0,e),this.updateColor(!0))}renderCanvas(){const t=this.$("base"),e=this.$("base1"),n=this.$("base2");switch(t.style.removeProperty($),n.style.removeProperty("mix-blend-mode"),this.mode){case"h":t.style.setProperty($,a([this._hsv[0],100,50,1])),e.style.setProperty($,y("#fff","rgba(255, 255, 255, 0)")),n.style.setProperty($,_("rgba(0,0,0,0)","rgba(0,0,0,1)"));break;case"s":e.style.setProperty($,w(this._hsv[1],100)),n.style.setProperty($,_("rgba(0,0,0,0)","rgba(0,0,0,1)"));break;case"v":e.style.setProperty($,w(100,this._hsv[2])),n.style.setProperty($,_(h(c([0,100,this._hsv[2],0])),h(c([0,0,this._hsv[2],1]))));break;case"r":{const t=this._rgb[0];e.style.setProperty($,y(`rgb(${t}, 0, 0)`,`rgb(${t}, 0, 255)`)),n.style.setProperty($,_(`rgb(${t}, 255, 0)`,`rgb(${t}, 0, 0)`)),n.style.setProperty("mix-blend-mode","lighten");break}case"g":{const t=this._rgb[1];e.style.setProperty($,y(`rgb(0, ${t}, 0)`,`rgb(0, ${t}, 255)`)),n.style.setProperty($,_(`rgb(255, ${t}, 0)`,`rgb(0, ${t}, 0)`)),n.style.setProperty("mix-blend-mode","lighten");break}case"b":{const t=this._rgb[2];e.style.setProperty($,y(`rgb(0, 0, ${t})`,`rgb(255, 0, ${t})`)),n.style.setProperty($,_(`rgb(0, 255, ${t})`,`rgb(0, 0, ${t})`)),n.style.setProperty("mix-blend-mode","lighten");break}}}onRgbChange(){this._rgb[0]=+this.$("inR").value,this._rgb[1]=+this.$("inG").value,this._rgb[2]=+this.$("inB").value,this._hsv=b(this._rgb),this.updateColor(!0),this._fire()}onHsvChange(){this._hsv[0]=+this.$("inH").value,this._hsv[1]=+this.$("inS").value,this._hsv[2]=+this.$("inV").value,this._rgb=p(this._hsv),this.updateColor(!0),this._fire()}onHexChange(){this.value=this.$("inHex").value.trim(),this._fire()}updateColor(t){var e;this._hex=u(...this._rgb),this.updateSliderPosition(),this.updatePlanePosition(),this.updateThumb(),this.updateTextInputs(),this.$("preview").style.background=`rgb(${(e=this._rgb)[0]}, ${e[1]}, ${e[2]})`,this.updateSliderGradient(),t&&this.renderCanvas()}updateTextInputs(){const[t,e,n]=this._hsv,[i,s,r]=this._rgb;this.$("inH").value=""+t,this.$("inS").value=""+e,this.$("inV").value=""+n,this.$("inR").value=""+i,this.$("inG").value=""+s,this.$("inB").value=""+r,this.$("inHex").value=this._hex.substring(1)}updateSliderGradient(){if(this.gc)switch(this.mode){case"h":case"s":case"v":this.gc.color=this._hsv;break;case"r":case"g":case"b":this.gc.color=this._rgb}}updateSliderPosition(){if(this.gc){const[t,e,n]=this._hsv,[i,s,r]=this._rgb;switch(this.mode){case"h":this.gc.value=t;break;case"s":this.gc.value=e;break;case"v":this.gc.value=n;break;case"r":this.gc.value=i;break;case"g":this.gc.value=s;break;case"b":this.gc.value=r}}}updatePlanePosition(){if(this.rc){const[t,e,n]=this._hsv,[i,s,r]=this._rgb;switch(this.mode){case"h":this.rc.position=[e/100,1-n/100];break;case"s":this.rc.position=[t/360,1-n/100];break;case"v":this.rc.position=[t/360,1-e/100];break;case"r":this.rc.position=[r/255,1-s/255];break;case"g":this.rc.position=[r/255,1-i/255];break;case"b":this.rc.position=[i/255,1-s/255]}}}updateThumb(){const t=this.$("thumb");if(t&&this.rc){const e=this.rc.position,n=this._cm?240:280,[i,s]=[n*e[0],n*e[1]];t.style.transform=`translate3d(${i}px, ${s}px, 0)`,t.style.setProperty("--ecp-i-thumb-color",this._hex);const[r]=this._hsv;t.style.setProperty("--ecp-i-thumb-shadow-color",a([r,100,60,1]))}}_fire(){this.fire("change")}get rgb(){return[...this._rgb]}get hsl(){return c(this._hsv)}get hsb(){return[...this._hsv]}get value(){return this._hex}set value(t){const e=function(t){let e=(t=t.trim()).match(n);if(e){const t=+e[1],n=+e[2],i=+e[3],s=+e[4],[r,h,a]=o(t,n,i);return{hex:u(r,h,a,s),hsla:[t,n,i,s],rgba:[r,h,a,s]}}if(e=t.match(i),e){const t=+e[1],n=+e[2],i=+e[3],[s,r,h]=o(t,n,i);return{hex:u(s,r,h,1),hsla:[t,n,i,1],rgba:[s,r,h,1]}}if(e=t.match(s),e){const t=+e[1],n=+e[2],i=+e[3],s=+e[4],[r,h,a]=l(t,n,i);return{hex:u(t,n,i,s),hsla:[r,h,a,s],rgba:[t,n,i,s]}}if(e=t.match(r),e){const t=+e[1],n=+e[2],i=+e[3],[s,r,h]=l(t,n,i);return{hex:u(t,n,i,1),hsla:[s,r,h,1],rgba:[t,n,i,1]}}let h=t;const a=h.lastIndexOf("#");a>=0&&(h=h.substring(a+1));const c=function(t){switch(t.length){case 3:return[+`0x${t[0]}${t[0]}`,+`0x${t[1]}${t[1]}`,+`0x${t[2]}${t[2]}`,1];case 4:return[+`0x${t[0]}${t[0]}`,+`0x${t[1]}${t[1]}`,+`0x${t[2]}${t[2]}`,+`0x${t[3]}${t[3]}`/255];case 6:return[+`0x${t[0]}${t[1]}`,+`0x${t[2]}${t[3]}`,+`0x${t[4]}${t[5]}`,1];case 8:return[+`0x${t[0]}${t[1]}`,+`0x${t[2]}${t[3]}`,+`0x${t[4]}${t[5]}`,+`0x${t[6]}${t[7]}`/255]}return null}(h);if(c){const[t,e,n,i]=c;if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(i))return null;const[s,r,h]=l(t,e,n);return{hex:u(t,e,n,i),hsla:[s,r,h,i],rgba:[t,e,n,i]}}return null}(t);e&&(this._rgb=[...e.rgba],this._hsv=d(e.hsla),this._hex=e.hex,this.updateColor(!0))}}customElements.define("shop-color-picker",k);export{k as ShopColorPicker};
