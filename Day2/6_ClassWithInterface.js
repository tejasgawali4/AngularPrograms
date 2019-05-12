var Person = (function () {
    function Person(name, age) {
        if (name === void 0) { name = "NA"; }
        if (age === void 0) { age = 0; }
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function (msg) {
        return "Hello";
    };
    Person.prototype.doWork = function () {
        return "I am Working...";
    };
    Person.prototype.doShop = function () {
        return "Shopping in Dubai";
    };
    return Person;
}());
var p1 = new Person("Manish", 36);
console.log(p1.greet("Hi"));
var p2 = new Person("Manish", 36);
console.log(p2.greet("Hi"));
console.log(p2.doWork());
var p3 = new Person("Manish", 36);
console.log(p3.greet("Hi"));
console.log(p3.doShop());
