const { gql } = require("apollo-server-express")

const usuarioType = gql`
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
    type Query {
        getusuarios: [usuario]
        getusuarioById(_id:String): usuario
    }
    type Mutation {
        createUsuario(
            name: String
            lastName: String
            phone: String
            email: String!
            password: String!
        ): usuario
        updateusuario(
            _id: ID!
            name: String
            lastName: String
            phone: String
            email: String!
            password: String!
        ): usuario
    }
`;

module.exports = {usuarioType}