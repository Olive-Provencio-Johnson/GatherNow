const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Venue extends Model {}

Venue.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    computer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    projector: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    has_availability: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Venue',
  }
);


module.exports = Venue;