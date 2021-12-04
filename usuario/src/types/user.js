const { gql } = require("apollo-server-express")

const usuarioType = gql`
    type usuario{
        _id: ID!
        correo: String!
        password: String!
        identificacion: String!
        nombre: String!
        estado_usuario:[estado_usuario]
        rol:[rol]        
        projects:[Project]
        inscription:[inscription]
    }
    type Project{
        _id: ID!
        name: String
        description: String
        topic: String
        owner: ID
    }
    type Query {
        getUsuarios [User]
        getUsuarioById(_id:String): User
    }
    type Mutation {
        createusuario(
            _id: ID!
            correo: String!
            password: String!
            identificacion: String!
            nombre: String!
            estado_usuario:[estado_usuario]
            rol:[rol]        
            projects:[Project]
            inscription:[inscription]
        ): usuario
        updateusuario(
            _id: ID!
            correo: String!
            password: String!
            identificacion: String!
            nombre: String!
           
        ): usuario
    }
`;

module.exports = {usuarioType}