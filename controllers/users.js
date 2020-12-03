const User = require('../models/user');

module.exports = {
    show,
    update,
};
function show(req, res) {
    User.findById(req.user._id, function(err, user) {
        res.render(`users/show`, {title: 'Profile',user});
    });
};

function update(req, res) {

};

