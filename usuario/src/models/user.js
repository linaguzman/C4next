const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Project = require('./project')

const usuarioSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    identificacion: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },

    estado_usuario: [{
        type: Schema.Types.ObjectId,
        ref: "estado_usuario"
    }],
    rol: [{
        type: Schema.Types.ObjectId,
        ref: "rol"
    }],
  
    projects:[{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }],
    inscripciones:[{
        type: Schema.Types.ObjectId,
         ref: "inscription"
     }]

})

module.exports = mongoose.model("Usuario",usuarioSchema)