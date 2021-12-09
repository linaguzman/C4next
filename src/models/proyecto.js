const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Usuario = require('./usuario')
const fasesProyecto = require('./fasesProyecto')
const estadoProyecto = require('./estadoProyecto')

const proyectoSchema = new  Schema({
    
    nombre:{
        type: String
    },
    objetivos:{
        type: String
    },
    presupuesto: {
        type: Number
    },
    fechaInicio: {
        type: Date        
    },
    Lider: [{
        type: Schema.Types.ObjectId,
        ref: "usuario"
    }],
    identificacion: [{
        type: Schema.Types.ObjectId,
        ref: "usuario"
    }],
    estado: {
        type: String,
        ref: "estadoProyecto"
    },
    fase: [{
        type: Schema.Types.ObjectId,
        ref: "fasesProyecto"
    }]

})

module.exports = mongoose.model("proyecto", proyectoSchema)