// Fichero principal donde vamos a configurar las partes principales de nuestro proyecto con nodejs, la creacion del servidor y la conexion con la base de datos 
'use strict'

// Creo una variable mongoose que ejecuta la funcion require y llama a la dependencia mongoose que nos permite hacer promesas then-catch a la database

var mongoose = require('mongoose'); 
var app = require('./app');
var port = 3700;


// Conexion a la database y creacion del servidor en express

mongoose.connect('mongodb://localhost:27017/portfolio')
    .then(()=>{
        console.log("conexion a la base de datos establecida correctamente");

        // Creacion del servidor en express
        app.listen(port, ()=> {
            console.log("Servidor funcionando correctamente");
        });
    })
    .catch(error => console.log(error));