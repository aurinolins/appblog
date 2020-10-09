

const Usuario = require('../../models/Usuario.js')

Usuario.create({nome : "Tania Bezerra Lins",
                           email : "tania@gmail.com", idade : 26}).
                    then(() => {
                  console.log("Usuario Incluido com Sucesso !!!")  
                }).
                catch((ErrorEvent) => {
                    console.log("Erro ao Tentar Incluir um Nove Usuario ")
                });
               

 

