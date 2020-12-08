const Design = require('../models/design');
const User = require('../models/user')

module.exports = {
    index,
    new: newDesign,
    show,
    create,
    edit,
    update,
    delete: deletePart,
};

function index(req, res) {
    Design.find({}, function(err, design) {
        res.render('designs/index', {title: 'Home', design})
    })
}

function newDesign(req, res) {
    res.render('designs/new', {title: 'Add a Design'})
};

function show(req, res) {
    User.findById(req.user._id, function(err, user) {
    Design.findById(req.params.id)
        .populate('designer')
        .exec(function(err, design) {
            User
                .find({_id: design.designer})
                .exec(function(err, designer) {
                    res.render(`designs/show`, {title: 'Design', user, designer, design})
                })
            })
    })
};

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const design = new Design(req.body) 
    design.designer = req.user._id
    design.save(function(err) {
        if (err) return res.redirect('/design/new');
        res.redirect(`../users/${req.user._id}`)
    })
};
function edit(req, res) {
    Design.findById(req.params.id, function(err, design) {
        res.render(`designs/edit`, {title: 'Edit Design', design})
    })
};
function update(req, res) {
    Design.findByIdAndUpdate(req.params.id, req.body, function(err, oldDesign) {
        res.redirect(`/designs/${req.params.id}`)
    })
}
function deletePart(req, res) {
    Design.findByIdAndDelete(req.params.id, function(err, deletedDesign) {
        res.redirect('/designs')
    })
};