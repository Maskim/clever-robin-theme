!function(e){function __webpack_require__(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,__webpack_require__),o.l=!0,o.exports}var n={};__webpack_require__.m=e,__webpack_require__.c=n,__webpack_require__.d=function(e,n,r){__webpack_require__.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},__webpack_require__.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(n,"a",n),n},__webpack_require__.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=6)}([function(e,n,r){"use strict";var o=r(1),t=(r.n(o),r(2)),i=(r.n(t),r(3));r.n(i)},function(e,n){},function(e,n){},function(e,n){},function(e,n){},,function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=(r(0),r(4)),t=(r.n(o),r(7)),i=(r.n(t),r(8));r.n(i).a({path:"./svg/*.svg",name:"svg/main.svg"})},function(e,n){},function(e,n,r){"use strict";var o=function(e){var n=!1,r=void 0;if(e&&e.filename&&(n=e.filename),!n)return!1;var o,t=new XMLHttpRequest;"undefined"!=typeof XDomainRequest&&(t=new XDomainRequest),void 0===r&&(r=void 0!==window.baseUrl?window.baseUrl:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")),o=(r+"/"+n).replace(/([^:]\/)\/+/g,"$1"),t.open("GET",o,!0),t.onprogress=function(){},t.onload=function(){if(!t.responseText||"<svg"!==t.responseText.substr(0,4))throw Error("Invalid SVG Response");if(!(t.status<200||t.status>=300)){var e=document.createElement("div");e.innerHTML=t.responseText,document.body.insertBefore(e,document.body.childNodes[0])}},t.send()};e.exports=o}]);
//# sourceMappingURL=styleguide.js.map