const router = require('express').Router()
const userLogin = require('./userLogin.js')
const selectedSpace = require('./selected-space');

router.use('/users', userLogin)
router.use('/select', selectedSpace)
module.exports = router