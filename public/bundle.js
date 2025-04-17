/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Landing/./src/scss/main.scss?");

/***/ }),

/***/ "./node_modules/tiny-cookie/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/tiny-cookie/es/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isEnabled\": function() { return /* binding */ isEnabled; },\n/* harmony export */   \"get\": function() { return /* binding */ get; },\n/* harmony export */   \"getAll\": function() { return /* binding */ getAll; },\n/* harmony export */   \"set\": function() { return /* binding */ set; },\n/* harmony export */   \"getRaw\": function() { return /* binding */ getRaw; },\n/* harmony export */   \"setRaw\": function() { return /* binding */ setRaw; },\n/* harmony export */   \"remove\": function() { return /* binding */ remove; },\n/* harmony export */   \"isCookieEnabled\": function() { return /* binding */ isEnabled; },\n/* harmony export */   \"getCookie\": function() { return /* binding */ get; },\n/* harmony export */   \"getAllCookies\": function() { return /* binding */ getAll; },\n/* harmony export */   \"setCookie\": function() { return /* binding */ set; },\n/* harmony export */   \"getRawCookie\": function() { return /* binding */ getRaw; },\n/* harmony export */   \"setRawCookie\": function() { return /* binding */ setRaw; },\n/* harmony export */   \"removeCookie\": function() { return /* binding */ remove; }\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./node_modules/tiny-cookie/es/util.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n // Check if the browser cookie is enabled.\n\nfunction isEnabled() {\n  var key = '@key@';\n  var value = '1';\n  var re = new RegExp(\"(?:^|; )\" + key + \"=\" + value + \"(?:;|$)\");\n  document.cookie = key + \"=\" + value + \";path=/\";\n  var enabled = re.test(document.cookie);\n\n  if (enabled) {\n    // eslint-disable-next-line\n    remove(key);\n  }\n\n  return enabled;\n} // Get the cookie value by key.\n\n\nfunction get(key, decoder) {\n  if (decoder === void 0) {\n    decoder = decodeURIComponent;\n  }\n\n  if (typeof key !== 'string' || !key) {\n    return null;\n  }\n\n  var reKey = new RegExp(\"(?:^|; )\" + (0,_util__WEBPACK_IMPORTED_MODULE_0__.escapeRe)(key) + \"(?:=([^;]*))?(?:;|$)\");\n  var match = reKey.exec(document.cookie);\n\n  if (match === null) {\n    return null;\n  }\n\n  return typeof decoder === 'function' ? decoder(match[1]) : match[1];\n} // The all cookies\n\n\nfunction getAll(decoder) {\n  if (decoder === void 0) {\n    decoder = decodeURIComponent;\n  }\n\n  var reKey = /(?:^|; )([^=]+?)(?:=([^;]*))?(?:;|$)/g;\n  var cookies = {};\n  var match;\n  /* eslint-disable no-cond-assign */\n\n  while (match = reKey.exec(document.cookie)) {\n    reKey.lastIndex = match.index + match.length - 1;\n    cookies[match[1]] = typeof decoder === 'function' ? decoder(match[2]) : match[2];\n  }\n\n  return cookies;\n} // Set a cookie.\n\n\nfunction set(key, value, encoder, options) {\n  if (encoder === void 0) {\n    encoder = encodeURIComponent;\n  }\n\n  if (typeof encoder === 'object' && encoder !== null) {\n    /* eslint-disable no-param-reassign */\n    options = encoder;\n    encoder = encodeURIComponent;\n    /* eslint-enable no-param-reassign */\n  }\n\n  var attrsStr = (0,_util__WEBPACK_IMPORTED_MODULE_0__.convert)(options || {});\n  var valueStr = typeof encoder === 'function' ? encoder(value) : value;\n  var newCookie = key + \"=\" + valueStr + attrsStr;\n  document.cookie = newCookie;\n} // Remove a cookie by the specified key.\n\n\nfunction remove(key, options) {\n  var opts = {\n    expires: -1\n  };\n\n  if (options) {\n    opts = _extends({}, options, opts);\n  }\n\n  return set(key, 'a', opts);\n} // Get the cookie's value without decoding.\n\n\nfunction getRaw(key) {\n  return get(key, null);\n} // Set a cookie without encoding the value.\n\n\nfunction setRaw(key, value, options) {\n  return set(key, value, null, options);\n}\n\n\n\n//# sourceURL=webpack://Landing/./node_modules/tiny-cookie/es/index.js?");

/***/ }),

/***/ "./node_modules/tiny-cookie/es/util.js":
/*!*********************************************!*\
  !*** ./node_modules/tiny-cookie/es/util.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hasOwn\": function() { return /* binding */ hasOwn; },\n/* harmony export */   \"escapeRe\": function() { return /* binding */ escapeRe; },\n/* harmony export */   \"computeExpires\": function() { return /* binding */ computeExpires; },\n/* harmony export */   \"convert\": function() { return /* binding */ convert; }\n/* harmony export */ });\nfunction hasOwn(obj, key) {\n  return Object.prototype.hasOwnProperty.call(obj, key);\n} // Escape special characters.\n\n\nfunction escapeRe(str) {\n  return str.replace(/[.*+?^$|[\\](){}\\\\-]/g, '\\\\$&');\n} // Return a future date by the given string.\n\n\nfunction computeExpires(str) {\n  var lastCh = str.charAt(str.length - 1);\n  var value = parseInt(str, 10);\n  var expires = new Date();\n\n  switch (lastCh) {\n    case 'Y':\n      expires.setFullYear(expires.getFullYear() + value);\n      break;\n\n    case 'M':\n      expires.setMonth(expires.getMonth() + value);\n      break;\n\n    case 'D':\n      expires.setDate(expires.getDate() + value);\n      break;\n\n    case 'h':\n      expires.setHours(expires.getHours() + value);\n      break;\n\n    case 'm':\n      expires.setMinutes(expires.getMinutes() + value);\n      break;\n\n    case 's':\n      expires.setSeconds(expires.getSeconds() + value);\n      break;\n\n    default:\n      expires = new Date(str);\n  }\n\n  return expires;\n} // Convert an object to a cookie option string.\n\n\nfunction convert(opts) {\n  var res = ''; // eslint-disable-next-line\n\n  for (var key in opts) {\n    if (hasOwn(opts, key)) {\n      if (/^expires$/i.test(key)) {\n        var expires = opts[key];\n\n        if (typeof expires !== 'object') {\n          expires += typeof expires === 'number' ? 'D' : '';\n          expires = computeExpires(expires);\n        }\n\n        res += \";\" + key + \"=\" + expires.toUTCString();\n      } else if (/^secure$/.test(key)) {\n        if (opts[key]) {\n          res += \";\" + key;\n        }\n      } else {\n        res += \";\" + key + \"=\" + opts[key];\n      }\n    }\n  }\n\n  if (!hasOwn(opts, 'path')) {\n    res += ';path=/';\n  }\n\n  return res;\n}\n\n\n\n//# sourceURL=webpack://Landing/./node_modules/tiny-cookie/es/util.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var tiny_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-cookie */ \"./node_modules/tiny-cookie/es/index.js\");\n\n\n\n\n(function header() {\n  const $header = document.querySelector('.header');\n  const $headerToggleBtn = document.querySelector('.btn-toggle');\n\n  $headerToggleBtn.addEventListener('click', () => {\n    $header.classList.toggle('menu-open');\n  });\n\n  if (!$header.classList.contains('header-blue')) {\n    window.addEventListener('scroll', () => {\n      if (window.top.scrollY > 50) {\n        $header.classList.add('header-blue');\n      } else {\n        $header.classList.remove('header-blue');\n      }\n    });\n  }\n})();\n\n(function cookies() {\n  const cookiesNames = {\n    isCookiesPopup: 'COOKIES_POPUP',\n    amplitudeAnalytics: 'AMPLITUDE_ANALYTICS',\n    googleAnalytics: 'GOOGLE_ANALYTICS'\n  };\n\n  const $cookies = document.getElementById('cookies');\n  const $cookiesDialog = document.getElementById('cookies-dialog');\n\n  const $cookiesAdjustBtn = document.getElementById('cookies-adjust-btn');\n  const $cookiesAcceptBtn = document.getElementById('cookies-accept-btn');\n  const $cookiesCloseBtn = document.getElementById('cookies-close-btn');\n  const $cookiesSaveBtn = document.getElementById('cookies-save-btn');\n\n  const $googleAnalyticsCheckbox = document.getElementById('google-analytics');\n  // const $amplitudeAnalyticsCheckbox = document.getElementById('amplitude-analytics');\n\n  let isCookiesPopup = (0,tiny_cookie__WEBPACK_IMPORTED_MODULE_1__.get)(cookiesNames.isCookiesPopup, JSON.parse);\n  // let amplitudeAnalytics = get(cookiesNames.amplitudeAnalytics, JSON.parse);\n  let googleAnalytics = (0,tiny_cookie__WEBPACK_IMPORTED_MODULE_1__.get)(cookiesNames.googleAnalytics, JSON.parse);\n\n  const isCookieExist = (cookie) => {\n    return cookie === null || cookie\n  }\n\n  if (isCookieExist(isCookiesPopup)) {\n    $cookies.style.display = 'flex';\n  }\n\n  $cookiesAdjustBtn.addEventListener('click', () => {\n    $cookies.style.display = 'none';\n    $cookiesDialog.style.display = 'flex';\n  });\n\n  $cookiesAcceptBtn.addEventListener('click', () => {\n    // amplitudeAnalytics = true;\n    // set(cookiesNames.amplitudeAnalytics, true, JSON.parse);\n    googleAnalytics = true;\n    (0,tiny_cookie__WEBPACK_IMPORTED_MODULE_1__.set)(cookiesNames.googleAnalytics, true, JSON.parse);\n    isCookiesPopup = false;\n    (0,tiny_cookie__WEBPACK_IMPORTED_MODULE_1__.set)(cookiesNames.isCookiesPopup, false, JSON.parse);\n    $cookies.style.display = 'none';\n  });\n\n  $cookiesCloseBtn.addEventListener('click', () => {\n    $cookies.style.display = 'flex';\n    $cookiesDialog.style.display = 'none';\n  });\n\n  $cookiesSaveBtn.addEventListener('click', () => {\n    // set($amplitudeAnalyticsCheckbox.checked, true, JSON.parse);\n    // amplitudeAnalytics = $amplitudeAnalyticsCheckbox.checked;\n    (0,tiny_cookie__WEBPACK_IMPORTED_MODULE_1__.set)($googleAnalyticsCheckbox.checked, true, JSON.parse);\n    googleAnalytics = $googleAnalyticsCheckbox.checked;\n    (0,tiny_cookie__WEBPACK_IMPORTED_MODULE_1__.set)(cookiesNames.isCookiesPopup, false, JSON.parse);\n    $cookiesDialog.style.display = 'none';\n  });\n})();\n\n\n(function initVideo() {\n  const $iframe = document.getElementById('video');\n  const $openVideoBtn = document.getElementById('play-video');\n  const $videoPopup = document.getElementById('video-popup');\n  let player;\n\n  if ($iframe) {\n    player = new Vimeo.Player($iframe);\n\n    $openVideoBtn.addEventListener('click', () => {\n      $videoPopup.classList.add('show');\n      player.play();\n    });\n\n    $videoPopup.addEventListener('click', (e) => {\n      e.stopPropagation();\n      player.pause();\n      $videoPopup.classList.remove('show');\n    });\n\n    document.querySelector('#video-popup .popup__close').addEventListener('click', () => {\n      player.pause();\n      $videoPopup.classList.remove('show');\n    });\n  }\n})();\n\n\n//# sourceURL=webpack://Landing/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;