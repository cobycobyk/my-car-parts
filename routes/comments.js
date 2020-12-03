const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const isLoggedIn = require('../config/auth')

router.post('/designs/:id/comments', isLoggedIn, commentsCtrl.create);
//delete /reviews/:id
router.delete('/comments/:id', isLoggedIn, commentsCtrl.delete)

module.exports = router;