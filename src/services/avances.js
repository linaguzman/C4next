const avances = require('../models/avances')
const usuarioService = require("./usuario")


const createAvance = async (avance) => {
    let avanceInstance = new avance(avance)
    created_avance = await avanceInstance.save()
    await usuarioService.updateAvance(avances[' estudiante'], created_avance['_id'])
    return created_avance
}

const getAvance = async () => {
    let avances = await avance.find({})
    return avances
}

const getAvanceById = async (avanceId) => {
    let avance = await avance.findById(avanceId).exec()
    return avance
}

const updateAvance = async (avanceId, avance) => {
    newAvance = await avance.findByIdAndUpdate(avanceId, avance, { new: true })
    return newAvance
}

module.exports = {
    createAvance,
    getAvance,
    getAvanceById,
    updateAvance
}
