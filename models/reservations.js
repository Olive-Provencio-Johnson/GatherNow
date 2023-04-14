const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reservations extends Model {}

Reservations.init(
    {
        res_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        res_desc: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        res_creator: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        res_group: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        res_start: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        res_end: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }
);

module.exports = Reservations