const sequelize = require('../config/connection');
const { User } = require('../models');
const userSeedInfo = require('./userSeeds.json');
const venueSeeds = require('./venue-seeds')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeedInfo, {
    individualHooks: true,
    returning: true,
  });

  await venueSeeds

  process.exit(0);
};

seedDatabase();
