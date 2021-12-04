const Usuario = require('../models/user')

createusuario = async (usuario) => {
    let usuarioInstance = new usuario(usuario)
    usuario = await usuarioInstance.save()
    return usuario
}

getusuarios = async () => {
    let usuario = await Usuario.find({}).populate("projects")
    return usuario
}

getUserById = async(usuarioId) =>{
    let usuario = await Usuario.findById(usuarioId).populate("projects")
    return usuario
}

updateusuario = async (usuarioId, user)=>{
    let new_usuario = Usuario.findByIdAndUpdate(usuarioId, usuario,{new:true})
    return new_usuario
}

UpdateProject = async(usuarioId, projectId)=>{
    let usuario = await User.findByIdAndUpdate(usuarioId,{
        $push:{
            projects:projectId
        }
    })
    return usuario
}

module.exports = {
    createusuario,
    getusuarios,
    getusuarioById,
    updateusuario,
    UpdateProject
}