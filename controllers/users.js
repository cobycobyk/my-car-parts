const User = require('../models/user');
const Design = require('../models/design');
const user = require('../models/user');

module.exports = {
    index,
    show,
    favorite,
    cars,
    edit,
    update,
};

function index(req, res) {
    res.redirect(`/users/show`);
}

function show(req, res) {
    User.findById(req.user._id) 
        .populate('designs')
        .exec(function(err, user) {
            Design
                .find({designer: {$nin: user.designs}})
                .exec(function(err, designs) {
                    res.render(`users/show`, {title: 'Profile', user, designs});
                });
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

