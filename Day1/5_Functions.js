function add1(a, b) {
    return a + b;
}
var add2 = function (a, b) {
    return a + b;
};
var add3;
add3 = function (a, b) {
    return a + b;
};
var add4;
add4 = function (a, b) {
    return a + b;
};
var add5;
add5 = function (a, b) {
    return a + b;
};
var add6;
add6 = function (a, b) { return a + b; };
var arr = [10, 20, 30, 40, 50];
function filterFn(value, index, arr) {
    return value == 80;
}
console.log(arr.filter(filterFn));
console.log(arr.filter(function (value, index, arr) {
    return value == 80;
}));
console.log(arr.filter(function (value, index, arr) {
    return value == 80;
}));
console.log(arr.filter(function (value, index, arr) { return value == 80; }));
