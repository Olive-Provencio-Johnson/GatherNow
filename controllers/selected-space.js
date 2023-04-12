const router = require('express').Router();
const { Venue } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
        const venueData = await Venue.findone({
            where: {
                id: req.params.id
            }
        });
        const venue = venueData.map((venue) => venue.get({ plain: true }));
        res.status(200).json(venueData);
        res.render('selected-space')
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/', async (req, res) => {
    try {
        res.render('selected-space');
        res.status(200);
    } catch (err) {
        res.status(500).json(err);
    }
});
