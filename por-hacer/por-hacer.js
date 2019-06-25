const fs = require('fs');

let ListadoPorHacer = [];


const guardarDB = () => {
    let data = JSON.stringify(ListadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {

    try {
        ListadoPorHacer = require('../db/data.json');
    } catch (error) {
        ListadoPorHacer = [];
    }



}

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion: descripcion,
        completado: false
    };

    ListadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
};

const getListado = () => {
    cargarDB();

    return ListadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = ListadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        ListadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = ListadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        ListadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }

}

module.exports = {
    crear: crear,
    getListado: getListado,
    actualizar: actualizar,
    borrar: borrar
};