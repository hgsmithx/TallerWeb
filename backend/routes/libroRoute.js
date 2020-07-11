'use strict'
var express = require('express');
var libroController = require ('../controllers/libroController2.js')
var api = express.Router();

api.post('/libro/guardar', libroController.guardar);
// api.get('/libro/buscarid', libroController.buscarPorID);
// api.get('/libro/listar', libroController.listarTodos);
// api.get('/libro/buscar2', libroController.buscarAñoIdioma);
// api.put('/libro/modificar', libroController.modificar);
api.get('/libro/listar',libroController.listarTodos);
api.get('/libro/listarid',libroController.listarPorID);
api.get('/libro/buscar',libroController.buscarlibroAnioIdioma);
api.put('/libro/modificar',libroController.modificar);
api.delete('/libro/borrar/:id',libroController.borrar);

module.exports = api;