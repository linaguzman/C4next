const project = require ('../models/rol')
const userservices = require("../../usuario/src/services/user")


createrol =async(rol)=>{
    let rolInstance = new rol(rol)
    createrol =await rolInstance.save()
    await userservices.updaterol(rol['rol'],createrol['_id'])
    return createrol
}

getrols = async() =>{
    let rols = await rol.find({})
    return rols

}

getrolById = async()=>{
    let rol= await rol.findById(rolId).exec()
    return rol
}

updaterol = async(rolId, rol)=>{
    newrol = await rol.findByIdAndUpdate(rolId, rol,{new:true})
    return newrol

}

module.exports = {
    createrol,
    getrols,
    getrolById,
    updaterol
}