const da = require('../dataaccess');

module.exports.index = function (req, res, next) {
    var msg = req.query.msg;
    da.getAllUsers().then(function (data) {
        res.json({ success: true, users: data });
    }, function (eMsg) {
        res.json({ success: false, message: eMsg });
    })
}