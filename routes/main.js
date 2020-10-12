const app = require('../config/config');

const Create = require('../Controller/Usuario/Create'); 

app.get('/', function (req,res) {
            res.render("../views/homeUser.handlebars")
});


app.get('/User/Add', function (req, res) {
        res.render('../views/formulario')
});

app.post('/User/Add', function(req,res) {
        const funccreate = Create(req.body.nome ,req.body.email, req.body.idade) 
        res.redirect('/')
})

app.listen(8081, function(){
        console.log("Funcionando na porta 8081 !!!")
 })
