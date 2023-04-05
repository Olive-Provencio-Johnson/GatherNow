const authentication = (req, res, next) => {
    if(!req.session.logged_in){
        res.redirect('/login')
    } else {
        next()
    }
}

module.exports = authentication