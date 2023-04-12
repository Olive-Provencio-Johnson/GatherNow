const router = require('express').Router()
const userLogin = require('./userLogin.js')
const selectedSpace = require('./selected-space');
const venueRoutes = require('./venue-routes');

router.use('/users', userLogin)

router.use('/venues', venueRoutes)

module.exports = router