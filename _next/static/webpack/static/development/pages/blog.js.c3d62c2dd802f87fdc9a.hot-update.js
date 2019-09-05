webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.tsx":
/*!************************!*\
  !*** ./pages/blog.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ua-parser-js */ "./node_modules/ua-parser-js/src/ua-parser.js");
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _assets_styles_styl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/styles.styl */ "./assets/styles.styl");
/* harmony import */ var _assets_styles_styl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_styl__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/Users/dmydry/projects/dmydry/pages/blog.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var LinkWrapper = function LinkWrapper(_ref) {
  var href = _ref.href,
      children = _ref.children;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("a", {
    style: {
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, children)));
};

var Blog = function Blog(_ref2) {
  var ua = _ref2.ua;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    prismjs__WEBPACK_IMPORTED_MODULE_5___default.a.highlightAll();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["Layout"], {
    title: "Dmitriy Gurinenko | Dev Blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Dev Blog"), __jsx("div", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "04/09/2019"), __jsx(LinkWrapper, {
    href: "/blog/react-native-uncontrollable-text-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "React Native: uncontrollable TextInput & missed react updates"))), ua && ua.browser && ua.browser.name && __jsx("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("code", {
    className: "language-javascript",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "\n  {\n    browser: {\n      name: ".concat(ua.browser.name, ",\n      version: ").concat(ua.browser.version, ",\n    },\n    os: {\n      name: ").concat(ua.os.name, ",\n      version: ").concat(ua.os.version, ",\n    },\n  }\n          ")))));
};

Blog.getInitialProps =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref3) {
    var req, userAgent, parser;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref3.req;
            userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
            parser = new ua_parser_js__WEBPACK_IMPORTED_MODULE_4__["UAParser"](userAgent);
            return _context.abrupt("return", {
              ua: parser.getResult()
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

})
//# sourceMappingURL=blog.js.c3d62c2dd802f87fdc9a.hot-update.js.map