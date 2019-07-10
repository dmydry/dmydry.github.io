webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/OrnamentCanvas.tsx":
/*!***************************************!*\
  !*** ./components/OrnamentCanvas.tsx ***!
  \***************************************/
/*! exports provided: OrnamentCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrnamentCanvas", function() { return OrnamentCanvas; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/dmydry/projects/dmydry/components/OrnamentCanvas.tsx";


var drawLogo = function drawLogo(canvas) {
  var range = function range(start, end) {
    return start + Math.random() * (end - start);
  };

  var rangeI = function rangeI(start, end) {
    return Math.floor(range(start, end));
  };

  var rnd = function rnd(n) {
    return Math.random() * n;
  };

  var rndI = function rndI(n) {
    return Math.floor(rnd(n));
  };

  var shuffle = function shuffle(a) {
    var b = [];

    while (a.length > 0) {
      b.push.apply(b, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(a.splice(rndI(a.length))));
    }

    return b;
  };

  var canvasSize = 250;
  var count = 3;
  var steps = 300;
  var pi = Math.PI;
  var pi2 = Math.PI * 2;
  var pi05 = Math.PI * 0.5;
  var step = pi2 / steps;
  var picks = [rangeI(12, 16), rangeI(7, 11), rangeI(3, 5)];
  var radius = [range(150, 170)];
  var thickness = [rangeI(25, 40)];
  var squeezeOffset = [rnd(pi2)];
  var xxx = Math.max(0.005, rnd(0.01));
  var squeezeSpeed = [xxx, xxx, -xxx];
  var scale = canvasSize / 600;
  var ampReduce = 40 * scale;
  var lineWidth = shuffle([6 * 1.8, 7 * 1.8, 6 * 1.8]);
  canvas.width = canvasSize - 20;
  canvas.height = canvasSize - 20;
  var ctx = canvas.getContext("2d");
  var x0 = canvas.width / 2;
  var y0 = canvas.height / 2;
  radius.push(radius[0]);
  radius.push(radius[0] - range(0, 10));
  thickness.push(thickness[0]);
  thickness.push(rangeI(25, 35));
  squeezeOffset.push(squeezeOffset[0] + pi);
  squeezeOffset.push(squeezeOffset[0] - pi / 2);
  var rotationOffset = squeezeOffset.slice();
  var a = [radius, thickness, lineWidth];

  for (var i = 0; i < a.length; i++) {
    var b = a[i];

    for (var j = 0; j < b.length; j++) {
      b[j] *= scale;
    }
  }

  var draw = function draw() {
    if (!ctx) {
      return;
    }

    ctx.clearRect(0, 0, canvasSize, canvasSize);
    var x, y, r, a, o, t, s, g, p;

    for (var _j = 0; _j < count; _j++) {
      ctx.beginPath();
      ctx.lineWidth = lineWidth[_j] * 1.6;
      squeezeOffset[_j] += squeezeSpeed[_j];
      rotationOffset[_j] += squeezeSpeed[_j];
      o = squeezeOffset[_j];
      p = rotationOffset[_j];
      g = ctx.createLinearGradient(x0 + radius[_j] * Math.sin(pi05 + p), y0 + radius[_j] * Math.cos(pi05 + p), x0 - radius[_j] * Math.sin(pi05 + p), y0 - radius[_j] * Math.cos(pi05 + p));
      g.addColorStop(0.4, "rgba(255, 255, 255, 1.0)");
      g.addColorStop(1, "rgba(255, 255, 255, 0.1)");
      ctx.strokeStyle = g;

      for (var _i = 0; _i < steps; _i++) {
        a = _i * step;
        s = Math.cos(p + a);
        a += 0.4 * Math.sin(o + a);
        t = thickness[_j] + ampReduce / 2;
        r = radius[_j] - ampReduce + t * (1 + Math.cos(_i / steps * pi2 * picks[_j])) * (1.2 + s) / 2;
        x = x0 + r * Math.cos(a);
        y = y0 + r * Math.sin(a);

        if (_i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.closePath();
      ctx.stroke();
    }

    window.requestAnimationFrame(draw);
  };

  draw();
};

var OrnamentCanvas = function OrnamentCanvas() {
  var ornamentCanvas = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (ornamentCanvas && ornamentCanvas.current) {
      var canvas = ornamentCanvas.current;
      drawLogo(canvas);
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", {
    ref: ornamentCanvas,
    style: {
      width: 100,
      height: 100
    },
    width: 100,
    height: 100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  });
};

/***/ })

})
//# sourceMappingURL=index.js.6cfb7efa7c063e342dff.hot-update.js.map