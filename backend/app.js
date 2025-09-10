'use strict'
// Guardamos toda la configuracion de express y las peticiones con bodyparser

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar archivo de rutas
var project_routes = require('./routes/project');

// Middlewares: capa o metodo que se ejecuta antes de ejecutar la accion de un controlador o el resultado de la peticion
app.use(bodyParser.urlencoded({extended: false})); // Configuracion necesaria para body parser
app.use(bodyParser.json()); // Esto hace que todos los datos que me lleguen son pasados a json

// Cors
// Configurar cabeceras y cors

app.use((req, res, next) => {

res.header('Access-Control-Allow-Origin', '*');

res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');

res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

next();

});

// Rutas
/* app.get('/', (request, response) =>{
    response.status(200).send({message: "Pagina de inicio"});
});

app.get('/test', (request, response) =>{
    response.status(200).send({message: "Hola mundo desde mi api de nodejs"});
});

app.post('/test', (request, response) =>{
    console.log(request.body.nombre);
    response.status(200).send({message: "Hola mundo desde mi api de nodejs peticiones post"});
}); */
// Ademas de esta manera, la otra forma de hacerlo es definirlo dentro de la carpeta routes, creamos ahi los metodos y despues lo importamos aca
app.use('/', project_routes);

// Exportar
module.exports =  app;