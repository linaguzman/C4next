const { gql } = require("apollo-server-express")

const estadousuarioType = gql`

type estadousuario {
    pendiente!
    Autorizado!
    NoAutorizado!

}
type Query {
    getEstadoUsuarios: [estadousuario]
    getEstadoUsuarioById(_id:String): estadousuario
}
type Mutation {
    createEstadoUsuario(
        pendiente: String
        Autorizado: String
        NoAutorizado: String
    ):EstadoUsuario
    updateEstadoUsuario(
        pendiente: String
        Autorizado: String
        NoAutorizado: String
    ):EstadoUsuario
}
`;

module.exports = {estadousuarioType}