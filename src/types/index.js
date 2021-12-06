const { proyectoType } = require('./proyecto')
const { usuarioType } = require('./usuario')
const {inscriptionType} = require ('./inscription')

const types = [proyectoType, usuariorType, inscriptionType]
module.exports = {
    types
}