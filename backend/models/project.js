'use strict'

// Traigo el paquete de mongoose y sus esquemas para poder crear objetos dentro de la db
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Creamos una variable ProjectSchema y es una plantilla de objeto de lo que vamos a guardar dentro de la db
var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    langs: String,
    year: Number,
    image: String
});

module.exports = mongoose.model('Project', ProjectSchema);
// En este caso le asignamos un nombre a modelo y el tipo de esquema que va a tener, en este caso projectshema, y ademas de esto tenemos que tener en cuenta que mongoose nos guarda los elementos que queramos con el nombre en minuscula y en plural, entonces quedaria asi 'Project'=> proyects
// Como ya tenemos una coleccion de projects dentro de nuestra base de datos se guardan ahi