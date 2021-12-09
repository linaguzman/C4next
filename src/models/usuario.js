const mongoose = require('mongoose')
const Schema = mongoose.Schema
const proyecto = require('./proyecto')

const UsuarioSchema = new Schema({
    email:{
        type: String,
        required: true
    },    
    identificacion: {
        type: String
    },
    nombre: {
        type: String,
        required: false
    },    
    password: {
        type: String,
        required: true
    },
    rol: [{
        type: Schema.Types.ObjectId,
        ref: "rol"
    }],
    estado: [{
        type: Schema.Types.ObjectId,
        ref: "estado",
        defaul: "Pendiente"        
    }],
    proyecto:[{
        type: Schema.Types.ObjectId,
        ref: "proyecto"
    }],
    inscripcion: [{
        type: Schema.Types.ObjectId,
        ref: "inscripcion"
    }]
})

module.exports = mongoose.model("usuario",UsuarioSchema)