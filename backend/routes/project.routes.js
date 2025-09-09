// Configuracion de las distintas rutas
'use strict'

var express = require('express');
var ProjectController = require('../controllers/project.controller'); // Funciones asociadas al modelo de project.model (objeto o MOLDE)

var router = express.Router(); // Servicio para acceder a rutas de el modulo express

// Rutas
router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);

module.exports = router;