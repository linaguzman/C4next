const proyecto = require ('../models/estado_usuario')
const usuarioservices = require('../services/user')


create_estado_usuario =async(estado_usuario)=>{
    let estado_usuarioInstance = new estado_usuario(estado_usuario)
    create_estado_usuario =await estado_usuarioInstance.save()
    await userservices.updateproject(project['estado_usuario'],create_estado_usuario['_id'])
    return create_estado_usuario
}

getestado_usuario = async() =>{
    let estado_usuario = await estado_usuario.find({})
    return estado_usuario

}

getestado_usuarioById = async()=>{
    let estado_usuario = await estado_usuario.findById(estado_usuarioId).exec()
    return estado_usuario
}

updateProject = async(estado_usuarioId, estado_usuario)=>{
    newestado_usuario = await estado_usuario.findByIdAndUpdate(estado_usuarioId, estado_usuario,{new:true})
    return estado_usuario

}

module.exports = {
    createestado_usuario,
    getestado_usuario,
    getestado_usuario,
    updateestado_usuario
}