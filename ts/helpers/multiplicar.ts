
import fs from 'fs';
import colors from 'colors';
export const crearArchivo = async(base : number,listado: boolean) =>{
  let salida : string = '';
 
  for (let index = 1; index < 11; index++) {
    salida += `${base} x ${index} = ${base*index}\n`
  }
  
  try {
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    if(listado){
      console.log('=================='.green)
      console.log('Tabla del',colors.blue(<string><unknown>base));
      console.log('=================='.green)
      console.log(salida);
    }
   
    return(`tabla-${base}.txt`);
  } catch (error) {
    throw(error)
  }
}

 





