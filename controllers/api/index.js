const router = require('express').Router()
const userLogin = require('./userLogin.js')

router.use('/users', userLogin)
router.use('/api', apiRoutes)

module.exports = router