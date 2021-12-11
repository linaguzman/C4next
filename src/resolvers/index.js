const {proyectoResolvers} = require('./proyecto')
const {usuarioResolvers} = require('./usuario')
const {inscripcionResolvers} = require ('./inscripcion')
const {avancesResolvers} = require('./avances')


const resolvers = [proyectoResolvers, usuarioResolvers, inscriptionResolvers, avancesResolvers]

module.exports = {resolvers}
