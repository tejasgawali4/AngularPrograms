var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function Average() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i_1 = 0; i_1 < args.length; i_1++) {
        sum += args[i_1];
    }
    var length = args.length;
    if (length > 0)
        return sum / length;
    else
        return sum;
}
var numArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newArr = numArr1.slice();
newArr.push(10);
var person = { id: 1, name: "Manish", address: { city: "Pune" } };
var person_clone = __assign({}, person);
person_clone.address.city = "Mumbai";
console.log(person);
console.log(person_clone);
