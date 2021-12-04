const userService = require('../services/user')


const usuarioResolvers ={
    Query:{
        getUsuarios: async(parent,args) =>{
            // lógica del proceso
            let usuarios  = await userService.getusuarios()
            return usuarios
        },
        getusuarioById: async (parent,args)=>{
            let usuario = await userService.getusuarioById(args._id)
        }
    },
    Mutation:{
        createusuario: async (parent, args) => {
            let usuario = await userService.createusuario(args)
            return usuario
        },
        updateusuario: async (parent,args) =>{
            let usuario_update = userService.updateusuario(args._id,args)
            return usuario_update
        }
    }
}

module.exports = {
    usuarioResolvers
}