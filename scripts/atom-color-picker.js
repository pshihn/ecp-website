class t extends HTMLElement{constructor(){super(),this.__n=new Map,this.root=this.attachShadow({mode:"open"})}static get observedAttributes(){return["value"]}attributeChangedCallback(t,e,n){"value"===t&&(this.value=n)}$(t){if(this.__n.has(t))return this.__n.get(t);const e=this.root.querySelector("#"+t);return this.__n.set(t,e),e}$add(t,e,n){"string"==typeof t&&(t=this.$(t)),t&&t.addEventListener(e,n)}$remove(t,e,n){"string"==typeof t&&(t=this.$(t)),t&&t.removeEventListener(e,n)}fire(t,e){!function(t,e,n){const s={bubbles:!0,composed:!0,detail:n};t.dispatchEvent(new CustomEvent(e,s))}(this,t,e)}disconnectedCallback(){this.__n.clear()}}function e(t){return 180/Math.PI*t}function n(t){return Math.PI/180*t}const s=/^hsla\s*\(\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)%\s*,\s*(\d+.?\d*)%\s*,\s*(\d+.?\d*)\s*\)$/i,i=/^hsl\s*\(\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)%\s*,\s*(\d+.?\d*)%\s*\)$/i,r=/^rgba\s*\(\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)\s*\)$/i,h=/^rgb\s*\(\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)\s*\)$/i,o=t=>`hsl(${t[0]%360}, ${t[1]}%, ${t[2]}%)`;function a(t,e,n){t%=360,e/=100,n/=100;const s=(1-Math.abs(2*n-1))*e,i=s*(1-Math.abs(t/60%2-1)),r=n-s/2;let h=0,o=0,a=0;return[h,o,a]=t<60?[s,i,0]:t<120?[i,s,0]:t<180?[0,s,i]:t<240?[0,i,s]:t<300?[i,0,s]:[s,0,i],[Math.round(255*(h+r)),Math.round(255*(o+r)),Math.round(255*(a+r))]}function c(t,e,n){t/=255,e/=255,n/=255;const s=Math.max(t,e,n),i=Math.min(t,e,n),r=s-i;let h=0;0===r?h=0:s===t?h=(e-n)/r%6*60:s===e?h=60*((n-t)/r+2):s===n&&(h=60*((t-e)/r+4));const o=(s+i)/2,a=0===r?0:r/(1-Math.abs(2*o-1));return[Math.round((360+h)%360),Math.round(100*a),Math.round(100*o)]}function l(t,e,n,s){s=Math.round(255*s);let i=Math.round(t).toString(16),r=Math.round(e).toString(16),h=Math.round(n).toString(16),o=s.toString(16);return 1===i.length&&(i="0"+i),1===r.length&&(r="0"+r),1===h.length&&(h="0"+h),1===o.length&&(o="0"+o),(255===s?`#${i}${r}${h}`:`#${i}${r}${h}${o}`).toUpperCase()}function d(t){let e=-1;return self.Touch&&t instanceof Touch?e=t.identifier:u(t)&&(e=t.pointerId),{id:e,nativeEvent:t,clientX:t.clientX,clientY:t.clientY}}const u=t=>self.PointerEvent&&t instanceof PointerEvent;class p{constructor(t,e){this.startPointers=[],this.currentPointers=[],this.pointerStart=t=>{if(0===t.button&&this.triggerPointerStart(d(t),t))if(u(t)){(t.target&&"setPointerCapture"in t.target?t.target:this._e).setPointerCapture(t.pointerId),this.ael("pointermove",this.move),this.ael("pointerup",this.pointerEnd),this.ael("pointercancel",this.pointerEnd)}else window.addEventListener("mousemove",this.move),window.addEventListener("mouseup",this.pointerEnd)},this.touchStart=t=>{for(const e of Array.from(t.changedTouches))this.triggerPointerStart(d(e),t)},this.move=t=>{const e="changedTouches"in t?Array.from(t.changedTouches).map((t=>d(t))):[d(t)],n=[];for(const t of e){const e=this.currentPointers.findIndex((e=>e.id===t.id));-1!==e&&(n.push(t),this.currentPointers[e]=t)}0!==n.length&&this._h.onMove(n,t)},this._end=(t,e)=>{const n=this.currentPointers.findIndex((e=>e.id===t.id));return-1!==n&&(this.currentPointers.splice(n,1),this.startPointers.splice(n,1),this._h.onEnd&&this._h.onEnd(t,e,"touchcancel"===e.type||"pointercancel"===e.type),!0)},this.pointerEnd=t=>{if(this._end(d(t),t))if(u(t)){if(this.currentPointers.length)return;this.rel("pointermove",this.move),this.rel("pointerup",this.pointerEnd),this.rel("pointercancel",this.pointerEnd)}else window.removeEventListener("mousemove",this.move),window.removeEventListener("mouseup",this.pointerEnd)},this.touchEnd=t=>{for(const e of Array.from(t.changedTouches))this._end(d(e),t)},this._e=t,this._h=e,self.PointerEvent?this.ael("pointerdown",this.pointerStart):(this.ael("mousedown",this.pointerStart),this.ael("touchstart",this.touchStart),this.ael("touchmove",this.move),this.ael("touchend",this.touchEnd),this.ael("touchcancel",this.touchEnd))}ael(t,e){this._e.addEventListener(t,e)}rel(t,e){this._e.removeEventListener(t,e)}stop(){this.rel("pointerdown",this.pointerStart),this.rel("mousedown",this.pointerStart),this.rel("touchstart",this.touchStart),this.rel("touchmove",this.move),this.rel("touchend",this.touchEnd),this.rel("touchcancel",this.touchEnd),this.rel("pointermove",this.move),this.rel("pointerup",this.pointerEnd),this.rel("pointercancel",this.pointerEnd),window.removeEventListener("mousemove",this.move),window.removeEventListener("mouseup",this.pointerEnd)}triggerPointerStart(t,e){return!!this._h.onStart(t,e)&&(this.currentPointers.push(t),this.startPointers.push(t),!0)}}class g{constructor(t,e,n,s=0,i=360){this.anchor=[0,0,0,0],this.degrees=0,this.e=t,this.ri=e,this.ro=n,this.a1=s,this.a2=i,this.tracker=new p(this.e,this)}clamp(t){for(;t<0;)t+=360;return Math.abs(t%360)}isAngleInRange(t){if(this.a1<0){if(t>=0&&t<=this.a2)return!0;const e=t-360;return e>=this.a1&&e<=0}return t>=this.a1&&t<=this.a2}isOnDial(t,n){const s=t-.5,i=n-.5,r=Math.sqrt(s*s+i*i);if(r>=this.ri&&r<=this.ro){const t=this.clamp(Math.round(e(Math.atan2(i,s))));return this.isAngleInRange(t)}return!1}onStart(t,e){e.preventDefault();const n=this.e.getBoundingClientRect();this.anchor=[n.left||n.x,n.top||n.y,n.width,n.height];const s=this.anchor[2],i=this.anchor[3],r=s?(t.clientX-this.anchor[0])/s:0,h=i?(t.clientY-this.anchor[1])/i:0;return!!this.isOnDial(r,h)&&(this.setPosition(r,h),this.e.style.cursor="pointer",!0)}onMove(t){const e=t[0];if(e){const t=this.anchor[2],n=this.anchor[3],s=t?(e.clientX-this.anchor[0])/t:0,i=n?(e.clientY-this.anchor[1])/n:0;this.setPosition(s,i)}}onEnd(){this.e.style.cursor=""}setPosition(t,n){const s=this.clamp(Math.round(e(Math.atan2(n-.5,t-.5))));return!(!this.isAngleInRange(s)||s===this.degrees)&&(this.degrees=s,this.fire(),!0)}fire(){this.e.dispatchEvent(new CustomEvent("p-input",{bubbles:!0,composed:!0,detail:{angle:this.degrees}}))}detach(){this.tracker.stop()}get angle(){return this.degrees}set angle(t){this.degrees=Math.max(this.a1,Math.min(this.a2,this.clamp(t)))}}class v extends t{constructor(){super(),this._hsla=[0,100,50,1],this.acs=[],this.onHueChange=t=>{const e=t.detail.angle;this._hsla[0]=e,this.updateColor(),this._fire()},this.onSatChange=t=>{const e=t.detail.angle-100;this._hsla[1]=.625*e,this.updateColor(),this._fire()},this.onLuminChange=t=>{let e=t.detail.angle;e>80&&(e-=360),this._hsla[2]=.625*e+50,this.updateColor(),this._fire()},this.root.innerHTML='\n    <style>\n      \n* {box-sizing: border-box;}\n.horizontal {display: flex; flex-direction: row;}\n.vertical {display: flex; flex-direction: column;}\n.center {align-items: center;}\n.flex {flex: 1;}\n\n      :host {\n        display: inline-block;\n        touch-action: none;\n      }\n      canvas {\n        display: block;\n        margin: 0 auto;\n        pointer-events: auto;\n      }\n      .thumb {\n        position: absolute;\n        width: 20px;\n        height: 20px;\n        border-radius: 50%;\n        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\n        background: transparent;\n        border: 2px solid #ffffff;\n        pointer-events: none;\n        top: -10px;\n        left: -10px;\n      }\n      .grid {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        display: grid;\n        place-content: center;\n        pointer-events: none;\n      }\n      #sArc, #lArc {\n        border-radius: 50%;\n      }\n      #lArc {\n        position: absolute;\n        top: 0;\n        right: 0;\n      }\n      #sPanel, #lPanel {\n        overflow: hidden;\n      }\n      #preview {\n        border-radius: 50%;\n        border: 1px solid #e5e5e5;\n      }\n    </style>\n    <div style="position: relative">\n      <canvas id="wheel"></canvas>\n      <div id="hThumb" class="thumb"></div>\n      <div class="grid">\n        <div class="horizontal">\n          <div id="sPanel" style="position: relative;">\n            <canvas id="sArc"></canvas>\n            <div id="sThumb" class="thumb"></div>\n          </div>\n          <div id="lPanel" style="position: relative;">\n            <canvas id="lArc"></canvas>\n            <div id="lThumb" class="thumb"></div>\n          </div>\n        </div>\n      </div>\n      <div class="grid">\n        <div id="preview"></div>\n      </div>\n    </div>\n    '}connectedCallback(){{const t=this.$("wheel"),e=118,n=e-12;this.acs[0]=new g(t,n/240,e/240,0,359.99),this.$add(t,"p-input",this.onHueChange)}{const t=this.$("sArc"),e=168,n=e/2-2,s=n-12;this.acs[1]=new g(t,s/e,n/e,100,260),this.$add(t,"p-input",this.onSatChange)}{const t=this.$("lArc"),e=168,n=e/2-2,s=n-12;this.acs[2]=new g(t,s/e,n/e,-80,80),this.$add(t,"p-input",this.onLuminChange)}this.renderWheel(),this.updateColor()}disconnectedCallback(){this.acs.forEach((t=>t.detach())),this.acs=[],super.disconnectedCallback()}renderWheel(){const t=this.$("wheel");t.width=240,t.height=240;const n=t.getContext("2d"),{width:s,height:i}=t;n.clearRect(0,0,s,i);const r=2*Math.PI/40,h=Math.min(s,i)/2-2,o=h-12,a=s/2,c=i/2;for(let t=1;t<=40;t++){const s=t*r,i=(t-1)*r,l=o+(h-o)/2,d=Math.cos(s)*l+a,u=Math.sin(s)*l+c,p=Math.cos(i)*l+a,g=Math.sin(i)*l+c,v=n.createLinearGradient(d,u,p,g);v.addColorStop(0,`hsl(${e(s)}, 100%, 50%)`),v.addColorStop(1,`hsl(${e(i)}, 100%, 50%)`);const m=.002;n.beginPath(),n.arc(a,c,h,i-m,s+m,!1),n.arc(a,c,o,s+m,i-m,!0),n.fillStyle=v,n.fill()}}renderSatArc(){this.$("sPanel").style.width="84px";const t=this.$("sArc");t.width=168,t.height=168;const e=t.getContext("2d"),{width:s,height:i}=t;e.clearRect(0,0,s,i);const r=this._hsla[0],h=this._hsla[2],a=n(160)/40,c=Math.min(s,i)/2-2,l=c-12,d=s/2,u=i/2;e.beginPath(),e.arc(d,u,l,n(100),n(260)),e.arc(d,u,c,n(260),n(100),!0),e.closePath(),e.strokeStyle="#e5e5e5",e.stroke();for(let t=1;t<=40;t++){const s=t*a+n(100),i=(t-1)*a+n(100),p=l+(c-l)/2,g=Math.cos(s)*p+d,v=Math.sin(s)*p+u,m=Math.cos(i)*p+d,f=Math.sin(i)*p+u,b=[r,2.5*t,h,1],$=[r,2.5*(t-1),h,1],x=e.createLinearGradient(g,v,m,f);x.addColorStop(0,o(b)),x.addColorStop(1,o($));const M=.002;e.beginPath(),e.arc(d,u,c,i-M,s+M,!1),e.arc(d,u,l,s+M,i-M,!0),e.fillStyle=x,e.fill()}}renderLuminArc(){this.$("lPanel").style.width="84px";const t=this.$("lArc");t.width=168,t.height=168;const e=t.getContext("2d"),{width:s,height:i}=t;e.clearRect(0,0,s,i);const r=this._hsla[0],h=this._hsla[1],a=n(160)/40,c=Math.min(s,i)/2-2,l=c-12,d=s/2,u=i/2;e.beginPath(),e.arc(d,u,l,n(-80),n(80)),e.arc(d,u,c,n(80),n(-80),!0),e.closePath(),e.strokeStyle="#e5e5e5",e.stroke();for(let t=1;t<=40;t++){const s=t*a+n(-80),i=(t-1)*a+n(-80),p=l+(c-l)/2,g=Math.cos(s)*p+d,v=Math.sin(s)*p+u,m=Math.cos(i)*p+d,f=Math.sin(i)*p+u,b=[r,h,2.5*t,1],$=[r,h,2.5*(t-1),1],x=e.createLinearGradient(g,v,m,f);x.addColorStop(0,o(b)),x.addColorStop(1,o($));const M=.002;e.beginPath(),e.arc(d,u,c,i-M,s+M,!1),e.arc(d,u,l,s+M,i-M,!0),e.fillStyle=x,e.fill()}}renderPreview(){const t=this.$("preview");t.style.width="72px",t.style.height="72px",t.style.background=o(this._hsla)}updateColor(){this.renderSatArc(),this.renderLuminArc(),this.renderPreview(),this.updateHueThumb(),this.updateSatThumb(),this.updateLuminThumb()}updateHueThumb(){const t=this.$("hThumb"),e=this._hsla[0],s=120+111.5*Math.cos(n(e)),i=120+111.5*Math.sin(n(e));t.style.transform=`translate3d(${s}px, ${i}px, 0)`,t.style.background=o([e,100,50,1])}updateSatThumb(){const t=this.$("sThumb"),e=1.6*this._hsla[1]+100,s=84+75.5*Math.cos(n(e)),i=84+75.5*Math.sin(n(e));t.style.transform=`translate3d(${s}px, ${i}px, 0)`,t.style.background=o(this._hsla)}updateLuminThumb(){const t=this.$("lThumb"),e=1.6*this._hsla[2]-80,s=75.5*Math.cos(n(e)),i=84+75.5*Math.sin(n(e));t.style.transform=`translate3d(${s}px, ${i}px, 0)`,t.style.background=o(this._hsla)}_fire(){this.fire("change")}get hsl(){return[...this._hsla]}get rgb(){const[t,e,n]=a(this._hsla[0],this._hsla[1],this._hsla[2]);return[t,e,n,this._hsla[3]]}get value(){return l(...this.rgb)}set value(t){const e=function(t){let e=(t=t.trim()).match(s);if(e){const t=+e[1],n=+e[2],s=+e[3],i=+e[4],[r,h,o]=a(t,n,s);return{hex:l(r,h,o,i),hsla:[t,n,s,i],rgba:[r,h,o,i]}}if(e=t.match(i),e){const t=+e[1],n=+e[2],s=+e[3],[i,r,h]=a(t,n,s);return{hex:l(i,r,h,1),hsla:[t,n,s,1],rgba:[i,r,h,1]}}if(e=t.match(r),e){const t=+e[1],n=+e[2],s=+e[3],i=+e[4],[r,h,o]=c(t,n,s);return{hex:l(t,n,s,i),hsla:[r,h,o,i],rgba:[t,n,s,i]}}if(e=t.match(h),e){const t=+e[1],n=+e[2],s=+e[3],[i,r,h]=c(t,n,s);return{hex:l(t,n,s,1),hsla:[i,r,h,1],rgba:[t,n,s,1]}}let n=t;const o=n.lastIndexOf("#");o>=0&&(n=n.substring(o+1));const d=function(t){switch(t.length){case 3:return[+`0x${t[0]}${t[0]}`,+`0x${t[1]}${t[1]}`,+`0x${t[2]}${t[2]}`,1];case 4:return[+`0x${t[0]}${t[0]}`,+`0x${t[1]}${t[1]}`,+`0x${t[2]}${t[2]}`,+`0x${t[3]}${t[3]}`/255];case 6:return[+`0x${t[0]}${t[1]}`,+`0x${t[2]}${t[3]}`,+`0x${t[4]}${t[5]}`,1];case 8:return[+`0x${t[0]}${t[1]}`,+`0x${t[2]}${t[3]}`,+`0x${t[4]}${t[5]}`,+`0x${t[6]}${t[7]}`/255]}return null}(n);if(d){const[t,e,n,s]=d;if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(s))return null;const[i,r,h]=c(t,e,n);return{hex:l(t,e,n,s),hsla:[i,r,h,s],rgba:[t,e,n,s]}}return null}(t);e&&(this._hsla=[...e.hsla],this.updateColor())}}customElements.define("atom-color-picker",v);export{v as AtomColorPicker};
