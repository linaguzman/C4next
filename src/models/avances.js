const mongoose = require('mongoose')
const Schema = mongoose.Schema
const usuario = require('./usuario')
const proyecto = require('./proyecto')

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
        ref: "usuario"
    }]
})

module.exports = mongoose.model("avances", avancesSchema)