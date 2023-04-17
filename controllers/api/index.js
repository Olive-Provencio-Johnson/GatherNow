const router = require('express').Router()
const userLogin = require('./userLogin.js')
const calendarData = require('./calendarData.js')
router.use('/users', userLogin)
router.use('/CAData', calendarData)

module.exports = router;