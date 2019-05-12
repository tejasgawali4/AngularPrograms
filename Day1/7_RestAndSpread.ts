// var numArr = [];
// var numArr: number[];
// var numArr: Array<number>;

// Rest Parameter
function Average(...args: number[]) {
    var sum = 0;

    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }

    var length = args.length;
    if (length > 0)
        return sum / length;
    else
        return sum;
}

// console.log(Average());
// console.log(Average(1));
// console.log(Average(1, 2));
// console.log(Average(1, 2, 3, 4, 5));
// console.log(Average(1, 2, 3, 4, 5, 6, 7, 8, 9));

// var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(Average(...numArr));  // Spread Operator

// Array Spread
var numArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(...numArr1);

var newArr = [...numArr1];
newArr.push(10);

// console.log(numArr1);
// console.log(newArr);

// Object Spread - Shallow Copy
var person = { id: 1, name: "Manish", address: { city: "Pune" } };
var person_clone = { ...person };

// person_clone.name = "Abhijeet";
person_clone.address.city = "Mumbai";

console.log(person);
console.log(person_clone);