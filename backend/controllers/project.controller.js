// Clase que va tener una serie de metodos o acciones que va a poder hacer relacionado con la entidad en este caso de proyectos
'use strict'

// Variables globales
var Project = require('../models/project.model');

// Creo una variable controller donde almaceno en formato JSON mis funciones
var controller = {

    home: function(request, response){
        return response.status(200).send({message: "Soy la home"});
    },

    test: function(request, response){
        return response.status(200).send({message: "Soy el test"});
    },

    saveProject: function(request, response){
        
    },

    // Funcion para guardar, primero creamos una variable project la cuales un elemento nuevo de tipo Project, despues creo una variable params que agarra todos los datos del body y a cada propiedad del proyecto le asigno una propiedad de los parametros. Despues hacemos un project.save y usamos una promesa then que tiene una funcion de callback con un parametro projectStored que en casi de que sea true da status 200 y nos devuelve el mensaje por consola y con el cath nos devuelve si salio mal, en caso de 
    saveProject: function (req, res) {
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save().then((projectStored) => {
            return res.status(200).send({
                message: "proyecto guardado correctamente",
                project: projectStored,
            });
        })

            .catch((error) => {
                if (!projectStored)
                    return res.status(404).send({ message: "no se ha podido guardar el proyecto" });

                if (error)
                    return res.status(500).send({ error: "Error al guardar el proyecto en la base de datos" });
            });
    }
};

module.exports = controller;

