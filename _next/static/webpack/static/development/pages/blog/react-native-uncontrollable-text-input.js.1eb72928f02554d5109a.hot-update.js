webpackHotUpdate("static/development/pages/blog/react-native-uncontrollable-text-input.js",{

/***/ "./pages/blog/react-native-uncontrollable-text-input.tsx":
/*!***************************************************************!*\
  !*** ./pages/blog/react-native-uncontrollable-text-input.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _assets_styles_styl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/styles.styl */ "./assets/styles.styl");
/* harmony import */ var _assets_styles_styl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_styl__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/dmydry/projects/dmydry/pages/blog/react-native-uncontrollable-text-input.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Post1 = function Post1() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.highlightAll();
  }, []);
  var codeBlock1 = "\n  <TextInput\n    onChangeText={setValue}\n    style={[\n      styles.input,\n      {\n        color: isValid\n          ? MAIN_COLORS.BLACK\n          : MAIN_COLORS.ERROR,\n      },\n    ]}\n  />";
  var codeBlock2 = "\nconst [value, setValue] = useState();\n\n<TextInput\n  value={value}\n  onChangeText={setValue}\n  style={[\n    styles.input,\n    {\n      color: isValid\n        ? MAIN_COLORS.BLACK\n        : MAIN_COLORS.ERROR,\n    },\n  ]}\n/>";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    title: "Dmitriy Gurinenko | Dev Blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("span", {
    className: "hover",
    onClick: router.back,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "\u25C0", ' '), "04/09/2019", __jsx("div", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "React Native: uncontrollable TextInput & missed react updates"), __jsx("hr", {
    style: {
      paddingLeft: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "So what is this about?", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), "Let's imagine you've already know all the RN basics but every day you try something new with your project. Today I started to code a new form in our current react-native app. After all layout hacks and logic hooks I started to use a simple well-known condition like:"), __jsx("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("code", {
    className: "language-javascript",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, codeBlock1)), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Suddenly I stuck with a simple style prop. It just wasn't updating that color. However when I tried to use an", ' ', __jsx("code", {
    className: "language-javascript",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "isValid"), " constant somewhere else in the same Form (stateless/functional) component, it has been rendered and updated correctly.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), "After a little googling I found a quite old opened issue -", ' ', __jsx("a", {
    href: "https://github.com/facebook/react-native/issues/20131",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "https://github.com/facebook/react-native/issues/20131")), ' ', "where guys explained a way to fix this. You just need to make your TextInput controllable and add a", ' ', __jsx("code", {
    className: "language-javascript",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "value"), " prop. It should use a state value from the", ' ', __jsx("code", {
    className: "language-javascript",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "setValue"), " callback;", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), "A full example of a working code:"), __jsx("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("code", {
    className: "language-javascript",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, codeBlock2))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Post1);

/***/ })

})
//# sourceMappingURL=react-native-uncontrollable-text-input.js.1eb72928f02554d5109a.hot-update.js.map