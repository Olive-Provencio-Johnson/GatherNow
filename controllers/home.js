const router = require('express').Router()
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) => {
    res.render('home', {
      logged_in: req.session.logged_in
    })
  })

router.get('/login', (req, res) => {
if (req.session.logged_in) {
    res.redirect('/');
    return;
}
res.render('login');
});

module.exports = router