const project = require ('../models/estado_usuario')
const usuarioService = require("../usuario")


createestadousuario =async(estado_usuario)=>{
    let estadousuarioInstance = new estadousuario(estado_usuario)
    createestadousuario =await estadousuarioInstance.save()
    await userservices.updateproject(project['estado_usuario'],createestadousuario['_id'])
    return createestadousuario
}

getestadousuario = async() =>{
    let estadousuario = await estadosuario.find({})
    return estadousuario

}

getestadousuarioById = async()=>{
    let estadousuario = await estado_usuario.findById(estadousuarioId).exec()
    return estadousuario
}

updateProject = async(estado_usuarioId, estado_usuario)=>{
    newestadousuario = await estadousuario.findByIdAndUpdate(estadousuarioId, estadousuario,{new:true})
    return estadousuario

}

module.exports = {
    createestadousuario,
    getestadousuario,
    getestadousuario,
    updateestadousuario
}