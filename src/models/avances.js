const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Usuario = require('./usuario')
const Proyecto = require('./proyecto')

const avancesSchema = new Schema ({

    proyecto: [{
        type: Schema.Types.ObjectId,
        ref: "Poyecto"
    }],
    fecha: {
        type: Date
    },
    descripcion: {
        type: String
    },
    observaciones: {
        type: String
    },
    creadoPor: [{
        type: Schema.Types.ObjectId,
        ref: "Usuario"
    }]
})

module.exports = mongoose.model("Avances", avancesSchema)