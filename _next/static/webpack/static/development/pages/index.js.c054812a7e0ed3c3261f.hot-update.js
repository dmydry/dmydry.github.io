webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");

var _jsxFileName = "/Users/dmydry/projects/dmydry/components/Header.tsx";



var myAge = new Date().getFullYear() - 1988;

var calcSecondsFromBd = function calcSecondsFromBd() {
  var now = new Date();
  var currYear = now.getFullYear();
  var bdCurrYear = new Date("".concat(currYear, "/01/12 10:50:00"));
  return Math.trunc((now.getTime() - bdCurrYear.getTime()) / 1000);
};

var Header = function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(calcSecondsFromBd()),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      secondsFromBd = _useState2[0],
      setSecondsFromBd = _useState2[1];

  var controls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])();

  var animate = function animate(delay, from) {
    return controls.start(function () {
      return {
        scale: [1, 1.2, 1, 1, 1, 1, 1, 1, 1, 1],
        rotate: [from, 270, -30, 30, -20, 20, -10, 10, 0, 90],
        transition: {
          duration: 3,
          ease: "easeInOut",
          delay: delay
        }
      };
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var interval = setInterval(function () {
      setSecondsFromBd(calcSecondsFromBd);
    }, 1000);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    animate(1, 0);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].img, {
    src: "/static/dmydry.jpg",
    alt: "dmydry",
    className: "clip-circle",
    animate: controls // whileTap="tap"
    ,
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
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Dmitriy Gurinenko"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Frontend developer / QA engineer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "subtitle-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Ukraine - Indonesia - Montenegro ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), "+380 63 1105252 / dmitriy.gurinenko@gmail.com ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), myAge, " years", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    style: {
      display: "inline-block",
      minWidth: 75
    } // animate={{ opacity: [1, 0.7], scale: [1.1, 1] }}
    ,
    animate: {
      rotateX: ["0deg", "90deg", "0deg", "0deg"],
      opacity: [0.3, 1]
    } // animate={{ y: 50, opacity: [0, 1] }}
    ,
    transition: {
      ease: "easeOut",
      duration: 1,
      loop: Infinity
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, secondsFromBd), " ", "seconds, married, 2 sons ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      paddingTop: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: {
      borderRight: "1px solid white",
      paddingRight: 10,
      paddingLeft: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: {
      paddingRight: 10,
      paddingLeft: 11
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Blog")))));
};

/***/ })

})
//# sourceMappingURL=index.js.c054812a7e0ed3c3261f.hot-update.js.map