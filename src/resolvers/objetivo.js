const objetivoService = require ('../services/objetivo')

const objetivoResolvers = {
    Query : {
        getObjetivo : async (parent, args) => {
            let objetivo = await objetivoService.getObjetivo ()
            return objetivo
        },

        getObjetivoById : async (parent, args) => {
            let objetivo = await objetivoService.getObjetivoById (args._id)
            return objetivo
        }
    
    },        

    Mutation : {
        createObjetivo : async (parent, args) => {
            let objetivo = await objetivoService.createObjetivo (args)
            return objetivo
        },

        updateObjetivo : async (parent, args) => {
            let objetivo_update = objetivoService.updateObjetivo (args._id, args)
            return objetivo_update
        }

    }
    }

    module.exports = {
        objetivoResolvers
    }
