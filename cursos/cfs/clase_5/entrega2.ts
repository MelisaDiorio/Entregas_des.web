//Ejercicio: Potencias
//• Realice un programa que devuelva la potencia de un número.
//• La base y el exponente deben ser ingresados por teclado.
//• Sólo deben admitirse exponentes mayores o iguales a cero.
//• Recuerde que el resultado de un numero elevado a 0 es 1.
//• Separe la lógica de calcular la potencia utilizando métodos.

import * as readlineSync from "readline-sync";

let base: number = readlineSync.questionInt("Ingrese la base: ");
let exponente: number = readlineSync.questionInt("Ingrese el exponente: ");


function calcular (base: number, exponente: number) {
    if (exponente >=0) {

        if (exponente === 0) {
            return 1;
        } else {
            return calcucarPotencia(base,exponente);
        }
    }
}

function calcucarPotencia(base: number, exponente:number): number {
    let resultado: number = 1;
    for (let i: number = 0; i <exponente; i++) {
        resultado *= base;
    }
    return resultado;
}


