const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { v4: uuidv4 } = require("uuid");

class Venue extends Model {
  selectVenue(venueId) {
    return `SELECT * FROM venue WHERE id = ${venueId}`;
  }
  // this.hasMany(user, {foreignKey: "user_id"});
}

Venue.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: () => uuidv4(),
    },
    venueName: {
      type: DataTypes.STRING,
      allowNull: false,
      // not sure that we need the next six lines if we are not allowing customers to input new rooms or venues. (if for single small business use only)
      validate: {
        notEmpty: true,
        len: [3, 40],
        isAlpha: function (value) {
          return /^[a-zA-Z ]*$/.test(value);
        },
      },
    },
  },
  {
    hooks: {
      beforeSelect: async (newVenueData) => {
        newVenueData.password = await bcrypt.hash(newUserData.password, 4);
        return newUserData;
      },
    },
    sequelize,
    underscored: true,
    timestamps: false,
    createdAt: false,
  }
);

module.exports = Venue;
