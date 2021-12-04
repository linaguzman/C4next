
const { proyectoType } = require('./proyecto')
const { usuarioType } = require('./usuario')
const {inscriptionType} = require ('./inscription')

const types = [proyectoType, usuarioType]

const types = [proyectoType, usuarioType, inscriptionType]

module.exports = {
    types
}