const { proyectoType } = require('./proyecto')
const { usuarioType } = require('./usuario')
const {inscripcionType} = require ('./inscripcion')
const { avanceType } = require('./avances')


const types = [proyectoType, usuarioType, inscripcionType, avanceType]
module.exports = {
    types
}