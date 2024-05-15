"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
/*Implemente un método llamado calcularResultado que reciba por parámetro los dos números y la opción
y retorne el resultado de la operación */
var numero1 = readlineSync.questionInt("Ingrese un numero: ");
var numero2 = readlineSync.questionInt("Ingrese un numero: ");
var opcionMenu = readlineSync.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ");
var resultadoFuncion = 0;
function calcularResultado(nro1, nro2, Menu) {
    var resultado = 0;
    if (opcionMenu == 1) {
        resultado = numero1 + numero2;
    }
    else if (opcionMenu == 2) {
        resultado = numero1 - numero2;
    }
    return resultado;
}
/*resultadoFuncion = calcularResultado(numero1, numero2, opcionMenu); /*mismo orden que function (calcularResultado)*/
/*dibujarGuiones(resultadoFuncion);
console.log("El resultado es: " , resultadoFuncion);

//Orden



/*function dibujarGuiones (NumeroDeGuiones : number) { //funcion
    let i : number; //variable
    let linea : string = "";
    for (i = 0; i <= NumeroDeGuiones; i++)
                linea = linea + "+";
};
    console.log(linea);*/
