const { gql } = require("apollo-server-express")

const proyectoType = gql`
    scalar Date

    type usuario{
        _id: ID!
        correo: String
        nombre: String
        rol: String
        estado: String!
        password: String!
        proyectos:[proyecto]
        inscripciones: [inscripcion]
        avances: [avance]
    }
    type proyecto{
        _id: ID!
        nombre: String
        objetivo: String
        presupuesto: Float
        fechaInicio: Date
        fechaFin: Date
        lider: ID
        estado: [estado]
        fase: [faseProyecto]
    }
    type Query{
        getproyectos:[proyecto]
        getproyectoById(_id:String):proyecto
    }
    type Mutation{
        createproyecto(
            nombre: String
            description: String
            objetivo: String
            presupuesto: Float
            estado: [estado]
            fase: [faseProyecto]
        ): 
        proyecto
        updateproyecto(
            _id: ID!
            nombre: String
            objetivo: String
            estado: [estado]
            fase: [faseProyecto]
        ):proyecto
    }
`;
module.exports = { proyectoType }