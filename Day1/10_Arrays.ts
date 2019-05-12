// var arr1: number[];
// var arr2: Array<number>;

// var nArr = [10, 20, 30, 40, 50];
// var dArr = [10, "ABC"];
// dArr = [10, 20, 30, 40];

var nArr = [10, 20, 30, 40, 50];

// for (let i = 0; i < nArr.length; i++) {
//     // console.log(i + " - - - " + nArr[i]);
//     // Template Literal
//     // console.log(`${i} - - - ${nArr[i]}`);
//     console.log(`${i} 


//                 - - - ${nArr[i]}`);
// }

// for (const key in nArr) {
//     console.log(`${key} - - - ${nArr[key]}`);
// }

var employees = [
    { id: 1, name: "Manish" },
    { id: 2, name: "Ram" },
    { id: 3, name: "Abhijeet" },
    { id: 4, name: "Pravin" },
    { id: 5, name: "Subodh" }
];

// for (const key in employees) {
//     console.log(`${employees[key].id} - - - ${employees[key].name}`);
// }

// employees.forEach((item) => {
//     console.log(`${item.id} - - - ${item.name}`);
// });

// for (const item of employees) {
//     console.log(`${item.id} - - - ${item.name}`);
// }

let result = employees.find(item => item.id == 3);
console.log(result);