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
    className: "jsx-86358937" + " " + "pre-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, showString ? str : stringToBinary(str), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-86358937",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onClick: function onClick() {
      return setShowString(!showString);
    },
    className: "jsx-86358937" + " " + "button-translate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "translate()")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-86358937" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-86358937",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "\xA9 2019 ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://github.com/dmydry",
    className: "jsx-86358937",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "dmydry")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-86358937" + " " + "next-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    style: {
      paddingTop: 10,
      paddingRight: 10
    },
    className: "jsx-86358937",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Built with"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://nextjs.org/",
    className: "jsx-86358937",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
    height: "50",
    viewBox: "0 0 148 90",
    version: "1.1",
    className: "jsx-86358937",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z",
    fill: "#FFF",
    fillRule: "nonzero",
    className: "jsx-86358937",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "86358937",
    __self: this
  }, ".pre-name{width:100%;background-color:#002b36;color:#2aa198;padding:30px;line-height:22px;font-weight:500;font-size:0.8em;}.button-translate{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-top:15px;color:white;display:inline-block;padding:7px 10px;border:2px solid white;border-radius:5px;cursor:pointer;}.footer{width:100%;background-color:#141c2f;color:white;padding:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.next-logo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbXlkcnkvcHJvamVjdHMvZG15ZHJ5L2NvbXBvbmVudHMvRm9vdGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q3lCLEFBR3NCLEFBVU0sQUFVTixBQVNFLFdBNUJZLEFBb0JBLHlCQW5CWCxBQW9CRixZQUNDLEVBcEJBLFdBcUJBLEVBcEJJLFdBMEJNLE1BekJQLEtBTUEsV0FMQSxLQU1KLFdBTGQsQ0FNdUIscUJBQ0osQ0FXYSxnQkFWUCxzQkFnQkosQ0FmRCxrQkFDSCxlQUNqQiwyQ0FRcUIsZ0JBTXJCLDZFQUxBIiwiZmlsZSI6Ii9Vc2Vycy9kbXlkcnkvcHJvamVjdHMvZG15ZHJ5L2NvbXBvbmVudHMvRm9vdGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBzdHJpbmdUb0JpbmFyeSA9IChzdHI6IHN0cmluZykgPT4ge1xuICBjb25zdCB6ZXJvUGFkID0gKG51bTogbnVtYmVyKSA9PiBcIjAwMDAwMDAwXCIuc2xpY2UoU3RyaW5nKG51bSkubGVuZ3RoKSArIG51bTtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFxuICAgIC9bXFxzXFxTXS9nLFxuICAgIHN0ciA9PiB6ZXJvUGFkKChzdHIgYXMgYW55KS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDIpKSArIFwiIFwiXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgRm9vdGVyOiBSZWFjdC5TRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG93U3RyaW5nLCBzZXRTaG93U3RyaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzdHIgPVxuICAgIFwiVG9wIDEwOiB3aWZlLCBzb25zLCBjb2RlLCBzZWEvb2NlYW4sIHN1cmYsIG1vdG9yY3ljbGVzLCBjYXIgdHJhdmVscywgbWFjYm9vaywgbWVkaXVtLCB0eXBlc2NyaXB0LiBUaGUgbGFzdCAyIGl0ZW1zIGFyZSBub3QgcGVyc2lzdGVudC5cIjtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZS1uYW1lXCI+XG4gICAgICAgIHtzaG93U3RyaW5nID8gc3RyIDogc3RyaW5nVG9CaW5hcnkoc3RyKX0gPGJyIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tdHJhbnNsYXRlXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93U3RyaW5nKCFzaG93U3RyaW5nKX1cbiAgICAgICAgPlxuICAgICAgICAgIHRyYW5zbGF0ZSgpXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICDCqSAyMDE5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZG15ZHJ5XCI+ZG15ZHJ5PC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV4dC1sb2dvXCI+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgcGFkZGluZ1RvcDogMTAsIHBhZGRpbmdSaWdodDogMTAgfX0+QnVpbHQgd2l0aDwvc3Bhbj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL1wiPlxuICAgICAgICAgICAgPHN2ZyBoZWlnaHQ9XCI1MFwiIHZpZXdCb3g9XCIwIDAgMTQ4IDkwXCIgdmVyc2lvbj1cIjEuMVwiPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMzQuOTkyIDIzLjQ5NWgyNy44NTV2Mi4yMTlIMzcuNTQ2djE2LjY5OWgyMy43OTJ2Mi4yMTlIMzcuNTQ2djE4LjMzNGgyNS41OTF2Mi4yMTlIMzQuOTkydi00MS42OXptMzAuMzUgMGgyLjk2bDEzLjExNSAxOC4zMzQgMTMuNDA1LTE4LjMzNEwxMTMuMDU1LjIwNyA4My4xIDQzLjc1NmwxNS40MzYgMjEuNDI5SDk1LjQ2TDgxLjQxNyA0NS42ODMgNjcuMzE2IDY1LjE4NWgtMy4wMThMNzkuODUgNDMuNzU2IDY1LjM0MyAyMy40OTV6bTM0LjI5NyAyLjIxOXYtMi4yMTloMzEuNzQydjIuMjE5aC0xNC42MjN2MzkuNDdoLTIuNTU0di0zOS40N0g5OS42NHpNLjE0NSAyMy40OTVoMy4xOTJsNDQuMDExIDY2LjAwM0wyOS4xNiA2NS4xODUgMi44MTQgMjYuNjQ4bC0uMTE2IDM4LjUzN0guMTQ1di00MS42OXptMTMwLjk4IDM4LjgwMWMtLjUyMyAwLS45MTQtLjQwNS0uOTE0LS45MjggMC0uNTI0LjM5MS0uOTI5LjkxMy0uOTI5LjUyOCAwIC45MTMuNDA1LjkxMy45MjkgMCAuNTIzLS4zODUuOTI4LS45MTMuOTI4em0yLjUwOC0yLjQ0M0gxMzVjLjAxOS43NDIuNTYgMS4yNCAxLjM1NCAxLjI0Ljg4OCAwIDEuMzkxLS41MzUgMS4zOTEtMS41Mzl2LTYuMzU2aDEuMzkxdjYuMzYyYzAgMS44MDgtMS4wNDMgMi44NDktMi43NyAyLjg0OS0xLjYyIDAtMi43MzItMS4wMS0yLjczMi0yLjU1NnptNy4zMjItLjA4aDEuMzc5Yy4xMTguODUzLjk1IDEuMzk1IDIuMTQ5IDEuMzk1IDEuMTE3IDAgMS45MzctLjU4IDEuOTM3LTEuMzc3IDAtLjY4NS0uNTIxLTEuMDk3LTEuNzA4LTEuMzc3bC0xLjE1NS0uMjhjLTEuNjItLjM4LTIuMzYtMS4xNjYtMi4zNi0yLjQ4NyAwLTEuNjAyIDEuMzA0LTIuNjY4IDMuMjYtMi42NjggMS44MiAwIDMuMTUgMS4wNjYgMy4yMyAyLjU4aC0xLjM1NGMtLjEzLS44MjgtLjg1LTEuMzQ2LTEuODk0LTEuMzQ2LTEuMSAwLTEuODMyLjUzLTEuODMyIDEuMzQgMCAuNjQyLjQ3MiAxLjAxIDEuNjQgMS4yODRsLjk4Ny4yNDNjMS44MzguNDMgMi41OTYgMS4xNzggMi41OTYgMi41MyAwIDEuNzItMS4zMyAyLjc5OS0zLjQ1MyAyLjc5OS0xLjk4NyAwLTMuMzIzLTEuMDI5LTMuNDIyLTIuNjM3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGRkZcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwibm9uemVyb1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIC5wcmUtbmFtZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmIzNjtcbiAgICAgICAgICBjb2xvcjogIzJhYTE5ODtcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b24tdHJhbnNsYXRlIHtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxYzJmO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLm5leHQtbG9nbyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/dmydry/projects/dmydry/components/Footer.tsx */"));
};

/***/ })

})
//# sourceMappingURL=index.js.db1924698b11aa908639.hot-update.js.map