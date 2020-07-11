'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlumnoSchema = Schema(
    {
        nombre: String,
        apellido: String,
        edad: Number,
        carrera: {
            type:String,
            required:true
        }
    }
)

module.exports = mongoose.model('alumnos', AlumnoSchema)