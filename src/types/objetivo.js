const {gql} = require ("apollo-server-express");


const objetivoType = gql`
type objetivo{
    _id: ID!
    descripcion: String!
    tipo: [tipoObjetivo]
    proyecto: String!
}
type proyecto{
    _id: ID!
    name: String
    description: String
    topic: String        
    owner: ID
    
}

type Query {
    getObjetivo : [objetivo]
    getObjetivoById (_id : String): objetivo
}
type Mutation {
    createObjetivo(
        descripcion: String!
        tipo: [tipoObjetivo]
        proyecto: String!
    ) : objetivo
    updateObjetivo(
        _id: ID!
        descripcion: String!
        tipo: [tipoObjetivo]
        proyecto: String!
    ) : objetivo
}
`;

module.exports = {objetivoType}