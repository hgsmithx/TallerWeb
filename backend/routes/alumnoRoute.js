'use strict'

var express = require('express');
var alumnoController = require('../controllers/alumnoController');
var api = express.Router(); // es el escuchador de rutas

api.post('/alumnos/guardar', alumnoController.guardar);
api.get('/alumnos/listar', alumnoController.listar);

module.exports = api;