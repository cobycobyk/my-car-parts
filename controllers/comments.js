const Design = require('../models/design');

module.exports = {
    create,
    delete: deleteComment,
};

function create(req, res) {
    Design.findById(req.params.id, function(err, design) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        design.comments.push(req.body);
        design.save(function(err) {
            res.redirect(`/designs/${design._id}`)
        })
    })
};

function deleteComment(req, res) {
    Design.findOne({'comments._id': req.params.id}, function(err, design) {
        const comment = design.comments.id(req.params.id);
        if (!comment.user.equals(req.user._id)) return res.redirect(`/designs/${design._id}`);
        comment.remove();
        design.save(function(err) {
            res.redirect(`/designs/${design._id}`)
        })
    })
};