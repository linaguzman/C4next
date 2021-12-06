const estadousuarioService = require('./services/estadousuario')


const estadousuarioResolvers ={
    Query:{
        getEstado_Usuario: async(parent,args) =>{            
            let estadousuario = await estadousuarioService.getEstado_Usuario()
            return estadousuario
        },
        getEstadoUsuarioById: async (parent,args)=>{
            let estadousuario = await estadousuarioService.getEstadoUsuarioById(args._id)
        }
    },
    Mutation:{
        createEstadoUsuario: async (parent, args) => {
            let estadousuario = await estadousuarioService.createEstadoUsuario(args)
            return estadousuario
        },
        updateEstadoUsuario: async (parent,args) =>{
            let estadousuario_update = estadousuarioService.updateEstadoUsuario(args._id,args)
            return estadousuario_update
        }
    }
}

module.exports = {
    estadousuarioResolvers
}