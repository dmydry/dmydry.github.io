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

// import * as React from "react";




var myAge = new Date().getFullYear() - 1988; // interface IOwnState {
//   showString: boolean;
//   secondsFromBd: number;
// }
// class Index extends React.Component<any, IOwnState> {
//   private secondsTimer?: NodeJS.Timeout;
//   public readonly state: IOwnState = {
//     showString: false,
//     secondsFromBd: 0
//   };
//   public componentDidMount() {
//     this.setState({ secondsFromBd: this.calcSecondsFromBd() });
//     this.secondsTimer = setInterval(() => {
//       this.setState({ secondsFromBd: this.calcSecondsFromBd() });
//     }, 1000);
//   }
//   public componentWillUnmount() {
//     if (this.secondsTimer) {
//       clearInterval(this.secondsTimer);
//     }
//   }
//   public render() {
//     return (
//       <>
//         <Head>
//           <title>Dmitriy Gurinenko | Frontend developer | React, Vue</title>
//           <meta charSet="utf-8" />
//           <meta
//             name="viewport"
//             content="initial-scale=1.0, width=device-width"
//             key="viewport"
//           />
//           <meta
//             name="description"
//             content="Dmitriy Gurinenko CV"
//             key="description"
//           />
//           <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
//         </Head>
//         <Header age={myAge} seconds={this.state.secondsFromBd} />
//         <Info />
//         <style global jsx>{`
//           html {
//             font-family: "Quicksand", "Source Sans Pro", -apple-system,
//               BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
//               sans-serif; /* 1 */
//             font-size: 16px;
//             word-spacing: 1px;
//             -ms-text-size-adjust: 100%;
//             -webkit-text-size-adjust: 100%;
//             -moz-osx-font-smoothing: grayscale;
//             -webkit-font-smoothing: antialiased;
//             box-sizing: border-box;
//             background-color: #35495e;
//           }
//           *,
//           *:before,
//           *:after {
//             box-sizing: border-box;
//             margin: 0;
//           }
//           a {
//             text-decoration: none;
//             color: inherit;
//           }
//           .header-footer {
//             width: 100%;
//             background-color: #141c2f;
//             color: white;
//             padding: 30px;
//             text-align: right;
//           }
//         `}</style>
//       </>
//     );
//   }
//   private calcSecondsFromBd = () => {
//     const now = new Date();
//     const currYear = now.getFullYear();
//     const bdCurrYear = new Date(`${currYear}/01/12 10:50:00`);
//     return Math.trunc((now.getTime() - bdCurrYear.getTime()) / 1000);
//   };
// }

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
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    className: "jsx-2721894825",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Dmitriy Gurinenko | Frontend developer | React, Vue"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-2721894825",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    className: "jsx-2721894825",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "description",
    content: "Dmitriy Gurinenko CV",
    key: "description",
    className: "jsx-2721894825",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/static/favicon.ico",
    className: "jsx-2721894825",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    age: myAge,
    seconds: secondsFromBd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Info__WEBPACK_IMPORTED_MODULE_5__["Info"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2721894825",
    __self: this
  }, "html{font-family:\"Quicksand\",\"Source Sans Pro\",-apple-system, BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial, sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;background-color:#35495e;}*,*:before,*:after{box-sizing:border-box;margin:0;}a{-webkit-text-decoration:none;text-decoration:none;color:inherit;}.header-footer{width:100%;background-color:#141c2f;color:white;padding:30px;text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbXlkcnkvcHJvamVjdHMvZG15ZHJ5L3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SXlCLEFBS3VCLEFBY1UsQUFJRCxBQUlWLFdBQ2MsV0FSaEIsU0FDWCxLQVFjLFlBQ0MsRUFOQyxXQU9HLEdBTm5CLGNBT0EsbURBMUJpQixlQUNFLGlCQUNTLDBCQUNJLDhCQUNJLGtDQUNDLG1DQUNiLHNCQUNHLHlCQUMzQiIsImZpbGUiOiIvVXNlcnMvZG15ZHJ5L3Byb2plY3RzL2RteWRyeS9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IHsgSW5mbyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0luZm9cIjtcblxuY29uc3QgbXlBZ2UgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAxOTg4O1xuXG4vLyBpbnRlcmZhY2UgSU93blN0YXRlIHtcbi8vICAgc2hvd1N0cmluZzogYm9vbGVhbjtcbi8vICAgc2Vjb25kc0Zyb21CZDogbnVtYmVyO1xuLy8gfVxuXG4vLyBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIElPd25TdGF0ZT4ge1xuLy8gICBwcml2YXRlIHNlY29uZHNUaW1lcj86IE5vZGVKUy5UaW1lb3V0O1xuXG4vLyAgIHB1YmxpYyByZWFkb25seSBzdGF0ZTogSU93blN0YXRlID0ge1xuLy8gICAgIHNob3dTdHJpbmc6IGZhbHNlLFxuLy8gICAgIHNlY29uZHNGcm9tQmQ6IDBcbi8vICAgfTtcblxuLy8gICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlY29uZHNGcm9tQmQ6IHRoaXMuY2FsY1NlY29uZHNGcm9tQmQoKSB9KTtcbi8vICAgICB0aGlzLnNlY29uZHNUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbi8vICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWNvbmRzRnJvbUJkOiB0aGlzLmNhbGNTZWNvbmRzRnJvbUJkKCkgfSk7XG4vLyAgICAgfSwgMTAwMCk7XG4vLyAgIH1cblxuLy8gICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4vLyAgICAgaWYgKHRoaXMuc2Vjb25kc1RpbWVyKSB7XG4vLyAgICAgICBjbGVhckludGVydmFsKHRoaXMuc2Vjb25kc1RpbWVyKTtcbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICBwdWJsaWMgcmVuZGVyKCkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8PlxuLy8gICAgICAgICA8SGVhZD5cbi8vICAgICAgICAgICA8dGl0bGU+RG1pdHJpeSBHdXJpbmVua28gfCBGcm9udGVuZCBkZXZlbG9wZXIgfCBSZWFjdCwgVnVlPC90aXRsZT5cbi8vICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuLy8gICAgICAgICAgIDxtZXRhXG4vLyAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuLy8gICAgICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuLy8gICAgICAgICAgICAga2V5PVwidmlld3BvcnRcIlxuLy8gICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgPG1ldGFcbi8vICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4vLyAgICAgICAgICAgICBjb250ZW50PVwiRG1pdHJpeSBHdXJpbmVua28gQ1ZcIlxuLy8gICAgICAgICAgICAga2V5PVwiZGVzY3JpcHRpb25cIlxuLy8gICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS94LWljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLmljb1wiIC8+XG4vLyAgICAgICAgIDwvSGVhZD5cblxuLy8gICAgICAgICA8SGVhZGVyIGFnZT17bXlBZ2V9IHNlY29uZHM9e3RoaXMuc3RhdGUuc2Vjb25kc0Zyb21CZH0gLz5cbi8vICAgICAgICAgPEluZm8gLz5cblxuLy8gICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuLy8gICAgICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIFwiU291cmNlIFNhbnMgUHJvXCIsIC1hcHBsZS1zeXN0ZW0sXG4vLyAgICAgICAgICAgICAgIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsXG4vLyAgICAgICAgICAgICAgIHNhbnMtc2VyaWY7IC8qIDEgKi9cbi8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbi8vICAgICAgICAgICAgIHdvcmQtc3BhY2luZzogMXB4O1xuLy8gICAgICAgICAgICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4vLyAgICAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4vLyAgICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuLy8gICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4vLyAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1NDk1ZTtcbi8vICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAqLFxuLy8gICAgICAgICAgICo6YmVmb3JlLFxuLy8gICAgICAgICAgICo6YWZ0ZXIge1xuLy8gICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgICAgICAgICAgIG1hcmdpbjogMDtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgYSB7XG4vLyAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgLmhlYWRlci1mb290ZXIge1xuLy8gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxYzJmO1xuLy8gICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbi8vICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgYH08L3N0eWxlPlxuLy8gICAgICAgPC8+XG4vLyAgICAgKTtcbi8vICAgfVxuXG4vLyAgIHByaXZhdGUgY2FsY1NlY29uZHNGcm9tQmQgPSAoKSA9PiB7XG4vLyAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbi8vICAgICBjb25zdCBjdXJyWWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xuLy8gICAgIGNvbnN0IGJkQ3VyclllYXIgPSBuZXcgRGF0ZShgJHtjdXJyWWVhcn0vMDEvMTIgMTA6NTA6MDBgKTtcbi8vICAgICByZXR1cm4gTWF0aC50cnVuYygobm93LmdldFRpbWUoKSAtIGJkQ3VyclllYXIuZ2V0VGltZSgpKSAvIDEwMDApO1xuLy8gICB9O1xuLy8gfVxuXG5jb25zdCBjYWxjU2Vjb25kc0Zyb21CZCA9ICgpID0+IHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgY3VyclllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgYmRDdXJyWWVhciA9IG5ldyBEYXRlKGAke2N1cnJZZWFyfS8wMS8xMiAxMDo1MDowMGApO1xuICByZXR1cm4gTWF0aC50cnVuYygobm93LmdldFRpbWUoKSAtIGJkQ3VyclllYXIuZ2V0VGltZSgpKSAvIDEwMDApO1xufTtcblxuY29uc3QgSW5kZXg6IFJlYWN0LlNGQyA9ICgpID0+IHtcbiAgY29uc3QgW3NlY29uZHNGcm9tQmQsIHNldFNlY29uZHNGcm9tQmRdID0gdXNlU3RhdGUoY2FsY1NlY29uZHNGcm9tQmQoKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFNlY29uZHNGcm9tQmQoY2FsY1NlY29uZHNGcm9tQmQpO1xuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RG1pdHJpeSBHdXJpbmVua28gfCBGcm9udGVuZCBkZXZlbG9wZXIgfCBSZWFjdCwgVnVlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcbiAgICAgICAgICBrZXk9XCJ2aWV3cG9ydFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiRG1pdHJpeSBHdXJpbmVua28gQ1ZcIlxuICAgICAgICAgIGtleT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS94LWljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxIZWFkZXIgYWdlPXtteUFnZX0gc2Vjb25kcz17c2Vjb25kc0Zyb21CZH0gLz5cbiAgICAgIDxJbmZvIC8+XG5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBcIlNvdXJjZSBTYW5zIFByb1wiLCAtYXBwbGUtc3lzdGVtLFxuICAgICAgICAgICAgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCxcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7IC8qIDEgKi9cbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgd29yZC1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU0OTVlO1xuICAgICAgICB9XG5cbiAgICAgICAgKixcbiAgICAgICAgKjpiZWZvcmUsXG4gICAgICAgICo6YWZ0ZXIge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyLWZvb3RlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MWMyZjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/dmydry/projects/dmydry/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.dd8eca3426e10b1f92b1.hot-update.js.map