// class Employee {
//     private _name: string;

//     // Multiple Constructors not Allowed 
//     // constructor() {
//     //     this._name = "NA";
//     // }

//     // constructor(name: string) {
//     //     this._name = "NA";
//     // }

//     constructor(name = "NA") {
//         this._name = name;
//     }

//     public getName(): string {
//         return this._name;
//     }

//     // Donot use Lambda as Class Member (Increase Memory Usage)
//     // public getName = () => {
//     //     return this._name;
//     // }

//     public setName(name: string) {
//         this._name = name;
//     }
// }

// // var emp1 = new Employee();
// var emp1 = new Employee("Manish");
// console.log(emp1.getName());
// emp1.setName("Abhijeet");
// console.log(emp1.getName());

// var emp2 = new Employee("Subodh");
// console.log(emp2.getName());
// emp2.setName("Ramakant");
// console.log(emp2.getName());

// ------------------------------------------------------ Properties
// Properties enable developers to expose private class members and 
// to encapsulate the logic of getting or setting that member. 
// class Employee {
//     private _name: string;

//     constructor(name = "NA") {
//         this._name = name;
//     }

//     get Name(): string {
//         return this._name;
//     }

//     set Name(name: string) {
//         this._name = name;
//     }
// }

// var emp1 = new Employee("Manish");
// console.log(emp1.Name);
// emp1.Name = "Abhijeet";
// console.log(emp1.Name);

// ------------------------------------------------------ Parameter Members
// class Employee {
//     constructor(private _name = "NA", private _age = 0) { }

//     get Name(): string {
//         return this._name;
//     }

//     set Name(name: string) {
//         this._name = name;
//     }

//     get Age(): number {
//         return this._age;
//     }

//     set Age(age: number) {
//         this._age = age;
//     }
// }

// var emp1 = new Employee("Manish");
// console.log(emp1.Name);
// emp1.Name = "Abhijeet";
// console.log(emp1.Name);

// ------------------------------------------------------ Static Members
// class BankAccount {
//     constructor(private _bankName: string, private _accName: string) { }

//     get BankName(): string {
//         return this._bankName;
//     }

//     get AccountHolderName(): string {
//         return this._accName;
//     }
// }

// var a1 = new BankAccount("ICICI", "Manish");
// console.log(a1.BankName);
// console.log(a1.AccountHolderName);

// var a2 = new BankAccount("ICICI", "Abhijeet");
// console.log(a2.BankName);
// console.log(a2.AccountHolderName);

// --------------------------- Proper
// class BankAccount {
//     private static _bankName: string

//     constructor(private _accName: string) { }

//     static set BankName(value: string) {
//         BankAccount._bankName = value;
//     }

//     get BankName(): string {
//         return BankAccount._bankName;
//     }

//     get AccountHolderName(): string {
//         return this._accName;
//     }
// }

// BankAccount.BankName = "ICICI";

// var a1 = new BankAccount("Manish");
// console.log(a1.BankName);
// console.log(a1.AccountHolderName);

// var a2 = new BankAccount("Abhijeet");
// console.log(a2.BankName);
// console.log(a2.AccountHolderName);

// ------------------------------------------------------ Readonly Members
class BankAccount {
    private static _bankName: string

    constructor(private readonly _accNumber: number, private _accName: string) { }

    static set BankName(value: string) {
        BankAccount._bankName = value;
    }

    get BankName(): string {
        return BankAccount._bankName;
    }

    get AccountNumber(): number {
        // this._accNumber = 100;
        return this._accNumber;
    }

    get AccountHolderName(): string {
        return this._accName;
    }
}

BankAccount.BankName = "ICICI";

var a1 = new BankAccount(1, "Manish");
console.log("Bank Name: ", a1.BankName);
console.log("Account Number: ", a1.AccountNumber);
console.log("Accoun Holder Name: ", a1.AccountHolderName);

var a2 = new BankAccount(2, "Abhijeet");
console.log("\nBank Name: ", a2.BankName);
console.log("Account Number: ", a2.AccountNumber);
console.log("Accoun Holder Name: ", a2.AccountHolderName);