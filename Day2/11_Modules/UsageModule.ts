import { Point, IPoint } from "./PointModule.js";
import * as $ from 'jquery';

let point: IPoint = new Point(2, 3);
console.log(point.getDistance());

document.getElementById("jsResult").innerHTML =
    point.getDistance().toString();

$(document).ready(function () {
    $("#jqResult").html(point.getDistance().toString());
});