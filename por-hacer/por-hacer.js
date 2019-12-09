// guardar en un archivo lo que ejecutemos con comando y asi sea persistente
// a pesar de ejecutar el comando varias veces

//usando require file system
const fs = require('fs');

//almacenaremos en un arreglo todas las notas 
let listadoPorHacer = [];


const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('no se pudo grabar', err);
    })
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();

    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;

    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();

    let listadonuevo = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)
    if (listadoPorHacer.length === listadonuevo.length) return false

    else {
        listadoPorHacer = listadonuevo;
        guardarDB();
        return true
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}