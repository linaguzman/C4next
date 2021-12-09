const {proyectoResolvers} = require('./proyecto')
const {usuarioResolvers} = require('./usuario')
<<<<<<< HEAD

const {inscripcionResolvers} = require ('./inscripcion')

const resolvers = [proyectoResolvers, usuarioResolvers, inscripcionResolvers]

=======
const {inscriptionResolvers} = require('./inscripcion')
const {avancesResolvers} = require('./avances')

const resolvers = [proyectoResolvers, usuarioResolvers, inscriptionResolvers, avancesResolvers]
>>>>>>> avances

module.exports = {resolvers}
