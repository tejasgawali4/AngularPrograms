var express = require('express');
var router = express.Router();

var users_controller = require('../controllers/usersController');
var accounts_controller = require('../controllers/accountsController');

// Enabling CORS
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

router.get('/users', accounts_controller.verify, users_controller.index);

router.post('/authenticate', accounts_controller.authenticate);

module.exports = router;