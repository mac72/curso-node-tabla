"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.argv = void 0;
const yargs_1 = __importDefault(require("yargs"));
exports.argv = (0, yargs_1.default)(process.argv.slice(2)).options({
    b: {
        type: 'number',
        alias: 'base',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    },
    l: {
        type: 'boolean',
        alias: 'listar',
        default: false,
        describe: 'Muestra la  tabla de multiplicar en consola'
    },
    h: {
        type: 'number',
        alias: 'hasta',
        default: 0,
        describe: 'Limite de cuantas tablas empezando de la base'
    }
})
    .check((argv, options) => {
    if (isNaN(argv.b)) {
        throw 'La base tuene que ser un número';
    }
    return true;
})
    .parseSync();
//# sourceMappingURL=yargs.js.map