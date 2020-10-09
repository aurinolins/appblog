const mongoose = require("mongoose")
const DB = mongoose.connect("mongodb://localhost/bancoteste01").then( () => {
    console.log("Conectado ao banco Mongo : ")
}).catch( (error) => {
    console.log("Erro ao conectar com o banco : "+error) 
})   
module.exports = DB;