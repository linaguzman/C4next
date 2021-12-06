const mongoose = require('mongoose')
const schema = mongoose.Schema

const FasesProyectoSchema = new Schema ({
    Iniciado: {
        type: String
    },
    Desarrollo: {
        type: String
    },
    Terminado: {
        type: String
    }
})

module.exports = mongoose.model ("FasesProyecto", FasesProyectoSchema)
