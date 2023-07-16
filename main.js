(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),c=t(667),s=t.n(c),d=new URL(t(510),t.b),p=i()(a());p.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400&display=swap);"]);var l=s()(d);p.push([n.id,`*{\n    font-family: 'Poppins', sans-serif;;\n}\nhtml{\n    margin-top: 0px; \n    margin-bottom: 0px; \n    margin-left: 0px; \n    margin-right: 0px;\n    padding: 0;\n}\nheader {\n    margin: 0;\n    padding: 0;\n    background: black;\n    width: 100vw;\n    height: 20vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\nheader h1 {\n    color: white;\n\n}\nmain {\n    display: none;\n    background-image: url(${l}) ;\n    background-position: center;\n    background-size: cover;\n    backdrop-filter: blur(4px) brightness(1.24) contrast(97%) grayscale(21%) hue-rotate(360deg) saturate(300%) sepia(100%)\n\n}\n.search-container{\nwidth: 100%;\nheight: auto;\npadding: 5%;\nalign-items: center;\ndisplay: flex;\njustify-content: center;\n\n\n\n}\n.search-bar{\n    width: 100%;\n    max-width: 350px;\n    border-radius: 60px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 10px;\n    background: darkgray;\n    backdrop-filter: blur(4px)saturate(180%);\n    border: 0px;\n}\n\n.search-bar input {\n    background: darkgray;\n    flex: 1;\n    border: 0;\n    border-radius: 30px;\n    outline: none;\n    padding: 14px 20px;\n    font-size: 20px;\n    color: white\n}\n::placeholder {\n    color: white\n}\n.search-bar button img {\n    width: 25px;\n}\n.search-bar button {\n    border: 0;\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    background-color: white;\n    cursor: pointer;\n}\n.movie-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minMax(300px, 1fr));\n    text-align: center;\n    justify-content: center;\n    \n    padding: 50px;\n}\n\n.card-container {\n    background-color: rgba(179, 175, 175, 0.6);\n    padding: 15px;\n    border-radius: 30px;\n    height: 520px;\n    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;\n    min-width: auto;\n    max-width: 280px;\n    height: auto;\n    margin: 20px;\n    text-align: center;\n    \n    align-items: center;\n}\n.inner-Container img {\n    \n    max-width:250px;\n    max-height: 350px;\n    border-radius: 25px;\n    width: auto;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    \n    object-fit:cover;\n}\n.info-container {\n    height: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    max-width: 100%\n\n   \n   }\n   \n\n.info-container ul li h2 {\n    color: white;\n    background-color: black;\n    border-radius: 25px;\n    padding: 20px;\n    min-height: 70px;\n    height: auto;\n    text-align: center;\n    font-weight: 600;\nword-break: break-all;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n\n}\n\n.secondli {\nbackground: white;\nborder-radius: 25px;\npadding: 10px 20px;\nwidth: auto;\n\n}\n.info-container li::marker{\n    content: none;\n    \n}\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.info-container ul{\n    \n    padding: 0%;\n    width: 100%;\n\n}\n\n`,""]);const u=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);r&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],p=o[d]||0,l="".concat(d," ").concat(p);o[d]=p+1;var u=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=a(m,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=r(n,a),d=0;d<o.length;d++){var p=t(o[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},510:(n,e,t)=>{n.exports=t.p+"48e40bece260b2d5e6ea.jpg"}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!n;)n=r[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),s=t.n(c),d=t(216),p=t.n(d),l=t(589),u=t.n(l),m=t(28),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=t.p+"94298fe9a09d04668ea2.png",g=t.p+"13dab5c2e8059142b5ec.png";document.querySelector("#icon").src=g;const b=document.querySelector("input"),y={method:"GET",headers:{"X-RapidAPI-Key":"d0571c092dmshccd2823e992f1f8p124d5fjsnc08a42f38170","X-RapidAPI-Host":"online-movie-database.p.rapidapi.com"}};document.querySelector("form").addEventListener("submit",(async n=>{n.preventDefault(),async function(){!function(){document.querySelector(".movie-container");let n=document.querySelectorAll("cardContainer");if(n.length>0)for(let e=0;e<n.length;e++)n[e].remove()}();const n=await fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${b.value}`,y),e=(await n.json()).d;console.log(e),e.map((n=>{const e=n.l;let t;t=n.hasOwnProperty("i")?n.i.imageUrl:f,console.log("image: ",t);const r=n.rank,a=n.y,o=n.q;let i=document.createElement("span");i.classList.add("close"),i.innerHTML="&times;",document.createElement("p").innerHTML=`<li><h2>Name: ${e}</h2><h2>Rank: ${r}</h2><h2>Year of Release: ${a}</h2><h2>Type ${o}</h2></li>`;const c=document.querySelector(".movie-container"),s=document.createElement("ul"),d=document.createElement("li"),p=document.createElement("h3"),l=document.createElement("h2"),u=document.createElement("h3"),m=document.createElement("h3"),h=document.createElement("img"),g=document.createElement("cardContainer");g.classList.add("card-container");const b=document.createElement("infocontainer");b.classList.add("info-container");const y=document.createElement("innerContainer");y.classList.add("inner-Container"),h.src=t,y.append(h),l.append(`${e}`),p.append(`Type: ${o}`),u.append(`Year Release: ${a}`),m.append(`Rank: ${r}`);const x=document.createElement("li");x.classList.add("secondli"),x.append(p,u,m),d.append(l),s.append(d,x),b.append(s),g.append(y,b),c.append(g)}))}()}));const x=document.querySelector("main"),v=document.querySelector("#searchButton");document.querySelector("#span2"),v.onclick=function(){return x.style.display="block"}})()})();