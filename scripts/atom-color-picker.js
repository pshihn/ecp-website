class t extends HTMLElement{constructor(){super(),this.__n=new Map,this.root=this.attachShadow({mode:"open"})}static get observedAttributes(){return["value"]}attributeChangedCallback(t,s,e){"value"===t&&(this.value=e)}$(t){if(this.__n.has(t))return this.__n.get(t);const s=this.root.querySelector("#"+t);return this.__n.set(t,s),s}$add(t,s,e){"string"==typeof t&&(t=this.$(t)),t&&t.addEventListener(s,e)}$remove(t,s,e){"string"==typeof t&&(t=this.$(t)),t&&t.removeEventListener(s,e)}fire(t,s){!function(t,s,e){t.dispatchEvent(new CustomEvent(s,{bubbles:!0,composed:!0,detail:e}))}(this,t,s)}disconnectedCallback(){this.__n.clear()}}function s(t){return 180/Math.PI*t}function e(t){return Math.PI/180*t}const n=/^hsla\s*\(\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)%\s*,\s*(\d+.?\d*)%\s*,\s*(\d+.?\d*)\s*\)$/i,i=/^hsl\s*\(\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)%\s*,\s*(\d+.?\d*)%\s*\)$/i,h=/^rgba\s*\(\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)\s*\)$/i,o=/^rgb\s*\(\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)\s*,\s*(\d+.?\d*)\s*\)$/i,r=t=>`hsl(${t[0]%360}, ${t[1]}%, ${t[2]}%)`;function a(t,s,e){t%=360,s/=100,e/=100;const n=(1-Math.abs(2*e-1))*s,i=n*(1-Math.abs(t/60%2-1)),h=e-n/2;let o=0,r=0,a=0;return[o,r,a]=t<60?[n,i,0]:t<120?[i,n,0]:t<180?[0,n,i]:t<240?[0,i,n]:t<300?[i,0,n]:[n,0,i],[Math.round(255*(o+h)),Math.round(255*(r+h)),Math.round(255*(a+h))]}function l(t,s,e){t/=255,s/=255,e/=255;const n=Math.max(t,s,e),i=Math.min(t,s,e),h=n-i;let o=0;0===h?o=0:n===t?o=(s-e)/h%6*60:n===s?o=60*((e-t)/h+2):n===e&&(o=60*((t-s)/h+4));const r=(n+i)/2,a=0===h?0:h/(1-Math.abs(2*r-1));return[Math.round((360+o)%360),Math.round(100*a),Math.round(100*r)]}function c(t,s,e,n){n=Math.round(255*n);let i=Math.round(t).toString(16),h=Math.round(s).toString(16),o=Math.round(e).toString(16),r=n.toString(16);return 1===i.length&&(i="0"+i),1===h.length&&(h="0"+h),1===o.length&&(o="0"+o),1===r.length&&(r="0"+r),(255===n?`#${i}${h}${o}`:`#${i}${h}${o}${r}`).toUpperCase()}function u(t){let s=-1;return self.Touch&&t instanceof Touch?s=t.identifier:d(t)&&(s=t.pointerId),{id:s,nativeEvent:t,clientX:t.clientX,clientY:t.clientY}}const d=t=>self.PointerEvent&&t instanceof PointerEvent;class p{constructor(t,s){this.startPointers=[],this.currentPointers=[],this.pointerStart=t=>{if(0===t.button&&this.triggerPointerStart(u(t),t))if(d(t)){(t.target&&"setPointerCapture"in t.target?t.target:this._e).setPointerCapture(t.pointerId),this.ael("pointermove",this.move),this.ael("pointerup",this.pointerEnd),this.ael("pointercancel",this.pointerEnd)}else window.addEventListener("mousemove",this.move),window.addEventListener("mouseup",this.pointerEnd)},this.touchStart=t=>{for(const s of Array.from(t.changedTouches))this.triggerPointerStart(u(s),t)},this.move=t=>{const s="changedTouches"in t?Array.from(t.changedTouches).map((t=>u(t))):[u(t)],e=[];for(const t of s){const s=this.currentPointers.findIndex((s=>s.id===t.id));-1!==s&&(e.push(t),this.currentPointers[s]=t)}0!==e.length&&this._h.onMove(e,t)},this._end=(t,s)=>{const e=this.currentPointers.findIndex((s=>s.id===t.id));return-1!==e&&(this.currentPointers.splice(e,1),this.startPointers.splice(e,1),this._h.onEnd&&this._h.onEnd(t,s,"touchcancel"===s.type||"pointercancel"===s.type),!0)},this.pointerEnd=t=>{if(this._end(u(t),t))if(d(t)){if(this.currentPointers.length)return;this.rel("pointermove",this.move),this.rel("pointerup",this.pointerEnd),this.rel("pointercancel",this.pointerEnd)}else window.removeEventListener("mousemove",this.move),window.removeEventListener("mouseup",this.pointerEnd)},this.touchEnd=t=>{for(const s of Array.from(t.changedTouches))this._end(u(s),t)},this._e=t,this._h=s,self.PointerEvent?this.ael("pointerdown",this.pointerStart):(this.ael("mousedown",this.pointerStart),this.ael("touchstart",this.touchStart),this.ael("touchmove",this.move),this.ael("touchend",this.touchEnd),this.ael("touchcancel",this.touchEnd))}ael(t,s){this._e.addEventListener(t,s)}rel(t,s){this._e.removeEventListener(t,s)}stop(){this.rel("pointerdown",this.pointerStart),this.rel("mousedown",this.pointerStart),this.rel("touchstart",this.touchStart),this.rel("touchmove",this.move),this.rel("touchend",this.touchEnd),this.rel("touchcancel",this.touchEnd),this.rel("pointermove",this.move),this.rel("pointerup",this.pointerEnd),this.rel("pointercancel",this.pointerEnd),window.removeEventListener("mousemove",this.move),window.removeEventListener("mouseup",this.pointerEnd)}triggerPointerStart(t,s){return!!this._h.onStart(t,s)&&(this.currentPointers.push(t),this.startPointers.push(t),!0)}}class b{constructor(t,s,e,n=0,i=360){this.anchor=[0,0,0,0],this.degrees=0,this.e=t,this.ri=s,this.ro=e,this.a1=n,this.a2=i,this.tracker=new p(this.e,this)}clamp(t){for(;t<0;)t+=360;return Math.abs(t%360)}isAngleInRange(t){if(this.a1<0){if(t>=0&&t<=this.a2)return!0;const s=t-360;return s>=this.a1&&s<=0}return t>=this.a1&&t<=this.a2}isOnDial(t,e){const n=t-.5,i=e-.5,h=Math.sqrt(n*n+i*i);if(h>=this.ri&&h<=this.ro){const t=this.clamp(Math.round(s(Math.atan2(i,n))));return this.isAngleInRange(t)}return!1}onStart(t,s){s.preventDefault();const e=this.e.getBoundingClientRect();this.anchor=[e.left||e.x,e.top||e.y,e.width,e.height];const n=this.anchor[2],i=this.anchor[3],h=n?(t.clientX-this.anchor[0])/n:0,o=i?(t.clientY-this.anchor[1])/i:0;return!!this.isOnDial(h,o)&&(this.setPosition(h,o),this.e.style.cursor="pointer",!0)}onMove(t){const s=t[0];if(s){const t=this.anchor[2],e=this.anchor[3],n=t?(s.clientX-this.anchor[0])/t:0,i=e?(s.clientY-this.anchor[1])/e:0;this.setPosition(n,i)}}onEnd(){this.e.style.cursor=""}setPosition(t,e){const n=this.clamp(Math.round(s(Math.atan2(e-.5,t-.5))));return!(!this.isAngleInRange(n)||n===this.degrees)&&(this.degrees=n,this.fire(),!0)}fire(){this.e.dispatchEvent(new CustomEvent("p-input",{bubbles:!0,composed:!0,detail:{angle:this.degrees}}))}detach(){this.tracker.stop()}get angle(){return this.degrees}set angle(t){this.degrees=Math.max(this.a1,Math.min(this.a2,this.clamp(t)))}}class m extends t{constructor(){super(),this._hsla=[0,100,50,1],this.acs=[],this.onHFocus=()=>this.$("hThumb").classList.add("focused"),this.onHBlur=()=>this.$("hThumb").classList.remove("focused"),this.onSFocus=()=>this.$("sThumb").classList.add("focused"),this.onSBlur=()=>this.$("sThumb").classList.remove("focused"),this.onLFocus=()=>this.$("lThumb").classList.add("focused"),this.onLBlur=()=>this.$("lThumb").classList.remove("focused"),this.onHKeyDown=t=>{let s=!0;switch(t.code){case"ArrowRight":case"ArrowDown":this._hsla[0]=(this._hsla[0]+2)%360,this.updateColor();break;case"ArrowLeft":case"ArrowUp":this._hsla[0]=((this._hsla[0]||360)-2)%360,this.updateColor();break;case"Escape":this.$("hThumbInput").blur();break;default:s=!1}s&&(t.preventDefault(),t.stopPropagation())},this.onSKeyDown=t=>{let s=!0;switch(t.code){case"ArrowRight":case"ArrowUp":this._hsla[1]<100&&(this._hsla[1]++,this.updateColor());break;case"ArrowDown":case"ArrowLeft":this._hsla[1]>0&&(this._hsla[1]--,this.updateColor());break;case"Escape":this.$("sThumbInput").blur();break;default:s=!1}s&&(t.preventDefault(),t.stopPropagation())},this.onLKeyDown=t=>{let s=!0;switch(t.code){case"ArrowRight":case"ArrowDown":this._hsla[2]<100&&(this._hsla[2]++,this.updateColor());break;case"ArrowLeft":case"ArrowUp":this._hsla[2]>0&&(this._hsla[2]--,this.updateColor());break;case"Escape":this.$("lThumbInput").blur();break;default:s=!1}s&&(t.preventDefault(),t.stopPropagation())},this.onHueChange=t=>{this.$("hThumbInput").focus();const s=t.detail.angle;this._hsla[0]=s,this.updateColor(),this._fire()},this.onSatChange=t=>{this.$("sThumbInput").focus();const s=t.detail.angle-100;this._hsla[1]=.625*s,this.updateColor(),this._fire()},this.onLuminChange=t=>{this.$("lThumbInput").focus();let s=t.detail.angle;s>80&&(s-=360),this._hsla[2]=.625*s+50,this.updateColor(),this._fire()},this.root.innerHTML='\n    <style>\n      \n* {box-sizing: border-box;}\n.horizontal {display: flex; flex-direction: row;}\n.vertical {display: flex; flex-direction: column;}\n.center {align-items: center;}\n.flex {flex: 1;}\n\n      :host {\n        display: inline-block;\n        touch-action: none;\n      }\n      canvas {\n        display: block;\n        margin: 0 auto;\n        pointer-events: auto;\n      }\n      .thumb {\n        position: absolute;\n        width: 40px;\n        height: 40px;\n        padding: 10px;\n        border-radius: 50%;\n        overflow: hidden;\n        background: transparent;\n        top: -20px;\n        left: -20px;\n        pointer-events: none;\n      }\n      #hThumb::before {\n        content: \'\';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border-radius: 50%;\n        opacity: 0.2;\n        background: var(--ecp-i-thumb-shadow-color);\n        pointer-events: none;\n        transform: scale(0);\n        transition: transform 0.18s ease;\n      }\n      input {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border: none;\n        cursor: pointer;\n        opacity: 0;\n        font-size: 16px;\n      }\n      #hThumb.focused::before {\n        transform: scale(1);\n      }\n      #lThumb.focused .knob,\n      #sThumb.focused .knob {\n        box-shadow: 0 0 5px 0px rgb(0 0 0 / 50%);\n        transform: scale(1);\n      }\n      #lThumb .knob,\n      #sThumb .knob {\n        transform: scale(0.8);\n      }\n      .knob {\n        position: relative;\n        width: 20px;\n        height: 20px;\n        border: 2px solid #fff;\n        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\n        border-radius: 50%;\n        background: var(--ecp-i-thumb-color);\n      }\n      .grid {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        display: grid;\n        place-content: center;\n        pointer-events: none;\n      }\n      #sArc, #lArc {\n        border-radius: 50%;\n      }\n      #lArc {\n        position: absolute;\n        top: 0;\n        right: 0;\n      }\n      #sPanel, #lPanel {\n        overflow: hidden;\n      }\n      #preview {\n        border-radius: 50%;\n        border: 1px solid #e5e5e5;\n      }\n    </style>\n    <div style="position: relative">\n      <canvas id="wheel"></canvas>\n      <div id="hThumb" class="thumb">\n        <div class="knob"></div>\n        <input readonly id="hThumbInput">\n      </div>\n      <div class="grid">\n        <div class="horizontal">\n          <div id="sPanel" style="position: relative;">\n            <canvas id="sArc"></canvas>\n            <div id="sThumb" class="thumb">\n              <div class="knob"></div>\n            </div>\n            <input readonly id="sThumbInput">\n          </div>\n          <div id="lPanel" style="position: relative;">\n            <canvas id="lArc"></canvas>\n            <div id="lThumb" class="thumb">\n              <div class="knob"></div>\n            </div>\n            <input readonly id="lThumbInput">\n          </div>\n        </div>\n      </div>\n      <div class="grid">\n        <div id="preview"></div>\n      </div>\n    </div>\n    '}connectedCallback(){{const t=this.$("wheel"),s=128,e=s-12-20;this.acs[0]=new b(t,e/240,s/240,0,359.99),this.$add(t,"p-input",this.onHueChange)}{const t=this.$("sArc"),s=160,e=s/2-2+10,n=e-12-20;this.acs[1]=new b(t,n/s,e/s,100,260),this.$add(t,"p-input",this.onSatChange)}{const t=this.$("lArc"),s=160,e=s/2-2+10,n=e-12-20;this.acs[2]=new b(t,n/s,e/s,-80,80),this.$add(t,"p-input",this.onLuminChange)}this.$add("hThumbInput","focus",this.onHFocus),this.$add("hThumbInput","blur",this.onHBlur),this.$add("hThumbInput","keydown",this.onHKeyDown),this.$add("sThumbInput","focus",this.onSFocus),this.$add("sThumbInput","blur",this.onSBlur),this.$add("sThumbInput","keydown",this.onSKeyDown),this.$add("lThumbInput","focus",this.onLFocus),this.$add("lThumbInput","blur",this.onLBlur),this.$add("lThumbInput","keydown",this.onLKeyDown),this.renderWheel(),this.updateColor()}disconnectedCallback(){this.acs.forEach((t=>t.detach())),this.acs=[],this.$remove("hThumbInput","focus",this.onHFocus),this.$remove("hThumbInput","blur",this.onHBlur),this.$remove("hThumbInput","keydown",this.onHKeyDown),this.$remove("sThumbInput","focus",this.onSFocus),this.$remove("sThumbInput","blur",this.onSBlur),this.$remove("sThumbInput","keydown",this.onSKeyDown),this.$remove("lThumbInput","focus",this.onLFocus),this.$remove("lThumbInput","blur",this.onLBlur),this.$remove("lThumbInput","keydown",this.onLKeyDown),super.disconnectedCallback()}renderWheel(){const t=this.$("wheel");t.width=240,t.height=240;const e=t.getContext("2d"),{width:n,height:i}=t;e.clearRect(0,0,n,i);const h=2*Math.PI/40,o=Math.min(n,i)/2-2,r=o-12,a=n/2,l=i/2;for(let t=1;t<=40;t++){const n=t*h,i=(t-1)*h,c=r+(o-r)/2,u=Math.cos(n)*c+a,d=Math.sin(n)*c+l,p=Math.cos(i)*c+a,b=Math.sin(i)*c+l,m=e.createLinearGradient(u,d,p,b);m.addColorStop(0,`hsl(${s(n)}, 100%, 50%)`),m.addColorStop(1,`hsl(${s(i)}, 100%, 50%)`);const f=.002;e.beginPath(),e.arc(a,l,o,i-f,n+f,!1),e.arc(a,l,r,n+f,i-f,!0),e.fillStyle=m,e.fill()}}renderSatArc(){this.$("sPanel").style.width="80px";const t=this.$("sArc");t.width=160,t.height=160;const s=t.getContext("2d"),{width:n,height:i}=t;s.clearRect(0,0,n,i);const h=this._hsla[0],o=this._hsla[2],a=e(160)/40,l=Math.min(n,i)/2-2,c=l-12,u=n/2,d=i/2;s.beginPath(),s.arc(u,d,c,e(100),e(260)),s.arc(u,d,l,e(260),e(100),!0),s.closePath(),s.strokeStyle="#e5e5e5",s.stroke();for(let t=1;t<=40;t++){const n=t*a+e(100),i=(t-1)*a+e(100),p=c+(l-c)/2,b=Math.cos(n)*p+u,m=Math.sin(n)*p+d,f=Math.cos(i)*p+u,v=Math.sin(i)*p+d,g=[h,2.5*t,o,1],$=[h,2.5*(t-1),o,1],w=s.createLinearGradient(b,m,f,v);w.addColorStop(0,r(g)),w.addColorStop(1,r($));const x=.002;s.beginPath(),s.arc(u,d,l,i-x,n+x,!1),s.arc(u,d,c,n+x,i-x,!0),s.fillStyle=w,s.fill()}}renderLuminArc(){this.$("lPanel").style.width="80px";const t=this.$("lArc");t.width=160,t.height=160;const s=t.getContext("2d"),{width:n,height:i}=t;s.clearRect(0,0,n,i);const h=this._hsla[0],o=this._hsla[1],a=e(160)/40,l=Math.min(n,i)/2-2,c=l-12,u=n/2,d=i/2;s.beginPath(),s.arc(u,d,c,e(-80),e(80)),s.arc(u,d,l,e(80),e(-80),!0),s.closePath(),s.strokeStyle="#e5e5e5",s.stroke();for(let t=1;t<=40;t++){const n=t*a+e(-80),i=(t-1)*a+e(-80),p=c+(l-c)/2,b=Math.cos(n)*p+u,m=Math.sin(n)*p+d,f=Math.cos(i)*p+u,v=Math.sin(i)*p+d,g=[h,o,2.5*t,1],$=[h,o,2.5*(t-1),1],w=s.createLinearGradient(b,m,f,v);w.addColorStop(0,r(g)),w.addColorStop(1,r($));const x=.002;s.beginPath(),s.arc(u,d,l,i-x,n+x,!1),s.arc(u,d,c,n+x,i-x,!0),s.fillStyle=w,s.fill()}}renderPreview(){const t=this.$("preview");t.style.width="64px",t.style.height="64px",t.style.background=r(this._hsla)}updateColor(){this.renderSatArc(),this.renderLuminArc(),this.renderPreview(),this.updateHueThumb(),this.updateSatThumb(),this.updateLuminThumb()}updateHueThumb(){const t=this.$("hThumb"),s=this._hsla[0],n=120+111.5*Math.cos(e(s)),i=120+111.5*Math.sin(e(s));t.style.transform=`translate3d(${n}px, ${i}px, 0)`,t.style.setProperty("--ecp-i-thumb-color",r([s,100,50,1])),t.style.setProperty("--ecp-i-thumb-shadow-color",r([s,100,50,1]))}updateSatThumb(){const t=this.$("sThumb"),s=1.6*this._hsla[1]+100,n=80+71.5*Math.cos(e(s)),i=80+71.5*Math.sin(e(s));t.style.transform=`translate3d(${n}px, ${i}px, 0)`,t.style.setProperty("--ecp-i-thumb-color",r(this._hsla)),t.style.setProperty("--ecp-i-thumb-shadow-color",r([this._hsla[0],100,50,1]))}updateLuminThumb(){const t=this.$("lThumb"),s=1.6*this._hsla[2]-80,n=71.5*Math.cos(e(s)),i=80+71.5*Math.sin(e(s));t.style.transform=`translate3d(${n}px, ${i}px, 0)`,t.style.setProperty("--ecp-i-thumb-color",r(this._hsla)),t.style.setProperty("--ecp-i-thumb-shadow-color",r([this._hsla[0],100,50,1]))}_fire(){this.fire("change")}get hsl(){return[...this._hsla]}get rgb(){const[t,s,e]=a(this._hsla[0],this._hsla[1],this._hsla[2]);return[t,s,e,this._hsla[3]]}get value(){return c(...this.rgb)}set value(t){const s=function(t){let s=(t=t.trim()).match(n);if(s){const t=+s[1],e=+s[2],n=+s[3],i=+s[4],[h,o,r]=a(t,e,n);return{hex:c(h,o,r,i),hsla:[t,e,n,i],rgba:[h,o,r,i]}}if(s=t.match(i),s){const t=+s[1],e=+s[2],n=+s[3],[i,h,o]=a(t,e,n);return{hex:c(i,h,o,1),hsla:[t,e,n,1],rgba:[i,h,o,1]}}if(s=t.match(h),s){const t=+s[1],e=+s[2],n=+s[3],i=+s[4],[h,o,r]=l(t,e,n);return{hex:c(t,e,n,i),hsla:[h,o,r,i],rgba:[t,e,n,i]}}if(s=t.match(o),s){const t=+s[1],e=+s[2],n=+s[3],[i,h,o]=l(t,e,n);return{hex:c(t,e,n,1),hsla:[i,h,o,1],rgba:[t,e,n,1]}}let e=t;const r=e.lastIndexOf("#");r>=0&&(e=e.substring(r+1));const u=function(t){switch(t.length){case 3:return[+`0x${t[0]}${t[0]}`,+`0x${t[1]}${t[1]}`,+`0x${t[2]}${t[2]}`,1];case 4:return[+`0x${t[0]}${t[0]}`,+`0x${t[1]}${t[1]}`,+`0x${t[2]}${t[2]}`,+`0x${t[3]}${t[3]}`/255];case 6:return[+`0x${t[0]}${t[1]}`,+`0x${t[2]}${t[3]}`,+`0x${t[4]}${t[5]}`,1];case 8:return[+`0x${t[0]}${t[1]}`,+`0x${t[2]}${t[3]}`,+`0x${t[4]}${t[5]}`,+`0x${t[6]}${t[7]}`/255]}return null}(e);if(u){const[t,s,e,n]=u;if(isNaN(t)||isNaN(s)||isNaN(e)||isNaN(n))return null;const[i,h,o]=l(t,s,e);return{hex:c(t,s,e,n),hsla:[i,h,o,n],rgba:[t,s,e,n]}}return null}(t);s&&(this._hsla=[...s.hsla],this.updateColor())}}customElements.define("atom-color-picker",m);export{m as AtomColorPicker};
