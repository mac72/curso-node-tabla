"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = require("./config/yargs");
const multiplicar_1 = require("./helpers/multiplicar");
require("colors");
console.clear();
const base = yargs_1.argv.b;
const listado = yargs_1.argv.l;
const limite = yargs_1.argv.h;
if (limite === 0) {
    (0, multiplicar_1.crearArchivo)(base, listado)
        .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado...'.bgBlue))
        .catch(err => console.log(err));
}
else {
    for (let i = base; i <= limite; i++) {
        (0, multiplicar_1.crearArchivo)(i, listado)
            .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado...'.bgBlue))
            .catch(err => console.log(err));
    }
}
//# sourceMappingURL=app.js.map