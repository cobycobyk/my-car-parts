const User = require('../models/user');

module.exports = {
    show,
    edit,
    update,
};

function show(req, res) {
    User.findById(req.user._id, function(err, user) {
        res.render(`users/show`, {title: 'Profile',user});
    });
};

function edit(req, res) {
    User.findById(req.user._id, function(err, user) {
        res.render('users/edit', { title: 'Edit Profile', user });
    });
};

function update(req, res) {
    User.update(req.user._id, )
};

