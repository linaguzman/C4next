const inscripcion = require ("../models/inscription")



createInscripcion = async (inscripcion) => {
    let inscripcionInstance = new inscripcion ("inscripcion")
    inscripcion = await inscripcionInstance.save ()
    return inscripcion
}
getInscripcion = async () => {
    inscripcion = await inscripcion.find ({})
}

getInscripcionById = async (inscripcionId) => {
   let inscripcion = await inscripcion.findById (inscripcionId)
   .populate("usuarios")
   .populate("proyectos")
   return inscripcion
}

updateInscripcion = async (inscripcionId, inscripcion) => {
    let new_inscripcion = inscripcion.findByIdAndUpdate(inscripcionId, inscripcion, {new:true})
    return new_inscripcion
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
    createInscripcion,
    getInscripcion,
    getInscripcionById,
    updateInscripcion,
    UpdateProject
}