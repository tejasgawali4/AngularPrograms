interface IPerson {
    name: string;
    age: number;
    greet: (msg: string) => string;
}

// class Person implements IPerson {
//     name: string;
//     age: number;

//     constructor(name = "NA", age = 0) {
//         this.name = name;
//         this.age = age;
//     }

//     greet(msg: string): string {
//         return "Hello";
//     }
// }

// var p1 = new Person("Manish", 36);
// console.log(p1.greet("Hi"));

// var p2 = new Person("Abhijeet", 36);
// console.log(p2.greet("Hi"));

// interface IEmployee {
//     doWork(): string;
// }

interface IEmployee extends IPerson {
    doWork(): string;
}

interface ICustomer extends IPerson {
    doShop(): string;
}

class Person implements IPerson, IEmployee, ICustomer {
    name: string;
    age: number;

    constructor(name = "NA", age = 0) {
        this.name = name;
        this.age = age;
    }

    greet(msg: string): string {
        return "Hello";
    }

    doWork(): string {
        return "I am Working...";
    }

    doShop(): string {
        return "Shopping in Dubai";
    }
}

// var p1 = new Person("Manish", 36);
// console.log(p1.greet("Hi"));
// console.log(p1.doWork());
// console.log(p1.doShop());

var p1: IPerson = new Person("Manish", 36);
console.log(p1.greet("Hi"));

var p2: IEmployee = new Person("Manish", 36);
console.log(p2.greet("Hi"));
console.log(p2.doWork());

var p3: ICustomer = new Person("Manish", 36);
console.log(p3.greet("Hi"));
console.log(p3.doShop());
