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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);








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
      b.push.apply(b, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(a.splice(rndI(a.length))));
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

var OrnamentCanvas =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(OrnamentCanvas, _React$Component);

  function OrnamentCanvas() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OrnamentCanvas);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(OrnamentCanvas)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "ornamentCanvas", react__WEBPACK_IMPORTED_MODULE_9__["createRef"]());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OrnamentCanvas, [{
    key: "componentDidMount",
    // public readonly state: IOwnState = {
    //   showString: false,
    //   secondsFromBd: 0
    // };
    value: function componentDidMount() {
      if (this.ornamentCanvas) {
        drawLogo(this.ornamentCanvas);
      } // this.setState({ secondsFromBd: this.calcSecondsFromBd() });
      // this.secondsTimer = setInterval(() => {
      //   this.setState({ secondsFromBd: this.calcSecondsFromBd() });
      // }, 1000);

    } // public componentWillUnmount() {
    //   if (this.secondsTimer) {
    //     clearInterval(this.secondsTimer);
    //   }
    // }

  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("canvas", {
        ref: "ornamentCanvas",
        className: "jsx-561118126" + " " + "or-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "561118126",
        __self: this
      }, ".or-logo.jsx-561118126{width:68px;height:68px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbXlkcnkvcHJvamVjdHMvZG15ZHJ5L2NvbXBvbmVudHMvT3JuYW1lbnRDYW52YXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFKb0IsQUFHd0IsV0FDQyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9kbXlkcnkvcHJvamVjdHMvZG15ZHJ5L2NvbXBvbmVudHMvT3JuYW1lbnRDYW52YXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGRyYXdMb2dvID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpID0+IHtcbiAgY29uc3QgcmFuZ2UgPSAoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpID0+XG4gICAgc3RhcnQgKyBNYXRoLnJhbmRvbSgpICogKGVuZCAtIHN0YXJ0KTtcbiAgY29uc3QgcmFuZ2VJID0gKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSA9PiBNYXRoLmZsb29yKHJhbmdlKHN0YXJ0LCBlbmQpKTtcbiAgY29uc3Qgcm5kID0gKG46IG51bWJlcikgPT4gTWF0aC5yYW5kb20oKSAqIG47XG4gIGNvbnN0IHJuZEkgPSAobjogbnVtYmVyKSA9PiBNYXRoLmZsb29yKHJuZChuKSk7XG5cbiAgY29uc3Qgc2h1ZmZsZSA9IChhOiBudW1iZXJbXSkgPT4ge1xuICAgIHZhciBiID0gW107XG4gICAgd2hpbGUgKGEubGVuZ3RoID4gMCkge1xuICAgICAgYi5wdXNoKC4uLmEuc3BsaWNlKHJuZEkoYS5sZW5ndGgpKSk7XG4gICAgfVxuICAgIHJldHVybiBiO1xuICB9O1xuXG4gIGNvbnN0IGNhbnZhc1NpemUgPSAyNTA7XG4gIGNvbnN0IGNvdW50ID0gMztcbiAgY29uc3Qgc3RlcHMgPSAzMDA7XG4gIGNvbnN0IHBpID0gTWF0aC5QSTtcbiAgY29uc3QgcGkyID0gTWF0aC5QSSAqIDI7XG4gIGNvbnN0IHBpMDUgPSBNYXRoLlBJICogMC41O1xuICBjb25zdCBzdGVwID0gcGkyIC8gc3RlcHM7XG5cbiAgY29uc3QgcGlja3MgPSBbcmFuZ2VJKDEyLCAxNiksIHJhbmdlSSg3LCAxMSksIHJhbmdlSSgzLCA1KV07XG4gIGNvbnN0IHJhZGl1cyA9IFtyYW5nZSgxNTAsIDE3MCldO1xuICBjb25zdCB0aGlja25lc3MgPSBbcmFuZ2VJKDI1LCA0MCldO1xuICBjb25zdCBzcXVlZXplT2Zmc2V0ID0gW3JuZChwaTIpXTtcblxuICBjb25zdCB4eHggPSBNYXRoLm1heCgwLjAwNSwgcm5kKDAuMDEpKTtcbiAgY29uc3Qgc3F1ZWV6ZVNwZWVkID0gW3h4eCwgeHh4LCAteHh4XTtcblxuICBjb25zdCBzY2FsZSA9IGNhbnZhc1NpemUgLyA2MDA7XG4gIGNvbnN0IGFtcFJlZHVjZSA9IDQwICogc2NhbGU7XG5cbiAgY29uc3QgbGluZVdpZHRoID0gc2h1ZmZsZShbNiAqIDEuOCwgNyAqIDEuOCwgNiAqIDEuOF0pO1xuXG4gIGNhbnZhcy53aWR0aCA9IGNhbnZhc1NpemUgLSAyMDtcbiAgY2FudmFzLmhlaWdodCA9IGNhbnZhc1NpemUgLSAyMDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgY29uc3QgeDAgPSBjYW52YXMud2lkdGggLyAyO1xuICBjb25zdCB5MCA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuXG4gIHJhZGl1cy5wdXNoKHJhZGl1c1swXSk7XG4gIHJhZGl1cy5wdXNoKHJhZGl1c1swXSAtIHJhbmdlKDAsIDEwKSk7XG5cbiAgdGhpY2tuZXNzLnB1c2godGhpY2tuZXNzWzBdKTtcbiAgdGhpY2tuZXNzLnB1c2gocmFuZ2VJKDI1LCAzNSkpO1xuXG4gIHNxdWVlemVPZmZzZXQucHVzaChzcXVlZXplT2Zmc2V0WzBdICsgcGkpO1xuICBzcXVlZXplT2Zmc2V0LnB1c2goc3F1ZWV6ZU9mZnNldFswXSAtIHBpIC8gMik7XG5cbiAgY29uc3Qgcm90YXRpb25PZmZzZXQgPSBzcXVlZXplT2Zmc2V0LnNsaWNlKCk7XG5cbiAgbGV0IGEgPSBbcmFkaXVzLCB0aGlja25lc3MsIGxpbmVXaWR0aF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGIgPSBhW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYi5sZW5ndGg7IGorKykge1xuICAgICAgYltqXSAqPSBzY2FsZTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBkcmF3ID0gKCkgPT4ge1xuICAgIGlmICghY3R4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzU2l6ZSwgY2FudmFzU2l6ZSk7XG4gICAgbGV0IHgsIHksIHIsIGEsIG8sIHQsIHMsIGcsIHA7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoW2pdICogMS42O1xuICAgICAgc3F1ZWV6ZU9mZnNldFtqXSArPSBzcXVlZXplU3BlZWRbal07XG4gICAgICByb3RhdGlvbk9mZnNldFtqXSArPSBzcXVlZXplU3BlZWRbal07XG4gICAgICBvID0gc3F1ZWV6ZU9mZnNldFtqXTtcbiAgICAgIHAgPSByb3RhdGlvbk9mZnNldFtqXTtcbiAgICAgIGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoXG4gICAgICAgIHgwICsgcmFkaXVzW2pdICogTWF0aC5zaW4ocGkwNSArIHApLFxuICAgICAgICB5MCArIHJhZGl1c1tqXSAqIE1hdGguY29zKHBpMDUgKyBwKSxcbiAgICAgICAgeDAgLSByYWRpdXNbal0gKiBNYXRoLnNpbihwaTA1ICsgcCksXG4gICAgICAgIHkwIC0gcmFkaXVzW2pdICogTWF0aC5jb3MocGkwNSArIHApXG4gICAgICApO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMC40LCBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMS4wKVwiKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDEsIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXCIpO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gZztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RlcHM7IGkrKykge1xuICAgICAgICBhID0gaSAqIHN0ZXA7XG4gICAgICAgIHMgPSBNYXRoLmNvcyhwICsgYSk7XG4gICAgICAgIGEgKz0gMC40ICogTWF0aC5zaW4obyArIGEpO1xuICAgICAgICB0ID0gdGhpY2tuZXNzW2pdICsgYW1wUmVkdWNlIC8gMjtcbiAgICAgICAgciA9XG4gICAgICAgICAgcmFkaXVzW2pdIC1cbiAgICAgICAgICBhbXBSZWR1Y2UgK1xuICAgICAgICAgICh0ICogKDEgKyBNYXRoLmNvcygoaSAvIHN0ZXBzKSAqIHBpMiAqIHBpY2tzW2pdKSkgKiAoMS4yICsgcykpIC8gMjtcbiAgICAgICAgeCA9IHgwICsgciAqIE1hdGguY29zKGEpO1xuICAgICAgICB5ID0geTAgKyByICogTWF0aC5zaW4oYSk7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHgubGluZVRvKHgsIHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XG4gIH07XG5cbiAgZHJhdygpO1xufTtcblxuaW50ZXJmYWNlIElPd25TdGF0ZSB7XG4gIHNob3dTdHJpbmc6IGJvb2xlYW47XG4gIHNlY29uZHNGcm9tQmQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE9ybmFtZW50Q2FudmFzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgSU93blN0YXRlPiB7XG4gIC8vIHByaXZhdGUgb3JuYW1lbnRDYW52YXM/OiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHJpdmF0ZSBvcm5hbWVudENhbnZhczogUmVhY3QuUmVmT2JqZWN0PFxuICAgIEhUTUxDYW52YXNFbGVtZW50XG4gID4gPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAvLyBwdWJsaWMgcmVhZG9ubHkgc3RhdGU6IElPd25TdGF0ZSA9IHtcbiAgLy8gICBzaG93U3RyaW5nOiBmYWxzZSxcbiAgLy8gICBzZWNvbmRzRnJvbUJkOiAwXG4gIC8vIH07XG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLm9ybmFtZW50Q2FudmFzKSB7XG4gICAgICBkcmF3TG9nbyh0aGlzLm9ybmFtZW50Q2FudmFzIGFzIGFueSk7XG4gICAgfVxuICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBzZWNvbmRzRnJvbUJkOiB0aGlzLmNhbGNTZWNvbmRzRnJvbUJkKCkgfSk7XG4gICAgLy8gdGhpcy5zZWNvbmRzVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgLy8gICB0aGlzLnNldFN0YXRlKHsgc2Vjb25kc0Zyb21CZDogdGhpcy5jYWxjU2Vjb25kc0Zyb21CZCgpIH0pO1xuICAgIC8vIH0sIDEwMDApO1xuICB9XG5cbiAgLy8gcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAvLyAgIGlmICh0aGlzLnNlY29uZHNUaW1lcikge1xuICAvLyAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNlY29uZHNUaW1lcik7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGNhbnZhcyByZWY9XCJvcm5hbWVudENhbnZhc1wiIGNsYXNzTmFtZT1cIm9yLWxvZ29cIiAvPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAub3ItbG9nbyB7XG4gICAgICAgICAgICB3aWR0aDogNjhweDtcbiAgICAgICAgICAgIGhlaWdodDogNjhweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/dmydry/projects/dmydry/components/OrnamentCanvas.tsx */"));
    }
  }]);

  return OrnamentCanvas;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/***/ })

})
//# sourceMappingURL=index.js.b9625a9a88ee37eb537c.hot-update.js.map