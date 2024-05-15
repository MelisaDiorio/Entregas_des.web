import * as readlineSync from 'readline-sync';

/*Implemente un método llamado calcularResultado que reciba por parámetro los dos números y la opción 
y retorne el resultado de la operación */

let numero1 : number = readlineSync.questionInt ("Ingrese un numero: ");
let numero2 : number = readlineSync.questionInt ("Ingrese un numero: ");
let opcionMenu : number = readlineSync.questionInt ("Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ");
let resultadoFuncion : number = 0;

function calcularResultado (nro1:number, nro2:number, Menu:number):number {
    let resultado : number=0;
    if (opcionMenu ==1) {
        resultado = numero1 + numero2;
    } else if (opcionMenu == 2) {
        resultado = numero1 - numero2;
    }
    return resultado;
}

resultadoFuncion = calcularResultado(numero1, numero2, opcionMenu); /*mismo orden que function (calcularResultado)*/

console.log("El resultado es: " , resultadoFuncion);

