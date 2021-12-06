const rolusuarioService = require('./services/rolusuario')


const rolusuarioResolvers ={
    Query:{
        getRolUsuario: async(parent,args) =>{            
            let rolusuario = await rolusuarioService.getRolUsuario()
            return rolusuario
        },
        getRolUsuarioById: async (parent,args)=>{
            let rolusuario = await rolusuarioService.getRolUsuarioById(args._id)
        }
    },
    Mutation:{
        createRolUsuario: async (parent, args) => {
            let rolusuario = await rolusuarioService.createRolUsuario(args)
            return rolusuario
        },
        updateRolUsuario: async (parent,args) =>{
            let rolusuario_update = rolusuarioService.updateRolUsuario(args._id,args)
            return rolusuario_update
        }
    }
}

module.exports = {
    rolusuarioResolvers
}