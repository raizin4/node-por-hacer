const ops = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion'
    },
}

const opsi = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Descripcion'
    }
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', ops)
    // .command('listar', 'Listar un elemento', ops)
    .command('actualizar', 'Actualizar el estado', opsi)
    .command('borrar', 'Borrar los datos', ops)
    .help()
    .argv;

module.exports = {
    argv
}