const express = require('express')
const mongoose = require('mongoose')
const {ApolloServer} = require("apollo-server-express")
const {resolvers} = require('./resolvers')
const {types} = require('./types')


const app =express()
const server = new ApolloServer({
    typeDefs: types,
    resolvers: resolvers
})

mongoose.connect("mongodb+srv://C4NEXT:1234@clusterc4next.drerp.mongodb.net/BD-gestion-de-proyectos?retryWrites=true&w=majority", async()=>{
    console.log("conexion exitosa");
    app.listen(4000, async()=>{
        await server.start()
        server.applyMiddleware({app})
        console.log("servidor inicializado en puerto 4000");
    })
})