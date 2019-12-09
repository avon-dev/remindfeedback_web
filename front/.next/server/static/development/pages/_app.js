module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AppHeader.js":
/*!*********************************!*\
  !*** ./components/AppHeader.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"D:\\\\remindFB\\\\front\\\\components\\\\AppHeader.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Header = () => {\n  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5\n    },\n    __self: undefined\n  }, __jsx(\"title\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6\n    },\n    __self: undefined\n  }, \"RemindFeedBack\"), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7\n    },\n    __self: undefined\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./components/AppHeader.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ \"core-js/library/fn/object/assign\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/assign.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ \"core-js/library/fn/object/define-property\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ \"core-js/library/fn/object/get-own-property-descriptor\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ \"core-js/library/fn/object/get-own-property-symbols\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ \"core-js/library/fn/object/keys\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/keys.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ \"core-js/library/fn/parse-int\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/parse-int.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _defineProperty; });\n/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ \"./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js\");\n/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _extends; });\n/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ \"./node_modules/@babel/runtime-corejs2/core-js/object/assign.js\");\n/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _extends() {\n  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _objectSpread; });\n/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ \"./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js\");\n/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ \"./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js\");\n/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ \"./node_modules/@babel/runtime-corejs2/core-js/object/keys.js\");\n/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js\");\n\n\n\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n\n    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);\n\n    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {\n      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {\n        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js?");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-saga */ \"next-redux-saga\");\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sagas */ \"./sagas/index.js\");\n/* harmony import */ var _components_AppHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/AppHeader */ \"./components/AppHeader.js\");\n\nvar _jsxFileName = \"D:\\\\remindFB\\\\front\\\\pages\\\\_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nconst RemindFeedback = ({\n  Component,\n  store,\n  pageProps\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n    store: store,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16\n    },\n    __self: undefined\n  }, __jsx(_components_AppHeader__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17\n    },\n    __self: undefined\n  }), __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18\n    },\n    __self: undefined\n  }))));\n};\n\nRemindFeedback.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired,\n  store: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired\n};\n\nRemindFeedback.getInitialProps = async context => {\n  const {\n    ctx,\n    Component\n  } = context;\n  let pageProps = {};\n\n  if (Component.getInitialProps) {\n    pageProps = await Component.getInitialProps(ctx);\n  }\n\n  return {\n    pageProps\n  };\n};\n\nconst configureStore = (initialState, options) => {\n  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_7___default()();\n  const middlewares = [sagaMiddleware];\n  const enhancer =  false ? undefined : Object(redux__WEBPACK_IMPORTED_MODULE_5__[\"compose\"])(Object(redux__WEBPACK_IMPORTED_MODULE_5__[\"applyMiddleware\"])(...middlewares), !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_5__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_8__[\"default\"], initialState, enhancer);\n  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n  return store;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(configureStore)(next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default()(RemindFeedback)));\n\n//# sourceURL=webpack:///./pages/_app.js?");

/***/ }),

/***/ "./reducers/feedback.js":
/*!******************************!*\
  !*** ./reducers/feedback.js ***!
  \******************************/
/*! exports provided: initialState, FEEDBACK_TUTORIAL_REQUEST, FEEDBACK_TUTORIAL_SUCCESS, FEEDBACK_TUTORIAL_FAILURE, FEEDBACK_READ_REQUEST, FEEDBACK_READ_SUCCESS, FEEDBACK_READ_FAILURE, FEEDBACK_ADD_REQUEST, FEEDBACK_ADD_SUCCESS, FEEDBACK_ADD_FAILURE, FEEDBACK_ITEM_READ_REQUEST, FEEDBACK_ITEM_READ_SUCCESS, FEEDBACK_ITEM_READ_FAILURE, FEEDBACK_ITEM_ADD_REQUEST, FEEDBACK_ITEM_ADD_SUCCESS, FEEDBACK_ITEM_ADD_FAILURE, FEEDBACK_ITEM_COMPLETE_REQUEST, FEEDBACK_ITEM_COMPLETE_SUCCESS, FEEDBACK_ITEM_COMPLETE_FAILURE, FEEDBACK_ITEM_COMMENT_REQUEST, FEEDBACK_ITEM_COMMENT_SUCCESS, FEEDBACK_ITEM_COMMENT_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_TUTORIAL_REQUEST\", function() { return FEEDBACK_TUTORIAL_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_TUTORIAL_SUCCESS\", function() { return FEEDBACK_TUTORIAL_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_TUTORIAL_FAILURE\", function() { return FEEDBACK_TUTORIAL_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_READ_REQUEST\", function() { return FEEDBACK_READ_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_READ_SUCCESS\", function() { return FEEDBACK_READ_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_READ_FAILURE\", function() { return FEEDBACK_READ_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_ADD_REQUEST\", function() { return FEEDBACK_ADD_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_ADD_SUCCESS\", function() { return FEEDBACK_ADD_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_ADD_FAILURE\", function() { return FEEDBACK_ADD_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_ITEM_READ_REQUEST\", function() { return FEEDBACK_ITEM_READ_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_ITEM_READ_SUCCESS\", function() { return FEEDBACK_ITEM_READ_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_ITEM_READ_FAILURE\", function() { return FEEDBACK_ITEM_READ_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_ITEM_ADD_REQUEST\", function() { return FEEDBACK_ITEM_ADD_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_ITEM_ADD_SUCCESS\", function() { return FEEDBACK_ITEM_ADD_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_ITEM_ADD_FAILURE\", function() { return FEEDBACK_ITEM_ADD_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_ITEM_COMPLETE_REQUEST\", function() { return FEEDBACK_ITEM_COMPLETE_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_ITEM_COMPLETE_SUCCESS\", function() { return FEEDBACK_ITEM_COMPLETE_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_ITEM_COMPLETE_FAILURE\", function() { return FEEDBACK_ITEM_COMPLETE_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_ITEM_COMMENT_REQUEST\", function() { return FEEDBACK_ITEM_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_ITEM_COMMENT_SUCCESS\", function() { return FEEDBACK_ITEM_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_ITEM_COMMENT_FAILURE\", function() { return FEEDBACK_ITEM_COMMENT_FAILURE; });\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js\");\n\nconst initialState = {\n  feedback: {},\n  isAdddingFirstSubject: false,\n  // 피드백 튜토리얼 첫번째 주제 저장 중\n  isAddedFirstSubject: false,\n  // 피드백 튜토리얼 첫번째 주제 저장 완료\n  AddedFirstSubjectErrorReason: '',\n  // 피드백 튜토리얼 첫번째 주제 저장 실패 사유\n  isLoadingFeedback: false,\n  // 피드백 데이터 로드 중\n  isLoadedFeedback: false,\n  // 피드백 데이터 로드 성공\n  LoadedFeedbackErrorReason: '',\n  // 피드백 데이터 실패 사유\n  isAdddingFeedback: false,\n  // 피드백 추가 중\n  isAddedFeedback: false,\n  // 피드백 추가 완료\n  AddedFeedbackErrorReason: '' // 피드백 추가 실패 사유\n\n};\nconst FEEDBACK_TUTORIAL_REQUEST = 'FEEDBACK_TUTORIAL_REQUEST'; // 피드백 튜토리얼 시도 중\n\nconst FEEDBACK_TUTORIAL_SUCCESS = 'FEEDBACK_TUTORIAL_SUCCESS'; // 피드백 튜토리얼 성공\n\nconst FEEDBACK_TUTORIAL_FAILURE = 'FEEDBACK_TUTORIAL_FAILURE'; // 피드백 튜토리얼 실패\n\nconst FEEDBACK_READ_REQUEST = 'FEEDBACK_READ_REQUEST'; // 피드백 READ 시도 중\n\nconst FEEDBACK_READ_SUCCESS = 'FEEDBACK_READ_SUCCESS'; // 피드백 READ 성공\n\nconst FEEDBACK_READ_FAILURE = 'FEEDBACK_READ_FAILURE'; // 피드백 READ 실패\n\nconst FEEDBACK_ADD_REQUEST = 'FEEDBACK_ADD_REQUEST'; // 피드백 ADD 시도 중\n\nconst FEEDBACK_ADD_SUCCESS = 'FEEDBACK_ADD_SUCCESS'; // 피드백 ADD 성공\n\nconst FEEDBACK_ADD_FAILURE = 'FEEDBACK_ADD_FAILURE'; // 피드백 ADD 실패\n\nconst FEEDBACK_ITEM_READ_REQUEST = 'FEEDBACK_ITEM_READ_REQUEST'; // 피드백 게시물 READ 시도 중\n\nconst FEEDBACK_ITEM_READ_SUCCESS = 'FEEDBACK_ITEM_READ_SUCCESS'; // 피드백 게시물 READ 성공\n\nconst FEEDBACK_ITEM_READ_FAILURE = 'FEEDBACK_ITEM_READ_FAILURE'; // 피드백 게시물 READ 실패\n\nconst FEEDBACK_ITEM_ADD_REQUEST = 'FEEDBACK_ITEM_ADD_REQUEST'; // 피드백 게시물 ADD 시도 중\n\nconst FEEDBACK_ITEM_ADD_SUCCESS = 'FEEDBACK_ITEM_ADD_SUCCESS'; // 피드백 게시물 ADD 성공\n\nconst FEEDBACK_ITEM_ADD_FAILURE = 'FEEDBACK_ITEM_ADD_FAILURE'; // 피드백 게시물 ADD 실패\n\nconst FEEDBACK_ITEM_COMPLETE_REQUEST = 'FEEDBACK_ITEM_COMPLETE_REQUEST'; // 피드백 게시물 완료 시도 중\n\nconst FEEDBACK_ITEM_COMPLETE_SUCCESS = 'FEEDBACK_ITEM_COMPLETE_SUCCESS'; // 피드백 게시물 완료 성공\n\nconst FEEDBACK_ITEM_COMPLETE_FAILURE = 'FEEDBACK_ITEM_COMPLETE_FAILURE'; // 피드백 게시물 완료 실패\n\nconst FEEDBACK_ITEM_COMMENT_REQUEST = 'FEEDBACK_ITEM_COMMENT_REQUEST'; // 피드백 게시물 댓글 ADD 시도 중\n\nconst FEEDBACK_ITEM_COMMENT_SUCCESS = 'FEEDBACK_ITEM_COMMENT_SUCCESS'; // 피드백 게시물 댓글 ADD 성공\n\nconst FEEDBACK_ITEM_COMMENT_FAILURE = 'FEEDBACK_ITEM_COMMENT_FAILURE'; // 피드백 게시물 댓글 ADD 실패\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = initialState, action) => {\n  switch (action.type) {\n    // 피드백 튜토리얼 \n    case FEEDBACK_TUTORIAL_REQUEST:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isAdddingFirstSubject: true,\n        isAddedFirstSubject: false\n      });\n\n    case FEEDBACK_TUTORIAL_SUCCESS:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isAdddingFirstSubject: false,\n        isAddedFirstSubject: true\n      });\n\n    case FEEDBACK_TUTORIAL_FAILURE:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isAdddingFirstSubject: false,\n        isAddedFirstSubject: false,\n        AddedFirstSubjectErrorReason: action.error\n      });\n    // 피드백 READ\n\n    case FEEDBACK_READ_REQUEST:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isLoadingFeedback: true,\n        isLoadedFeedback: false,\n        feedback: action.lastId === 0 ? [] : state.feedback,\n        hasMoreFeedback: action.lastId ? state.hasMoreFeedback : true\n      });\n\n    case FEEDBACK_READ_SUCCESS:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isLoadingFeedback: false,\n        isLoadedFeedback: true,\n        feedback: action.data.success ? action.data.data : {}\n      });\n\n    case FEEDBACK_READ_FAILURE:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isLoadingFeedback: false,\n        isLoadedFeedback: false,\n        LoadedFeedbackErrorReason: action.error\n      });\n    // 피드백 ADD\n\n    case FEEDBACK_ADD_REQUEST:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isAdddingFeedback: true,\n        isAddedFeedback: false\n      });\n\n    case FEEDBACK_ADD_SUCCESS:\n      const addedFeedback = action.data.success ? action.data.data : {};\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isAdddingFeedback: false,\n        isAddedFeedback: true,\n        message: action.data.message,\n        feedback: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.feedback, {\n          myFeedback: [...state.feedback.myFeedback, addedFeedback]\n        })\n      });\n\n    case FEEDBACK_ADD_FAILURE:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isAdddingFeedback: false,\n        isAddedFeedback: false,\n        AddedFeedbackErrorReason: action.error\n      });\n    // 피드백 게시물 READ \n\n    case FEEDBACK_ITEM_READ_REQUEST:\n      return {};\n\n    case FEEDBACK_ITEM_READ_SUCCESS:\n      return {};\n\n    case FEEDBACK_ITEM_READ_FAILURE:\n      return {};\n    // 피드백 게시물 ADD \n\n    case FEEDBACK_ITEM_ADD_REQUEST:\n      return {};\n\n    case FEEDBACK_ITEM_ADD_SUCCESS:\n      return {};\n\n    case FEEDBACK_ITEM_ADD_FAILURE:\n      return {};\n    // 피드백 게시물 완료 \n\n    case FEEDBACK_ITEM_COMPLETE_REQUEST:\n      return {};\n\n    case FEEDBACK_ITEM_COMPLETE_SUCCESS:\n      return {};\n\n    case FEEDBACK_ITEM_COMPLETE_FAILURE:\n      return {};\n    // 피드백 게시물 댓글 ADD \n\n    case FEEDBACK_ITEM_COMMENT_REQUEST:\n      return {};\n\n    case FEEDBACK_ITEM_COMMENT_SUCCESS:\n      return {};\n\n    case FEEDBACK_ITEM_COMMENT_FAILURE:\n      return {};\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./reducers/feedback.js?");

/***/ }),

/***/ "./reducers/feedbackMode.js":
/*!**********************************!*\
  !*** ./reducers/feedbackMode.js ***!
  \**********************************/
/*! exports provided: initialState, FEEDBACK_MODE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_MODE\", function() { return FEEDBACK_MODE; });\nconst initialState = {\n  feedbackMode: false\n};\nconst FEEDBACK_MODE = 'FEEDBACK_MODE'; // GET피드백 -> SET 피드백\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = initialState, action) => {\n  switch (action.type) {\n    case FEEDBACK_MODE:\n      {\n        return {\n          feedbackMode: action.data\n        };\n      }\n      ;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./reducers/feedbackMode.js?");

/***/ }),

/***/ "./reducers/feedbackSubject.js":
/*!*************************************!*\
  !*** ./reducers/feedbackSubject.js ***!
  \*************************************/
/*! exports provided: initialState, FEEDBACK_SUB_READ_REQUEST, FEEDBACK_SUB_READ_SUCCESS, FEEDBACK_SUB_READ_FAILURE, FEEDBACK_SUB_ADD_REQUEST, FEEDBACK_SUB_ADD_SUCCESS, FEEDBACK_SUB_ADD_FAILURE, FEEDBACK_SUB_UPDATE_REQUEST, FEEDBACK_SUB_UPDATE_SUCCESS, FEEDBACK_SUB_UPDATE_FAILURE, FEEDBACK_SUB_DELETE_REQUEST, FEEDBACK_SUB_DELETE_SUCCESS, FEEDBACK_SUB_DELETE_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_SUB_READ_REQUEST\", function() { return FEEDBACK_SUB_READ_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_SUB_READ_SUCCESS\", function() { return FEEDBACK_SUB_READ_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_SUB_READ_FAILURE\", function() { return FEEDBACK_SUB_READ_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_SUB_ADD_REQUEST\", function() { return FEEDBACK_SUB_ADD_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_SUB_ADD_SUCCESS\", function() { return FEEDBACK_SUB_ADD_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_SUB_ADD_FAILURE\", function() { return FEEDBACK_SUB_ADD_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_SUB_UPDATE_REQUEST\", function() { return FEEDBACK_SUB_UPDATE_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_SUB_UPDATE_SUCCESS\", function() { return FEEDBACK_SUB_UPDATE_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_SUB_UPDATE_FAILURE\", function() { return FEEDBACK_SUB_UPDATE_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_SUB_DELETE_REQUEST\", function() { return FEEDBACK_SUB_DELETE_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_SUB_DELETE_SUCCESS\", function() { return FEEDBACK_SUB_DELETE_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEEDBACK_SUB_DELETE_FAILURE\", function() { return FEEDBACK_SUB_DELETE_FAILURE; });\n/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ \"./node_modules/@babel/runtime-corejs2/core-js/parse-int.js\");\n/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js\");\n\n\nconst initialState = {\n  isLoadingSubject: false,\n  // 피드백 주제 로드 중\n  isLoadedSubject: false,\n  // 피드백 주제 로드 성공\n  LoadedSubjectErrorReason: '',\n  // 피드백 주제 실패 사유\n  isAddingSubject: false,\n  // 피드백 주제 저장 중\n  isAddedSubject: false,\n  // 피드백 주제 저장 성공\n  AddedSubjectErrorReason: '',\n  // 피드백 주제 저장 실패 사유\n  isUpdatingSubject: false,\n  // 피드백 주제 업데이트 중\n  isUpdatedSubject: false,\n  // 피드백 주제 업데이트 성공\n  UpdatedSubjectErrorReason: '',\n  // 피드백 주제 업데이트 실패 사유\n  isDeletingSubject: false,\n  // 피드백 주제 삭제 중\n  isDeletedSubject: false,\n  // 피드백 주제 삭제 성공\n  DeletedSubjectErrorReason: '',\n  // 피드백 주제 삭제 실패 사유\n  subject: []\n};\nconst FEEDBACK_SUB_READ_REQUEST = 'FEEDBACK_SUB_READ_REQUEST'; // 피드백 주제 READ 시도 중\n\nconst FEEDBACK_SUB_READ_SUCCESS = 'FEEDBACK_SUB_READ_SUCCESS'; // 피드백 주제 READ 성공\n\nconst FEEDBACK_SUB_READ_FAILURE = 'FEEDBACK_SUB_READ_FAILURE'; // 피드백 주제 READ 실패\n\nconst FEEDBACK_SUB_ADD_REQUEST = 'FEEDBACK_SUB_ADD_REQUEST'; // 피드백 주제 ADD 시도 중\n\nconst FEEDBACK_SUB_ADD_SUCCESS = 'FEEDBACK_SUB_ADD_SUCCESS'; // 피드백 주제 ADD 성공\n\nconst FEEDBACK_SUB_ADD_FAILURE = 'FEEDBACK_SUB_ADD_FAILURE'; // 피드백 주제 ADD 실패\n\nconst FEEDBACK_SUB_UPDATE_REQUEST = 'FEEDBACK_SUB_UPDATE_REQUEST'; // 피드백 주제 UPDATE 시도 중\n\nconst FEEDBACK_SUB_UPDATE_SUCCESS = 'FEEDBACK_SUB_UPDATE_SUCCESS'; // 피드백 주제 UPDATE 성공\n\nconst FEEDBACK_SUB_UPDATE_FAILURE = 'FEEDBACK_SUB_UPDATE_FAILURE'; // 피드백 주제 UPDATE 실패\n\nconst FEEDBACK_SUB_DELETE_REQUEST = 'FEEDBACK_SUB_DELETE_REQUEST'; // 피드백 주제 DELETE 시도 중\n\nconst FEEDBACK_SUB_DELETE_SUCCESS = 'FEEDBACK_SUB_DELETE_SUCCESS'; // 피드백 주제 DELETE 성공\n\nconst FEEDBACK_SUB_DELETE_FAILURE = 'FEEDBACK_SUB_DELETE_FAILURE'; // 피드백 주제 DELETE 실패\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = initialState, action) => {\n  switch (action.type) {\n    // 피드백 주제 READ\n    case FEEDBACK_SUB_READ_REQUEST:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n        isLoadingSubject: true,\n        isLoadedSubject: false\n      });\n\n    case FEEDBACK_SUB_READ_SUCCESS:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n        isLoadingSubject: false,\n        isLoadedSubject: true,\n        subject: action.data.success ? action.data.data : state.subject\n      });\n\n    case FEEDBACK_SUB_READ_FAILURE:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n        isLoadingSubject: false,\n        isLoadedSubject: false,\n        LoadedSubjectErrorReason: action.error\n      });\n    // 피드백 주제 ADD    \n\n    case FEEDBACK_SUB_ADD_REQUEST:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n        isAddingSubject: true,\n        isAddedSubject: false\n      });\n\n    case FEEDBACK_SUB_ADD_SUCCESS:\n      const addedData = action.data.success ? action.data.data[action.data.data.length - 1] : '';\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n        isAddingSubject: false,\n        isAddedSubject: true,\n        message: action.data.success ? action.data.message : '',\n        subject: action.data.success ? [...state.subject, addedData] : state.subject\n      });\n\n    case FEEDBACK_SUB_ADD_FAILURE:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n        isAddingSubject: false,\n        isAddedSubject: false,\n        AddedSubjectErrorReason: action.error\n      });\n    // 피드백 주제 UPDATE \n\n    case FEEDBACK_SUB_UPDATE_REQUEST:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n        isUpdatingSubject: true,\n        isUpdatedSubject: false\n      });\n\n    case FEEDBACK_SUB_UPDATE_SUCCESS:\n      let originalSubject = [];\n      let message = '';\n\n      if (action.data.success) {\n        const subjectIndex = state.subject.findIndex(v => v.category_id === action.data.data.category_id);\n        state.subject[subjectIndex] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, action.data.data);\n        originalSubject = [...state.subject];\n        message = action.data.message;\n      } else {\n        originalSubject = [...state.subject];\n        message = action.data.message;\n      }\n\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n        isUpdatingSubject: false,\n        isUpdatedSubject: true,\n        message: message,\n        subject: originalSubject\n      });\n\n    case FEEDBACK_SUB_UPDATE_FAILURE:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n        isUpdatingSubject: false,\n        isUpdatedSubject: true,\n        UpdatedSubjectErrorReason: action.error\n      });\n    // 피드백 주제 DELETE \n\n    case FEEDBACK_SUB_DELETE_REQUEST:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n        isDeletingSubject: true,\n        isDeletedSubject: false\n      });\n\n    case FEEDBACK_SUB_DELETE_SUCCESS:\n      const index = state.subject.findIndex(v => _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(v.category_id) === _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(action.data.data));\n      const deletedFeedback = state.subject.filter((v, i) => i !== index);\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n        isDeletingSubject: false,\n        isDeletedSubject: true,\n        message: action.data.message,\n        subject: action.data.success ? deletedFeedback : state.subject\n      });\n\n    case FEEDBACK_SUB_DELETE_FAILURE:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n        isDeletingSubject: false,\n        isDeletedSubject: false,\n        DeletedSubjectErrorReason: action.error\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./reducers/feedbackSubject.js?");

/***/ }),

/***/ "./reducers/friends.js":
/*!*****************************!*\
  !*** ./reducers/friends.js ***!
  \*****************************/
/*! exports provided: initialState, FRIENDS_MAIN_READ_REQUEST, FRIENDS_MAIN_READ_SUCCESS, FRIENDS_MAIN_READ_FAILURE, FRIENDS_MAIN_SEARCH_REQUEST, FRIENDS_MAIN_SEARCH_SUCCESS, FRIENDS_MAIN_SEARCH_FAILURE, FRIENDS_BLOCK_REQUEST, FRIENDS_BLOCK_SUCCESS, FRIENDS_BLOCK_FAILURE, FRIENDS_ADD_READ_REQUEST, FRIENDS_ADD_READ_SUCCESS, FRIENDS_ADD_READ_FAILURE, FRIENDS_ADD_SEARCH_REQUEST, FRIENDS_ADD_SEARCH_SUCCESS, FRIENDS_ADD_SEARCH_FAILURE, FRIENDS_ADD_ADD_REQUEST, FRIENDS_ADD_ADD_SUCCESS, FRIENDS_ADD_ADD_FAILURE, FRIENDS_RQ_READ_REQUEST, FRIENDS_RQ_READ_SUCCESS, FRIENDS_RQ_READ_FAILURE, FRIENDS_RQ_ADD_REQUEST, FRIENDS_RQ_ADD_SUCCESS, FRIENDS_RQ_ADD_FAILURE, FRIENDS_PROFILE_READ_REQUEST, FRIENDS_PROFILE_READ_SUCCESS, FRIENDS_PROFILE_READ_FAILURE, FRIENDS_PROFILE_ADD_REQUEST, FRIENDS_PROFILE_ADD_SUCCESS, FRIENDS_PROFILE_ADD_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_MAIN_READ_REQUEST\", function() { return FRIENDS_MAIN_READ_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_MAIN_READ_SUCCESS\", function() { return FRIENDS_MAIN_READ_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_MAIN_READ_FAILURE\", function() { return FRIENDS_MAIN_READ_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_MAIN_SEARCH_REQUEST\", function() { return FRIENDS_MAIN_SEARCH_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_MAIN_SEARCH_SUCCESS\", function() { return FRIENDS_MAIN_SEARCH_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_MAIN_SEARCH_FAILURE\", function() { return FRIENDS_MAIN_SEARCH_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_BLOCK_REQUEST\", function() { return FRIENDS_BLOCK_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_BLOCK_SUCCESS\", function() { return FRIENDS_BLOCK_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_BLOCK_FAILURE\", function() { return FRIENDS_BLOCK_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_ADD_READ_REQUEST\", function() { return FRIENDS_ADD_READ_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_ADD_READ_SUCCESS\", function() { return FRIENDS_ADD_READ_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_ADD_READ_FAILURE\", function() { return FRIENDS_ADD_READ_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_ADD_SEARCH_REQUEST\", function() { return FRIENDS_ADD_SEARCH_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_ADD_SEARCH_SUCCESS\", function() { return FRIENDS_ADD_SEARCH_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_ADD_SEARCH_FAILURE\", function() { return FRIENDS_ADD_SEARCH_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_ADD_ADD_REQUEST\", function() { return FRIENDS_ADD_ADD_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_ADD_ADD_SUCCESS\", function() { return FRIENDS_ADD_ADD_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_ADD_ADD_FAILURE\", function() { return FRIENDS_ADD_ADD_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_RQ_READ_REQUEST\", function() { return FRIENDS_RQ_READ_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_RQ_READ_SUCCESS\", function() { return FRIENDS_RQ_READ_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_RQ_READ_FAILURE\", function() { return FRIENDS_RQ_READ_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_RQ_ADD_REQUEST\", function() { return FRIENDS_RQ_ADD_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_RQ_ADD_SUCCESS\", function() { return FRIENDS_RQ_ADD_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_RQ_ADD_FAILURE\", function() { return FRIENDS_RQ_ADD_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_PROFILE_READ_REQUEST\", function() { return FRIENDS_PROFILE_READ_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_PROFILE_READ_SUCCESS\", function() { return FRIENDS_PROFILE_READ_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_PROFILE_READ_FAILURE\", function() { return FRIENDS_PROFILE_READ_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_PROFILE_ADD_REQUEST\", function() { return FRIENDS_PROFILE_ADD_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_PROFILE_ADD_SUCCESS\", function() { return FRIENDS_PROFILE_ADD_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRIENDS_PROFILE_ADD_FAILURE\", function() { return FRIENDS_PROFILE_ADD_FAILURE; });\nconst initialState = {};\nconst FRIENDS_MAIN_READ_REQUEST = 'FRIENDS_MAIN_READ_REQUEST'; // 친구 메인 창 READ 시도 중\n\nconst FRIENDS_MAIN_READ_SUCCESS = 'FRIENDS_MAIN_READ_SUCCESS'; // 친구 메인 창 READ 성공\n\nconst FRIENDS_MAIN_READ_FAILURE = 'FRIENDS_MAIN_READ_FAILURE'; // 친구 메인 창 READ 실패\n\nconst FRIENDS_MAIN_SEARCH_REQUEST = 'FRIENDS_MAIN_SEARCH_REQUEST'; // 친구 메인 창 SEARCH 시도 중\n\nconst FRIENDS_MAIN_SEARCH_SUCCESS = 'FRIENDS_MAIN_SEARCH_SUCCESS'; // 친구 메인 창 SEARCH 성공\n\nconst FRIENDS_MAIN_SEARCH_FAILURE = 'FRIENDS_MAIN_SEARCH_FAILURE'; // 친구 메인 창 SEARCH 실패\n\nconst FRIENDS_BLOCK_REQUEST = 'FRIENDS_BLOCK_REQUEST'; // 친구 차단 시도 중\n\nconst FRIENDS_BLOCK_SUCCESS = 'FRIENDS_BLOCK_SUCCESS'; // 친구 차단 성공\n\nconst FRIENDS_BLOCK_FAILURE = 'FRIENDS_BLOCK_FAILURE'; // 친구 차단 실패\n\nconst FRIENDS_ADD_READ_REQUEST = 'FRIENDS_ADD_READ_REQUEST'; // 친구 추가 모달 READ 시도 중\n\nconst FRIENDS_ADD_READ_SUCCESS = 'FRIENDS_ADD_READ_SUCCESS'; // 친구 추가 모달 READ 성공\n\nconst FRIENDS_ADD_READ_FAILURE = 'FRIENDS_ADD_READ_FAILURE'; // 친구 추가 모달 READ 실패\n\nconst FRIENDS_ADD_SEARCH_REQUEST = 'FRIENDS_ADD_SEARCH_REQUEST'; // 친구 추가 모달 SEARCH 시도 중\n\nconst FRIENDS_ADD_SEARCH_SUCCESS = 'FRIENDS_ADD_SEARCH_SUCCESS'; // 친구 추가 모달 SEARCH 성공\n\nconst FRIENDS_ADD_SEARCH_FAILURE = 'FRIENDS_ADD_SEARCH_FAILURE'; // 친구 추가 모달 SEARCH 실패\n\nconst FRIENDS_ADD_ADD_REQUEST = 'FRIENDS_ADD_ADD_REQUEST'; // 친구 추가 모달 친구 ADD 중\n\nconst FRIENDS_ADD_ADD_SUCCESS = 'FRIENDS_ADD_ADD_SUCCESS'; // 친구 추가 모달 친구 ADD 성공\n\nconst FRIENDS_ADD_ADD_FAILURE = 'FRIENDS_ADD_ADD_FAILURE'; // 친구 추가 모달 친구 ADD 실패\n\nconst FRIENDS_RQ_READ_REQUEST = 'FRIENDS_RQ_READ_REQUEST'; // 친구 요청 모달 READ 시도 중\n\nconst FRIENDS_RQ_READ_SUCCESS = 'FRIENDS_RQ_READ_SUCCESS'; // 친구 요청 모달 READ 성공\n\nconst FRIENDS_RQ_READ_FAILURE = 'FRIENDS_RQ_READ_FAILURE'; // 친구 요청 모달 READ 실패\n\nconst FRIENDS_RQ_ADD_REQUEST = 'FRIENDS_RQ_ADD_REQUEST'; // 친구 요청 모달 ADD 시도 중\n\nconst FRIENDS_RQ_ADD_SUCCESS = 'FRIENDS_RQ_ADD_SUCCESS'; // 친구 요청 모달 ADD 성공\n\nconst FRIENDS_RQ_ADD_FAILURE = 'FRIENDS_RQ_ADD_FAILURE'; // 친구 요청 모달 ADD 실패\n\nconst FRIENDS_PROFILE_READ_REQUEST = 'FRIENDS_PROFILE_READ_REQUEST'; // 친구 프로필 모달 READ 시도 중\n\nconst FRIENDS_PROFILE_READ_SUCCESS = 'FRIENDS_PROFILE_READ_SUCCESS'; // 친구 프로필 모달 READ 성공\n\nconst FRIENDS_PROFILE_READ_FAILURE = 'FRIENDS_PROFILE_READ_FAILURE'; // 친구 프로필 모달 READ 실패\n\nconst FRIENDS_PROFILE_ADD_REQUEST = 'FRIENDS_PROFILE_ADD_REQUEST'; // 친구 프로필 모달 사진 ADD 시도 중\n\nconst FRIENDS_PROFILE_ADD_SUCCESS = 'FRIENDS_PROFILE_ADD_SUCCESS'; // 친구 프로필 모달 사진 ADD 성공\n\nconst FRIENDS_PROFILE_ADD_FAILURE = 'FRIENDS_PROFILE_ADD_FAILURE'; // 친구 프로필 모달 사진 ADD 실패\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = initialState, action) => {\n  switch (action.type) {\n    // 친구 메인 창 READ\n    case FRIENDS_MAIN_READ_REQUEST:\n      return {};\n\n    case FRIENDS_MAIN_READ_SUCCESS:\n      return {};\n\n    case FRIENDS_MAIN_READ_FAILURE:\n      return {};\n    // 친구 메인 창 SEARCH\n\n    case FRIENDS_MAIN_SEARCH_REQUEST:\n      return {};\n\n    case FRIENDS_MAIN_SEARCH_SUCCESS:\n      return {};\n\n    case FRIENDS_MAIN_SEARCH_FAILURE:\n      return {};\n    // 친구 차단    \n\n    case FRIENDS_BLOCK_REQUEST:\n      return {};\n\n    case FRIENDS_BLOCK_SUCCESS:\n      return {};\n\n    case FRIENDS_BLOCK_FAILURE:\n      return {};\n    // 친구 추가 모달 READ\n\n    case FRIENDS_ADD_READ_REQUEST:\n      return {};\n\n    case FRIENDS_ADD_READ_SUCCESS:\n      return {};\n\n    case FRIENDS_ADD_READ_FAILURE:\n      return {};\n    // 친구 추가 모달 SEARCH\n\n    case FRIENDS_ADD_SEARCH_REQUEST:\n      return {};\n\n    case FRIENDS_ADD_SEARCH_SUCCESS:\n      return {};\n\n    case FRIENDS_ADD_SEARCH_FAILURE:\n      return {};\n    //친구 추가 모달 친구 ADD\n\n    case FRIENDS_ADD_ADD_REQUEST:\n      return {};\n\n    case FRIENDS_ADD_ADD_SUCCESS:\n      return {};\n\n    case FRIENDS_ADD_ADD_FAILURE:\n      return {};\n    // 친구 요청 모달 READ   \n\n    case FRIENDS_RQ_READ_REQUEST:\n      return {};\n\n    case FRIENDS_RQ_READ_SUCCESS:\n      return {};\n\n    case FRIENDS_RQ_READ_FAILURE:\n      return {};\n    // 친구 요청 모달 ADD  \n\n    case FRIENDS_RQ_ADD_REQUEST:\n      return {};\n\n    case FRIENDS_RQ_ADD_SUCCESS:\n      return {};\n\n    case FRIENDS_RQ_ADD_FAILURE:\n      return {};\n    // 친구 프로필 모달 READ   \n\n    case FRIENDS_PROFILE_READ_REQUEST:\n      return {};\n\n    case FRIENDS_PROFILE_READ_SUCCESS:\n      return {};\n\n    case FRIENDS_PROFILE_READ_FAILURE:\n      return {};\n    // 친구 프로필 모달 ADD   \n\n    case FRIENDS_PROFILE_ADD_REQUEST:\n      return {};\n\n    case FRIENDS_PROFILE_ADD_SUCCESS:\n      return {};\n\n    case FRIENDS_PROFILE_ADD_FAILURE:\n      return {};\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./reducers/friends.js?");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _friends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friends */ \"./reducers/friends.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback */ \"./reducers/feedback.js\");\n/* harmony import */ var _feedbackSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feedbackSubject */ \"./reducers/feedbackSubject.js\");\n/* harmony import */ var _feedbackMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedbackMode */ \"./reducers/feedbackMode.js\");\n\n\n\n\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  friends: _friends__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  user: _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  feedback: _feedback__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  feedbackSubject: _feedbackSubject__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  feedbackMode: _feedbackMode__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n//# sourceURL=webpack:///./reducers/index.js?");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, MOVE_TO_SIGNUP, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_HASEMAIL, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_HASEMAIL, SIGN_UP_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOVE_TO_SIGNUP\", function() { return MOVE_TO_SIGNUP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_REQUEST\", function() { return LOG_IN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_SUCCESS\", function() { return LOG_IN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_HASEMAIL\", function() { return LOG_IN_HASEMAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_FAILURE\", function() { return LOG_IN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_REQUEST\", function() { return SIGN_UP_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_SUCCESS\", function() { return SIGN_UP_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_HASEMAIL\", function() { return SIGN_UP_HASEMAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_FAILURE\", function() { return SIGN_UP_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_REQUEST\", function() { return LOAD_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_SUCCESS\", function() { return LOAD_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_FAILURE\", function() { return LOAD_USER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_REQUEST\", function() { return LOG_OUT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_SUCCESS\", function() { return LOG_OUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_FAILURE\", function() { return LOG_OUT_FAILURE; });\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js\");\n\nconst initialState = {\n  isLoggedIn: false,\n  // 로그인 여부\n  isLoggingIn: false,\n  // 로그인 시도중\n  logInErrorReason: '',\n  // 로그인 실패 사유\n  isSignedUp: false,\n  // 회원가입 성공\n  isSigningUp: false,\n  // 회원가입 시도중\n  hasMessage: false,\n  // 로그인, 회원가입 실패 - 메시지\n  signUpErrorReason: '',\n  // 회원가입 실패 사유 \n  isLoggingOut: false,\n  // 로그아웃 시도중\n  isLogout: false,\n  // 로그아웃 여부\n  logOutReason: '',\n  // 로그아웃 실패 사유\n  isLoadingMyInfo: false,\n  // 마이페이지 로드 중\n  isLoadedMyInfo: false,\n  // 마이페이지 성공\n  LoadedMyInfoReason: '',\n  // 마이페이지 실패 사유\n  me: {\n    email: '',\n    nickname: '',\n    introduction: '',\n    portrait: '',\n    tutorial: null,\n    msg: ''\n  } // 내 정보 \n\n};\nconst MOVE_TO_SIGNUP = 'MOVE_TO_SIGNUP'; // 회원가입 창 이동\n\nconst LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 로그인 시도 중\n\nconst LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 로그인 성공\n\nconst LOG_IN_HASEMAIL = 'LOG_IN_HASEMAIL'; // 회원가입 이메일 있는 경우\n\nconst LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 로그인 실패\n\nconst SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'; // 회원가입 시도 중\n\nconst SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'; // 회원가입 성공\n\nconst SIGN_UP_HASEMAIL = 'SIGN_UP_HASEMAIL'; // 회원가입 이메일 있는 경우\n\nconst SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'; // 회원가입 실패\n\nconst LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'; // 사용자 정보 가져오는 중\n\nconst LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'; // 사용자 정보 가져오기 성공\n\nconst LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'; // 사용자 정보 가져오기 실패\n\nconst LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'; // 로그아웃 시도 중\n\nconst LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'; // 로그아웃 성공\n\nconst LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // 로그아웃 실패\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = initialState, action) => {\n  switch (action.type) {\n    case MOVE_TO_SIGNUP:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isSigningUp: false,\n        isSignedUp: false,\n        hasMessage: false,\n        me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.me, {\n          email: '',\n          password: '',\n          nickname: '',\n          msg: ''\n        })\n      });\n\n    case LOG_IN_HASEMAIL:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isLoggingIn: false,\n        isLoggedIn: false,\n        hasMessage: true,\n        me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.me, {\n          email: '',\n          nickname: '',\n          msg: action.data\n        })\n      });\n\n    case LOG_IN_REQUEST:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isLoggingIn: true\n      });\n\n    case LOG_IN_SUCCESS:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isLoggingIn: false,\n        isLoggedIn: true,\n        hasMessage: false,\n        me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.me, {\n          email: action.data.email,\n          introduction: action.data.introduction,\n          portrait: action.data.portrait,\n          nickname: action.data.nickname,\n          tutorial: action.data.tutorial\n        })\n      });\n\n    case LOG_IN_FAILURE:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isLoggingIn: false,\n        isLoggedIn: false,\n        logInErrorReason: action.error,\n        me: null\n      });\n\n    case SIGN_UP_REQUEST:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isSigningUp: true\n      });\n\n    case SIGN_UP_HASEMAIL:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isSigningUp: false,\n        isSignedUp: false,\n        hasMessage: true,\n        me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.me, {\n          email: '',\n          nickname: '',\n          msg: action.data.msg\n        })\n      });\n\n    case SIGN_UP_SUCCESS:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isSigningUp: false,\n        isSignedUp: true,\n        hasMessage: false,\n        me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.me, {\n          email: action.data.email,\n          nickname: action.data.nickname,\n          msg: ''\n        })\n      });\n\n    case SIGN_UP_FAILURE:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isSigningUp: false,\n        isSignedUp: false,\n        hasMessage: false,\n        signUpErrorReason: action.error,\n        me: null\n      });\n\n    case LOAD_USER_REQUEST:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isLoadingMyInfo: true,\n        isLoadedMyInfo: false\n      });\n\n    case LOAD_USER_SUCCESS:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isLoadingMyInfo: false,\n        isLoadedMyInfo: true,\n        me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.me, {\n          email: action.data.email,\n          introduction: action.data.introduction,\n          portrait: action.data.portrait,\n          nickname: action.data.nickname,\n          tutorial: action.data.tutorial\n        })\n      });\n\n    case LOAD_USER_FAILURE:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isLoadingMyInfo: false,\n        isLoadedMyInfo: false,\n        LoadedMyInfoReason: action.error,\n        me: null\n      });\n\n    case LOG_OUT_REQUEST:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isLoggingOut: true,\n        isLogout: false\n      });\n\n    case LOG_OUT_SUCCESS:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isLoggedIn: false,\n        isLoggingOut: false,\n        isLogout: true\n      });\n\n    case LOG_OUT_FAILURE:\n      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        isLoggingOut: false,\n        isLogout: false,\n        logOutReason: action.error\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./reducers/user.js?");

/***/ }),

/***/ "./sagas/feedback.js":
/*!***************************!*\
  !*** ./sagas/feedback.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return feedbackSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/feedback */ \"./reducers/feedback.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\n\n\nconst dev = \"development\" !== \"production\";\nconst prod = \"development\" === \"production\";\n\nif (prod) {\n  axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = \"http://54.180.118.35\";\n} else {\n  axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = \"http://localhost:8000\";\n} // Feedback 피드백 게시물 댓글 Read\n\n\nfunction feedback_Item_Comment_API() {// return axios.get('/#');\n}\n\n;\n\nfunction* feedback_Item_Comment() {\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(2000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(feedback_Item_Comment_API);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_ITEM_COMMENT_SUCCESS\"]\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_ITEM_COMMENT_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFeedback_Item_Comment() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_ITEM_COMMENT_REQUEST\"], feedback_Item_Comment);\n}\n\n; // Feedback 피드백 게시물 세부사항 Read\n\nfunction feedback_Item_Complete_API() {// return axios.get('/#');\n}\n\n;\n\nfunction* feedback_Item_Complete() {\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(2000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(feedback_Item_Complete_API);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_ITEM_COMPLETE_SUCCESS\"]\n    });\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_ITEM_COMPLETE_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFeedback_Item_Complete() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_ITEM_COMPLETE_REQUEST\"], feedback_Item_Complete);\n}\n\n; // Feedback 피드백 게시물 Add\n\nfunction feedback_Item_Add_API() {// return axios.post('/#');\n}\n\n;\n\nfunction* feedback_Item_Add(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(feedback_Item_Add_API, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_ITEM_ADD_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_ITEM_ADD_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFeedback_Item_Add() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_ITEM_ADD_REQUEST\"], feedback_Item_Add);\n}\n\n; // Feedback 피드백 게시물 Read\n\nfunction feedback_Item_Read_API() {// return axios.get('/#');\n}\n\n;\n\nfunction* feedback_Item_Read() {\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(2000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(feedback_Item_Read_API);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_ITEM_READ_SUCCESS\"]\n    });\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_ITEM_READ_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFeedback_Item_Read() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_ITEM_READ_REQUEST\"], feedback_Item_Read);\n}\n\n; // Feedback 새 피드백 Add\n\nfunction feedback_Add_API(data) {\n  console.log(data, \"result\");\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/feedback/create', data, {\n    withCredentials: true\n  });\n}\n\n;\n\nfunction* feedback_Add(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(feedback_Add_API, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_ADD_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_ADD_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFeedback_Add() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_ADD_REQUEST\"], feedback_Add);\n}\n\n; // Feedback 메인화면 Read\n\nfunction feedback_Read_API(lastId = 0, start = 10) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/feedback/all/${start}`, {\n    withCredentials: true\n  });\n}\n\n;\n\nfunction* feedback_Read(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(feedback_Read_API, action.data);\n    console.log(result.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_READ_SUCCESS\"],\n      data: result.data\n    });\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOG_IN_SUCCESS\"],\n      data: result.data.data.user\n    });\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_READ_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFeedback_Read() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"throttle\"])(2000, _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_READ_REQUEST\"], feedback_Read);\n}\n\n; // Feedback 튜토리얼\n\nfunction feedback_Tutorial_API(data) {// return axios.get('http://54.180.118.35/auth/me',{\n  //     withCredentials:true\n  // });\n}\n\n;\n\nfunction* feedback_Tutorial(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(feedback_Tutorial_API, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_TUTORIAL_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_TUTORIAL_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFeedback_Toturial() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_feedback__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_TUTORIAL_REQUEST\"], feedback_Tutorial);\n}\n\n;\nfunction* feedbackSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFeedback_Toturial), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFeedback_Read), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFeedback_Add), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFeedback_Item_Read), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFeedback_Item_Add), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFeedback_Item_Complete), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFeedback_Item_Comment)]);\n}\n\n//# sourceURL=webpack:///./sagas/feedback.js?");

/***/ }),

/***/ "./sagas/feedbackSubject.js":
/*!**********************************!*\
  !*** ./sagas/feedbackSubject.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return feedbackSubjectSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/feedbackSubject */ \"./reducers/feedbackSubject.js\");\n\n\n\nconst dev = \"development\" !== \"production\";\nconst prod = \"development\" === \"production\";\naxios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = \"http://localhost:8000\";\n\nif (prod) {\n  axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = \"http://54.180.118.35\";\n} else {\n  axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = \"http://localhost:8000\";\n} // 피드백 주제 Delete\n\n\nfunction feedback_Sub_Delete_API(category_id) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/category/deleteone/${category_id}`, {\n    withCredentials: true\n  });\n}\n\n;\n\nfunction* feedback_Sub_Delete(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(feedback_Sub_Delete_API, action.id);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_SUB_DELETE_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_SUB_DELETE_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFeedback_Sub_Delete() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_SUB_DELETE_REQUEST\"], feedback_Sub_Delete);\n}\n\n; // 피드백 주제 Update\n\nfunction feedback_Sub_Update_API(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/category/update/${data.category_id}`, data, {\n    withCredentials: true\n  });\n}\n\n;\n\nfunction* feedback_Sub_Update(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(feedback_Sub_Update_API, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_SUB_UPDATE_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_SUB_UPDATE_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFeedback_Sub_Update() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_SUB_UPDATE_REQUEST\"], feedback_Sub_Update);\n}\n\n; // 피드백 주제 Add\n\nfunction feedback_Sub_Add_API(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/category/insert', data, {\n    withCredentials: true\n  });\n}\n\n;\n\nfunction* feedback_Sub_Add(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(feedback_Sub_Add_API, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_SUB_ADD_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_SUB_ADD_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFeedback_Sub_Add() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_SUB_ADD_REQUEST\"], feedback_Sub_Add);\n}\n\n; // 피드백 주제 메인 Read\n\nfunction feedback_Sub_Read_API() {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/category/selectall', {\n    withCredentials: true\n  });\n}\n\n;\n\nfunction* feedback_Sub_Read() {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(feedback_Sub_Read_API);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_SUB_READ_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_SUB_READ_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFeedback_Sub_Read() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__[\"FEEDBACK_SUB_READ_REQUEST\"], feedback_Sub_Read);\n}\n\n;\nfunction* feedbackSubjectSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFeedback_Sub_Read), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFeedback_Sub_Add), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFeedback_Sub_Update), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFeedback_Sub_Delete)]);\n}\n\n//# sourceURL=webpack:///./sagas/feedbackSubject.js?");

/***/ }),

/***/ "./sagas/friends.js":
/*!**************************!*\
  !*** ./sagas/friends.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return friendsSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers_friends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/friends */ \"./reducers/friends.js\");\n\n\n // 친구 프로필 Add\n\nfunction friends_Pro_Add_API(data) {// return axios.post('/#');\n}\n\n;\n\nfunction* friends_Pro_Add(action) {\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(2000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(friends_Pro_Add_API, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_PROFILE_ADD_SUCCESS\"]\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_PROFILE_ADD_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFriends_Pro_Add() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_PROFILE_ADD_REQUEST\"], friends_Pro_Add);\n}\n\n; // 친구 프로필 Read\n\nfunction friends_Pro_Read_API() {// return axios.get('/#');\n}\n\n;\n\nfunction* friends_Pro_Read() {\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(2000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(friends_Pro_Read_API);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_PROFILE_READ_SUCCESS\"]\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_PROFILE_READ_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFriends_Pro_Read() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_PROFILE_READ_REQUEST\"], friends_Pro_Read);\n}\n\n; // 친구 요청 모달 Add\n\nfunction friends_Req_Add_API(data) {// return axios.post('/#');\n}\n\n;\n\nfunction* friends_Req_Add(action) {\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(2000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(friends_Req_Add_API, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_RQ_ADD_SUCCESS\"]\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_RQ_ADD_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFriends_Req_Add() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_RQ_ADD_REQUEST\"], friends_Req_Add);\n}\n\n; // 친구 요청 모달 Read\n\nfunction friends_Req_Read_API() {// return axios.get('/#');\n}\n\n;\n\nfunction* friends_Req_Read() {\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(2000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(friends_Req_Read_API);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_RQ_READ_SUCCESS\"]\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_RQ_READ_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFriends_Req_Read() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_RQ_READ_REQUEST\"], friends_Req_Read);\n}\n\n; // 친구 추가 모달 Add\n\nfunction friends_Add_Add_API(data) {// return axios.post('/#');\n}\n\n;\n\nfunction* friends_Add_Add(action) {\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(2000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(friends_Add_Add_API, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_ADD_ADD_SUCCESS\"]\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_ADD_ADD_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFriends_Add_Add() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_ADD_ADD_REQUEST\"], friends_Add_Add);\n}\n\n; // 친구 추가 모달 Search\n\nfunction friends_Add_Search_API(data) {// return axios.get('/#');\n}\n\n;\n\nfunction* friends_Add_Search(action) {\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(2000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(friends_Add_Search_API, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_ADD_SEARCH_SUCCESS\"]\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_ADD_SEARCH_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFriends_Add_Search() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_ADD_SEARCH_REQUEST\"], friends_Add_Search);\n}\n\n; // 친구 추가 모달 Read\n\nfunction friends_Add_Read_API() {// return axios.get('/#');\n}\n\n;\n\nfunction* friends_Add_Read() {\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(2000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(friends_Add_Read_API);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_ADD_READ_SUCCESS\"]\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_ADD_READ_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFriends_Add_Read() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_ADD_READ_REQUEST\"], friends_Add_Read);\n}\n\n; // 친구 차단\n\nfunction friends_Block_API(data) {// return axios.delete();\n}\n\n;\n\nfunction* friends_Block(action) {\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(2000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(friends_Block_API, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_BLOCK_SUCCESS\"]\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_BLOCK_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFriends_Block() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_BLOCK_REQUEST\"], friends_Block);\n}\n\n; // 친구 메인창 Search\n\nfunction friends_Search_API(data) {// return axios.get('/#');\n}\n\n;\n\nfunction* friends_Search(action) {\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(2000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(friends_Search_API, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_MAIN_SEARCH_SUCCESS\"]\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_MAIN_SEARCH_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFriends_Search() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_MAIN_SEARCH_REQUEST\"], friends_Search);\n}\n\n; // 친구 메인창 Read\n\nfunction friends_Read_API() {// return axios.get('/#');\n}\n\n;\n\nfunction* friends_Read() {\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(2000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(friends_Read_API);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_MAIN_READ_SUCCESS\"]\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_MAIN_READ_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchFriends_Read() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_friends__WEBPACK_IMPORTED_MODULE_2__[\"FRIENDS_MAIN_READ_REQUEST\"], friends_Read);\n}\n\n;\nfunction* friendsSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFriends_Read), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFriends_Search), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFriends_Block), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFriends_Add_Read), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFriends_Add_Search), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFriends_Add_Add), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFriends_Req_Read), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFriends_Req_Add), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFriends_Pro_Read), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFriends_Pro_Add)]);\n}\n\n//# sourceURL=webpack:///./sagas/friends.js?");

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./sagas/user.js\");\n/* harmony import */ var _feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback */ \"./sagas/feedback.js\");\n/* harmony import */ var _friends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./friends */ \"./sagas/friends.js\");\n/* harmony import */ var _feedbackSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feedbackSubject */ \"./sagas/feedbackSubject.js\");\n\n\n\n\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_feedback__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_friends__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_feedbackSubject__WEBPACK_IMPORTED_MODULE_4__[\"default\"])]);\n}\n;\n\n//# sourceURL=webpack:///./sagas/index.js?");

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\n\nconst dev = \"development\" !== \"production\";\nconst prod = \"development\" === \"production\";\n\nif (prod) {\n  axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = \"http://54.180.118.35\";\n} else {\n  axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = \"http://localhost:8000\";\n} // 마이페이지\n\n\nfunction logUserAPI() {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/auth/me', {\n    withCredentials: true\n  });\n}\n\n;\n\nfunction* loadUser() {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(logUserAPI);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_USER_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_USER_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchLoadUser() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_USER_REQUEST\"], loadUser);\n}\n\n; // 로그아웃\n\nfunction logOutAPI() {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/auth/logout', {\n    withCredentials: true\n  });\n}\n\n;\n\nfunction* logOut() {\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(logOutAPI);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_OUT_SUCCESS\"]\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_OUT_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchLogOut() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_OUT_REQUEST\"], logOut);\n}\n\n; // 로그인\n\nfunction loginAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/auth/login', data, {\n    withCredentials: true\n  });\n}\n\n;\n\nfunction* login(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(loginAPI, action.data);\n    console.log(result);\n    !result.data.email ? yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_IN_HASEMAIL\"],\n      data: result.data\n    }) : yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_IN_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_IN_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchLogin() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_IN_REQUEST\"], login);\n}\n\n; // 회원가입\n\nfunction signUpAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/auth/signup', data);\n}\n\n;\n\nfunction* signUp(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(signUpAPI, action.data);\n    console.log(result);\n    result.data.msg ? yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_UP_HASEMAIL\"],\n      data: result.data\n    }) : yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_UP_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_UP_FAILURE\"],\n      error: e\n    });\n  }\n}\n\n;\n\nfunction* watchSignUp() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_UP_REQUEST\"], signUp);\n}\n\n;\nfunction* userSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLoadUser)]);\n}\n\n//# sourceURL=webpack:///./sagas/user.js?");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! private-next-pages/_app.js */\"./pages/_app.js\");\n\n\n//# sourceURL=webpack:///multi_private-next-pages/_app.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/assign\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/assign%22?");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/define-property\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/define-property%22?");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/get-own-property-descriptor\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/get-own-property-descriptor%22?");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/get-own-property-symbols\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/get-own-property-symbols%22?");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/keys\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/keys%22?");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/parse-int\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/parse-int%22?");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-saga\");\n\n//# sourceURL=webpack:///external_%22next-redux-saga%22?");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");\n\n//# sourceURL=webpack:///external_%22next-redux-wrapper%22?");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");\n\n//# sourceURL=webpack:///external_%22next/head%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");\n\n//# sourceURL=webpack:///external_%22redux-saga%22?");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");\n\n//# sourceURL=webpack:///external_%22redux-saga/effects%22?");

/***/ })

/******/ });