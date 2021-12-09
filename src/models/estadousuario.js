const mongoose =require('mongoose')
const Schema = mongoose.Schema
const usuario = require('./usuario')

const estado_usuarioSchema = new Schema({
    pendiente: {
        type: String,
        requiered: true
    },
    Autorizado: {
        type: String,
        requiered: true
    },
    NoAutorizado: {
        type: String,
        requiered: true
    },
    usuario: [{
        type: Schema.Types.ObjectId,
        ref: "usuario"
    }]

})

module.exports = mongoose.model("estado_usuario", estado_usuarioSchema)