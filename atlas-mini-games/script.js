!function () {var t,e=function(e,n){var r,i=document.all,o=i.length,a=[];for(t.addRule(e,"foo:bar"),r=0;r<o&&!("bar"===i[r].currentStyle.foo&&(a.push(i[r]),a.length>n));r+=1);return t.removeRule(0),a};document.querySelectorAll||document.querySelector||(t=document.createStyleSheet(),document.querySelectorAll=document.body.querySelectorAll=function(t){return e(t,1/0)},document.querySelector=document.body.querySelector=function(t){return e(t,1)[0]||null})}(),function(t,e,n){"use strict";function r(t){if("[object Function]"!==u.prototype.toString.call(t))throw new Error(t+" is not a function")}function i(t){if(!t)throw new Error("reduce of empty array with no initial value")}function o(t){var e=!0;if(c[t])try{c[t](n,/test/,null),e=!1}catch(t){}else e=!1;return e}function a(t){o(t)||(c[t]=s(t))}function s(t){return function (e){var r;if(n===e||null===e)throw new Error("Array.prototype."+t+" called on "+e);return r=c.prototype.slice.call(arguments,1),c.prototype[t].apply(e,r)}}var c=t.Array,u=t.Object,l=t.Math,f=t.Number,h=function(t){var e;return e=f(t),e!==e?0:0===e||1/0===e||-1/0===e?e:(0<e||-1)*l.floor(l.abs(e))},d={indexOf:function(t,e){var r,i,o;for(i=(r=u(this)).length>>>0,o=n!==e?0>(e=h(e))?l.max(i+e,0):l.min(e,i):0;o<i;++o)if(o in r&&t===r[o])return o;return-1},lastIndexOf:function(t,e){var r,i,o;for(i=(r=u(this)).length>>>0,o=n!==e?0>(e=h(e))?i-l.abs(e):l.min(e,i-1):i-1;-1<o;--o)if(o in r&&t===r[o])return o;return-1},forEach:function(t,e){var n,i,o;for(n=u(this),r(t),i=n.length>>>0,o=0;o<i;++o)o in n&&t.call(e,n[o],o,n)},every:function(t,e){var n,i,o;for(n=u(this),r(t),i=n.length>>>0,o=0;o<i;++o)if(o in n&&!t.call(e,n[o],o,n))return!1;return!0},some:function(t,e){var n,i,o;for(n=u(this),r(t),i=n.length>>>0,o=0;o<i;++o)if(o in n&&t.call(e,n[o],o,n))return!0;return!1},filter:function(t,e){var n,i,o,a,s=[];for(n=u(this),r(t),i=n.length>>>0,o=a=0;o<i;++o)o in n&&t.call(e,n[o],o,n)&&(s[a++]=n[o]);return s},map:function(t,e){var n,i,o,a=[];for(n=u(this),r(t),i=n.length>>>0,o=0;o<i;++o)o in n&&(a[o]=t.call(e,n[o],o,n));return a},reduce:function(t,e){var o,a,s,c;for(o=u(this),r(t),a=n!==e,s=o.length>>>0,c=0;c<s;++c)c in o&&(a?e=t(e,o[c],c,o):(e=o[c],a=!0));return i(a),e},reduceRight:function(t,e){var o,a,s;for(o=u(this),r(t),a=n!==e,s=(o.length>>>0)-1;-1<s;--s)s in o&&(a?e=t(e,o[s],s,o):(e=o[s],a=!0));return i(a),e}};for(var p in d)d.hasOwnProperty(p)&&(function(t){var e=!0;if(c.prototype[t])try{c.prototype[t].call(n,/test/,null),e=!1}catch(t){}else e=!1;return e}(p)||(c.prototype[p]=d[p]),a(p));if(c.isArray=c.isArray||function(t){return"[object Array]"===u.prototype.toString.call(t)},["concat","join","slice","pop","push","reverse","shift","sort","splice","unshift"].forEach(a),document)try{c.slice(document.childNodes)}catch(t){c.prototype.slice=function(t,e){var r,i,o,a,s;for(o=(i=u(this)).length>>>0,a=n!==t?0>(t=h(t))?l.max(o+t,0):l.min(t,o):0,n!==e&&(o=0>(e=h(e))?l.max(o+e,0):l.min(e,o)),r=new c(o-a),s=0;a<o;++a,++s)a in i&&(r[s]=i[a]);return r}}}("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()}(0,function () {"use strict";function t(){}function e(t,e){return function () {t.apply(e,arguments)}}function n(t){if(!(this instanceof n))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],c(t,this)}function r(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,n._immediateFn(function () {var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var r;try{r=n(t._value)}catch(t){return void o(e.promise,t)}i(e.promise,r)}else(1===t._state?i:o)(e.promise,t._value)})):t._deferreds.push(e)}function i(t,r){try{if(r===t)throw new TypeError("A promise cannot be resolved with itself.");if(r&&("object"==typeof r||"function"==typeof r)){var i=r.then;if(r instanceof n)return t._state=3,t._value=r,void a(t);if("function"==typeof i)return void c(e(i,r),t)}t._state=1,t._value=r,a(t)}catch(e){o(t,e)}}function o(t,e){t._state=2,t._value=e,a(t)}function a(t){2===t._state&&0===t._deferreds.length&&n._immediateFn(function () {t._handled||n._unhandledRejectionFn(t._value)});for(var e=0,i=t._deferreds.length;e<i;e++)r(t,t._deferreds[e]);t._deferreds=null}function s(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function c(t,e){var n=!1;try{t(function(t){n||(n=!0,i(e,t))},function(t){n||(n=!0,o(e,t))})}catch(t){if(n)return;n=!0,o(e,t)}}var u=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function () {return n})},function(n){return e.resolve(t()).then(function () {return e.reject(n)})})},l=setTimeout;n.prototype.catch=function(t){return this.then(null,t)},n.prototype.then=function(e,n){var i=new this.constructor(t);return r(this,new s(e,n,i)),i},n.prototype.finally=u,n.all=function(t){return new n(function(e,n){function r(t,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){r(t,e)},n)}i[t]=a,0==--o&&e(i)}catch(t){n(t)}}if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var i=Array.prototype.slice.call(t);if(0===i.length)return e([]);for(var o=i.length,a=0;a<i.length;a++)r(a,i[a])})},n.resolve=function(t){return t&&"object"==typeof t&&t.constructor===n?t:new n(function(e){e(t)})},n.reject=function(t){return new n(function(e,n){n(t)})},n.race=function(t){return new n(function(e,n){for(var r=0,i=t.length;r<i;r++)t[r].then(e,n)})},n._immediateFn="function"==typeof setImmediate&&function(t){setImmediate(t)}||function(t){l(t,0)},n._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};var f=function () {if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("unable to locate global object")}();"Promise"in f?f.Promise.prototype.finally||(f.Promise.prototype.finally=u):f.Promise=n}),function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function n(t){return"string"!=typeof t&&(t=String(t)),t}function r(t){var e={next:function () {var e=t.shift();return{done:void 0===e,value:e}}};return v.iterable&&(e[Symbol.iterator]=function () {return e}),e}function i(t){this.map={},t instanceof i?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function o(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function a(t){return new Promise(function(e,n){t.onload=function () {e(t.result)},t.onerror=function () {n(t.error)}})}function s(t){var e=new FileReader;return e.readAsArrayBuffer(t),a(e)}function c(t){var e=new FileReader;return e.readAsText(t),a(e)}function u(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,"string"==typeof t)this._bodyText=t;else if(v.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(v.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(t){if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t))throw new Error("unsupported BodyInit type")}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob?(this.blob=function () {var t=o(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function () {return this.blob().then(s)},this.text=function () {var t=o(this);if(t)return t;if(this._bodyBlob)return c(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function () {var t=o(this);return t||Promise.resolve(this._bodyText)},v.formData&&(this.formData=function () {return this.text().then(h)}),this.json=function () {return this.text().then(JSON.parse)},this}function l(t){var e=t.toUpperCase();return y.indexOf(e)>-1?e:t}function f(t,e){var n=(e=e||{}).body;if(f.prototype.isPrototypeOf(t)){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new i(t.headers)),this.method=t.method,this.mode=t.mode,n||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=t;if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new i(e.headers)),this.method=l(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function h(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),i=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(i))}}),e}function d(t){var e=new i;return(t.getAllResponseHeaders()||"").trim().split("\n").forEach(function(t){var n=t.trim().split(":"),r=n.shift().trim(),i=n.join(":").trim();e.append(r,i)}),e}function p(t,e){e||(e={}),this.type="default",this.status=e.status,this.ok=this.status>=200&&this.status<300,this.statusText=e.statusText,this.headers=e.headers instanceof i?e.headers:new i(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var v={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function () {try{return Blob(),!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};i.prototype.append=function(t,r){t=e(t),r=n(r);var i=this.map[t];i||(i=[],this.map[t]=i),i.push(r)},i.prototype.delete=function(t){delete this.map[e(t)]},i.prototype.get=function(t){var n=this.map[e(t)];return n?n[0]:null},i.prototype.getAll=function(t){return this.map[e(t)]||[]},i.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},i.prototype.set=function(t,r){this.map[e(t)]=[n(r)]},i.prototype.forEach=function(t,e){Object.getOwnPropertyNames(this.map).forEach(function(n){this.map[n].forEach(function(r){t.call(e,r,n,this)},this)},this)},i.prototype.keys=function () {var t=[];return this.forEach(function(e,n){t.push(n)}),r(t)},i.prototype.values=function () {var t=[];return this.forEach(function(e){t.push(e)}),r(t)},i.prototype.entries=function () {var t=[];return this.forEach(function(e,n){t.push([n,e])}),r(t)},v.iterable&&(i.prototype[Symbol.iterator]=i.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];f.prototype.clone=function () {return new f(this)},u.call(f.prototype),u.call(p.prototype),p.prototype.clone=function () {return new p(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},p.error=function () {var t=new p(null,{status:0,statusText:""});return t.type="error",t};var m=[301,302,303,307,308];p.redirect=function(t,e){if(-1===m.indexOf(e))throw new RangeError("Invalid status code");return new p(null,{status:e,headers:{location:t}})},t.Headers=i,t.Request=f,t.Response=p,t.fetch=function(t,e){return new Promise(function(n,r){function i(){return"responseURL"in a?a.responseURL:/^X-Request-URL:/im.test(a.getAllResponseHeaders())?a.getResponseHeader("X-Request-URL"):void 0}var o;o=f.prototype.isPrototypeOf(t)&&!e?t:new f(t,e);var a=new XMLHttpRequest;a.onload=function () {var t={status:a.status,statusText:a.statusText,headers:d(a),url:i()},e="response"in a?a.response:a.responseText;n(new p(e,t))},a.onerror=function () {r(new TypeError("Network request failed"))},a.ontimeout=function () {r(new TypeError("Network request failed"))},a.open(o.method,o.url,!0),"include"===o.credentials&&(a.withCredentials=!0),"responseType"in a&&v.blob&&(a.responseType="blob"),o.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),a.send(void 0===o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),this.Element&&Element.prototype.attachEvent&&!Element.prototype.addEventListener&&function () {function t(t,e){Window.prototype[t]=HTMLDocument.prototype[t]=Element.prototype[t]=e}function e(t){e.interval&&document.body&&(e.interval=clearInterval(e.interval),document.dispatchEvent(new CustomEvent("DOMContentLoaded")))}t("addEventListener",function(t,e){var n=this,r=n.addEventListener.listeners=n.addEventListener.listeners||{},i=r[t]=r[t]||[];i.length||n.attachEvent("on"+t,i.event=function(t){var e=n.document&&n.document.documentElement||n.documentElement||{scrollLeft:0,scrollTop:0};t.currentTarget=n,t.pageX=t.clientX+e.scrollLeft,t.pageY=t.clientY+e.scrollTop,t.preventDefault=function () {t.returnValue=!1},t.relatedTarget=t.fromElement||null,t.stopImmediatePropagation=function () {u=!1,t.cancelBubble=!0},t.stopPropagation=function () {t.cancelBubble=!0},t.target=t.srcElement||n,t.timeStamp=+new Date;var r={};for(var o in t)t.hasOwnProperty(o)&&(r[o]=t[o]);for(var a,s=0,c=[].concat(i),u=!0;u&&(a=c[s]);++s)for(var l,f=0;l=i[f];++f)if(l===a){l.call(n,r);break}}),i.push(e)}),t("removeEventListener",function(t,e){for(var n,r=this,i=r.addEventListener.listeners=r.addEventListener.listeners||{},o=i[t]=i[t]||[],a=o.length-1;n=o[a];--a)if(n===e){o.splice(a,1);break}!o.length&&o.event&&r.detachEvent("on"+t,o.event)}),t("dispatchEvent",function(t){var e=this,n=t.type,r=e.addEventListener.listeners=e.addEventListener.listeners||{},i=r[n]=r[n]||[];try{return e.fireEvent("on"+n,t)}catch(e){return void(i.event&&i.event(t))}}),Object.defineProperty(Window.prototype,"CustomEvent",{get:function () {var t=this;return function (e,n){var r,i=t.document.createEventObject();i.type=e;for(r in n)"cancelable"===r?i.returnValue=!n.cancelable:"bubbles"===r?i.cancelBubble=!n.bubbles:"detail"===r&&(i.detail=n.detail);return i}}}),e.interval=setInterval(e,1),window.addEventListener("load",e)}(),this.CustomEvent&&"object"!=typeof this.CustomEvent||function () {this.CustomEvent=function(t,e){var n;e=e||{bubbles:!1,cancelable:!1,detail:void 0};try{(n=document.createEvent("CustomEvent")).initCustomEvent(t,e.bubbles,e.cancelable,e.detail)}catch(r){(n=document.createEvent("Event")).initEvent(t,e.bubbles,e.cancelable),n.detail=e.detail}return n}}(),"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(t){"use strict";if("Element"in t){var e=t.Element.prototype,n=Object,r=String.prototype.trim||function () {return this.replace(/^\s+|\s+$/g,"")},i=Array.prototype.indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1},o=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},a=function(t,e){if(""===e)throw new o("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(e))throw new o("INVALID_CHARACTER_ERR","String contains an invalid character");return i.call(t,e)},s=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],i=0,o=n.length;i<o;i++)this.push(n[i]);this._updateClassName=function () {t.setAttribute("class",this.toString())}},c=s.prototype=[],u=function () {return new s(this)};if(o.prototype=Error.prototype,c.item=function(t){return this[t]||null},c.contains=function(t){return t+="",-1!==a(this,t)},c.add=function () {var t,e=arguments,n=0,r=e.length,i=!1;do{t=e[n]+"",-1===a(this,t)&&(this.push(t),i=!0)}while(++n<r);i&&this._updateClassName()},c.remove=function () {var t,e,n=arguments,r=0,i=n.length,o=!1;do{for(t=n[r]+"",e=a(this,t);-1!==e;)this.splice(e,1),o=!0,e=a(this,t)}while(++r<i);o&&this._updateClassName()},c.toggle=function(t,e){t+="";var n=this.contains(t),r=n?!0!==e&&"remove":!1!==e&&"add";return r&&this[r](t),!0===e||!1===e?e:!n},c.toString=function () {return this.join(" ")},n.defineProperty){var l={get:u,enumerable:!0,configurable:!0};try{n.defineProperty(e,"classList",l)}catch(t){void 0!==t.number&&-2146823252!==t.number||(l.enumerable=!1,n.defineProperty(e,"classList",l))}}else n.prototype.__defineGetter__&&e.__defineGetter__("classList",u)}}(self),function () {"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,r=arguments.length;for(n=0;n<r;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){var r=!this.contains(t),i=!e;return 1 in arguments&&r===i?e:n.call(this,t)}}t=null}()),function () {"use strict";function t(t){return t.replace(i,function(t,e){return e.toUpperCase()})}var e,n=[].forEach,r=/^data-(.+)/,i=/\-([a-z])/gi,o=document.createElement("div"),a=!1,s=function () {a=!0,this.removeEventListener("DOMAttrModified",s,!1)},c=function () {var i={};return n.call(this.attributes,function(n){(e=n.name.match(r)||"")&&(i[t(e[1])]=n.value)}),i};"undefined"===o.dataset&&(o.addEventListener("DOMAttrModified",s,!1),o.setAttribute("foo","bar"),function(t,e,n){Object.defineProperty?Object.defineProperty(t,e,{get:n}):t.__defineGetter__(e,n)}(Element.prototype,"dataset",a?function () {return this._datasetCache||(this._datasetCache=c.call(this)),this._datasetCache}:c),document.addEventListener("DOMAttrModified",function(t){delete t.target._datasetCache},!1))}(),window.matchMedia||(window.matchMedia=function () {"use strict";var t=window.styleMedia||window.media;if(!t){var e=document.createElement("style"),n=document.getElementsByTagName("script")[0],r=null;e.type="text/css",e.id="matchmediajs-test",n.parentNode.insertBefore(e,n),r="getComputedStyle"in window&&window.getComputedStyle(e,null)||e.currentStyle,t={matchMedium:function(t){var n="@media "+t+"{ #matchmediajs-test { width: 1px; } }";return e.styleSheet?e.styleSheet.cssText=n:e.textContent=n,"1px"===r.width}}}return function (e){return{matches:t.matchMedium(e||"all"),media:e||"all"}}}()),function () {for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n){var r=(new Date).getTime(),i=Math.max(0,16-(r-t)),o=window.setTimeout(function () {e(r+i)},i);return t=r+i,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),Function.prototype.bind||(Function.prototype.bind=function () {}.bind||function(t){function e(){}if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var n=[].slice,r=n.call(arguments,1),i=this,o=function () {return i.apply(this instanceof e?this:t||window,r.concat(n.call(arguments)))};return e.prototype=this.prototype,o.prototype=new e,o}),Object.defineProperty&&Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(Element.prototype,"textContent")&&!Object.getOwnPropertyDescriptor(Element.prototype,"textContent").get&&function () {var t=Object.getOwnPropertyDescriptor(Element.prototype,"innerText");Object.defineProperty(Element.prototype,"textContent",{get:function () {return t.get.call(this)},set:function(e){return t.set.call(this,e)}})}(),void 0!==window.localStorage&&void 0!==window.sessionStorage||function () {var t=function(t){function e(t,e,n){var r,i;n?((r=new Date).setTime(r.getTime()+24*n*60*60*1e3),i="; expires="+r.toGMTString()):i="",document.cookie=t+"="+e+i+"; path=/"}function n(t){var e,n,r=t+"=",i=document.cookie.split(";");for(e=0;e<i.length;e++){for(n=i[e];" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(r))return n.substring(r.length,n.length)}return null}function r(n){n=JSON.stringify(n),"session"===t?window.name=n:e("localStorage",n,365)}function i(){"session"===t?window.name="":e("localStorage","",365)}var o=function () {var e="session"===t?window.name:n("localStorage");return e?JSON.parse(e):{}}();return{length:0,clear:function () {o={},this.length=0,i()},getItem:function(t){return void 0===o[t]?null:o[t]},key:function(t){var e=0;for(var n in o){if(e===t)return n;e++}return null},removeItem:function(t){delete o[t],this.length--,r(o)},setItem:function(t,e){o[t]=e+"",this.length++,r(o)}}};void 0===window.localStorage&&(window.localStorage=new t("local")),void 0===window.sessionStorage&&(window.sessionStorage=new t("session"))}(),function(t){"use strict";function e(t){return Object(t)===t}if(!t.WeakMap){var n=Object.prototype.hasOwnProperty,r=function(t,e,n){Object.defineProperty?Object.defineProperty(t,e,{configurable:!0,writable:!0,value:n}):t[e]=n};t.WeakMap=function () {function t(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(r(this,"_id",o("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function i(t,r){if(!e(t)||!n.call(t,"_id"))throw new TypeError(r+" method called on incompatible receiver "+typeof t)}function o(t){return t+"_"+a()+"."+a()}function a(){return Math.random().toString().substring(2)}return r(t.prototype,"delete",function(t){if(i(this,"delete"),!e(t))return!1;var n=t[this._id];return!(!n||n[0]!==t)&&(delete t[this._id],!0)}),r(t.prototype,"get",function(t){if(i(this,"get"),e(t)){var n=t[this._id];return n&&n[0]===t?n[1]:void 0}}),r(t.prototype,"has",function(t){if(i(this,"has"),!e(t))return!1;var n=t[this._id];return!(!n||n[0]!==t)}),r(t.prototype,"set",function(t,n){if(i(this,"set"),!e(t))throw new TypeError("Invalid value used as weak map key");var o=t[this._id];return o&&o[0]===t?(o[1]=n,this):(r(t,this._id,[t,n]),this)}),r(t,"_polyfill",!0),t}()}}("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(t){function e(t){g.push(t),w||(w=!0,v(r))}function n(t){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(t)||t}function r(){w=!1;var t=g;g=[],t.sort(function(t,e){return t.uid_-e.uid_});var e=!1;t.forEach(function(t){var n=t.takeRecords();i(t),n.length&&(t.callback_(n,t),e=!0)}),e&&r()}function i(t){t.nodes_.forEach(function(e){var n=y.get(e);n&&n.forEach(function(e){e.observer===t&&e.removeTransientObservers()})})}function o(t,e){for(var n=t;n;n=n.parentNode){var r=y.get(n);if(r)for(var i=0;i<r.length;i++){var o=r[i],a=o.options;if(n===t||a.subtree){var s=e(a);s&&o.enqueue(s)}}}}function a(t){this.callback_=t,this.nodes_=[],this.records_=[],this.uid_=++E}function s(t,e){this.type=t,this.target=e,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function c(t){var e=new s(t.type,t.target);return e.addedNodes=t.addedNodes.slice(),e.removedNodes=t.removedNodes.slice(),e.previousSibling=t.previousSibling,e.nextSibling=t.nextSibling,e.attributeName=t.attributeName,e.attributeNamespace=t.attributeNamespace,e.oldValue=t.oldValue,e}function u(t,e){return _=new s(t,e)}function l(t){return O||(O=c(_),O.oldValue=t,O)}function f(){_=O=void 0}function h(t){return t===O||t===_}function d(t,e){return t===e?t:O&&h(t)?O:null}function p(t,e,n){this.observer=t,this.target=e,this.options=n,this.transientObservedNodes=[]}if(!t.JsMutationObserver){var v,y=new WeakMap;if(/Trident|Edge/.test(navigator.userAgent))v=setTimeout;else if(window.setImmediate)v=window.setImmediate;else{var m=[],b=String(Math.random());window.addEventListener("message",function(t){if(t.data===b){var e=m;m=[],e.forEach(function(t){t()})}}),v=function(t){m.push(t),window.postMessage(b,"*")}}var w=!1,g=[],E=0;a.prototype={observe:function(t,e){if(t=n(t),!e.childList&&!e.attributes&&!e.characterData||e.attributeOldValue&&!e.attributes||e.attributeFilter&&e.attributeFilter.length&&!e.attributes||e.characterDataOldValue&&!e.characterData)throw new SyntaxError;var r=y.get(t);r||y.set(t,r=[]);for(var i,o=0;o<r.length;o++)if(r[o].observer===this){(i=r[o]).removeListeners(),i.options=e;break}i||(i=new p(this,t,e),r.push(i),this.nodes_.push(t)),i.addListeners()},disconnect:function () {this.nodes_.forEach(function(t){for(var e=y.get(t),n=0;n<e.length;n++){var r=e[n];if(r.observer===this){r.removeListeners(),e.splice(n,1);break}}},this),this.records_=[]},takeRecords:function () {var t=this.records_;return this.records_=[],t}};var _,O;p.prototype={enqueue:function(t){var n=this.observer.records_,r=n.length;if(n.length>0){var i=d(n[r-1],t);if(i)return void(n[r-1]=i)}else e(this.observer);n[r]=t},addListeners:function () {this.addListeners_(this.target)},addListeners_:function(t){var e=this.options;e.attributes&&t.addEventListener("DOMAttrModified",this,!0),e.characterData&&t.addEventListener("DOMCharacterDataModified",this,!0),e.childList&&t.addEventListener("DOMNodeInserted",this,!0),(e.childList||e.subtree)&&t.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function () {this.removeListeners_(this.target)},removeListeners_:function(t){var e=this.options;e.attributes&&t.removeEventListener("DOMAttrModified",this,!0),e.characterData&&t.removeEventListener("DOMCharacterDataModified",this,!0),e.childList&&t.removeEventListener("DOMNodeInserted",this,!0),(e.childList||e.subtree)&&t.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(t){if(t!==this.target){this.addListeners_(t),this.transientObservedNodes.push(t);var e=y.get(t);e||y.set(t,e=[]),e.push(this)}},removeTransientObservers:function () {var t=this.transientObservedNodes;this.transientObservedNodes=[],t.forEach(function(t){this.removeListeners_(t);for(var e=y.get(t),n=0;n<e.length;n++)if(e[n]===this){e.splice(n,1);break}},this)},handleEvent:function(t){switch(t.stopImmediatePropagation(),t.type){case"DOMAttrModified":var e=t.attrName,n=t.relatedNode.namespaceURI,r=t.target,i=new u("attributes",r);i.attributeName=e,i.attributeNamespace=n;var a=t.attrChange===MutationEvent.ADDITION?null:t.prevValue;o(r,function(t){if(t.attributes&&(!t.attributeFilter||!t.attributeFilter.length||-1!==t.attributeFilter.indexOf(e)||-1!==t.attributeFilter.indexOf(n)))return t.attributeOldValue?l(a):i});break;case"DOMCharacterDataModified":r=t.target,i=u("characterData",r),a=t.prevValue,o(r,function(t){if(t.characterData)return t.characterDataOldValue?l(a):i});break;case"DOMNodeRemoved":this.addTransientObserver(t.target);case"DOMNodeInserted":var s,c,h=t.target;"DOMNodeInserted"===t.type?(s=[h],c=[]):(s=[],c=[h]);var d=h.previousSibling,p=h.nextSibling;(i=u("childList",t.target.parentNode)).addedNodes=s,i.removedNodes=c,i.previousSibling=d,i.nextSibling=p,o(t.relatedNode,function(t){if(t.childList)return i})}f()}},t.JsMutationObserver=a,t.MutationObserver||(t.MutationObserver=a,a._isPolyfilled=!0)}}("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(t){"use strict";function e(){return f.createDocumentFragment()}function n(t){return f.createElement(t)}function r(t,e){if(!t)throw new Error("Failed to construct "+e+": 1 argument required, but only 0 present.")}function i(t){if(1===t.length)return o(t[0]);for(var n=e(),r=q.call(t),i=0;i<t.length;i++)n.appendChild(o(r[i]));return n}function o(t){return"string"==typeof t?f.createTextNode(t):t}for(var a,s,c,u,l,f=t.document,h=Object.prototype.hasOwnProperty,d=Object.defineProperty||function(t,e,n){return h.call(n,"value")?t[e]=n.value:(h.call(n,"get")&&t.__defineGetter__(e,n.get),h.call(n,"set")&&t.__defineSetter__(e,n.set)),t},p=[].indexOf||function(t){for(var e=this.length;e--&&this[e]!==t;);return e},v=function(t){if(!t)throw"SyntaxError";if(g.test(t))throw"InvalidCharacterError";return t},y=function(t){var e=void 0===t.className,n=e?t.getAttribute("class")||"":t.className,r=e||"object"==typeof n,i=(r?e?n:n.baseVal:n).replace(w,"");i.length&&R.push.apply(this,i.split(g)),this._isSVG=r,this._=t},m={get:function () {return new y(this)},set:function () {}},b="dom4-tmp-".concat(Math.random()*+new Date).replace(".","-"),w=/^\s+|\s+$/g,g=/\s+/,E=function(t,e){return this.contains(t)?e||this.remove(t):(void 0===e||e)&&(e=!0,this.add(t)),!!e},_=t.DocumentFragment&&DocumentFragment.prototype,O=t.Node,L=(O||Element).prototype,S=t.CharacterData||O,T=S&&S.prototype,M=t.DocumentType,A=M&&M.prototype,D=(t.Element||O||t.HTMLElement).prototype,N=t.HTMLSelectElement||n("select").constructor,C=N.prototype.remove,P=t.ShadowRoot,j=t.SVGElement,x=/ /g,k=function(t){var e="querySelectorAll"===t;return function (n){var r,i,o,a,s,c,u=this.parentNode;if(u){for(a=(o=this.getAttribute("id")||b)===b?o:o.replace(x,"\\ "),c=n.split(","),i=0;i<c.length;i++)c[i]="#"+a+" "+c[i];n=c.join(",")}if(o===b&&this.setAttribute("id",o),s=(u||this)[t](n),o===b&&this.removeAttribute("id"),e)for(i=s.length,r=new Array(i);i--;)r[i]=s[i];else r=s;return r}},F=(function(t){"query"in t||(t.query=D.query),"queryAll"in t||(t.queryAll=D.queryAll)}),R=["matches",D.matchesSelector||D.webkitMatchesSelector||D.khtmlMatchesSelector||D.mozMatchesSelector||D.msMatchesSelector||D.oMatchesSelector||function(t){var e=this.parentNode;return!!e&&-1<p.call(e.querySelectorAll(t),this)},"closest",function(t){for(var e,n=this;(e=n&&n.matches)&&!n.matches(t);)n=n.parentNode;return e?n:null},"prepend",function () {var t=this.firstChild,e=i(arguments);t?this.insertBefore(e,t):this.appendChild(e)},"append",function () {this.appendChild(i(arguments))},"before",function () {var t=this.parentNode;t&&t.insertBefore(i(arguments),this)},"after",function () {var t=this.parentNode,e=this.nextSibling,n=i(arguments);t&&(e?t.insertBefore(n,e):t.appendChild(n))},"replace",function () {this.replaceWith.apply(this,arguments)},"replaceWith",function () {var t=this.parentNode;t&&t.replaceChild(i(arguments),this)},"remove",function () {var t=this.parentNode;t&&t.removeChild(this)},"query",k("querySelector"),"queryAll",k("querySelectorAll")],q=R.slice,I=R.length;I;I-=2)if((s=R[I-2])in D||(D[s]=R[I-1]),"remove"===s&&(N.prototype[s]=function () {return 0<arguments.length?C.apply(this,arguments):D.remove.call(this)}),/^(?:before|after|replace|replaceWith|remove)$/.test(s)&&(!S||s in T||(T[s]=R[I-1]),!M||s in A||(A[s]=R[I-1])),/^(?:append|prepend)$/.test(s))if(_)s in _||(_[s]=R[I-1]);else try{e().constructor.prototype[s]=R[I-1]}catch(t){}if(F(f),_)F(_);else try{F(e().constructor.prototype)}catch(t){}P&&F(P.prototype),n("a").matches("a")||(D[s]=function(t){return function (n){return t.call(this.parentNode?this:e().appendChild(this),n)}}(D[s])),y.prototype={length:0,add:function () {for(var t,e=0;e<arguments.length;e++)t=arguments[e],this.contains(t)||R.push.call(this,s);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},contains:function(t){return function (e){return-1<(I=t.call(this,s=v(e)))}}([].indexOf||function(t){for(I=this.length;I--&&this[I]!==t;);return I}),item:function(t){return this[t]||null},remove:function () {for(var t,e=0;e<arguments.length;e++)t=arguments[e],this.contains(t)&&R.splice.call(this,I,1);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},toggle:E,toString:function () {return R.join.call(this," ")}},!j||"classList"in j.prototype||d(j.prototype,"classList",m),"classList"in f.documentElement?((u=n("div").classList).add("a","b","a"),"a b"!=u&&("add"in(c=u.constructor.prototype)||(c=t.TemporaryTokenList.prototype),l=function(t){return function () {for(var e=0;e<arguments.length;)t.call(this,arguments[e++])}},c.add=l(c.add),c.remove=l(c.remove),c.toggle=E)):d(D,"classList",m),"contains"in L||d(L,"contains",{value:function(t){for(;t&&t!==this;)t=t.parentNode;return this===t}}),"head"in f||d(f,"head",{get:function () {return a||(a=f.getElementsByTagName("head")[0])}}),function () {for(var e,n=t.requestAnimationFrame,r=t.cancelAnimationFrame,i=["o","ms","moz","webkit"],o=i.length;!r&&o--;)n=n||t[i[o]+"RequestAnimationFrame"],r=t[i[o]+"CancelAnimationFrame"]||t[i[o]+"CancelRequestAnimationFrame"];r||(n?(e=n,n=function(t){var n=!0;return e(function () {n&&t.apply(this,arguments)}),function () {n=!1}},r=function(t){t()}):(n=function(t){return setTimeout(t,15,15)},r=function(t){clearTimeout(t)})),t.requestAnimationFrame=n,t.cancelAnimationFrame=r}();try{new t.CustomEvent("?")}catch(e){t.CustomEvent=function(t,e){function n(t,e,n,r){this.initEvent(t,e,n),this.detail=r}return function (r,i){var o=f.createEvent(t);if("string"!=typeof r)throw new Error("An event name must be provided");return"Event"==t&&(o.initCustomEvent=n),null==i&&(i=e),o.initCustomEvent(r,i.bubbles,i.cancelable,i.detail),o}}(t.CustomEvent?"CustomEvent":"Event",{bubbles:!1,cancelable:!1,detail:null})}try{new Event("_")}catch(e){e=function(t){function e(t,e){r(arguments.length,"Event");var n=f.createEvent("Event");return e||(e={}),n.initEvent(t,!!e.bubbles,!!e.cancelable),n}return e.prototype=t.prototype,e}(t.Event||function () {}),d(t,"Event",{value:e}),Event!==e&&(Event=e)}try{new KeyboardEvent("_",{})}catch(e){e=function(e){function n(t){for(var e=[],n=["ctrlKey","Control","shiftKey","Shift","altKey","Alt","metaKey","Meta","altGraphKey","AltGraph"],r=0;r<n.length;r+=2)t[n[r]]&&e.push(n[r+1]);return e.join(" ")}function i(t,e){for(var n in e)e.hasOwnProperty(n)&&!e.hasOwnProperty.call(t,n)&&(t[n]=e[n]);return t}function o(t,e,n){try{e[t]=n[t]}catch(t){}}function a(e,a){r(arguments.length,"KeyboardEvent"),a=i(a||{},u);var l,h=f.createEvent(s),d=a.ctrlKey,p=a.shiftKey,v=a.altKey,y=a.metaKey,m=a.altGraphKey,b=c>3?n(a):null,w=String(a.key),g=String(a.char),E=a.location,_=a.keyCode||(a.keyCode=w)&&w.charCodeAt(0)||0,O=a.charCode||(a.charCode=g)&&g.charCodeAt(0)||0,L=a.bubbles,S=a.cancelable,T=a.repeat,M=a.locale,A=a.view||t;if(a.which||(a.which=a.keyCode),"initKeyEvent"in h)h.initKeyEvent(e,L,S,A,d,v,p,y,_,O);else if(0<c&&"initKeyboardEvent"in h){switch(l=[e,L,S,A],c){case 1:l.push(w,E,d,p,v,y,m);break;case 2:l.push(d,v,p,y,_,O);break;case 3:l.push(w,E,d,v,p,y,m);break;case 4:l.push(w,E,b,T,M);break;default:l.push(char,w,E,b,T,M)}h.initKeyboardEvent.apply(h,l)}else h.initEvent(e,L,S);for(w in h)u.hasOwnProperty(w)&&h[w]!==a[w]&&o(w,h,a);return h}var s,c=0,u={char:"",key:"",location:0,ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,altGraphKey:!1,repeat:!1,locale:navigator.language,detail:0,bubbles:!1,cancelable:!1,keyCode:0,charCode:0,which:0};try{var l=f.createEvent("KeyboardEvent");l.initKeyboardEvent("keyup",!1,!1,t,"+",3,!0,!1,!0,!1,!1),c="+"==(l.keyIdentifier||l.key)&&3==(l.keyLocation||l.location)&&(l.ctrlKey?l.altKey?1:3:l.shiftKey?2:4)||9}catch(t){}return s=0<c?"KeyboardEvent":"Event",a.prototype=e.prototype,a}(t.KeyboardEvent||function () {}),d(t,"KeyboardEvent",{value:e}),KeyboardEvent!==e&&(KeyboardEvent=e)}try{new MouseEvent("_",{})}catch(e){e=function(e){function n(e,n){r(arguments.length,"MouseEvent");var i=f.createEvent("MouseEvent");return n||(n={}),i.initMouseEvent(e,!!n.bubbles,!!n.cancelable,n.view||t,n.detail||1,n.screenX||0,n.screenY||0,n.clientX||0,n.clientY||0,!!n.ctrlKey,!!n.altKey,!!n.shiftKey,!!n.metaKey,n.button||0,n.relatedTarget||null),i}return n.prototype=e.prototype,n}(t.MouseEvent||function () {}),d(t,"MouseEvent",{value:e}),MouseEvent!==e&&(MouseEvent=e)}}(window),function(t){"use strict";function e(){}function n(t,e,r){function i(t){i.once&&(t.currentTarget.removeEventListener(t.type,e,i),i.removed=!0),i.passive&&(t.preventDefault=n.preventDefault),"function"==typeof i.callback?i.callback.call(this,t):i.callback&&i.callback.handleEvent(t),i.passive&&delete t.preventDefault}return i.type=t,i.callback=e,i.capture=!!r.capture,i.passive=!!r.passive,i.once=!!r.once,i.removed=!1,i}var r=t.WeakMap||function () {function t(t,e,n){s=n,a=!1,r=void 0,t.dispatchEvent(e)}function e(t){this.value=t}function n(){i++,this.__ce__=new o("@DOMMap:"+i+Math.random())}var r,i=0,a=!1,s=!1;return e.prototype.handleEvent=function(t){a=!0,s?t.currentTarget.removeEventListener(t.type,this,!1):r=this.value},n.prototype={constructor:n,delete:function(e){return t(e,this.__ce__,!0),a},get:function(e){t(e,this.__ce__,!1);var n=r;return r=void 0,n},has:function(e){return t(e,this.__ce__,!1),a},set:function(n,r){return t(n,this.__ce__,!0),n.addEventListener(this.__ce__.type,new e(r),!1),this}},n}();e.prototype=(Object.create||Object)(null),n.preventDefault=function () {};var i,o=t.CustomEvent,a=(Object.prototype.hasOwnProperty,t.dispatchEvent),s=t.addEventListener,c=t.removeEventListener,u=0,l=function () {u++},f=[].indexOf||function(t){for(var e=this.length;e--&&this[e]!==t;);return e},h=function(t){return"".concat(t.capture?"1":"0",t.passive?"1":"0",t.once?"1":"0")};try{s("_",l,{once:!0}),a(new o("_")),a(new o("_")),c("_",l,{once:!0})}catch(t){}1!==u&&function () {function o(t){return function (r,i,o){if(o&&"boolean"!=typeof o){var a,c,u,l=s.get(this),d=h(o);l||s.set(this,l=new e),r in l||(l[r]={handler:[],wrap:[]}),c=l[r],(a=f.call(c.handler,i))<0?(a=c.handler.push(i)-1,c.wrap[a]=u=new e):u=c.wrap[a],d in u||(u[d]=n(r,i,o),t.call(this,r,u[d],u[d].capture))}else t.call(this,r,i,o)}}function a(t){return function (e,n,r){if(r&&"boolean"!=typeof r){var i,o,a,c,u=s.get(this);if(u&&e in u&&(a=u[e],-1<(o=f.call(a.handler,n))&&(i=h(r),c=a.wrap[o],i in c))){t.call(this,e,c[i],c[i].capture),delete c[i];for(i in c)return;a.handler.splice(o,1),a.wrap.splice(o,1),0===a.handler.length&&delete u[e]}}else t.call(this,e,n,r)}}var s=new r;i=function(t){if(t){var e=t.prototype;e.addEventListener=o(e.addEventListener),e.removeEventListener=a(e.removeEventListener)}},t.EventTarget?i(EventTarget):(i(t.Text),i(t.Element||t.HTMLElement),i(t.HTMLDocument),i(t.Window||{prototype:t}),i(t.XMLHttpRequest))}()}(self);












function _typeof(obj) {
	if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
		_typeof = function _typeof(obj) {
			return typeof obj;
		};
	} else {
		_typeof = function _typeof(obj) {
			return obj &&
				typeof Symbol === "function" &&
				obj.constructor === Symbol &&
				obj !== Symbol.prototype
				? "symbol"
				: typeof obj;
		};
	}
	return _typeof(obj);
}

/*!
 * Platform.js <https://mths.be/platform>
 * Copyright 2014-2016 Benjamin Tan <https://demoneaux.github.io/>
 * Copyright 2011-2013 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <https://mths.be/mit>
 */

/* jshint ignore:start */
(function () {
	"use strict";

	var objectTypes = {
		function: true,
		object: true
	};
	var root =
		(objectTypes[
			typeof window === "undefined" ? "undefined" : _typeof(window)
		] &&
			window) ||
		this;
	var oldRoot = root;
	var freeExports =
		objectTypes[
			typeof exports === "undefined" ? "undefined" : _typeof(exports)
		] && exports;
	var freeModule =
		objectTypes[
			typeof module === "undefined" ? "undefined" : _typeof(module)
		] &&
		module &&
		!module.nodeType &&
		module;
	var freeGlobal =
		freeExports &&
		freeModule &&
		(typeof global === "undefined" ? "undefined" : _typeof(global)) ==
			"object" &&
		global;

	if (
		freeGlobal &&
		(freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal)
	) {
		root = freeGlobal;
	}

	var maxSafeInteger = Math.pow(2, 53) - 1;
	var reOpera = /\bOpera/;
	var thisBinding = this;
	var objectProto = Object.prototype;
	var hasOwnProperty = objectProto.hasOwnProperty;
	var toString = objectProto.toString;

	function capitalize(string) {
		string = String(string);
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function cleanupOS(os, pattern, label) {
		var data = {
			"10.0": "10",
			"6.4": "10 Technical Preview",
			"6.3": "8.1",
			"6.2": "8",
			"6.1": "Server 2008 R2 / 7",
			"6.0": "Server 2008 / Vista",
			"5.2": "Server 2003 / XP 64-bit",
			"5.1": "XP",
			"5.01": "2000 SP1",
			"5.0": "2000",
			"4.0": "NT",
			"4.90": "ME"
		};

		if (
			pattern &&
			label &&
			/^Win/i.test(os) &&
			!/^Windows Phone /i.test(os) &&
			(data = data[/[\d.]+$/.exec(os)])
		) {
			os = "Windows " + data;
		}

		os = String(os);

		if (pattern && label) {
			os = os.replace(RegExp(pattern, "i"), label);
		}

		os = format(
			os
				.replace(/ ce$/i, " CE")
				.replace(/\bhpw/i, "web")
				.replace(/\bMacintosh\b/, "Mac OS")
				.replace(/_PowerPC\b/i, " OS")
				.replace(/\b(OS X) [^ \d]+/i, "$1")
				.replace(/\bMac (OS X)\b/, "$1")
				.replace(/\/(\d)/, " $1")
				.replace(/_/g, ".")
				.replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
				.replace(/\bx86\.64\b/gi, "x86_64")
				.replace(/\b(Windows Phone) OS\b/, "$1")
				.replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1")
				.split(" on ")[0]
		);
		return os;
	}

	function each(object, callback) {
		var index = -1,
			length = object ? object.length : 0;

		if (
			typeof length == "number" &&
			length > -1 &&
			length <= maxSafeInteger
		) {
			while (++index < length) {
				callback(object[index], index, object);
			}
		} else {
			forOwn(object, callback);
		}
	}

	function format(string) {
		string = trim(string);
		return /^(?:webOS|i(?:OS|P))/.test(string)
			? string
			: capitalize(string);
	}

	function forOwn(object, callback) {
		for (var key in object) {
			if (hasOwnProperty.call(object, key)) {
				callback(object[key], key, object);
			}
		}
	}

	function getClassOf(value) {
		return value == null
			? capitalize(value)
			: toString.call(value).slice(8, -1);
	}

	function isHostType(object, property) {
		var type = object != null ? _typeof(object[property]) : "number";
		return (
			!/^(?:boolean|number|string|undefined)$/.test(type) &&
			(type == "object" ? !!object[property] : true)
		);
	}

	function qualify(string) {
		return String(string).replace(/([ -])(?!$)/g, "$1?");
	}

	function reduce(array, callback) {
		var accumulator = null;
		each(array, function(value, index) {
			accumulator = callback(accumulator, value, index, array);
		});
		return accumulator;
	}

	function trim(string) {
		return String(string).replace(/^ +| +$/g, "");
	}

	function parse(ua) {
		var context = root;
		var isCustomContext =
			ua && _typeof(ua) == "object" && getClassOf(ua) != "String";

		if (isCustomContext) {
			context = ua;
			ua = null;
		}

		var nav = context.navigator || {};
		var userAgent = nav.userAgent || "";
		ua || (ua = userAgent);
		var isModuleScope = isCustomContext || thisBinding == oldRoot;
		var likeChrome = isCustomContext
			? !!nav.likeChrome
			: /\bChrome\b/.test(ua) &&
			  !/internal|\n/i.test(toString.toString());
		var objectClass = "Object",
			airRuntimeClass = isCustomContext
				? objectClass
				: "ScriptBridgingProxyObject",
			enviroClass = isCustomContext ? objectClass : "Environment",
			javaClass =
				isCustomContext && context.java
					? "JavaPackage"
					: getClassOf(context.java),
			phantomClass = isCustomContext ? objectClass : "RuntimeObject";
		var java = /\bJava/.test(javaClass) && context.java;
		var rhino = java && getClassOf(context.environment) == enviroClass;
		var alpha = java ? "a" : "\u03B1";
		var beta = java ? "b" : "\u03B2";
		var doc = context.document || {};
		var opera = context.operamini || context.opera;
		var operaClass = reOpera.test(
			(operaClass =
				isCustomContext && opera
					? opera["[[Class]]"]
					: getClassOf(opera))
		)
			? operaClass
			: (opera = null);
		var data;
		var arch = ua;
		var description = [];
		var prerelease = null;
		var useFeatures = ua == userAgent;
		var version =
			useFeatures &&
			opera &&
			typeof opera.version == "function" &&
			opera.version();
		var isSpecialCasedOS;
		var layout = getLayout([
			{
				label: "EdgeHTML",
				pattern: "Edge"
			},
			"Trident",
			{
				label: "WebKit",
				pattern: "AppleWebKit"
			},
			"iCab",
			"Presto",
			"NetFront",
			"Tasman",
			"KHTML",
			"Gecko"
		]);
		var name = getName([
			"Adobe AIR",
			"Arora",
			"Avant Browser",
			"Breach",
			"Camino",
			"Electron",
			"Epiphany",
			"Fennec",
			"Flock",
			"Galeon",
			"GreenBrowser",
			"iCab",
			"Iceweasel",
			"K-Meleon",
			"Konqueror",
			"Lunascape",
			"Maxthon",
			{
				label: "Microsoft Edge",
				pattern: "Edge"
			},
			"Midori",
			"Nook Browser",
			"PaleMoon",
			"PhantomJS",
			"Raven",
			"Rekonq",
			"RockMelt",
			{
				label: "Samsung Internet",
				pattern: "SamsungBrowser"
			},
			"SeaMonkey",
			{
				label: "Silk",
				pattern: "(?:Cloud9|Silk-Accelerated)"
			},
			"Sleipnir",
			"SlimBrowser",
			{
				label: "SRWare Iron",
				pattern: "Iron"
			},
			"Sunrise",
			"Swiftfox",
			"Waterfox",
			"WebPositive",
			"Opera Mini",
			{
				label: "Opera Mini",
				pattern: "OPiOS"
			},
			"Opera",
			{
				label: "Opera",
				pattern: "OPR"
			},
			"Chrome",
			{
				label: "Chrome Mobile",
				pattern: "(?:CriOS|CrMo)"
			},
			{
				label: "Firefox",
				pattern: "(?:Firefox|Minefield)"
			},
			{
				label: "Firefox for iOS",
				pattern: "FxiOS"
			},
			{
				label: "IE",
				pattern: "IEMobile"
			},
			{
				label: "IE",
				pattern: "MSIE"
			},
			"Safari"
		]);
		var product = getProduct([
			{
				label: "BlackBerry",
				pattern: "BB10"
			},
			"BlackBerry",
			{
				label: "Galaxy S",
				pattern: "GT-I9000"
			},
			{
				label: "Galaxy S2",
				pattern: "GT-I9100"
			},
			{
				label: "Galaxy S3",
				pattern: "GT-I9300"
			},
			{
				label: "Galaxy S4",
				pattern: "GT-I9500"
			},
			{
				label: "Galaxy S5",
				pattern: "SM-G900"
			},
			{
				label: "Galaxy S6",
				pattern: "SM-G920"
			},
			{
				label: "Galaxy S6 Edge",
				pattern: "SM-G925"
			},
			{
				label: "Galaxy S7",
				pattern: "SM-G930"
			},
			{
				label: "Galaxy S7 Edge",
				pattern: "SM-G935"
			},
			"Google TV",
			"Lumia",
			"iPad",
			"iPod",
			"iPhone",
			"Kindle",
			{
				label: "Kindle Fire",
				pattern: "(?:Cloud9|Silk-Accelerated)"
			},
			"Nexus",
			"Nook",
			"PlayBook",
			"PlayStation Vita",
			"PlayStation",
			"TouchPad",
			"Transformer",
			{
				label: "Wii U",
				pattern: "WiiU"
			},
			"Wii",
			"Xbox One",
			{
				label: "Xbox 360",
				pattern: "Xbox"
			},
			"Xoom"
		]);
		var manufacturer = getManufacturer({
			Apple: {
				iPad: 1,
				iPhone: 1,
				iPod: 1
			},
			Archos: {},
			Amazon: {
				Kindle: 1,
				"Kindle Fire": 1
			},
			Asus: {
				Transformer: 1
			},
			"Barnes & Noble": {
				Nook: 1
			},
			BlackBerry: {
				PlayBook: 1
			},
			Google: {
				"Google TV": 1,
				Nexus: 1
			},
			HP: {
				TouchPad: 1
			},
			HTC: {},
			LG: {},
			Microsoft: {
				Xbox: 1,
				"Xbox One": 1
			},
			Motorola: {
				Xoom: 1
			},
			Nintendo: {
				"Wii U": 1,
				Wii: 1
			},
			Nokia: {
				Lumia: 1
			},
			Samsung: {
				"Galaxy S": 1,
				"Galaxy S2": 1,
				"Galaxy S3": 1,
				"Galaxy S4": 1
			},
			Sony: {
				PlayStation: 1,
				"PlayStation Vita": 1
			}
		});
		var os = getOS([
			"Windows Phone",
			"Android",
			"CentOS",
			{
				label: "Chrome OS",
				pattern: "CrOS"
			},
			"Debian",
			"Fedora",
			"FreeBSD",
			"Gentoo",
			"Haiku",
			"Kubuntu",
			"Linux Mint",
			"OpenBSD",
			"Red Hat",
			"SuSE",
			"Ubuntu",
			"Xubuntu",
			"Cygwin",
			"Symbian OS",
			"hpwOS",
			"webOS ",
			"webOS",
			"Tablet OS",
			"Tizen",
			"Linux",
			"Mac OS X",
			"Macintosh",
			"Mac",
			"Windows 98;",
			"Windows "
		]);

		function getLayout(guesses) {
			return reduce(guesses, function(result, guess) {
				return (
					result ||
					(RegExp(
						"\\b" + (guess.pattern || qualify(guess)) + "\\b",
						"i"
					).exec(ua) &&
						(guess.label || guess))
				);
			});
		}

		function getManufacturer(guesses) {
			return reduce(guesses, function(result, value, key) {
				return (
					result ||
					((value[product] ||
						value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] ||
						RegExp(
							"\\b" + qualify(key) + "(?:\\b|\\w*\\d)",
							"i"
						).exec(ua)) &&
						key)
				);
			});
		}

		function getName(guesses) {
			return reduce(guesses, function(result, guess) {
				return (
					result ||
					(RegExp(
						"\\b" + (guess.pattern || qualify(guess)) + "\\b",
						"i"
					).exec(ua) &&
						(guess.label || guess))
				);
			});
		}

		function getOS(guesses) {
			return reduce(guesses, function(result, guess) {
				var pattern = guess.pattern || qualify(guess);

				if (
					!result &&
					(result = RegExp(
						"\\b" + pattern + "(?:/[\\d.]+|[ \\w.]*)",
						"i"
					).exec(ua))
				) {
					result = cleanupOS(result, pattern, guess.label || guess);
				}

				return result;
			});
		}

		function getProduct(guesses) {
			return reduce(guesses, function(result, guess) {
				var pattern = guess.pattern || qualify(guess);

				if (
					!result &&
					(result =
						RegExp("\\b" + pattern + " *\\d+[.\\w_]*", "i").exec(
							ua
						) ||
						RegExp("\\b" + pattern + " *\\w+-[\\w]*", "i").exec(
							ua
						) ||
						RegExp(
							"\\b" +
								pattern +
								"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)",
							"i"
						).exec(ua))
				) {
					if (
						(result = String(
							guess.label &&
								!RegExp(pattern, "i").test(guess.label)
								? guess.label
								: result
						).split("/"))[1] &&
						!/[\d.]+/.test(result[0])
					) {
						result[0] += " " + result[1];
					}

					guess = guess.label || guess;
					result = format(
						result[0]
							.replace(RegExp(pattern, "i"), guess)
							.replace(
								RegExp("; *(?:" + guess + "[_-])?", "i"),
								" "
							)
							.replace(
								RegExp("(" + guess + ")[-_.]?(\\w)", "i"),
								"$1 $2"
							)
					);
				}

				return result;
			});
		}

		function getVersion(patterns) {
			return reduce(patterns, function(result, pattern) {
				return (
					result ||
					(RegExp(
						pattern +
							"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)",
						"i"
					).exec(ua) || 0)[1] ||
					null
				);
			});
		}

		function toStringPlatform() {
			return this.description || "";
		}

		layout && (layout = [layout]);

		if (manufacturer && !product) {
			product = getProduct([manufacturer]);
		}

		if ((data = /\bGoogle TV\b/.exec(product))) {
			product = data[0];
		}

		if (/\bSimulator\b/i.test(ua)) {
			product = (product ? product + " " : "") + "Simulator";
		}

		if (name == "Opera Mini" && /\bOPiOS\b/.test(ua)) {
			description.push("running in Turbo/Uncompressed mode");
		}

		if (name == "IE" && /\blike iPhone OS\b/.test(ua)) {
			data = parse(ua.replace(/like iPhone OS/, ""));
			manufacturer = data.manufacturer;
			product = data.product;
		} else if (/^iP/.test(product)) {
			name || (name = "Safari");
			os =
				"iOS" +
				((data = / OS ([\d_]+)/i.exec(ua))
					? " " + data[1].replace(/_/g, ".")
					: "");
		} else if (name == "Konqueror" && !/buntu/i.test(os)) {
			os = "Kubuntu";
		} else if (
			(manufacturer &&
				manufacturer != "Google" &&
				((/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua)) ||
					/\bVita\b/.test(product))) ||
			(/\bAndroid\b/.test(os) &&
				/^Chrome/.test(name) &&
				/\bVersion\//i.test(ua))
		) {
			name = "Android Browser";
			os = /\bAndroid\b/.test(os) ? os : "Android";
		} else if (name == "Silk") {
			if (!/\bMobi/i.test(ua)) {
				os = "Android";
				description.unshift("desktop mode");
			}

			if (/Accelerated *= *true/i.test(ua)) {
				description.unshift("accelerated");
			}
		} else if (
			name == "PaleMoon" &&
			(data = /\bFirefox\/([\d.]+)\b/.exec(ua))
		) {
			description.push("identifying as Firefox " + data[1]);
		} else if (
			name == "Firefox" &&
			(data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))
		) {
			os || (os = "Firefox OS");
			product || (product = data[1]);
		} else if (
			!name ||
			(data =
				!/\bMinefield\b/i.test(ua) &&
				/\b(?:Firefox|Safari)\b/.exec(name))
		) {
			if (
				name &&
				!product &&
				/[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + "/") + 8))
			) {
				name = null;
			}

			if (
				(data = product || manufacturer || os) &&
				(product ||
					manufacturer ||
					/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))
			) {
				name =
					/[a-z]+(?: Hat)?/i.exec(
						/\bAndroid\b/.test(os) ? os : data
					) + " Browser";
			}
		} else if (
			name == "Electron" &&
			(data = (/\bChrome\/([\d.]+)\b/.exec(ua) || 0)[1])
		) {
			description.push("Chromium " + data);
		}

		if (!version) {
			version = getVersion([
				"(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))",
				"Version",
				qualify(name),
				"(?:Firefox|Minefield|NetFront)"
			]);
		}

		if (
			(data =
				(layout == "iCab" && parseFloat(version) > 3 && "WebKit") ||
				(/\bOpera\b/.test(name) &&
					(/\bOPR\b/.test(ua) ? "Blink" : "Presto")) ||
				(/\b(?:Midori|Nook|Safari)\b/i.test(ua) &&
					!/^(?:Trident|EdgeHTML)$/.test(layout) &&
					"WebKit") ||
				(!layout &&
					/\bMSIE\b/i.test(ua) &&
					(os == "Mac OS" ? "Tasman" : "Trident")) ||
				(layout == "WebKit" &&
					/\bPlayStation\b(?! Vita\b)/i.test(name) &&
					"NetFront"))
		) {
			layout = [data];
		}

		if (
			name == "IE" &&
			(data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])
		) {
			name += " Mobile";
			os = "Windows Phone " + (/\+$/.test(data) ? data : data + ".x");
			description.unshift("desktop mode");
		} else if (/\bWPDesktop\b/i.test(ua)) {
			name = "IE Mobile";
			os = "Windows Phone 8.x";
			description.unshift("desktop mode");
			version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
		} else if (
			name != "IE" &&
			layout == "Trident" &&
			(data = /\brv:([\d.]+)/.exec(ua))
		) {
			if (name) {
				description.push(
					"identifying as " + name + (version ? " " + version : "")
				);
			}

			name = "IE";
			version = data[1];
		}

		if (useFeatures) {
			if (isHostType(context, "global")) {
				if (java) {
					data = java.lang.System;
					arch = data.getProperty("os.arch");
					os =
						os ||
						data.getProperty("os.name") +
							" " +
							data.getProperty("os.version");
				}

				if (
					isModuleScope &&
					isHostType(context, "system") &&
					(data = [context.system])[0]
				) {
					os || (os = data[0].os || null);

					try {
						data[1] = context.require("ringo/engine").version;
						version = data[1].join(".");
						name = "RingoJS";
					} catch (e) {
						if (data[0].global.system == context.system) {
							name = "Narwhal";
						}
					}
				} else if (
					_typeof(context.process) == "object" &&
					!context.process.browser &&
					(data = context.process)
				) {
					if (_typeof(data.versions) == "object") {
						if (typeof data.versions.electron == "string") {
							description.push("Node " + data.versions.node);
							name = "Electron";
							version = data.versions.electron;
						} else if (typeof data.versions.nw == "string") {
							description.push(
								"Chromium " + version,
								"Node " + data.versions.node
							);
							name = "NW.js";
							version = data.versions.nw;
						}
					} else {
						name = "Node.js";
						arch = data.arch;
						os = data.platform;
						version = /[\d.]+/.exec(data.version);
						version = version ? version[0] : "unknown";
					}
				} else if (rhino) {
					name = "Rhino";
				}
			} else if (
				getClassOf((data = context.runtime)) == airRuntimeClass
			) {
				name = "Adobe AIR";
				os = data.flash.system.Capabilities.os;
			} else if (getClassOf((data = context.phantom)) == phantomClass) {
				name = "PhantomJS";
				version =
					(data = data.version || null) &&
					data.major + "." + data.minor + "." + data.patch;
			} else if (
				typeof doc.documentMode == "number" &&
				(data = /\bTrident\/(\d+)/i.exec(ua))
			) {
				version = [version, doc.documentMode];

				if ((data = +data[1] + 4) != version[1]) {
					description.push("IE " + version[1] + " mode");
					layout && (layout[1] = "");
					version[1] = data;
				}

				version =
					name == "IE" ? String(version[1].toFixed(1)) : version[0];
			} else if (
				typeof doc.documentMode == "number" &&
				/^(?:Chrome|Firefox)\b/.test(name)
			) {
				description.push("masking as " + name + " " + version);
				name = "IE";
				version = "11.0";
				layout = ["Trident"];
				os = "Windows";
			}

			os = os && format(os);
		}

		if (
			version &&
			(data =
				/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) ||
				/(?:alpha|beta)(?: ?\d)?/i.exec(
					ua + ";" + (useFeatures && nav.appMinorVersion)
				) ||
				(/\bMinefield\b/i.test(ua) && "a"))
		) {
			prerelease = /b/i.test(data) ? "beta" : "alpha";
			version =
				version.replace(RegExp(data + "\\+?$"), "") +
				(prerelease == "beta" ? beta : alpha) +
				(/\d+\+?/.exec(data) || "");
		}

		if (
			name == "Fennec" ||
			(name == "Firefox" && /\b(?:Android|Firefox OS)\b/.test(os))
		) {
			name = "Firefox Mobile";
		} else if (name == "Maxthon" && version) {
			version = version.replace(/\.[\d.]+/, ".x");
		} else if (/\bXbox\b/i.test(product)) {
			if (product == "Xbox 360") {
				os = null;
			}

			if (product == "Xbox 360" && /\bIEMobile\b/.test(ua)) {
				description.unshift("mobile mode");
			}
		} else if (
			(/^(?:Chrome|IE|Opera)$/.test(name) ||
				(name && !product && !/Browser|Mobi/.test(name))) &&
			(os == "Windows CE" || /Mobi/i.test(ua))
		) {
			name += " Mobile";
		} else if (name == "IE" && useFeatures) {
			try {
				if (context.external === null) {
					description.unshift("platform preview");
				}
			} catch (e) {
				description.unshift("embedded");
			}
		} else if (
			(/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) &&
			(data =
				(RegExp(product.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(
					ua
				) || 0)[1] || version)
		) {
			data = [data, /BB10/.test(ua)];
			os =
				(data[1]
					? ((product = null), (manufacturer = "BlackBerry"))
					: "Device Software") +
				" " +
				data[0];
			version = null;
		} else if (
			this != forOwn &&
			product != "Wii" &&
			((useFeatures && opera) ||
				(/Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua)) ||
				(name == "Firefox" && /\bOS X (?:\d+\.){2,}/.test(os)) ||
				(name == "IE" &&
					((os && !/^Win/.test(os) && version > 5.5) ||
						(/\bWindows XP\b/.test(os) && version > 8) ||
						(version == 8 && !/\bTrident\b/.test(ua))))) &&
			!reOpera.test(
				(data = parse.call(forOwn, ua.replace(reOpera, "") + ";"))
			) &&
			data.name
		) {
			data =
				"ing as " +
				data.name +
				((data = data.version) ? " " + data : "");

			if (reOpera.test(name)) {
				if (/\bIE\b/.test(data) && os == "Mac OS") {
					os = null;
				}

				data = "identify" + data;
			} else {
				data = "mask" + data;

				if (operaClass) {
					name = format(
						operaClass.replace(/([a-z])([A-Z])/g, "$1 $2")
					);
				} else {
					name = "Opera";
				}

				if (/\bIE\b/.test(data)) {
					os = null;
				}

				if (!useFeatures) {
					version = null;
				}
			}

			layout = ["Presto"];
			description.push(data);
		}

		if ((data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
			data = [parseFloat(data.replace(/\.(\d)$/, ".0$1")), data];

			if (name == "Safari" && data[1].slice(-1) == "+") {
				name = "WebKit Nightly";
				prerelease = "alpha";
				version = data[1].slice(0, -1);
			} else if (
				version == data[1] ||
				version ==
					(data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])
			) {
				version = null;
			}

			data[1] = (/\bChrome\/([\d.]+)/i.exec(ua) || 0)[1];

			if (
				data[0] == 537.36 &&
				data[2] == 537.36 &&
				parseFloat(data[1]) >= 28 &&
				layout == "WebKit"
			) {
				layout = ["Blink"];
			}

			if (!useFeatures || (!likeChrome && !data[1])) {
				layout && (layout[1] = "like Safari");
				data = ((data = data[0]),
				data < 400
					? 1
					: data < 500
					? 2
					: data < 526
					? 3
					: data < 533
					? 4
					: data < 534
					? "4+"
					: data < 535
					? 5
					: data < 537
					? 6
					: data < 538
					? 7
					: data < 601
					? 8
					: "8");
			} else {
				layout && (layout[1] = "like Chrome");
				data =
					data[1] ||
					((data = data[0]),
					data < 530
						? 1
						: data < 532
						? 2
						: data < 532.05
						? 3
						: data < 533
						? 4
						: data < 534.03
						? 5
						: data < 534.07
						? 6
						: data < 534.1
						? 7
						: data < 534.13
						? 8
						: data < 534.16
						? 9
						: data < 534.24
						? 10
						: data < 534.3
						? 11
						: data < 535.01
						? 12
						: data < 535.02
						? "13+"
						: data < 535.07
						? 15
						: data < 535.11
						? 16
						: data < 535.19
						? 17
						: data < 536.05
						? 18
						: data < 536.1
						? 19
						: data < 537.01
						? 20
						: data < 537.11
						? "21+"
						: data < 537.13
						? 23
						: data < 537.18
						? 24
						: data < 537.24
						? 25
						: data < 537.36
						? 26
						: layout != "Blink"
						? "27"
						: "28");
			}

			layout &&
				(layout[1] +=
					" " +
					(data +=
						typeof data == "number"
							? ".x"
							: /[.+]/.test(data)
							? ""
							: "+"));

			if (name == "Safari" && (!version || parseInt(version) > 45)) {
				version = data;
			}
		}

		if (name == "Opera" && (data = /\bzbov|zvav$/.exec(os))) {
			name += " ";
			description.unshift("desktop mode");

			if (data == "zvav") {
				name += "Mini";
				version = null;
			} else {
				name += "Mobile";
			}

			os = os.replace(RegExp(" *" + data + "$"), "");
		} else if (name == "Safari" && /\bChrome\b/.exec(layout && layout[1])) {
			description.unshift("desktop mode");
			name = "Chrome Mobile";
			version = null;

			if (/\bOS X\b/.test(os)) {
				manufacturer = "Apple";
				os = "iOS 4.3+";
			} else {
				os = null;
			}
		}

		if (
			version &&
			version.indexOf((data = /[\d.]+$/.exec(os))) == 0 &&
			ua.indexOf("/" + data + "-") > -1
		) {
			os = trim(os.replace(data, ""));
		}

		if (
			layout &&
			!/\b(?:Avant|Nook)\b/.test(name) &&
			(/Browser|Lunascape|Maxthon/.test(name) ||
				(name != "Safari" &&
					/^iOS/.test(os) &&
					/\bSafari\b/.test(layout[1])) ||
				(/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
					name
				) &&
					layout[1]))
		) {
			(data = layout[layout.length - 1]) && description.push(data);
		}

		if (description.length) {
			description = ["(" + description.join("; ") + ")"];
		}

		if (manufacturer && product && product.indexOf(manufacturer) < 0) {
			description.push("on " + manufacturer);
		}

		if (product) {
			description.push(
				(/^on /.test(description[description.length - 1])
					? ""
					: "on ") + product
			);
		}

		if (os) {
			data = / ([\d.+]+)$/.exec(os);
			isSpecialCasedOS =
				data && os.charAt(os.length - data[0].length - 1) == "/";
			os = {
				architecture: 32,
				family:
					data && !isSpecialCasedOS ? os.replace(data[0], "") : os,
				version: data ? data[1] : null,
				toString: function toString() {
					var version = this.version;
					return (
						this.family +
						(version && !isSpecialCasedOS ? " " + version : "") +
						(this.architecture == 64 ? " 64-bit" : "")
					);
				}
			};
		}

		if (
			(data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) &&
			!/\bi686\b/i.test(arch)
		) {
			if (os) {
				os.architecture = 64;
				os.family = os.family.replace(RegExp(" *" + data), "");
			}

			if (
				name &&
				(/\bWOW64\b/i.test(ua) ||
					(useFeatures &&
						/\w(?:86|32)$/.test(nav.cpuClass || nav.platform) &&
						!/\bWin64; x64\b/i.test(ua)))
			) {
				description.unshift("32-bit");
			}
		} else if (
			os &&
			/^OS X/.test(os.family) &&
			name == "Chrome" &&
			parseFloat(version) >= 39
		) {
			os.architecture = 64;
		}

		ua || (ua = null);
		var platform = {};
		platform.description = ua;
		platform.layout = layout && layout[0];
		platform.manufacturer = manufacturer;
		platform.name = name;
		platform.prerelease = prerelease;
		platform.product = product;
		platform.ua = ua;
		platform.version = name && version;
		platform.os = os || {
			architecture: null,
			family: null,
			version: null,
			toString: function toString() {
				return "null";
			}
		};
		platform.parse = parse;
		platform.toString = toStringPlatform;

		if (platform.version) {
			description.unshift(version);
		}

		if (platform.name) {
			description.unshift(name);
		}

		if (
			os &&
			name &&
			!(
				os == String(os).split(" ")[0] &&
				(os == name.split(" ")[0] || product)
			)
		) {
			description.push(product ? "(" + os + ")" : "on " + os);
		}

		if (description.length) {
			platform.description = description.join(" ");
		}

		return platform;
	}

	var platform = parse();

	if (
		typeof define == "function" &&
		_typeof(define.amd) == "object" &&
		define.amd
	) {
		root.platform = platform;
		define(function () {
			return platform;
		});
	} else if (freeExports && freeModule) {
		forOwn(platform, function(value, key) {
			freeExports[key] = value;
		});
	} else {
		root.platform = platform;
	}
}.call(this));
/* jshint ignore:end */

/**
 * Parallax.js
 * @author Matthew Wagerfield - @wagerfield
 * @description Creates a parallax effect between an array of layers,
 *	   driving the motion from the gyroscope output of a smartdevice.
 *	   If no gyroscope is available, the cursor position is used.
 */
(function(window, document, undefined) {
	// Strict Mode
	"use strict"; // Constants

	var NAME = "Parallax";
	var MAGIC_NUMBER = 30;
	var DEFAULTS = {
		relativeInput: false,
		clipRelativeInput: false,
		calibrationThreshold: 100,
		calibrationDelay: 500,
		supportDelay: 500,
		calibrateX: false,
		calibrateY: true,
		invertX: true,
		invertY: true,
		limitX: false,
		limitY: false,
		scalarX: 10.0,
		scalarY: 10.0,
		frictionX: 0.1,
		frictionY: 0.1,
		originX: 0.5,
		originY: 0.5,
		pointerEvents: true,
		precision: 1
	};

	function Parallax(element, options) {
		// DOM Context
		this.element = element;
		this.layers = element.getElementsByClassName("layer"); // Data Extraction

		var data = {
			calibrateX: this.data(this.element, "calibrate-x"),
			calibrateY: this.data(this.element, "calibrate-y"),
			invertX: this.data(this.element, "invert-x"),
			invertY: this.data(this.element, "invert-y"),
			limitX: this.data(this.element, "limit-x"),
			limitY: this.data(this.element, "limit-y"),
			scalarX: this.data(this.element, "scalar-x"),
			scalarY: this.data(this.element, "scalar-y"),
			frictionX: this.data(this.element, "friction-x"),
			frictionY: this.data(this.element, "friction-y"),
			originX: this.data(this.element, "origin-x"),
			originY: this.data(this.element, "origin-y"),
			pointerEvents: this.data(this.element, "pointer-events"),
			precision: this.data(this.element, "precision")
		}; // Delete Null Data Values

		for (var key in data) {
			if (data[key] === null) delete data[key];
		} // Compose Settings Object

		this.extend(this, DEFAULTS, options, data); // States

		this.calibrationTimer = null;
		this.calibrationFlag = true;
		this.enabled = false;
		this.depthsX = [];
		this.depthsY = [];
		this.raf = null; // Element Bounds

		this.bounds = null;
		this.ex = 0;
		this.ey = 0;
		this.ew = 0;
		this.eh = 0; // Element Center

		this.ecx = 0;
		this.ecy = 0; // Element Range

		this.erx = 0;
		this.ery = 0; // Calibration

		this.cx = 0;
		this.cy = 0; // Input

		this.ix = 0;
		this.iy = 0; // Motion

		this.mx = 0;
		this.my = 0; // Velocity

		this.vx = 0;
		this.vy = 0; // Callbacks

		this.onMouseMove = this.onMouseMove.bind(this);
		this.onDeviceOrientation = this.onDeviceOrientation.bind(this);
		this.onOrientationTimer = this.onOrientationTimer.bind(this);
		this.onCalibrationTimer = this.onCalibrationTimer.bind(this);
		this.onAnimationFrame = this.onAnimationFrame.bind(this);
		this.onWindowResize = this.onWindowResize.bind(this); // Initialise

		this.initialise();
	}

	Parallax.prototype.extend = function () {
		if (arguments.length > 1) {
			var master = arguments[0];

			for (var i = 1, l = arguments.length; i < l; i += 1) {
				var object = arguments[i];

				for (var key in object) {
					if (object.hasOwnProperty(key)) {
						master[key] = object[key];
					}
				}
			}
		}
	};

	Parallax.prototype.data = function (element, name) {
		return this.deserialize(element.getAttribute("data-" + name));
	};

	Parallax.prototype.deserialize = function (value) {
		if (value === "true") {
			return true;
		} else if (value === "false") {
			return false;
		} else if (value === "null") {
			return null;
		} else if (!isNaN(parseFloat(value)) && isFinite(value)) {
			return parseFloat(value);
		} else {
			return value;
		}
	};

	Parallax.prototype.camelCase = function (value) {
		return value.replace(/-+(.)?/g, function(match, character) {
			return character ? character.toUpperCase() : "";
		});
	};

	Parallax.prototype.transformSupport = function (value) {
		var element = document.createElement("div");
		var propertySupport = false;
		var propertyValue = null;
		var featureSupport = false;
		var cssProperty = null;
		var jsProperty = null;

		for (var i = 0, l = this.vendors.length; i < l; i += 1) {
			if (this.vendors[i] !== null) {
				cssProperty = this.vendors[i][0] + "transform";
				jsProperty = this.vendors[i][1] + "Transform";
			} else {
				cssProperty = "transform";
				jsProperty = "transform";
			}

			if (element.style[jsProperty] !== undefined) {
				propertySupport = true;
				break;
			}
		}

		switch (value) {
			case "2D":
				featureSupport = propertySupport;
				break;

			case "3D":
				if (propertySupport) {
					var body = document.body || document.createElement("body");
					var documentElement = document.documentElement;
					var documentOverflow = documentElement.style.overflow;
					var isCreatedBody = false;

					if (!document.body) {
						isCreatedBody = true;
						documentElement.style.overflow = "hidden";
						documentElement.appendChild(body);
						body.style.overflow = "hidden";
						body.style.background = "";
					}

					body.appendChild(element);
					element.style[jsProperty] = "translate3d(1px,1px,1px)";
					propertyValue = window
						.getComputedStyle(element)
						.getPropertyValue(cssProperty);
					featureSupport =
						propertyValue !== undefined &&
						propertyValue.length > 0 &&
						propertyValue !== "none";
					documentElement.style.overflow = documentOverflow;
					body.removeChild(element);

					if (isCreatedBody) {
						body.removeAttribute("style");
						body.parentNode.removeChild(body);
					}
				}

				break;
		}

		return featureSupport;
	};

	Parallax.prototype.ww = null;
	Parallax.prototype.wh = null;
	Parallax.prototype.wcx = null;
	Parallax.prototype.wcy = null;
	Parallax.prototype.wrx = null;
	Parallax.prototype.wry = null;
	Parallax.prototype.portrait = null;
	Parallax.prototype.desktop = !navigator.userAgent.match(
		/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i
	);
	Parallax.prototype.vendors = [
		null,
		["-webkit-", "webkit"],
		["-moz-", "Moz"],
		["-o-", "O"],
		["-ms-", "ms"]
	];
	Parallax.prototype.motionSupport = !!window.DeviceMotionEvent;
	Parallax.prototype.orientationSupport = !!window.DeviceOrientationEvent;
	Parallax.prototype.orientationStatus = 0;
	Parallax.prototype.motionStatus = 0;
	Parallax.prototype.propertyCache = {};

	Parallax.prototype.initialise = function () {
		if (Parallax.prototype.transform2DSupport === undefined) {
			Parallax.prototype.transform2DSupport = Parallax.prototype.transformSupport(
				"2D"
			);
			Parallax.prototype.transform3DSupport = Parallax.prototype.transformSupport(
				"3D"
			);
		} // Configure Context Styles

		if (this.transform3DSupport) this.accelerate(this.element);
		var style = window.getComputedStyle(this.element);

		if (style.getPropertyValue("position") === "static") {
			this.element.style.position = "relative";
		} // Pointer events

		if (!this.pointerEvents) {
			this.element.style.pointerEvents = "none";
		} // Setup

		this.updateLayers();
		this.updateDimensions();
		this.enable();
		this.queueCalibration(this.calibrationDelay);
	};

	Parallax.prototype.updateLayers = function () {
		// Cache Layer Elements
		this.layers = this.element.getElementsByClassName("layer");
		this.depthsX = [];
		this.depthsY = []; // Configure Layer Styles

		for (var i = 0, l = this.layers.length; i < l; i += 1) {
			var layer = this.layers[i];
			if (this.transform3DSupport) this.accelerate(layer);
			layer.style.position = i ? "absolute" : "relative";
			layer.style.display = "block";
			layer.style.left = 0;
			layer.style.top = 0; // Cache Layer Depth
			//Graceful fallback on depth if depth-x or depth-y is absent

			var depth = this.data(layer, "depth") || 0;
			this.depthsX.push(this.data(layer, "depth-x") || depth);
			this.depthsY.push(this.data(layer, "depth-y") || depth);
		}
	};

	Parallax.prototype.updateDimensions = function () {
		this.ww = window.innerWidth;
		this.wh = window.innerHeight;
		this.wcx = this.ww * this.originX;
		this.wcy = this.wh * this.originY;
		this.wrx = Math.max(this.wcx, this.ww - this.wcx);
		this.wry = Math.max(this.wcy, this.wh - this.wcy);
	};

	Parallax.prototype.updateBounds = function () {
		this.bounds = this.element.getBoundingClientRect();
		this.ex = this.bounds.left;
		this.ey = this.bounds.top;
		this.ew = this.bounds.width;
		this.eh = this.bounds.height;
		this.ecx = this.ew * this.originX;
		this.ecy = this.eh * this.originY;
		this.erx = Math.max(this.ecx, this.ew - this.ecx);
		this.ery = Math.max(this.ecy, this.eh - this.ecy);
	};

	Parallax.prototype.queueCalibration = function (delay) {
		clearTimeout(this.calibrationTimer);
		this.calibrationTimer = setTimeout(this.onCalibrationTimer, delay);
	};

	Parallax.prototype.enable = function () {
		if (!this.enabled) {
			this.enabled = true;

			if (!this.desktop && this.orientationSupport) {
				this.portrait = null;
				window.addEventListener(
					"deviceorientation",
					this.onDeviceOrientation
				);
				setTimeout(this.onOrientationTimer, this.supportDelay);
			} else if (!this.desktop && this.motionSupport) {
				this.portrait = null;
				window.addEventListener("devicemotion", this.onDeviceMotion);
				setTimeout(this.onMotionTimer, this.supportDelay);
			} else {
				this.cx = 0;
				this.cy = 0;
				this.portrait = false;
				window.addEventListener("mousemove", this.onMouseMove);
			}

			window.addEventListener("resize", this.onWindowResize);
			this.raf = requestAnimationFrame(this.onAnimationFrame);
		}
	};

	Parallax.prototype.disable = function () {
		if (this.enabled) {
			this.enabled = false;

			if (this.orientationSupport) {
				window.removeEventListener(
					"deviceorientation",
					this.onDeviceOrientation
				);
			} else if (this.motionSupport) {
				window.removeEventListener("devicemotion", this.onDeviceMotion);
			} else {
				window.removeEventListener("mousemove", this.onMouseMove);
			}

			window.removeEventListener("resize", this.onWindowResize);
			cancelAnimationFrame(this.raf);
		}
	};

	Parallax.prototype.calibrate = function (x, y) {
		this.calibrateX = x === undefined ? this.calibrateX : x;
		this.calibrateY = y === undefined ? this.calibrateY : y;
	};

	Parallax.prototype.invert = function (x, y) {
		this.invertX = x === undefined ? this.invertX : x;
		this.invertY = y === undefined ? this.invertY : y;
	};

	Parallax.prototype.friction = function (x, y) {
		this.frictionX = x === undefined ? this.frictionX : x;
		this.frictionY = y === undefined ? this.frictionY : y;
	};

	Parallax.prototype.scalar = function (x, y) {
		this.scalarX = x === undefined ? this.scalarX : x;
		this.scalarY = y === undefined ? this.scalarY : y;
	};

	Parallax.prototype.limit = function (x, y) {
		this.limitX = x === undefined ? this.limitX : x;
		this.limitY = y === undefined ? this.limitY : y;
	};

	Parallax.prototype.origin = function (x, y) {
		this.originX = x === undefined ? this.originX : x;
		this.originY = y === undefined ? this.originY : y;
	};

	Parallax.prototype.clamp = function (value, min, max) {
		value = Math.max(value, min);
		value = Math.min(value, max);
		return value;
	};

	Parallax.prototype.css = function (element, property, value) {
		var jsProperty = this.propertyCache[property];

		if (!jsProperty) {
			for (var i = 0, l = this.vendors.length; i < l; i += 1) {
				if (this.vendors[i] !== null) {
					jsProperty = this.camelCase(
						this.vendors[i][1] + "-" + property
					);
				} else {
					jsProperty = property;
				}

				if (element.style[jsProperty] !== undefined) {
					this.propertyCache[property] = jsProperty;
					break;
				}
			}
		}

		element.style[jsProperty] = value;
	};

	Parallax.prototype.accelerate = function (element) {
		this.css(element, "transform", "translate3d(0,0,0)");
		this.css(element, "transform-style", "preserve-3d");
		this.css(element, "backface-visibility", "hidden");
	};

	Parallax.prototype.setPosition = function (element, x, y) {
		x = x.toFixed(this.precision) + "px";
		y = y.toFixed(this.precision) + "px";

		if (this.transform3DSupport) {
			this.css(
				element,
				"transform",
				"translate3d(" + x + "," + y + ",0)"
			);
		} else if (this.transform2DSupport) {
			this.css(element, "transform", "translate(" + x + "," + y + ")");
		} else {
			element.style.left = x;
			element.style.top = y;
		}
	};

	Parallax.prototype.onOrientationTimer = function () {
		if (this.orientationSupport && this.orientationStatus === 0) {
			this.disable();
			this.orientationSupport = false;
			this.enable();
		}
	};

	Parallax.prototype.onMotionTimer = function () {
		if (this.motionSupport && this.motionStatus === 0) {
			this.disable();
			this.motionSupport = false;
			this.enable();
		}
	};

	Parallax.prototype.onCalibrationTimer = function () {
		this.calibrationFlag = true;
	};

	Parallax.prototype.onWindowResize = function () {
		this.updateDimensions();
	};

	Parallax.prototype.onAnimationFrame = function () {
		this.updateBounds();
		var dx = this.ix - this.cx;
		var dy = this.iy - this.cy;

		if (
			Math.abs(dx) > this.calibrationThreshold ||
			Math.abs(dy) > this.calibrationThreshold
		) {
			this.queueCalibration(0);
		}

		if (this.portrait) {
			this.mx = this.calibrateX ? dy : this.iy;
			this.my = this.calibrateY ? dx : this.ix;
		} else {
			this.mx = this.calibrateX ? dx : this.ix;
			this.my = this.calibrateY ? dy : this.iy;
		}

		this.mx *= this.ew * (this.scalarX / 100);
		this.my *= this.eh * (this.scalarY / 100);

		if (!isNaN(parseFloat(this.limitX))) {
			this.mx = this.clamp(this.mx, -this.limitX, this.limitX);
		}

		if (!isNaN(parseFloat(this.limitY))) {
			this.my = this.clamp(this.my, -this.limitY, this.limitY);
		}

		this.vx += (this.mx - this.vx) * this.frictionX;
		this.vy += (this.my - this.vy) * this.frictionY;

		for (var i = 0, l = this.layers.length; i < l; i += 1) {
			var layer = this.layers[i];
			var depthX = this.depthsX[i];
			var depthY = this.depthsY[i];
			var xOffset = this.vx * (depthX * (this.invertX ? -1 : 1));
			var yOffset = this.vy * (depthY * (this.invertY ? -1 : 1));
			this.setPosition(layer, xOffset, yOffset);
		}

		this.raf = requestAnimationFrame(this.onAnimationFrame);
	};

	Parallax.prototype.rotate = function (beta, gamma) {
		// Extract Rotation
		var x = (event.beta || 0) / MAGIC_NUMBER; // -90 :: 90

		var y = (event.gamma || 0) / MAGIC_NUMBER; // -180 :: 180
		// Detect Orientation Change

		var portrait = this.wh > this.ww;

		if (this.portrait !== portrait) {
			this.portrait = portrait;
			this.calibrationFlag = true;
		} // Set Calibration

		if (this.calibrationFlag) {
			this.calibrationFlag = false;
			this.cx = x;
			this.cy = y;
		} // Set Input

		this.ix = x;
		this.iy = y;
	};

	Parallax.prototype.onDeviceOrientation = function (event) {
		// Validate environment and event properties.
		var beta = event.beta;
		var gamma = event.gamma;

		if (!this.desktop && beta !== null && gamma !== null) {
			// Set orientation status.
			this.orientationStatus = 1;
			this.rotate(beta, gamma);
		}
	};

	Parallax.prototype.onDeviceMotion = function (event) {
		// Validate environment and event properties.
		var beta = event.rotationRate.beta;
		var gamma = event.rotationRate.gamma;

		if (!this.desktop && beta !== null && gamma !== null) {
			// Set motion status.
			this.motionStatus = 1;
			this.rotate(beta, gamma);
		}
	};

	Parallax.prototype.onMouseMove = function (event) {
		// Cache mouse coordinates.
		var clientX = event.clientX;
		var clientY = event.clientY; // Calculate Mouse Input

		if (!this.orientationSupport && this.relativeInput) {
			// Clip mouse coordinates inside element bounds.
			if (this.clipRelativeInput) {
				clientX = Math.max(clientX, this.ex);
				clientX = Math.min(clientX, this.ex + this.ew);
				clientY = Math.max(clientY, this.ey);
				clientY = Math.min(clientY, this.ey + this.eh);
			} // Calculate input relative to the element.

			this.ix = (clientX - this.ex - this.ecx) / this.erx;
			this.iy = (clientY - this.ey - this.ecy) / this.ery;
		} else {
			// Calculate input relative to the window.
			this.ix = (clientX - this.wcx) / this.wrx;
			this.iy = (clientY - this.wcy) / this.wry;
		}
	}; // Expose Parallax

	window[NAME] = Parallax;
})(window, document);

/*!
 * modified qr.js -- QR code generator in Javascript (revision 2011-01-19)
 * Written by Kang Seonghoon <public+qrjs@mearie.org>.
 * v0.0.20110119
 * This source code is in the public domain; if your jurisdiction does not
 * recognize the public domain the terms of Creative Commons CC0 license
 * apply. In the other words, you can always do what you want.
 * added options properties: fillcolor and textcolor
 * svg now works in Edge 13 and IE 11
 * @see {@link https://gist.github.com/englishextra/b46969e3382ef737c611bb59d837220b}
 * @see {@link https://github.com/lifthrasiir/qr.js/blob/v0.0.20110119/qr.js}
 * passes jshint with suppressing comments
 */

/*jshint bitwise: false */
(function(root, document) {
	"use strict";

	var length = "length";
	var VERSIONS = [
		null,
		[[10, 7, 17, 13], [1, 1, 1, 1], []],
		[[16, 10, 28, 22], [1, 1, 1, 1], [4, 16]],
		[[26, 15, 22, 18], [1, 1, 2, 2], [4, 20]],
		[[18, 20, 16, 26], [2, 1, 4, 2], [4, 24]],
		[[24, 26, 22, 18], [2, 1, 4, 4], [4, 28]],
		[[16, 18, 28, 24], [4, 2, 4, 4], [4, 32]],
		[[18, 20, 26, 18], [4, 2, 5, 6], [4, 20, 36]],
		[[22, 24, 26, 22], [4, 2, 6, 6], [4, 22, 40]],
		[[22, 30, 24, 20], [5, 2, 8, 8], [4, 24, 44]],
		[[26, 18, 28, 24], [5, 4, 8, 8], [4, 26, 48]],
		[[30, 20, 24, 28], [5, 4, 11, 8], [4, 28, 52]],
		[[22, 24, 28, 26], [8, 4, 11, 10], [4, 30, 56]],
		[[22, 26, 22, 24], [9, 4, 16, 12], [4, 32, 60]],
		[[24, 30, 24, 20], [9, 4, 16, 16], [4, 24, 44, 64]],
		[[24, 22, 24, 30], [10, 6, 18, 12], [4, 24, 46, 68]],
		[[28, 24, 30, 24], [10, 6, 16, 17], [4, 24, 48, 72]],
		[[28, 28, 28, 28], [11, 6, 19, 16], [4, 28, 52, 76]],
		[[26, 30, 28, 28], [13, 6, 21, 18], [4, 28, 54, 80]],
		[[26, 28, 26, 26], [14, 7, 25, 21], [4, 28, 56, 84]],
		[[26, 28, 28, 30], [16, 8, 25, 20], [4, 32, 60, 88]],
		[[26, 28, 30, 28], [17, 8, 25, 23], [4, 26, 48, 70, 92]],
		[[28, 28, 24, 30], [17, 9, 34, 23], [4, 24, 48, 72, 96]],
		[[28, 30, 30, 30], [18, 9, 30, 25], [4, 28, 52, 76, 100]],
		[[28, 30, 30, 30], [20, 10, 32, 27], [4, 26, 52, 78, 104]],
		[[28, 26, 30, 30], [21, 12, 35, 29], [4, 30, 56, 82, 108]],
		[[28, 28, 30, 28], [23, 12, 37, 34], [4, 28, 56, 84, 112]],
		[[28, 30, 30, 30], [25, 12, 40, 34], [4, 32, 60, 88, 116]],
		[[28, 30, 30, 30], [26, 13, 42, 35], [4, 24, 48, 72, 96, 120]],
		[[28, 30, 30, 30], [28, 14, 45, 38], [4, 28, 52, 76, 100, 124]],
		[[28, 30, 30, 30], [29, 15, 48, 40], [4, 24, 50, 76, 102, 128]],
		[[28, 30, 30, 30], [31, 16, 51, 43], [4, 28, 54, 80, 106, 132]],
		[[28, 30, 30, 30], [33, 17, 54, 45], [4, 32, 58, 84, 110, 136]],
		[[28, 30, 30, 30], [35, 18, 57, 48], [4, 28, 56, 84, 112, 140]],
		[[28, 30, 30, 30], [37, 19, 60, 51], [4, 32, 60, 88, 116, 144]],
		[[28, 30, 30, 30], [38, 19, 63, 53], [4, 28, 52, 76, 100, 124, 148]],
		[[28, 30, 30, 30], [40, 20, 66, 56], [4, 22, 48, 74, 100, 126, 152]],
		[[28, 30, 30, 30], [43, 21, 70, 59], [4, 26, 52, 78, 104, 130, 156]],
		[[28, 30, 30, 30], [45, 22, 74, 62], [4, 30, 56, 82, 108, 134, 160]],
		[[28, 30, 30, 30], [47, 24, 77, 65], [4, 24, 52, 80, 108, 136, 164]],
		[[28, 30, 30, 30], [49, 25, 81, 68], [4, 28, 56, 84, 112, 140, 168]]
	];
	var MODE_TERMINATOR = 0;
	var MODE_NUMERIC = 1,
		MODE_ALPHANUMERIC = 2,
		MODE_OCTET = 4,
		MODE_KANJI = 8;
	var NUMERIC_REGEXP = /^\d*$/;
	var ALPHANUMERIC_REGEXP = /^[A-Za-z0-9 $%*+\-./:] * $ /;
	var ALPHANUMERIC_OUT_REGEXP = /^[A-Z0-9 $%*+\-./:] * $ /;
	var ECCLEVEL_L = 1,
		ECCLEVEL_M = 0,
		ECCLEVEL_Q = 3,
		ECCLEVEL_H = 2;
	var GF256_MAP = [],
		GF256_INVMAP = [-1];

	for (var i1 = 0, v = 1; i1 < 255; ++i1) {
		GF256_MAP.push(v);
		GF256_INVMAP[v] = i1;
		v = (v * 2) ^ (v >= 128 ? 0x11d : 0);
	}

	var GF256_GENPOLY = [[]];

	for (var i2 = 0; i2 < 30; ++i2) {
		var prevpoly = GF256_GENPOLY[i2],
			poly = [];

		for (var j1 = 0; j1 <= i2; ++j1) {
			var a = j1 < i2 ? GF256_MAP[prevpoly[j1]] : 0;
			var b = GF256_MAP[(i2 + (prevpoly[j1 - 1] || 0)) % 255];
			poly.push(GF256_INVMAP[a ^ b]);
		}

		GF256_GENPOLY.push(poly);
	}

	var ALPHANUMERIC_MAP = {};

	for (var i = 0; i < 45; ++i) {
		ALPHANUMERIC_MAP[
			"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".charAt(i)
		] = i;
	}

	var MASKFUNCS = [
		function(i, j) {
			return (i + j) % 2 === 0;
		},
		function(i) {
			return i % 2 === 0;
		},
		function(i, j) {
			return j % 3 === 0;
		},
		function(i, j) {
			return (i + j) % 3 === 0;
		},
		function(i, j) {
			return (((i / 2) | 0) + ((j / 3) | 0)) % 2 === 0;
		},
		function(i, j) {
			return ((i * j) % 2) + ((i * j) % 3) === 0;
		},
		function(i, j) {
			return (((i * j) % 2) + ((i * j) % 3)) % 2 === 0;
		},
		function(i, j) {
			return (((i + j) % 2) + ((i * j) % 3)) % 2 === 0;
		}
	];

	var needsverinfo = function needsverinfo(ver) {
		return ver > 6;
	};

	var getsizebyver = function getsizebyver(ver) {
		return 4 * ver + 17;
	};

	var nfullbits = function nfullbits(ver) {
		var v = VERSIONS[ver];
		var nbits = 16 * ver * ver + 128 * ver + 64;

		if (needsverinfo(ver)) {
			nbits -= 36;
		}

		if (v[2][length]) {
			nbits -= 25 * v[2][length] * v[2][length] - 10 * v[2][length] - 55;
		}

		return nbits;
	};

	var ndatabits = function ndatabits(ver, ecclevel) {
		var nbits = nfullbits(ver) & ~7;
		var v = VERSIONS[ver];
		nbits -= 8 * v[0][ecclevel] * v[1][ecclevel];
		return nbits;
	};

	var ndatalenbits = function ndatalenbits(ver, mode) {
		switch (mode) {
			case MODE_NUMERIC:
				return ver < 10 ? 10 : ver < 27 ? 12 : 14;

			case MODE_ALPHANUMERIC:
				return ver < 10 ? 9 : ver < 27 ? 11 : 13;

			case MODE_OCTET:
				return ver < 10 ? 8 : 16;

			case MODE_KANJI:
				return ver < 10 ? 8 : ver < 27 ? 10 : 12;
		}
	};

	var getmaxdatalen = function getmaxdatalen(ver, mode, ecclevel) {
		var nbits = ndatabits(ver, ecclevel) - 4 - ndatalenbits(ver, mode);

		switch (mode) {
			case MODE_NUMERIC:
				return (
					((nbits / 10) | 0) * 3 +
					(nbits % 10 < 4 ? 0 : nbits % 10 < 7 ? 1 : 2)
				);

			case MODE_ALPHANUMERIC:
				return ((nbits / 11) | 0) * 2 + (nbits % 11 < 6 ? 0 : 1);

			case MODE_OCTET:
				return (nbits / 8) | 0;

			case MODE_KANJI:
				return (nbits / 13) | 0;
		}
	};

	var validatedata = function validatedata(mode, data) {
		switch (mode) {
			case MODE_NUMERIC:
				if (!data.match(NUMERIC_REGEXP)) {
					return null;
				}

				return data;

			case MODE_ALPHANUMERIC:
				if (!data.match(ALPHANUMERIC_REGEXP)) {
					return null;
				}

				return data.toUpperCase();

			case MODE_OCTET:
				if (typeof data === "string") {
					var newdata = [];

					for (var i = 0; i < data[length]; ++i) {
						var ch = data.charCodeAt(i);

						if (ch < 0x80) {
							newdata.push(ch);
						} else if (ch < 0x800) {
							newdata.push(0xc0 | (ch >> 6), 0x80 | (ch & 0x3f));
						} else if (ch < 0x10000) {
							newdata.push(
								0xe0 | (ch >> 12),
								0x80 | ((ch >> 6) & 0x3f),
								0x80 | (ch & 0x3f)
							);
						} else {
							newdata.push(
								0xf0 | (ch >> 18),
								0x80 | ((ch >> 12) & 0x3f),
								0x80 | ((ch >> 6) & 0x3f),
								0x80 | (ch & 0x3f)
							);
						}
					}

					return newdata;
				} else {
					return data;
				}
		}
	};

	var encode = function encode(ver, mode, data, maxbuflen) {
		var buf = [];
		var bits = 0,
			remaining = 8;
		var datalen = data[length];

		var pack = function pack(x, n) {
			if (n >= remaining) {
				buf.push(bits | (x >> (n -= remaining)));

				while (n >= 8) {
					buf.push((x >> (n -= 8)) & 255);
				}

				bits = 0;
				remaining = 8;
			}

			if (n > 0) {
				bits |= (x & ((1 << n) - 1)) << (remaining -= n);
			}
		};

		var nlenbits = ndatalenbits(ver, mode);
		pack(mode, 4);
		pack(datalen, nlenbits);

		switch (mode) {
			case MODE_NUMERIC:
				for (var i = 2; i < datalen; i += 3) {
					pack(parseInt(data.substring(i - 2, i + 1), 10), 10);
				}

				pack(
					parseInt(data.substring(i - 2), 10),
					[0, 4, 7][datalen % 3]
				);
				break;

			case MODE_ALPHANUMERIC:
				for (var i2 = 1; i2 < datalen; i2 += 2) {
					pack(
						ALPHANUMERIC_MAP[data.charAt(i2 - 1)] * 45 +
							ALPHANUMERIC_MAP[data.charAt(i2)],
						11
					);
				}

				if (datalen % 2 === 1) {
					pack(ALPHANUMERIC_MAP[data.charAt(i2 - 1)], 6);
				}

				break;

			case MODE_OCTET:
				for (var i3 = 0; i3 < datalen; ++i3) {
					pack(data[i3], 8);
				}

				break;
		}

		pack(MODE_TERMINATOR, 4);

		if (remaining < 8) {
			buf.push(bits);
		}

		while (buf[length] + 1 < maxbuflen) {
			buf.push(0xec, 0x11);
		}

		if (buf[length] < maxbuflen) {
			buf.push(0xec);
		}

		return buf;
	};

	var calculateecc = function calculateecc(poly, genpoly) {
		var modulus = poly.slice(0);
		var polylen = poly[length],
			genpolylen = genpoly[length];

		for (var k = 0; k < genpolylen; ++k) {
			modulus.push(0);
		}

		for (var i = 0; i < polylen; ) {
			var quotient = GF256_INVMAP[modulus[i++]];

			if (quotient >= 0) {
				for (var j = 0; j < genpolylen; ++j) {
					modulus[i + j] ^= GF256_MAP[(quotient + genpoly[j]) % 255];
				}
			}
		}

		return modulus.slice(polylen);
	};

	var augumenteccs = function augumenteccs(poly, nblocks, genpoly) {
		var subsizes = [];
		var subsize = (poly[length] / nblocks) | 0,
			subsize0 = 0;
		var pivot = nblocks - (poly[length] % nblocks);

		for (var i = 0; i < pivot; ++i) {
			subsizes.push(subsize0);
			subsize0 += subsize;
		}

		for (var i2 = pivot; i2 < nblocks; ++i2) {
			subsizes.push(subsize0);
			subsize0 += subsize + 1;
		}

		subsizes.push(subsize0);
		var eccs = [];

		for (var i3 = 0; i3 < nblocks; ++i3) {
			eccs.push(
				calculateecc(
					poly.slice(subsizes[i3], subsizes[i3 + 1]),
					genpoly
				)
			);
		}

		var result = [];
		var nitemsperblock = (poly[length] / nblocks) | 0;

		for (var i4 = 0; i4 < nitemsperblock; ++i4) {
			for (var j = 0; j < nblocks; ++j) {
				result.push(poly[subsizes[j] + i4]);
			}
		}

		for (var j2 = pivot; j2 < nblocks; ++j2) {
			result.push(poly[subsizes[j2 + 1] - 1]);
		}

		for (var i5 = 0; i5 < genpoly[length]; ++i5) {
			for (var j3 = 0; j3 < nblocks; ++j3) {
				result.push(eccs[j3][i5]);
			}
		}

		return result;
	};

	var augumentbch = function augumentbch(poly, p, genpoly, q) {
		var modulus = poly << q;

		for (var i = p - 1; i >= 0; --i) {
			if ((modulus >> (q + i)) & 1) {
				modulus ^= genpoly << i;
			}
		}

		return (poly << q) | modulus;
	};

	var makebasematrix = function makebasematrix(ver) {
		var v = VERSIONS[ver],
			n = getsizebyver(ver);
		var matrix = [],
			reserved = [];

		for (var i = 0; i < n; ++i) {
			matrix.push([]);
			reserved.push([]);
		}

		var blit = function blit(y, x, h, w, bits) {
			for (var i = 0; i < h; ++i) {
				for (var j = 0; j < w; ++j) {
					matrix[y + i][x + j] = (bits[i] >> j) & 1;
					reserved[y + i][x + j] = 1;
				}
			}
		};

		blit(0, 0, 9, 9, [
			0x7f,
			0x41,
			0x5d,
			0x5d,
			0x5d,
			0x41,
			0x17f,
			0x00,
			0x40
		]);
		blit(n - 8, 0, 8, 9, [0x100, 0x7f, 0x41, 0x5d, 0x5d, 0x5d, 0x41, 0x7f]);
		blit(0, n - 8, 9, 8, [
			0xfe,
			0x82,
			0xba,
			0xba,
			0xba,
			0x82,
			0xfe,
			0x00,
			0x00
		]);

		for (var i2 = 9; i2 < n - 8; ++i2) {
			matrix[6][i2] = matrix[i2][6] = ~i2 & 1;
			reserved[6][i2] = reserved[i2][6] = 1;
		}

		var aligns = v[2],
			m = aligns[length];

		for (var i3 = 0; i3 < m; ++i3) {
			var minj = i3 === 0 || i3 === m - 1 ? 1 : 0,
				maxj = i3 === 0 ? m - 1 : m;

			for (var j = minj; j < maxj; ++j) {
				blit(aligns[i3], aligns[j], 5, 5, [
					0x1f,
					0x11,
					0x15,
					0x11,
					0x1f
				]);
			}
		}

		if (needsverinfo(ver)) {
			var code = augumentbch(ver, 6, 0x1f25, 12);
			var k = 0;

			for (var i4 = 0; i4 < 6; ++i4) {
				for (var j2 = 0; j2 < 3; ++j2) {
					matrix[i4][n - 11 + j2] = matrix[n - 11 + j2][i4] =
						(code >> k++) & 1;
					reserved[i4][n - 11 + j2] = reserved[n - 11 + j2][i4] = 1;
				}
			}
		}

		return {
			matrix: matrix,
			reserved: reserved
		};
	};

	var putdata = function putdata(matrix, reserved, buf) {
		var n = matrix[length];
		var k = 0,
			dir = -1;

		for (var i = n - 1; i >= 0; i -= 2) {
			if (i === 6) {
				--i;
			}

			var jj = dir < 0 ? n - 1 : 0;

			for (var j = 0; j < n; ++j) {
				for (var ii = i; ii > i - 2; --ii) {
					if (!reserved[jj][ii]) {
						matrix[jj][ii] = (buf[k >> 3] >> (~k & 7)) & 1;
						++k;
					}
				}

				jj += dir;
			}

			dir = -dir;
		}

		return matrix;
	};

	var maskdata = function maskdata(matrix, reserved, mask) {
		var maskf = MASKFUNCS[mask];
		var n = matrix[length];

		for (var i = 0; i < n; ++i) {
			for (var j = 0; j < n; ++j) {
				if (!reserved[i][j]) {
					matrix[i][j] ^= maskf(i, j);
				}
			}
		}

		return matrix;
	};

	var putformatinfo = function putformatinfo(
		matrix,
		reserved,
		ecclevel,
		mask
	) {
		var n = matrix[length];
		var code = augumentbch((ecclevel << 3) | mask, 5, 0x537, 10) ^ 0x5412;

		for (var i = 0; i < 15; ++i) {
			var r = [
				0,
				1,
				2,
				3,
				4,
				5,
				7,
				8,
				n - 7,
				n - 6,
				n - 5,
				n - 4,
				n - 3,
				n - 2,
				n - 1
			][i];
			var c = [
				n - 1,
				n - 2,
				n - 3,
				n - 4,
				n - 5,
				n - 6,
				n - 7,
				n - 8,
				7,
				5,
				4,
				3,
				2,
				1,
				0
			][i];
			matrix[r][8] = matrix[8][c] = (code >> i) & 1;
		}

		return matrix;
	};

	var evaluatematrix = function evaluatematrix(matrix) {
		var PENALTY_CONSECUTIVE = 3;
		var PENALTY_TWOBYTWO = 3;
		var PENALTY_FINDERLIKE = 40;
		var PENALTY_DENSITY = 10;

		var evaluategroup = function evaluategroup(groups) {
			var score = 0;

			for (var i = 0; i < groups[length]; ++i) {
				if (groups[i] >= 5) {
					score += PENALTY_CONSECUTIVE + (groups[i] - 5);
				}
			}

			for (var i2 = 5; i2 < groups[length]; i2 += 2) {
				var p = groups[i2];

				if (
					groups[i2 - 1] === p &&
					groups[i2 - 2] === 3 * p &&
					groups[i2 - 3] === p &&
					groups[i2 - 4] === p &&
					(groups[i2 - 5] >= 4 * p || groups[i2 + 1] >= 4 * p)
				) {
					score += PENALTY_FINDERLIKE;
				}
			}

			return score;
		};

		var n = matrix[length];
		var score = 0,
			nblacks = 0;

		for (var i = 0; i < n; ++i) {
			var row = matrix[i];
			var groups;
			groups = [0];

			for (var j = 0; j < n; ) {
				var k;

				for (k = 0; j < n && row[j]; ++k) {
					++j;
				}

				groups.push(k);

				for (k = 0; j < n && !row[j]; ++k) {
					++j;
				}

				groups.push(k);
			}

			score += evaluategroup(groups);
			groups = [0];

			for (var j2 = 0; j2 < n; ) {
				var k2;

				for (k2 = 0; j2 < n && matrix[j2][i]; ++k2) {
					++j2;
				}

				groups.push(k2);

				for (k2 = 0; j2 < n && !matrix[j2][i]; ++k2) {
					++j2;
				}

				groups.push(k2);
			}

			score += evaluategroup(groups);
			var nextrow = matrix[i + 1] || [];
			nblacks += row[0];

			for (var j3 = 1; j3 < n; ++j3) {
				var p = row[j3];
				nblacks += p;

				if (
					row[j3 - 1] === p &&
					nextrow[j3] === p &&
					nextrow[j3 - 1] === p
				) {
					score += PENALTY_TWOBYTWO;
				}
			}
		}

		score +=
			PENALTY_DENSITY * ((Math.abs(nblacks / n / n - 0.5) / 0.05) | 0);
		return score;
	};

	var _generate = function generate(data, ver, mode, ecclevel, mask) {
		var v = VERSIONS[ver];
		var buf = encode(ver, mode, data, ndatabits(ver, ecclevel) >> 3);
		buf = augumenteccs(buf, v[1][ecclevel], GF256_GENPOLY[v[0][ecclevel]]);
		var result = makebasematrix(ver);
		var matrix = result.matrix,
			reserved = result.reserved;
		putdata(matrix, reserved, buf);

		if (mask < 0) {
			maskdata(matrix, reserved, 0);
			putformatinfo(matrix, reserved, ecclevel, 0);
			var bestmask = 0,
				bestscore = evaluatematrix(matrix);
			maskdata(matrix, reserved, 0);

			for (mask = 1; mask < 8; ++mask) {
				maskdata(matrix, reserved, mask);
				putformatinfo(matrix, reserved, ecclevel, mask);
				var score = evaluatematrix(matrix);

				if (bestscore > score) {
					bestscore = score;
					bestmask = mask;
				}

				maskdata(matrix, reserved, mask);
			}

			mask = bestmask;
		}

		maskdata(matrix, reserved, mask);
		putformatinfo(matrix, reserved, ecclevel, mask);
		return matrix;
	};

	var QRCode = {
		generate: function generate(data, settings) {
			var options = settings || {};
			var MODES = {
				numeric: MODE_NUMERIC,
				alphanumeric: MODE_ALPHANUMERIC,
				octet: MODE_OCTET
			};
			var ECCLEVELS = {
				L: ECCLEVEL_L,
				M: ECCLEVEL_M,
				Q: ECCLEVEL_Q,
				H: ECCLEVEL_H
			};
			var ver = options.version || -1;
			var ecclevel = ECCLEVELS[(options.ecclevel || "L").toUpperCase()];
			var mode = options.mode ? MODES[options.mode.toLowerCase()] : -1;
			var mask = "mask" in options ? options.mask : -1;

			if (mode < 0) {
				if (typeof data === "string") {
					if (data.match(NUMERIC_REGEXP)) {
						mode = MODE_NUMERIC;
					} else if (data.match(ALPHANUMERIC_OUT_REGEXP)) {
						mode = MODE_ALPHANUMERIC;
					} else {
						mode = MODE_OCTET;
					}
				} else {
					mode = MODE_OCTET;
				}
			} else if (
				!(
					mode === MODE_NUMERIC ||
					mode === MODE_ALPHANUMERIC ||
					mode === MODE_OCTET
				)
			) {
				throw "invalid or unsupported mode";
			}

			data = validatedata(mode, data);

			if (data === null) {
				throw "invalid data format";
			}

			if (ecclevel < 0 || ecclevel > 3) {
				throw "invalid ECC level";
			}

			if (ver < 0) {
				for (ver = 1; ver <= 40; ++ver) {
					if (data[length] <= getmaxdatalen(ver, mode, ecclevel)) {
						break;
					}
				}

				if (ver > 40) {
					throw "too large data";
				}
			} else if (ver < 1 || ver > 40) {
				throw "invalid version";
			}

			if (mask !== -1 && (mask < 0 || mask > 8)) {
				throw "invalid mask";
			}

			return _generate(data, ver, mode, ecclevel, mask);
		},
		generateHTML: function generateHTML(data, settings) {
			var options = settings || {};
			var fillcolor = options.fillcolor ? options.fillcolor : "#FFFFFF";
			var textcolor = options.textcolor ? options.textcolor : "#000000";
			var matrix = QRCode.generate(data, options);
			var modsize = Math.max(options.modulesize || 5, 0.5);
			var margin = Math.max(
				options.margin !== null ? options.margin : 4,
				0.0
			);
			var e = document.createElement("div");
			var n = matrix[length];
			var html = [
				'<table border="0" cellspacing="0" cellpadding="0" style="border:' +
					modsize * margin +
					"px solid " +
					fillcolor +
					";background:" +
					fillcolor +
					'">'
			];

			for (var i = 0; i < n; ++i) {
				html.push("<tr>");

				for (var j = 0; j < n; ++j) {
					html.push(
						'<td style="width:' +
							modsize +
							"px;height:" +
							modsize +
							"px" +
							(matrix[i][j] ? ";background:" + textcolor : "") +
							'"></td>'
					);
				}

				html.push("</tr>");
			}

			e.className = "qrcode";
			/* e.innerHTML = html.join("") + "</table>"; */

			var range = document.createRange();
			range.selectNodeContents(e);
			var frag = range.createContextualFragment(
				html.join("") + "</table>"
			);
			e.appendChild(frag);
			return e;
		},
		generateSVG: function generateSVG(data, settings) {
			var options = settings || {};
			var fillcolor = options.fillcolor ? options.fillcolor : "#FFFFFF";
			var textcolor = options.textcolor ? options.textcolor : "#000000";
			var matrix = QRCode.generate(data, options);
			var n = matrix[length];
			var modsize = Math.max(options.modulesize || 5, 0.5);
			var margin = Math.max(options.margin ? options.margin : 4, 0.0);
			var size = modsize * (n + 2 * margin);
			/* var common = ' class= "fg"' + ' width="' + modsize + '" height="' + modsize + '"/>'; */

			var e = document.createElementNS(
				"http://www.w3.org/2000/svg",
				"svg"
			);
			e.setAttributeNS(null, "viewBox", "0 0 " + size + " " + size);
			e.setAttributeNS(null, "style", "shape-rendering:crispEdges");
			var qrcodeId = "qrcode" + Date.now();
			e.setAttributeNS(null, "id", qrcodeId);
			var frag = document.createDocumentFragment();
			/* var svg = ['<style scoped>.bg{fill:' + fillcolor + '}.fg{fill:' + textcolor + '}</style>', '<rect class="bg" x="0" y="0"', 'width="' + size + '" height="' + size + '"/>', ]; */

			var style = document.createElementNS(
				"http://www.w3.org/2000/svg",
				"style"
			);
			style.appendChild(
				document.createTextNode(
					"#" +
						qrcodeId +
						" .bg{fill:" +
						fillcolor +
						"}#" +
						qrcodeId +
						" .fg{fill:" +
						textcolor +
						"}"
				)
			);
			/* style.setAttributeNS(null, "scoped", "scoped"); */

			frag.appendChild(style);

			var createRect = function createRect(c, f, x, y, s) {
				var fg =
					document.createElementNS(
						"http://www.w3.org/2000/svg",
						"rect"
					) || "";
				fg.setAttributeNS(null, "class", c);
				fg.setAttributeNS(null, "fill", f);
				fg.setAttributeNS(null, "x", x);
				fg.setAttributeNS(null, "y", y);
				fg.setAttributeNS(null, "width", s);
				fg.setAttributeNS(null, "height", s);
				return fg;
			};

			frag.appendChild(createRect("bg", "none", 0, 0, size));
			var yo = margin * modsize;

			for (var y = 0; y < n; ++y) {
				var xo = margin * modsize;

				for (var x = 0; x < n; ++x) {
					if (matrix[y][x]) {
						/* svg.push('<rect x="' + xo + '" y="' + yo + '"', common); */
						frag.appendChild(
							createRect("fg", "none", xo, yo, modsize)
						);
					}

					xo += modsize;
				}

				yo += modsize;
			}
			/* e.innerHTML = svg.join(""); */

			e.appendChild(frag);
			return e;
		},
		generatePNG: function generatePNG(data, settings) {
			var options = settings || {};
			var fillcolor = options.fillcolor || "#FFFFFF";
			var textcolor = options.textcolor || "#000000";
			var matrix = QRCode.generate(data, options);
			var modsize = Math.max(options.modulesize || 5, 0.5);
			var margin = Math.max(
				options.margin !== null && options.margin !== undefined
					? options.margin
					: 4,
				0.0
			);
			var n = matrix[length];
			var size = modsize * (n + 2 * margin);
			var canvas = document.createElement("canvas"),
				context;
			canvas.width = canvas.height = size;
			context = canvas.getContext("2d");

			if (!context) {
				throw "canvas support is needed for PNG output";
			}

			context.fillStyle = fillcolor;
			context.fillRect(0, 0, size, size);
			context.fillStyle = textcolor;

			for (var i = 0; i < n; ++i) {
				for (var j = 0; j < n; ++j) {
					if (matrix[i][j]) {
						context.fillRect(
							modsize * (margin + j),
							modsize * (margin + i),
							modsize,
							modsize
						);
					}
				}
			}

			return canvas.toDataURL();
		}
	};
	root.QRCode = QRCode;
})("undefined" !== typeof window ? window : this, document);
/*jshint bitwise: true */

function _typeof(obj) {
	if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
		_typeof = function _typeof(obj) {
			return typeof obj;
		};
	} else {
		_typeof = function _typeof(obj) {
			return obj &&
				typeof Symbol === "function" &&
				obj.constructor === Symbol &&
				obj !== Symbol.prototype
				? "symbol"
				: typeof obj;
		};
	}
	return _typeof(obj);
}

/*!
 * modified Generates event when user makes new movement (like a swipe on a touchscreen).
 * @version 1.1.4
 * @link https://github.com/Promo/wheel-indicator
 * @license MIT
 * @see {@link https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection}
 * forced passive event listener if supported
 * passes jshint
 */

/* global module, window, document */
var WheelIndicator = (function(root, document) {
	var eventWheel = "onwheel" in document ? "wheel" : "mousewheel",
		DEFAULTS = {
			callback: function callback() {},
			elem: document,
			preventMouse: true
		};

	function Module(options) {
		this._options = extend(DEFAULTS, options);
		this._deltaArray = [0, 0, 0];
		this._isAcceleration = false;
		this._isStopped = true;
		this._direction = "";
		this._timer = "";
		this._isWorking = true;
		var self = this;

		this._wheelHandler = function (event) {
			if (self._isWorking) {
				processDelta.call(self, event);

				if (self._options.preventMouse) {
					preventDefault(event);
				}
			}
		};

		addEvent(this._options.elem, eventWheel, this._wheelHandler);
	}

	Module.prototype = {
		constructor: Module,
		turnOn: function turnOn() {
			this._isWorking = true;
			return this;
		},
		turnOff: function turnOff() {
			this._isWorking = false;
			return this;
		},
		setOptions: function setOptions(options) {
			this._options = extend(this._options, options);
			return this;
		},
		getOption: function getOption(option) {
			var neededOption = this._options[option];

			if (neededOption !== undefined) {
				return neededOption;
			}

			throw new Error("Unknown option");
		},
		destroy: function destroy() {
			removeEvent(this._options.elem, eventWheel, this._wheelHandler);
			return this;
		}
	};

	function triggerEvent(event) {
		event.direction = this._direction;

		this._options.callback.call(this, event);
	}

	var _getDeltaY = function getDeltaY(event) {
		if (event.wheelDelta && !event.deltaY) {
			_getDeltaY = function getDeltaY(event) {
				return event.wheelDelta * -1;
			};
		} else {
			_getDeltaY = function getDeltaY(event) {
				return event.deltaY;
			};
		}

		return _getDeltaY(event);
	};

	function preventDefault(event) {
		event = event || root.event;

		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	}

	function processDelta(event) {
		var self = this,
			delta = _getDeltaY(event);

		if (delta === 0) return;
		var direction = delta > 0 ? "down" : "up",
			arrayLength = self._deltaArray.length,
			changedDirection = false,
			repeatDirection = 0,
			sustainableDirection,
			i;
		clearTimeout(self._timer);
		self._timer = setTimeout(function () {
			self._deltaArray = [0, 0, 0];
			self._isStopped = true;
			self._direction = direction;
		}, 150);

		for (i = 0; i < arrayLength; i++) {
			if (self._deltaArray[i] !== 0) {
				if (self._deltaArray[i] > 0) {
					++repeatDirection;
				} else {
					--repeatDirection;
				}
			}
		}

		if (Math.abs(repeatDirection) === arrayLength) {
			sustainableDirection = repeatDirection > 0 ? "down" : "up";

			if (sustainableDirection !== self._direction) {
				changedDirection = true;
				self._direction = direction;
			}
		}

		if (!self._isStopped) {
			if (changedDirection) {
				self._isAcceleration = true;
				triggerEvent.call(this, event);
			} else {
				if (Math.abs(repeatDirection) === arrayLength) {
					analyzeArray.call(this, event);
				}
			}
		}

		if (self._isStopped) {
			self._isStopped = false;
			self._isAcceleration = true;
			self._direction = direction;
			triggerEvent.call(this, event);
		}

		self._deltaArray.shift();

		self._deltaArray.push(delta);
	}

	function analyzeArray(event) {
		var deltaArray0Abs = Math.abs(this._deltaArray[0]),
			deltaArray1Abs = Math.abs(this._deltaArray[1]),
			deltaArray2Abs = Math.abs(this._deltaArray[2]),
			deltaAbs = Math.abs(_getDeltaY(event));

		if (
			deltaAbs > deltaArray2Abs &&
			deltaArray2Abs > deltaArray1Abs &&
			deltaArray1Abs > deltaArray0Abs
		) {
			if (!this._isAcceleration) {
				triggerEvent.call(this, event);
				this._isAcceleration = true;
			}
		}

		if (deltaAbs < deltaArray2Abs && deltaArray2Abs <= deltaArray1Abs) {
			this._isAcceleration = false;
		}
	}

	var supportsPassive = (function () {
		var support = false;

		try {
			var opts =
				Object.defineProperty &&
				Object.defineProperty({}, "passive", {
					get: function get() {
						support = true;
					}
				});
			root.addEventListener("test", function () {}, opts);
		} catch (err) {}

		return support;
	})();

	function addEvent(elem, type, handler) {
		if (elem.addEventListener) {
			elem.addEventListener(
				type,
				handler,
				supportsPassive
					? {
							passive: true
					  }
					: false
			);
		} else if (elem.attachEvent) {
			elem.attachEvent("on" + type, handler);
		}
	}

	function removeEvent(elem, type, handler) {
		if (elem.removeEventListener) {
			elem.removeEventListener(
				type,
				handler,
				supportsPassive
					? {
							passive: true
					  }
					: false
			);
		} else if (elem.detachEvent) {
			elem.detachEvent("on" + type, handler);
		}
	}

	function extend(defaults, options) {
		var extended = {},
			prop;

		for (prop in defaults) {
			if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
				extended[prop] = defaults[prop];
			}
		}

		for (prop in options) {
			if (Object.prototype.hasOwnProperty.call(options, prop)) {
				extended[prop] = options[prop];
			}
		}

		return extended;
	}

	return Module;
})("undefined" !== typeof window ? window : this, document);

if (
	(typeof exports === "undefined" ? "undefined" : _typeof(exports)) ===
	"object"
) {
	module.exports = WheelIndicator;
}

/*global jQuery */

/*!
 * Super lightweight script (~1kb) to detect via Javascript events like
 * 'tap' 'dbltap' "swipeup" "swipedown" "swipeleft" "swiperight"
 * on any kind of device.
 * Version: 2.0.1
 * Author: Gianluca Guarini
 * Contact: gianluca.guarini@gmail.com
 * Website: http://www.gianlucaguarini.com/
 * Twitter: @gianlucaguarini
 * Copyright (c) Gianluca Guarini
 * @see {@link https://github.com/GianlucaGuarini/Tocca.js/blob/master/Tocca.js}
 * passes jshint
 */
(function(doc, win) {
	"use strict";

	if (typeof doc.createEvent !== "function") {
		return false;
	}

	var tapNum = 0,
		pointerId,
		currX,
		currY,
		cachedX,
		cachedY,
		timestamp,
		target,
		dblTapTimer,
		longtapTimer;

	var pointerEventSupport = function pointerEventSupport(type) {
			var lo = type.toLowerCase(),
				ms = "MS" + type;
			return navigator.msPointerEnabled
				? ms
				: window.PointerEvent
				? lo
				: "";
		},
		defaults = {
			useJquery: !win.IGNORE_JQUERY && typeof jQuery !== "undefined",
			swipeThreshold: win.SWIPE_THRESHOLD || 100,
			tapThreshold: win.TAP_THRESHOLD || 150,
			dbltapThreshold: win.DBL_TAP_THRESHOLD || 200,
			longtapThreshold: win.LONG_TAP_THRESHOLD || 1000,
			tapPrecision: win.TAP_PRECISION / 2 || 60 / 2,
			justTouchEvents: win.JUST_ON_TOUCH_DEVICES
		},
		wasTouch = false,
		touchevents = {
			touchstart: pointerEventSupport("PointerDown") || "touchstart",
			touchend: pointerEventSupport("PointerUp") + " touchend",
			touchmove: pointerEventSupport("PointerMove") + " touchmove"
		},
		isTheSameFingerId = function isTheSameFingerId(e) {
			return (
				!e.pointerId ||
				typeof pointerId === "undefined" ||
				e.pointerId === pointerId
			);
		},
		setListener = function setListener(elm, events, callback) {
			var eventsArray = events.split(" "),
				i = eventsArray.length;

			while (i--) {
				elm.addEventListener(eventsArray[i], callback, false);
			}
		},
		getPointerEvent = function getPointerEvent(event) {
			return event.targetTouches ? event.targetTouches[0] : event;
		},
		getTimestamp = function getTimestamp() {
			return new Date().getTime();
		},
		sendEvent = function sendEvent(elm, eventName, originalEvent, data) {
			var customEvent = doc.createEvent("Event");
			customEvent.originalEvent = originalEvent;
			data = data || {};
			data.x = currX;
			data.y = currY;
			data.distance = data.distance;

			if (defaults.useJquery) {
				customEvent = jQuery.Event(eventName, {
					originalEvent: originalEvent
				});
				jQuery(elm).trigger(customEvent, data);
			}

			if (customEvent.initEvent) {
				for (var key in data) {
					if (data.hasOwnProperty(key)) {
						customEvent[key] = data[key];
					}
				}

				customEvent.initEvent(eventName, true, true);
				elm.dispatchEvent(customEvent);
			}

			while (elm) {
				if (elm["on" + eventName]) {
					elm["on" + eventName](customEvent);
				}

				elm = elm.parentNode;
			}
		},
		onTouchStart = function onTouchStart(e) {
			if (!isTheSameFingerId(e)) {
				return;
			}

			var isMousedown = e.type === "mousedown";
			wasTouch = !isMousedown;
			pointerId = e.pointerId;

			if (e.type === "mousedown" && wasTouch) {
				return;
			}

			var pointer = getPointerEvent(e);
			cachedX = currX = pointer.pageX;
			cachedY = currY = pointer.pageY;
			longtapTimer = setTimeout(function () {
				sendEvent(e.target, "longtap", e);
				target = e.target;
			}, defaults.longtapThreshold);
			timestamp = getTimestamp();
			tapNum++;
		},
		onTouchEnd = function onTouchEnd(e) {
			if (!isTheSameFingerId(e)) {
				return;
			}

			pointerId = undefined;

			if (e.type === "mouseup" && wasTouch) {
				wasTouch = false;
				return;
			}

			var eventsArr = [],
				now = getTimestamp(),
				deltaY = cachedY - currY,
				deltaX = cachedX - currX;
			clearTimeout(dblTapTimer);
			clearTimeout(longtapTimer);

			if (deltaX <= -defaults.swipeThreshold) {
				eventsArr.push("swiperight");
			}

			if (deltaX >= defaults.swipeThreshold) {
				eventsArr.push("swipeleft");
			}

			if (deltaY <= -defaults.swipeThreshold) {
				eventsArr.push("swipedown");
			}

			if (deltaY >= defaults.swipeThreshold) {
				eventsArr.push("swipeup");
			}

			if (eventsArr.length) {
				for (var i = 0; i < eventsArr.length; i++) {
					var eventName = eventsArr[i];
					sendEvent(e.target, eventName, e, {
						distance: {
							x: Math.abs(deltaX),
							y: Math.abs(deltaY)
						}
					});
				}

				tapNum = 0;
			} else {
				if (
					cachedX >= currX - defaults.tapPrecision &&
					cachedX <= currX + defaults.tapPrecision &&
					cachedY >= currY - defaults.tapPrecision &&
					cachedY <= currY + defaults.tapPrecision
				) {
					if (timestamp + defaults.tapThreshold - now >= 0) {
						sendEvent(
							e.target,
							tapNum >= 2 && target === e.target
								? "dbltap"
								: "tap",
							e
						);
						target = e.target;
					}
				}

				dblTapTimer = setTimeout(function () {
					tapNum = 0;
				}, defaults.dbltapThreshold);
			}
		},
		onTouchMove = function onTouchMove(e) {
			if (!isTheSameFingerId(e)) {
				return;
			}

			if (e.type === "mousemove" && wasTouch) {
				return;
			}

			var pointer = getPointerEvent(e);
			currX = pointer.pageX;
			currY = pointer.pageY;
		};

	setListener(
		doc,
		touchevents.touchstart + (defaults.justTouchEvents ? "" : " mousedown"),
		onTouchStart
	);
	setListener(
		doc,
		touchevents.touchend + (defaults.justTouchEvents ? "" : " mouseup"),
		onTouchEnd
	);
	setListener(
		doc,
		touchevents.touchmove + (defaults.justTouchEvents ? "" : " mousemove"),
		onTouchMove
	);

	win.tocca = function (options) {
		for (var opt in options) {
			if (options.hasOwnProperty(opt)) {
				defaults[opt] = options[opt];
			}
		}

		return defaults;
	};
})(document, "undefined" !== typeof window ? window : this);


































		
/*jslint browser: true */

/*jslint node: true */

/*global addClass, addListener, ajaxGet, debounce, doesFontExist, getByClass,
getHumanDate, hasClass, hasTouch, hasWheel, isNodejs, isElectron, isNwjs,
loadDeferred, loadJsCss, manageExternalLinkAll, needsPolyfills,
openDeviceBrowser, Parallax, parseLink, platform, QRCode, removeClass,
removeElement, setDisplayBlock, setDisplayNone, setVisible, supportsCanvas,
supportsPassive, supportsSvgSmilAnimation, toggleClass, ToProgress, unescape,
VK, WheelIndicator, Ya*/

/*property console, join, split */

(function(root, document) {
    "use strict";

    /*!
     * safe way to handle console.log
     * @see {@link https://github.com/paulmillr/console-polyfill}
     */
    (function() {
        if (!root.console) {
            root.console = {};
        }
        var con = root.console;
        var prop;
        var method;
        var dummy = function() {};
        var properties = ["memory"];
        var methods = ["assert,clear,count,debug,dir,dirxml,error,exception,group,",
            "groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,",
            "show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn"
        ];
        methods.join("").split(",");
        for (;
            (prop = properties.pop());) {
            if (!con[prop]) {
                con[prop] = {};
            }
        }
        for (;
            (method = methods.pop());) {
            if (!con[method]) {
                con[method] = dummy;
            }
        }
        prop = method = dummy = properties = methods = null;
    })();

    /*!
     * supportsPassive
     */
    root.supportsPassive = (function() {
        var support = false;
        try {
            var options = Object.defineProperty && Object.defineProperty({}, "passive", {
                get: function() {
                    support = true;
                }
            });
            root.addEventListener("test", function() {}, options);
        } catch (err) {}
        return support;
    })();

    /*!
     * supportsSvgSmilAnimation
     */
    root.supportsSvgSmilAnimation = (function() {
        var fn = {}.toString;
        return !!document.createElementNS &&
            (/SVGAnimate/).test(fn.call(document.createElementNS("http://www.w3.org/2000/svg", "animate"))) || "";
    })();

    /*!
     * supportsCanvas
     */
    root.supportsCanvas = (function() {
        var canvas = document.createElement("canvas");
        return !!(canvas.getContext && canvas.getContext("2d"));
    })();

    /*!
     * hasWheel
     */
    root.hasWheel = "onwheel" in document.createElement("div") || void 0 !== document.onmousewheel || "";

    /*!
     * hasTouch
     */
    root.hasTouch = "ontouchstart" in document.documentElement || "";

    /*!
     * needsPolyfills
     */
    root.needsPolyfills = (function() {
        return !String.prototype.startsWith ||
            !supportsPassive ||
            !root.requestAnimationFrame ||
            !root.matchMedia ||
            ("undefined" === typeof root.Element && !("dataset" in document.documentElement)) ||
            !("classList" in document.createElement("_")) ||
            (document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) ||
            (root.attachEvent && !root.addEventListener) ||
            !("onhashchange" in root) ||
            !Array.prototype.indexOf ||
            !root.Promise ||
            !root.fetch ||
            !document.querySelectorAll ||
            !document.querySelector ||
            !Function.prototype.bind ||
            (Object.defineProperty &&
                Object.getOwnPropertyDescriptor &&
                Object.getOwnPropertyDescriptor(Element.prototype, "textContent") &&
                !Object.getOwnPropertyDescriptor(Element.prototype, "textContent").get) ||
            !("undefined" !== typeof root.localStorage && "undefined" !== typeof root.sessionStorage) ||
            !root.WeakMap ||
            !root.MutationObserver;
    })();

    /*!
     * getHumanDate
     */
    root.getHumanDate = (function() {
        var newDate = (new Date());
        var newDay = newDate.getDate();
        var newYear = newDate.getFullYear();
        var newMonth = newDate.getMonth();
        (newMonth += 1);
        if (10 > newDay) {
            newDay = "0" + newDay;
        }
        if (10 > newMonth) {
            newMonth = "0" + newMonth;
        }
        return "".concat(newYear, "-", newMonth, "-", newDay);
    })();

    /*!
     * Super-simple wrapper around addEventListener and attachEvent (old IE).
     * Does not handle differences in the Event-objects.
     * @see {@link https://github.com/finn-no/eventlistener}
     */
    (function() {
        var setListener = function(standard, fallback) {
            return function(el, type, listener, useCapture) {
                if (el[standard]) {
                    el[standard](type, listener, useCapture);
                } else {
                    if (el[fallback]) {
                        el[fallback]("on" + type, listener);
                    }
                }
            };
        };
        root.addListener = setListener("addEventListener", "attachEvent");
        root.removeListener = setListener("removeEventListener", "detachEvent");
    })();

    /*!
     * get elements by class name wrapper
     */
    root.getByClass = function(parent, name) {
        if (!document.getElementsByClassName) {
            var children = (parent || document.body).getElementsByTagName("*"),
                elements = [],
                regx = new RegExp("\\b" + name + "\\b"),
                child;
            var i,
                l;
            for (i = 0, l = children.length; i < l; i += 1) {
                child = children[i];
                if (regx.test(child.className)) {
                    elements.push(child);
                }
            }
            i = l = null;
            return elements;
        } else {
            return parent ? parent.getElementsByClassName(name) : "";
        }
    };

    /*!
     * class list wrapper
     */
    (function() {
        var hasClass;
        var addClass;
        var removeClass;
        if ("classList" in document.documentElement) {
            hasClass = function(el, name) {
                return el.classList.contains(name);
            };
            addClass = function(el, name) {
                el.classList.add(name);
            };
            removeClass = function(el, name) {
                el.classList.remove(name);
            };
        } else {
            hasClass = function(el, name) {
                return new RegExp("\\b" + name + "\\b").test(el.className);
            };
            addClass = function(el, name) {
                if (!hasClass(el, name)) {
                    el.className += " " + name;
                }
            };
            removeClass = function(el, name) {
                el.className = el.className.replace(new RegExp("\\b" + name + "\\b", "g"), "");
            };
        }
        root.hasClass = hasClass;
        root.addClass = addClass;
        root.removeClass = removeClass;
        root.toggleClass = function(el, name) {
            if (hasClass(el, name)) {
                removeClass(el, name);
            } else {
                addClass(el, name);
            }
        };
    })();

    /*!
     * parseLink
     */

    /*jshint bitwise: false */
    root.parseLink = function(url, full) {
        var _full = full || "";
        var _url = encodeURI(url);
        return (function() {
            var _replace = function(s) {
                return s.replace(/^(#|\?)/, "").replace(/\:$/, "");
            };
            var _location = location || "";
            var _protocol = function(protocol) {
                switch (protocol) {
                    case "http:":
                        return _full ? ":" + 80 : 80;
                    case "https:":
                        return _full ? ":" + 443 : 443;
                    default:
                        return _full ? ":" + _location.port : _location.port;
                }
            };
            var _isAbsolute = (0 === url.indexOf("//") || !!~url.indexOf("://"));
            var _origin = function() {
                var c = document.createElement("a");
                c.href = _url;
                var o = c.protocol + "//" + c.hostname + (c.port ? ":" + c.port : "");
                return o || "";
            };
            var _isCrossDomain = function() {
                var _locationHref = window.location || "";
                var v = _locationHref.protocol + "//" + _locationHref.hostname + (_locationHref.port ? ":" + _locationHref.port : "");
                return v !== _origin();
            };
            var _link = document.createElement("a");
            _link.href = _url;
            return {
                href: _link.href,
                origin: _origin(),
                host: _link.host || _location.host,
                port: ("0" === _link.port || "" === _link.port) ?
                    _protocol(_link.protocol) :
                    (_full ? _link.port : _replace(_link.port)),
                hash: _full ? _link.hash : _replace(_link.hash),
                hostname: _link.hostname || _location.hostname,
                pathname: _link.pathname.charAt(0) !== "/" ?
                    (_full ? "/" + _link.pathname : _link.pathname) :
                    (_full ? _link.pathname : _link.pathname.slice(1)),
                protocol: !_link.protocol ||
                    ":" === _link.protocol ?
                    (_full ? _location.protocol : _replace(_location.protocol)) :
                    (_full ? _link.protocol : _replace(_link.protocol)),
                search: _full ? _link.search : _replace(_link.search),
                query: _full ? _link.search : _replace(_link.search),
                isAbsolute: _isAbsolute,
                isRelative: !_isAbsolute,
                isCrossDomain: _isCrossDomain(),
                hasHTTP: (/^(http|https):\/\//i).test(url) ? true : false
            };
        })();
    };
    /*jshint bitwise: true */

    /*!
     * getHttp
     */
    root.getHttp = (function() {
        var prot = root.location.protocol || "";
        return "http:" === prot ? "http" : "https:" === prot ? "https" : "";
    })();

    /*!
     * debounce
     */
    root.debounce = function(func, wait) {
        var timer;
        var args;
        var context;
        var timestamp;
        return function debounced() {
            context = this;
            args = [].slice.call(arguments, 0);
            timestamp = new Date();
            var later = function() {
                var last = (new Date()) - timestamp;
                if (last < wait) {
                    timer = setTimeout(later, wait - last);
                } else {
                    timer = null;
                    func.apply(context, args);
                }
            };
            if (!timer) {
                timer = setTimeout(later, wait);
            }
        };
    };

    /*!
     * isNodejs isElectron isNwjs;
     */
    root.isNodejs = "undefined" !== typeof process && "undefined" !== typeof require || "";
    root.isElectron = (function() {
        if (typeof root !== "undefined" &&
            typeof root.process === "object" &&
            root.process.type === "renderer") {
            return true;
        }
        if (typeof root !== "undefined" &&
            typeof root.process !== "undefined" &&
            typeof root.process.versions === "object" &&
            !!root.process.versions.electron) {
            return true;
        }
        if (typeof navigator === "object" &&
            typeof navigator.userAgent === "string" &&
            navigator.userAgent.indexOf("Electron") >= 0) {
            return true;
        }
        return false;
    })();
    root.isNwjs = (function() {
        if ("undefined" !== typeof isNodejs && isNodejs) {
            try {
                if ("undefined" !== typeof require("nw.gui")) {
                    return true;
                }
            } catch (err) {
                return false;
            }
        }
        return false;
    })();

    /*!
     * openDeviceBrowser
     */
    root.openDeviceBrowser = function(url) {
        var onElectron = function() {
            var es = isElectron ? require("electron").shell : "";
            return es ? es.openExternal(url) : "";
        };
        var onNwjs = function() {
            var ns = isNwjs ? require("nw.gui").Shell : "";
            return ns ? ns.openExternal(url) : "";
        };
        var onLocal = function() {
            return root.open(url, "_system", "scrollbars=1,location=no");
        };
        if (isElectron) {
            onElectron();
        } else if (isNwjs) {
            onNwjs();
        } else {
            if (root.getHttp) {
                return true;
            } else {
                onLocal();
            }
        }
    };

    /*!
     * setDisplayBlock
     */
    root.setDisplayBlock = function(elem) {
        return elem && (elem.style.display = "block");
    };

    /*!
     * setDisplayNone
     */
    root.setDisplayNone = function(elem) {
        return elem && (elem.style.display = "none");
    };

    /*!
     * setVisible
     */
    root.setVisible = function(elem) {
        return elem && (elem.style.visibility = "visible", elem.style.opacity = 1);
    };

    /*!
     * removeElement
     */
    root.removeElement = function(elem) {
        if (elem) {
            if ("undefined" !== typeof elem.remove) {
                return elem.remove();
            } else {
                return elem.parentNode && elem.parentNode.removeChild(elem);
            }
        }
    };

    /*!
     * modified ToProgress v0.1.1
     * arguments.callee changed to TP, a local wrapper function,
     * so that public function name is now customizable;
     * wrapped in curly brackets:
     * else{document.body.appendChild(this.progressBar);};
     * removed module check
     * @see {@link http://github.com/djyde/ToProgress}
     * @see {@link https://github.com/djyde/ToProgress/blob/master/ToProgress.js}
     * @see {@link https://gist.github.com/englishextra/6a8c79c9efbf1f2f50523d46a918b785}
     * @see {@link https://jsfiddle.net/englishextra/z5xhjde8/}
     * passes jshint
     */
    root.ToProgress = (function() {
        var TP = function() {
            var whichTransitionEvent = function() {
                var el = document.createElement("fakeelement");
                var transitions = {
                    "transition": "transitionend",
                    "OTransition": "oTransitionEnd",
                    "MozTransition": "transitionend",
                    "WebkitTransition": "webkitTransitionEnd"
                };
                var t;
                for (t in transitions) {
                    if (transitions.hasOwnProperty(t)) {
                        if (el.style[t] !== undefined) {
                            return transitions[t];
                        }
                    }
                }
                t = null;
            };
            var transitionEvent = whichTransitionEvent();
            var ToProgress = function(opt, selector) {
                this.progress = 0;
                this.options = {
                    id: "top-progress-bar",
                    color: "#F44336",
                    height: "2px",
                    duration: 0.2,
                    zIndex: "auto"
                };
                if (opt && typeof opt === "object") {
                    var key;
                    for (key in opt) {
                        if (opt.hasOwnProperty(key)) {
                            this.options[key] = opt[key];
                        }
                    }
                    key = null;
                }
                this.options.opacityDuration = this.options.duration * 3;
                this.progressBar = document.createElement("div");
                this.progressBar.id = this.options.id;
                this.progressBar.setCSS = function(style) {
                    var property;
                    for (property in style) {
                        if (style.hasOwnProperty(property)) {
                            this.style[property] = style[property];
                        }
                    }
                    property = null;
                };
                this.progressBar.setCSS({
                    "position": selector ? "relative" : "fixed",
                    "top": "0",
                    "left": "0",
                    "right": "0",
                    "background-color": this.options.color,
                    "height": this.options.height,
                    "width": "0%",
                    "transition": "width " + this.options.duration + "s" + ", opacity " + this.options.opacityDuration + "s",
                    "-moz-transition": "width " + this.options.duration + "s" + ", opacity " + this.options.opacityDuration + "s",
                    "-webkit-transition": "width " + this.options.duration + "s" + ", opacity " + this.options.opacityDuration + "s",
                    "z-index": this.options.zIndex
                });
                if (selector) {
                    var el;
                    if (selector.indexOf("#", 0) !== -1) {
                        el = document.getElementById(selector) || "";
                    } else {
                        if (selector.indexOf(".", 0) !== -1) {
                            el = document.getElementsByClassName(selector)[0] || "";
                        }
                    }
                    if (el) {
                        if (el.hasChildNodes()) {
                            el.insertBefore(this.progressBar, el.firstChild);
                        } else {
                            el.appendChild(this.progressBar);
                        }
                    }
                } else {
                    document.body.appendChild(this.progressBar);
                }
            };
            ToProgress.prototype.transit = function() {
                this.progressBar.style.width = this.progress + "%";
            };
            ToProgress.prototype.getProgress = function() {
                return this.progress;
            };
            ToProgress.prototype.setProgress = function(progress, callback) {
                this.show();
                if (progress > 100) {
                    this.progress = 100;
                } else if (progress < 0) {
                    this.progress = 0;
                } else {
                    this.progress = progress;
                }
                this.transit();
                if (callback) {
                    callback();
                }
            };
            ToProgress.prototype.increase = function(toBeIncreasedProgress, callback) {
                this.show();
                this.setProgress(this.progress + toBeIncreasedProgress, callback);
            };
            ToProgress.prototype.decrease = function(toBeDecreasedProgress, callback) {
                this.show();
                this.setProgress(this.progress - toBeDecreasedProgress, callback);
            };
            ToProgress.prototype.finish = function(callback) {
                var that = this;
                this.setProgress(100, callback);
                this.hide();
                if (transitionEvent) {
                    this.progressBar.addEventListener(transitionEvent, function(e) {
                        that.reset();
                        that.progressBar.removeEventListener(e.type, TP);
                    });
                }
            };
            ToProgress.prototype.reset = function(callback) {
                this.progress = 0;
                this.transit();
                if (callback) {
                    callback();
                }
            };
            ToProgress.prototype.hide = function() {
                this.progressBar.style.opacity = "0";
            };
            ToProgress.prototype.show = function() {
                this.progressBar.style.opacity = "1";
            };
            return ToProgress;
        };
        return TP();
    })();

    /*!
     * manageExternalLinkAll
     */
    root.manageExternalLinkAll = function() {
        var link = document.getElementsByTagName("a") || "";
        var arrange = function(e) {
            var handle = function(url, ev) {
                ev.stopPropagation();
                ev.preventDefault();
                var logic = function() {
                    openDeviceBrowser(url);
                };
                debounce(logic, 200).call(root);
            };
            var externalLinkIsBindedClass = "external-link--is-binded";
            if (!hasClass(e, externalLinkIsBindedClass)) {
                var url = e.getAttribute("href") || "";
                if (url && parseLink(url).isCrossDomain && parseLink(url).hasHTTP) {
                    e.title = "" + (parseLink(url).hostname || "") + " откроется в новой вкладке";
                    if (root.getHttp) {
                        e.target = "_blank";
                        e.setAttribute("rel", "noopener noreferrer");
                    } else {
                        addListener(e, "click", handle.bind(null, url));
                    }
                    addClass(e, externalLinkIsBindedClass);
                }
            }
        };
        if (link) {
            var i,
                l;
            for (i = 0, l = link.length; i < l; i += 1) {
                arrange(link[i]);
            }
            i = l = null;
        }
    };

    /*!
     * modified Detect Whether a Font is Installed
     * @param {String} fontName The name of the font to check
     * @return {Boolean}
     * @author Kirupa <sam@samclarke.com>
     * @see {@link https://www.kirupa.com/html5/detect_whether_font_is_installed.htm}
     * passes jshint
     */
    root.doesFontExist = function(fontName) {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        var text = "abcdefghijklmnopqrstuvwxyz0123456789";
        context.font = "72px monospace";
        var baselineSize = context.measureText(text).width;
        context.font = "72px '" + fontName + "', monospace";
        var newSize = context.measureText(text).width;
        canvas = null;
        if (newSize === baselineSize) {
            return false;
        } else {
            return true;
        }
    };

    /*!
     * modified loadExt
     * @see {@link https://gist.github.com/englishextra/ff9dc7ab002312568742861cb80865c9}
     * passes jshint
     */
    root.loadJsCss = function(files, callback, type) {
        var _this = this;
        _this.files = files;
        _this.js = [];
        _this.head = document.getElementsByTagName("head")[0] || "";
        _this.body = document.body || "";
        _this.ref = document.getElementsByTagName("script")[0] || "";
        _this.callback = callback || function() {};
        _this.type = type ? type.toLowerCase() : "";
        _this.loadStyle = function(file) {
            var link = document.createElement("link");
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = file;
            link.media = "only x";
            link.onload = function() {
                this.onload = null;
                this.media = "all";
            };
            link.setAttribute("property", "stylesheet");
            /* _this.head.appendChild(link); */
            (_this.body || _this.head).appendChild(link);
        };
        _this.loadScript = function(i) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.src = _this.js[i];
            var loadNextScript = function() {
                if (++i < _this.js.length) {
                    _this.loadScript(i);
                } else {
                    _this.callback();
                }
            };
            script.onload = function() {
                loadNextScript();
            };
            _this.head.appendChild(script);
            /* if (_this.ref.parentNode) {
            	_this.ref.parentNode[insertBefore](script, _this.ref);
            } else {
            	(_this.body || _this.head).appendChild(script);
            } */
            (_this.body || _this.head).appendChild(script);
        };
        var i,
            l;
        for (i = 0, l = _this.files.length; i < l; i += 1) {
            if ((/\.js$|\.js\?/).test(_this.files[i]) || _this.type === "js") {
                _this.js.push(_this.files[i]);
            }
            if ((/\.css$|\.css\?|\/css\?/).test(_this.files[i]) || _this.type === "css") {
                _this.loadStyle(_this.files[i]);
            }
        }
        i = l = null;
        if (_this.js.length > 0) {
            _this.loadScript(0);
        } else {
            _this.callback();
        }
    };

    /*!
     * loadDeferred
     */
    root.loadDeferred = function(urlArray, callback) {
        var timer;
        var handle = function() {
            clearTimeout(timer);
            timer = null;
            var load;
            load = new loadJsCss(urlArray, callback);
        };
        var req;
        var raf = function() {
            cancelAnimationFrame(req);
            timer = setTimeout(handle, 0);
        };
        if (root.requestAnimationFrame) {
            req = requestAnimationFrame(raf);
        } else {
            addListener(root, "load", handle);
        }
    };
})("undefined" !== typeof window ? window : this, document);
		
		
		
		
		
		
		
		

/*!
 * app logic
 */
(function(root, document, undefined) {
    "use strict";

    var docElem = document.documentElement || "";

    var progressBar = new ToProgress({
        id: "top-progress-bar",
        color: "#FF2C40",
        height: "0.200rem",
        duration: 0.2,
        zIndex: 999
    });

    var hideProgressBar = function() {
        progressBar.finish();
        progressBar.hide();
    };

    if (supportsSvgSmilAnimation) {
        addClass(docElem, "svganimate");
    }

    if (!supportsSvgSmilAnimation) {
        progressBar.increase(20);
        addListener(root, "load", hideProgressBar);
    }

    var ripple = getByClass(document, "ripple")[0] || "";

    var removeRipple = function() {
        removeElement(ripple);
    };

    var timerRipple;
    var deferRemoveRipple = function() {
        clearTimeout(timerRipple);
        timerRipple = null;
        removeRipple();
    };

    var loading = getByClass(document, "loading")[0] || "";

    var removeLoading = function() {
        removeElement(loading);
    };

    var timerLoading;
    var deferRemoveLoading = function() {
        clearTimeout(timerLoading);
        timerLoading = null;
        removeLoading();
    };

    var bounceOutUpClass = "bounceOutUp";

    var hidePreloaders = function() {
        if (ripple) {
            ripple.className += " " + bounceOutUpClass;
            timerRipple = setTimeout(deferRemoveRipple, 5000);
        }
        if (loading) {
            loading.className += " " + bounceOutUpClass;
            timerLoading = setTimeout(deferRemoveLoading, 5000);
        }
    };

    if (!supportsSvgSmilAnimation) {
        removeRipple();
        removeLoading();
    } else {
        addListener(root, "load", hidePreloaders);
    }

    var supportsSvgAsImg = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1") || "";

    if (!supportsSvgAsImg) {
        var svgNosmilImgAll = getByClass(document, "svg-nosmil-img") || "";
        if (svgNosmilImgAll) {
            var i,
                l;
            for (i = 0, l = svgNosmilImgAll.length; i < l; i += 1) {
                svgNosmilImgAll[i].src = svgNosmilImgAll[i].getAttribute("data-fallback-src");
            }
            i = l = null;
        }
    }

    if (!supportsSvgSmilAnimation) {
        var svgSmilImgAll = getByClass(document, "svg-smil-img") || "";
        if (svgSmilImgAll) {
            var j,
                m;
            for (j = 0, m = svgSmilImgAll.length; j < m; j += 1) {
                svgSmilImgAll[j].src = svgSmilImgAll[j].getAttribute("data-fallback-src");
            }
            j = m = null;
        }
    }

    var drawImageFromUrl = function(canvasObj, url) {
        if (!canvasObj || !url) {
            return;
        }
        var img = new Image();
        addListener(img, "load", function() {
            var ctx = canvasObj.getContext("2d");
            if (ctx) {
                ctx.drawImage(img, 0, 0, canvasObj.width, canvasObj.height);
            }
        });
        img.src = url;
    };

    var replaceCanvasWithImg = function(canvasObj, url) {
        if (!canvasObj || !url) {
            return;
        }
        var img = document.createElement("img");
        img.src = url;
        img.alt = "";
        img.className = canvasObj.className.split(" ").join(" ");
        img.width = canvasObj.width;
        img.height = canvasObj.height;
        if (canvasObj.parentNode) {
            canvasObj.parentNode.insertBefore(img, canvasObj.nextSibling);
        }
        setDisplayNone(canvasObj);
    };

    var canvasAll = document.getElementsByTagName("canvas") || "";

    var styleSheetsLength = document.styleSheets.length || 0;

    var slotDrawCanvasAll;
    var drawCanvasAll = function() {
       /*  if (document.styleSheets.length > styleSheetsLength) { */
            clearInterval(slotDrawCanvasAll);
            slotDrawCanvasAll = null;
            var i,
                l,
                canvasObj,
                url;
            for (i = 0, l = canvasAll.length; i < l; i += 1) {
                if (canvasAll[i].getAttribute("data-src")) {
                    canvasObj = canvasAll[i];
                    url = canvasAll[i].getAttribute("data-src");
                    if (supportsCanvas) {
                        drawImageFromUrl(canvasObj, url);
                    } else {
                        replaceCanvasWithImg(canvasObj, url);
                    }

                }
            }
            i = l = canvasObj = url = null;
        /* } */
    };

    if (canvasAll && styleSheetsLength) {
        slotDrawCanvasAll = setInterval(drawCanvasAll, 100);
    }

    var run = function() {

        var bounceInUpClass = "bounceInUp";
        var bounceOutDownClass = "bounceOutDown";

        var isActiveClass = "is-active";
        var isSocialClass = "is-social";

        removeClass(docElem, "no-js");
        addClass(docElem, "js");

        if (!supportsSvgSmilAnimation) {
            progressBar.increase(20);
        }

        if (root.platform && document.title && navigator.userAgent) {
            var userBrowserDescription = platform.description || "";
            document.title = document.title +
                " [" +
                (getHumanDate ? " " + getHumanDate : "") +
                (userBrowserDescription ? " " + userBrowserDescription : "") +
                ((hasTouch || hasWheel) ? " with" : "") +
                (hasTouch ? " touch" : "") +
                ((hasTouch && hasWheel) ? "," : "") +
                (hasWheel ? " mousewheel" : "") +
                "]";
        }

        manageExternalLinkAll();

        var manageLocationQrcode = function() {
            var qrcode = getByClass(document, "qrcode")[0] || "";
            var docTitle = document.title || "";
            var locHref = root.location.href || "";
            var timerQrcode;
            var showQrcode = function() {
                clearTimeout(timerQrcode);
                timerQrcode = null;
                setVisible(qrcode);
            };
            if (qrcode) {
                var img = document.createElement("img");
                var imgTitle = docTitle ? ("Ссылка на страницу «" + docTitle.replace(/\[[^\]]*?\]/g, "").trim() + "»") : "";
                var imgSrc = "https://chart.googleapis.com/chart?cht=qr&chld=M%7C4&choe=UTF-8&chs=512x512&chl=" + encodeURIComponent(locHref);
                img.alt = imgTitle;
                if (root.QRCode) {
                    if (supportsSvgAsImg) {
                        imgSrc = QRCode.generateSVG(locHref, {
                            ecclevel: "M",
                            fillcolor: "#FFFFFF",
                            textcolor: "#191919",
                            margin: 4,
                            modulesize: 8
                        });
                        var XMLS = new XMLSerializer();
                        imgSrc = XMLS.serializeToString(imgSrc);
                        imgSrc = "data:image/svg+xml;base64," + root.btoa(unescape(encodeURIComponent(imgSrc)));
                        img.src = imgSrc;
                    } else {
                        imgSrc = QRCode.generatePNG(locHref, {
                            ecclevel: "M",
                            format: "html",
                            fillcolor: "#FFFFFF",
                            textcolor: "#1F1F1F",
                            margin: 4,
                            modulesize: 8
                        });
                        img.src = imgSrc;
                    }
                } else {
                    img.src = imgSrc;
                }
                img.title = imgTitle;
                qrcode.appendChild(img);
                timerQrcode = setTimeout(showQrcode, 2000);
            }
        };
        manageLocationQrcode();

        var manageDownloadAppBtn = function() {
            var downloadApp = getByClass(document, "download-app")[0] || "";
            var link = downloadApp ? downloadApp.getElementsByTagName("a")[0] || "" : "";
            var img = downloadApp ? downloadApp.getElementsByTagName("img")[0] || "" : "";
            var navUA = navigator.userAgent || "";
            var timer;
            var showDownloadApp = function() {
                clearTimeout(timer);
                timer = null;
                setVisible(downloadApp);
            };
            if (root.platform && navUA && downloadApp && link && img) {
                var osBrowser = platform.name || "";
                var osFamily = platform.os.family || "";
                var osVersion = platform.os.version || "";
                var osArchitecture = platform.os.architecture || "";
                /* console.log(navUA);
                console.log(platform.os);
                console.log(osBrowser + "|" + osFamily + "|" + osVersion + "|" + osArchitecture + "|" + userBrowserDescription); */
                var imgSrc;
                var linkHref;
                if (osFamily.indexOf("Windows Phone", 0) !== -1 && "10.0" === osVersion) {
                    imgSrc = "https://englishextra.github.io/libs/products/img/download_wp_app_144x52.svg";
                    linkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra.Windows10_x86_debug.appx";
                } else if (osBrowser.indexOf("IE Mobile", 0) !== -1 && ("7.5" === osVersion || "8.0" === osVersion || "8.1" === osVersion)) {
                    imgSrc = "https://englishextra.github.io/libs/products/img/download_wp_app_144x52.svg";
                    linkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra_app-debug.xap";
                } else if (osFamily.indexOf("Windows", 0) !== -1 && 64 === osArchitecture) {
                    imgSrc = "https://englishextra.github.io/libs/products/img/download_windows_app_144x52.svg";
                    linkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra-win32-x64-setup.exe";
                } else if (osFamily.indexOf("Windows", 0) !== -1 && 32 === osArchitecture) {
                    imgSrc = "https://englishextra.github.io/libs/products/img/download_windows_app_144x52.svg";
                    linkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra-win32-ia32-setup.exe";
                } else if (navUA.indexOf("armv7l", 0) !== -1) {
                    imgSrc = "https://englishextra.github.io/libs/products/img/download_linux_app_144x52.svg";
                    linkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra-linux-armv7l.tar.gz";
                } else if (navUA.indexOf("X11", 0) !== -1 && navUA.indexOf("Linux") !== -1 && 64 === osArchitecture) {
                    imgSrc = "https://englishextra.github.io/libs/products/img/download_linux_app_144x52.svg";
                    linkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra-linux-x64.tar.gz";
                } else if (navUA.indexOf("X11", 0) !== -1 && navUA.indexOf("Linux") !== -1 && 32 === osArchitecture) {
                    imgSrc = "https://englishextra.github.io/libs/products/img/download_linux_app_144x52.svg";
                    linkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra-linux-ia32.tar.gz";
                } else {
                    if (osFamily.indexOf("Android", 0) !== -1) {
                        imgSrc = "https://englishextra.github.io/libs/products/img/download_android_app_144x52.svg";
                        linkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra-debug.apk";
                    }
                }
                if (imgSrc && linkHref) {
                    /* link.href = linkHref; */
					link.href = "javascript:void(0);";
                    /* link.target = "_blank"; */
                    link.title = "Скачать приложение";
                    link.setAttribute("rel", "noopener noreferrer");
                    if (!supportsSvgAsImg) {
                        imgSrc = [imgSrc.slice(0, -3), "png"].join("");
                    }
                    img.src = imgSrc;
                    timer = setTimeout(showDownloadApp, 1000);
                }
            }
        };
        manageDownloadAppBtn();

        var scene = document.getElementById("scene") || "";
        var parallax;
        if (root.Parallax && scene) {
            parallax = new Parallax(scene);
        }

        var guesture = getByClass(document, "guesture")[0] || "";

        var start = getByClass(document, "start")[0] || "";
        var hand = getByClass(document, "hand")[0] || "";

        var revealStart = function() {
            if (start) {
                removeClass(start, bounceOutDownClass);
                addClass(start, bounceInUpClass);
                setDisplayBlock(start);
            }
            if (hand) {
                removeClass(hand, bounceOutDownClass);
                addClass(hand, bounceInUpClass);
                setDisplayBlock(hand);
            }
            if (guesture) {
                addClass(guesture, bounceOutUpClass);
            }
        };

        var concealStart = function() {
            if (start) {
                removeClass(start, bounceInUpClass);
                addClass(start, bounceOutDownClass);
            }
            if (hand) {
                removeClass(hand, bounceInUpClass);
                addClass(hand, bounceOutDownClass);
            }
            var timer;
            var hideStart = function() {
                clearTimeout(timer);
                timer = null;
                setDisplayNone(start);
                setDisplayNone(hand);
            };
            timer = setTimeout(hideStart, 1000);
        };

        var mousewheeldown = getByClass(document, "mousewheeldown")[0] || "";
        var swipeup = getByClass(document, "swipeup")[0] || "";
        if (mousewheeldown && swipeup) {
            if (hasTouch) {
                setDisplayNone(mousewheeldown);
                if (root.tocca) {
                    addListener(document, "swipeup", revealStart, { passive: true });
                    addListener(document, "swipedown", concealStart, { passive: true });
                }
            } else {
                if (hasWheel) {
                    setDisplayNone(swipeup);
                    if (root.WheelIndicator) {
                        var indicator;
                        indicator = new WheelIndicator({
                            elem: root,
                            callback: function(e) {
                                if ("down" === e.direction) {
                                    revealStart();
                                }
                                if ("up" === e.direction) {
                                    concealStart();
                                }
                            },
                            preventMouse: false
                        });
                    }
                }
            }
            if (hasTouch || hasWheel) {
                addClass(guesture, bounceInUpClass);
                setDisplayBlock(guesture);
            }
        }

        var hideOtherIsSocial = function(thisObj) {
            var _thisObj = thisObj || this;
            var elem = getByClass(document, isSocialClass) || "";
            if (elem) {
                var i,
                    l;
                for (i = 0, l = elem.length; i < l; i += 1) {
                    if (_thisObj !== elem[i]) {
                        removeClass(elem[i], isActiveClass);
                    }
                }
                i = l = null;
            }
        };
        addListener(root, "click", hideOtherIsSocial);

        root.yaShare2Instance = null;
        var manageYaShare2Btn = function() {
            var btn = getByClass(document, "btn-share-buttons")[0] || "";
            var yaShare2Id = "ya-share2";
            var yaShare2 = document.getElementById(yaShare2Id) || "";
            var handleBtn = function(ev) {
                ev.stopPropagation();
                ev.preventDefault();
                var logic = function() {
                    toggleClass(yaShare2, isActiveClass);
                    hideOtherIsSocial(yaShare2);
                    var initScript = function() {
                        try {
                            if (root.yaShare2Instance) {
                                root.yaShare2Instance.updateContent({
                                    title: document.title || "",
                                    description: document.title || "",
                                    url: root.location.href || ""
                                });
                            } else {
                                root.yaShare2Instance = Ya.share2(yaShare2Id, {
                                    content: {
                                        title: document.title || "",
                                        description: document.title || "",
                                        url: root.location.href || ""
                                    }
                                });
                            }
                        } catch (err) {
                            throw new Error("cannot root.yaShare2Instance.updateContent or Ya.share2 " + err);
                        }
                    };
                    if (!(root.Ya && Ya.share2)) {
                        var jsUrl = "https://yastatic.net/share2/share.js";
                        var load;
                        load = new loadJsCss([jsUrl], initScript);
                    } else {
                        initScript();
                    }
                };
                debounce(logic, 200).call(root);
            };
            if (btn && yaShare2) {
                if (root.getHttp) {
                    addListener(btn, "click", handleBtn);
                } else {
                    setDisplayNone(btn);
                }
            }
        };
        manageYaShare2Btn();

        root.vkLikeInstance = null;
        var manageVkLikeBtn = function() {
            var vkLikeId = "vk-like";
            var vkLike = document.getElementById(vkLikeId) || "";
            var holderVkLike = getByClass(document, "holder-vk-like")[0] || "";
            var btn = getByClass(document, "btn-show-vk-like")[0] || "";
            var handleBtn = function(ev) {
                ev.stopPropagation();
                ev.preventDefault();
                var logic = function() {
                    toggleClass(holderVkLike, isActiveClass);
                    hideOtherIsSocial(holderVkLike);
                    var initScript = function() {
                        if (!root.vkLikeInstance) {
                            try {
                                VK.init({
                                    apiId: (vkLike.dataset.apiid || ""),
                                    nameTransportPath: "/xd_receiver.htm",
                                    onlyWidgets: true
                                });
                                VK.Widgets.Like(vkLikeId, {
                                    type: "button",
                                    height: 24
                                });
                                root.vkLikeInstance = true;
                            } catch (err) {
                                throw new Error("cannot VK.init " + err);
                            }
                        }
                    };
                    if (!(root.VK && VK.init && VK.Widgets && VK.Widgets.Like)) {
                        var jsUrl = "https://vk.com/js/api/openapi.js?168";
                        var load;
                        load = new loadJsCss([jsUrl], initScript);
                    } else {
                        initScript();
                    }
                };
                debounce(logic, 200).call(root);
            };
            if (btn && vkLike) {
                if (root.getHttp) {
                    addListener(btn, "click", handleBtn);
                } else {
                    setDisplayNone(btn);
                }
            }
        };
        manageVkLikeBtn();
    };

    var onFontReady = function(bodyFontFamily, scripts, useCheck) {
        var _useCheck = useCheck || "";
        var slot;
        var init = function() {
            clearInterval(slot);
            slot = null;
            if (!supportsSvgSmilAnimation && "undefined" !== typeof progressBar) {
                progressBar.increase(20);
            }
            /* var load;
            load = new loadJsCss(scripts, run); */
			run();
        };
        var check = function() {
            if (doesFontExist(bodyFontFamily)) {
                init();
            }
        };
        if (_useCheck && supportsCanvas) {
            slot = setInterval(check, 100);
        } else {
            slot = null;
            init();
        }
    };

    var scripts = [];

    /* if (needsPolyfills) {
        scripts.push("./cdn/polyfills/js/polyfills.fixed.min.js");
    }

    scripts.push("https://englishextra.github.io/libs/john-locke/js/vendors.min.js"); */

    var bodyFontFamily = "Roboto";

   /*  var urlArray = ["https://englishextra.github.io/libs/john-locke/css/bundle.min.css"]; */
   
    var urlArray = [];

    loadDeferred(urlArray, onFontReady.bind(null, bodyFontFamily, scripts, false));
})("undefined" !== typeof window ? window : this, document);