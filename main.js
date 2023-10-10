(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}function n(e,t){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.add(e)}function r(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}var o=new WeakSet,i=new WeakSet,a=function(){function e(t){var r=t.baseUrl,a=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,i),n(this,o),this.baseUrl=r,this.headers=a}var a,l;return a=e,(l=[{key:"getInitialCards",value:function(){return r(this,i,u).call(this,"".concat(this.baseUrl,"/cards"),{headers:this.headers})}},{key:"getUserProfile",value:function(){return r(this,i,u).call(this,"".concat(this.baseUrl,"/users/me"),{headers:this.headers})}},{key:"pushUserProfile",value:function(e,t){return r(this,i,u).call(this,"".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,about:t})})}},{key:"pushCard",value:function(e,t){return r(this,i,u).call(this,"".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e,link:t})})}},{key:"deleteCard",value:function(e){return r(this,i,u).call(this,"".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers})}},{key:"setLikeApi",value:function(e){return r(this,i,u).call(this,"".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers})}},{key:"delLikeApi",value:function(e){return r(this,i,u).call(this,"".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers})}},{key:"saveUserAvatar",value:function(e){return r(this,i,u).call(this,"".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})})}}])&&t(a.prototype,l),Object.defineProperty(a,"prototype",{writable:!1}),e}();function l(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}function u(e,t){return fetch(e,t).then(r(this,o,l))}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}function p(e,t){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.add(e)}function h(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}var y=new WeakSet,m=new WeakSet,d=new WeakSet,b=new WeakSet,v=new WeakSet,S=new WeakSet,w=function(){function e(t,n){var r,o=t.inputSelector,i=t.submitButtonSelector,a=t.inputErrorClass;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,S),p(this,v),p(this,b),p(this,d),p(this,m),p(this,y),this.form=n,this.inputs=function(e){if(Array.isArray(e))return s(e)}(r=this.form.querySelectorAll(o))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this.submitButton=this.form.querySelector(i),this.inputErrorClass=a}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this.form.addEventListener("submit",(function(e){return e.preventDefault()})),h(this,S,j).call(this)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){e.classList.add(this.inputErrorClass)}function E(e){e.classList.remove(this.inputErrorClass)}function k(){return this.inputs.every((function(e){return e.validity.valid}))}function _(){h(this,d,k).call(this)?this.submitButton.removeAttribute("disabled",""):this.submitButton.setAttribute("disabled","")}function O(e){e.validity.patternMismatch?(h(this,y,g).call(this,e),e.nextElementSibling.textContent=e.dataset.message):e.validity.valid?(h(this,m,E).call(this,e),e.nextElementSibling.textContent=""):(h(this,y,g).call(this,e),e.nextElementSibling.textContent=e.validationMessage)}function j(){var e=this;h(this,b,_).call(this,this.inputs,this.submitButton),this.form.addEventListener("reset",(function(){e.submitButton.setAttribute("disabled","")})),this.inputs.forEach((function(t){t.addEventListener("input",(function(t){h(e,v,O).call(e,t.target),h(e,b,_).call(e)}))}))}function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}var L=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.items=r,this.renderer=o,this.container=n}var t,n;return t=e,(n=[{key:"addItemPrepend",value:function(e){this.container.prepend(e)}},{key:"addItemAppend",value:function(e){this.container.append(e)}},{key:"render",value:function(e){var t=this;e.forEach((function(e){t.renderer(e)}))}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function A(e,t){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.add(e)}function q(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}var U=new WeakSet,R=new WeakSet,D=new WeakSet,x=new WeakSet,B=new WeakSet,W=new WeakSet,N=function(){function e(t,n,r){var o=t.elementName,i=t.elementLink,a=t.cardId,l=t.likes,u=t.isCardOwner,c=t.ownerId,s=t.userId,f=r.handleDeleteLike,p=r.handleAddLike,h=r.addZoom,y=r.handleDeleteCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),A(this,W),A(this,B),A(this,x),A(this,D),A(this,R),A(this,U),this.elementName=o,this.elementLink=i,this.cardId=a,this.likes=l,this.isCardOwner=u,this.ownerId=c,this.elementTemplate=n,this.userId=s,this.handleDeleteLike=f,this.handleAddLike=p,this.addZoom=h,this.handleDeleteCard=y}var t,n;return t=e,(n=[{key:"switchLikes",value:function(e){this.likes=e,q(this,x,H).call(this)}},{key:"getElement",value:function(){return this.cardElement=this.elementTemplate.querySelector(".element").cloneNode(!0),this.elementImage=this.cardElement.querySelector(".element__image"),this.elementImage.src=this.elementLink,this.elementImage.alt=this.elementName,this.elementHeader=this.cardElement.querySelector(".element__header"),this.elementHeader.textContent=this.elementName,this.likesCounter=this.cardElement.querySelector(".element__likes-counter"),this.likesCounter.textContent=this.likes.length,this.likeElement=this.cardElement.querySelector(".element__like"),this.deleteButton=this.cardElement.querySelector(".element__delete"),q(this,W,J).call(this),q(this,x,H).call(this),this.cardElement}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Z(){var e=this;return this.likes.some((function(t){return t._id===e.userId}))}function z(){this.likeElement.classList.add("element__like_active")}function M(){this.likeElement.classList.remove("element__like_active")}function H(){this.likesCounter.textContent=this.likes.length,q(this,U,Z).call(this)?q(this,R,z).call(this):q(this,D,M).call(this)}function V(){this.addZoom(this.elementName,this.elementLink)}function J(){var e=this;this.elementImage.addEventListener("click",(function(){q(e,B,V).call(e)})),this.likeElement.addEventListener("click",(function(){q(e,U,Z).call(e)?e.handleDeleteLike():e.handleAddLike()})),this.isCardOwner?this.deleteButton.addEventListener("click",(function(){e.handleDeleteCard()})):this.deleteButton.remove()}function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==$(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==$(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===$(o)?o:String(o)),r)}var o}var G=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popupElement=t,this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this),this.close=this.close.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this.popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose),this.setEventListeners()}},{key:"close",value:function(){this.popupElement.classList.remove("popup_opened"),this.removeEventListeners()}},{key:"setEventListeners",value:function(){this.popupElement.querySelector(".popup__close-icon").addEventListener("click",this.close),this.popupElement.addEventListener("mousedown",this._handleOverlayClose)}},{key:"removeEventListeners",value:function(){this.popupElement.querySelector(".popup__close-icon").removeEventListener("click",this.close),this.popupElement.removeEventListener("mousedown",this._handleOverlayClose),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target===this.popupElement&&this.close()}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==K(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===K(o)?o:String(o)),r)}var o}function Y(){return Y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ne(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},Y.apply(this,arguments)}function ee(e,t){return ee=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ee(e,t)}function te(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ne(e){return ne=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ne(e)}var re=new WeakSet,oe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ee(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ne(r);if(o){var n=ne(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===K(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return te(e)}(this,e)});function a(e,t,n){var r,o,l,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(l=te(r=i.call(this,e)),u=re),u.add(l),r.form=r.popupElement.querySelector(t.formSelector),r.inputs=function(e){if(Array.isArray(e))return Q(e)}(o=r.form.querySelectorAll(t.inputSelector))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r.handler=n.bind(te(r)),r.handlerSubmit=r.handlerSubmit.bind(te(r)),r}return t=a,(n=[{key:"close",value:function(){Y(ne(a.prototype),"close",this).call(this),this.form.reset(),this.form.removeEventListener("submit",this.handlerSubmit)}},{key:"setEventListeners",value:function(){Y(ne(a.prototype),"setEventListeners",this).call(this),this.form.addEventListener("submit",this.handlerSubmit)}},{key:"handlerSubmit",value:function(e){e.preventDefault(),this.handler(function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}(this,re,ie).call(this))}}])&&X(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(G);function ie(){var e={};return this.inputs.forEach((function(t){e[t.name]=t.value})),e}function ae(e){return ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ae(e)}function le(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==ae(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==ae(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===ae(o)?o:String(o)),r)}var o}function ue(){return ue="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=se(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},ue.apply(this,arguments)}function ce(e,t){return ce=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ce(e,t)}function se(e){return se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},se(e)}var fe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ce(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=se(r);if(o){var n=se(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===ae(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).imageZoom=t.popupElement.querySelector(".popup__image"),t.imageTitle=t.popupElement.querySelector(".popup__image-title"),t}return t=a,(n=[{key:"open",value:function(e,t){ue(se(a.prototype),"open",this).call(this),this.imageZoom.src=t,this.imageZoom.alt=e,this.imageTitle.textContent=e}}])&&le(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(G);function pe(e){return pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pe(e)}function he(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==pe(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==pe(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===pe(o)?o:String(o)),r)}var o}var ye=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.userName=t,this.userInformation=n,this.userAvatar=document.querySelector(".profile__avatar-img"),this.userId}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this.userName.textContent,about:this.userInformation.textContent,id:this.userId,avatar:this.userAvatar.src}}},{key:"setUserInfo",value:function(e,t,n){this.userName.textContent=e,this.userInformation.textContent=t,this.userId=n}},{key:"setUserAvatar",value:function(e){this.userAvatar.src=e}}])&&he(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),me=document.querySelector("#element").content,de=document.querySelector(".elements"),be=document.querySelector(".popup-profile-edit"),ve=document.querySelector(".popup-avatar-add"),Se=document.querySelector(".popup-gallery-add"),we=document.querySelector(".popup_type_image"),ge=document.querySelector(".popup-card-delete"),Ee=document.forms["gallery-add"],ke=(document.forms["card-delete"],document.forms["avatar-add"]),_e=document.forms["profile-edit"],Oe=document.querySelector(".profile__button"),je=document.querySelector(".profile__button-edit"),Pe=_e.querySelector('input[name="popup__name"]'),Ce=_e.querySelector('input[name="popup__job"]'),Le=ke.querySelector('input[name="popup__avatar"]'),Ie=Ee.querySelector('input[name="popup__title"]'),Te=(Ee.querySelector('input[name="popup__url"]'),document.querySelector(".profile__name")),Ae=document.querySelector(".profile__information"),qe=document.querySelector(".profile__avatar-edit"),Ue={formSelector:".popup__form",inputSelector:".popup__information",submitButtonSelector:".popup__submit",inputErrorClass:"popup__information_type_error"};function Re(e){return Re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Re(e)}function De(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==Re(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==Re(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===Re(o)?o:String(o)),r)}var o}function xe(){return xe="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Ne(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},xe.apply(this,arguments)}function Be(e,t){return Be=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Be(e,t)}function We(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ne(e){return Ne=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Ne(e)}var Ze=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Be(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Ne(r);if(o){var n=Ne(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===Re(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return We(e)}(this,e)});function a(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e)).form=r.popupElement.querySelector(t.formSelector),r.handler=n.bind(We(r)),r.handleDelSubmit=r.handleDelSubmit.bind(We(r)),r}return t=a,(n=[{key:"setItemForDelete",value:function(e){this.item=e}},{key:"handleDelSubmit",value:function(e){e.preventDefault(),this.handler(this.item)}},{key:"open",value:function(){xe(Ne(a.prototype),"open",this).call(this),this.form.addEventListener("submit",this.handleDelSubmit)}},{key:"close",value:function(){xe(Ne(a.prototype),"close",this).call(this),this.form.removeEventListener("submit",this.handleDelSubmit)}}])&&De(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(G);function ze(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Me=new a({baseUrl:"https://nomoreparties.co/v1/plus-cohort-28",headers:{authorization:"0ad49ebc-d439-4122-a1bb-b1c1bfd063b4","Content-Type":"application/json"}}),He=new ye(Te,Ae),Ve=new oe(be,Ue,(function(e){var t=e.popup__name,n=e.popup__job,r=rt(Pe);nt(!0,r),Me.pushUserProfile(t,n).then((function(e){var t=e.name,n=e.about,r=e._id;He.setUserInfo(t,n,r),Ve.close()})).catch((function(e){console.log(e)})).finally((function(){nt(!1,r)}))})),Je=new oe(ve,Ue,(function(e){var t=e.popup__avatar,n=rt(Le);nt(!0,n),Me.saveUserAvatar(t).then((function(e){var t=e.avatar;He.setUserAvatar(t),Je.close()})).catch((function(e){console.log(e)})).finally((function(){nt(!1,n)}))})),$e=new oe(Se,Ue,(function(e){var t=e.popup__title,n=e.popup__url,r=rt(Ie);nt(!0,r),Me.pushCard(t,n).then((function(e){et.addItemPrepend(Ye(e).getElement())})).then((function(){$e.close()})).catch((function(e){console.log(e)})).finally((function(){nt(!1,r)}))})),Fe=new Ze(ge,Ue,(function(e){Me.deleteCard(e.cardId).then((function(){e.cardElement.remove(),Fe.close()})).catch((function(e){console.log(e)}))})),Ge=new fe(we),Ke=new w(Ue,_e),Qe=new w(Ue,ke),Xe=new w(Ue,Ee);function Ye(e){var t=new N({elementName:e.name,elementLink:e.link,cardId:e._id,likes:e.likes,isCardOwner:e.owner._id===He.userId,ownerId:e.owner._id,userId:He.getUserInfo().id},me,{handleDeleteLike:function(){Me.delLikeApi(t.cardId).then((function(e){t.switchLikes(e.likes)})).catch((function(e){console.log(e)}))},handleAddLike:function(){Me.setLikeApi(t.cardId).then((function(e){t.switchLikes(e.likes)})).catch((function(e){console.log(e)}))},addZoom:tt,handleDeleteCard:function(){Fe.setItemForDelete(t),Fe.open()}});return t}Ke.enableValidation(),Qe.enableValidation(),Xe.enableValidation();var et=new L({renderer:function(e){var t=Ye(e);et.addItemAppend(t.getElement())}},de);function tt(e,t){Ge.open(e,t)}function nt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранить";t.textContent=e?"Сохранение...":n}function rt(e){return e.closest("form").querySelector(Ue.submitButtonSelector)}je.addEventListener("click",(function(){Ve.open();var e=He.getUserInfo();Pe.value=e.name,Ce.value=e.about})),Oe.addEventListener("click",(function(){$e.open()})),qe.addEventListener("click",(function(){Je.open()})),Promise.all([Me.getUserProfile(),Me.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return ze(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ze(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];He.setUserInfo(o.name,o.about,o._id),He.setUserAvatar(o.avatar),et.render(i)})).catch((function(e){console.log(e)}))})();