
const app = require('../config/config')

app.get('/', function (req,res) {
            res.render("../views/homeUser.handlebars")
});


app.get('/User/Add', function (req, res) {
        res.render('../views/formulario')
        require('../Controller/Usuario/Create.js')
        res.redirect('/')
});


app.listen(8081, function(){
        console.log("Funcionando na porta 8081 !!!")
    })
