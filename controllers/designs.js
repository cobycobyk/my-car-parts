const Design = require('../models/design');

module.exports = {
    index,
    new: newDesign,
    show,
    create,
};

function index(req, res) {
    res.render('designs/index', {title: 'Home', user: req.user})
}

function newDesign(req, res) {

};

function show(req, res) {
};

function create(req, res) {

};