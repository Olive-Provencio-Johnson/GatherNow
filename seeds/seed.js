const sequelize = require('../config/connection');
const { User } = require('../models');

const userSeedInfo = require('./userSeeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeedInfo, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
