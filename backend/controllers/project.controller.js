// Clase que va tener una serie de metodos o acciones que va a poder hacer relacionado con la entidad en este caso de proyectos
'use strict'

// Creo una variable controller donde almaceno en formato JSON mis funciones
var controller = {

    home: function(request, response){
        return response.status(200).send({message: "Soy la home"});
    },

    test: function(request, response){
        return response.status(200).send({message: "Soy el test"});
    }
};

module.exports = controller;

