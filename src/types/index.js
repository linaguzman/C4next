const { proyectoType } = require('./proyecto')
const { usuarioType } = require('./usuario')
const {inscripcionType} = require ('./inscripcion')
const { avance } = require('./avances')
const { estadoProyecto } = require('./estadoProyecto')
const { estadousuario } = require('./estadousuario')
const { fasesProyecto } = require('./fasesProyecto')
const { rolusuario } = require('./rolusuario')

const types = [proyectoType, usuarioType, inscripcionType, avance, estadoProyecto, estadousuario, fasesProyecto, rolusuario]
module.exports = {
    types
}