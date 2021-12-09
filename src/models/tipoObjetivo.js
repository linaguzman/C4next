const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const TipoObjetivoSchema = new Schema ({
    General: {
        type: String
    },
    Especifico: {
        type: String
    }
})

module.exports = mongoose.model("TipoObjetivo", TipoObjetivoSchema)