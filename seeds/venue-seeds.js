const venueSeedInfo = [
    {
        "id": 1,
        "venue_name": "Venue 1", 
        "capacity": 10,
        "has_availability": false
    },
    {
        "id": 2,
        "venue_name": "Venue 2",
        "capacity": 10,
        "has_availability": false
    },
    {
        "id": 3,
        "venue_name": "Venue 3",
        "capacity": 20,
        "has_availability": false
    },
    {
        "id": 4,
        "venue_name": "Venue 4",
        "capacity": 30,
        "has_availability": false
    },
    {
        "id": 5,
        "venue_name": "Venue 5",
        "capacity": 45,
        "has_availability": false
    }
  ]

  const venueSeeds = () => Venue.bulkCreate(venueSeedInfo);

  module.exports = venueSeeds