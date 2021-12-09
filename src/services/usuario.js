const usuario = require('../models/usuario')

createUsuario = async (usuario) => {
    let usuarioInstance = new usuario(usuario)
    usuario = await usuarioInstance.save()
    return usuario
}

getusuarios = async () => {
    let usuario = await usuario.find({}).populate("proyectos")
    return usuario
}

getusuarioById = async(usuarioId) =>{
    let usuario = await usuario.findById(usuarioId).populate("proyectos")
    return usuario
}

Updateproyecto = async(usuarioId, proyectoId)=>{
    let usuario = await usuario.findByIdAndUpdate(usuarioId,{
        $push:{
            proyectos:proyectoId
        }
    })
    return usuario
}

updateusuario = async (usuarioId, usuario)=>{
    let new_usuario = usuario.findByIdAndUpdate(usuarioId, usuario,{new:true})
    return new_usuario
}



module.exports = {
    createUsuario,
    getusuarios,
    getusuarioById,
    updateusuario,
    Updateproyecto
}