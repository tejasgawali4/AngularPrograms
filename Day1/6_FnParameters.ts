// function Hello(name: string) {
//     console.log("Hello", name);
// }

// Hello("Synechron");
// Hello();
// Hello("Synechron", "Pune");

// Optional Parameter (?)
// function Hello(name: string, location?: string) {
//     console.log("Hello", name, ", location is: ", location);
// }

// Hello("Synechron", "Pune");
// Hello("Synechron");

// function Addition(a?: number, b?: number): number {
//     a = a || 0;
//     b = b || 0;
//     return a + b;
// }

// console.log(Addition(2, 3));
// console.log(Addition(2));
// console.log(Addition());

// Default Parameters
function Addition(a = 0, b = 0): number {
    return a + b;
}

console.log(Addition(2, 3));
console.log(Addition(2));
console.log(Addition());