const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reservations extends Model {}

Reservations.init(
    {
        res_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        res_creator: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        res_start: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        res_end: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Reservations',
      }
);

module.exports = Reservations