var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/designs');
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/designs',
    failureMessage: '/designs'
  }
));

//logout
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/designs')
});

module.exports = router;
