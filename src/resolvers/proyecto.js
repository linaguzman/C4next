const proyectoService = require("../services/proyecto")

const proyectoResolvers = {
    Query: {
        getProyectos: async (parent, args) => {
            let proyecto = proyectoService.getProyectos()
            return proyecto
        },
        getProyectoById: async (parent, args) => {
            let proyecto = proyectoService.getProyectoById(args._id)
            return proyecto
        }
    },
    Mutation: {
        createProyecto: async (parent, args) => {
            let proyecto = proyectoService.createProyecto(args)
            return proyecto
        },
        updateProyecto: async (parent, args) => {
            let proyecto = proyectoService.updateProyecto(args._id, args)
            return proyecto
        }
    }
}

module.exports = { proyectoResolvers }