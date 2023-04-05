const router = require('express').Router()
const userLogin = require('./userLogin.js')

router.use('/users', userLogin)

module.exports = router