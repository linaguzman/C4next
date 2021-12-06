const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const proyecto = require ('./proyecto')

const inscripcionSchema = new Schema ({
    Proyecto : {
        type : String,
        required : true
    },

    Estudiante : {
        type : String
    },

    Estado : {
        type : String
    },

    FechaDeIngreso : {
        type : Date
    },

    FechaDeEgreso : {
        type : Date
    },

    Proyectos : [{
        type : Schema.Types.ObjectId,
        ref : "proyecto"
    }],

    Usuarios : [{
        type : Schema.Types.ObjectId,
        ref : "usuario"
    }]

})

module.exports = mongoose.model ("inscripcion", inscripcionSchema)