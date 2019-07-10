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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/dmydry/projects/dmydry/components/OrnamentCanvas.tsx";
 // const drawLogo = (canvas: HTMLCanvasElement) => {
//   const range = (start: number, end: number) =>
//     start + Math.random() * (end - start);
//   const rangeI = (start: number, end: number) => Math.floor(range(start, end));
//   const rnd = (n: number) => Math.random() * n;
//   const rndI = (n: number) => Math.floor(rnd(n));
//   const shuffle = (a: number[]) => {
//     var b = [];
//     while (a.length > 0) {
//       b.push(...a.splice(rndI(a.length)));
//     }
//     return b;
//   };
//   const canvasSize = 250;
//   const count = 3;
//   const steps = 300;
//   const pi = Math.PI;
//   const pi2 = Math.PI * 2;
//   const pi05 = Math.PI * 0.5;
//   const step = pi2 / steps;
//   const picks = [rangeI(12, 16), rangeI(7, 11), rangeI(3, 5)];
//   const radius = [range(150, 170)];
//   const thickness = [rangeI(25, 40)];
//   const squeezeOffset = [rnd(pi2)];
//   const xxx = Math.max(0.005, rnd(0.01));
//   const squeezeSpeed = [xxx, xxx, -xxx];
//   const scale = canvasSize / 600;
//   const ampReduce = 40 * scale;
//   const lineWidth = shuffle([6 * 1.8, 7 * 1.8, 6 * 1.8]);
//   canvas.width = canvasSize - 20;
//   canvas.height = canvasSize - 20;
//   const ctx = canvas.getContext("2d");
//   const x0 = canvas.width / 2;
//   const y0 = canvas.height / 2;
//   radius.push(radius[0]);
//   radius.push(radius[0] - range(0, 10));
//   thickness.push(thickness[0]);
//   thickness.push(rangeI(25, 35));
//   squeezeOffset.push(squeezeOffset[0] + pi);
//   squeezeOffset.push(squeezeOffset[0] - pi / 2);
//   const rotationOffset = squeezeOffset.slice();
//   let a = [radius, thickness, lineWidth];
//   for (let i = 0; i < a.length; i++) {
//     let b = a[i];
//     for (let j = 0; j < b.length; j++) {
//       b[j] *= scale;
//     }
//   }
//   const draw = () => {
//     if (!ctx) {
//       return;
//     }
//     ctx.clearRect(0, 0, canvasSize, canvasSize);
//     let x, y, r, a, o, t, s, g, p;
//     for (let j = 0; j < count; j++) {
//       ctx.beginPath();
//       ctx.lineWidth = lineWidth[j] * 1.6;
//       squeezeOffset[j] += squeezeSpeed[j];
//       rotationOffset[j] += squeezeSpeed[j];
//       o = squeezeOffset[j];
//       p = rotationOffset[j];
//       g = ctx.createLinearGradient(
//         x0 + radius[j] * Math.sin(pi05 + p),
//         y0 + radius[j] * Math.cos(pi05 + p),
//         x0 - radius[j] * Math.sin(pi05 + p),
//         y0 - radius[j] * Math.cos(pi05 + p)
//       );
//       g.addColorStop(0.4, "rgba(255, 255, 255, 1.0)");
//       g.addColorStop(1, "rgba(255, 255, 255, 0.1)");
//       ctx.strokeStyle = g;
//       for (let i = 0; i < steps; i++) {
//         a = i * step;
//         s = Math.cos(p + a);
//         a += 0.4 * Math.sin(o + a);
//         t = thickness[j] + ampReduce / 2;
//         r =
//           radius[j] -
//           ampReduce +
//           (t * (1 + Math.cos((i / steps) * pi2 * picks[j])) * (1.2 + s)) / 2;
//         x = x0 + r * Math.cos(a);
//         y = y0 + r * Math.sin(a);
//         if (i === 0) {
//           ctx.moveTo(x, y);
//         } else {
//           ctx.lineTo(x, y);
//         }
//       }
//       ctx.closePath();
//       ctx.stroke();
//     }
//     window.requestAnimationFrame(draw);
//   };
//   draw();
// };
// const HOOK_SVG =
//   "m129.03125 63.3125c0-34.914062-28.941406-63.3125-64.519531-63.3125-35.574219 0-64.511719 28.398438-64.511719 63.3125 0 29.488281 20.671875 54.246094 48.511719 61.261719v162.898437c0 53.222656 44.222656 96.527344 98.585937 96.527344h10.316406c54.363282 0 98.585938-43.304688 98.585938-96.527344v-95.640625c0-7.070312-4.640625-13.304687-11.414062-15.328125-6.769532-2.015625-14.082032.625-17.960938 6.535156l-42.328125 64.425782c-4.847656 7.390625-2.800781 17.3125 4.582031 22.167968 7.386719 4.832032 17.304688 2.792969 22.160156-4.585937l12.960938-19.71875v42.144531c0 35.582032-29.863281 64.527344-66.585938 64.527344h-10.316406c-36.714844 0-66.585937-28.945312-66.585937-64.527344v-162.898437c27.847656-7.015625 48.519531-31.773438 48.519531-61.261719zm-97.03125 0c0-17.265625 14.585938-31.3125 32.511719-31.3125 17.929687 0 32.511719 14.046875 32.511719 31.3125 0 17.261719-14.582032 31.3125-32.511719 31.3125-17.925781 0-32.511719-14.050781-32.511719-31.3125zm0 0";
// const HOOK_PATH = new Path2D(HOOK_SVG);
// const SCALE = 0.3;
// const OFFSET = 80;
// function draw(ctx: any, location: any) {
//   ctx.fillStyle = "deepskyblue";
//   ctx.shadowColor = "dodgerblue";
//   ctx.shadowBlur = 20;
//   ctx.save();
//   ctx.scale(SCALE, SCALE);
//   ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
//   ctx.fill(HOOK_PATH);
//   ctx.restore();
// }

var OrnamentCanvas = function OrnamentCanvas() {
  var canvasRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null); // useEffect(() => {
  //   console.log("mounted");
  //   if (canvasRef) {
  //     drawLogo(canvasRef as any);
  //   }
  // }, []);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
    width: 68,
    height: 68,
    onClick: function onClick(e) {
      var canvas = canvasRef.current;
      var ctx = canvas.getContext("2d");
      console.log(ctx);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }) // <canvas
  //   ref={canvasRef}
  //   width={68}
  //   height={68}
  //   onClick={e => {
  //     const canvas = canvasRef.current;
  //     const ctx = (canvas as any).getContext("2d");
  //     draw(ctx, { x: e.clientX, y: e.clientY });
  //   }}
  // />
  ;
}; // interface IOwnState {
//   showString: boolean;
//   secondsFromBd: number;
// }
// export class OrnamentCanvas extends React.Component<any, IOwnState> {
//   // private ornamentCanvas?: HTMLCanvasElement;
//   private ornamentCanvas: React.RefObject<
//     HTMLCanvasElement
//   > = React.createRef();
//   // public readonly state: IOwnState = {
//   //   showString: false,
//   //   secondsFromBd: 0
//   // };
//   public componentDidMount() {
//     if (this.ornamentCanvas) {
//       drawLogo(this.ornamentCanvas as any);
//     }
//     // this.setState({ secondsFromBd: this.calcSecondsFromBd() });
//     // this.secondsTimer = setInterval(() => {
//     //   this.setState({ secondsFromBd: this.calcSecondsFromBd() });
//     // }, 1000);
//   }
//   // public componentWillUnmount() {
//   //   if (this.secondsTimer) {
//   //     clearInterval(this.secondsTimer);
//   //   }
//   // }
//   public render() {
//     return (
//       <>
//         <canvas ref="ornamentCanvas" className="or-logo" />
//         <style jsx>{`
//           .or-logo {
//             width: 68px;
//             height: 68px;
//           }
//         `}</style>
//       </>
//     );
//   }
// }

/***/ })

})
//# sourceMappingURL=index.js.aa8743f3d4a93a627be3.hot-update.js.map