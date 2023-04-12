const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  res.render("home", {
    logged_in: req.session.logged_in,
  });
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/", async (req, res) => {
  // find all venues
  try {
    const venues = await Venue.findAll();
    res.status(200).json({ venues, message: "All Venues Retrieved!" });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
