const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Proyecto = require('./proyecto')

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
        ref: "Rol"
    }],
    estado: [{
        type: Schema.Types.ObjectId,
        ref: "Estado",
        defaul: "Pendiente"        
    }],
    proyecto:[{
        type: Schema.Types.ObjectId,
        ref: "Proyecto"
    }],
    inscripcion: [{
        type: Schema.Types.ObjectId,
        ref: "Inscripcion"
    }]
})

module.exports = mongoose.model("usuario",UsuarioSchema)