webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_Info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Info */ "./components/Info.tsx");

var _jsxFileName = "/Users/dmydry/projects/dmydry/pages/index.tsx";





var myAge = new Date().getFullYear() - 1988;

var calcSecondsFromBd = function calcSecondsFromBd() {
  var now = new Date();
  var currYear = now.getFullYear();
  var bdCurrYear = new Date("".concat(currYear, "/01/12 10:50:00"));
  return Math.trunc((now.getTime() - bdCurrYear.getTime()) / 1000);
};

var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(calcSecondsFromBd()),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      secondsFromBd = _useState2[0],
      setSecondsFromBd = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var interval = setInterval(function () {
      setSecondsFromBd(calcSecondsFromBd);
    }, 1000);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    className: "jsx-2721894825",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Dmitriy Gurinenko | Frontend developer | React, Vue"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-2721894825",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    className: "jsx-2721894825",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "description",
    content: "Dmitriy Gurinenko CV",
    key: "description",
    className: "jsx-2721894825",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/static/favicon.ico",
    className: "jsx-2721894825",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    age: myAge,
    seconds: secondsFromBd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Info__WEBPACK_IMPORTED_MODULE_5__["Info"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2721894825",
    __self: this
  }, "html{font-family:\"Quicksand\",\"Source Sans Pro\",-apple-system, BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial, sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;background-color:#35495e;}*,*:before,*:after{box-sizing:border-box;margin:0;}a{-webkit-text-decoration:none;text-decoration:none;color:inherit;}.header-footer{width:100%;background-color:#141c2f;color:white;padding:30px;text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbXlkcnkvcHJvamVjdHMvZG15ZHJ5L3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q3lCLEFBS3VCLEFBY1UsQUFJRCxBQUlWLFdBQ2MsV0FSaEIsU0FDWCxLQVFjLFlBQ0MsRUFOQyxXQU9HLEdBTm5CLGNBT0EsbURBMUJpQixlQUNFLGlCQUNTLDBCQUNJLDhCQUNJLGtDQUNDLG1DQUNiLHNCQUNHLHlCQUMzQiIsImZpbGUiOiIvVXNlcnMvZG15ZHJ5L3Byb2plY3RzL2RteWRyeS9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IEluZm8gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmZvXCI7XG5cbmNvbnN0IG15QWdlID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gMTk4ODtcblxuY29uc3QgY2FsY1NlY29uZHNGcm9tQmQgPSAoKSA9PiB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGN1cnJZZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IGJkQ3VyclllYXIgPSBuZXcgRGF0ZShgJHtjdXJyWWVhcn0vMDEvMTIgMTA6NTA6MDBgKTtcbiAgcmV0dXJuIE1hdGgudHJ1bmMoKG5vdy5nZXRUaW1lKCkgLSBiZEN1cnJZZWFyLmdldFRpbWUoKSkgLyAxMDAwKTtcbn07XG5cbmNvbnN0IEluZGV4OiBSZWFjdC5TRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWNvbmRzRnJvbUJkLCBzZXRTZWNvbmRzRnJvbUJkXSA9IHVzZVN0YXRlKGNhbGNTZWNvbmRzRnJvbUJkKCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRTZWNvbmRzRnJvbUJkKGNhbGNTZWNvbmRzRnJvbUJkKTtcbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkRtaXRyaXkgR3VyaW5lbmtvIHwgRnJvbnRlbmQgZGV2ZWxvcGVyIHwgUmVhY3QsIFZ1ZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgICAga2V5PVwidmlld3BvcnRcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIkRtaXRyaXkgR3VyaW5lbmtvIENWXCJcbiAgICAgICAgICBrZXk9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8SGVhZGVyIGFnZT17bXlBZ2V9IHNlY29uZHM9e3NlY29uZHNGcm9tQmR9IC8+XG4gICAgICA8SW5mbyAvPlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgXCJTb3VyY2UgU2FucyBQcm9cIiwgLWFwcGxlLXN5c3RlbSxcbiAgICAgICAgICAgIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsXG4gICAgICAgICAgICBzYW5zLXNlcmlmOyAvKiAxICovXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHdvcmQtc3BhY2luZzogMXB4O1xuICAgICAgICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1NDk1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgICosXG4gICAgICAgICo6YmVmb3JlLFxuICAgICAgICAqOmFmdGVyIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlci1mb290ZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDFjMmY7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/dmydry/projects/dmydry/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.a8828f93e160d807b654.hot-update.js.map