const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./venue-routes");
const selectSpace = require("./select-space");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/select-space", selectSpace);

module.exports = router;

