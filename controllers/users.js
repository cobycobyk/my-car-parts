const User = require('../models/user');

module.exports = {
    show,
    favorite,
    cars,
    edit,
    update,
};

function show(req, res) {
    User.findById(req.user._id, function(err, user) {
        res.render(`users/show`, {title: 'Profile', user});
    });
};
function favorite(req, res) {
    User.findById(req.user._id, function(err, user) {
        res.render(`users/favorites`, {title: 'Profile', user});
    });
};
function cars(req, res) {
    User.findById(req.user._id, function(err, user) {
        res.render(`users/cars`, {title: 'Profile', user});
    });
};

function edit(req, res) {
    User.findById(req.user._id, function(err, user) {
        res.render('users/edit', { title: 'Edit Profile', user });
    });
};

function update(req, res) {
  User.findById(req.user._id, function(err, user) {
    user.nickname = req.body.nickname; 
    user.bio = req.body.bio;
    user.instagram = req.body.instagram
    user.save(function(err) {
        res.redirect(`/users/${req.user._id}`);
    });
  });
};

