const project = require ('../models/rolusuario')
const usuarioService = require("./usuario")


createRol =async(rol)=>{
    let rolInstance = new rol(rol)
    createrol =await rolInstance.save()
    await userservices.updaterol(rol['rol'],createrol['_id'])
    return createrol
}

getRols = async() =>{
    let rols = await rol.find({})
    return rols

}

getRolById = async()=>{
    let rol= await rol.findById(rolId).exec()
    return rol
}

updateRol = async(rolId, rol)=>{
    newrol = await rol.findByIdAndUpdate(rolId, rol,{new:true})
    return newrol

}

module.exports = {
    createRol,
    getRols,
    getRolById,
    updateRol
}