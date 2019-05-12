// function Hello(): void;
// function Hello(n: string): void;

// function Hello(...args: Array<string>) {
//     if (args.length == 0)
//         console.log("Hello World!");
//     else if (args.length == 1)
//         console.log("Hello,", arguments[0]);
//     else
//         throw Error("Invalid Arguments..");
// }

// Hello();
// Hello("Manish");
// Hello("Manish", "Sharma");

// // ---------------------------------- Assignment
// function Reverse(str: string): Array<string>;
// function Reverse(strArr: Array<string>): Array<string>;

// function Reverse(strOrarr: any) {
//     if (typeof strOrarr == "string")
//         return strOrarr.split("").reverse();
//     else
//         return strOrarr.slice().reverse();
// }

// console.log(Reverse("Manish"));
// // ['h','s','i','n','a','M']
// console.log(Reverse(["PQR", "XYZ", "ABC"]));
// // ["ABC", "XYZ", "PQR"]
// // console.log(Reverse(10));

// ---------------------------------- Type Guards
// var data: (string | number);
// data = "abc";
// data = 10;

function Reverse(str: string): Array<string>;
function Reverse(strArr: Array<string>): Array<string>;

function Reverse(strOrarr: (string | string[])) {
    if (typeof strOrarr == "string")
        return strOrarr.split("").reverse();
    else
        return strOrarr.slice().reverse();
}

console.log(Reverse("Manish"));
// ['h','s','i','n','a','M']
console.log(Reverse(["PQR", "XYZ", "ABC"]));
// ["ABC", "XYZ", "PQR"]
// console.log(Reverse(10));