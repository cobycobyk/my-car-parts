const Design = require('../models/design');

module.exports = {
    create,
    delete: deleteFavorite,
};

function create(req, res) {
    Design.findById(req.params.id, function (err, design) {
        req.body.user = req.user._id;
        design.favorites.push(req.body);
        design.save(function (err) {
            res.redirect(`/designs/${design._id}`)
        })
    })
};

function deleteFavorite(req, res) {
    Design.findOne({ 'favorites._id': req.params.id }, function (err, design) {
        const favorite = design.favorites.id(req.params.id);
        if (!favorite.user.equals(req.user._id)) return res.redirect(`/designs/${design._id}`);
        favorite.remove();
        design.save(function (err) {
            res.redirect(`/designs/${design._id}`)
        })
    })
};