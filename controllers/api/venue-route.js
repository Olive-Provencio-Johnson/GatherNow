const router = require('express').Router();
const { Venue } = require('../../models/venue.js')

//hard coded for testing purposes
const venues = [
    {
      id: 1,
      venue_name: 'Venue 1',
      capacity: 10,
    },
    {
        id: 2,
        venue_name: 'Venue 2',
        capacity: 20,
      },
      {
        id: 3,
        venue_name: 'Venue 3',
        capacity: 35,
      },
      {
        id: 4,
        venue_name: 'Venue 4',
        capacity: 40,
      },
      {
        id: 5,
        venue_name: 'Venue 5',
        capacity: 50,
      },
    
  ];


router.get('/', async (req, res) => {
    res.render('all', {venues});
  });

  module.exports = router;