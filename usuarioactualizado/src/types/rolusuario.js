const { gql } = require("apollo-server-express")

const rolusuarioType = gql`

type rolusuario {
    Estudiante: String!
    Lider: String!
    Administrador: String!

}
type Query {
    getRolUsuarios: [rolusuario]
    getRolUsuarioById(_id:String): rolusuario
}
type Mutation {
    createRolUsuario(
        Estudiante: String
        Lider: String
        Administrador: String
    ):EstadoUsuario
    updateRolUsuario(
        Estudiante: String
        Lider: String
        Administrador: String
       
    ): RolUsuario
}
`;

module.exports = {rolusuarioType}