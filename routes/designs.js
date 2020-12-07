const express = require('express');
const router = express.Router();
const designsCtrl = require('../controllers/designs');
const isLoggedIn = require('../config/auth')

router.get('/', designsCtrl.index);
router.get('/new', isLoggedIn, designsCtrl.new);
router.get('/:id', designsCtrl.show);
router.post('/', isLoggedIn, designsCtrl.create);
router.get('/:id/edit', designsCtrl.edit)
router.put('/:id', designsCtrl.update)
router.delete('/:id', designsCtrl.delete);

module.exports = router;