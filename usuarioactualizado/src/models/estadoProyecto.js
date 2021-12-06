const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const EstadoProyecto = new Schema ({
    Activo: {
        type: String
    },
    Inactivo: {
        type: String
    }
})

module.exports = mongoose.model("EstadoProyecto", EstadoProyectoSchema)