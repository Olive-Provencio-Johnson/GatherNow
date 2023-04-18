const router = require("express").Router();
const { Reservations } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const calendarData = await Reservations.findAll();
    const events = calendarData.map((reservation) => ({
      title: reservation.res_title,
      start: reservation.res_start,
      end: reservation.res_end,
    }));
    res.status(200).json(events);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
});

router.post("/addNew", async (req, res) => {
  try{
    const created = await Reservations.create(
      {
        res_title: req.body.newEvent.res_title,
        res_creator: req.body.newEvent.res_organizer,
        res_start: req.body.newEvent.res_start,
        res_end:req.body.newEvent.res_end,
      }
    )
  } catch(err){
    console.error(err)
  }
})
module.exports = router