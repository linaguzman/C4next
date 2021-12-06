const { gql } = require("apollo-server-express")

const usuarioType = gql`
    scalar Date

    type usuario{
        _id: ID!
        correo: String!
        identificacion: String!
        nombre: String!
        password: String!
        rol: String
        estado: String!
        proyectos:[proyecto]
        inscripciones: [inscripcion]
        avances: [avances]
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
            _id: ID!
            correo: String!
            identificacion: String!
            nombre: String!
            password: String!
            rol: String
            estado: String!           
            proyectos:[proyecto]
            inscripciones: [inscripcion]
            avances: [avances]
        ): usuario
        updateusuario(
            _id: ID!
            correo: String!
            identificacion: String!
            nombre: String!
            password: String!
            rol: String
            estado: String!           
            proyectos:[proyecto]
            inscripciones: [inscripcion]
            avances: [avances]
        ): usuario
    }
`;

module.exports = {usuarioType}