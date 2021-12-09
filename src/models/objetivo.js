const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const Project = require ('./proyecto')

const objetivoSchema = new Schema ({
    Descripcion : {
        type : String,
        required : true
    },

    Tipo : {
        type : String, 
        ref : "tipoObjetivo"
    },

    Proyecto: {
        type : String,
        ref : "Proyecto"
    },

    
    Proyectos : [{
        type : Schema.Types.ObjectId,
        ref : "proyecto"
    }],

     TipoObjetivo: [{
        type : Schema.Types.ObjectId,
        ref : "tipoObjetivo"
    }]

})

module.exports = mongoose.model ("objetivo", objetivoSchema)