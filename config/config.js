const express = require('express')
const app = express()

const handlebars = require('express-handlebars')
 const bodyParser = require(`body-Parser`)
 
 app.engine('handlebars', handlebars({defaultLayout : 'main'}))
 app.set('view engine', 'handlebars')
 
 app.use(bodyParser.urlencoded({extended:false}))
 app.use(bodyParser.json())

module.exports = app ;

 
 