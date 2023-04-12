const sequelize = require('../config/connection');
const { User, Venue } = require('../models');

const userSeedInfo = require('./userSeeds.json');
const venueSeedInfo = require('./venueSeeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeedInfo, {
    individualHooks: true,
    returning: true,
  });

  await Venue.bulkCreate(venueSeedInfo, {
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
