'use strict'

// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
var Libro = require('../modelos/libro.js');


function listarTodos(req, res) {

    Libro.find({}, (err, libro) => {
        if (err) return res.status(500).send({ message: 'error al realizar la peticion' })
        if (!libro) return res.status(404).send({ message: 'Error el libro no existe' })

        res.status(200).send({ libro })
    })

}

function listarPorID(req, res) {//GET
    let idLibro = req.params.id
    Libro.findById(idLibro, (err, libro) => {
        if (err) return res.status(500).send({ message: 'error al realizar la peticion' })
        if (!libro) return res.status(404).send({ message: 'Error el libro no existe' })

        res.status(200).send({ libro })
    })
}

function buscarlibroAnioIdioma(req, res) {
    let año = req.params.anio
    let idioma = req.params.idioma

    Libro.find({ "anio": año, "idioma": idioma }, (err, libro) => {
        if (!libro) return res.status(404).send({ message: 'Error libro no existe' })

        res.status(200).send({ libro })
    })
}

// Creamos un método en el controlador, en este caso una accion de pruebas
function guardar(req, res) {

    // Devolvemos una respuesta en JSON
    let libro = new Libro()
    libro.nombre = req.body.nombre;
    libro.autor = req.body.autor;
    libro.anio = req.body.anio;
    libro.idioma = req.body.idioma;
    console.log(libro.nombre);

    libro.save((err, libroStore) => {

        if (err) res.status(500).send(`Error base de datos> ${err}`)

        res.status(201).send({ libro: libroStore })
    })
}
function modificar(req, res) {
    console.log('entra')
    //asignamos el id del libro que queremos buscar
    let idlibro = req.params.id
    //creamos el esqueleto del libro a modificar
    let libro = new Libro()
    libro.nombre = req.body.nombre
    libro.autor = req.body.autor
    libro.anio = req.body.anio
    libro.idioma = req.body.idioma
    
    Libro.findByIdAndUpdate(idlibro,libro, (err, libroStore) => {

        if (err) res.status(500).send(`Error base de datos> ${err}`)

        res.status(200).send("Se ha actualizado el libro")

    })
}
function borrar(req, res) {

    // Devolvemos una respuesta en JSON
    let id = req.params.id
    Libro.findByIdAndRemove(id, (err, libroDeleted) => {

        if (err) res.status(500).send(`Error base de datos> ${err}`)

        res.status(200).send("Se ha borrado el libro")

    })
}

module.exports = {
    listarTodos,
    listarPorID,
    buscarlibroAnioIdioma,
    guardar,
    modificar,
    borrar
};