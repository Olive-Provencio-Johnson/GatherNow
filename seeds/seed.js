const sequelize = require('../config/connection');
const { User, Venue } = require('../models');
const userSeedInfo = require('./userSeeds.json');
const venueSeeds = require('./venue-seeds.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeedInfo, {
    individualHooks: true,
    returning: true,
  });

  await Venue.bulkCreate(venueSeeds)

  console.log("Database Seeded With Users and Venues")
  process.exit(0);
};

seedDatabase();
