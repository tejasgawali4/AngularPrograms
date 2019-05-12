"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PointModule_js_1 = require("./PointModule.js");
var $ = require("jquery");
var point = new PointModule_js_1.Point(2, 3);
console.log(point.getDistance());
document.getElementById("jsResult").innerHTML =
    point.getDistance().toString();
$(document).ready(function () {
    $("#jqResult").html(point.getDistance().toString());
});
