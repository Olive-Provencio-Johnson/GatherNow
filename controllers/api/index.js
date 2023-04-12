const router = require('express').Router()
const userLogin = require('./userLogin.js')
const venueRoutes = require('./venue-route');

router.use('/users', userLogin)
router.use('/venues', venueRoutes)

module.exports = router;