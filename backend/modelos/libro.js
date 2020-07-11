'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LibroSchema = Schema(
    {
        nombre: String,
        autor: String,
        anio: String,//db.coleccion.insert({fecha: new Date("2014, 10, 21")})
        idioma: {
            type: String,
            enum: ['ingles', 'español']
        }// enum es un validador 
    })

module.exports = mongoose.model('libro', LibroSchema)