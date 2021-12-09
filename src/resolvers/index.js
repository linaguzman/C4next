const {proyectoResolvers} = require('./proyecto')
const {usuarioResolvers} = require('./usuario')

const {inscripcionResolvers} = require ('./inscripcion')

const resolvers = [proyectoResolvers, usuarioResolvers, inscripcionResolvers]


module.exports = {resolvers}