const {gql} = require("apollo-server-express")

const proyectoType = gql`
type Usuario{
    _id: ID!
    nombre: String
    phone: String
    email: String!
    password: String!
    projects:[Project]
}
    type proyecto{
        _id: ID!
        nombreProyecto: String!
        objetivos: String!
        presupuesto: float
        fechaInicio: date
        fechaFin: date
        nombreLider: String!
        estado: enum
        fase: enum
    }
    type Query{
        getProyectos:[Proyecto]
        getProyectoById(_id:String):Proyecto
    }
    type Mutation{
        createProyecto(
            nombreProyecto: String!
            objetivos: String!
            nombreLider: [usuario]
            owner: ID
        ): Project
        updateProyecto(
            _id: ID!
            name: String
            description: String
            topic: String
        ):Proyecto
    }
`;
module.exports = { proyectoType }