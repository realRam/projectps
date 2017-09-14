"use strict";
var Color = require("../Color");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_ST = require("../Control.Monad.ST");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Maybe = require("../Data.Maybe");
var Data_Semiring = require("../Data.Semiring");
var Graphics_Canvas = require("../Graphics.Canvas");
var Graphics_Drawing = require("../Graphics.Drawing");
var Graphics_Isometric = require("../Graphics.Isometric");
var $$Math = require("../Math");
var MyMod = require("../MyMod");
var Partial_Unsafe = require("../Partial.Unsafe");
var Prelude = require("../Prelude");
var n = 35.0;
var main = Data_Functor["void"](Control_Monad_Eff.functorEff)(function __do() {
    var v = Graphics_Canvas.getCanvasElementById("canvas1")();
    var __unused = function (dictPartial1) {
        return function ($dollar39) {
            return $dollar39;
        };
    };
    return __unused()((function () {
        if (v instanceof Data_Maybe.Just) {
            return function __do() {
                var v1 = Graphics_Canvas.getContext2D(v.value0)();
                var v2 = Graphics_Canvas.setFillStyle("#fdf900")(v1)();
                var v3 = Graphics_Canvas.fillPath(v1)(function __do() {
                    var v3 = Graphics_Canvas.moveTo(v1)(MyMod.rotateA(MyMod.angle(n)) + 35.0)(MyMod.rotateB(MyMod.angle(n)) + 35.0)();
                    var v4 = Graphics_Canvas.lineTo(v1)(MyMod.rotateE(MyMod.angle(n)) + 35.0)(MyMod.rotateF(MyMod.angle(n)) + 35.0)();
                    var v5 = Graphics_Canvas.lineTo(v1)(MyMod.rotateC(MyMod.angle(n)) + 35.0)(MyMod.rotateD(MyMod.angle(n)) + 35.0)();
                    var v6 = Graphics_Canvas.lineTo(v1)(MyMod.rotateG(MyMod.angle(n)) + 35.0)(MyMod.rotateH(MyMod.angle(n)) + 35.0)();
                    return Graphics_Canvas.closePath(v1)();
                })();
                var v4 = Graphics_Canvas.setFillStyle("#01d6d3")(v1)();
                var v5 = Graphics_Canvas.fillPath(v1)(function __do() {
                    var v5 = Graphics_Canvas.moveTo(v1)(MyMod.rotateA(MyMod.angle(n)))(MyMod.rotateB(MyMod.angle(n)))();
                    var v6 = Graphics_Canvas.lineTo(v1)(MyMod.rotateA(MyMod.angle(n)) + 35.0)(MyMod.rotateB(MyMod.angle(n)) + 35.0)();
                    var v7 = Graphics_Canvas.lineTo(v1)(MyMod.rotateE(MyMod.angle(n)) + 35.0)(MyMod.rotateF(MyMod.angle(n)) + 35.0)();
                    var v8 = Graphics_Canvas.lineTo(v1)(MyMod.rotateE(MyMod.angle(n)))(MyMod.rotateF(MyMod.angle(n)))();
                    return Graphics_Canvas.closePath(v1)();
                })();
                var v6 = Graphics_Canvas.setFillStyle("#ef3737")(v1)();
                var v7 = Graphics_Canvas.fillPath(v1)(function __do() {
                    var v7 = Graphics_Canvas.moveTo(v1)(MyMod.rotateA(MyMod.angle(n)))(MyMod.rotateB(MyMod.angle(n)))();
                    var v8 = Graphics_Canvas.lineTo(v1)(MyMod.rotateA(MyMod.angle(n)) + 35.0)(MyMod.rotateB(MyMod.angle(n)) + 35.0)();
                    var v9 = Graphics_Canvas.lineTo(v1)(MyMod.rotateG(MyMod.angle(n)) + 35.0)(MyMod.rotateH(MyMod.angle(n)) + 35.0)();
                    var v10 = Graphics_Canvas.lineTo(v1)(MyMod.rotateG(MyMod.angle(n)))(MyMod.rotateH(MyMod.angle(n)))();
                    return Graphics_Canvas.closePath(v1)();
                })();
                var v8 = Graphics_Canvas.setFillStyle("#00ff00")(v1)();
                var v9 = Graphics_Canvas.fillPath(v1)(function __do() {
                    var v9 = Graphics_Canvas.moveTo(v1)(MyMod.rotateG(MyMod.angle(n)))(MyMod.rotateH(MyMod.angle(n)))();
                    var v10 = Graphics_Canvas.lineTo(v1)(MyMod.rotateG(MyMod.angle(n)) + 35.0)(MyMod.rotateH(MyMod.angle(n)) + 35.0)();
                    var v11 = Graphics_Canvas.lineTo(v1)(MyMod.rotateC(MyMod.angle(n)) + 35.0)(MyMod.rotateD(MyMod.angle(n)) + 35.0)();
                    var v12 = Graphics_Canvas.lineTo(v1)(MyMod.rotateC(MyMod.angle(n)))(MyMod.rotateD(MyMod.angle(n)))();
                    return Graphics_Canvas.closePath(v1)();
                })();
                var v10 = Graphics_Canvas.setFillStyle("#082090")(v1)();
                var v11 = Graphics_Canvas.fillPath(v1)(function __do() {
                    var v11 = Graphics_Canvas.moveTo(v1)(MyMod.rotateC(MyMod.angle(n)))(MyMod.rotateD(MyMod.angle(n)))();
                    var v12 = Graphics_Canvas.lineTo(v1)(MyMod.rotateC(MyMod.angle(n)) + 35.0)(MyMod.rotateD(MyMod.angle(n)) + 35.0)();
                    var v13 = Graphics_Canvas.lineTo(v1)(MyMod.rotateE(MyMod.angle(n)) + 35.0)(MyMod.rotateF(MyMod.angle(n)) + 35.0)();
                    var v14 = Graphics_Canvas.lineTo(v1)(MyMod.rotateE(MyMod.angle(n)))(MyMod.rotateF(MyMod.angle(n)))();
                    return Graphics_Canvas.closePath(v1)();
                })();
                var v12 = Graphics_Canvas.setFillStyle("#df01a5")(v1)();
                var v13 = Graphics_Canvas.fillPath(v1)(function __do() {
                    var v13 = Graphics_Canvas.moveTo(v1)(MyMod.rotateA(MyMod.angle(n)))(MyMod.rotateB(MyMod.angle(n)))();
                    var v14 = Graphics_Canvas.lineTo(v1)(MyMod.rotateE(MyMod.angle(n)))(MyMod.rotateF(MyMod.angle(n)))();
                    var v15 = Graphics_Canvas.lineTo(v1)(MyMod.rotateC(MyMod.angle(n)))(MyMod.rotateD(MyMod.angle(n)))();
                    var v16 = Graphics_Canvas.lineTo(v1)(MyMod.rotateG(MyMod.angle(n)))(MyMod.rotateH(MyMod.angle(n)))();
                    return Graphics_Canvas.closePath(v1)();
                })();
                return Graphics_Canvas.fillPath(v1)(Graphics_Canvas.rect(v1)({
                    x: 150.0, 
                    y: 150.0, 
                    w: 0.0, 
                    h: 0.0
                }))();
            };
        };
        throw new Error("Failed pattern match at Main line 19, column 3 - line 20, column 3: " + [ v.constructor.name ]);
    })())();
});
module.exports = {
    main: main, 
    n: n
};
