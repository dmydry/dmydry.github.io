webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _jsxFileName = "/Users/dmydry/projects/dmydry/components/Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var myAge = new Date().getFullYear() - 1988;

var calcSecondsFromBd = function calcSecondsFromBd() {
  var now = new Date();
  var currYear = now.getFullYear();
  var bdCurrYear = new Date("".concat(currYear, "/01/12 10:50:00"));
  return Math.trunc((now.getTime() - bdCurrYear.getTime()) / 1000);
};

var Header = function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(calcSecondsFromBd()),
      secondsFromBd = _useState[0],
      setSecondsFromBd = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var controls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])();

  var animate = function animate(delay, from) {
    return router.pathname === "/" ? controls.start(function () {
      return {
        scale: [1, 1.2, 1, 1, 1, 1, 1, 1, 1, 1],
        rotate: [from, 270, -30, 30, -20, 20, -10, 10, 0, 90],
        transition: {
          duration: 3,
          ease: "easeInOut",
          delay: delay
        }
      };
    }) : null;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var interval = setInterval(function () {
      setSecondsFromBd(calcSecondsFromBd);
    }, 1000);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    animate(0.3, 0);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: 100,
      height: 100,
      display: "inline"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].img, {
    src: "/static/dmydry.jpg",
    alt: "dmydry",
    className: "clip-circle",
    animate: controls,
    onClick: function onClick() {
      return animate(0, 0);
    },
    whileTap: {
      scale: 0.9,
      rotate: 0,
      transition: {
        duration: 0.3
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Dmitriy Gurinenko"), __jsx("div", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Frontend developer / QA engineer"), __jsx("div", {
    className: "subtitle-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Ukraine - Indonesia - Montenegro ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), "+380 63 1105252 /", " ", __jsx("a", {
    href: "mailto:dmitriy.gurinenko@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "dmitriy.gurinenko@gmail.com"), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), myAge, " years ", secondsFromBd, " seconds, married, 2 sons ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), __jsx("div", {
    style: {
      paddingTop: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("a", {
    style: {
      borderRight: "1px solid white",
      paddingRight: 10,
      paddingLeft: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("a", {
    style: {
      paddingRight: 10,
      paddingLeft: 11
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Blog")))));
};

/***/ })

})
//# sourceMappingURL=blog.js.efa5404904a550a7d7f0.hot-update.js.map