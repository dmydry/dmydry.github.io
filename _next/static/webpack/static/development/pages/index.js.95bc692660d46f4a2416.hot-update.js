webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/dmydry/projects/dmydry/components/Footer.tsx";



var stringToBinary = function stringToBinary(str) {
  var zeroPad = function zeroPad(num) {
    return "00000000".slice(String(num).length) + num;
  };

  return str.replace(/[\s\S]/g, function (str) {
    return zeroPad(str.charCodeAt(0).toString(2)) + " ";
  });
};

var Footer = function Footer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      showString = _useState2[0],
      setShowString = _useState2[1];

  var str = "I like to code and travel more than anything else"; // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSecondsFromBd(calcSecondsFromBd);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3718804229" + " " + "pre-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, showString ? str : stringToBinary(str), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-3718804229",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onClick: function onClick() {
      return setShowString(!showString);
    },
    className: "jsx-3718804229" + " " + "button-translate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "translate()")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3718804229" + " " + "header-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\xA9 2019 ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://github.com/dmydry",
    className: "jsx-3718804229",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "dmydry")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3718804229",
    __self: this
  }, ".pre-name{width:100%;background-color:#002b36;color:#2aa198;padding:30px;line-height:22px;font-weight:500;font-size:0.8em;}.button-translate{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-top:15px;color:white;display:inline-block;padding:7px 10px;border:2px solid white;border-radius:5px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbXlkcnkvcHJvamVjdHMvZG15ZHJ5L2NvbXBvbmVudHMvRm9vdGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ3lCLEFBR3NCLEFBVU0sV0FUUSx5QkFDWCxjQUNELGFBQ0ksaUJBQ0QsS0FNQSxXQUxBLEtBTUosV0FMZCxDQU11QixxQkFDSixpQkFDTSx1QkFDTCxrQkFDSCxlQUNqQiIsImZpbGUiOiIvVXNlcnMvZG15ZHJ5L3Byb2plY3RzL2RteWRyeS9jb21wb25lbnRzL0Zvb3Rlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3Qgc3RyaW5nVG9CaW5hcnkgPSAoc3RyOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgemVyb1BhZCA9IChudW06IG51bWJlcikgPT4gXCIwMDAwMDAwMFwiLnNsaWNlKFN0cmluZyhudW0pLmxlbmd0aCkgKyBudW07XG4gIHJldHVybiBzdHIucmVwbGFjZShcbiAgICAvW1xcc1xcU10vZyxcbiAgICBzdHIgPT4gemVyb1BhZCgoc3RyIGFzIGFueSkuY2hhckNvZGVBdCgwKS50b1N0cmluZygyKSkgKyBcIiBcIlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBGb290ZXI6IFJlYWN0LlNGQyA9ICgpID0+IHtcbiAgY29uc3QgW3Nob3dTdHJpbmcsIHNldFNob3dTdHJpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHN0ciA9IFwiSSBsaWtlIHRvIGNvZGUgYW5kIHRyYXZlbCBtb3JlIHRoYW4gYW55dGhpbmcgZWxzZVwiO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gIC8vICAgICBzZXRTZWNvbmRzRnJvbUJkKGNhbGNTZWNvbmRzRnJvbUJkKTtcbiAgLy8gICB9LCAxMDAwKTtcbiAgLy8gICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZS1uYW1lXCI+XG4gICAgICAgIHtzaG93U3RyaW5nID8gc3RyIDogc3RyaW5nVG9CaW5hcnkoc3RyKX0gPGJyIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tdHJhbnNsYXRlXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93U3RyaW5nKCFzaG93U3RyaW5nKX1cbiAgICAgICAgPlxuICAgICAgICAgIHRyYW5zbGF0ZSgpXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1mb290ZXJcIj5cbiAgICAgICAgwqkgMjAxOSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RteWRyeVwiPmRteWRyeTwvYT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAucHJlLW5hbWUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDJiMzY7XG4gICAgICAgICAgY29sb3I6ICMyYWExOTg7XG4gICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uLXRyYW5zbGF0ZSB7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/dmydry/projects/dmydry/components/Footer.tsx */"));
};

/***/ })

})
//# sourceMappingURL=index.js.95bc692660d46f4a2416.hot-update.js.map