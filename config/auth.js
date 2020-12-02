module.exports = function(req, res, next) {
    //if logged in, call next()
    if (req.isAuthenticated()) return next();
    //bad usr - tried to access a protected route
    res.redirect('/auth/google')
};