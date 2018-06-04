// requireds
const fs = require('fs');
const colors = require('colors');

let listar = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${ base } no es un número.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El limite ${ base } no es un número.`);
            return;
        }

        console.log('::::::::::::::::::::::::::::::::::::::::::::::'.green);
        console.log(`Tabla de ${ base }`.green);
        console.log('::::::::::::::::::::::::::::::::::::::::::::::'.green);

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${base*i}\n`;
        }

        resolve(data);

    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${ base } no es un número.`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-con_limite-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(colors.green(`tabla-${base}-con_limite-${limite}.txt`));
        });
    })
}

module.exports = {
    crearArchivo,
    listar
}