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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\remindFB\\front\\components\\AppHeader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Header = () => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "RemindFeedBack"), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var _components_AppHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/AppHeader */ "./components/AppHeader.js");

var _jsxFileName = "D:\\remindFB\\front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const RemindFeedback = ({
  Component,
  store,
  pageProps
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(_components_AppHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }))));
};

RemindFeedback.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired,
  store: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

RemindFeedback.getInitialProps = async context => {
  const {
    ctx,
    Component
  } = context; // console.log(context);

  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_7___default()();
  const middlewares = [sagaMiddleware];
  const enhancer =  false ? undefined : Object(redux__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_5__["applyMiddleware"])(...middlewares), !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_5__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_8__["default"], initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_9__["default"]);
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(configureStore)(next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default()(RemindFeedback)));

/***/ }),

/***/ "./reducers/feedback.js":
/*!******************************!*\
  !*** ./reducers/feedback.js ***!
  \******************************/
/*! exports provided: initialState, FEEDBACK_TUTORIAL_REQUEST, FEEDBACK_TUTORIAL_SUCCESS, FEEDBACK_TUTORIAL_FAILURE, FEEDBACK_READ_REQUEST, FEEDBACK_READ_SUCCESS, FEEDBACK_READ_FAILURE, FEEDBACK_ADD_REQUEST, FEEDBACK_ADD_SUCCESS, FEEDBACK_ADD_FAILURE, FEEDBACK_ITEM_READ_REQUEST, FEEDBACK_ITEM_READ_SUCCESS, FEEDBACK_ITEM_READ_FAILURE, FEEDBACK_ITEM_ADD_REQUEST, FEEDBACK_ITEM_ADD_SUCCESS, FEEDBACK_ITEM_ADD_FAILURE, FEEDBACK_ITEM_COMPLETE_REQUEST, FEEDBACK_ITEM_COMPLETE_SUCCESS, FEEDBACK_ITEM_COMPLETE_FAILURE, FEEDBACK_ITEM_COMMENT_REQUEST, FEEDBACK_ITEM_COMMENT_SUCCESS, FEEDBACK_ITEM_COMMENT_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_TUTORIAL_REQUEST", function() { return FEEDBACK_TUTORIAL_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_TUTORIAL_SUCCESS", function() { return FEEDBACK_TUTORIAL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_TUTORIAL_FAILURE", function() { return FEEDBACK_TUTORIAL_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_READ_REQUEST", function() { return FEEDBACK_READ_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_READ_SUCCESS", function() { return FEEDBACK_READ_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_READ_FAILURE", function() { return FEEDBACK_READ_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_ADD_REQUEST", function() { return FEEDBACK_ADD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_ADD_SUCCESS", function() { return FEEDBACK_ADD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_ADD_FAILURE", function() { return FEEDBACK_ADD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_ITEM_READ_REQUEST", function() { return FEEDBACK_ITEM_READ_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_ITEM_READ_SUCCESS", function() { return FEEDBACK_ITEM_READ_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_ITEM_READ_FAILURE", function() { return FEEDBACK_ITEM_READ_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_ITEM_ADD_REQUEST", function() { return FEEDBACK_ITEM_ADD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_ITEM_ADD_SUCCESS", function() { return FEEDBACK_ITEM_ADD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_ITEM_ADD_FAILURE", function() { return FEEDBACK_ITEM_ADD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_ITEM_COMPLETE_REQUEST", function() { return FEEDBACK_ITEM_COMPLETE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_ITEM_COMPLETE_SUCCESS", function() { return FEEDBACK_ITEM_COMPLETE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_ITEM_COMPLETE_FAILURE", function() { return FEEDBACK_ITEM_COMPLETE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_ITEM_COMMENT_REQUEST", function() { return FEEDBACK_ITEM_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_ITEM_COMMENT_SUCCESS", function() { return FEEDBACK_ITEM_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_ITEM_COMMENT_FAILURE", function() { return FEEDBACK_ITEM_COMMENT_FAILURE; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

const initialState = {
  feedback: [],
  isAdddingFirstSubject: false,
  // 피드백 튜토리얼 첫번째 주제 저장 중
  isAddedFirstSubject: false,
  // 피드백 튜토리얼 첫번째 주제 저장 완료
  AddedFirstSubjectErrorReason: '',
  // 피드백 튜토리얼 첫번째 주제 저장 실패 사유
  isLoadingFeedback: false,
  // 피드백 데이터 로드 중
  isLoadedFeedback: false,
  // 피드백 데이터 로드 성공
  LoadedFeedbackErrorReason: '',
  // 피드백 데이터 실패 사유
  isAdddingFeedback: false,
  // 피드백 추가 중
  isAddedFeedback: false,
  // 피드백 추가 완료
  AddedFeedbackErrorReason: '' // 피드백 추가 실패 사유

};
const FEEDBACK_TUTORIAL_REQUEST = 'FEEDBACK_TUTORIAL_REQUEST'; // 피드백 튜토리얼 시도 중

const FEEDBACK_TUTORIAL_SUCCESS = 'FEEDBACK_TUTORIAL_SUCCESS'; // 피드백 튜토리얼 성공

const FEEDBACK_TUTORIAL_FAILURE = 'FEEDBACK_TUTORIAL_FAILURE'; // 피드백 튜토리얼 실패

const FEEDBACK_READ_REQUEST = 'FEEDBACK_READ_REQUEST'; // 피드백 READ 시도 중

const FEEDBACK_READ_SUCCESS = 'FEEDBACK_READ_SUCCESS'; // 피드백 READ 성공

const FEEDBACK_READ_FAILURE = 'FEEDBACK_READ_FAILURE'; // 피드백 READ 실패

const FEEDBACK_ADD_REQUEST = 'FEEDBACK_ADD_REQUEST'; // 피드백 ADD 시도 중

const FEEDBACK_ADD_SUCCESS = 'FEEDBACK_ADD_SUCCESS'; // 피드백 ADD 성공

const FEEDBACK_ADD_FAILURE = 'FEEDBACK_ADD_FAILURE'; // 피드백 ADD 실패

const FEEDBACK_ITEM_READ_REQUEST = 'FEEDBACK_ITEM_READ_REQUEST'; // 피드백 게시물 READ 시도 중

const FEEDBACK_ITEM_READ_SUCCESS = 'FEEDBACK_ITEM_READ_SUCCESS'; // 피드백 게시물 READ 성공

const FEEDBACK_ITEM_READ_FAILURE = 'FEEDBACK_ITEM_READ_FAILURE'; // 피드백 게시물 READ 실패

const FEEDBACK_ITEM_ADD_REQUEST = 'FEEDBACK_ITEM_ADD_REQUEST'; // 피드백 게시물 ADD 시도 중

const FEEDBACK_ITEM_ADD_SUCCESS = 'FEEDBACK_ITEM_ADD_SUCCESS'; // 피드백 게시물 ADD 성공

const FEEDBACK_ITEM_ADD_FAILURE = 'FEEDBACK_ITEM_ADD_FAILURE'; // 피드백 게시물 ADD 실패

const FEEDBACK_ITEM_COMPLETE_REQUEST = 'FEEDBACK_ITEM_COMPLETE_REQUEST'; // 피드백 게시물 완료 시도 중

const FEEDBACK_ITEM_COMPLETE_SUCCESS = 'FEEDBACK_ITEM_COMPLETE_SUCCESS'; // 피드백 게시물 완료 성공

const FEEDBACK_ITEM_COMPLETE_FAILURE = 'FEEDBACK_ITEM_COMPLETE_FAILURE'; // 피드백 게시물 완료 실패

const FEEDBACK_ITEM_COMMENT_REQUEST = 'FEEDBACK_ITEM_COMMENT_REQUEST'; // 피드백 게시물 댓글 ADD 시도 중

const FEEDBACK_ITEM_COMMENT_SUCCESS = 'FEEDBACK_ITEM_COMMENT_SUCCESS'; // 피드백 게시물 댓글 ADD 성공

const FEEDBACK_ITEM_COMMENT_FAILURE = 'FEEDBACK_ITEM_COMMENT_FAILURE'; // 피드백 게시물 댓글 ADD 실패

/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    // 피드백 튜토리얼 
    case FEEDBACK_TUTORIAL_REQUEST:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isAdddingFirstSubject: true,
        isAddedFirstSubject: false
      });

    case FEEDBACK_TUTORIAL_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isAdddingFirstSubject: false,
        isAddedFirstSubject: true
      });

    case FEEDBACK_TUTORIAL_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isAdddingFirstSubject: false,
        isAddedFirstSubject: false,
        AddedFirstSubjectErrorReason: action.error
      });
    // 피드백 READ

    case FEEDBACK_READ_REQUEST:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoadingFeedback: true,
        isLoadedFeedback: false
      });

    case FEEDBACK_READ_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoadingFeedback: false,
        isLoadedFeedback: true,
        feedback: action.data.feedback
      });

    case FEEDBACK_READ_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoadingFeedback: false,
        isLoadedFeedback: false,
        LoadedFeedbackErrorReason: action.error
      });
    // 피드백 ADD

    case FEEDBACK_ADD_REQUEST:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isAdddingFeedback: true,
        isAdddingFeedback: false
      });

    case FEEDBACK_ADD_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isAdddingFeedback: false,
        isAdddingFeedback: true
      });

    case FEEDBACK_ADD_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isAdddingFeedback: false,
        isAdddingFeedback: false,
        AddedFeedbackErrorReason: action.error
      });
    // 피드백 게시물 READ 

    case FEEDBACK_ITEM_READ_REQUEST:
      return {};

    case FEEDBACK_ITEM_READ_SUCCESS:
      return {};

    case FEEDBACK_ITEM_READ_FAILURE:
      return {};
    // 피드백 게시물 ADD 

    case FEEDBACK_ITEM_ADD_REQUEST:
      return {};

    case FEEDBACK_ITEM_ADD_SUCCESS:
      return {};

    case FEEDBACK_ITEM_ADD_FAILURE:
      return {};
    // 피드백 게시물 완료 

    case FEEDBACK_ITEM_COMPLETE_REQUEST:
      return {};

    case FEEDBACK_ITEM_COMPLETE_SUCCESS:
      return {};

    case FEEDBACK_ITEM_COMPLETE_FAILURE:
      return {};
    // 피드백 게시물 댓글 ADD 

    case FEEDBACK_ITEM_COMMENT_REQUEST:
      return {};

    case FEEDBACK_ITEM_COMMENT_SUCCESS:
      return {};

    case FEEDBACK_ITEM_COMMENT_FAILURE:
      return {};

    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/feedbackMode.js":
/*!**********************************!*\
  !*** ./reducers/feedbackMode.js ***!
  \**********************************/
/*! exports provided: initialState, FEEDBACK_MODE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_MODE", function() { return FEEDBACK_MODE; });
const initialState = {
  feedbackMode: false
};
const FEEDBACK_MODE = 'FEEDBACK_MODE'; // GET피드백 -> SET 피드백

/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case FEEDBACK_MODE:
      {
        return {
          feedbackMode: action.data
        };
      }
      ;

    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/feedbackSubject.js":
/*!*************************************!*\
  !*** ./reducers/feedbackSubject.js ***!
  \*************************************/
/*! exports provided: initialState, FEEDBACK_SUB_READ_REQUEST, FEEDBACK_SUB_READ_SUCCESS, FEEDBACK_SUB_READ_FAILURE, FEEDBACK_SUB_ADD_REQUEST, FEEDBACK_SUB_ADD_SUCCESS, FEEDBACK_SUB_ADD_FAILURE, FEEDBACK_SUB_UPDATE_REQUEST, FEEDBACK_SUB_UPDATE_SUCCESS, FEEDBACK_SUB_UPDATE_FAILURE, FEEDBACK_SUB_DELETE_REQUEST, FEEDBACK_SUB_DELETE_SUCCESS, FEEDBACK_SUB_DELETE_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_SUB_READ_REQUEST", function() { return FEEDBACK_SUB_READ_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_SUB_READ_SUCCESS", function() { return FEEDBACK_SUB_READ_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_SUB_READ_FAILURE", function() { return FEEDBACK_SUB_READ_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_SUB_ADD_REQUEST", function() { return FEEDBACK_SUB_ADD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_SUB_ADD_SUCCESS", function() { return FEEDBACK_SUB_ADD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_SUB_ADD_FAILURE", function() { return FEEDBACK_SUB_ADD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_SUB_UPDATE_REQUEST", function() { return FEEDBACK_SUB_UPDATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_SUB_UPDATE_SUCCESS", function() { return FEEDBACK_SUB_UPDATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_SUB_UPDATE_FAILURE", function() { return FEEDBACK_SUB_UPDATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_SUB_DELETE_REQUEST", function() { return FEEDBACK_SUB_DELETE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_SUB_DELETE_SUCCESS", function() { return FEEDBACK_SUB_DELETE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_SUB_DELETE_FAILURE", function() { return FEEDBACK_SUB_DELETE_FAILURE; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

const initialState = {
  isLoadingSubject: false,
  // 피드백 주제 로드 중
  isLoadedSubject: false,
  // 피드백 주제 로드 성공
  LoadedSubjectErrorReason: '',
  // 피드백 주제 실패 사유
  isAddingSubject: false,
  // 피드백 주제 저장 중
  isAddedSubject: false,
  // 피드백 주제 저장 성공
  AddedSubjectErrorReason: '',
  // 피드백 주제 저장 실패 사유
  isUpdatingSubject: false,
  // 피드백 주제 업데이트 중
  isUpdatedSubject: false,
  // 피드백 주제 업데이트 성공
  UpdatedSubjectErrorReason: '',
  // 피드백 주제 업데이트 실패 사유
  isDeletingSubject: false,
  // 피드백 주제 삭제 중
  isDeletedSubject: false,
  // 피드백 주제 삭제 성공
  DeletedSubjectErrorReason: '',
  // 피드백 주제 삭제 실패 사유
  subject: []
};
const FEEDBACK_SUB_READ_REQUEST = 'FEEDBACK_SUB_READ_REQUEST'; // 피드백 주제 READ 시도 중

const FEEDBACK_SUB_READ_SUCCESS = 'FEEDBACK_SUB_READ_SUCCESS'; // 피드백 주제 READ 성공

const FEEDBACK_SUB_READ_FAILURE = 'FEEDBACK_SUB_READ_FAILURE'; // 피드백 주제 READ 실패

const FEEDBACK_SUB_ADD_REQUEST = 'FEEDBACK_SUB_ADD_REQUEST'; // 피드백 주제 ADD 시도 중

const FEEDBACK_SUB_ADD_SUCCESS = 'FEEDBACK_SUB_ADD_SUCCESS'; // 피드백 주제 ADD 성공

const FEEDBACK_SUB_ADD_FAILURE = 'FEEDBACK_SUB_ADD_FAILURE'; // 피드백 주제 ADD 실패

const FEEDBACK_SUB_UPDATE_REQUEST = 'FEEDBACK_SUB_UPDATE_REQUEST'; // 피드백 주제 UPDATE 시도 중

const FEEDBACK_SUB_UPDATE_SUCCESS = 'FEEDBACK_SUB_UPDATE_SUCCESS'; // 피드백 주제 UPDATE 성공

const FEEDBACK_SUB_UPDATE_FAILURE = 'FEEDBACK_SUB_UPDATE_FAILURE'; // 피드백 주제 UPDATE 실패

const FEEDBACK_SUB_DELETE_REQUEST = 'FEEDBACK_SUB_DELETE_REQUEST'; // 피드백 주제 DELETE 시도 중

const FEEDBACK_SUB_DELETE_SUCCESS = 'FEEDBACK_SUB_DELETE_SUCCESS'; // 피드백 주제 DELETE 성공

const FEEDBACK_SUB_DELETE_FAILURE = 'FEEDBACK_SUB_DELETE_FAILURE'; // 피드백 주제 DELETE 실패

/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    // 피드백 주제 READ
    case FEEDBACK_SUB_READ_REQUEST:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoadingSubject: true,
        isLoadedSubject: false
      });

    case FEEDBACK_SUB_READ_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoadingSubject: false,
        isLoadedSubject: true,
        subject: [{
          index: action.data.index,
          name: action.data.name,
          color: action.data.color
        }]
      });

    case FEEDBACK_SUB_READ_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoadingSubject: false,
        isLoadedSubject: false,
        LoadedSubjectErrorReason: action.error
      });
    // 피드백 주제 ADD    

    case FEEDBACK_SUB_ADD_REQUEST:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isAddingSubject: true,
        isAddedSubject: false
      });

    case FEEDBACK_SUB_ADD_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isAddingSubject: false,
        isAddedSubject: true,
        subject: [...state.subject, {
          index: action.data.index,
          name: action.data.name,
          color: action.data.color
        }]
      });

    case FEEDBACK_SUB_ADD_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isAddingSubject: false,
        isAddedSubject: false,
        AddedSubjectErrorReason: action.error
      });
    // 피드백 주제 UPDATE 

    case FEEDBACK_SUB_UPDATE_REQUEST:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isUpdatingSubject: true,
        isUpdatedSubject: false
      });

    case FEEDBACK_SUB_UPDATE_SUCCESS:
      const subjectIndex = state.subject.findIndex(v => v.index === action.data.index);
      state.subject[subjectIndex] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.data);
      const originalSubject = [...state.subject];
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isUpdatingSubject: false,
        isUpdatedSubject: true,
        subject: originalSubject
      });

    case FEEDBACK_SUB_UPDATE_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isUpdatingSubject: false,
        isUpdatedSubject: true,
        UpdatedSubjectErrorReason: action.error
      });
    // 피드백 주제 DELETE 

    case FEEDBACK_SUB_DELETE_REQUEST:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isDeletingSubject: true,
        isDeletedSubject: false
      });

    case FEEDBACK_SUB_DELETE_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isDeletingSubject: false,
        isDeletedSubject: true,
        subject: state.subject.filter((v, i) => i !== action.data.index)
      });

    case FEEDBACK_SUB_DELETE_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isDeletingSubject: false,
        isDeletedSubject: false,
        DeletedSubjectErrorReason: action.error
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/friends.js":
/*!*****************************!*\
  !*** ./reducers/friends.js ***!
  \*****************************/
/*! exports provided: initialState, FRIENDS_MAIN_READ_REQUEST, FRIENDS_MAIN_READ_SUCCESS, FRIENDS_MAIN_READ_FAILURE, FRIENDS_MAIN_SEARCH_REQUEST, FRIENDS_MAIN_SEARCH_SUCCESS, FRIENDS_MAIN_SEARCH_FAILURE, FRIENDS_BLOCK_REQUEST, FRIENDS_BLOCK_SUCCESS, FRIENDS_BLOCK_FAILURE, FRIENDS_ADD_READ_REQUEST, FRIENDS_ADD_READ_SUCCESS, FRIENDS_ADD_READ_FAILURE, FRIENDS_ADD_SEARCH_REQUEST, FRIENDS_ADD_SEARCH_SUCCESS, FRIENDS_ADD_SEARCH_FAILURE, FRIENDS_ADD_ADD_REQUEST, FRIENDS_ADD_ADD_SUCCESS, FRIENDS_ADD_ADD_FAILURE, FRIENDS_RQ_READ_REQUEST, FRIENDS_RQ_READ_SUCCESS, FRIENDS_RQ_READ_FAILURE, FRIENDS_RQ_ADD_REQUEST, FRIENDS_RQ_ADD_SUCCESS, FRIENDS_RQ_ADD_FAILURE, FRIENDS_PROFILE_READ_REQUEST, FRIENDS_PROFILE_READ_SUCCESS, FRIENDS_PROFILE_READ_FAILURE, FRIENDS_PROFILE_ADD_REQUEST, FRIENDS_PROFILE_ADD_SUCCESS, FRIENDS_PROFILE_ADD_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_MAIN_READ_REQUEST", function() { return FRIENDS_MAIN_READ_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_MAIN_READ_SUCCESS", function() { return FRIENDS_MAIN_READ_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_MAIN_READ_FAILURE", function() { return FRIENDS_MAIN_READ_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_MAIN_SEARCH_REQUEST", function() { return FRIENDS_MAIN_SEARCH_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_MAIN_SEARCH_SUCCESS", function() { return FRIENDS_MAIN_SEARCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_MAIN_SEARCH_FAILURE", function() { return FRIENDS_MAIN_SEARCH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_BLOCK_REQUEST", function() { return FRIENDS_BLOCK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_BLOCK_SUCCESS", function() { return FRIENDS_BLOCK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_BLOCK_FAILURE", function() { return FRIENDS_BLOCK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_ADD_READ_REQUEST", function() { return FRIENDS_ADD_READ_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_ADD_READ_SUCCESS", function() { return FRIENDS_ADD_READ_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_ADD_READ_FAILURE", function() { return FRIENDS_ADD_READ_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_ADD_SEARCH_REQUEST", function() { return FRIENDS_ADD_SEARCH_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_ADD_SEARCH_SUCCESS", function() { return FRIENDS_ADD_SEARCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_ADD_SEARCH_FAILURE", function() { return FRIENDS_ADD_SEARCH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_ADD_ADD_REQUEST", function() { return FRIENDS_ADD_ADD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_ADD_ADD_SUCCESS", function() { return FRIENDS_ADD_ADD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_ADD_ADD_FAILURE", function() { return FRIENDS_ADD_ADD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_RQ_READ_REQUEST", function() { return FRIENDS_RQ_READ_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_RQ_READ_SUCCESS", function() { return FRIENDS_RQ_READ_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_RQ_READ_FAILURE", function() { return FRIENDS_RQ_READ_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_RQ_ADD_REQUEST", function() { return FRIENDS_RQ_ADD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_RQ_ADD_SUCCESS", function() { return FRIENDS_RQ_ADD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_RQ_ADD_FAILURE", function() { return FRIENDS_RQ_ADD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_PROFILE_READ_REQUEST", function() { return FRIENDS_PROFILE_READ_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_PROFILE_READ_SUCCESS", function() { return FRIENDS_PROFILE_READ_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_PROFILE_READ_FAILURE", function() { return FRIENDS_PROFILE_READ_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_PROFILE_ADD_REQUEST", function() { return FRIENDS_PROFILE_ADD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_PROFILE_ADD_SUCCESS", function() { return FRIENDS_PROFILE_ADD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_PROFILE_ADD_FAILURE", function() { return FRIENDS_PROFILE_ADD_FAILURE; });
const initialState = {};
const FRIENDS_MAIN_READ_REQUEST = 'FRIENDS_MAIN_READ_REQUEST'; // 친구 메인 창 READ 시도 중

const FRIENDS_MAIN_READ_SUCCESS = 'FRIENDS_MAIN_READ_SUCCESS'; // 친구 메인 창 READ 성공

const FRIENDS_MAIN_READ_FAILURE = 'FRIENDS_MAIN_READ_FAILURE'; // 친구 메인 창 READ 실패

const FRIENDS_MAIN_SEARCH_REQUEST = 'FRIENDS_MAIN_SEARCH_REQUEST'; // 친구 메인 창 SEARCH 시도 중

const FRIENDS_MAIN_SEARCH_SUCCESS = 'FRIENDS_MAIN_SEARCH_SUCCESS'; // 친구 메인 창 SEARCH 성공

const FRIENDS_MAIN_SEARCH_FAILURE = 'FRIENDS_MAIN_SEARCH_FAILURE'; // 친구 메인 창 SEARCH 실패

const FRIENDS_BLOCK_REQUEST = 'FRIENDS_BLOCK_REQUEST'; // 친구 차단 시도 중

const FRIENDS_BLOCK_SUCCESS = 'FRIENDS_BLOCK_SUCCESS'; // 친구 차단 성공

const FRIENDS_BLOCK_FAILURE = 'FRIENDS_BLOCK_FAILURE'; // 친구 차단 실패

const FRIENDS_ADD_READ_REQUEST = 'FRIENDS_ADD_READ_REQUEST'; // 친구 추가 모달 READ 시도 중

const FRIENDS_ADD_READ_SUCCESS = 'FRIENDS_ADD_READ_SUCCESS'; // 친구 추가 모달 READ 성공

const FRIENDS_ADD_READ_FAILURE = 'FRIENDS_ADD_READ_FAILURE'; // 친구 추가 모달 READ 실패

const FRIENDS_ADD_SEARCH_REQUEST = 'FRIENDS_ADD_SEARCH_REQUEST'; // 친구 추가 모달 SEARCH 시도 중

const FRIENDS_ADD_SEARCH_SUCCESS = 'FRIENDS_ADD_SEARCH_SUCCESS'; // 친구 추가 모달 SEARCH 성공

const FRIENDS_ADD_SEARCH_FAILURE = 'FRIENDS_ADD_SEARCH_FAILURE'; // 친구 추가 모달 SEARCH 실패

const FRIENDS_ADD_ADD_REQUEST = 'FRIENDS_ADD_ADD_REQUEST'; // 친구 추가 모달 친구 ADD 중

const FRIENDS_ADD_ADD_SUCCESS = 'FRIENDS_ADD_ADD_SUCCESS'; // 친구 추가 모달 친구 ADD 성공

const FRIENDS_ADD_ADD_FAILURE = 'FRIENDS_ADD_ADD_FAILURE'; // 친구 추가 모달 친구 ADD 실패

const FRIENDS_RQ_READ_REQUEST = 'FRIENDS_RQ_READ_REQUEST'; // 친구 요청 모달 READ 시도 중

const FRIENDS_RQ_READ_SUCCESS = 'FRIENDS_RQ_READ_SUCCESS'; // 친구 요청 모달 READ 성공

const FRIENDS_RQ_READ_FAILURE = 'FRIENDS_RQ_READ_FAILURE'; // 친구 요청 모달 READ 실패

const FRIENDS_RQ_ADD_REQUEST = 'FRIENDS_RQ_ADD_REQUEST'; // 친구 요청 모달 ADD 시도 중

const FRIENDS_RQ_ADD_SUCCESS = 'FRIENDS_RQ_ADD_SUCCESS'; // 친구 요청 모달 ADD 성공

const FRIENDS_RQ_ADD_FAILURE = 'FRIENDS_RQ_ADD_FAILURE'; // 친구 요청 모달 ADD 실패

const FRIENDS_PROFILE_READ_REQUEST = 'FRIENDS_PROFILE_READ_REQUEST'; // 친구 프로필 모달 READ 시도 중

const FRIENDS_PROFILE_READ_SUCCESS = 'FRIENDS_PROFILE_READ_SUCCESS'; // 친구 프로필 모달 READ 성공

const FRIENDS_PROFILE_READ_FAILURE = 'FRIENDS_PROFILE_READ_FAILURE'; // 친구 프로필 모달 READ 실패

const FRIENDS_PROFILE_ADD_REQUEST = 'FRIENDS_PROFILE_ADD_REQUEST'; // 친구 프로필 모달 사진 ADD 시도 중

const FRIENDS_PROFILE_ADD_SUCCESS = 'FRIENDS_PROFILE_ADD_SUCCESS'; // 친구 프로필 모달 사진 ADD 성공

const FRIENDS_PROFILE_ADD_FAILURE = 'FRIENDS_PROFILE_ADD_FAILURE'; // 친구 프로필 모달 사진 ADD 실패

/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    // 친구 메인 창 READ
    case FRIENDS_MAIN_READ_REQUEST:
      return {};

    case FRIENDS_MAIN_READ_SUCCESS:
      return {};

    case FRIENDS_MAIN_READ_FAILURE:
      return {};
    // 친구 메인 창 SEARCH

    case FRIENDS_MAIN_SEARCH_REQUEST:
      return {};

    case FRIENDS_MAIN_SEARCH_SUCCESS:
      return {};

    case FRIENDS_MAIN_SEARCH_FAILURE:
      return {};
    // 친구 차단    

    case FRIENDS_BLOCK_REQUEST:
      return {};

    case FRIENDS_BLOCK_SUCCESS:
      return {};

    case FRIENDS_BLOCK_FAILURE:
      return {};
    // 친구 추가 모달 READ

    case FRIENDS_ADD_READ_REQUEST:
      return {};

    case FRIENDS_ADD_READ_SUCCESS:
      return {};

    case FRIENDS_ADD_READ_FAILURE:
      return {};
    // 친구 추가 모달 SEARCH

    case FRIENDS_ADD_SEARCH_REQUEST:
      return {};

    case FRIENDS_ADD_SEARCH_SUCCESS:
      return {};

    case FRIENDS_ADD_SEARCH_FAILURE:
      return {};
    //친구 추가 모달 친구 ADD

    case FRIENDS_ADD_ADD_REQUEST:
      return {};

    case FRIENDS_ADD_ADD_SUCCESS:
      return {};

    case FRIENDS_ADD_ADD_FAILURE:
      return {};
    // 친구 요청 모달 READ   

    case FRIENDS_RQ_READ_REQUEST:
      return {};

    case FRIENDS_RQ_READ_SUCCESS:
      return {};

    case FRIENDS_RQ_READ_FAILURE:
      return {};
    // 친구 요청 모달 ADD  

    case FRIENDS_RQ_ADD_REQUEST:
      return {};

    case FRIENDS_RQ_ADD_SUCCESS:
      return {};

    case FRIENDS_RQ_ADD_FAILURE:
      return {};
    // 친구 프로필 모달 READ   

    case FRIENDS_PROFILE_READ_REQUEST:
      return {};

    case FRIENDS_PROFILE_READ_SUCCESS:
      return {};

    case FRIENDS_PROFILE_READ_FAILURE:
      return {};
    // 친구 프로필 모달 ADD   

    case FRIENDS_PROFILE_ADD_REQUEST:
      return {};

    case FRIENDS_PROFILE_ADD_SUCCESS:
      return {};

    case FRIENDS_PROFILE_ADD_FAILURE:
      return {};

    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _friends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friends */ "./reducers/friends.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback */ "./reducers/feedback.js");
/* harmony import */ var _feedbackSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feedbackSubject */ "./reducers/feedbackSubject.js");
/* harmony import */ var _feedbackMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedbackMode */ "./reducers/feedbackMode.js");






const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  friends: _friends__WEBPACK_IMPORTED_MODULE_1__["default"],
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  feedback: _feedback__WEBPACK_IMPORTED_MODULE_3__["default"],
  feedbackSubject: _feedbackSubject__WEBPACK_IMPORTED_MODULE_4__["default"],
  feedbackMode: _feedbackMode__WEBPACK_IMPORTED_MODULE_5__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, MOVE_TO_SIGNUP, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_HASEMAIL, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_HASEMAIL, SIGN_UP_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_TO_SIGNUP", function() { return MOVE_TO_SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_HASEMAIL", function() { return LOG_IN_HASEMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_HASEMAIL", function() { return SIGN_UP_HASEMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

const initialState = {
  isLoggedIn: false,
  // 로그인 여부
  isLoggingIn: false,
  // 로그인 시도중
  logInErrorReason: '',
  // 로그인 실패 사유
  isSignedUp: false,
  // 회원가입 성공
  isSigningUp: false,
  // 회원가입 시도중
  hasMessage: false,
  // 로그인, 회원가입 실패 - 메시지
  signUpErrorReason: '',
  // 회원가입 실패 사유 
  isLoggingOut: false,
  // 로그아웃 시도중
  isLogout: false,
  // 로그아웃 여부
  logOutReason: '',
  // 로그아웃 실패 사유
  isLoadingMyInfo: false,
  // 마이페이지 로드 중
  isLoadedMyInfo: false,
  // 마이페이지 성공
  LoadedMyInfoReason: '',
  // 마이페이지 실패 사유
  me: {
    email: '',
    nickname: '',
    introduction: '',
    portrait: '',
    tutorial: null,
    msg: ''
  } // 내 정보 

};
const MOVE_TO_SIGNUP = 'MOVE_TO_SIGNUP'; // 회원가입 창 이동

const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 로그인 시도 중

const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 로그인 성공

const LOG_IN_HASEMAIL = 'LOG_IN_HASEMAIL'; // 회원가입 이메일 있는 경우

const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 로그인 실패

const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'; // 회원가입 시도 중

const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'; // 회원가입 성공

const SIGN_UP_HASEMAIL = 'SIGN_UP_HASEMAIL'; // 회원가입 이메일 있는 경우

const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'; // 회원가입 실패

const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'; // 사용자 정보 가져오는 중

const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'; // 사용자 정보 가져오기 성공

const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'; // 사용자 정보 가져오기 실패

const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'; // 로그아웃 시도 중

const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'; // 로그아웃 성공

const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // 로그아웃 실패

/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case MOVE_TO_SIGNUP:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isSigningUp: false,
        isSignedUp: false,
        hasMessage: false,
        me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.me, {
          email: '',
          password: '',
          nickname: '',
          msg: ''
        })
      });

    case LOG_IN_HASEMAIL:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoggingIn: false,
        isLoggedIn: false,
        hasMessage: true,
        me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.me, {
          email: '',
          nickname: '',
          msg: action.data
        })
      });

    case LOG_IN_REQUEST:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoggingIn: true
      });

    case LOG_IN_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoggingIn: false,
        isLoggedIn: true,
        hasMessage: false,
        me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.me, {
          email: action.data.email,
          introduction: action.data.introduction,
          portrait: action.data.portrait,
          nickname: action.data.nickname,
          tutorial: action.data.tutorial
        })
      });

    case LOG_IN_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoggingIn: false,
        isLoggedIn: false,
        logInErrorReason: action.error,
        me: null
      });

    case SIGN_UP_REQUEST:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isSigningUp: true
      });

    case SIGN_UP_HASEMAIL:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isSigningUp: false,
        isSignedUp: false,
        hasMessage: true,
        me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.me, {
          email: '',
          nickname: '',
          msg: action.data.msg
        })
      });

    case SIGN_UP_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isSigningUp: false,
        isSignedUp: true,
        hasMessage: false,
        me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.me, {
          email: action.data.email,
          nickname: action.data.nickname,
          msg: ''
        })
      });

    case SIGN_UP_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isSigningUp: false,
        isSignedUp: false,
        hasMessage: false,
        signUpErrorReason: action.error,
        me: null
      });

    case LOAD_USER_REQUEST:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoadingMyInfo: true,
        isLoadedMyInfo: false
      });

    case LOAD_USER_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoadingMyInfo: false,
        isLoadedMyInfo: true,
        me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.me, {
          email: action.data.email,
          introduction: action.data.introduction,
          portrait: action.data.portrait,
          nickname: action.data.nickname,
          tutorial: action.data.tutorial
        })
      });

    case LOAD_USER_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoadingMyInfo: false,
        isLoadedMyInfo: false,
        LoadedMyInfoReason: action.error,
        me: null
      });

    case LOG_OUT_REQUEST:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoggingOut: true,
        isLogout: false
      });

    case LOG_OUT_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoggingOut: false,
        isLogout: true
      });

    case LOG_OUT_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoggingOut: false,
        isLogout: false,
        logOutReason: action.error
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./sagas/feedback.js":
/*!***************************!*\
  !*** ./sagas/feedback.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return feedbackSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/feedback */ "./reducers/feedback.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = "http://54.180.118.35"; // Feedback 피드백 게시물 댓글 Read

function feedback_Item_Comment_API() {// return axios.get('/#');
}

;

function* feedback_Item_Comment() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(feedback_Item_Comment_API);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_ITEM_COMMENT_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_ITEM_COMMENT_FAILURE"],
      error: e
    });
  }
}

;

function* watchFeedback_Item_Comment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_ITEM_COMMENT_REQUEST"], feedback_Item_Comment);
}

; // Feedback 피드백 게시물 세부사항 Read

function feedback_Item_Complete_API() {// return axios.get('/#');
}

;

function* feedback_Item_Complete() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(feedback_Item_Complete_API);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_ITEM_COMPLETE_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_ITEM_COMPLETE_FAILURE"],
      error: e
    });
  }
}

;

function* watchFeedback_Item_Complete() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_ITEM_COMPLETE_REQUEST"], feedback_Item_Complete);
}

; // Feedback 피드백 게시물 Add

function feedback_Item_Add_API() {// return axios.post('/#');
}

;

function* feedback_Item_Add(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(feedback_Item_Add_API, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_ITEM_ADD_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_ITEM_ADD_FAILURE"],
      error: e
    });
  }
}

;

function* watchFeedback_Item_Add() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_ITEM_ADD_REQUEST"], feedback_Item_Add);
}

; // Feedback 피드백 게시물 Read

function feedback_Item_Read_API() {// return axios.get('/#');
}

;

function* feedback_Item_Read() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(feedback_Item_Read_API);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_ITEM_READ_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_ITEM_READ_FAILURE"],
      error: e
    });
  }
}

;

function* watchFeedback_Item_Read() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_ITEM_READ_REQUEST"], feedback_Item_Read);
}

; // Feedback 새 피드백 Add

function feedback_Add_API() {// return axios.post();
}

;

function* feedback_Add() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(feedback_Add_API);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_ADD_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_ADD_FAILURE"],
      error: e
    });
  }
}

;

function* watchFeedback_Add() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_ADD_REQUEST"], feedback_Add);
}

; // Feedback 메인화면 Read

function feedback_Read_API() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/auth/me', {
    withCredentials: true
  });
}

;

function* feedback_Read() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(feedback_Read_API);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_READ_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_READ_FAILURE"],
      error: e
    });
  }
}

;

function* watchFeedback_Read() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_READ_REQUEST"], feedback_Read);
}

; // Feedback 튜토리얼

function feedback_Tutorial_API(data) {// return axios.get('http://54.180.118.35/auth/me',{
  //     withCredentials:true
  // });
}

;

function* feedback_Tutorial(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(feedback_Tutorial_API, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_TUTORIAL_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_TUTORIAL_FAILURE"],
      error: e
    });
  }
}

;

function* watchFeedback_Toturial() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_feedback__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_TUTORIAL_REQUEST"], feedback_Tutorial);
}

;
function* feedbackSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFeedback_Toturial), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFeedback_Read), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFeedback_Add), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFeedback_Item_Read), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFeedback_Item_Add), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFeedback_Item_Complete), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFeedback_Item_Comment)]);
}

/***/ }),

/***/ "./sagas/feedbackSubject.js":
/*!**********************************!*\
  !*** ./sagas/feedbackSubject.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return feedbackSubjectSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/feedbackSubject */ "./reducers/feedbackSubject.js");



axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = "http://54.180.118.35/"; // 피드백 주제 Delete

function feedback_Sub_Delete_API(data) {// return axios.delete('/#');
}

;

function* feedback_Sub_Delete(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(feedback_Sub_Delete_API, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_SUB_DELETE_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_SUB_DELETE_FAILURE"],
      error: e
    });
  }
}

;

function* watchFeedback_Sub_Delete() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_SUB_DELETE_REQUEST"], feedback_Sub_Delete);
}

; // 피드백 주제 Update

function feedback_Sub_Update_API(data) {// return axios.patch('/#');
}

;

function* feedback_Sub_Update(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(feedback_Sub_Update_API, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_SUB_UPDATE_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_SUB_UPDATE_FAILURE"],
      error: e
    });
  }
}

;

function* watchFeedback_Sub_Update() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_SUB_UPDATE_REQUEST"], feedback_Sub_Update);
}

; // 피드백 주제 Add

function feedback_Sub_Add_API(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/st', data, {
    withCredentials: true
  });
}

;

function* feedback_Sub_Add(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(feedback_Sub_Add_API, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_SUB_ADD_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_SUB_ADD_FAILURE"],
      error: e
    });
  }
}

;

function* watchFeedback_Sub_Add() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_SUB_ADD_REQUEST"], feedback_Sub_Add);
}

; // 피드백 주제 메인 Read

function feedback_Sub_Read_API() {// return axios.get('/#');
}

;

function* feedback_Sub_Read() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(feedback_Sub_Read_API);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_SUB_READ_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_SUB_READ_FAILURE"],
      error: e
    });
  }
}

;

function* watchFeedback_Sub_Read() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_feedbackSubject__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_SUB_READ_REQUEST"], feedback_Sub_Read);
}

;
function* feedbackSubjectSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFeedback_Sub_Read), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFeedback_Sub_Add), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFeedback_Sub_Update), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFeedback_Sub_Delete)]);
}

/***/ }),

/***/ "./sagas/friends.js":
/*!**************************!*\
  !*** ./sagas/friends.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return friendsSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_friends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/friends */ "./reducers/friends.js");


 // 친구 프로필 Add

function friends_Pro_Add_API(data) {// return axios.post('/#');
}

;

function* friends_Pro_Add(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(friends_Pro_Add_API, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_PROFILE_ADD_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_PROFILE_ADD_FAILURE"],
      error: e
    });
  }
}

;

function* watchFriends_Pro_Add() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_PROFILE_ADD_REQUEST"], friends_Pro_Add);
}

; // 친구 프로필 Read

function friends_Pro_Read_API() {// return axios.get('/#');
}

;

function* friends_Pro_Read() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(friends_Pro_Read_API);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_PROFILE_READ_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_PROFILE_READ_FAILURE"],
      error: e
    });
  }
}

;

function* watchFriends_Pro_Read() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_PROFILE_READ_REQUEST"], friends_Pro_Read);
}

; // 친구 요청 모달 Add

function friends_Req_Add_API(data) {// return axios.post('/#');
}

;

function* friends_Req_Add(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(friends_Req_Add_API, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_RQ_ADD_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_RQ_ADD_FAILURE"],
      error: e
    });
  }
}

;

function* watchFriends_Req_Add() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_RQ_ADD_REQUEST"], friends_Req_Add);
}

; // 친구 요청 모달 Read

function friends_Req_Read_API() {// return axios.get('/#');
}

;

function* friends_Req_Read() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(friends_Req_Read_API);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_RQ_READ_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_RQ_READ_FAILURE"],
      error: e
    });
  }
}

;

function* watchFriends_Req_Read() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_RQ_READ_REQUEST"], friends_Req_Read);
}

; // 친구 추가 모달 Add

function friends_Add_Add_API(data) {// return axios.post('/#');
}

;

function* friends_Add_Add(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(friends_Add_Add_API, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_ADD_ADD_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_ADD_ADD_FAILURE"],
      error: e
    });
  }
}

;

function* watchFriends_Add_Add() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_ADD_ADD_REQUEST"], friends_Add_Add);
}

; // 친구 추가 모달 Search

function friends_Add_Search_API(data) {// return axios.get('/#');
}

;

function* friends_Add_Search(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(friends_Add_Search_API, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_ADD_SEARCH_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_ADD_SEARCH_FAILURE"],
      error: e
    });
  }
}

;

function* watchFriends_Add_Search() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_ADD_SEARCH_REQUEST"], friends_Add_Search);
}

; // 친구 추가 모달 Read

function friends_Add_Read_API() {// return axios.get('/#');
}

;

function* friends_Add_Read() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(friends_Add_Read_API);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_ADD_READ_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_ADD_READ_FAILURE"],
      error: e
    });
  }
}

;

function* watchFriends_Add_Read() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_ADD_READ_REQUEST"], friends_Add_Read);
}

; // 친구 차단

function friends_Block_API(data) {// return axios.delete();
}

;

function* friends_Block(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(friends_Block_API, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_BLOCK_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_BLOCK_FAILURE"],
      error: e
    });
  }
}

;

function* watchFriends_Block() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_BLOCK_REQUEST"], friends_Block);
}

; // 친구 메인창 Search

function friends_Search_API(data) {// return axios.get('/#');
}

;

function* friends_Search(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(friends_Search_API, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_MAIN_SEARCH_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_MAIN_SEARCH_FAILURE"],
      error: e
    });
  }
}

;

function* watchFriends_Search() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_MAIN_SEARCH_REQUEST"], friends_Search);
}

; // 친구 메인창 Read

function friends_Read_API() {// return axios.get('/#');
}

;

function* friends_Read() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(friends_Read_API);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_MAIN_READ_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_MAIN_READ_FAILURE"],
      error: e
    });
  }
}

;

function* watchFriends_Read() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_friends__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_MAIN_READ_REQUEST"], friends_Read);
}

;
function* friendsSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFriends_Read), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFriends_Search), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFriends_Block), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFriends_Add_Read), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFriends_Add_Search), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFriends_Add_Add), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFriends_Req_Read), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFriends_Req_Add), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFriends_Pro_Read), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFriends_Pro_Add)]);
}

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback */ "./sagas/feedback.js");
/* harmony import */ var _friends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./friends */ "./sagas/friends.js");
/* harmony import */ var _feedbackSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feedbackSubject */ "./sagas/feedbackSubject.js");





function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_feedback__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_friends__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_feedbackSubject__WEBPACK_IMPORTED_MODULE_4__["default"])]);
}
;

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");



axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = "http://54.180.118.35"; // 마이페이지

function logUserAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/auth/me', {
    withCredentials: true
  });
}

;

function* loadUser() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logUserAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      error: e
    });
  }
}

;

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}

; // 로그아웃

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/auth/logout', {
    withCredentials: true
  });
}

;

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: e
    });
  }
}

;

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

; // 로그인

function loginAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/auth/login', data, {
    withCredentials: true
  });
}

;

function* login(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loginAPI, action.data);
    console.log(result);
    !result.data.email ? yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_HASEMAIL"],
      data: result.data
    }) : yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: e
    });
  }
}

;

function* watchLogin() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], login);
}

; // 회원가입

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/auth/signup', data);
}

;

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    console.log(result);
    result.data.msg ? yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_HASEMAIL"],
      data: result.data
    }) : yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: e
    });
  }
}

;

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

;
function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser)]);
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map