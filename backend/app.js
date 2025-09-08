// Configuracion de express y peticiones con body-parser
'use strict'

// Cuando uso require, se busca en la carpeta node_modules el modulo a importar para tener su funcionalidad
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Archivo de rutas

//Middlewares (son funciones que se ejecutan antes ejecutar el resultado de la peticion: por ejemplo antes de enviar mi informacion, la pasa a formato JSON para que la database pueda interpretarla y usarla)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); // Todo los datos que lleguen por el body de una peticion los convierte en JSON

// Cors

// Rutas
app.get('/test', (request, response) =>{
    response.status(200).send({
        message: "Hola desde mi api"
    });
});

// Exportacion del modulo, archivo o fichero actual
module.exports = app;