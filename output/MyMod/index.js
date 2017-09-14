"use strict";
var Data_EuclideanRing = require("../Data.EuclideanRing");
var Data_Ring = require("../Data.Ring");
var Data_Semiring = require("../Data.Semiring");
var $$Math = require("../Math");
var Prelude = require("../Prelude");
var y2 = 350.0;
var y1 = 150.0;
var x2 = 350.0;
var x1 = 150.0;
var centre = 250.0;
var rotateA = function (a) {
    return ((x1 - centre) * $$Math.cos(a) - (y1 - centre) * $$Math.sin(a)) + centre;
};

//x1 y1 xx1
var rotateB = function (b) {
    return (y1 - centre) * $$Math.cos(b) + (x1 - centre) * $$Math.sin(b) + centre;
};
var rotateC = function (c) {
    return ((x2 - centre) * $$Math.cos(c) - (y2 - centre) * $$Math.sin(c)) + centre;
};
var rotateD = function (d) {
    return (y2 - centre) * $$Math.cos(d) + (x2 - centre) * $$Math.sin(d) + centre;
};
var rotateE = function (e) {
    return ((x2 - centre) * $$Math.cos(e) - (y1 - centre) * $$Math.sin(e)) + centre;
};
var rotateF = function (f) {
    return (y1 - centre) * $$Math.cos(f) + (x2 - centre) * $$Math.sin(f) + centre;
};
var rotateG = function (g) {
    return ((x1 - centre) * $$Math.cos(g) - (y2 - centre) * $$Math.sin(g)) + centre;
};
var rotateH = function (h) {
    return (y2 - centre) * $$Math.cos(h) + (x1 - centre) * $$Math.sin(h) + centre;
};
var angle = function (val) {
    return (val * $$Math.pi) / 180.0;
};
module.exports = {
    angle: angle, 
    centre: centre, 
    rotateA: rotateA, 
    rotateB: rotateB, 
    rotateC: rotateC, 
    rotateD: rotateD, 
    rotateE: rotateE, 
    rotateF: rotateF, 
    rotateG: rotateG, 
    rotateH: rotateH, 
    x1: x1, 
    x2: x2, 
    y1: y1, 
    y2: y2
};
