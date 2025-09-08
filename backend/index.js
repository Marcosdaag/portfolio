// Fichero principal donde vamos a configurar las partes principales de nuestro proyecto con nodejs, la creacion del servidor y la conexion con la base de datos 
'use strict'

// Creo una variable mongoose que ejecuta la funcion require y llama a la dependencia mongoose que nos permite hacer promesas then-catch a la database
var mongoose = require('mongoose'); 
var port = 3700;
var app = require('./app'); // Importo el archivo app

// Conexion a la database y creacion del servidor en express
mongoose.connect('mongodb://localhost:27017/portfolio')
    .then(()=>{
        console.log("Conexion a la base de datos establecida correctamente...");

        // Creacion del servidor
        app.listen(port, ()=> {
            console.log("Servidor funcionando correctamente en la url localhost:3700");
        });
    })
    .catch(error => console.log(error));