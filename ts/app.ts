
import{argv} from './config/yargs';
import { crearArchivo } from './helpers/multiplicar';
import 'colors';

console.clear();


const base: number = argv.b;
const listado: boolean = argv.l;
const limite: number = argv.h;

if (limite === 0){
    crearArchivo(base, listado)
        .then(nombreArchivo=> console.log(nombreArchivo.rainbow,'creado...'.bgBlue))   
        .catch(err => console.log(err)) 
    ;
}else{
    for (let i = base; i <= limite; i++){
        crearArchivo(i,listado)
        .then(nombreArchivo=> console.log(nombreArchivo.rainbow,'creado...'.bgBlue))   
        .catch(err => console.log(err)) 
    ;
    }
}

