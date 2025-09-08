// Definicion y creacion del modelo de proyecto
'use strict'

// Es necesario importar mongoose porque es el modulo que se encarga de trabajar con los modelos
var mongoose = require('mongoose');
var Schema = mongoose.Schema; // Llamo al objeto schema de mongoose

// Creamos un "MOLDE" ProjectSchema que es de tipo Schema y dentro asignamos en formato JSON sus propiedades
var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: [String]
});

// Exportamos el modelo, como primer parametro seleccionamos en que coleccion de datos se va a guardar pero mongoose lo pasa a minusculas y lo pluraliza, por lo tanto quedaria "projects" que es una coleccion ya creada en mongoDB y por otro lado como segundo parametro pasamos el MODELO-SCHEMA que creamos
module.exports = mongoose.model('Project', ProjectSchema);