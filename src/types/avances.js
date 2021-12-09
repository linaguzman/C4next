const {gql} = require ("apollo-server-express");

const avanceType = gql`
    type Avance {
    _id: ID!
    fecha: Date!
    descripcion: String!
    observaciones: [String]
    proyecto: Proyecto!
    creadoPor: Usuario!
    }
    type Query {
    Avances: [Avance]
    filtrarAvance(_id: String!): [Avance]
    }
    type Mutation {
    crearAvance(fecha: Date!, descripcion: String!, proyecto: String!, creadoPor: String!): Avance
    }
`;

module.exports = {avanceType}

