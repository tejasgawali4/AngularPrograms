// Tuple - Stores a fixed collection of values of same or varied types, maintaining the sequence

// var arr: number[] = [10, 20, 30, 40, 50];

// var dataArr: (string | number)[] = ["ABC", 10];
// dataArr = [10, "XYZ"];
// dataArr = [10, 20, 30, 40];
// dataArr = ["ABC", "XYZ"];

var myTuple: [number, string] = [10, "ABC"];
// myTuple = ["ABC", 10];
// myTuple = [10, 20, 30, 40];
// myTuple = ["ABC", "XYZ"];
myTuple = [1, "XYZ"];

for (const item of myTuple) {
    console.log(item);
}