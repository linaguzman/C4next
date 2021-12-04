const {proyectoResolvers} = require('./proyecto')
const {usuarioResolvers} = require('./usuario')
const {inscriptionResolvers} = require ('./inscription')


const resolvers = [proyectoResolvers, usuarioResolvers, inscriptionResolvers]


module.exports = {resolvers}