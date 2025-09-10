'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');
const { model } = require('mongoose');

var router = express.Router();

//Middleware es algo que se ejecuta antes que el metodo del controlador
const multer = require('multer');
const path = require('path');

// Configuración del almacenamiento
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/'); // Carpeta donde se guardan los archivos
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname); // ej: 162343.png
    cb(null, uniqueName);
  }
});

const upload = multer({ storage: storage});
module.exports = upload;

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project', ProjectController.getProject);
router.get('/project/:id', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/projects/:id', ProjectController.updateProject);
router.delete('/projects/:id', ProjectController.deleteProject);
router.post('/upload-image/:id', upload.single('image'), ProjectController.uploadImage);
router.get('/get-image/:image', ProjectController.getImageFile);

module.exports = router;