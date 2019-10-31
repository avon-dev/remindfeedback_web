webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/AppTopbar.js":
/*!*********************************!*\
  !*** ./components/AppTopbar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "D:\\remindFB\\front\\components\\AppTopbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    text-align: center;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: #ffffff;\n    font-size:25px;\n    text-align: center;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: #ffffff;\n    font-size:25px;\n    text-align: center;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: #ffffff;\n    font-size:25px;\n    text-align: center;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: #ffffff;\n    font-size:30px;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Title = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Title,
    Paragraph = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Paragraph,
    Text = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Text;
var Item = antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item;
var Search = antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Search;
var MainTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Typography"])(_templateObject());
var HomeIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"])(_templateObject2());
var BellIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"])(_templateObject3());
var SettingIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"])(_templateObject4());
var UserIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"])(_templateObject5());
var MenuItem = {
  textAlign: 'center'
};

var AppTopbar = function AppTopbar() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    mode: "horizontal",
    selectedKeys: "home",
    style: {
      backgroundColor: '#0B4E92'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(Item, {
    key: "home",
    disabled: true,
    style: MenuItem,
    active: "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(Item, {
    key: "search",
    disabled: true,
    style: MenuItem,
    active: "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(Search, {
    placeholder: "input search text",
    style: {
      width: 200
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(Item, {
    key: "subject",
    disabled: true,
    style: MenuItem,
    active: "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(MainTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "RemindFeedBack")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(Item, {
    key: "bell",
    disabled: true,
    style: MenuItem,
    active: "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(BellIcon, {
    type: "bell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(Item, {
    key: "user",
    disabled: true,
    style: MenuItem,
    active: "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(UserIcon, {
    icon: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(Item, {
    key: "setting",
    disabled: true,
    style: MenuItem,
    active: "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(SettingIcon, {
    type: "setting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AppTopbar);

/***/ })

})
//# sourceMappingURL=index.js.1c9c6513733e01e2348c.hot-update.js.map