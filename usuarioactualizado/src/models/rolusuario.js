const mongoose =require('mongoose')
const Schema = mongoose.Schema
const Usuario = require('./usuario')

const rolSchema = new Schema({
    Estudiante: {
        type: String,
        requiered: true
    },
    Lider: {
        type: String,
        requiered: true
    },
    Administrador: {
        type: String,
        requiered: true
    },
    usuario: [{
        type: Schema.Types.ObjectId,
        ref: "usuario"
    }]

})

module.exports = mongoose.model("rol", rolSchema)