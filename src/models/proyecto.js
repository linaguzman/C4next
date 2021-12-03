const { SchemaTypes } = require("mongoose")
const Usuario = required('../models/Usuario')

const mongoose = required(mongoose)
const Schema = mongoose.Schema

const proyectoSchema = new Schema ({
    NombreProyecto: {
        type: String
    },
    Objetivos: {
        type:String 
    },
    Presupuesto: {
        type: Float 
    },
    FechaInicio: {
        type: Date
    },
    FechaFin: {
        type: Date
    },
    NombreLider: [{
        type: SchemaTypes.ObjectId,
        ref: "Usuario"
    }],
    Estado: {
        type: String,
        enum_EstadoProyecto: ['Activo','Inactivo'],
        default: Inactivo 
    },
    FasesProyecto: {
        type: String,
        enum: ['Iniciado','Desarrollo','Terminado'],
        default: nula 
    },
})
module.export = mongoose.model("proyecto", proyectoSchema)