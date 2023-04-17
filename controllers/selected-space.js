const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Venue } = require('../models');

router.get('/:id', withAuth, async (req, res) => {
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

router.get('/', withAuth, async (req, res) => {
    try {
        res.status(200).render('selected-space');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;