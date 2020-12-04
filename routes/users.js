var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/users');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, userCtrl.show);
router.get('/:id/edit', isLoggedIn, userCtrl.edit);
router.put('/', isLoggedIn, userCtrl.update);

module.exports = router;
