/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function n(t,e){t.classList.add(e.inputErrorClass)}t.d({},{b:()=>$});var o=function(t){return t.every((function(t){return t.validity.valid}))};function i(t,e){o(t)?e.removeAttribute("disabled",""):e.setAttribute("disabled","")}var a={baseUrl:"https://nomoreparties.co/v1/plus-cohort-28",headers:{authorization:"0ad49ebc-d439-4122-a1bb-b1c1bfd063b4","Content-Type":"application/json"}},c=function(){return fetch("".concat(a.baseUrl,"/cards"),{headers:a.headers})},u=function(t){return fetch("".concat(a.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:a.headers})},l=function(t){return fetch("".concat(a.baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:a.headers})},s=function(t){return fetch("".concat(a.baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:a.headers})},f=document.forms["profile-edit"],p=f.querySelector('input[name="popup__name"]'),d=f.querySelector('input[name="popup__job"]'),h=document.querySelector(".popup-profile-edit"),m=document.querySelector(".profile__name"),y=document.querySelector(".profile__information"),v=document.forms["avatar-add"],g=v.querySelector('input[name="popup__avatar"]'),_=document.querySelector(".profile__avatar-img"),b=document.querySelector(".profile__avatar-edit"),S=document.querySelector(".popup-avatar-add");var w=document.querySelector(".popup-gallery-add"),x=document.querySelector(".profile__button"),E=document.querySelector(".profile__button-edit");function L(t){t.classList.add("popup_opened"),document.addEventListener("keydown",j),t.addEventListener("mousedown",k)}function q(t){t.classList.remove("popup_opened"),document.removeEventListener("keydown",j),t.removeEventListener("mousedown",k)}function j(t){"Escape"===t.key&&q(document.querySelector(".popup_opened"))}function k(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-icon"))&&q(t.currentTarget)}function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function O(){O=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new L(o||[]);return n(a,"_invoke",{value:S(t,r,c)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function p(){}function d(){}function h(){}var m={};u(m,i,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(q([])));v&&v!==e&&r.call(v,i)&&(m=v);var g=h.prototype=p.prototype=Object.create(m);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,i,a,c){var u=s(t[n],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==C(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=w(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function w(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function q(t){if(t||""===t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}throw new TypeError(C(t)+" is not iterable")}return d.prototype=h,n(g,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:d,configurable:!0}),d.displayName=u(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},_(b.prototype),u(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(g),u(g,c,"Generator"),u(g,i,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=q,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:q(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function P(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var A=document.querySelector(".popup_type_image"),T=document.querySelector(".popup__image"),N=document.querySelector(".popup__image-title"),U=document.querySelector("#element").content,I=document.querySelector(".elements"),G=document.forms["gallery-add"],D=G.querySelector('input[name="popup__title"]'),F=G.querySelector('input[name="popup__url"]'),M=document.querySelector(".popup-card-delete");function J(t,e,r,n,o,i){var a=function(t,e,r,n,o,i){var a=U.querySelector(".element").cloneNode(!0),c=a.querySelector(".element__image");c.src=e,c.alt=t,a.querySelector(".element__header").textContent=t;var f=a.querySelector(".element__like"),p=a.querySelector(".element__likes-counter");p.textContent=n.length,n.find((function(t){return t._id===i}))&&f.classList.add("element__like_active"),f.addEventListener("click",(function(){f.classList.contains("element__like_active")?s(r).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).then((function(t){f.classList.remove("element__like_active"),p.textContent=t.likes.length})).catch((function(t){console.log(t)})):l(r).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).then((function(t){f.classList.add("element__like_active"),p.textContent=t.likes.length})).catch((function(t){console.log(t)}))}));var d=a.querySelector(".element__delete");return o?d.addEventListener("click",(function(){L(M),document.forms["card-delete"].addEventListener("submit",(function(t){t.preventDefault(),t.target.querySelector(".popup__submit").textContent="Удаление...",function(t,e,r,n){u(e).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).then((function(){t.remove(),q(r),n.target.querySelector(".popup__submit").textContent="Да"})).catch((function(t){n.target.querySelector(".popup__submit").textContent="Ошибка удаления",console.log(t)}))}(a,r,M,t)}))})):d.remove(),c.addEventListener("click",(function(r){!function(t,e,r,n,o){L(t),e.src=n,e.alt=o,r.textContent=o}(A,T,N,e,t)})),a}(t,e,r,n,o,i);I.prepend(a)}function B(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return H(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Y,$={userName:"",userId:""};f.addEventListener("submit",(function(t){var e,r;t.preventDefault(),t.target.querySelector(".popup__submit").textContent="Сохранение...",(e=p.value,r=d.value,fetch("".concat(a.baseUrl,"/users/me"),{method:"PATCH",headers:a.headers,body:JSON.stringify({name:e,about:r})})).then((function(e){return e.ok?(m.textContent=p.value,y.textContent=d.value,_.alt="Фото профиля ".concat(p.value),t.target.querySelector(".popup__submit").textContent="Сохранить",e.json()):Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){t.target.querySelector(".popup__submit").textContent="Ошибка",console.log(e)})),q(h)})),v.addEventListener("submit",(function(t){var e;t.preventDefault(),t.target.querySelector(".popup__submit").textContent="Сохранение...",(e=g.value,fetch("".concat(a.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:a.headers,body:JSON.stringify({avatar:e})})).then((function(e){return e.ok?(_.src=g.value,t.target.querySelector(".popup__submit").textContent="Сохранить",e.json()):Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){t.target.querySelector(".popup__submit").textContent="Ошибка добавления",console.log(e)})),v.reset(),q(S)})),function(t){E.addEventListener("click",(function(){L(t)}))}(h),function(t){x.addEventListener("click",(function(){L(t)}))}(w),function(t){b.addEventListener("click",(function(){L(t)}))}(S),G.addEventListener("submit",(function(t){var e,r;t.preventDefault(),console.log(t.target.querySelector(".popup__submit").textContent),t.target.querySelector(".popup__submit").textContent="Создание...",(e=D.value,r=F.value,fetch("".concat(a.baseUrl,"/cards"),{method:"POST",headers:a.headers,body:JSON.stringify({name:e,link:r})})).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).then((function(){for(;I.firstChild;)I.removeChild(I.firstChild);c().then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).then((function(t){var e;(e=O().mark((function e(){return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.forEach((function(t){J(t.name,t.link,t._id,t.likes,t.owner._id===$.userId,t.owner._id)}));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(t){P(i,n,o,a,c,"next",t)}function c(t){P(i,n,o,a,c,"throw",t)}a(void 0)}))})()})).then((function(){q(w),G.reset(),t.target.querySelector(".popup__submit").textContent="Создать"})).catch((function(e){t.target.querySelector(".popup__submit").textContent="Ошибка",console.log(e)}))})).catch((function(e){t.target.querySelector(".popup__submit").textContent="Ошибка",console.log(e)}))})),Y={formSelector:".popup__form",inputSelector:".popup__information",submitButtonSelector:".popup__submit",inputErrorClass:"popup__information_type_error"},e(document.querySelectorAll(Y.formSelector)).forEach((function(t){!function(t,r){var o=e(t.querySelectorAll(r.inputSelector)),a=t.querySelector(r.submitButtonSelector);i(o,a),t.addEventListener("reset",(function(){a.setAttribute("disabled","")})),o.forEach((function(t){t.addEventListener("input",(function(t){!function(t,e){t.validity.patternMismatch?(n(t,e),t.nextElementSibling.textContent=t.dataset.message):t.validity.valid?(function(t,e){t.classList.remove(e.inputErrorClass)}(t,e),t.nextElementSibling.textContent=""):(n(t,e),t.nextElementSibling.textContent=t.validationMessage)}(t.target,r),i(o,a)}))}))}(t,Y)})),Promise.all([fetch("".concat(a.baseUrl,"/users/me"),{headers:a.headers}),c()]).then((function(t){var e=B(t,2),r=e[0],n=e[1];return r.ok&&n.ok?Promise.all([r.json(),n.json()]):Promise.reject("Ошибка. Профиль: ".concat(r.status,", Карточки ").concat(n.status))})).then((function(t){var e,r,n,o=B(t,2),i=o[0],a=o[1];e=i.name,r=i.about,n=i.avatar,_.src=n,m.textContent=e,y.textContent=r,_.alt="Фото профиля ".concat(e),function(t,e){p.value=t,d.value=e}(i.name,i.about),a.forEach((function(t){J(t.name,t.link,t._id,t.likes,t.owner._id===i._id,t.owner._id)}))})).catch((function(t){console.log(t)}))})();