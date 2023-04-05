const { Model, DataTypes} = require('sequelize')
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection')
const { v4: uuidv4 } = require('uuid')

class User extends Model { 
    checkPassword(loginPw){
        return bcrypt.compareSync(loginPw, this.password)
    }
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: () => uuidv4()
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [3, 40],
                isAlpha: function(value){
                    return /^[a-zA-Z ]*$/.test(value)
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4, 50]
            }
        }
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 4)
                return newUserData
            },
        },
        sequelize,
        underscored: true,
        timestamps: false,
        createdAt: false
    }
)

module.exports = User