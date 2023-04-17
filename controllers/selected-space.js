const router = require('express').Router();
const { Venue } = require('../models');

router.get('/:id', async (req, res) => {
    try {
        const venueData = await Venue.findOne({
            where: {
                id: req.params.id
            }
        });
        const venue = venueData.get({ plain: true });

        res.render('selected-space', {
            venue: venue
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/', async (req, res) => {
    try {
        res.status(200).render('selected-space');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;