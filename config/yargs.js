const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multipicar', options)
    .command('crear', 'Crea la tabla de multiplicar y la guarda en un archivo txt', options)
    .help()
    .argv;

module.exports = {
    argv
}