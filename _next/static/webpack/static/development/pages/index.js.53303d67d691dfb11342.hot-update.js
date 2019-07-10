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
    className: "jsx-2458094474" + " " + "pre-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, showString ? str : stringToBinary(str), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-2458094474",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onClick: function onClick() {
      return setShowString(!showString);
    },
    className: "jsx-2458094474" + " " + "button-translate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "translate()")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2458094474" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-2458094474",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "\xA9 2019 ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://github.com/dmydry",
    className: "jsx-2458094474",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "dmydry")), " ", "Built with", " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
    height: "50",
    viewBox: "0 0 148 90",
    version: "1.1",
    className: "jsx-2458094474" + " " + "next-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z",
    fill: "#FFF",
    fillRule: "nonzero",
    className: "jsx-2458094474",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2458094474",
    __self: this
  }, ".pre-name{width:100%;background-color:#002b36;color:#2aa198;padding:30px;line-height:22px;font-weight:500;font-size:0.8em;}.button-translate{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-top:15px;color:white;display:inline-block;padding:7px 10px;border:2px solid white;border-radius:5px;cursor:pointer;}.footer{width:100%;background-color:#141c2f;color:white;padding:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbXlkcnkvcHJvamVjdHMvZG15ZHJ5L2NvbXBvbmVudHMvRm9vdGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q3lCLEFBR3NCLEFBVU0sQUFVTixXQW5CYyxBQW9CQSx5QkFuQlgsQUFvQkYsWUFDQyxFQXBCQSxXQXFCQSxFQXBCSSxpQkFDRCxLQU1BLFdBTEEsS0FNSixXQUxkLENBTXVCLHFCQUNKLENBV1EsZ0JBVkYsdUJBQ0wsa0JBQ0gsZUFDakIseUJBUXVCLHFHQUN2QiIsImZpbGUiOiIvVXNlcnMvZG15ZHJ5L3Byb2plY3RzL2RteWRyeS9jb21wb25lbnRzL0Zvb3Rlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3Qgc3RyaW5nVG9CaW5hcnkgPSAoc3RyOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgemVyb1BhZCA9IChudW06IG51bWJlcikgPT4gXCIwMDAwMDAwMFwiLnNsaWNlKFN0cmluZyhudW0pLmxlbmd0aCkgKyBudW07XG4gIHJldHVybiBzdHIucmVwbGFjZShcbiAgICAvW1xcc1xcU10vZyxcbiAgICBzdHIgPT4gemVyb1BhZCgoc3RyIGFzIGFueSkuY2hhckNvZGVBdCgwKS50b1N0cmluZygyKSkgKyBcIiBcIlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEZvb3RlcjogUmVhY3QuU0ZDID0gKCkgPT4ge1xuICBjb25zdCBbc2hvd1N0cmluZywgc2V0U2hvd1N0cmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc3RyID1cbiAgICBcIlRvcCAxMDogd2lmZSwgc29ucywgY29kZSwgc2VhL29jZWFuLCBzdXJmLCBtb3RvcmN5Y2xlcywgY2FyIHRyYXZlbHMsIG1hY2Jvb2ssIG1lZGl1bSwgdHlwZXNjcmlwdC4gVGhlIGxhc3QgMiBpdGVtcyBhcmUgbm90IHBlcnNpc3RlbnQuXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmUtbmFtZVwiPlxuICAgICAgICB7c2hvd1N0cmluZyA/IHN0ciA6IHN0cmluZ1RvQmluYXJ5KHN0cil9IDxiciAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLXRyYW5zbGF0ZVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1N0cmluZyghc2hvd1N0cmluZyl9XG4gICAgICAgID5cbiAgICAgICAgICB0cmFuc2xhdGUoKVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgwqkgMjAxOSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RteWRyeVwiPmRteWRyeTwvYT5cbiAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgQnVpbHQgd2l0aHtcIiBcIn1cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGhlaWdodD1cIjUwXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE0OCA5MFwiXG4gICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmV4dC1sb2dvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTM0Ljk5MiAyMy40OTVoMjcuODU1djIuMjE5SDM3LjU0NnYxNi42OTloMjMuNzkydjIuMjE5SDM3LjU0NnYxOC4zMzRoMjUuNTkxdjIuMjE5SDM0Ljk5MnYtNDEuNjl6bTMwLjM1IDBoMi45NmwxMy4xMTUgMTguMzM0IDEzLjQwNS0xOC4zMzRMMTEzLjA1NS4yMDcgODMuMSA0My43NTZsMTUuNDM2IDIxLjQyOUg5NS40Nkw4MS40MTcgNDUuNjgzIDY3LjMxNiA2NS4xODVoLTMuMDE4TDc5Ljg1IDQzLjc1NiA2NS4zNDMgMjMuNDk1em0zNC4yOTcgMi4yMTl2LTIuMjE5aDMxLjc0MnYyLjIxOWgtMTQuNjIzdjM5LjQ3aC0yLjU1NHYtMzkuNDdIOTkuNjR6TS4xNDUgMjMuNDk1aDMuMTkybDQ0LjAxMSA2Ni4wMDNMMjkuMTYgNjUuMTg1IDIuODE0IDI2LjY0OGwtLjExNiAzOC41MzdILjE0NXYtNDEuNjl6bTEzMC45OCAzOC44MDFjLS41MjMgMC0uOTE0LS40MDUtLjkxNC0uOTI4IDAtLjUyNC4zOTEtLjkyOS45MTMtLjkyOS41MjggMCAuOTEzLjQwNS45MTMuOTI5IDAgLjUyMy0uMzg1LjkyOC0uOTEzLjkyOHptMi41MDgtMi40NDNIMTM1Yy4wMTkuNzQyLjU2IDEuMjQgMS4zNTQgMS4yNC44ODggMCAxLjM5MS0uNTM1IDEuMzkxLTEuNTM5di02LjM1NmgxLjM5MXY2LjM2MmMwIDEuODA4LTEuMDQzIDIuODQ5LTIuNzcgMi44NDktMS42MiAwLTIuNzMyLTEuMDEtMi43MzItMi41NTZ6bTcuMzIyLS4wOGgxLjM3OWMuMTE4Ljg1My45NSAxLjM5NSAyLjE0OSAxLjM5NSAxLjExNyAwIDEuOTM3LS41OCAxLjkzNy0xLjM3NyAwLS42ODUtLjUyMS0xLjA5Ny0xLjcwOC0xLjM3N2wtMS4xNTUtLjI4Yy0xLjYyLS4zOC0yLjM2LTEuMTY2LTIuMzYtMi40ODcgMC0xLjYwMiAxLjMwNC0yLjY2OCAzLjI2LTIuNjY4IDEuODIgMCAzLjE1IDEuMDY2IDMuMjMgMi41OGgtMS4zNTRjLS4xMy0uODI4LS44NS0xLjM0Ni0xLjg5NC0xLjM0Ni0xLjEgMC0xLjgzMi41My0xLjgzMiAxLjM0IDAgLjY0Mi40NzIgMS4wMSAxLjY0IDEuMjg0bC45ODcuMjQzYzEuODM4LjQzIDIuNTk2IDEuMTc4IDIuNTk2IDIuNTMgMCAxLjcyLTEuMzMgMi43OTktMy40NTMgMi43OTktMS45ODcgMC0zLjMyMy0xLjAyOS0zLjQyMi0yLjYzN3pcIlxuICAgICAgICAgICAgZmlsbD1cIiNGRkZcIlxuICAgICAgICAgICAgZmlsbFJ1bGU9XCJub256ZXJvXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAucHJlLW5hbWUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDJiMzY7XG4gICAgICAgICAgY29sb3I6ICMyYWExOTg7XG4gICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uLXRyYW5zbGF0ZSB7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MWMyZjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgICAgIC5uZXh0LWxvZ28ge1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/dmydry/projects/dmydry/components/Footer.tsx */"));
};

/***/ })

})
//# sourceMappingURL=index.js.53303d67d691dfb11342.hot-update.js.map