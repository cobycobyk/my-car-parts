const express = require('express');
const router = express.Router();
const designsCtrl = require('../controllers/designs');

router.get('/', designsCtrl.index);

module.exports = router;