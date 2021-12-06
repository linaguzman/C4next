const usuarioService = require('./services/usuario')


const usuarioResolvers ={
    Query:{
        getUsuarios: async(parent,args) =>{            
            let usuarios  = await usuarioService.getUsuarios()
            return usuarios
        },
        getUsuarioById: async (parent,args)=>{
            let usuario = await usuarioService.getUsuarioById(args._id)
        }
    },
    Mutation:{
        createUsuario: async (parent, args) => {
            let usuario = await usuarioService.createUsuario(args)
            return usuario
        },
        updateUsuario: async (parent,args) =>{
            let usuario_update = usuarioService.updateUsuario(args._id,args)
            return usuario_update
        }
    }
}

module.exports = {
    usuarioResolvers
}