!function(){function e(t,i,n){function s(l,r){if(!i[l]){if(!t[l]){var a="function"==typeof require&&require;if(!r&&a)return a(l,!0);if(o)return o(l,!0);var u=new Error("Cannot find module '"+l+"'");throw u.code="MODULE_NOT_FOUND",u}var d=i[l]={exports:{}};t[l][0].call(d.exports,function(e){var i=t[l][1][e];return s(i||e)},d,d.exports,e,t,i,n)}return i[l].exports}for(var o="function"==typeof require&&require,l=0;l<n.length;l++)s(n[l]);return s}return e}()({1:[function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(i,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return"undefined"==typeof e?"undefined":o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":"undefined"==typeof e?"undefined":o(e)},r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=e("./util/dom"),u=e("./util/throwIfMissing"),d=n(u),c=37,h=39,g="undefined"!=typeof document&&"animation"in document.createElement("div").style,p=function(){function e(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,e),this._sizeImgWrapperEl=function(){var e=t.imgWrapperEl.style;e.width=t.innerEl.clientWidth+"px",e.maxWidth=t.innerEl.clientWidth+"px",e.height=t.innerEl.clientHeight-t.captionEl.clientHeight+"px",e.maxHeight=t.innerEl.clientHeight-t.captionEl.clientHeight+"px"},this._handleKeydown=function(e){e.keyCode==c?t.showPrevious():e.keyCode==h&&t.showNext()},this.showNext=function(){t.settings._gallery&&(t.currentTrigger=t.settings._gallery.nextTrigger(t.currentTrigger),t._updateImgSrc(),t._updateCaption(),t._sizeImgWrapperEl())},this.showPrevious=function(){t.settings._gallery&&(t.currentTrigger=t.settings._gallery.previousTrigger(t.currentTrigger),t._updateImgSrc(),t._updateCaption(),t._sizeImgWrapperEl())},this._completeOpen=function(){t.el.removeEventListener("animationend",t._completeOpen,!1),(0,a.removeClasses)(t.el,t.openingClasses)},this._completeClose=function(){t.el.removeEventListener("animationend",t._completeClose,!1),(0,a.removeClasses)(t.el,t.openClasses),(0,a.removeClasses)(t.el,t.closingClasses)};var n=i.namespace,o=void 0===n?null:n,l=i.parentEl,r=void 0===l?(0,d["default"])():l,u=i.triggerEl,g=void 0===u?(0,d["default"])():u,p=i.sourceAttribute,f=void 0===p?(0,d["default"])():p,m=i.caption,v=void 0===m?null:m,y=i.includeImgixJSClass,b=void 0!==y&&y,E=i._gallery,_=void 0===E?null:E,C=i._arrowNavigation,w=void 0===C?null:C;if(this.settings={namespace:o,parentEl:r,triggerEl:g,sourceAttribute:f,caption:v,includeImgixJSClass:b,_gallery:_,_arrowNavigation:w},!(0,a.isDOMElement)(this.settings.parentEl))throw new TypeError("`new Lightbox` requires a DOM element passed as `parentEl`.");this.currentTrigger=this.settings.triggerEl,this.openClasses=this._buildClasses("open"),this.openingClasses=this._buildClasses("opening"),this.closingClasses=this._buildClasses("closing"),this.hasBeenLoaded=!1,this.elementBuilt=!1}return r(e,[{key:"_buildClasses",value:function(e){var t=["lum-"+e],i=this.settings.namespace;return i&&t.push(i+"-"+e),t}},{key:"_buildElement",value:function(){this.el=document.createElement("div"),(0,a.addClasses)(this.el,this._buildClasses("lightbox")),this.innerEl=document.createElement("div"),(0,a.addClasses)(this.innerEl,this._buildClasses("lightbox-inner")),this.el.appendChild(this.innerEl);var e=document.createElement("div");(0,a.addClasses)(e,this._buildClasses("lightbox-loader")),this.innerEl.appendChild(e),this.imgWrapperEl=document.createElement("div"),(0,a.addClasses)(this.imgWrapperEl,this._buildClasses("lightbox-image-wrapper")),this.innerEl.appendChild(this.imgWrapperEl);var t=document.createElement("span");(0,a.addClasses)(t,this._buildClasses("lightbox-position-helper")),this.imgWrapperEl.appendChild(t),this.imgEl=document.createElement("img"),(0,a.addClasses)(this.imgEl,this._buildClasses("img")),t.appendChild(this.imgEl),this.captionEl=document.createElement("p"),(0,a.addClasses)(this.captionEl,this._buildClasses("lightbox-caption")),t.appendChild(this.captionEl),this.settings._gallery&&this._setUpGalleryElements(),this.settings.parentEl.appendChild(this.el),this._updateImgSrc(),this._updateCaption(),this.settings.includeImgixJSClass&&this.imgEl.classList.add("imgix-fluid")}},{key:"_setUpGalleryElements",value:function(){this._buildGalleryButton("previous",this.showPrevious),this._buildGalleryButton("next",this.showNext)}},{key:"_buildGalleryButton",value:function(e,t){var i=document.createElement("button");this[e+"Button"]=i,i.innerText=e,(0,a.addClasses)(i,this._buildClasses(e+"-button")),(0,a.addClasses)(i,this._buildClasses("gallery-button")),this.innerEl.appendChild(i),i.addEventListener("click",function(e){e.stopPropagation(),t()},!1)}},{key:"_updateCaption",value:function(){var e=l(this.settings.caption),t="";"string"===e?t=this.settings.caption:"function"===e&&(t=this.settings.caption(this.currentTrigger)),this.captionEl.innerHTML=t}},{key:"_updateImgSrc",value:function(){var e=this,t=this.currentTrigger.getAttribute(this.settings.sourceAttribute);if(!t)throw new Error("No image URL was found in the "+this.settings.sourceAttribute+" attribute of the trigger.");var i=this._buildClasses("loading");this.hasBeenLoaded||(0,a.addClasses)(this.el,i),this.imgEl.onload=function(){(0,a.removeClasses)(e.el,i),e.hasBeenLoaded=!0},this.imgEl.setAttribute("src",t)}},{key:"open",value:function(){this.elementBuilt||(this._buildElement(),this.elementBuilt=!0),this.currentTrigger=this.settings.triggerEl,this._updateImgSrc(),this._updateCaption(),(0,a.addClasses)(this.el,this.openClasses),this._sizeImgWrapperEl(),window.addEventListener("resize",this._sizeImgWrapperEl,!1),this.settings._arrowNavigation&&window.addEventListener("keydown",this._handleKeydown,!1),g&&(this.el.addEventListener("animationend",this._completeOpen,!1),(0,a.addClasses)(this.el,this.openingClasses))}},{key:"close",value:function(){window.removeEventListener("resize",this._sizeImgWrapperEl,!1),this.settings._arrowNavigation&&window.removeEventListener("keydown",this._handleKeydown,!1),g?(this.el.addEventListener("animationend",this._completeClose,!1),(0,a.addClasses)(this.el,this.closingClasses)):(0,a.removeClasses)(this.el,this.openClasses)}},{key:"destroy",value:function(){this.el&&this.settings.parentEl.removeChild(this.el)}}]),e}();i["default"]=p},{"./util/dom":6,"./util/throwIfMissing":7}],2:[function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o,l,r,a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),u=e("./util/dom"),d=e("./injectBaseStylesheet"),c=n(d),h=e("./Lightbox"),g=n(h);t.exports=(l=o=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s(this,e),r.call(this),this.isOpen=!1,this.trigger=t,!(0,u.isDOMElement)(this.trigger))throw new TypeError("`new Luminous` requires a DOM element as its first argument.");var n=i.namespace,o=void 0===n?null:n,l=i.sourceAttribute,a=void 0===l?"href":l,d=i.caption,h=void 0===d?null:d,g=i.openTrigger,p=void 0===g?"click":g,f=i.closeTrigger,m=void 0===f?"click":f,v=i.closeWithEscape,y=void 0===v||v,b=i.closeOnScroll,E=void 0!==b&&b,_=i.appendToSelector,C=void 0===_?"body":_,w=i.onOpen,x=void 0===w?null:w,S=i.onClose,L=void 0===S?null:S,O=i.includeImgixJSClass,T=void 0!==O&&O,k=i.injectBaseStyles,I=void 0===k||k,M=i._gallery,N=void 0===M?null:M,W=i._arrowNavigation,B=void 0===W?null:W;this.settings={namespace:o,sourceAttribute:a,caption:h,openTrigger:p,closeTrigger:m,closeWithEscape:y,closeOnScroll:E,appendToSelector:C,onOpen:x,onClose:L,includeImgixJSClass:T,injectBaseStyles:I,_gallery:N,_arrowNavigation:B},this.settings.injectBaseStyles&&(0,c["default"])(),this._buildLightbox(),this._bindEvents()}return a(e,[{key:"_buildLightbox",value:function(){this.lightbox=new g["default"]({namespace:this.settings.namespace,parentEl:document.querySelector(this.settings.appendToSelector),triggerEl:this.trigger,sourceAttribute:this.settings.sourceAttribute,caption:this.settings.caption,includeImgixJSClass:this.settings.includeImgixJSClass,_gallery:this.settings._gallery,_arrowNavigation:this.settings._arrowNavigation})}},{key:"_bindEvents",value:function(){this.trigger.addEventListener(this.settings.openTrigger,this.open,!1),this.settings.closeWithEscape&&window.addEventListener("keyup",this._handleKeyup,!1)}},{key:"_bindCloseEvent",value:function(){this.lightbox.el.addEventListener(this.settings.closeTrigger,this.close,!1)}},{key:"_unbindEvents",value:function(){this.trigger.removeEventListener(this.settings.openTrigger,this.open,!1),this.lightbox.el&&this.lightbox.el.removeEventListener(this.settings.closeTrigger,this.close,!1),this.settings.closeWithEscape&&window.removeEventListener("keyup",this._handleKeyup,!1)}}]),e}(),r=function(){var e=this;this.VERSION="2.0.0",this.open=function(t){t&&"function"==typeof t.preventDefault&&t.preventDefault();var i=e.lightbox.elementBuilt;e.lightbox.open(),i||e._bindCloseEvent(),e.settings.closeOnScroll&&window.addEventListener("scroll",e.close,!1);var n=e.settings.onOpen;n&&"function"==typeof n&&n(),e.isOpen=!0},this.close=function(t){t&&"function"==typeof t.preventDefault&&t.preventDefault(),e.settings.closeOnScroll&&window.removeEventListener("scroll",e.close,!1),e.lightbox.close();var i=e.settings.onClose;i&&"function"==typeof i&&i(),e.isOpen=!1},this._handleKeyup=function(t){e.isOpen&&27===t.keyCode&&e.close()},this.destroy=function(){e._unbindEvents(),e.lightbox.destroy()}},l)},{"./Lightbox":1,"./injectBaseStylesheet":4,"./util/dom":6}],3:[function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=(e("./util/dom"),e("./Luminous")),r=n(l),a=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};s(this,e),this.boundMethod=function(){};var o=i.arrowNavigation,l=void 0===o||o;this.settings={arrowNavigation:l},this.triggers=t,this.luminousOpts=n,this.luminousOpts._gallery=this,this.luminousOpts._arrowNavigation=this.settings.arrowNavigation,this._constructLuminousInstances()}return o(e,[{key:"_constructLuminousInstances",value:function(){this.luminousInstances=[];for(var e=this.triggers.length,t=0;t<e;t++){var i=this.triggers[t],n=new r["default"](i,this.luminousOpts);this.luminousInstances.push(n)}}},{key:"nextTrigger",value:function(e){var t=Array.prototype.indexOf.call(this.triggers,e)+1;return t>=this.triggers.length?this.triggers[0]:this.triggers[t]}},{key:"previousTrigger",value:function(e){var t=Array.prototype.indexOf.call(this.triggers,e)-1;return t<0?this.triggers[this.triggers.length-1]:this.triggers[t]}},{key:"destroy",value:function(){}}]),e}();i["default"]=a},{"./Luminous":2,"./util/dom":6}],4:[function(e,t,i){"use strict";function n(){if(!document.querySelector(".lum-base-styles")){var e=document.createElement("style");e.type="text/css",e.classList.add("lum-base-styles"),e.appendChild(document.createTextNode(s));var t=document.head;t.insertBefore(e,t.firstChild)}}Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=n;var s="\n@keyframes lum-noop {\n  0% { zoom: 1; }\n}\n\n.lum-lightbox {\n  position: fixed;\n  display: none;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.lum-lightbox.lum-open {\n  display: block;\n}\n\n.lum-lightbox.lum-opening, .lum-lightbox.lum-closing {\n  animation: lum-noop 1ms;\n}\n\n.lum-lightbox-inner {\n  position: absolute;\n  top: 0%;\n  right: 0%;\n  bottom: 0%;\n  left: 0%;\n\n  overflow: hidden;\n}\n\n.lum-lightbox-loader {\n  display: none;\n}\n\n.lum-lightbox-inner img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.lum-lightbox-image-wrapper {\n  vertical-align: middle;\n  display: table-cell;\n  text-align: center;\n}\n"},{}],5:[function(e,t,i){(function(t){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var n=e("./Luminous"),s=i(n),o=e("./LuminousGallery"),l=i(o);t.Luminous=s["default"],t.LuminousGallery=l["default"]}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./Luminous":2,"./LuminousGallery":3}],6:[function(e,t,i){"use strict";function n(e){return a?e instanceof HTMLElement:e&&"object"===("undefined"==typeof e?"undefined":r(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}function s(e,t){t.forEach(function(t){e.classList.add(t)})}function o(e,t){t.forEach(function(t){e.classList.remove(t)})}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(i,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"===l(Symbol.iterator)?function(e){return"undefined"==typeof e?"undefined":l(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":"undefined"==typeof e?"undefined":l(e)};i.isDOMElement=n,i.addClasses=s,i.removeClasses=o;var a="object"===("undefined"==typeof HTMLElement?"undefined":r(HTMLElement))},{}],7:[function(e,t,i){"use strict";function n(){throw new Error("Missing parameter")}Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=n},{}]},{},[5]);



(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _dom = require("./util/dom");

var _throwIfMissing = require("./util/throwIfMissing");

var _throwIfMissing2 = _interopRequireDefault(_throwIfMissing);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;

// All officially-supported browsers have this, but it's easy to
// account for, just in case.
var HAS_ANIMATION = typeof document === "undefined" ? false : "animation" in document.createElement("div").style;

var Lightbox = function () {
  function Lightbox() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Lightbox);

    this._sizeImgWrapperEl = function () {
      var style = _this.imgWrapperEl.style;
      style.width = _this.innerEl.clientWidth + "px";
      style.maxWidth = _this.innerEl.clientWidth + "px";
      style.height = _this.innerEl.clientHeight - _this.captionEl.clientHeight + "px";
      style.maxHeight = _this.innerEl.clientHeight - _this.captionEl.clientHeight + "px";
    };

    this._handleKeydown = function (e) {
      if (e.keyCode == LEFT_ARROW) {
        _this.showPrevious();
      } else if (e.keyCode == RIGHT_ARROW) {
        _this.showNext();
      }
    };

    this.showNext = function () {
      if (!_this.settings._gallery) {
        return;
      }

      _this.currentTrigger = _this.settings._gallery.nextTrigger(_this.currentTrigger);
      _this._updateImgSrc();
      _this._updateCaption();
      _this._sizeImgWrapperEl();
    };

    this.showPrevious = function () {
      if (!_this.settings._gallery) {
        return;
      }

      _this.currentTrigger = _this.settings._gallery.previousTrigger(_this.currentTrigger);
      _this._updateImgSrc();
      _this._updateCaption();
      _this._sizeImgWrapperEl();
    };

    this._completeOpen = function () {
      _this.el.removeEventListener("animationend", _this._completeOpen, false);

      (0, _dom.removeClasses)(_this.el, _this.openingClasses);
    };

    this._completeClose = function () {
      _this.el.removeEventListener("animationend", _this._completeClose, false);

      (0, _dom.removeClasses)(_this.el, _this.openClasses);
      (0, _dom.removeClasses)(_this.el, _this.closingClasses);
    };

    var _options$namespace = options.namespace,
        namespace = _options$namespace === undefined ? null : _options$namespace,
        _options$parentEl = options.parentEl,
        parentEl = _options$parentEl === undefined ? (0, _throwIfMissing2.default)() : _options$parentEl,
        _options$triggerEl = options.triggerEl,
        triggerEl = _options$triggerEl === undefined ? (0, _throwIfMissing2.default)() : _options$triggerEl,
        _options$sourceAttrib = options.sourceAttribute,
        sourceAttribute = _options$sourceAttrib === undefined ? (0, _throwIfMissing2.default)() : _options$sourceAttrib,
        _options$caption = options.caption,
        caption = _options$caption === undefined ? null : _options$caption,
        _options$includeImgix = options.includeImgixJSClass,
        includeImgixJSClass = _options$includeImgix === undefined ? false : _options$includeImgix,
        _options$_gallery = options._gallery,
        _gallery = _options$_gallery === undefined ? null : _options$_gallery,
        _options$_arrowNaviga = options._arrowNavigation,
        _arrowNavigation = _options$_arrowNaviga === undefined ? null : _options$_arrowNaviga;

    this.settings = {
      namespace: namespace,
      parentEl: parentEl,
      triggerEl: triggerEl,
      sourceAttribute: sourceAttribute,
      caption: caption,
      includeImgixJSClass: includeImgixJSClass,
      _gallery: _gallery,
      _arrowNavigation: _arrowNavigation
    };

    if (!(0, _dom.isDOMElement)(this.settings.parentEl)) {
      throw new TypeError("`new Lightbox` requires a DOM element passed as `parentEl`.");
    }

    this.currentTrigger = this.settings.triggerEl;

    this.openClasses = this._buildClasses("open");
    this.openingClasses = this._buildClasses("opening");
    this.closingClasses = this._buildClasses("closing");

    this.hasBeenLoaded = false;
    this.elementBuilt = false;
  }

  _createClass(Lightbox, [{
    key: "_buildClasses",
    value: function _buildClasses(suffix) {
      var classes = ["lum-" + suffix];

      var ns = this.settings.namespace;
      if (ns) {
        classes.push(ns + "-" + suffix);
      }

      return classes;
    }
  }, {
    key: "_buildElement",
    value: function _buildElement() {
      this.el = document.createElement("div");
      (0, _dom.addClasses)(this.el, this._buildClasses("lightbox"));

      this.innerEl = document.createElement("div");
      (0, _dom.addClasses)(this.innerEl, this._buildClasses("lightbox-inner"));
      this.el.appendChild(this.innerEl);

      var loaderEl = document.createElement("div");
      (0, _dom.addClasses)(loaderEl, this._buildClasses("lightbox-loader"));
      this.innerEl.appendChild(loaderEl);

      this.imgWrapperEl = document.createElement("div");
      (0, _dom.addClasses)(this.imgWrapperEl, this._buildClasses("lightbox-image-wrapper"));
      this.innerEl.appendChild(this.imgWrapperEl);

      var positionHelperEl = document.createElement("span");
      (0, _dom.addClasses)(positionHelperEl, this._buildClasses("lightbox-position-helper"));
      this.imgWrapperEl.appendChild(positionHelperEl);

      this.imgEl = document.createElement("img");
      (0, _dom.addClasses)(this.imgEl, this._buildClasses("img"));
      positionHelperEl.appendChild(this.imgEl);

      this.captionEl = document.createElement("p");
      (0, _dom.addClasses)(this.captionEl, this._buildClasses("lightbox-caption"));
      positionHelperEl.appendChild(this.captionEl);

      if (this.settings._gallery) {
        this._setUpGalleryElements();
      }

      this.settings.parentEl.appendChild(this.el);

      this._updateImgSrc();
      this._updateCaption();

      if (this.settings.includeImgixJSClass) {
        this.imgEl.classList.add("imgix-fluid");
      }
    }
  }, {
    key: "_setUpGalleryElements",
    value: function _setUpGalleryElements() {
      this._buildGalleryButton("previous", this.showPrevious);
      this._buildGalleryButton("next", this.showNext);
    }
  }, {
    key: "_buildGalleryButton",
    value: function _buildGalleryButton(name, fn) {
      var btn = document.createElement("button");
      this[name + "Button"] = btn;

      btn.innerText = name;
      (0, _dom.addClasses)(btn, this._buildClasses(name + "-button"));
      (0, _dom.addClasses)(btn, this._buildClasses("gallery-button"));
      this.innerEl.appendChild(btn);

      btn.addEventListener("click", function (e) {
        e.stopPropagation();

        fn();
      }, false);
    }
  }, {
    key: "_updateCaption",
    value: function _updateCaption() {
      var captionType = _typeof(this.settings.caption);
      var caption = "";

      if (captionType === "string") {
        caption = this.settings.caption;
      } else if (captionType === "function") {
        caption = this.settings.caption(this.currentTrigger);
      }

      this.captionEl.innerHTML = caption;
    }
  }, {
    key: "_updateImgSrc",
    value: function _updateImgSrc() {
      var _this2 = this;

      var imageURL = this.currentTrigger.getAttribute(this.settings.sourceAttribute);

      if (!imageURL) {
        throw new Error("No image URL was found in the " + this.settings.sourceAttribute + " attribute of the trigger.");
      }

      var loadingClasses = this._buildClasses("loading");

      if (!this.hasBeenLoaded) {
        (0, _dom.addClasses)(this.el, loadingClasses);
      }

      this.imgEl.onload = function () {
        (0, _dom.removeClasses)(_this2.el, loadingClasses);
        _this2.hasBeenLoaded = true;
      };

      this.imgEl.setAttribute("src", imageURL);
    }
  }, {
    key: "open",
    value: function open() {
      if (!this.elementBuilt) {
        this._buildElement();
        this.elementBuilt = true;
      }

      // When opening, always reset to the trigger we were passed
      this.currentTrigger = this.settings.triggerEl;

      // Make sure to re-set the `img` `src`, in case it's been changed
      // by someone/something else.
      this._updateImgSrc();
      this._updateCaption();

      (0, _dom.addClasses)(this.el, this.openClasses);

      this._sizeImgWrapperEl();
      window.addEventListener("resize", this._sizeImgWrapperEl, false);

      if (this.settings._arrowNavigation) {
        window.addEventListener("keydown", this._handleKeydown, false);
      }

      if (HAS_ANIMATION) {
        this.el.addEventListener("animationend", this._completeOpen, false);
        (0, _dom.addClasses)(this.el, this.openingClasses);
      }
    }
  }, {
    key: "close",
    value: function close() {
      window.removeEventListener("resize", this._sizeImgWrapperEl, false);

      if (this.settings._arrowNavigation) {
        window.removeEventListener("keydown", this._handleKeydown, false);
      }

      if (HAS_ANIMATION) {
        this.el.addEventListener("animationend", this._completeClose, false);
        (0, _dom.addClasses)(this.el, this.closingClasses);
      } else {
        (0, _dom.removeClasses)(this.el, this.openClasses);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.el) {
        this.settings.parentEl.removeChild(this.el);
      }
    }
  }]);

  return Lightbox;
}();

exports.default = Lightbox;

},{"./util/dom":6,"./util/throwIfMissing":7}],2:[function(require,module,exports){
"use strict";

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _class, _temp, _initialiseProps;

var _dom = require("./util/dom");

var _injectBaseStylesheet = require("./injectBaseStylesheet");

var _injectBaseStylesheet2 = _interopRequireDefault(_injectBaseStylesheet);

var _Lightbox = require("./Lightbox");

var _Lightbox2 = _interopRequireDefault(_Lightbox);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = (_temp = _class = function () {
  function Luminous(trigger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Luminous);

    _initialiseProps.call(this);

    this.isOpen = false;

    this.trigger = trigger;

    if (!(0, _dom.isDOMElement)(this.trigger)) {
      throw new TypeError("`new Luminous` requires a DOM element as its first argument.");
    }

    // A bit unexpected if you haven't seen this pattern before.
    // Based on the pattern here:
    // https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#nested-defaults-destructured-and-restructured

    var _options$namespace = options.namespace,
        namespace = _options$namespace === undefined ? null : _options$namespace,
        _options$sourceAttrib = options.sourceAttribute,
        sourceAttribute = _options$sourceAttrib === undefined ? "href" : _options$sourceAttrib,
        _options$caption = options.caption,
        caption = _options$caption === undefined ? null : _options$caption,
        _options$openTrigger = options.openTrigger,
        openTrigger = _options$openTrigger === undefined ? "click" : _options$openTrigger,
        _options$closeTrigger = options.closeTrigger,
        closeTrigger = _options$closeTrigger === undefined ? "click" : _options$closeTrigger,
        _options$closeWithEsc = options.closeWithEscape,
        closeWithEscape = _options$closeWithEsc === undefined ? true : _options$closeWithEsc,
        _options$closeOnScrol = options.closeOnScroll,
        closeOnScroll = _options$closeOnScrol === undefined ? false : _options$closeOnScrol,
        _options$appendToSele = options.appendToSelector,
        appendToSelector = _options$appendToSele === undefined ? "body" : _options$appendToSele,
        _options$onOpen = options.onOpen,
        onOpen = _options$onOpen === undefined ? null : _options$onOpen,
        _options$onClose = options.onClose,
        onClose = _options$onClose === undefined ? null : _options$onClose,
        _options$includeImgix = options.includeImgixJSClass,
        includeImgixJSClass = _options$includeImgix === undefined ? false : _options$includeImgix,
        _options$injectBaseSt = options.injectBaseStyles,
        injectBaseStyles = _options$injectBaseSt === undefined ? true : _options$injectBaseSt,
        _options$_gallery = options._gallery,
        _gallery = _options$_gallery === undefined ? null : _options$_gallery,
        _options$_arrowNaviga = options._arrowNavigation,
        _arrowNavigation = _options$_arrowNaviga === undefined ? null : _options$_arrowNaviga;

    this.settings = {
      namespace: namespace,
      sourceAttribute: sourceAttribute,
      caption: caption,
      openTrigger: openTrigger,
      closeTrigger: closeTrigger,
      closeWithEscape: closeWithEscape,
      closeOnScroll: closeOnScroll,
      appendToSelector: appendToSelector,
      onOpen: onOpen,
      onClose: onClose,
      includeImgixJSClass: includeImgixJSClass,
      injectBaseStyles: injectBaseStyles,
      _gallery: _gallery,
      _arrowNavigation: _arrowNavigation
    };

    if (this.settings.injectBaseStyles) {
      (0, _injectBaseStylesheet2.default)();
    }

    this._buildLightbox();
    this._bindEvents();
  }

  _createClass(Luminous, [{
    key: "_buildLightbox",
    value: function _buildLightbox() {
      this.lightbox = new _Lightbox2.default({
        namespace: this.settings.namespace,
        parentEl: document.querySelector(this.settings.appendToSelector),
        triggerEl: this.trigger,
        sourceAttribute: this.settings.sourceAttribute,
        caption: this.settings.caption,
        includeImgixJSClass: this.settings.includeImgixJSClass,
        _gallery: this.settings._gallery,
        _arrowNavigation: this.settings._arrowNavigation
      });
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.trigger.addEventListener(this.settings.openTrigger, this.open, false);

      if (this.settings.closeWithEscape) {
        window.addEventListener("keyup", this._handleKeyup, false);
      }
    }
  }, {
    key: "_bindCloseEvent",
    value: function _bindCloseEvent() {
      this.lightbox.el.addEventListener(this.settings.closeTrigger, this.close, false);
    }
  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      this.trigger.removeEventListener(this.settings.openTrigger, this.open, false);
      if (this.lightbox.el) {
        this.lightbox.el.removeEventListener(this.settings.closeTrigger, this.close, false);
      }

      if (this.settings.closeWithEscape) {
        window.removeEventListener("keyup", this._handleKeyup, false);
      }
    }
  }]);

  return Luminous;
}(), _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.VERSION = "2.0.0";

  this.open = function (e) {
    if (e && typeof e.preventDefault === "function") {
      e.preventDefault();
    }

    var previouslyBuilt = _this.lightbox.elementBuilt;

    _this.lightbox.open();

    if (!previouslyBuilt) {
      _this._bindCloseEvent();
    }

    if (_this.settings.closeOnScroll) {
      window.addEventListener("scroll", _this.close, false);
    }

    var onOpen = _this.settings.onOpen;
    if (onOpen && typeof onOpen === "function") {
      onOpen();
    }

    _this.isOpen = true;
  };

  this.close = function (e) {
    if (e && typeof e.preventDefault === "function") {
      e.preventDefault();
    }

    if (_this.settings.closeOnScroll) {
      window.removeEventListener("scroll", _this.close, false);
    }

    _this.lightbox.close();

    var onClose = _this.settings.onClose;
    if (onClose && typeof onClose === "function") {
      onClose();
    }

    _this.isOpen = false;
  };

  this._handleKeyup = function (e) {
    if (_this.isOpen && e.keyCode === 27) {
      _this.close();
    }
  };

  this.destroy = function () {
    _this._unbindEvents();
    _this.lightbox.destroy();
  };
}, _temp);

},{"./Lightbox":1,"./injectBaseStylesheet":4,"./util/dom":6}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _dom = require("./util/dom");

var _Luminous = require("./Luminous");

var _Luminous2 = _interopRequireDefault(_Luminous);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var LuminousGallery = function () {
  function LuminousGallery(triggers) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var luminousOpts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, LuminousGallery);

    this.boundMethod = function () {};

    var _options$arrowNavigat = options.arrowNavigation,
        arrowNavigation = _options$arrowNavigat === undefined ? true : _options$arrowNavigat;

    this.settings = { arrowNavigation: arrowNavigation };

    this.triggers = triggers;
    this.luminousOpts = luminousOpts;
    this.luminousOpts._gallery = this;
    this.luminousOpts._arrowNavigation = this.settings.arrowNavigation;
    this._constructLuminousInstances();
  }

  _createClass(LuminousGallery, [{
    key: "_constructLuminousInstances",
    value: function _constructLuminousInstances() {
      this.luminousInstances = [];

      var triggerLen = this.triggers.length;
      for (var i = 0; i < triggerLen; i++) {
        var trigger = this.triggers[i];
        var lum = new _Luminous2.default(trigger, this.luminousOpts);
        this.luminousInstances.push(lum);
      }
    }
  }, {
    key: "nextTrigger",
    value: function nextTrigger(trigger) {
      var nextTriggerIndex = Array.prototype.indexOf.call(this.triggers, trigger) + 1;

      return nextTriggerIndex >= this.triggers.length ? this.triggers[0] : this.triggers[nextTriggerIndex];
    }
  }, {
    key: "previousTrigger",
    value: function previousTrigger(trigger) {
      var prevTriggerIndex = Array.prototype.indexOf.call(this.triggers, trigger) - 1;

      return prevTriggerIndex < 0 ? this.triggers[this.triggers.length - 1] : this.triggers[prevTriggerIndex];
    }
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return LuminousGallery;
}();

exports.default = LuminousGallery;

},{"./Luminous":2,"./util/dom":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = injectBaseStylesheet;
var RULES = "\n@keyframes lum-noop {\n  0% { zoom: 1; }\n}\n\n.lum-lightbox {\n  position: fixed;\n  display: none;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.lum-lightbox.lum-open {\n  display: block;\n}\n\n.lum-lightbox.lum-opening, .lum-lightbox.lum-closing {\n  animation: lum-noop 1ms;\n}\n\n.lum-lightbox-inner {\n  position: absolute;\n  top: 0%;\n  right: 0%;\n  bottom: 0%;\n  left: 0%;\n\n  overflow: hidden;\n}\n\n.lum-lightbox-loader {\n  display: none;\n}\n\n.lum-lightbox-inner img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.lum-lightbox-image-wrapper {\n  vertical-align: middle;\n  display: table-cell;\n  text-align: center;\n}\n";

function injectBaseStylesheet() {
  if (document.querySelector(".lum-base-styles")) {
    return;
  }

  var styleEl = document.createElement("style");
  styleEl.type = "text/css";
  styleEl.classList.add("lum-base-styles");

  styleEl.appendChild(document.createTextNode(RULES));

  var head = document.head;
  head.insertBefore(styleEl, head.firstChild);
}

},{}],5:[function(require,module,exports){
(function (global){
"use strict";

var _Luminous = require("./Luminous");

var _Luminous2 = _interopRequireDefault(_Luminous);

var _LuminousGallery = require("./LuminousGallery");

var _LuminousGallery2 = _interopRequireDefault(_LuminousGallery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// This file is used for the standalone browser build

global.Luminous = _Luminous2.default;
global.LuminousGallery = _LuminousGallery2.default;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Luminous":2,"./LuminousGallery":3}],6:[function(require,module,exports){
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

exports.isDOMElement = isDOMElement;
exports.addClasses = addClasses;
exports.removeClasses = removeClasses;
// This is not really a perfect check, but works fine.
// From http://stackoverflow.com/questions/384286
var HAS_DOM_2 = (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === "object";

function isDOMElement(obj) {
  return HAS_DOM_2 ? obj instanceof HTMLElement : obj && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
}

function addClasses(el, classNames) {
  classNames.forEach(function (className) {
    el.classList.add(className);
  });
}

function removeClasses(el, classNames) {
  classNames.forEach(function (className) {
    el.classList.remove(className);
  });
}

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = throwIfMissing;
function throwIfMissing() {
  throw new Error("Missing parameter");
}

},{}]},{},[5]);


!function(){function e(t,i,n){function s(l,r){if(!i[l]){if(!t[l]){var a="function"==typeof require&&require;if(!r&&a)return a(l,!0);if(o)return o(l,!0);var u=new Error("Cannot find module '"+l+"'");throw u.code="MODULE_NOT_FOUND",u}var d=i[l]={exports:{}};t[l][0].call(d.exports,function(e){var i=t[l][1][e];return s(i||e)},d,d.exports,e,t,i,n)}return i[l].exports}for(var o="function"==typeof require&&require,l=0;l<n.length;l++)s(n[l]);return s}return e}()({1:[function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(i,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return"undefined"==typeof e?"undefined":o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":"undefined"==typeof e?"undefined":o(e)},r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=e("./util/dom"),u=e("./util/throwIfMissing"),d=n(u),c=37,h=39,g="undefined"!=typeof document&&"animation"in document.createElement("div").style,p=function(){function e(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,e),this._sizeImgWrapperEl=function(){var e=t.imgWrapperEl.style;e.width=t.innerEl.clientWidth+"px",e.maxWidth=t.innerEl.clientWidth+"px",e.height=t.innerEl.clientHeight-t.captionEl.clientHeight+"px",e.maxHeight=t.innerEl.clientHeight-t.captionEl.clientHeight+"px"},this._handleKeydown=function(e){e.keyCode==c?t.showPrevious():e.keyCode==h&&t.showNext()},this.showNext=function(){t.settings._gallery&&(t.currentTrigger=t.settings._gallery.nextTrigger(t.currentTrigger),t._updateImgSrc(),t._updateCaption(),t._sizeImgWrapperEl())},this.showPrevious=function(){t.settings._gallery&&(t.currentTrigger=t.settings._gallery.previousTrigger(t.currentTrigger),t._updateImgSrc(),t._updateCaption(),t._sizeImgWrapperEl())},this._completeOpen=function(){t.el.removeEventListener("animationend",t._completeOpen,!1),(0,a.removeClasses)(t.el,t.openingClasses)},this._completeClose=function(){t.el.removeEventListener("animationend",t._completeClose,!1),(0,a.removeClasses)(t.el,t.openClasses),(0,a.removeClasses)(t.el,t.closingClasses)};var n=i.namespace,o=void 0===n?null:n,l=i.parentEl,r=void 0===l?(0,d["default"])():l,u=i.triggerEl,g=void 0===u?(0,d["default"])():u,p=i.sourceAttribute,f=void 0===p?(0,d["default"])():p,m=i.caption,v=void 0===m?null:m,y=i.includeImgixJSClass,b=void 0!==y&&y,E=i._gallery,_=void 0===E?null:E,C=i._arrowNavigation,w=void 0===C?null:C;if(this.settings={namespace:o,parentEl:r,triggerEl:g,sourceAttribute:f,caption:v,includeImgixJSClass:b,_gallery:_,_arrowNavigation:w},!(0,a.isDOMElement)(this.settings.parentEl))throw new TypeError("`new Lightbox` requires a DOM element passed as `parentEl`.");this.currentTrigger=this.settings.triggerEl,this.openClasses=this._buildClasses("open"),this.openingClasses=this._buildClasses("opening"),this.closingClasses=this._buildClasses("closing"),this.hasBeenLoaded=!1,this.elementBuilt=!1}return r(e,[{key:"_buildClasses",value:function(e){var t=["lum-"+e],i=this.settings.namespace;return i&&t.push(i+"-"+e),t}},{key:"_buildElement",value:function(){this.el=document.createElement("div"),(0,a.addClasses)(this.el,this._buildClasses("lightbox")),this.innerEl=document.createElement("div"),(0,a.addClasses)(this.innerEl,this._buildClasses("lightbox-inner")),this.el.appendChild(this.innerEl);var e=document.createElement("div");(0,a.addClasses)(e,this._buildClasses("lightbox-loader")),this.innerEl.appendChild(e),this.imgWrapperEl=document.createElement("div"),(0,a.addClasses)(this.imgWrapperEl,this._buildClasses("lightbox-image-wrapper")),this.innerEl.appendChild(this.imgWrapperEl);var t=document.createElement("span");(0,a.addClasses)(t,this._buildClasses("lightbox-position-helper")),this.imgWrapperEl.appendChild(t),this.imgEl=document.createElement("img"),(0,a.addClasses)(this.imgEl,this._buildClasses("img")),t.appendChild(this.imgEl),this.captionEl=document.createElement("p"),(0,a.addClasses)(this.captionEl,this._buildClasses("lightbox-caption")),t.appendChild(this.captionEl),this.settings._gallery&&this._setUpGalleryElements(),this.settings.parentEl.appendChild(this.el),this._updateImgSrc(),this._updateCaption(),this.settings.includeImgixJSClass&&this.imgEl.classList.add("imgix-fluid")}},{key:"_setUpGalleryElements",value:function(){this._buildGalleryButton("previous",this.showPrevious),this._buildGalleryButton("next",this.showNext)}},{key:"_buildGalleryButton",value:function(e,t){var i=document.createElement("button");this[e+"Button"]=i,i.innerText=e,(0,a.addClasses)(i,this._buildClasses(e+"-button")),(0,a.addClasses)(i,this._buildClasses("gallery-button")),this.innerEl.appendChild(i),i.addEventListener("click",function(e){e.stopPropagation(),t()},!1)}},{key:"_updateCaption",value:function(){var e=l(this.settings.caption),t="";"string"===e?t=this.settings.caption:"function"===e&&(t=this.settings.caption(this.currentTrigger)),this.captionEl.innerHTML=t}},{key:"_updateImgSrc",value:function(){var e=this,t=this.currentTrigger.getAttribute(this.settings.sourceAttribute);if(!t)throw new Error("No image URL was found in the "+this.settings.sourceAttribute+" attribute of the trigger.");var i=this._buildClasses("loading");this.hasBeenLoaded||(0,a.addClasses)(this.el,i),this.imgEl.onload=function(){(0,a.removeClasses)(e.el,i),e.hasBeenLoaded=!0},this.imgEl.setAttribute("src",t)}},{key:"open",value:function(){this.elementBuilt||(this._buildElement(),this.elementBuilt=!0),this.currentTrigger=this.settings.triggerEl,this._updateImgSrc(),this._updateCaption(),(0,a.addClasses)(this.el,this.openClasses),this._sizeImgWrapperEl(),window.addEventListener("resize",this._sizeImgWrapperEl,!1),this.settings._arrowNavigation&&window.addEventListener("keydown",this._handleKeydown,!1),g&&(this.el.addEventListener("animationend",this._completeOpen,!1),(0,a.addClasses)(this.el,this.openingClasses))}},{key:"close",value:function(){window.removeEventListener("resize",this._sizeImgWrapperEl,!1),this.settings._arrowNavigation&&window.removeEventListener("keydown",this._handleKeydown,!1),g?(this.el.addEventListener("animationend",this._completeClose,!1),(0,a.addClasses)(this.el,this.closingClasses)):(0,a.removeClasses)(this.el,this.openClasses)}},{key:"destroy",value:function(){this.el&&this.settings.parentEl.removeChild(this.el)}}]),e}();i["default"]=p},{"./util/dom":6,"./util/throwIfMissing":7}],2:[function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o,l,r,a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),u=e("./util/dom"),d=e("./injectBaseStylesheet"),c=n(d),h=e("./Lightbox"),g=n(h);t.exports=(l=o=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s(this,e),r.call(this),this.isOpen=!1,this.trigger=t,!(0,u.isDOMElement)(this.trigger))throw new TypeError("`new Luminous` requires a DOM element as its first argument.");var n=i.namespace,o=void 0===n?null:n,l=i.sourceAttribute,a=void 0===l?"href":l,d=i.caption,h=void 0===d?null:d,g=i.openTrigger,p=void 0===g?"click":g,f=i.closeTrigger,m=void 0===f?"click":f,v=i.closeWithEscape,y=void 0===v||v,b=i.closeOnScroll,E=void 0!==b&&b,_=i.appendToSelector,C=void 0===_?"body":_,w=i.onOpen,x=void 0===w?null:w,S=i.onClose,L=void 0===S?null:S,O=i.includeImgixJSClass,T=void 0!==O&&O,k=i.injectBaseStyles,I=void 0===k||k,M=i._gallery,N=void 0===M?null:M,W=i._arrowNavigation,B=void 0===W?null:W;this.settings={namespace:o,sourceAttribute:a,caption:h,openTrigger:p,closeTrigger:m,closeWithEscape:y,closeOnScroll:E,appendToSelector:C,onOpen:x,onClose:L,includeImgixJSClass:T,injectBaseStyles:I,_gallery:N,_arrowNavigation:B},this.settings.injectBaseStyles&&(0,c["default"])(),this._buildLightbox(),this._bindEvents()}return a(e,[{key:"_buildLightbox",value:function(){this.lightbox=new g["default"]({namespace:this.settings.namespace,parentEl:document.querySelector(this.settings.appendToSelector),triggerEl:this.trigger,sourceAttribute:this.settings.sourceAttribute,caption:this.settings.caption,includeImgixJSClass:this.settings.includeImgixJSClass,_gallery:this.settings._gallery,_arrowNavigation:this.settings._arrowNavigation})}},{key:"_bindEvents",value:function(){this.trigger.addEventListener(this.settings.openTrigger,this.open,!1),this.settings.closeWithEscape&&window.addEventListener("keyup",this._handleKeyup,!1)}},{key:"_bindCloseEvent",value:function(){this.lightbox.el.addEventListener(this.settings.closeTrigger,this.close,!1)}},{key:"_unbindEvents",value:function(){this.trigger.removeEventListener(this.settings.openTrigger,this.open,!1),this.lightbox.el&&this.lightbox.el.removeEventListener(this.settings.closeTrigger,this.close,!1),this.settings.closeWithEscape&&window.removeEventListener("keyup",this._handleKeyup,!1)}}]),e}(),r=function(){var e=this;this.VERSION="2.0.0",this.open=function(t){t&&"function"==typeof t.preventDefault&&t.preventDefault();var i=e.lightbox.elementBuilt;e.lightbox.open(),i||e._bindCloseEvent(),e.settings.closeOnScroll&&window.addEventListener("scroll",e.close,!1);var n=e.settings.onOpen;n&&"function"==typeof n&&n(),e.isOpen=!0},this.close=function(t){t&&"function"==typeof t.preventDefault&&t.preventDefault(),e.settings.closeOnScroll&&window.removeEventListener("scroll",e.close,!1),e.lightbox.close();var i=e.settings.onClose;i&&"function"==typeof i&&i(),e.isOpen=!1},this._handleKeyup=function(t){e.isOpen&&27===t.keyCode&&e.close()},this.destroy=function(){e._unbindEvents(),e.lightbox.destroy()}},l)},{"./Lightbox":1,"./injectBaseStylesheet":4,"./util/dom":6}],3:[function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=(e("./util/dom"),e("./Luminous")),r=n(l),a=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};s(this,e),this.boundMethod=function(){};var o=i.arrowNavigation,l=void 0===o||o;this.settings={arrowNavigation:l},this.triggers=t,this.luminousOpts=n,this.luminousOpts._gallery=this,this.luminousOpts._arrowNavigation=this.settings.arrowNavigation,this._constructLuminousInstances()}return o(e,[{key:"_constructLuminousInstances",value:function(){this.luminousInstances=[];for(var e=this.triggers.length,t=0;t<e;t++){var i=this.triggers[t],n=new r["default"](i,this.luminousOpts);this.luminousInstances.push(n)}}},{key:"nextTrigger",value:function(e){var t=Array.prototype.indexOf.call(this.triggers,e)+1;return t>=this.triggers.length?this.triggers[0]:this.triggers[t]}},{key:"previousTrigger",value:function(e){var t=Array.prototype.indexOf.call(this.triggers,e)-1;return t<0?this.triggers[this.triggers.length-1]:this.triggers[t]}},{key:"destroy",value:function(){}}]),e}();i["default"]=a},{"./Luminous":2,"./util/dom":6}],4:[function(e,t,i){"use strict";function n(){if(!document.querySelector(".lum-base-styles")){var e=document.createElement("style");e.type="text/css",e.classList.add("lum-base-styles"),e.appendChild(document.createTextNode(s));var t=document.head;t.insertBefore(e,t.firstChild)}}Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=n;var s="\n@keyframes lum-noop {\n  0% { zoom: 1; }\n}\n\n.lum-lightbox {\n  position: fixed;\n  display: none;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.lum-lightbox.lum-open {\n  display: block;\n}\n\n.lum-lightbox.lum-opening, .lum-lightbox.lum-closing {\n  animation: lum-noop 1ms;\n}\n\n.lum-lightbox-inner {\n  position: absolute;\n  top: 0%;\n  right: 0%;\n  bottom: 0%;\n  left: 0%;\n\n  overflow: hidden;\n}\n\n.lum-lightbox-loader {\n  display: none;\n}\n\n.lum-lightbox-inner img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.lum-lightbox-image-wrapper {\n  vertical-align: middle;\n  display: table-cell;\n  text-align: center;\n}\n"},{}],5:[function(e,t,i){(function(t){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var n=e("./Luminous"),s=i(n),o=e("./LuminousGallery"),l=i(o);t.Luminous=s["default"],t.LuminousGallery=l["default"]}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./Luminous":2,"./LuminousGallery":3}],6:[function(e,t,i){"use strict";function n(e){return a?e instanceof HTMLElement:e&&"object"===("undefined"==typeof e?"undefined":r(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}function s(e,t){t.forEach(function(t){e.classList.add(t)})}function o(e,t){t.forEach(function(t){e.classList.remove(t)})}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(i,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"===l(Symbol.iterator)?function(e){return"undefined"==typeof e?"undefined":l(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":"undefined"==typeof e?"undefined":l(e)};i.isDOMElement=n,i.addClasses=s,i.removeClasses=o;var a="object"===("undefined"==typeof HTMLElement?"undefined":r(HTMLElement))},{}],7:[function(e,t,i){"use strict";function n(){throw new Error("Missing parameter")}Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=n},{}]},{},[5]);

const gulp = require("gulp");
const browserify = require("browserify");
const babelify = require("babelify");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const gutil = require("gulp-util");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const Server = require("karma").Server;
const cssnano = require("gulp-cssnano");
const runSequence = require("run-sequence");
const karmaConfig = require("./karmaConfig");
const Config = require("karma/lib/config").Config;
const autoprefixer = require("gulp-autoprefixer");
const babel = require("gulp-babel");

const paths = {
  test: __dirname + "/test/**/*.js",
  js: __dirname + "/src/js/**/*.js",
  jsEntry: __dirname + "/src/js/lum.js",
  css: __dirname + "/src/css/**/*.css"
};

const config = {
  DIST_DIR: "dist",
  LIB_DIR: "lib"
};

function runKarmaTests(configObj, done, singleRun) {
  var config = new Config();
  config.set(configObj);

  if (singleRun !== null) {
    config.singleRun = singleRun;
  }

  new Server(config, function(exitCode) {
    if (exitCode !== 0) {
      throw new gutil.PluginError({
        plugin: "karma",
        message: "Karma tests failed"
      });
    }

    done();
  }).start();
}

gulp.task("default", ["build", "test-headless"]);

gulp.task("build", ["build-js-lib", "build-js-dist", "build-css"]);
// When actually setting up CI stuff, this will need to run in sequence.
// https://www.npmjs.com/package/run-sequence
gulp.task("build-ci", function() {
  runSequence(["build", "test-headless"]);
});

gulp.task("test-local", function(done) {
  runKarmaTests(karmaConfig.local, done, true);
});

gulp.task("test-headless", function(done) {
  runKarmaTests(karmaConfig.headless, done, true);
});

gulp.task("test-full", function(done) {
  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    throw new gutil.PluginError({
      plugin: "test-full",
      message:
        "Unable to run full tests. Please make sure both SAUCE_USERNAME and SAUCE_ACCESS_KEY are defined in the environment."
    });
  }

  runKarmaTests(karmaConfig.full, done, true);
});

gulp.task("build-js-dist", () =>
  gulp
    .src(paths.js)
    .pipe(babel({}))
    .pipe(gulp.dest(config.LIB_DIR))
);

gulp.task("build-js-lib", () => {
  var b = browserify({
    /* Cannot use standalone build as this library exports two globals, which browserify cannot support. */
    // standalone: "Luminous",
    entries: paths.jsEntry,
    transform: [babelify]
  }).bundle();

  return b
    .pipe(source("Luminous.js"))
    .pipe(buffer())
    .pipe(gulp.dest(config.DIST_DIR))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(config.DIST_DIR));
});

gulp.task("build-css", function() {
  return gulp
    .src(paths.css)
    .pipe(
      autoprefixer({
        browsers: ["last 2 major versions"]
      })
    )
    .pipe(gulp.dest(config.LIB_DIR))
    .pipe(gulp.dest(config.DIST_DIR))
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(config.LIB_DIR))
    .pipe(gulp.dest(config.DIST_DIR));
});

gulp.task("watch", function() {
  gulp.watch([paths.js, paths.test], function() {
    runSequence(["build-js-lib", "test-headless"]);
  });
  gulp.watch(paths.css, ["build-css"]);
});


const baseConfig = {
  frameworks: ["browserify", "jasmine"],
  files: [
    { pattern: "src/**/*.js", included: false, served: false },
    "test/**/*.js"
  ],
  preprocessors: {
    "src/**/*.js": "browserify",
    "test/**/*.js": "browserify"
  },
  browserify: {
    transform: ["babelify"]
  },
  concurrency: 5,
  captureTimeout: 90000,
  browserConnectTimeout: 3000,
  browserNoActivityTimeout: 15000
};

const stringConfig = JSON.stringify(baseConfig);

var headlessConfig = JSON.parse(stringConfig);
headlessConfig.browsers = ["PhantomJS"];

var localConfig = JSON.parse(stringConfig);
localConfig.browsers = ["Chrome", "Firefox"];

var fullConfig = JSON.parse(stringConfig);
fullConfig.reporters = ["progress", "saucelabs"];
fullConfig.saucelabs = { testName: "Luminous Tests" };
fullConfig.browsers = [
  "sl_chrome",
  "sl_safari_9",
  "sl_safari_8",
  "sl_firefox_42",
  "sl_firefox_41",
  "sl_ie_11",
  "sl_ie_10",
  "sl_ios_9",
  "sl_ios_8",
  "sl_android_5",
  "sl_android_4"
];
fullConfig.customLaunchers = {
  sl_chrome: { base: "SauceLabs", browserName: "Chrome" },
  sl_safari_9: { base: "SauceLabs", browserName: "Safari", version: 9 },
  sl_safari_8: { base: "SauceLabs", browserName: "Safari", version: 8 },
  sl_firefox_42: { base: "SauceLabs", browserName: "Firefox", version: 42 },
  sl_firefox_41: { base: "SauceLabs", browserName: "Firefox", version: 41 },
  sl_ie_11: {
    base: "SauceLabs",
    browserName: "Internet Explorer",
    version: "11"
  },
  sl_ie_10: {
    base: "SauceLabs",
    browserName: "Internet Explorer",
    version: "10"
  },
  sl_ios_9: { base: "SauceLabs", browserName: "iPhone", version: "9.2" },
  sl_ios_8: { base: "SauceLabs", browserName: "iPhone", version: "8.4" },
  sl_android_5: { base: "SauceLabs", browserName: "Android", version: "5.1" },
  sl_android_4: { base: "SauceLabs", browserName: "Android", version: "4.4" }
};

exports.headless = headlessConfig;
exports.local = localConfig;
exports.full = fullConfig;


import { isDOMElement, addClasses, removeClasses } from "./util/dom";
import throwIfMissing from "./util/throwIfMissing";

const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;

// All officially-supported browsers have this, but it's easy to
// account for, just in case.
const HAS_ANIMATION =
  typeof document === "undefined"
    ? false
    : "animation" in document.createElement("div").style;

export default class Lightbox {
  constructor(options = {}) {
    let {
      namespace = null,
      parentEl = throwIfMissing(),
      triggerEl = throwIfMissing(),
      sourceAttribute = throwIfMissing(),
      caption = null,
      includeImgixJSClass = false,
      _gallery = null,
      _arrowNavigation = null
    } = options;

    this.settings = {
      namespace,
      parentEl,
      triggerEl,
      sourceAttribute,
      caption,
      includeImgixJSClass,
      _gallery,
      _arrowNavigation
    };

    if (!isDOMElement(this.settings.parentEl)) {
      throw new TypeError(
        "`new Lightbox` requires a DOM element passed as `parentEl`."
      );
    }

    this.currentTrigger = this.settings.triggerEl;

    this.openClasses = this._buildClasses("open");
    this.openingClasses = this._buildClasses("opening");
    this.closingClasses = this._buildClasses("closing");

    this.hasBeenLoaded = false;
    this.elementBuilt = false;
  }

  _buildClasses(suffix) {
    const classes = [`lum-${suffix}`];

    const ns = this.settings.namespace;
    if (ns) {
      classes.push(`${ns}-${suffix}`);
    }

    return classes;
  }

  _buildElement() {
    this.el = document.createElement("div");
    addClasses(this.el, this._buildClasses("lightbox"));

    this.innerEl = document.createElement("div");
    addClasses(this.innerEl, this._buildClasses("lightbox-inner"));
    this.el.appendChild(this.innerEl);

    const loaderEl = document.createElement("div");
    addClasses(loaderEl, this._buildClasses("lightbox-loader"));
    this.innerEl.appendChild(loaderEl);

    this.imgWrapperEl = document.createElement("div");
    addClasses(this.imgWrapperEl, this._buildClasses("lightbox-image-wrapper"));
    this.innerEl.appendChild(this.imgWrapperEl);

    const positionHelperEl = document.createElement("span");
    addClasses(
      positionHelperEl,
      this._buildClasses("lightbox-position-helper")
    );
    this.imgWrapperEl.appendChild(positionHelperEl);

    this.imgEl = document.createElement("img");
    addClasses(this.imgEl, this._buildClasses("img"));
    positionHelperEl.appendChild(this.imgEl);

    this.captionEl = document.createElement("p");
    addClasses(this.captionEl, this._buildClasses("lightbox-caption"));
    positionHelperEl.appendChild(this.captionEl);

    if (this.settings._gallery) {
      this._setUpGalleryElements();
    }

    this.settings.parentEl.appendChild(this.el);

    this._updateImgSrc();
    this._updateCaption();

    if (this.settings.includeImgixJSClass) {
      this.imgEl.classList.add("imgix-fluid");
    }
  }

  _setUpGalleryElements() {
    this._buildGalleryButton("previous", this.showPrevious);
    this._buildGalleryButton("next", this.showNext);
  }

  _buildGalleryButton(name, fn) {
    const btn = document.createElement("button");
    this[`${name}Button`] = btn;

    btn.innerText = name;
    addClasses(btn, this._buildClasses(`${name}-button`));
    addClasses(btn, this._buildClasses("gallery-button"));
    this.innerEl.appendChild(btn);

    btn.addEventListener(
      "click",
      e => {
        e.stopPropagation();

        fn();
      },
      false
    );
  }

  _sizeImgWrapperEl = () => {
    const style = this.imgWrapperEl.style;
    style.width = `${this.innerEl.clientWidth}px`;
    style.maxWidth = `${this.innerEl.clientWidth}px`;
    style.height = `${this.innerEl.clientHeight -
      this.captionEl.clientHeight}px`;
    style.maxHeight = `${this.innerEl.clientHeight -
      this.captionEl.clientHeight}px`;
  };

  _updateCaption() {
    const captionType = typeof this.settings.caption;
    let caption = "";

    if (captionType === "string") {
      caption = this.settings.caption;
    } else if (captionType === "function") {
      caption = this.settings.caption(this.currentTrigger);
    }

    this.captionEl.innerHTML = caption;
  }

  _updateImgSrc() {
    const imageURL = this.currentTrigger.getAttribute(
      this.settings.sourceAttribute
    );

    if (!imageURL) {
      throw new Error(
        `No image URL was found in the ${
          this.settings.sourceAttribute
        } attribute of the trigger.`
      );
    }

    let loadingClasses = this._buildClasses("loading");

    if (!this.hasBeenLoaded) {
      addClasses(this.el, loadingClasses);
    }

    this.imgEl.onload = () => {
      removeClasses(this.el, loadingClasses);
      this.hasBeenLoaded = true;
    };

    this.imgEl.setAttribute("src", imageURL);
  }

  _handleKeydown = e => {
    if (e.keyCode == LEFT_ARROW) {
      this.showPrevious();
    } else if (e.keyCode == RIGHT_ARROW) {
      this.showNext();
    }
  };

  showNext = () => {
    if (!this.settings._gallery) {
      return;
    }

    this.currentTrigger = this.settings._gallery.nextTrigger(
      this.currentTrigger
    );
    this._updateImgSrc();
    this._updateCaption();
    this._sizeImgWrapperEl();
  };

  showPrevious = () => {
    if (!this.settings._gallery) {
      return;
    }

    this.currentTrigger = this.settings._gallery.previousTrigger(
      this.currentTrigger
    );
    this._updateImgSrc();
    this._updateCaption();
    this._sizeImgWrapperEl();
  };

  open() {
    if (!this.elementBuilt) {
      this._buildElement();
      this.elementBuilt = true;
    }

    // When opening, always reset to the trigger we were passed
    this.currentTrigger = this.settings.triggerEl;

    // Make sure to re-set the `img` `src`, in case it's been changed
    // by someone/something else.
    this._updateImgSrc();
    this._updateCaption();

    addClasses(this.el, this.openClasses);

    this._sizeImgWrapperEl();
    window.addEventListener("resize", this._sizeImgWrapperEl, false);

    if (this.settings._arrowNavigation) {
      window.addEventListener("keydown", this._handleKeydown, false);
    }

    if (HAS_ANIMATION) {
      this.el.addEventListener("animationend", this._completeOpen, false);
      addClasses(this.el, this.openingClasses);
    }
  }

  close() {
    window.removeEventListener("resize", this._sizeImgWrapperEl, false);

    if (this.settings._arrowNavigation) {
      window.removeEventListener("keydown", this._handleKeydown, false);
    }

    if (HAS_ANIMATION) {
      this.el.addEventListener("animationend", this._completeClose, false);
      addClasses(this.el, this.closingClasses);
    } else {
      removeClasses(this.el, this.openClasses);
    }
  }

  _completeOpen = () => {
    this.el.removeEventListener("animationend", this._completeOpen, false);

    removeClasses(this.el, this.openingClasses);
  };

  _completeClose = () => {
    this.el.removeEventListener("animationend", this._completeClose, false);

    removeClasses(this.el, this.openClasses);
    removeClasses(this.el, this.closingClasses);
  };

  destroy() {
    if (this.el) {
      this.settings.parentEl.removeChild(this.el);
    }
  }
}


import { isDOMElement } from "./util/dom";
import injectBaseStylesheet from "./injectBaseStylesheet";
import Lightbox from "./Lightbox";

module.exports = class Luminous {
  VERSION = "2.0.0";

  constructor(trigger, options = {}) {
    this.isOpen = false;

    this.trigger = trigger;

    if (!isDOMElement(this.trigger)) {
      throw new TypeError(
        "`new Luminous` requires a DOM element as its first argument."
      );
    }

    // A bit unexpected if you haven't seen this pattern before.
    // Based on the pattern here:
    // https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#nested-defaults-destructured-and-restructured
    let {
      // Prefix for generated element class names (e.g. `my-ns` will
      // result in classes such as `my-ns-lightbox`. Default `lum-`
      // prefixed classes will always be added as well.
      namespace = null,
      // Which attribute to pull the lightbox image source from.
      sourceAttribute = "href",
      // Captions can be a literal string, or a function that receives the Luminous instance's trigger element as an argument and returns a string. Supports HTML, so use caution when dealing with user input.
      caption = null,
      // The event to listen to on the _trigger_ element: triggers opening.
      openTrigger = "click",
      // The event to listen to on the _lightbox_ element: triggers closing.
      closeTrigger = "click",
      // Allow closing by pressing escape.
      closeWithEscape = true,
      // Automatically close when the page is scrolled.
      closeOnScroll = false,
      // A selector defining what to append the lightbox element to.
      appendToSelector = "body",
      // If present (and a function), this will be called
      // whenever the lightbox is opened.
      onOpen = null,
      // If present (and a function), this will be called
      // whenever the lightbox is closed.
      onClose = null,
      // When true, adds the `imgix-fluid` class to the `img`
      // inside the lightbox. See https://github.com/imgix/imgix.js
      // for more information.
      includeImgixJSClass = false,
      // Add base styles to the page. See the "Theming"
      // section of README.md for more information.
      injectBaseStyles = true,
      // Internal use only!
      _gallery = null,
      _arrowNavigation = null
    } = options;

    this.settings = {
      namespace,
      sourceAttribute,
      caption,
      openTrigger,
      closeTrigger,
      closeWithEscape,
      closeOnScroll,
      appendToSelector,
      onOpen,
      onClose,
      includeImgixJSClass,
      injectBaseStyles,
      _gallery,
      _arrowNavigation
    };

    if (this.settings.injectBaseStyles) {
      injectBaseStylesheet();
    }

    this._buildLightbox();
    this._bindEvents();
  }

  open = e => {
    if (e && typeof e.preventDefault === "function") {
      e.preventDefault();
    }

    let previouslyBuilt = this.lightbox.elementBuilt;

    this.lightbox.open();

    if (!previouslyBuilt) {
      this._bindCloseEvent();
    }

    if (this.settings.closeOnScroll) {
      window.addEventListener("scroll", this.close, false);
    }

    const onOpen = this.settings.onOpen;
    if (onOpen && typeof onOpen === "function") {
      onOpen();
    }

    this.isOpen = true;
  };

  close = e => {
    if (e && typeof e.preventDefault === "function") {
      e.preventDefault();
    }

    if (this.settings.closeOnScroll) {
      window.removeEventListener("scroll", this.close, false);
    }

    this.lightbox.close();

    const onClose = this.settings.onClose;
    if (onClose && typeof onClose === "function") {
      onClose();
    }

    this.isOpen = false;
  };

  _buildLightbox() {
    this.lightbox = new Lightbox({
      namespace: this.settings.namespace,
      parentEl: document.querySelector(this.settings.appendToSelector),
      triggerEl: this.trigger,
      sourceAttribute: this.settings.sourceAttribute,
      caption: this.settings.caption,
      includeImgixJSClass: this.settings.includeImgixJSClass,
      _gallery: this.settings._gallery,
      _arrowNavigation: this.settings._arrowNavigation
    });
  }

  _bindEvents() {
    this.trigger.addEventListener(this.settings.openTrigger, this.open, false);

    if (this.settings.closeWithEscape) {
      window.addEventListener("keyup", this._handleKeyup, false);
    }
  }

  _bindCloseEvent() {
    this.lightbox.el.addEventListener(
      this.settings.closeTrigger,
      this.close,
      false
    );
  }

  _unbindEvents() {
    this.trigger.removeEventListener(
      this.settings.openTrigger,
      this.open,
      false
    );
    if (this.lightbox.el) {
      this.lightbox.el.removeEventListener(
        this.settings.closeTrigger,
        this.close,
        false
      );
    }

    if (this.settings.closeWithEscape) {
      window.removeEventListener("keyup", this._handleKeyup, false);
    }
  }

  _handleKeyup = e => {
    if (this.isOpen && e.keyCode === 27) {
      this.close();
    }
  };

  destroy = () => {
    this._unbindEvents();
    this.lightbox.destroy();
  };
};


import { isDOMElement, addClasses, removeClasses } from "./util/dom";
import Luminous from "./Luminous";

export default class LuminousGallery {
  constructor(triggers, options = {}, luminousOpts = {}) {
    let { arrowNavigation = true } = options;

    this.settings = { arrowNavigation };

    this.triggers = triggers;
    this.luminousOpts = luminousOpts;
    this.luminousOpts._gallery = this;
    this.luminousOpts._arrowNavigation = this.settings.arrowNavigation;
    this._constructLuminousInstances();
  }

  _constructLuminousInstances() {
    this.luminousInstances = [];

    const triggerLen = this.triggers.length;
    for (let i = 0; i < triggerLen; i++) {
      const trigger = this.triggers[i];
      const lum = new Luminous(trigger, this.luminousOpts);
      this.luminousInstances.push(lum);
    }
  }

  nextTrigger(trigger) {
    const nextTriggerIndex =
      Array.prototype.indexOf.call(this.triggers, trigger) + 1;

    return nextTriggerIndex >= this.triggers.length
      ? this.triggers[0]
      : this.triggers[nextTriggerIndex];
  }

  previousTrigger(trigger) {
    const prevTriggerIndex =
      Array.prototype.indexOf.call(this.triggers, trigger) - 1;

    return prevTriggerIndex < 0
      ? this.triggers[this.triggers.length - 1]
      : this.triggers[prevTriggerIndex];
  }

  boundMethod = () => {};

  destroy() {}
}


const RULES = `
@keyframes lum-noop {
  0% { zoom: 1; }
}

.lum-lightbox {
  position: fixed;
  display: none;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.lum-lightbox.lum-open {
  display: block;
}

.lum-lightbox.lum-opening, .lum-lightbox.lum-closing {
  animation: lum-noop 1ms;
}

.lum-lightbox-inner {
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;

  overflow: hidden;
}

.lum-lightbox-loader {
  display: none;
}

.lum-lightbox-inner img {
  max-width: 100%;
  max-height: 100%;
}

.lum-lightbox-image-wrapper {
  vertical-align: middle;
  display: table-cell;
  text-align: center;
}
`;

export default function injectBaseStylesheet() {
  if (document.querySelector(".lum-base-styles")) {
    return;
  }

  const styleEl = document.createElement("style");
  styleEl.type = "text/css";
  styleEl.classList.add("lum-base-styles");

  styleEl.appendChild(document.createTextNode(RULES));

  const head = document.head;
  head.insertBefore(styleEl, head.firstChild);
}


// This file exports the Luminous exports in the ES6 Module Spec, which is compatible with the commonjs spec
import Luminous from "./Luminous";
import LuminousGallery from "./LuminousGallery";

export { Luminous, LuminousGallery };


// This file is used for the standalone browser build

import Luminous from "./Luminous";
import LuminousGallery from "./LuminousGallery";

global.Luminous = Luminous;
global.LuminousGallery = LuminousGallery;


// This is not really a perfect check, but works fine.
// From http://stackoverflow.com/questions/384286
const HAS_DOM_2 = typeof HTMLElement === "object";

export function isDOMElement(obj) {
  return HAS_DOM_2
    ? obj instanceof HTMLElement
    : obj &&
        typeof obj === "object" &&
        obj !== null &&
        obj.nodeType === 1 &&
        typeof obj.nodeName === "string";
}

export function addClasses(el, classNames) {
  classNames.forEach(function(className) {
    el.classList.add(className);
  });
}

export function removeClasses(el, classNames) {
  classNames.forEach(function(className) {
    el.classList.remove(className);
  });
}


export default function throwIfMissing() {
  throw new Error("Missing parameter");
}


import Lightbox from "../src/js/Lightbox";

beforeEach(function() {
  let anchor = document.createElement("a");
  anchor.href = "http://website.com/image.png";
  anchor.classList.add("test-anchor");

  document.body.appendChild(anchor);
});

afterEach(function() {
  let anchor = document.querySelector(".test-anchor");

  document.body.removeChild(anchor);
});

describe("Lightbox", () => {
  it("throws if no arguments are passed", () => {
    expect(() => {
      new Lightbox();
    }).toThrowError(Error, "Missing parameter");
  });

  it("throws if required arguments are missing", () => {
    expect(() => {
      new Lightbox({ namespace: "test", parentEl: document.body });
    }).toThrowError(Error, "Missing parameter");
  });

  it("does not throw if all required arguments are passed", () => {
    expect(() => {
      let triggerEl = document.querySelector(".test-anchor");

      new Lightbox({
        namespace: "test",
        parentEl: document.body,
        triggerEl: triggerEl,
        sourceAttribute: "href",
        caption: null
      });
    }).not.toThrowError();
  });

  it("throws if passed `parentEl` is not a DOM element", () => {
    expect(() => {
      let triggerEl = document.querySelector(".test-anchor");

      new Lightbox({
        namespace: "test",
        parentEl: ".not-an-element",
        triggerEl: triggerEl,
        sourceAttribute: "href",
        caption: null
      });
    }).toThrowError(
      TypeError,
      "`new Lightbox` requires a DOM element passed as `parentEl`."
    );
  });

  it("assigns the correct class to its element", () => {
    let triggerEl = document.querySelector(".test-anchor");

    let lightbox = new Lightbox({
      namespace: "test-namespace",
      parentEl: document.body,
      triggerEl: triggerEl,
      sourceAttribute: "href",
      caption: null
    });
    lightbox.open();
    lightbox.close();

    expect(
      document.body.querySelector(".test-namespace-lightbox")
    ).not.toBeNull();
  });

  it("appends its element to the specified `appendToEl`", () => {
    let demoDiv = document.createElement("div");
    demoDiv.classList.add("demo-div");
    document.body.appendChild(demoDiv);

    let triggerEl = document.querySelector(".test-anchor");

    let lightbox = new Lightbox({
      namespace: "lum",
      parentEl: demoDiv,
      triggerEl: triggerEl,
      sourceAttribute: "href",
      caption: null
    });
    lightbox.open();
    lightbox.close();

    expect(
      document.body.querySelector(".demo-div > .lum-lightbox")
    ).not.toBeNull();
  });

  it("cleans up its element when destroyed", () => {
    let triggerEl = document.querySelector(".test-anchor");

    let lightbox = new Lightbox({
      namespace: "to-destroy",
      parentEl: document.body,
      triggerEl: triggerEl,
      sourceAttribute: "href",
      caption: null
    });
    lightbox.open();
    lightbox.close();
    lightbox.destroy();

    expect(document.body.querySelector(".to-destroy-lightbox")).toBeNull();
  });

  it("adds the `imgix-fluid` param if configured", () => {
    let triggerEl = document.querySelector(".test-anchor");

    let lightbox = new Lightbox({
      namespace: "fluid",
      parentEl: document.body,
      triggerEl: triggerEl,
      sourceAttribute: "href",
      caption: null,
      includeImgixJSClass: true
    });
    lightbox.open();
    lightbox.close();

    expect(lightbox.el.querySelector(".imgix-fluid")).not.toBeNull();
  });
});


import Luminous from "../src/js/Luminous";

beforeEach(function() {
  let anchor = document.createElement("a");
  anchor.href = "http://website.com/image.png";
  anchor.classList.add("test-anchor");

  document.body.appendChild(anchor);
});

afterEach(function() {
  let anchor = document.querySelector(".test-anchor");

  document.body.removeChild(anchor);
});

describe("Core", () => {
  it("throws if no arguments are passed", () => {
    expect(() => {
      new Luminous();
    }).toThrowError(
      TypeError,
      "`new Luminous` requires a DOM element as its first argument."
    );
  });

  it("throws if the first argument is not a DOM element", () => {
    expect(() => {
      new Luminous(".some-selector");
    }).toThrowError(
      TypeError,
      "`new Luminous` requires a DOM element as its first argument."
    );
  });

  it("returns an instance of `Luminous` when correctly instantiated", () => {
    let anchor = document.querySelector(".test-anchor");
    let lum = new Luminous(anchor);

    expect(lum.constructor).toBe(Luminous);
  });

  it("executes the `onOpen` callback when present", () => {
    let called = false;
    function openCallback() {
      called = true;
    }

    let anchor = document.querySelector(".test-anchor");
    let lum = new Luminous(anchor, { onOpen: openCallback });

    lum.open();
    expect(called).toBe(true);
  });

  it("executes the `onClose` callback when present", () => {
    let called = false;
    function closeCallback() {
      called = true;
    }

    let anchor = document.querySelector(".test-anchor");
    let lum = new Luminous(anchor, { onClose: closeCallback });

    lum.open();
    lum.close();
    expect(called).toBe(true);
  });
});

describe("Configuration", () => {
  it("sets up settings object when no options are passed", () => {
    let anchor = document.querySelector(".test-anchor");
    let lum = new Luminous(anchor);

    expect(lum.settings).toBeDefined();
  });

  it("applies proper setting defaults when no options are passed", () => {
    let anchor = document.querySelector(".test-anchor");
    let lum = new Luminous(anchor);

    expect(lum.settings.sourceAttribute).toBe("href");
  });

  it("accepts custom settings", () => {
    let anchor = document.querySelector(".test-anchor");
    let lum = new Luminous(anchor, { namespace: "not-the-default" });

    expect(lum.settings.namespace).toBe("not-the-default");
  });

  it("leaves settings defaults in place when custom settings are passed", () => {
    let anchor = document.querySelector(".test-anchor");
    let lum = new Luminous(anchor, { namespace: "it-does-not-matter" });

    expect(lum.settings.openTrigger).toBe("click");
  });
});

describe("#destroy", () => {
  it("does not throw if the Lightbox instance has never been `#open`ed", () => {
    let anchor = document.querySelector(".test-anchor");
    let lum = new Luminous(anchor);

    expect(function() {
      lum.destroy();
    }).not.toThrow();
  });
});


/*
	By André Rinas, www.andrerinas.de
	Available for use under the MIT License
	1.13.0
*/
!function(X,N,Y,t){"use strict";X.fn.simpleLightbox=function(d){d=X.extend({sourceAttr:"href",overlay:!0,spinner:!0,nav:!0,navText:["&lsaquo;","&rsaquo;"],captions:!0,captionDelay:0,captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionClass:"",close:!0,closeText:"×",swipeClose:!0,showCounter:!0,fileExt:"png|jpg|jpeg|gif",animationSlide:!0,animationSpeed:250,preloading:!0,enableKeyboard:!0,loop:!0,rel:!1,docClose:!0,swipeTolerance:50,className:"simple-lightbox",widthRatio:.8,heightRatio:.9,scaleImageToRatio:!1,disableRightClick:!1,disableScroll:!0,alertError:!0,alertErrorMessage:"Image not found, next image will be loaded",additionalHtml:!1,history:!0},d),N.navigator.pointerEnabled||N.navigator.msPointerEnabled;var p,t,l=0,r=0,h=X(),n=function(){var t=Y.body||Y.documentElement;return""===(t=t.style).WebkitTransition?"-webkit-":""===t.MozTransition?"-moz-":""===t.OTransition?"-o-":""===t.transition&&""},g=!1,u=[],f=d.rel&&!1!==d.rel?(t=d.rel,X(this).filter(function(){return X(this).attr("rel")===t})):this,m=(n=n(),0),v=!1!==n,i="pushState"in history,x=!1,a=N.location,c=function(){return a.hash.substring(1)},b=c(),y=function(){c();var t="pid="+(S+1),e=a.href.split("#")[0]+"#"+t;i?history[x?"replaceState":"pushState"]("",Y.title,e):x?a.replace(e):a.hash=t,x=!0},w="simplelb",e=X("<div>").addClass("sl-overlay"),o=X("<button>").addClass("sl-close").html(d.closeText),E=X("<div>").addClass("sl-spinner").html("<div></div>"),T=X("<div>").addClass("sl-navigation").html('<button class="sl-prev">'+d.navText[0]+'</button><button class="sl-next">'+d.navText[1]+"</button>"),s=X("<div>").addClass("sl-counter").html('<span class="sl-current"></span>/<span class="sl-total"></span>'),C=!1,S=0,k=X("<div>").addClass("sl-caption "+d.captionClass+" pos-"+d.captionPosition),I=X("<div>").addClass("sl-image"),q=X("<div>").addClass("sl-wrapper").addClass(d.className),D=function(t){t.trigger(X.Event("show.simplelightbox")),d.disableScroll&&(m=W("hide")),q.appendTo("body"),I.appendTo(q),d.overlay&&e.appendTo(X("body")),C=!0,S=f.index(t),h=X("<img/>").hide().attr("src",t.attr(d.sourceAttr)),-1==u.indexOf(t.attr(d.sourceAttr))&&u.push(t.attr(d.sourceAttr)),I.html("").attr("style",""),h.appendTo(I),O(),e.fadeIn("fast"),X(".sl-close").fadeIn("fast"),E.show(),T.fadeIn("fast"),X(".sl-wrapper .sl-counter .sl-current").text(S+1),s.fadeIn("fast"),M(),d.preloading&&P(),setTimeout(function(){t.trigger(X.Event("shown.simplelightbox"))},d.animationSpeed)},M=function(s){if(h.length){var l=new Image,r=X(N).width()*d.widthRatio,c=X(N).height()*d.heightRatio;l.src=h.attr("src"),X(l).on("error",function(t){f.eq(S).trigger(X.Event("error.simplelightbox")),g=!(C=!1),E.hide(),d.alertError&&alert(d.alertErrorMessage),z(1==s||-1==s?s:1)}),l.onload=function(){void 0!==s&&f.eq(S).trigger(X.Event("changed.simplelightbox")).trigger(X.Event((1===s?"nextDone":"prevDone")+".simplelightbox")),d.history&&(x?p=setTimeout(y,800):y()),-1==u.indexOf(h.attr("src"))&&u.push(h.attr("src"));var t=l.width,e=l.height;if(d.scaleImageToRatio||r<t||c<e){var i=r/c<t/e?t/r:e/c;t/=i,e/=i}X(".sl-image").css({top:(X(N).height()-e)/2+"px",left:(X(N).width()-t-m)/2+"px"}),E.hide(),h.css({width:t+"px",height:e+"px"}).fadeIn("fast"),g=!0;var n,a="self"==d.captionSelector?f.eq(S):f.eq(S).find(d.captionSelector);if(n="data"==d.captionType?a.data(d.captionsData):"text"==d.captionType?a.html():a.prop(d.captionsData),d.loop||(0===S&&X(".sl-prev").hide(),S>=f.length-1&&X(".sl-next").hide(),0<S&&X(".sl-prev").show(),S<f.length-1&&X(".sl-next").show()),1==f.length&&X(".sl-prev, .sl-next").hide(),1==s||-1==s){var o={opacity:1};d.animationSlide&&(v?(A(0,100*s+"px"),setTimeout(function(){A(d.animationSpeed/1e3,"0px")},50)):o.left=parseInt(X(".sl-image").css("left"))+100*s+"px"),X(".sl-image").animate(o,d.animationSpeed,function(){C=!1,R(n)})}else C=!1,R(n);d.additionalHtml&&0===X(".sl-additional-html").length&&X("<div>").html(d.additionalHtml).addClass("sl-additional-html").appendTo(X(".sl-image"))}}},R=function(t){""!==t&&void 0!==t&&d.captions&&k.html(t).hide().appendTo(X(".sl-image")).delay(d.captionDelay).fadeIn("fast")},A=function(t,e){var i={};i[n+"transform"]="translateX("+e+")",i[n+"transition"]=n+"transform "+t+"s linear",X(".sl-image").css(i)},O=function(){X(N).on("resize."+w,M),X(Y).on("click."+w+" touchstart."+w,".sl-close",function(t){t.preventDefault(),g&&L()}),d.history&&setTimeout(function(){X(N).on("hashchange."+w,function(){g&&c()===b&&L()})},40),T.on("click."+w,"button",function(t){t.preventDefault(),l=0,z(X(this).hasClass("sl-next")?1:-1)});var e=0,i=0,n=0,a=0,o=!1,s=0;I.on("touchstart."+w+" mousedown."+w,function(t){return!!o||(v&&(s=parseInt(I.css("left"))),o=!0,r=l=0,e=t.originalEvent.pageX||t.originalEvent.touches[0].pageX,n=t.originalEvent.pageY||t.originalEvent.touches[0].pageY,!1)}).on("touchmove."+w+" mousemove."+w+" pointermove MSPointerMove",function(t){if(!o)return!0;t.preventDefault(),i=t.originalEvent.pageX||t.originalEvent.touches[0].pageX,a=t.originalEvent.pageY||t.originalEvent.touches[0].pageY,l=e-i,r=n-a,d.animationSlide&&(v?A(0,-l+"px"):I.css("left",s-l+"px"))}).on("touchend."+w+" mouseup."+w+" touchcancel."+w+" mouseleave."+w+" pointerup pointercancel MSPointerUp MSPointerCancel",function(t){if(o){var e=!(o=!1);d.loop||(0===S&&l<0&&(e=!1),S>=f.length-1&&0<l&&(e=!1)),Math.abs(l)>d.swipeTolerance&&e?z(0<l?1:-1):d.animationSlide&&(v?A(d.animationSpeed/1e3,"0px"):I.animate({left:s+"px"},d.animationSpeed/2)),d.swipeClose&&50<Math.abs(r)&&Math.abs(l)<d.swipeTolerance&&L()}})},P=function(){var t=S+1<0?f.length-1:S+1>=f.length-1?0:S+1,e=S-1<0?f.length-1:S-1>=f.length-1?0:S-1;X("<img />").attr("src",f.eq(t).attr(d.sourceAttr)).on("load",function(){-1==u.indexOf(X(this).attr("src"))&&u.push(X(this).attr("src")),f.eq(S).trigger(X.Event("nextImageLoaded.simplelightbox"))}),X("<img />").attr("src",f.eq(e).attr(d.sourceAttr)).on("load",function(){-1==u.indexOf(X(this).attr("src"))&&u.push(X(this).attr("src")),f.eq(S).trigger(X.Event("prevImageLoaded.simplelightbox"))})},z=function(e){f.eq(S).trigger(X.Event("change.simplelightbox")).trigger(X.Event((1===e?"next":"prev")+".simplelightbox"));var t=S+e;if(!(C||(t<0||t>=f.length)&&!1===d.loop)){S=t<0?f.length-1:t>f.length-1?0:t,X(".sl-wrapper .sl-counter .sl-current").text(S+1);var i={opacity:0};d.animationSlide&&(v?A(d.animationSpeed/1e3,-100*e-l+"px"):i.left=parseInt(X(".sl-image").css("left"))+-100*e+"px"),X(".sl-image").animate(i,d.animationSpeed,function(){setTimeout(function(){var t=f.eq(S);h.attr("src",t.attr(d.sourceAttr)),-1==u.indexOf(t.attr(d.sourceAttr))&&E.show(),X(".sl-caption").remove(),M(e),d.preloading&&P()},100)})}},L=function(){if(!C){var t=f.eq(S),e=!1;t.trigger(X.Event("close.simplelightbox")),d.history&&(i?history.pushState("",Y.title,a.pathname+a.search):a.hash="",clearTimeout(p)),X(".sl-image img, .sl-overlay, .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter").fadeOut("fast",function(){d.disableScroll&&W("show"),X(".sl-wrapper, .sl-overlay").remove(),T.off("click","button"),X(Y).off("click."+w,".sl-close"),X(N).off("resize."+w),X(N).off("hashchange."+w),e||t.trigger(X.Event("closed.simplelightbox")),e=!0}),h=X(),C=g=!1}},W=function(t){var e=0;if("hide"==t){var i=N.innerWidth;if(!i){var n=Y.documentElement.getBoundingClientRect();i=n.right-Math.abs(n.left)}if(Y.body.clientWidth<i){var a=Y.createElement("div"),o=parseInt(X("body").css("padding-right"),10);a.className="sl-scrollbar-measure",X("body").append(a),e=a.offsetWidth-a.clientWidth,X(Y.body)[0].removeChild(a),X("body").data("padding",o),0<e&&X("body").addClass("hidden-scroll").css({"padding-right":o+e})}}else X("body").removeClass("hidden-scroll").css({"padding-right":X("body").data("padding")});return e};return d.close&&o.appendTo(q),d.showCounter&&1<f.length&&(s.appendTo(q),s.find(".sl-total").text(f.length)),d.nav&&T.appendTo(q),d.spinner&&E.appendTo(q),f.on("click."+w,function(t){if(function(t){if(!d.fileExt)return!0;var e=X(t).attr(d.sourceAttr).match(/\.([0-9a-z]+)(?=[?#])|(\.)(?:[\w]+)$/gim);return e&&"a"==X(t).prop("tagName").toLowerCase()&&new RegExp(".("+d.fileExt+")$","i").test(e)}(this)){if(t.preventDefault(),C)return!1;D(X(this))}}),X(Y).on("click."+w+" touchstart."+w,function(t){g&&d.docClose&&0===X(t.target).closest(".sl-image").length&&0===X(t.target).closest(".sl-navigation").length&&L()}),d.disableRightClick&&X(Y).on("contextmenu",".sl-image img",function(t){return!1}),d.enableKeyboard&&X(Y).on("keyup."+w,function(t){if(l=0,g){t.preventDefault();var e=t.keyCode;27==e&&L(),37!=e&&39!=t.keyCode||z(39==t.keyCode?1:-1)}}),this.open=function(t){t=t||X(this[0]),D(t)},this.next=function(){z(1)},this.prev=function(){z(-1)},this.close=function(){L()},this.destroy=function(){X(Y).off("click."+w).off("keyup."+w),L(),X(".sl-overlay, .sl-wrapper").remove(),this.off("click")},this.refresh=function(){this.destroy(),X(this).simpleLightbox(d)},this}}(jQuery,window,document);
