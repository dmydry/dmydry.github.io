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
    className: "jsx-1503056739" + " " + "pre-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, showString ? str : stringToBinary(str), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-1503056739",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onClick: function onClick() {
      return setShowString(!showString);
    },
    className: "jsx-1503056739" + " " + "button-translate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "translate()")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1503056739" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\xA9 2019 ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://github.com/dmydry",
    className: "jsx-1503056739",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "dmydry"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-1503056739",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), "Built with", " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
    height: "50",
    viewBox: "0 0 148 90",
    version: "1.1",
    className: "jsx-1503056739" + " " + "next-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z",
    fill: "#FFF",
    fillRule: "nonzero",
    className: "jsx-1503056739",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1503056739",
    __self: this
  }, ".pre-name{width:100%;background-color:#002b36;color:#2aa198;padding:30px;line-height:22px;font-weight:500;font-size:0.8em;}.button-translate{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-top:15px;color:white;display:inline-block;padding:7px 10px;border:2px solid white;border-radius:5px;cursor:pointer;}.footer{width:100%;background-color:#141c2f;color:white;padding:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}.next-logo{padding-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbXlkcnkvcHJvamVjdHMvZG15ZHJ5L2NvbXBvbmVudHMvRm9vdGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q3lCLEFBR3NCLEFBVU0sQUFVTixBQVNNLFdBNUJRLEFBb0JBLE1BUzNCLG1CQTVCZ0IsQUFvQkYsWUFDQyxFQXBCQSxXQXFCQSxFQXBCSSxpQkFDRCxLQU1BLFdBTEEsS0FNSixXQUxkLENBTXVCLHFCQUNKLENBV1EsZ0JBVkYsdUJBQ0wsa0JBQ0gsZUFDakIseUJBUXVCLHFHQUN2QiIsImZpbGUiOiIvVXNlcnMvZG15ZHJ5L3Byb2plY3RzL2RteWRyeS9jb21wb25lbnRzL0Zvb3Rlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3Qgc3RyaW5nVG9CaW5hcnkgPSAoc3RyOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgemVyb1BhZCA9IChudW06IG51bWJlcikgPT4gXCIwMDAwMDAwMFwiLnNsaWNlKFN0cmluZyhudW0pLmxlbmd0aCkgKyBudW07XG4gIHJldHVybiBzdHIucmVwbGFjZShcbiAgICAvW1xcc1xcU10vZyxcbiAgICBzdHIgPT4gemVyb1BhZCgoc3RyIGFzIGFueSkuY2hhckNvZGVBdCgwKS50b1N0cmluZygyKSkgKyBcIiBcIlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEZvb3RlcjogUmVhY3QuU0ZDID0gKCkgPT4ge1xuICBjb25zdCBbc2hvd1N0cmluZywgc2V0U2hvd1N0cmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc3RyID1cbiAgICBcIlRvcCAxMDogd2lmZSwgc29ucywgY29kZSwgc2VhL29jZWFuLCBzdXJmLCBtb3RvcmN5Y2xlcywgY2FyIHRyYXZlbHMsIG1hY2Jvb2ssIG1lZGl1bSwgdHlwZXNjcmlwdC4gVGhlIGxhc3QgMiBpdGVtcyBhcmUgbm90IHBlcnNpc3RlbnQuXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmUtbmFtZVwiPlxuICAgICAgICB7c2hvd1N0cmluZyA/IHN0ciA6IHN0cmluZ1RvQmluYXJ5KHN0cil9IDxiciAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLXRyYW5zbGF0ZVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1N0cmluZyghc2hvd1N0cmluZyl9XG4gICAgICAgID5cbiAgICAgICAgICB0cmFuc2xhdGUoKVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgwqkgMjAxOSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RteWRyeVwiPmRteWRyeTwvYT5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIEJ1aWx0IHdpdGh7XCIgXCJ9XG4gICAgICAgIDxzdmdcbiAgICAgICAgICBoZWlnaHQ9XCI1MFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxNDggOTBcIlxuICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5leHQtbG9nb1wiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk0zNC45OTIgMjMuNDk1aDI3Ljg1NXYyLjIxOUgzNy41NDZ2MTYuNjk5aDIzLjc5MnYyLjIxOUgzNy41NDZ2MTguMzM0aDI1LjU5MXYyLjIxOUgzNC45OTJ2LTQxLjY5em0zMC4zNSAwaDIuOTZsMTMuMTE1IDE4LjMzNCAxMy40MDUtMTguMzM0TDExMy4wNTUuMjA3IDgzLjEgNDMuNzU2bDE1LjQzNiAyMS40MjlIOTUuNDZMODEuNDE3IDQ1LjY4MyA2Ny4zMTYgNjUuMTg1aC0zLjAxOEw3OS44NSA0My43NTYgNjUuMzQzIDIzLjQ5NXptMzQuMjk3IDIuMjE5di0yLjIxOWgzMS43NDJ2Mi4yMTloLTE0LjYyM3YzOS40N2gtMi41NTR2LTM5LjQ3SDk5LjY0ek0uMTQ1IDIzLjQ5NWgzLjE5Mmw0NC4wMTEgNjYuMDAzTDI5LjE2IDY1LjE4NSAyLjgxNCAyNi42NDhsLS4xMTYgMzguNTM3SC4xNDV2LTQxLjY5em0xMzAuOTggMzguODAxYy0uNTIzIDAtLjkxNC0uNDA1LS45MTQtLjkyOCAwLS41MjQuMzkxLS45MjkuOTEzLS45MjkuNTI4IDAgLjkxMy40MDUuOTEzLjkyOSAwIC41MjMtLjM4NS45MjgtLjkxMy45Mjh6bTIuNTA4LTIuNDQzSDEzNWMuMDE5Ljc0Mi41NiAxLjI0IDEuMzU0IDEuMjQuODg4IDAgMS4zOTEtLjUzNSAxLjM5MS0xLjUzOXYtNi4zNTZoMS4zOTF2Ni4zNjJjMCAxLjgwOC0xLjA0MyAyLjg0OS0yLjc3IDIuODQ5LTEuNjIgMC0yLjczMi0xLjAxLTIuNzMyLTIuNTU2em03LjMyMi0uMDhoMS4zNzljLjExOC44NTMuOTUgMS4zOTUgMi4xNDkgMS4zOTUgMS4xMTcgMCAxLjkzNy0uNTggMS45MzctMS4zNzcgMC0uNjg1LS41MjEtMS4wOTctMS43MDgtMS4zNzdsLTEuMTU1LS4yOGMtMS42Mi0uMzgtMi4zNi0xLjE2Ni0yLjM2LTIuNDg3IDAtMS42MDIgMS4zMDQtMi42NjggMy4yNi0yLjY2OCAxLjgyIDAgMy4xNSAxLjA2NiAzLjIzIDIuNThoLTEuMzU0Yy0uMTMtLjgyOC0uODUtMS4zNDYtMS44OTQtMS4zNDYtMS4xIDAtMS44MzIuNTMtMS44MzIgMS4zNCAwIC42NDIuNDcyIDEuMDEgMS42NCAxLjI4NGwuOTg3LjI0M2MxLjgzOC40MyAyLjU5NiAxLjE3OCAyLjU5NiAyLjUzIDAgMS43Mi0xLjMzIDIuNzk5LTMuNDUzIDIuNzk5LTEuOTg3IDAtMy4zMjMtMS4wMjktMy40MjItMi42Mzd6XCJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGXCJcbiAgICAgICAgICAgIGZpbGxSdWxlPVwibm9uemVyb1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgLnByZS1uYW1lIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyYjM2O1xuICAgICAgICAgIGNvbG9yOiAjMmFhMTk4O1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbi10cmFuc2xhdGUge1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDFjMmY7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgICAgICAubmV4dC1sb2dvIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/dmydry/projects/dmydry/components/Footer.tsx */"));
};

/***/ })

})
//# sourceMappingURL=index.js.0f0d4a1b5729a5281423.hot-update.js.map