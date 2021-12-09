const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const EstadoInscripcionSchema = new Schema ({
    Aceptada: {
        type: String
    },
    Rechazada: {
        type: String
    }
})

module.exports = mongoose.model("EstadoInscripcion", EstadoInscripcionSchema)