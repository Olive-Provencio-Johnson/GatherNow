const {Venue} = require ('../models')
module.exports = {
    get_data: () => {
        const number = Math.random()
        return `${number}`
    },
    allVenues: async () => {
        return await Venue.findAll()
    }
}