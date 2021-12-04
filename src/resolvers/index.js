const {proyectoResolvers} = require('./proyecto')
const {usuarioResolvers} = require('./usuario')


const resolvers = [proyectoResolvers, usuarioResolvers]

module.exports = {resolvers}