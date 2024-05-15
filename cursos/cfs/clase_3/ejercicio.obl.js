"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero = readlineSync.questionInt("Ingrese su numero");
if (numero % 2 == 0) {
    console.log("Numero par");
}
else {
    console.log("Numero impar");
}
