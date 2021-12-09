const {gql} = require ("apollo-server-express");


const inscripcionType = gql`
type inscripcion{
    _id: ID!
    proyecto: String!
    estudiante: String!
    estado: String!
    fechaDeIngreso: Date
    fechaDeegreso: Date
}
type proyecto{
    _id: ID!
    nombre: String
    description: String
    topic: String        
    lider: ID
    
}

type Query {
    getInscripcion : [inscripcion]
    getInscripcionById (_id : String): inscripcion
}
type Mutation {
    createInscripcion(
        proyecto: String!
        estudiante: String!
        estado: String!
        fechaDeIngreso: Date
        fechaDeegreso: Date
    ) : inscripcion
    updateInscripcion(
        _id: ID!
        proyecto: String!
        estudiante: String!
        estado: String!
        fechaDeIngreso: Date
        fechaDeegreso: Date
    ) : inscripcion
}
`;

module.exports = {inscripcionType}