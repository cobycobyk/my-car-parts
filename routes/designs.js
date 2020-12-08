const express = require('express');
const router = express.Router();
const designsCtrl = require('../controllers/designs');
const isLoggedIn = require('../config/auth')

router.get('/', designsCtrl.index);
router.get('/new', isLoggedIn, designsCtrl.new);
router.get('/:id', designsCtrl.show);
router.post('/', isLoggedIn, designsCtrl.create);
router.get('/:id/edit', isLoggedIn, designsCtrl.edit)
router.put('/:id', isLoggedIn, designsCtrl.update)
router.delete('/:id', isLoggedIn, designsCtrl.delete);

module.exports = router;