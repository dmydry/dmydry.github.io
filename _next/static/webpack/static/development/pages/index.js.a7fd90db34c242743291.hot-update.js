webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var assets_styles_styl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/styles.styl */ \"./assets/styles.styl\");\n/* harmony import */ var assets_styles_styl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_styles_styl__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dmydry/projects/dmydry/components/Footer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar stringToBinary = function stringToBinary(str) {\n  var zeroPad = function zeroPad(num) {\n    return '00000000'.slice(String(num).length) + num;\n  };\n\n  return str.replace(/[\\s\\S]/g, function (str) {\n    return zeroPad(str.charCodeAt(0).toString(2)) + ' ';\n  });\n};\n\nvar Footer = function Footer() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showString = _useState[0],\n      setShowString = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var year = new Date().getFullYear();\n  var str = 'Top 10: wife, sons, code, sea/ocean, surf, motorcycles, car travels, macbook, medium, typescript. The last 2 items are not persistent.';\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, router.pathname === '/' && __jsx(\"div\", {\n    className: \"pre-name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, showString ? str : stringToBinary(str), \" \", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 52\n    }\n  }), __jsx(\"div\", {\n    className: \"button-translate\",\n    onClick: function onClick() {\n      return setShowString(!showString);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, \"translate()\")), __jsx(\"div\", {\n    className: \"footer\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, \"\\xA9 2019 - \", year, \" \", __jsx(\"a\", {\n    href: \"https://github.com/dmydry\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 27\n    }\n  }, \"dmydry\")), __jsx(\"div\", {\n    className: \"next-logo\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    style: {\n      paddingTop: 5,\n      paddingRight: 10\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, \"Built with\"), __jsx(\"a\", {\n    href: \"https://nextjs.org/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, __jsx(\"svg\", {\n    height: \"50\",\n    viewBox: \"0 0 148 90\",\n    version: \"1.1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, __jsx(\"path\", {\n    d: \"M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z\",\n    fill: \"#FFF\",\n    fillRule: \"nonzero\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 15\n    }\n  }))))));\n};\n\n_s(Footer, \"7urSJB2OqfQdNBKjKQHx5TmeS14=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Footer;\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci50c3g/ZTI4NSJdLCJuYW1lcyI6WyJzdHJpbmdUb0JpbmFyeSIsInN0ciIsInplcm9QYWQiLCJudW0iLCJzbGljZSIsIlN0cmluZyIsImxlbmd0aCIsInJlcGxhY2UiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJGb290ZXIiLCJ1c2VTdGF0ZSIsInNob3dTdHJpbmciLCJzZXRTaG93U3RyaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInBhdGhuYW1lIiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEdBQUQsRUFBaUI7QUFDdEMsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFdBQWlCLFdBQVdDLEtBQVgsQ0FBaUJDLE1BQU0sQ0FBQ0YsR0FBRCxDQUFOLENBQVlHLE1BQTdCLElBQXVDSCxHQUF4RDtBQUFBLEdBQWhCOztBQUNBLFNBQU9GLEdBQUcsQ0FBQ00sT0FBSixDQUNMLFNBREssRUFFTCxVQUFDTixHQUFEO0FBQUEsV0FBU0MsT0FBTyxDQUFFRCxHQUFELENBQWFPLFVBQWIsQ0FBd0IsQ0FBeEIsRUFBMkJDLFFBQTNCLENBQW9DLENBQXBDLENBQUQsQ0FBUCxHQUFrRCxHQUEzRDtBQUFBLEdBRkssQ0FBUDtBQUlELENBTkQ7O0FBUU8sSUFBTUMsTUFBaUIsR0FBRyxTQUFwQkEsTUFBb0IsR0FBTTtBQUFBOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDLEtBQUQsQ0FEUDtBQUFBLE1BQzlCQyxVQUQ4QjtBQUFBLE1BQ2xCQyxhQURrQjs7QUFFckMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLE1BQU1DLElBQUksR0FBRyxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFBYjtBQUNBLE1BQU1qQixHQUFHLEdBQ1Asd0lBREY7QUFHQSxTQUNFLG1FQUNHYSxNQUFNLENBQUNLLFFBQVAsS0FBb0IsR0FBcEIsSUFDQztBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsVUFBVSxHQUFHWCxHQUFILEdBQVNELGNBQWMsQ0FBQ0MsR0FBRCxDQURwQyxPQUMyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRDNDLEVBRUU7QUFDRSxhQUFTLEVBQUMsa0JBRFo7QUFFRSxXQUFPLEVBQUU7QUFBQSxhQUFNWSxhQUFhLENBQUMsQ0FBQ0QsVUFBRixDQUFuQjtBQUFBLEtBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixDQUZKLEVBYUU7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDWUksSUFEWixPQUNrQjtBQUFHLFFBQUksRUFBQywyQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGxCLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFNBQUssRUFBRTtBQUFFSSxnQkFBVSxFQUFFLENBQWQ7QUFBaUJDLGtCQUFZLEVBQUU7QUFBL0IsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUU7QUFBRyxRQUFJLEVBQUMscUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssVUFBTSxFQUFDLElBQVo7QUFBaUIsV0FBTyxFQUFDLFlBQXpCO0FBQXNDLFdBQU8sRUFBQyxLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxLQUFDLEVBQUMsZ2pDQURKO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxZQUFRLEVBQUMsU0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQUZGLENBSkYsQ0FiRixDQURGO0FBaUNELENBekNNOztHQUFNWCxNO1VBRUlLLHFEOzs7S0FGSkwsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9vdGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0ICdhc3NldHMvc3R5bGVzLnN0eWwnO1xuXG5jb25zdCBzdHJpbmdUb0JpbmFyeSA9IChzdHI6IHN0cmluZykgPT4ge1xuICBjb25zdCB6ZXJvUGFkID0gKG51bTogbnVtYmVyKSA9PiAnMDAwMDAwMDAnLnNsaWNlKFN0cmluZyhudW0pLmxlbmd0aCkgKyBudW07XG4gIHJldHVybiBzdHIucmVwbGFjZShcbiAgICAvW1xcc1xcU10vZyxcbiAgICAoc3RyKSA9PiB6ZXJvUGFkKChzdHIgYXMgYW55KS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDIpKSArICcgJ1xuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEZvb3RlcjogUmVhY3QuU0ZDID0gKCkgPT4ge1xuICBjb25zdCBbc2hvd1N0cmluZywgc2V0U2hvd1N0cmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IHN0ciA9XG4gICAgJ1RvcCAxMDogd2lmZSwgc29ucywgY29kZSwgc2VhL29jZWFuLCBzdXJmLCBtb3RvcmN5Y2xlcywgY2FyIHRyYXZlbHMsIG1hY2Jvb2ssIG1lZGl1bSwgdHlwZXNjcmlwdC4gVGhlIGxhc3QgMiBpdGVtcyBhcmUgbm90IHBlcnNpc3RlbnQuJztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cm91dGVyLnBhdGhuYW1lID09PSAnLycgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZS1uYW1lXCI+XG4gICAgICAgICAge3Nob3dTdHJpbmcgPyBzdHIgOiBzdHJpbmdUb0JpbmFyeShzdHIpfSA8YnIgLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tdHJhbnNsYXRlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dTdHJpbmcoIXNob3dTdHJpbmcpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHRyYW5zbGF0ZSgpXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgwqkgMjAxOSAtIHt5ZWFyfSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RteWRyeVwiPmRteWRyeTwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5leHQtbG9nb1wiPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDUsIHBhZGRpbmdSaWdodDogMTAgfX0+QnVpbHQgd2l0aDwvc3Bhbj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL1wiPlxuICAgICAgICAgICAgPHN2ZyBoZWlnaHQ9XCI1MFwiIHZpZXdCb3g9XCIwIDAgMTQ4IDkwXCIgdmVyc2lvbj1cIjEuMVwiPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMzQuOTkyIDIzLjQ5NWgyNy44NTV2Mi4yMTlIMzcuNTQ2djE2LjY5OWgyMy43OTJ2Mi4yMTlIMzcuNTQ2djE4LjMzNGgyNS41OTF2Mi4yMTlIMzQuOTkydi00MS42OXptMzAuMzUgMGgyLjk2bDEzLjExNSAxOC4zMzQgMTMuNDA1LTE4LjMzNEwxMTMuMDU1LjIwNyA4My4xIDQzLjc1NmwxNS40MzYgMjEuNDI5SDk1LjQ2TDgxLjQxNyA0NS42ODMgNjcuMzE2IDY1LjE4NWgtMy4wMThMNzkuODUgNDMuNzU2IDY1LjM0MyAyMy40OTV6bTM0LjI5NyAyLjIxOXYtMi4yMTloMzEuNzQydjIuMjE5aC0xNC42MjN2MzkuNDdoLTIuNTU0di0zOS40N0g5OS42NHpNLjE0NSAyMy40OTVoMy4xOTJsNDQuMDExIDY2LjAwM0wyOS4xNiA2NS4xODUgMi44MTQgMjYuNjQ4bC0uMTE2IDM4LjUzN0guMTQ1di00MS42OXptMTMwLjk4IDM4LjgwMWMtLjUyMyAwLS45MTQtLjQwNS0uOTE0LS45MjggMC0uNTI0LjM5MS0uOTI5LjkxMy0uOTI5LjUyOCAwIC45MTMuNDA1LjkxMy45MjkgMCAuNTIzLS4zODUuOTI4LS45MTMuOTI4em0yLjUwOC0yLjQ0M0gxMzVjLjAxOS43NDIuNTYgMS4yNCAxLjM1NCAxLjI0Ljg4OCAwIDEuMzkxLS41MzUgMS4zOTEtMS41Mzl2LTYuMzU2aDEuMzkxdjYuMzYyYzAgMS44MDgtMS4wNDMgMi44NDktMi43NyAyLjg0OS0xLjYyIDAtMi43MzItMS4wMS0yLjczMi0yLjU1NnptNy4zMjItLjA4aDEuMzc5Yy4xMTguODUzLjk1IDEuMzk1IDIuMTQ5IDEuMzk1IDEuMTE3IDAgMS45MzctLjU4IDEuOTM3LTEuMzc3IDAtLjY4NS0uNTIxLTEuMDk3LTEuNzA4LTEuMzc3bC0xLjE1NS0uMjhjLTEuNjItLjM4LTIuMzYtMS4xNjYtMi4zNi0yLjQ4NyAwLTEuNjAyIDEuMzA0LTIuNjY4IDMuMjYtMi42NjggMS44MiAwIDMuMTUgMS4wNjYgMy4yMyAyLjU4aC0xLjM1NGMtLjEzLS44MjgtLjg1LTEuMzQ2LTEuODk0LTEuMzQ2LTEuMSAwLTEuODMyLjUzLTEuODMyIDEuMzQgMCAuNjQyLjQ3MiAxLjAxIDEuNjQgMS4yODRsLjk4Ny4yNDNjMS44MzguNDMgMi41OTYgMS4xNzggMi41OTYgMi41MyAwIDEuNzItMS4zMyAyLjc5OS0zLjQ1MyAyLjc5OS0xLjk4NyAwLTMuMzIzLTEuMDI5LTMuNDIyLTIuNjM3elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGRkZcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwibm9uemVyb1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Footer.tsx\n");

/***/ })

})