const Create = function(paramnome , paramemail, paramidade)
{

  console.log("Entrei na funçao Create ......")

  const Usuario = require('../../models/Usuario.js')

  const usuario = new Usuario( {nome : paramnome,
                email : paramemail,
                idade : paramidade})
                
  usuario.save().then(() => {
                  console.log("Usuario Incluido com Sucesso !!!")  
                }).
                catch((ErrorEvent) => {
                    console.log("Erro ao Tentar Incluir um Nove Usuario ")
                });
               

   return
}
module.exports = Create;