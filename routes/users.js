var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/users');
const isLoggedIn = require('../config/auth');

/* GET users listing. */
router.get('/', isLoggedIn, userCtrl.show);
router.put('/:id', isLoggedIn, userCtrl.update)

module.exports = router;
