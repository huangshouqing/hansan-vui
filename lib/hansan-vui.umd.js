(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hansan-vui"] = factory();
	else
		root["hansan-vui"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0060":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "135f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_style_index_0_id_7b4f8d4b_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9811");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_style_index_0_id_7b4f8d4b_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_style_index_0_id_7b4f8d4b_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_style_index_0_id_7b4f8d4b_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1704":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "30c4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_popover_vue_vue_type_style_index_0_id_608a225f_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f1e8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_popover_vue_vue_type_style_index_0_id_608a225f_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_popover_vue_vue_type_style_index_0_id_608a225f_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_popover_vue_vue_type_style_index_0_id_608a225f_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3901":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3966":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_75db27cb_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("80ff");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_75db27cb_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_75db27cb_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_75db27cb_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4230":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6ed9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7df8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_popmessage_vue_vue_type_style_index_0_id_5180bbbe_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6ed9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_popmessage_vue_vue_type_style_index_0_id_5180bbbe_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_popmessage_vue_vue_type_style_index_0_id_5180bbbe_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_popmessage_vue_vue_type_style_index_0_id_5180bbbe_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "80ff":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "9811":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "993e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_319bcaa0_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d1c9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_319bcaa0_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_319bcaa0_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_319bcaa0_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9ad0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9d6f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_id_9f6e4d24_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9ad0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_id_9f6e4d24_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_id_9f6e4d24_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_id_9f6e4d24_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ae39":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_id_705d1490_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1704");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_id_705d1490_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_id_705d1490_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_id_705d1490_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c2c9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_style_index_0_id_b5f6def0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4230");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_style_index_0_id_b5f6def0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_style_index_0_id_b5f6def0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_style_index_0_id_b5f6def0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d1c9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f109":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_style_index_0_id_7604f689_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0060");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_style_index_0_id_7604f689_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_style_index_0_id_7604f689_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_style_index_0_id_7604f689_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f1e8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "hButton", function() { return /* reexport */ packages_button; });
__webpack_require__.d(__webpack_exports__, "hMessage", function() { return /* reexport */ packages_message; });
__webpack_require__.d(__webpack_exports__, "hModal", function() { return /* reexport */ packages_modal; });
__webpack_require__.d(__webpack_exports__, "hNotice", function() { return /* reexport */ packages_notice; });
__webpack_require__.d(__webpack_exports__, "hPopmessage", function() { return /* reexport */ packages_popmessage; });
__webpack_require__.d(__webpack_exports__, "hPopover", function() { return /* reexport */ packages_popover; });
__webpack_require__.d(__webpack_exports__, "hTable", function() { return /* reexport */ packages_table; });
__webpack_require__.d(__webpack_exports__, "hToast", function() { return /* reexport */ packages_toast; });
__webpack_require__.d(__webpack_exports__, "hEditor", function() { return /* reexport */ packages_editor; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./assets/iconfont/index.css
var iconfont = __webpack_require__("3901");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3889a586-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/button/button.vue?vue&type=template&id=75db27cb&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"button",attrs:{"disabled":_vm.disabled},on:{"click":_vm.buttonClick}},[(!_vm.plain)?[_c('button',{staticClass:"btn-normal",attrs:{"type":_vm.type,"disabled":_vm.disabled?true:false,"round":_vm.round,"size":_vm.size,"cirle":_vm.cirle}},[_vm._t("default")],2)]:_vm._e(),(_vm.plain)?[_c('button',{staticClass:"btn-Hollow",attrs:{"type":_vm.type,"disabled":_vm.disabled?true:false,"round":_vm.round,"size":_vm.size,"cirle":_vm.cirle}},[_vm._t("default")],2)]:_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/button/button.vue?vue&type=template&id=75db27cb&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/button/button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: "hButton",
  props: {
    // 按钮类型
    type: {
      type: String,
      default: "",
    },
    // 是否镂空
    plain: {
      type: Boolean,
      default: false,
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 控制圆角
    round: {
      type: Boolean,
      default: false,
    },
    //尺寸
    size: {
      type: String,
      default: "normal",
    },
    // 待做
    cirle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    buttonClick(el) {
      if (this.disabled) {
        el.stopPropagation();
        el.preventDefault();
        return
      }
      this.$emit("click");
    },
  },
});

// CONCATENATED MODULE: ./packages/button/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/button/button.vue?vue&type=style&index=0&id=75db27cb&lang=stylus&scoped=true&
var buttonvue_type_style_index_0_id_75db27cb_lang_stylus_scoped_true_ = __webpack_require__("3966");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/button/button.vue






/* normalize component */

var component = normalizeComponent(
  button_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "75db27cb",
  null
  
)

/* harmony default export */ var button_button = (component.exports);
// CONCATENATED MODULE: ./packages/button/index.js
// 导入组件，组件必须声明 name

// 为组件提供 install 安装方法，供按需引入
button_button.install = function (Vue) {
  Vue.component(button_button.name, button_button)
}
// 默认导出组件
/* harmony default export */ var packages_button = (button_button);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3889a586-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/message/message.vue?vue&type=template&id=9f6e4d24&scoped=true&
var messagevue_type_template_id_9f6e4d24_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('transition',{attrs:{"appear":"","appear-class":"fade-enter","appear-to-class":"fade-enter-to","appear-active-class":"fade-enter-active","name":"animate"}},[(_vm.show)?_c('div',{staticClass:"message",class:_vm.type,attrs:{"type":_vm.type}},[(_vm.type==='success')?_c('i',{staticClass:"iconfont icon-chenggong"}):_vm._e(),(_vm.type==='warning')?_c('i',{staticClass:"iconfont icon-jinggao"}):_vm._e(),(_vm.type==='error')?_c('i',{staticClass:"iconfont icon-cuowu"}):_vm._e(),(_vm.type==='info')?_c('i',{staticClass:"iconfont icon-zhengchang"}):_vm._e(),_c('span',{staticClass:"text"},[_vm._v(_vm._s(_vm.message))])]):_vm._e()])],1)}
var messagevue_type_template_id_9f6e4d24_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/message/message.vue?vue&type=template&id=9f6e4d24&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/message/message.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var messagevue_type_script_lang_js_ = ({
  name: "hMessage",
  props: {
    //类型
    type: {
      type: String,
      default: "info",
      validator: val => ["info", "success", "warning", "error"].includes(val)
      //['info', 'success', 'warning', 'error'] 表示type只接收这四个字符串作为参数传入message组件
    },
    //提示文本
    message: {
      type: String,
      default: ""
    },


    //停留时长
    duration: {
      type: Number,
      default: 2000
      //停留时长
    }
  },
  data() {
    return {
      show: true
    };
  },
  mounted() {
    this.handleAutoClose();
  },
  methods: {
    //执行自动关闭
    handleAutoClose() {
      setTimeout(() => {
        this.close();
      }, this.duration);
    },
    // 关闭
    close() {
      this.show = false;
      setTimeout(() => {
        this.$el.remove();
        this.$destroy();
      }, 200);
    }
  }
});

// CONCATENATED MODULE: ./packages/message/message.vue?vue&type=script&lang=js&
 /* harmony default export */ var message_messagevue_type_script_lang_js_ = (messagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/message/message.vue?vue&type=style&index=0&id=9f6e4d24&scoped=true&lang=stylus&
var messagevue_type_style_index_0_id_9f6e4d24_scoped_true_lang_stylus_ = __webpack_require__("9d6f");

// CONCATENATED MODULE: ./packages/message/message.vue






/* normalize component */

var message_component = normalizeComponent(
  message_messagevue_type_script_lang_js_,
  messagevue_type_template_id_9f6e4d24_scoped_true_render,
  messagevue_type_template_id_9f6e4d24_scoped_true_staticRenderFns,
  false,
  null,
  "9f6e4d24",
  null
  
)

/* harmony default export */ var message = (message_component.exports);
// CONCATENATED MODULE: ./packages/message/index.js
// 导入组件，组件必须声明 name

// 为组件提供 install 安装方法，供按需引入
message.install = function (Vue) {
  // 全局注册
  Vue.component(message.name, message)
  function msg (type, options) {
    // 创建构造器
    let Constructor = Vue.extend(message)
    // 创建 newMessage 实例
    let Options = {
      type: type,
      message: options.message,
      autoclose: options.autoclose,
      duration: options.duration,
    }
    let newMessage = new Constructor({
      propsData: { ...Options }
    })
    //并挂载到一个元素上。
    let vm = newMessage.$mount()
    let el = vm.$el
    el.setAttribute('data-message', Math.random())
    //将伪数组转为真数组，为了使用数组的方法
    var bodychildrens = Array.prototype.slice.call(document.body.children);
    //  let flag = true
    let arr = []
    bodychildrens.forEach(item => {
      if (item.getAttribute('data-message'))
      {
        //  flag = false
        arr.push(item)
        document.body.removeChild(item)
      }
    })

    // 把生成的提示的dom插入body中
    document.body.appendChild(el)

  }
  // 挂载到vue原型上，暴露四个方法
  let $hMessage = function (options) {
    if (!options) return
    msg(options.type, options)
  }
  $hMessage.info = function (options) {
    if (!options) return
    msg('info', options)
  };
  $hMessage.success = function (options) {
    if (!options) return
    msg('success', options)
  };
  $hMessage.error = function (options) {
    if (!options) return
    msg('error', options)
  };
  $hMessage.warning = function (options) {
    if (!options) return
    msg('warning', options)
  };
  Vue.prototype.$hMessage = $hMessage
}
// 默认导出组件
/* harmony default export */ var packages_message = (message);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3889a586-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/modal/modal.vue?vue&type=template&id=319bcaa0&scoped=true&
var modalvue_type_template_id_319bcaa0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"before-leave":_vm.beforeLeave,"leave":_vm.leave}},[(_vm.showModal)?_c('div',{staticClass:"modal-backdrop"},[_c('transition',{attrs:{"name":"table"}},[(_vm.showModal)?_c('div',{staticClass:"modal"},[_vm._t("header"),_vm._t("content"),_vm._t("footer",[_c('div',{staticClass:"modal-footer"},[_c('div',{staticStyle:{"float":"right"}},[_c('a',{staticClass:"btn-close",on:{"click":_vm.close}},[_vm._v(_vm._s(_vm.cancleText?_vm.cancleText : '取消'))]),_c('a',{staticClass:"btn-confirm",on:{"click":_vm.confirm}},[_vm._v(_vm._s(_vm.confirmText ? _vm.confirmText : '确定'))])])])])],2):_vm._e()])],1):_vm._e()])}
var modalvue_type_template_id_319bcaa0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/modal/modal.vue?vue&type=template&id=319bcaa0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/modal/modal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var modalvue_type_script_lang_js_ = ({
  name: "hModal",
  props: {
    // midal标题
    title: {
      type: String,
      default: "提示"
    },
    // modal内容
    content: {
      type: String,
      default: ""
    },

    // 确认按钮文字
    confirmText: {
      type: String,
      default: "确认"
    },
    // 取消按钮文字
    cancleText: {
      type: String,
      default: "取消"
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.showModal = true;
      // 禁止滚动行为
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "hidden";
    });
  },
  destroyed() {
    // 开启滚动行为
    document.body.style.overflowX = "auto";
    document.body.style.overflowY = "auto";
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    // 关闭按钮事件
    close() {
      this.$emit("modalCancel");
    },
    // 确定按钮事件
    confirm() {
      this.$emit("modalConfirm");
    },
    beforeEnter: function(el) {
      el.style.opacity = 0;
    },
    enter: function(el, done) {
      Velocity(el, { opacity: 1 }, { duration: 200 });
      Velocity(el, { complete: done });
    },
    beforeLeave: function(el) {
      el.style.opacity = 1;
    },
    leave: function(el, done) {
      Velocity(el, { opacity: 0 }, { duration: 200 });
      Velocity(el, { complete: done });
    }
  }
});

// CONCATENATED MODULE: ./packages/modal/modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_modalvue_type_script_lang_js_ = (modalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/modal/modal.vue?vue&type=style&index=0&id=319bcaa0&lang=stylus&scoped=true&
var modalvue_type_style_index_0_id_319bcaa0_lang_stylus_scoped_true_ = __webpack_require__("993e");

// CONCATENATED MODULE: ./packages/modal/modal.vue






/* normalize component */

var modal_component = normalizeComponent(
  modal_modalvue_type_script_lang_js_,
  modalvue_type_template_id_319bcaa0_scoped_true_render,
  modalvue_type_template_id_319bcaa0_scoped_true_staticRenderFns,
  false,
  null,
  "319bcaa0",
  null
  
)

/* harmony default export */ var modal = (modal_component.exports);
// CONCATENATED MODULE: ./packages/modal/index.js

modal.install = function (Vue) {
  Vue.component(modal.name, modal)
}
/* harmony default export */ var packages_modal = (modal);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3889a586-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/notice/notice.vue?vue&type=template&id=7b4f8d4b&scoped=true&
var noticevue_type_template_id_7b4f8d4b_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"appear":"","appear-class":"appear-enter","appear-to-class":"appear-enter-to","appear-active-class":"appear-enter-active","name":"animate"}},[(_vm.show)?_c('div',{staticClass:"notice"},[_c('span',{staticClass:"icon"},[(_vm.type==='success')?_c('i',{staticClass:"iconfont icon-chenggong"}):_vm._e(),(_vm.type==='warning')?_c('i',{staticClass:"iconfont icon-jinggao"}):_vm._e(),(_vm.type==='error')?_c('i',{staticClass:"iconfont icon-cuowu"}):_vm._e(),(_vm.type==='info')?_c('i',{staticClass:"iconfont icon-zhengchang"}):_vm._e()]),_c('div',{staticClass:"message"},[(_vm.title)?_c('p',{staticClass:"title"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_c('div',{ref:"content",staticClass:"content",attrs:{"overflow":_vm.overflow}},[_vm._v(_vm._s(_vm.message))])]),(_vm.buttonClose.isShow)?_c('span',{staticClass:"closeButton",on:{"click":_vm.handleClose}},[_c('i',{staticClass:"iconfont icon-shanchu"})]):_vm._e()]):_vm._e()])}
var noticevue_type_template_id_7b4f8d4b_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/notice/notice.vue?vue&type=template&id=7b4f8d4b&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/notice/notice.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var noticevue_type_script_lang_js_ = ({
  name: "hNotice",
  props: {
    //类型
    type: {
      type: String,
      default: "info",
      validator: val => ["info", "success", "warning", "error"].includes(val)
      //['info', 'success', 'warning', 'error'] 表示type只接收这四个字符串作为参数传入message组件
    },
    title: {
      type: String,
      default: "通知"
    },
    //提示文本
    message: {
      type: String,
      default: ""
    },
    //自动关闭
    autoclose: {
      type: Boolean,
      default: true
      //是否自动关闭
    },
    //停留时长
    duration: {
      type: Number,
      default: 2000
      //停留时长
    },
    //按钮关闭
    buttonClose: {
      type: Object,
      default() {
        return {
          buttonText: "关闭",
          isShow: true,
          callback: () => {
            console.warn("default callback");
          }
        };
      }
    }
  },
  data() {
    return {
      show: true,
      overflow: false
    };
  },
  mounted() {
    this.handleAutoClose();
    this.controlHidden();
  },
  methods: {
    //执行自动关闭
    handleAutoClose() {
      if (this.autoclose) {
        setTimeout(() => {
          this.close();
        }, this.duration);
      }
    },
    // 控制三点省略号的显示
    controlHidden() {
      this.$nextTick(() => {
        if (this.$refs.content.scrollHeight > this.$refs.content.offsetHeight) {
          this.overflow = true;
        }
      });
    },
    // 关闭
    close() {
      this.show = false;
      setTimeout(() => {
        // 销毁时要有动画必须要加这个
        this.$el.remove();
        this.$destroy();
      }, 200);
    },
    // 手动关闭
    handleClose() {
      //只有notice可以手动关闭
      this.close();
      //只有传入lcallback才能调用
      if (this.buttonClose.callback) {
        this.buttonClose.callback("传数据啦");
      } else {
        console.warn("如需使用回调，请传入callback");
      }
    }
  }
});

// CONCATENATED MODULE: ./packages/notice/notice.vue?vue&type=script&lang=js&
 /* harmony default export */ var notice_noticevue_type_script_lang_js_ = (noticevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/notice/notice.vue?vue&type=style&index=0&id=7b4f8d4b&scoped=true&lang=stylus&
var noticevue_type_style_index_0_id_7b4f8d4b_scoped_true_lang_stylus_ = __webpack_require__("135f");

// CONCATENATED MODULE: ./packages/notice/notice.vue






/* normalize component */

var notice_component = normalizeComponent(
  notice_noticevue_type_script_lang_js_,
  noticevue_type_template_id_7b4f8d4b_scoped_true_render,
  noticevue_type_template_id_7b4f8d4b_scoped_true_staticRenderFns,
  false,
  null,
  "7b4f8d4b",
  null
  
)

/* harmony default export */ var notice = (notice_component.exports);
// CONCATENATED MODULE: ./packages/notice/index.js


notice.install = function (Vue) {
  // 全局注册
  Vue.component(notice.name, notice)
  function msg (type, options, callBack) {
    // 创建构造器
    let Constructor = Vue.extend(notice)
    // 创建 newMessage 实例
    let Options = {
      type: type,
      message: options.message,
      autoclose: options.autoclose,
      duration: options.duration,
      buttonClose: {
        buttonText: options.buttonClose.buttonText,
        isShow: options.buttonClose.isShow,
        callback: callBack
      }
    }
    let newMessage = new Constructor({
      propsData: { ...Options }
    })
    //并挂载到一个元素上。
    let vm = newMessage.$mount()
    let el = vm.$el
    el.setAttribute('data-notice', Math.random())
    //将伪数组转为真数组，为了使用数组的方法
    var bodychildrens = Array.prototype.slice.call(document.body.children);
    // let flag = true
    let arr = []
    bodychildrens.forEach(item => {
      if (item.getAttribute('data-notice'))
      {
        // flag = false
        arr.push(item)
        document.body.removeChild(item)
      }
    })

    // 把生成的提示的dom插入body中
    document.body.appendChild(el)
    // flag && document.body.appendChild(el)

  }
  let $hNotice = function (options, callBack) {
    if (!options) return
    msg(options.type, options, callBack)
  }
  $hNotice.info = function (options, callBack) {
    if (!options) return
    msg('info', options, callBack)
  };
  $hNotice.success = function (options, callBack) {
    if (!options) return
    msg('success', options, callBack)
  };
  $hNotice.error = function (options, callBack) {
    if (!options) return
    msg('error', options, callBack)
  };
  $hNotice.warning = function (options, callBack) {
    if (!options) return
    msg('warning', options, callBack)
  };

  Vue.prototype.$hNotice = $hNotice
}
/* harmony default export */ var packages_notice = (notice);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3889a586-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/popmessage/popmessage.vue?vue&type=template&id=5180bbbe&scoped=true&
var popmessagevue_type_template_id_5180bbbe_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"popmessage"},[_c('hPopover',{ref:"popover",attrs:{"trigger":"click"}},[_c('template',{slot:"content"},[_c('div',{staticClass:"title"},[_vm._t("icon",[_c('i',{staticClass:"iconfont icon-zhengchang"})]),_c('span',{staticStyle:{"line-height":"30px"}},[_vm._t("title",[_vm._v("内容")])],2)],2),_c('div',{staticClass:"footer"},[_c('hButton',{attrs:{"size":"mini","type":"default","plain":""},nativeOn:{"click":function($event){return _vm.handleCancle($event)}}},[_vm._v("取消")]),_c('hButton',{attrs:{"size":"mini","type":"primary"},nativeOn:{"click":function($event){return _vm.handleConfirm($event)}}},[_vm._v("确认")])],1)]),_vm._t("default")],2)],1)}
var popmessagevue_type_template_id_5180bbbe_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/popmessage/popmessage.vue?vue&type=template&id=5180bbbe&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3889a586-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/popover/popover.vue?vue&type=template&id=608a225f&scoped=true&
var popovervue_type_template_id_608a225f_scoped_true_render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"popover",staticClass:"popover"},[(_vm.visible)?_c('div',{ref:"contentWrapper",staticClass:"gulu-popover-content-wrapper",class:[( _obj = {}, _obj[("position-" + _vm.position)] = true, _obj ), _vm.popClassName]},[_vm._t("content",[_vm._v("内容")],{"close":_vm.close})],2):_vm._e(),_c('div',{ref:"triggerWrapper",staticStyle:{"display":"inline-block"}},[_vm._t("default")],2)])}
var popovervue_type_template_id_608a225f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/popover/popover.vue?vue&type=template&id=608a225f&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/popover/popover.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var popovervue_type_script_lang_js_ = ({
  name: "hPopover",
  props: {
    popClassName: {
      type: String
    },
    // 出现方式
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    },
    // 触发方式
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) >= 0;
      }
    },
    //
    container: {
      type: Element
    }
  },
  data() {
    return {
      visible: false
    };
  },

  mounted() {
    this.addPopoverListeners();
  },
  beforeDestroy() {
    this.putBackContent();
    this.removePopoverListeners();
  },
  computed: {
    openEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseenter";
      }
    },
    closeEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseleave";
      }
    }
  },
  methods: {
    // 添加事件监听
    addPopoverListeners() {
      if (this.trigger === "click") {
        this.$refs.popover.addEventListener("click", this.onClick);
      } else {
        this.$refs.popover.addEventListener("mouseenter", this.open);
        this.$refs.popover.addEventListener("mouseleave", this.close);
      }
    },
    //移除事件监听
    removePopoverListeners() {
      if (this.trigger === "click") {
        this.$refs.popover.removeEventListener("click", this.onClick);
      } else {
        this.$refs.popover.removeEventListener("mouseenter", this.open);
        this.$refs.popover.removeEventListener("mouseleave", this.close);
      }
    },
    //
    putBackContent() {
      const { contentWrapper, popover } = this.$refs;
      if (!contentWrapper) {
        return;
      }
      popover.appendChild(contentWrapper);
    },
    //根据点击的dom，计算应该出现在什么地方
    positionContent() {
      const { contentWrapper, triggerWrapper } = this.$refs;
      (this.container || document.body).appendChild(contentWrapper);
      const {
        width,
        height,
        top,
        left
      } = triggerWrapper.getBoundingClientRect();
      const { height: height2 } = contentWrapper.getBoundingClientRect();
      let positions = {
        top: { top: top + window.scrollY, left: left + window.scrollX },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX + width
        }
      };
      contentWrapper.style.left = positions[this.position].left + "px";
      contentWrapper.style.top = positions[this.position].top + "px";
    },
    // 点击网页时
    onClickDocument(e) {
    
      if (
        this.$refs.popover &&
        (this.$refs.popover === e.target ||
          this.$refs.popover.contains(e.target))
      ) {
        return;
      }
      if (
        this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target ||
          this.$refs.contentWrapper.contains(e.target))
      ) {
        return;
      }
      this.close();
    },
    // 展示
    open() {
      this.visible = true;
      this.$emit("open");
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
        window.addEventListener("resize", this.positionContent);
      });
    },
    // 关闭
    close() {
      this.visible = false;
      this.$emit("close");
      document.removeEventListener("click", this.onClickDocument);
      window.removeEventListener("resize", this.positionContent);
    },
    // 点击时触发
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  }
});

// CONCATENATED MODULE: ./packages/popover/popover.vue?vue&type=script&lang=js&
 /* harmony default export */ var popover_popovervue_type_script_lang_js_ = (popovervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/popover/popover.vue?vue&type=style&index=0&id=608a225f&scoped=true&lang=stylus&
var popovervue_type_style_index_0_id_608a225f_scoped_true_lang_stylus_ = __webpack_require__("30c4");

// CONCATENATED MODULE: ./packages/popover/popover.vue






/* normalize component */

var popover_component = normalizeComponent(
  popover_popovervue_type_script_lang_js_,
  popovervue_type_template_id_608a225f_scoped_true_render,
  popovervue_type_template_id_608a225f_scoped_true_staticRenderFns,
  false,
  null,
  "608a225f",
  null
  
)

/* harmony default export */ var popover = (popover_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/popmessage/popmessage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var popmessagevue_type_script_lang_js_ = ({
  name: "hPopmessage",
  components: { hPopover: popover, hButton: button_button },
  methods: {
    //点击确认
    handleConfirm() {
      this.$emit("confirm", true);
      this.close();
    },
    // 点击取消
    handleCancle() {
      this.$emit("cancel", false);
      this.close();
    },
    // 关闭popover
    close() {
      this.$refs.popover.close();
    },
  },
});

// CONCATENATED MODULE: ./packages/popmessage/popmessage.vue?vue&type=script&lang=js&
 /* harmony default export */ var popmessage_popmessagevue_type_script_lang_js_ = (popmessagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/popmessage/popmessage.vue?vue&type=style&index=0&id=5180bbbe&lang=stylus&scoped=true&
var popmessagevue_type_style_index_0_id_5180bbbe_lang_stylus_scoped_true_ = __webpack_require__("7df8");

// CONCATENATED MODULE: ./packages/popmessage/popmessage.vue






/* normalize component */

var popmessage_component = normalizeComponent(
  popmessage_popmessagevue_type_script_lang_js_,
  popmessagevue_type_template_id_5180bbbe_scoped_true_render,
  popmessagevue_type_template_id_5180bbbe_scoped_true_staticRenderFns,
  false,
  null,
  "5180bbbe",
  null
  
)

/* harmony default export */ var popmessage = (popmessage_component.exports);
// CONCATENATED MODULE: ./packages/popmessage/index.js

popmessage.install = function (Vue) {
  Vue.component(popmessage.name, popmessage)
}
/* harmony default export */ var packages_popmessage = (popmessage);

// CONCATENATED MODULE: ./packages/popover/index.js

popover.install = function (Vue) {
  Vue.component(popover.name, popover)
}
/* harmony default export */ var packages_popover = (popover);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3889a586-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/table/table.vue?vue&type=template&id=705d1490&scoped=true&
var tablevue_type_template_id_705d1490_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('table',{staticClass:"table",attrs:{"border":_vm.border,"stripe":_vm.stripe,"size":_vm.size}},[_c('thead',[_c('tr',[(_vm.checkable)?_c('th',{staticClass:"checkbox"},[_c('input',{ref:"selectAll",style:({'cursor':_vm.dataSource.length===0? 'not-allowed':'pointer','pointer-events':_vm.dataSource.length===0?'none':''}),attrs:{"type":"checkbox"},on:{"click":function($event){return _vm.self_checkAll($event)}}})]):_vm._e(),_vm._l((_vm.columns),function(column,index){return _c('th',{key:index,attrs:{"align":_vm.align}},[_vm._v(_vm._s(column.title))])})],2)]),(_vm.dataSource.length)?_c('tbody',_vm._l((_vm.dataSource),function(item,index){return _c('tr',{key:index,on:{"click":function($event){return _vm.self_clickTableTr($event)}}},[(_vm.checkable)?_c('td',{staticClass:"checkbox"},[_c('input',{ref:"select",refInFor:true,attrs:{"type":"checkbox","data_key":item.key},on:{"click":function($event){$event.stopPropagation();return _vm.self_singleCheck(item.key,$event)}}})]):_vm._e(),_vm._l((_vm.columns),function(column,index){return _c('td',{key:index,attrs:{"align":_vm.align}},[_vm._t(column.filed,[[_vm._v(_vm._s(item[column.filed]))]],{"data":item})],2)})],2)}),0):_c('tbody',[_c('tr',{staticClass:"nodata"},[_c('td',{attrs:{"colspan":_vm.checkable?_vm.columns.length+1:_vm.columns.length}},[_vm._t("nodata",[[_c('img',{staticClass:"icon",attrs:{"src":"/static/img/noData.23b56c2.png","alt":""}})]])],2)])])])])}
var tablevue_type_template_id_705d1490_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/table/table.vue?vue&type=template&id=705d1490&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/table/table.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var tablevue_type_script_lang_js_ = ({
  name:'hTable',
  props: {
    //表头数据
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    // 表格主体数据
    dataSource: {
      type: Array,
      default() {
        return [];
      }
    },
    // 是否有边框
    border: {
      type: Boolean,
      default: false
    },
    // 是否有边框
    align: {
      type: String,
      default: "center"
    },
    // 是否可以全选反选
    checkable: {
      type: Boolean,
      default: false
    },
    // 是否使用斑马纹
    stripe: {
      type: Boolean,
      default: false
    },
    // 尺寸--todo
    size: {
      type: String,
      default: "medium"
    },
    //被选中的行的key值,只能穿key值，以数组形式
    checkedKeys: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      checkedKeysCopy: this.checkedKeys
    };
  },
  watch: {
    //datasource用来匹配checkedKeys，确保checkedKeys的准确性
    dataSource: {
      immediate: true,
      deep: true,
      handler(val) {
        if (val && val.length > 0) {
          let arr = [];
          val.forEach(item1 => {
            //  需要用datasource对checkedKeys进行匹配
            this.checkedKeys.forEach(item2 => {
              if (item2 === item1.key) {
                arr.push(item2);
              }
            });
          });
          this.self_update(this.self_unique(arr));
        } else if (val && val.length === 0) {
          this.self_update([]);
        }
      }
    },
    // key值控制着整个全选单选的状态
    checkedKeys: {
      immediate: true,
      deep: true,
      handler(val) {
        if (val) {
          // 对checkedKeys进行去重是保障数据准备的一部分
          this.checkedKeysCopy = this.self_unique(val);
        }
      }
    },
    //组件也申明一个变量，用于在用户没有提供checkedKeys时，我们用checkedKeysCopy来控制整体，然后用checkedKeys来控制checkedKeysCopy
    checkedKeysCopy: {
      immediate: true,
      deep: true,
      handler(val) {
        //在视图更新后去修改选中与未选中
        this.$nextTick(() => {
          //
          if (this.$refs.selectAll) {
            if (
              val.length === this.dataSource.length &&
              this.dataSource.length !== 0
            ) {
              this.$refs.selectAll.checked = true;
              this.$refs.selectAll.indeterminate = false;
            } else if (val.length === 0) {
              this.$refs.selectAll.checked = false;
              this.$refs.selectAll.indeterminate = false;
            } else {
              this.$refs.selectAll.indeterminate = true;
            }
          }

          if (val && val.length > 0) {
            val.forEach(level1 => {
              this.$refs.select &&
                this.$refs.select.length > 0 &&
                this.$refs.select.forEach(level2 => {
                  if (level2.getAttribute("data_key") == level1) {
                    level2.checked = true;
                  }
                });
            });
          } else {
            this.$refs.select &&
              this.$refs.select.length > 0 &&
              this.$refs.select.forEach(level => {
                level.checked = false;
              });
          }
        });
      }
    }
  },
  methods: {
    //更新父组件里面的checkedkeys
    self_update(val) {
      // 如果用户传了checkedkeys，就去更新他传的值
      if (this.checkedKeys && this.checkedKeys.length >= 0) {
        this.$emit("update:checkedKeys", val);
      }
    },
    //单选框
    self_singleCheck(val, el) {
      if (el.target.checked) {
        this.$set(this.checkedKeysCopy, this.checkedKeysCopy.length, val);
        // this.checkedKeysCopy = this.unique(this.checkedKeysCopy);
      } else {
        const index = this.checkedKeysCopy.findIndex(item => {
          return item === val;
        });
        this.$delete(this.checkedKeysCopy, index);
      }
      this.self_update(this.checkedKeysCopy);
    },
    //全选框
    self_checkAll($el) {
      if ($el.target.checked) {
        const arr = [];
        this.dataSource.forEach(item => {
          arr.push(item.key || item.id);
        });
        this.checkedKeysCopy = arr;
      } else {
        this.checkedKeysCopy.splice(0, this.checkedKeysCopy.length);
      }
      this.self_update(this.checkedKeysCopy);
    },
    //数组去重
    self_unique(arr) {
      if (!Array.isArray(arr)) {
        console.log("type error!");
        return;
      }
      let array = [];
      for (let i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1) {
          array.push(arr[i]);
        }
      }
      return array;
    },
    // 点击当前行--todo
    self_clickTableTr(el) {},
    //下面都是向外暴露的函数
    //清空所有选中
    com_clearAllselect() {
      this.checkedKeysCopy = [];
      this.self_update();
    }
  }
});

// CONCATENATED MODULE: ./packages/table/table.vue?vue&type=script&lang=js&
 /* harmony default export */ var table_tablevue_type_script_lang_js_ = (tablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/table/table.vue?vue&type=style&index=0&id=705d1490&lang=stylus&scoped=true&
var tablevue_type_style_index_0_id_705d1490_lang_stylus_scoped_true_ = __webpack_require__("ae39");

// CONCATENATED MODULE: ./packages/table/table.vue






/* normalize component */

var table_component = normalizeComponent(
  table_tablevue_type_script_lang_js_,
  tablevue_type_template_id_705d1490_scoped_true_render,
  tablevue_type_template_id_705d1490_scoped_true_staticRenderFns,
  false,
  null,
  "705d1490",
  null
  
)

/* harmony default export */ var table = (table_component.exports);
// CONCATENATED MODULE: ./packages/table/index.js

table.install = function (Vue) {
  Vue.component(table.name, table)
}
/* harmony default export */ var packages_table = (table);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3889a586-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/toast/toast.vue?vue&type=template&id=b5f6def0&scoped=true&
var toastvue_type_template_id_b5f6def0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"alert-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"dialog-tips dialog-center",attrs:{"id":"toast"}},[_vm._v(_vm._s(_vm.message))])])}
var toastvue_type_template_id_b5f6def0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/toast/toast.vue?vue&type=template&id=b5f6def0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/toast/toast.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var toastvue_type_script_lang_js_ = ({
  name:'hToast',
  data() {
    return {
      visible: false,
      message: ""
    };
  }
});

// CONCATENATED MODULE: ./packages/toast/toast.vue?vue&type=script&lang=js&
 /* harmony default export */ var toast_toastvue_type_script_lang_js_ = (toastvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/toast/toast.vue?vue&type=style&index=0&id=b5f6def0&scoped=true&lang=css&
var toastvue_type_style_index_0_id_b5f6def0_scoped_true_lang_css_ = __webpack_require__("c2c9");

// CONCATENATED MODULE: ./packages/toast/toast.vue






/* normalize component */

var toast_component = normalizeComponent(
  toast_toastvue_type_script_lang_js_,
  toastvue_type_template_id_b5f6def0_scoped_true_render,
  toastvue_type_template_id_b5f6def0_scoped_true_staticRenderFns,
  false,
  null,
  "b5f6def0",
  null
  
)

/* harmony default export */ var toast = (toast_component.exports);
// CONCATENATED MODULE: ./packages/toast/index.js

toast.install = vue => {
  const ToastCon = vue.extend(toast)
  const ins = new ToastCon()
  ins.$mount(document.createElement('div'))
  document.body.appendChild(ins.$el)
  //往vue上挂载$toast
  /**
   *duration 延长时间
   *msg 消息内容
   */
  vue.prototype.$hToast = (msg, duration = 3000) => {
    ins.message = msg
    ins.visible = true
    setTimeout(() => {
      ins.visible = false
    }, duration)
  }
}
/* harmony default export */ var packages_toast = (toast);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3889a586-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/editor/editor.vue?vue&type=template&id=7604f689&scoped=true&
var editorvue_type_template_id_7604f689_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor"},[_c('div',{staticClass:"select"},[_c('button',{on:{"click":function($event){return _vm.editStyle('SelectAll',false,null)}}},[_c('i',{staticClass:"iconfont icon-quanxuan",attrs:{"type":"button"}})]),_c('button',{on:{"click":function($event){return _vm.editStyle('removeFormat',false,null)}}},[_c('i',{staticClass:"iconfont icon-qingchu",attrs:{"type":"button"}})]),_c('button',{on:{"click":function($event){return _vm.editStyle('Cut',false,null)}}},[_c('i',{staticClass:"iconfont icon-jianqie",attrs:{"type":"button"}})]),_c('button',{on:{"click":function($event){return _vm.editStyle('Copy',false,null)}}},[_c('i',{staticClass:"iconfont icon-fuzhi",attrs:{"type":"button"}})]),_c('button',{on:{"click":function($event){return _vm.editStyle('Paste',false,null)}}},[_c('i',{staticClass:"iconfont icon-niantie",attrs:{"type":"button"}})]),_c('button',{on:{"click":function($event){return _vm.editStyle('Delete',false,null)}}},[_c('i',{staticClass:"iconfont icon-shanchu",attrs:{"type":"button"}})]),_c('span',{staticStyle:{"color":"#aaa","display":"flex","width":"20px","text-align":"center","justify-content":"center","align-items":"center"}},[_vm._v("|")]),_c('select',{staticClass:"headerSelect",domProps:{"value":_vm.headerSelect},on:{"change":_vm.setHeading,"focus":function($event){_vm.headerSelect='-1'}}},_vm._l((_vm.headerSelectOptions),function(item,index){return _c('option',{key:index,domProps:{"value":item}},[_vm._v(" "+_vm._s(item)+" ")])}),0),_vm._m(0),_vm._m(1),_c('button',{on:{"click":function($event){return _vm.editStyle('StrikeThrough',false,null)}}},[_c('i',{staticClass:"iconfont icon-shanchuxian",attrs:{"type":"button"}})]),_c('button',{on:{"click":function($event){return _vm.editStyle('Bold',false,null)}}},[_c('i',{staticClass:"iconfont icon-bold",attrs:{"type":"button"}})]),_c('button',{on:{"click":function($event){return _vm.editStyle('Underline',false,null)}}},[_c('i',{staticClass:"iconfont icon-xiahuaxian",attrs:{"type":"button"}})]),_c('button',{on:{"click":function($event){return _vm.editStyle('Italic',false,null)}}},[_c('i',{staticClass:"iconfont icon-xieti",attrs:{"type":"button"}})]),_c('span',{staticStyle:{"color":"#aaa","display":"flex","width":"20px","text-align":"center","justify-content":"center","align-items":"center"}},[_vm._v("|")]),_c('button',{on:{"click":function($event){return _vm.editStyle('indent',false,null)}}},[_c('i',{staticClass:"iconfont icon-yousuojin",attrs:{"type":"button"}})]),_c('button',{on:{"click":function($event){return _vm.editStyle('justifyLeft',false,null)}}},[_c('i',{staticClass:"iconfont icon-youduiqi",attrs:{"type":"button"}})]),_c('button',{on:{"click":function($event){return _vm.editStyle('justifyCenter',false,null)}}},[_c('i',{staticClass:"iconfont icon-juzhongduiqi",attrs:{"type":"button"}})]),_c('button',{on:{"click":function($event){return _vm.editStyle('justifyRight',false,null)}}},[_c('i',{staticClass:"iconfont icon-zuoduiqi",attrs:{"type":"button"}})]),_c('span',{staticStyle:{"color":"#aaa","display":"flex","width":"20px","text-align":"center","justify-content":"center","align-items":"center"}},[_vm._v("|")]),_c('button',{class:{'active':this.activeButton==='createLink'},on:{"click":_vm.openLinkDialog}},[_c('i',{staticClass:"iconfont icon-lianjie",attrs:{"type":"button"}})]),_c('button',{class:{'active':this.activeButton==='InsertInputImage'},on:{"click":function($event){return _vm.editStyle('InsertInputImage',false,null)}}},[_c('i',{staticClass:"iconfont icon-tupian",attrs:{"type":"button"}})]),_c('button',{class:{'active':this.activeButton==='insertHTML'},on:{"click":_vm.openHtmlDialog}},[_c('i',{staticClass:"iconfont icon--HTML",attrs:{"type":"button"}})]),_c('button',{class:{'active':this.activeButton==='addTable'},on:{"click":_vm.openTableDialog}},[_c('i',{staticClass:"iconfont icon-biaoge",attrs:{"type":"button"}})]),_c('button',{on:{"click":function($event){return _vm.adjustList('insertOrderedList')}}},[_c('i',{staticClass:"iconfont icon-youxuliebiao",attrs:{"type":"button"}})]),_c('button',{on:{"click":function($event){return _vm.adjustList('insertUnorderedList')}}},[_c('i',{staticClass:"iconfont icon-wuxuliebiao",attrs:{"type":"button"}})]),_c('button',{on:{"click":function($event){return _vm.editStyle('insertHorizontalRule',false,null)}}},[_c('i',{staticClass:"iconfont icon-line",attrs:{"type":"button"}})]),_c('button',{on:{"click":function($event){return _vm.editStyle('insertParagraph',false,null)}}},[_c('i',{staticClass:"iconfont icon-duanluo",attrs:{"type":"button"}})]),_c('span',{staticStyle:{"color":"#aaa","display":"flex","width":"20px","text-align":"center","justify-content":"center","align-items":"center"}},[_vm._v("|")]),_c('button',{on:{"click":function($event){return _vm.editStyle('Undo',false,null)}}},[_c('i',{staticClass:"iconfont icon-chexiao",attrs:{"type":"button"}})]),_c('button',{on:{"click":function($event){return _vm.editStyle('Redo',false,null)}}},[_c('i',{staticClass:"iconfont icon-chongzuo",attrs:{"type":"button"}})])]),_c('div',{ref:"editor",staticClass:"input",attrs:{"id":"editorInput","contenteditable":"true"},on:{"mouseup":_vm.mouseup,"blur":_vm.editorBlur}}),(_vm.htmlshow)?_c('div',{staticClass:"htmlinput"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.htmlinput),expression:"htmlinput"}],staticClass:"textarea",attrs:{"placeholder":"输入html"},domProps:{"value":(_vm.htmlinput)},on:{"input":function($event){if($event.target.composing){ return; }_vm.htmlinput=$event.target.value}}}),_vm._v(" "),_c('p',{staticClass:"footer"},[_c('button',{on:{"click":function (){_vm.htmlshow=false}}},[_vm._v("关闭")]),_c('button',{on:{"click":_vm.insertHTML}},[_vm._v("插入")])])]):_vm._e(),(_vm.linkshow)?_c('div',{staticClass:"linkinput"},[_c('p',[_vm._v(" 文本： "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.linkinput.text),expression:"linkinput.text"}],attrs:{"type":"text","placeholder":"输入文本"},domProps:{"value":(_vm.linkinput.text)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.linkinput, "text", $event.target.value)}}})]),_c('p',[_vm._v(" 链接： "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.linkinput.link),expression:"linkinput.link"}],attrs:{"type":"text","placeholder":"输入url"},domProps:{"value":(_vm.linkinput.link)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.linkinput, "link", $event.target.value)}}})]),_c('p',{staticClass:"footer"},[_c('button',{on:{"click":function (){_vm.linkshow=false}}},[_vm._v("关闭")]),_c('button',{on:{"click":_vm.createLink}},[_vm._v("插入")])])]):_vm._e(),(_vm.tableshow)?_c('div',{staticClass:"tableinput"},[_c('p',[_vm._v(" 行数： "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.tableinput.rows),expression:"tableinput.rows"}],attrs:{"type":"text","placeholder":"输入行数"},domProps:{"value":(_vm.tableinput.rows)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.tableinput, "rows", $event.target.value)}}})]),_c('p',[_vm._v(" 列数： "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.tableinput.cells),expression:"tableinput.cells"}],attrs:{"type":"text","placeholder":"输入列数"},domProps:{"value":(_vm.tableinput.cells)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.tableinput, "cells", $event.target.value)}}})]),_c('p',{staticClass:"footer"},[_c('button',{on:{"click":function (){_vm.tableshow=false}}},[_vm._v("关闭")]),_c('button',{on:{"click":_vm.Addtable}},[_vm._v("插入")])])]):_vm._e()])}
var editorvue_type_template_id_7604f689_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',[_c('i',{staticClass:"iconfont icon-ziti",attrs:{"type":"button"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',[_c('i',{staticClass:"iconfont icon-zihao",attrs:{"type":"button"}})])}]


// CONCATENATED MODULE: ./packages/editor/editor.vue?vue&type=template&id=7604f689&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/editor/editor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  name: "hEditor",
  components: {},
  data() {
    return {
      selection: {},
      originButton: "", //记录初始的按钮
      activeButton: "", //记录当前的按钮
      currentSelection: {},
      htmlshow: false, //输入html框是否显示
      htmlinput: "", //输入html框内容，
      linkshow: false, //输入link框是否显示
      linkinput: {
        link: "",
        text: "",
      }, //输入link框内容
      tableshow: false,
      tableinput: {
        rows: "",
        cells: "",
      },
      headerSelect: "",
      headerSelectOptions: ["h1", "h2", "h3", "h4", "h5", "h6"],
    };
  },
  watch: {
    htmlshow(newVal) {
      if (newVal === false) {
        this.htmlinput = "";
        if (this.activeButton === "insertHTML") {
          this.activeButton = "none";
        }
        this.originButton = "insertHTML";
      } else {
        this.activeButton = "insertHTML";
        this.linkshow = false;
        this.tableshow = false;
      }
    },
    linkshow(newVal) {
      if (newVal === false) {
        this.linkinput.text = "";
        this.linkinput.link = "";
        if (this.activeButton === "createLink") {
          this.activeButton = "none";
        }
        this.originButton = "createLink";
      } else {
        this.activeButton = "createLink";
        this.htmlshow = false;
        this.tableshow = false;
      }
    },
    tableshow(newVal) {
      if (newVal === false) {
        this.tableinput.rows = "";
        this.tableinput.cells = "";
        if (this.activeButton === "addTable") {
          this.activeButton = "none";
        }

        this.originButton = "addTable";
      } else {
        this.activeButton = "addTable";
        this.htmlshow = false;
        this.linkshow = false;
      }
    },
  },
  computed: {
    // 每次点击是否是原来的按钮
    isOrginButton() {
      return this.activeButton === this.originButton ? true : false;
    },
  },
  methods: {
    //自适应
    autoadaption() {
      this.Sys = (function (ua) {
        var s = {};
        s.IE = ua.match(/msie ([\d.]+)/) ? true : false;
        s.Firefox = ua.match(/firefox\/([\d.]+)/) ? true : false;
        s.Chrome = ua.match(/chrome\/([\d.]+)/) ? true : false;
        s.IE6 =
          s.IE && [/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 6
            ? true
            : false;
        s.IE7 =
          s.IE && [/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 7
            ? true
            : false;
        s.IE8 =
          s.IE && [/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 8
            ? true
            : false;
        return s;
      })(navigator.userAgent.toLowerCase());
      this;
      //获取编辑器
      let editor = document.querySelector(".editor");
      //整个编辑器的高度
      let top = document.querySelector(".select").offsetHeight;
      //编辑器的输入框的高度自适应
      let target = document.querySelector(".input");
      target.style.position = "absolute";
      target.style.top = top + "px";
      target.style.height = editor.offsetHeight - top + "px";
      target.style.maxHeight = editor.offsetHeight - top + "px";
    },
    editorBlur() {
      // 记录当前的光标
      this.backupRange();
    },
    mouseup() {},
    // 通用execCommand
    editStyle(cmd, bool, value) {
      document.execCommand(cmd, bool, value);
    },
    // 打开输入html弹框
    openHtmlDialog() {
      this.htmlshow = !this.htmlshow;
    },
    // 插入html
    insertHTML() {
      // 恢复之前光标的记录
      this.restoreRange();
      document.execCommand("insertHTML", false, this.htmlinput);
      // 记录当前的光标
      this.backupRange();
      this.htmlshow = false;
    },
    // 打开输入链接弹框
    openLinkDialog() {
      this.linkshow = !this.linkshow;
    },
    // 插入连接
    insertLink(url, title) {
      let selection = document.getSelection(),
        range = selection.getRangeAt(0);
      //range.collapsed 是只读属性。
      //它返回一个 Boolean 值表示是否起始点和结束点是同一个位置。
      //如果返回 true 表示Range 的起始位置和结束位置重合, false 表示不重合。
      if (range.collapsed) {
        let start = range.startContainer,
          parent = this.findParentByTagName(start, "a");

        if (parent) {
          parent.setAttribute("src", url);
        } else {
          document.execCommand(
            "insertHTML",
            false,
            `<a  href="${url}">${title}</a>`
          );
          this.insertHTML(`<a  href="${url}">${title}</a>`);
        }
      } else {
        document.execCommand("createLink", false, url);
      }
    },
    // 插入连接
    createLink() {
      this.restoreRange();
      this.insertLink(this.linkinput.link, this.linkinput.text);
      // 记录当前的光标
      this.backupRange();
      this.linkshow = false;
    },
    /* 查找父元素
     * @param {String} root
     * @param {String | Array} name
     */
    findParentByTagName(root, name) {
      let parent = root;

      if (typeof name === "string") {
        name = [name];
      }

      while (
        name.indexOf(parent.nodeName.toLowerCase()) === -1 &&
        parent.nodeName !== "BODY" &&
        parent.nodeName !== "HTML"
      ) {
        parent = parent.parentNode;
      }

      return parent.nodeName === "BODY" || parent.nodeName === "HTML"
        ? null
        : parent;
    },
    // 记录range位置
    backupRange() {
      let selection;
      if (window.getSelection) {
        //现代浏览器
        selection = window.getSelection();
      } else if (document.selection) {
        //IE浏览器
        selection = document.selection.createRange();
      }
      let range = selection.getRangeAt(0);
      this.currentSelection = {
        startContainer: range.startContainer,
        startOffset: range.startOffset,
        endContainer: range.endContainer,
        endOffset: range.endOffset,
      };
    },
    // 恢复range
    restoreRange() {
      if (
        this.currentSelection &&
        Object.keys(this.currentSelection).length != 0
      ) {
        let selection = window.getSelection();
        selection.removeAllRanges();
        let range = document.createRange();
        range.setStart(
          this.currentSelection.startContainer,
          this.currentSelection.startOffset
        );
        range.setEnd(
          this.currentSelection.endContainer,
          this.currentSelection.endOffset
        );
        // 向选区中添加一个区域
        selection.addRange(range);
      } else {
        this.$refs.editor.focus();
      }
    },
    // 设置列表
    adjustList(cmd) {
      document.execCommand(cmd, false, null);
      let lists = document.querySelectorAll("ol, ul");
      for (let i = 0; i < lists.length; i++) {
        let ele = lists[i]; // ol
        let parentNode = ele.parentNode;
        if (
          parentNode.tagName === "P" &&
          parentNode.lastChild === parentNode.firstChild
        ) {
          parentNode.insertAdjacentElement("beforebegin", ele);

          parentNode.remove();
        }
      }
    },
    //获取当前光标所在处样式
    getCaretStyle() {
      let selection = window.getSelection(),
        range = selection.getRangeAt(0);

      let aimEle = range.commonAncestorContainer;
      let tempEle = null;

      let tags = ["U", "I", "B", "STRIKE"],
        result = [];

      if (aimEle.nodeType === 3) {
        aimEle = aimEle.parentNode;
      }

      tempEle = aimEle;

      // eslint-disable-next-line no-undef
      while (block.indexOf(tempEle.nodeName.toLowerCase()) === -1) {
        if (tags.indexOf(tempEle.nodeName) !== -1) {
          result.push(tempEle.nodeName);
        }

        tempEle = tempEle.parentNode;
      }

      let viewStyle = {
        italic: result.indexOf("I") !== -1 ? true : false,

        underline: result.indexOf("U") !== -1 ? true : false,

        bold: result.indexOf("B") !== -1 ? true : false,

        strike: result.indexOf("STRIKE") !== -1 ? true : false,
      };

      let styles = window.getComputedStyle(aimEle, null);

      (viewStyle.fontSize = styles["fontSize"]),
        (viewStyle.color = styles["color"]),
        (viewStyle.fontWeight = styles["fontWeight"]),
        (viewStyle.fontStyle = styles["fontStyle"]),
        (viewStyle.textDecoration = styles["textDecoration"]);

      let Util;
      viewStyle.isH1 = Util.findParentByTagName(aimEle, "h1") ? true : false;

      viewStyle.isH2 = Util.findParentByTagName(aimEle, "h2") ? true : false;

      viewStyle.isP = Util.findParentByTagName(aimEle, "p") ? true : false;

      viewStyle.isUl = Util.findParentByTagName(aimEle, "ul") ? true : false;

      viewStyle.isOl = Util.findParentByTagName(aimEle, "ol") ? true : false;

      return viewStyle;
    },
    // 设置标题
    setHeading() {
      let obj = document.querySelector(".headerSelect");
      //获取选中项的索引
      let idx = obj.selectedIndex;
      //获取选中项的文本
      let text = obj.options[idx].text;
      this.headerSelect = text;
      let formatTag = text,
        formatBlock = document.queryCommandValue("formatBlock");

      if (formatBlock.length > 0 && formatBlock.toLowerCase() === formatTag) {
        document.execCommand("formatBlock", false, formatTag);
      } else {
        document.execCommand("formatBlock", false, formatTag);
      }
      document.querySelector(".headerSelect")[0].blur();
    },
    //打开创建表格弹框
    openTableDialog() {
      this.tableshow = !this.tableshow;
    },
    //创建表格
    Addtable() {
      var _this = this;
      if (this.tableinput.rows === 0 && this.tableinput.cells === 0) {
        return;
      }
      createTable(
        "editorInput",
        this.tableinput.rows,
        this.tableinput.cells,
        Math.random() + "createdTable"
      );
      this.tableshow = false;
      //dom转字符串
      function domToString(node) {
        let tmpNode = document.createElement("div");
        tmpNode.appendChild(node);
        let str = tmpNode.innerHTML;
        tmpNode = node = null; // 解除引用，以便于垃圾回收
        return str;
      }
      //创建表格
      function createTable(id, rows, cells, tbid) {
        var tb = document.createElement("table");
        tb.style.width = 300 + "px";
        tb.style.border = "1px solid #ccc";
        var tbody = document.createElement("tbody");
        for (var i = 0; i < rows; i++) {
          var tr = document.createElement("tr");
          tr.style.border = "1px solid red";
          for (var j = 0; j < cells; j++) {
            var cell = document.createElement("td");
            cell.style.border = "1px solid #ccc";
            cell.style.textAlign = "center";
            cell.style.minWidth = "40px";
            cell.style.padding = "5px 10px";
            tr.appendChild(cell);
          }
          tbody.appendChild(tr);
        }
        //将tbody塞入tb中
        tb.appendChild(tbody);
        //设置创建的TABLE的ID
        tb.setAttribute("id", tbid);
        // 恢复之前光标的记录
        _this.restoreRange();
        //将dom塞入光标位置
        document.execCommand("insertHTML", false, domToString(tb) + "");
        // 记录当前的光标
        _this.backupRange();
      }
    },
  },
  mounted() {
    this.$refs.editor.focus();
    this.autoadaption();
  },
});

// CONCATENATED MODULE: ./packages/editor/editor.vue?vue&type=script&lang=js&
 /* harmony default export */ var editor_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/editor/editor.vue?vue&type=style&index=0&id=7604f689&lang=stylus&scoped=true&
var editorvue_type_style_index_0_id_7604f689_lang_stylus_scoped_true_ = __webpack_require__("f109");

// CONCATENATED MODULE: ./packages/editor/editor.vue






/* normalize component */

var editor_component = normalizeComponent(
  editor_editorvue_type_script_lang_js_,
  editorvue_type_template_id_7604f689_scoped_true_render,
  editorvue_type_template_id_7604f689_scoped_true_staticRenderFns,
  false,
  null,
  "7604f689",
  null
  
)

/* harmony default export */ var editor = (editor_component.exports);
// CONCATENATED MODULE: ./packages/editor/index.js

editor.install = function (Vue) {
  Vue.component(editor.name, editor)
}
/* harmony default export */ var packages_editor = (editor);
// CONCATENATED MODULE: ./packages/index.js
const packVersion = '0.0.1-alpha.20'
const r = ['color: #fff', 'border-top-left-radius:3px', 'border-bottom-left-radius:3px', 'background-color: #564b4f', 'padding: 5px'].join(';');
const i = ['color: #fff', 'border-top-right-radius:3px', 'border-bottom-right-radius:3px', 'background-color: #4fc08d', 'padding: 5px'].join(';');
console.log('%cq-vuiVersion %c'.concat(packVersion), r, i);

// 导入组件









// 存储组件列表
const components = { hButton: packages_button, hMessage: packages_message, hModal: packages_modal, hNotice: packages_notice, hPopmessage: packages_popmessage, hPopover: packages_popover, hTable: packages_table, hToast: packages_toast, hEditor: packages_editor };
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  Object.keys(components).forEach(index => {
    Vue.use(components[index])
  });
};

// 按需导入

// 全部导入
/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  ...components,
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=hansan-vui.umd.js.map