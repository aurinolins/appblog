const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
       nome  : {type : String, require : true} ,
       email : {type : String, require : true} ,
       idade : {type : Number, require : true}
    })

const Usuario = mongoose.model('pessoas',usuarioSchema)

module.exports = Usuario;