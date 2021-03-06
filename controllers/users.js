const User = require('../models/user');
const Design = require('../models/design');

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
    User.findById(req.params.id, function (err, designer) {
        Design
            .find({ designer: req.params.id })
            .exec(function (err, designs) {
                res.render(`users/show`, { title: 'Profile', designer, designs });
            });
    });
};
function favorite(req, res) {
    User.findById(req.params.id, function (err, designer) {
        Design.find({})
            .populate('favorites')
            .exec(function(err, designs) {
                res.render(`users/favorites`, { title: 'Profile', designs, designer });
        })
    });
};
function cars(req, res) {
    User.findById(req.user._id, function (err, user) {
        User.findById(req.params.id, function (err, designer) {
            res.render(`users/cars`, { title: 'Profile', user, designer });
        })
    });
};

function edit(req, res) {
    User.findById(req.user._id, function (err, user) {
        res.render('users/edit', { title: 'Edit Profile', user });
    });
};

function update(req, res) {
    User.findById(req.user._id, function (err, user) {
        user.nickname = req.body.nickname;
        user.bio = req.body.bio;
        user.instagram = req.body.instagram
        user.save(function (err) {
            res.redirect(`/users/${req.user._id}`);
        });
    });
};

