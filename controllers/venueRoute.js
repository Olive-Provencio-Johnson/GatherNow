const router = require('express').Router();
const { Venue } = require('../../models/venue.js')

router.post('/venue', async (req, res) => {
    try {
        const venueData = await Venue.findOne({ where: { name: req.body.venueName } })
        if (!venueData || !(await venueData.selectVenue(req.body.venueName))) {
            res.status(404).json({ message: 'Venue not found' })
            return;
        }

        req.session.venueName = venueData.id