const express = require('express')
const mongoose = require('mongoose')
const {ApolloServer} = require("apollo-server-express")

const app =express()

mongoose.connect("mongodb+srv://C4NEXT:1234@clusterc4next.drerp.mongodb.net/BD-gestion-de-proyectos?retryWrites=true&w=majority", async()=>{
    console.log("conexion exitosa");
    app.listen(5010, async()=>{
        console.log("servidor inicializado en puerto 5010");
    })
})