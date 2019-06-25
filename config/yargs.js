const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea a realizar'
};

const completado = {
    alias: 'c',
    default: true
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea a realizar', {
        descripcion
    })
    .command('actualizar', 'Marca una tarea como realizada', {
        descripcion,
        completado
    })
    .command('listar', 'Listar todas las tareas por hacer')
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv: argv
}