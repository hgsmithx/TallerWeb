'use strict'
//aqui se usa un ODM, el cual convierte una colleccion en un objeto
// en el caso de bass de datos relacionales se utiliza un ORM
var Alumno = require('../modelos/alumno');

function guardar(req, res) {
    console.log('entra');
    let alumno = new Alumno();
    alumno.nombre = req.body.nombre
    alumno.apellido = req.body.apellido;
    alumno.edad = req.body.edad;
    alumno.carrera = req.body.carrera;

    alumno.save((err, alumno) => {
        if (err) {
            res.status(500).send(`Oucrrio un error al guardar alumno : ${err}`);
            console.log(err);
        }
        res.status(200).send(alumno);
    })
}

function listar(req,res){
    Alumno.find({},(err,alumno)=>{
        if(err) return res.status(500).sed({mensaje: 'error al listar los alumnos'});
        if(!alumno) return res.status(404).send({ message: 'No existen alumnos' })
        res.status(200).send({ alumno })
    })
}

module.exports = {
    guardar,
    listar
};