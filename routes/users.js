var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/users');
const isLoggedIn = require('../config/auth');

router.get('/', userCtrl.index);
router.get('/:id', userCtrl.show);
router.get('/:id/favorites', userCtrl.favorite);
router.get('/:id/cars', userCtrl.cars);
router.get('/:id/edit', isLoggedIn, userCtrl.edit);
router.put('/:id', isLoggedIn, userCtrl.update);

module.exports = router;
