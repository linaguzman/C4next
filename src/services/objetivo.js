const objetivo = require("../models/objetivo")
const inscripcion = require ("../models/objetivo")



createObjetivo = async (objetivo) => {
    let objetivoInstance = new objetivo ("objetivo")
    objetivo = await objetivoInstance.save ()
    return objetivo
}
getObjetivo = async () => {
    objetivo = await objetivo.find ({})
}

getObjetivoById = async (objetivoId) => {
   let objetivo = await objetivo.findById (objetivoId)
   .populate("Proyectos")
   .populate('tipoObjetivo')
   return objetivo
}

updateObjetivo = async (objetivoId, objetivo) => {
    let new_objetivo = objetivo.findByIdAndUpdate(objetivoId, objetivo, {new:true})
    return new_objetivo
}

UpdateProject = async (inscripcionId, projectId) => {
    let inscripcion = await inscripcion.findByIdAndUpdate(inscripcionId, {
        $push: {
            projects: projectId
        }
    })
    return inscripcion
}

module.exports = {
    createObjetivo,
    getObjetivo,
    getObjetivoById,
    updateObjetivo,
    UpdateProject
}