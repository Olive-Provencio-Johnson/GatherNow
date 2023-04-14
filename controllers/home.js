const router = require('express').Router()
const withAuth = require('../utils/auth')
const { Venue } = require('../models')

router.get('/', async (req, res) => {
  const allVenues = await Venue.findAll();
    res.render('home', {
      venues: allVenues,
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

module.exports = router;