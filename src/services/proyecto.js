const proyecto = required('../models/proyecto')
const usuarioService = require("./usuario"
)
createProyecto = async (proyecto) => {
    let proyectoInstance = new proyecto(proyecto)
    create_proyecto = await proyectoInstance.save()
    await usuarioService.updateProyect(proyecto['lider'], created_proyecto['_id'])
    return created_proyecto    
}

getProyectos = async () => {
    let proyecto = await proyecto.find({})
    return proyectos
}

getProyectoById = async(proyectoId) => {
    let proyecto = await proyecto.findById(proyectoId)
    return proyecto
}

updateProyecto = async (proyectoId, Proyecto) => {
    let new_proyecto = proyecto.findByIdAndUpdate(proyectoId, proyecto, {new:true})
    return new_proyecto
}

module.exports = {
    createProyecto,
    getProyectos,
    getProyectoById,
    updateProyecto,
}