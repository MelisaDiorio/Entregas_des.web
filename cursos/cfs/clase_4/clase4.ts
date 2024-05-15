//let cantHolas : number = 1;

//while(cantHolas <= 5) {
//    console.log("Hola");
//    cantHolas = cantHolas + 1;
//}

//console.log(cantHolas);

//ejercicio notas con for 
import * as readlineSync from 'readline-sync';

let suma: number, nota: number, promedio: number, contador: number;
nota = readlineSync.questionFloat();
contador=1
suma = 0;

for (contador = 1; contador < 11; contador++) {
    nota = readlineSync.questionFloat("ingrese su nota");
    suma+=nota;
}

promedio=suma/10

console.log("El promedio del alumno es: " + promedio)