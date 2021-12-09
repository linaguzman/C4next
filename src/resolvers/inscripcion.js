const inscripcionService = require ('../services/inscripcion')

const inscripcionResolvers = {
    Query : {
        getInscripcion : async (parent, args) => {
            let inscripciones = await inscripcionService.getInscripcion ()
            return inscripciones
        },

        getInscripcionById : async (parent, args) => {
            let inscripcion = await inscripcionService.getInscripcionById (args._id)
            return inscripcion
        }
    
    },        

    Mutation : {
        createInscripcion : async (parent, args) => {
            let inscripcion = await inscripcionService.createInscripcion (args)
            return inscripcion
        },

        updateInscripcion : async (parent, args) => {
            let inscripcion_update = inscripcionService.updateInscripcion (args._id, args)
            return inscripcion_update
        }

    }
    }

    module.exports = {
        inscripcionResolvers
    }