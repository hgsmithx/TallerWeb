// instalar express => npm i express --save
//npm install -g nodemon -> para correr nodemon app.js
//npm install cors
'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

var cors = require('cors')// para seguridad
app.use(cors())

var libroRoute = require('./routes/libroRoute')
var alumnoRoute = require('./routes/alumnoRoute')

const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', libroRoute);
app.use('/api', alumnoRoute);

mongoose.connect('mongodb+srv://admin:admin@cluster0-ornze.mongodb.net/Universidad?retryWrites=true&w=majority', (err, res) => {

    if (err) {
        console.log("No ha sido posible conectarse a la base de datos de MongoDb")
    }
    app.listen(5000, () => {

        console.log("CONECTADO, Esta corriendo en el puerto 5000")
    })

})