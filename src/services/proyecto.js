const Proyecto = require('../models/proyecto')
const usuarioService = require("./usuario")

const createProyecto = async (proyecto) => {
    let proyectoInstance = new Proyecto(proyecto)
    created_proyecto = await proyectoInstance.save()
    await usuarioService.UpdateProyecto(proyecto['lider'], created_proyecto['_id'])
    return created_proyecto
}

const getProyectos = async () => {
    let proyectos = await Proyecto.find({})
    return proyectos
}

const getProyectoById = async (proyectoId) => {
    let proyecto = await Proyecto.findById(proyectoId).exec()
    return proyecto
}

const updateProyecto = async (proyectoId, proyecto) => {
    newProyecto = await Proyecto.findByIdAndUpdate(proyectoId, proyecto, { new: true })
    return newProyecto
}

module.exports = {
    createProyecto,
    getProyectos,
    getProyectoById,
    updateProyecto
}