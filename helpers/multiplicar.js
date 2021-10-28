"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearArchivo = void 0;
const fs_1 = __importDefault(require("fs"));
const colors_1 = __importDefault(require("colors"));
const crearArchivo = (base, listado) => __awaiter(void 0, void 0, void 0, function* () {
    let salida = '';
    for (let index = 1; index < 11; index++) {
        salida += `${base} x ${index} = ${base * index}\n`;
    }
    try {
        fs_1.default.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        if (listado) {
            console.log('=================='.green);
            console.log('Tabla del', colors_1.default.blue(base));
            console.log('=================='.green);
            console.log(salida);
        }
        return (`tabla-${base}.txt`);
    }
    catch (error) {
        throw (error);
    }
});
exports.crearArchivo = crearArchivo;
//# sourceMappingURL=multiplicar.js.map