// // Type Conversion Methods

// var data = "25.5asasasa";

// var r1 = parseInt(data) + 10;
// console.log(r1);

// var r2 = parseFloat(data) + 10;
// console.log(r2);

// var r3 = Number(data) + 10;
// console.log(r3);

// Type Assertion

let myData: any = "This is just for check...";

let l1 = myData.length;
console.log(l1);

let l2 = (<string>myData).length;
console.log(l2);

let l3 = (myData as string).length;
console.log(l3);

let l4 = (myData as number).toFixed();
console.log(l4);
