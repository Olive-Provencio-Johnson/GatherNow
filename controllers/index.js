const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoute = require('./home')
const selectedSpace = require("./selected-space");

router.use("/api", apiRoutes);
router.use("/", homeRoute)
router.use("/select-space", selectedSpace);

module.exports = router;

