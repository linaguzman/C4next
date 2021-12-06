const { proyectoType } = require('./proyecto')
const { usuarioType } = require('./usuario')
const {inscripcionType} = require ('./inscripcion')

const types = [proyectoType, usuarioType, inscripcionType]
module.exports = {
    types
}