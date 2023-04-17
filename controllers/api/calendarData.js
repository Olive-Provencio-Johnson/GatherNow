const router = require("express").Router();
const { Reservations } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const calendarData = await Reservations.findAll();
    const events = calendarData.map((reservation) => ({
      title: reservation.res_title,
      start: reservation.res_start,
      end: reservation.res_end,
      editable: true,
    }));
    res.status(200).json(events);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
});

module.exports = router