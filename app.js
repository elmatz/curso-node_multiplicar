const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listar } = require('./multiplicar/multiplicar')

let command = argv._[0];

switch (command) {
    case 'listar':
        listar(argv.base, argv.limite)
            .then(resp => console.log(resp))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('No se encontró el comando');
        break;
}

//console.log(argv.base);