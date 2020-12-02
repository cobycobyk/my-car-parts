const Design = require('../models/design');

module.exports = {
    index,
};

function index(req, res) {
    res.render('designs/index', {title: 'Home'})
}