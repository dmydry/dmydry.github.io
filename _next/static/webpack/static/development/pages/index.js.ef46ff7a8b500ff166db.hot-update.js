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

  var str = "Top 10: wife, sons, code, sea/ocean, surf, motorcycles, car travels, macbook, medium, typescript. The last 2 items are not persistent.";
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-4040918916" + " " + "pre-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, showString ? str : stringToBinary(str), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-4040918916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onClick: function onClick() {
      return setShowString(!showString);
    },
    className: "jsx-4040918916" + " " + "button-translate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "translate()")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-4040918916" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\xA9 2019 ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://github.com/dmydry",
    className: "jsx-4040918916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "dmydry"), "Built with", " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
    height: "50",
    viewBox: "0 0 148 90",
    version: "1.1",
    className: "jsx-4040918916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z",
    fill: "#FFF",
    fillRule: "nonzero",
    className: "jsx-4040918916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4040918916",
    __self: this
  }, ".pre-name{width:100%;background-color:#002b36;color:#2aa198;padding:30px;line-height:22px;font-weight:500;font-size:0.8em;}.button-translate{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-top:15px;color:white;display:inline-block;padding:7px 10px;border:2px solid white;border-radius:5px;cursor:pointer;}.footer{width:100%;background-color:#141c2f;color:white;padding:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbXlkcnkvcHJvamVjdHMvZG15ZHJ5L2NvbXBvbmVudHMvRm9vdGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q3lCLEFBR3NCLEFBVU0sQUFVTixXQW5CYyxBQW9CQSx5QkFuQlgsQUFvQkYsWUFDQyxFQXBCQSxXQXFCQSxFQXBCSSxpQkFDRCxLQU1BLFdBTEEsS0FNSixXQUxkLENBTXVCLHFCQUNKLENBV1EsZ0JBVkYsdUJBQ0wsa0JBQ0gsZUFDakIseUJBUUEiLCJmaWxlIjoiL1VzZXJzL2RteWRyeS9wcm9qZWN0cy9kbXlkcnkvY29tcG9uZW50cy9Gb290ZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHN0cmluZ1RvQmluYXJ5ID0gKHN0cjogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHplcm9QYWQgPSAobnVtOiBudW1iZXIpID0+IFwiMDAwMDAwMDBcIi5zbGljZShTdHJpbmcobnVtKS5sZW5ndGgpICsgbnVtO1xuICByZXR1cm4gc3RyLnJlcGxhY2UoXG4gICAgL1tcXHNcXFNdL2csXG4gICAgc3RyID0+IHplcm9QYWQoKHN0ciBhcyBhbnkpLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMikpICsgXCIgXCJcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBGb290ZXI6IFJlYWN0LlNGQyA9ICgpID0+IHtcbiAgY29uc3QgW3Nob3dTdHJpbmcsIHNldFNob3dTdHJpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHN0ciA9XG4gICAgXCJUb3AgMTA6IHdpZmUsIHNvbnMsIGNvZGUsIHNlYS9vY2Vhbiwgc3VyZiwgbW90b3JjeWNsZXMsIGNhciB0cmF2ZWxzLCBtYWNib29rLCBtZWRpdW0sIHR5cGVzY3JpcHQuIFRoZSBsYXN0IDIgaXRlbXMgYXJlIG5vdCBwZXJzaXN0ZW50LlwiO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlLW5hbWVcIj5cbiAgICAgICAge3Nob3dTdHJpbmcgPyBzdHIgOiBzdHJpbmdUb0JpbmFyeShzdHIpfSA8YnIgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi10cmFuc2xhdGVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dTdHJpbmcoIXNob3dTdHJpbmcpfVxuICAgICAgICA+XG4gICAgICAgICAgdHJhbnNsYXRlKClcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgIMKpIDIwMTkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kbXlkcnlcIj5kbXlkcnk8L2E+XG4gICAgICAgIEJ1aWx0IHdpdGh7XCIgXCJ9XG4gICAgICAgIDxzdmcgaGVpZ2h0PVwiNTBcIiB2aWV3Qm94PVwiMCAwIDE0OCA5MFwiIHZlcnNpb249XCIxLjFcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk0zNC45OTIgMjMuNDk1aDI3Ljg1NXYyLjIxOUgzNy41NDZ2MTYuNjk5aDIzLjc5MnYyLjIxOUgzNy41NDZ2MTguMzM0aDI1LjU5MXYyLjIxOUgzNC45OTJ2LTQxLjY5em0zMC4zNSAwaDIuOTZsMTMuMTE1IDE4LjMzNCAxMy40MDUtMTguMzM0TDExMy4wNTUuMjA3IDgzLjEgNDMuNzU2bDE1LjQzNiAyMS40MjlIOTUuNDZMODEuNDE3IDQ1LjY4MyA2Ny4zMTYgNjUuMTg1aC0zLjAxOEw3OS44NSA0My43NTYgNjUuMzQzIDIzLjQ5NXptMzQuMjk3IDIuMjE5di0yLjIxOWgzMS43NDJ2Mi4yMTloLTE0LjYyM3YzOS40N2gtMi41NTR2LTM5LjQ3SDk5LjY0ek0uMTQ1IDIzLjQ5NWgzLjE5Mmw0NC4wMTEgNjYuMDAzTDI5LjE2IDY1LjE4NSAyLjgxNCAyNi42NDhsLS4xMTYgMzguNTM3SC4xNDV2LTQxLjY5em0xMzAuOTggMzguODAxYy0uNTIzIDAtLjkxNC0uNDA1LS45MTQtLjkyOCAwLS41MjQuMzkxLS45MjkuOTEzLS45MjkuNTI4IDAgLjkxMy40MDUuOTEzLjkyOSAwIC41MjMtLjM4NS45MjgtLjkxMy45Mjh6bTIuNTA4LTIuNDQzSDEzNWMuMDE5Ljc0Mi41NiAxLjI0IDEuMzU0IDEuMjQuODg4IDAgMS4zOTEtLjUzNSAxLjM5MS0xLjUzOXYtNi4zNTZoMS4zOTF2Ni4zNjJjMCAxLjgwOC0xLjA0MyAyLjg0OS0yLjc3IDIuODQ5LTEuNjIgMC0yLjczMi0xLjAxLTIuNzMyLTIuNTU2em03LjMyMi0uMDhoMS4zNzljLjExOC44NTMuOTUgMS4zOTUgMi4xNDkgMS4zOTUgMS4xMTcgMCAxLjkzNy0uNTggMS45MzctMS4zNzcgMC0uNjg1LS41MjEtMS4wOTctMS43MDgtMS4zNzdsLTEuMTU1LS4yOGMtMS42Mi0uMzgtMi4zNi0xLjE2Ni0yLjM2LTIuNDg3IDAtMS42MDIgMS4zMDQtMi42NjggMy4yNi0yLjY2OCAxLjgyIDAgMy4xNSAxLjA2NiAzLjIzIDIuNThoLTEuMzU0Yy0uMTMtLjgyOC0uODUtMS4zNDYtMS44OTQtMS4zNDYtMS4xIDAtMS44MzIuNTMtMS44MzIgMS4zNCAwIC42NDIuNDcyIDEuMDEgMS42NCAxLjI4NGwuOTg3LjI0M2MxLjgzOC40MyAyLjU5NiAxLjE3OCAyLjU5NiAyLjUzIDAgMS43Mi0xLjMzIDIuNzk5LTMuNDUzIDIuNzk5LTEuOTg3IDAtMy4zMjMtMS4wMjktMy40MjItMi42Mzd6XCJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGXCJcbiAgICAgICAgICAgIGZpbGxSdWxlPVwibm9uemVyb1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgLnByZS1uYW1lIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyYjM2O1xuICAgICAgICAgIGNvbG9yOiAjMmFhMTk4O1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbi10cmFuc2xhdGUge1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDFjMmY7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/dmydry/projects/dmydry/components/Footer.tsx */"));
};

/***/ })

})
//# sourceMappingURL=index.js.ef46ff7a8b500ff166db.hot-update.js.map