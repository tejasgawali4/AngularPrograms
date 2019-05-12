// Implicitly Typed
// var data = 10;
// // data = "ABC";

// var str = "ABC";

// var test;
// test = 10;
// test = "abc";

// Explictly Typed

var age: number;
age = 10;
// age = "abc";

function add(x: number, y: number) {
    return x + y;
}

function sub(x: number, y: any) {
    return x + y;
}

console.log(add(2, 3));
console.log(add(2, 20));


