// Fn Declaration
// function Show1() {
//     console.log("Show Completed...");
//     // return 10;
// }

// // Show1();
// // var r1 = Show1();

// // var r1: undefined;
// // var r1: void;
// // var r1;
// // r1 = 10;
// // console.log(r1);
// // console.log(typeof r1);

// function Show2(): void {
//     console.log("Show Completed...");
//     // return 10;
// }

// Fn Expression
// var Show3 = function () {
//     console.log("Show Completed...");
// }

function add1(a: number, b: number): number {
    return a + b;
}

var add2 = function (a: number, b: number): number {
    return a + b;
}

// var add3: () => void;
var add3: (x: number, y: number) => number;
add3 = function (a: number, b: number): number {
    return a + b;
}

var add4: (x: number, y: number) => number;
add4 = function (a, b) {
    return a + b;
}

var add5: (x: number, y: number) => number;
add5 = (a, b) => {
    return a + b;
}

var add6: (x: number, y: number) => number;
add6 = (a, b) => a + b;

// console.log(add1(2, 3));
// console.log(add2(2, 3));
// console.log(add3(2, 3));
// console.log(add4(2, 3));
// console.log(add5(2, 3));
// console.log(add6(2, 3));

var arr = [10, 20, 30, 40, 50];

function filterFn(value: number, index: number, arr: number[]) {
    return value == 80;
}

console.log(arr.filter(filterFn));

console.log(arr.filter(function (value: number, index: number, arr: number[]) {
    return value == 80;
}));

console.log(arr.filter((value: number, index: number, arr: number[]) => {
    return value == 80;
}));

console.log(arr.filter((value: number, index: number, arr: number[]) => value == 80));