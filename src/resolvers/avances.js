const avancesService = require("../services/avances")

const avancesResolvers = {
    Query : {
        getAvance : async (parent, args) => {
            let avances = await avancesService.getAvance ()
            return avances
        },

        getAvanceById : async (parent, args) => {
            let avance = await avancesService.getAvanceById (args._id)
            return avance
        }
    
    },        

    Mutation : {
        createAvance : async (parent, args) => {
            let avance = await avancesService.createAvance (args)
            return avance
        },

        updateAvance : async (parent, args) => {
            let avance_update = avancesService.updateAvance (args._id, args)
            return avance_update
        }

    }
    }

    module.exports = {
        avancesResolvers
    }