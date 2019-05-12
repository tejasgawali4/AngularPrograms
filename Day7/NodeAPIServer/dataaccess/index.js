const monk = require('monk');
const db = monk('localhost/appdb');
const collection = db.get('usercollection');

module.exports.getAllUsers = function () {
    return new Promise((resolve, reject) => {
        collection.find({}).then(function (data) {
            resolve(data);
        }, function (err) {
            reject("Connection Error..");
        });
    });
}

module.exports.getUserById = function (id) {
    return new Promise((resolve, reject) => {
        collection.findOne({ _id: monk.id(id) }).then(function (data) {
            resolve(data);
        }, function (err) {
            reject("Connection Error..");
        });
    });
}

module.exports.insertUser = function (user) {
    return new Promise((resolve, reject) => {
        collection.insert(user).then(function (data) {
            resolve(data);
        }, function (err) {
            reject("Connection Error..");
        });
    });
}

module.exports.updateUser = function (id, user) {
    return new Promise((resolve, reject) => {
        collection.findOneAndUpdate({ _id: monk.id(id) }, { $set: user }).then(function (data) {
            resolve(data);
        }, function (err) {
            reject("Connection Error..");
        });
    });
}

module.exports.deleteUser = function (id) {
    return new Promise((resolve, reject) => {
        collection.findOneAndDelete({ _id: monk.id(id) }).then(function () {
            resolve();
        }, function (err) {
            reject("Connection Error..");
        });
    });
}