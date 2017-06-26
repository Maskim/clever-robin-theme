webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./fonts/robin_theme_fonts.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DIN_DIN_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DIN_DIN_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__DIN_DIN_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DIN_Alternate_DIN_Alternate_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DIN_Alternate_DIN_Alternate_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__DIN_Alternate_DIN_Alternate_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Butler_Butler_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Butler_Butler_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Butler_Butler_scss__);




// CONCATENATED MODULE: ./styleguide.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_main_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scss_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_styleguide_scss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_styleguide_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scss_styleguide_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_svgxhr__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_svgxhr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__svg_svgxhr__);
/* Styles */





/* SVG */


let __svg__ = { filename: __webpack_require__.p +"svg/main.svg" };

// require basic or custom sprite loader
__WEBPACK_IMPORTED_MODULE_3__svg_svgxhr___default.a(__svg__);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Load svg via ajax
 * @param  {string} url path to svg sprite
 * @generator: webpack-svgstore-plugin
 * @see: https://www.npmjs.com/package/webpack-svgstore-plugin
 * @return {[type]}     [description]
 */
var svgXHR = function(options) {
  var url = false;
  var baseUrl = undefined;

  options && options.filename
    ? url = '/themes/custom/robin_theme/dist/' + options.filename
    : null;

  if (!url) return false;
  var _ajax = new XMLHttpRequest();
  var _fullPath;

  if (typeof XDomainRequest !== 'undefined') {
    _ajax = new XDomainRequest();
  }

  if (typeof baseUrl === 'undefined') {
    if (typeof window.baseUrl !== 'undefined') {
      baseUrl = window.baseUrl;
    } else {
      baseUrl = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }
  }

  _fullPath = (baseUrl + '/' + url).replace(/([^:]\/)\/+/g, '$1');
  _ajax.open('GET', _fullPath, true);
  _ajax.onprogress = function() {};
  _ajax.onload = function() {
    if(!_ajax.responseText || _ajax.responseText.substr(0, 4) !== "<svg") {
      throw Error("Invalid SVG Response");
    }
    if(_ajax.status < 200 || _ajax.status >= 300) {
      return;
    }
    var div = document.createElement('div');
    div.innerHTML = _ajax.responseText;
    document.body.insertBefore(div, document.body.childNodes[0]);
  };
  _ajax.send();
};

module.exports = svgXHR;


/***/ })
],[0]);
//# sourceMappingURL=styleguide.js.map