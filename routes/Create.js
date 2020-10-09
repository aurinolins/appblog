const router=require('./main')

router.get('/Incluir', (req, res) => {
       res.redirect('../Controller/Usuario/Create.js')
})

