(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(81),a=n.n(o),r=n(645),c=n.n(r)()(a());c.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  background-color: darkolivegreen;\n  width: 100vw;\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: 3fr 8fr 0.5fr;\n  justify-items: center;\n  gap: 15px;\n}\n\n#header {\n  grid-row: 1;\n  /* Background image here */\n  width: 100%;\n  display: grid;\n  grid-template-rows: 2fr 1fr;\n}\n\n.nav-bar {\n  background-color: gray;\n  grid-row: 2;\n  padding: 0 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.links {\n  list-style: none;\n  display: flex;\n}\n\n.links li {\n  background-color: darkgray;\n  border: 2px solid black;\n  padding: 2px 4px;\n}\n\n.links li:hover {\n  cursor: pointer;\n}\n\n#main {\n  grid-row: 2;\n  width: 60%;\n  background-color: darkseagreen;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n}\n\n.hype {\n  width: 80%;\n  background-color: seagreen;\n}\n\n.hype p + p {\n  margin-top: 5px;\n}\n\n.comm {\n  list-style: none;\n}\n\n#footer {\n  grid-row: 3;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: gray;\n}",""]);const d=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(c[i]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&c[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},c=[],d=0;d<e.length;d++){var i=e[d],l=o.base?i[0]+o.base:i[0],s=r[l]||0,p="".concat(l," ").concat(s);r[l]=s+1;var m=n(p),u={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=a(u,o);o.byIndex=d,t.splice(d,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var d=n(r[c]);t[d].references--}for(var i=o(e,a),l=0;l<r.length;l++){var s=n(r[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}r=i}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(795),a=n.n(o),r=n(569),c=n.n(r),d=n(565),i=n.n(d),l=n(216),s=n.n(l),p=n(589),m=n.n(p),u=n(426),h={};h.styleTagTransform=m(),h.setAttributes=i(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=s(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const C=(()=>{const e=()=>{const e=document.createElement("div");e.id="main";const t=document.createElement("h2");t.textContent="Odin Restraunt",e.appendChild(t);const n=document.createElement("p");n.textContent="Providing the community with fresh meals since never!",e.appendChild(n);const o=document.createElement("div");o.classList.add("hype");const a=document.createElement("p"),r=document.createElement("p");a.textContent="Oh wow, this meal was amazing! I'm definitely going to \n    have to come back here again and try everything else you serve! This might be \n    the best restraunt I've ever been to!",r.textContent="-Totally a real customer",o.appendChild(a),o.appendChild(r);const c=document.createElement("table"),d=document.createElement("tr"),i=document.createElement("th");i.textContent="Monday";const l=document.createElement("td");l.textContent="6:00am - 9:00pm",d.appendChild(i),d.appendChild(l),c.appendChild(d);const s=document.createElement("tr"),p=document.createElement("th");p.textContent="Tuesday";const m=document.createElement("td");m.textContent="6:00am - 9:00pm",s.appendChild(p),s.appendChild(m),c.appendChild(s);const u=document.createElement("tr"),h=document.createElement("th");h.textContent="Wednesday";const C=document.createElement("td");C.textContent="6:00am - 9:00pm",u.appendChild(h),u.appendChild(C),c.appendChild(u);const f=document.createElement("tr"),v=document.createElement("th");v.textContent="Thursday";const y=document.createElement("td");y.textContent="6:00am - 9:00pm",f.appendChild(v),f.appendChild(y),c.appendChild(f);const x=document.createElement("tr"),E=document.createElement("th");E.textContent="Friday";const g=document.createElement("td");g.textContent="6:00am - 11:00pm",x.appendChild(E),x.appendChild(g),c.appendChild(x);const b=document.createElement("tr"),w=document.createElement("th");w.textContent="Saturday";const S=document.createElement("td");S.textContent="9:00am - 11:00pm",b.appendChild(w),b.appendChild(S),c.appendChild(b);const k=document.createElement("tr");return document.createElement("th").textContent="Sunday",document.createElement("td").textContent="9:00am - 8:00pm",k.appendChild(w),k.appendChild(S),c.appendChild(b),e.appendChild(o),e.appendChild(c),e},t=(e,t,n,o)=>{const a=document.createElement("div");a.classList.add("food"),a.textContent=e;const r=document.createElement("p");r.textContent=t;const c=document.createElement("p");c.textContent=n;const d=document.createElement("p");return d.textContent=o,a.appendChild(r),a.appendChild(c),a.appendChild(d),a},n=()=>{const e=document.querySelector("#content"),t=document.querySelector("#main");e.removeChild(t)};return{initialCreate:()=>{const t=document.querySelector("#content"),n=(()=>{const e=document.createElement("div");e.id="header";const t=document.createElement("div");t.classList.add("nav-bar");const n=document.createElement("h1");n.textContent="Odin Restraunt";const o=document.createElement("ul");o.classList.add("links");const a=document.createElement("li");a.textContent="Home",a.id="home";const r=document.createElement("li");r.textContent="Menu",r.id="menu";const c=document.createElement("li");return c.textContent="Contact",c.id="contact",o.appendChild(a),o.appendChild(r),o.appendChild(c),t.appendChild(n),t.appendChild(o),e.appendChild(t),e})(),o=e(),a=(()=>{const e=document.createElement("div");return e.id="footer",e.appendChild(document.createElement("p")),e.lastChild.textContent="Footer Stuff",e})();t.appendChild(n),t.appendChild(o),t.appendChild(a)},homeCreate:()=>{const t=document.querySelector("#content");n();const o=e(),a=document.querySelector("#footer");t.insertBefore(o,a)},menuCreate:()=>{const e=document.querySelector("#content");n();const o=(()=>{const e=document.createElement("div");e.id="main";const n=document.createElement("h2");return n.textContent="See what we make!",e.appendChild(n),e.appendChild(t("Baked Feta Pasta","$6.99","180 calories","Pasta tossed in a creamy sauce of melted feta, basil, and roasted tomatoes")),e.appendChild(t("Green Chile Cheese Tamale","$2.50 ea.","130 calories","Made with freshly roasted hatch green chile")),e.appendChild(t("Banana","$10.00","105 calories","It's a banana, Michael. How much could it cost?")),e})(),a=document.querySelector("#footer");e.insertBefore(o,a)},contactCreate:()=>{const e=document.querySelector("#content");n();const t=(()=>{const e=document.createElement("div");e.id="main";const t=document.createElement("h2");t.textContent="Contact Us!",e.appendChild(t);const n=document.createElement("ul");n.classList.add("comm");const o=document.createElement("li");o.textContent="271-828-182-84",n.appendChild(o);const a=document.createElement("span");a.classList.add("material-icons-outlined"),a.textContent="call",o.insertBefore(a,o.childNodes[0]);const r=document.createElement("li");r.textContent="contact@restraunt",n.appendChild(r);const c=document.createElement("span");c.classList.add("material-icons-outlined"),c.textContent="email",r.insertBefore(c,r.childNodes[0]);const d=document.createElement("li");d.textContent="81053 Galois Dr.",n.appendChild(d);const i=document.createElement("span");return i.classList.add("material-icons-outlined"),i.textContent="place",d.insertBefore(i,d.childNodes[0]),e.appendChild(n),e})(),o=document.querySelector("#footer");e.insertBefore(t,o)}}})();C.initialCreate();const f=document.querySelector("#home"),v=document.querySelector("#menu"),y=document.querySelector("#contact");f.addEventListener("click",(()=>C.homeCreate())),v.addEventListener("click",(()=>C.menuCreate())),y.addEventListener("click",(()=>C.contactCreate()))})()})();