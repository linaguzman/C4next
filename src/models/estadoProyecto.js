const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const proyecto = require('./proyecto')

const estadoProyectoSchema = new Schema ({
    Activo: {
        type: String,
        requiered: true
    },
    Inactivo: {
        type: String,
        requiered: true
    },
    usuario: [{
        type: Schema.Types.ObjectId,
        ref: "proyecto"
    }]
})

module.exports = mongoose.model("estadoProyecto", estadoProyectoSchema)
