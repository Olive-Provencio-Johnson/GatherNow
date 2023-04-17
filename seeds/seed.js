const sequelize = require('../config/connection');
const { User, Venue, Reservations } = require('../models');
const userSeedInfo = require('./userSeeds.json');
const venueSeeds = require('./venue-seeds.json')
const reservationSeeds = require('./reservationSeeds.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeedInfo, {
    individualHooks: true,
    returning: true,
  });

  await Venue.bulkCreate(venueSeeds);

  await Reservations.bulkCreate(reservationSeeds);

  console.log("List Of Current Database Below")
  console.log( await Reservations.findAll())
  process.exit(0);
};

seedDatabase();
