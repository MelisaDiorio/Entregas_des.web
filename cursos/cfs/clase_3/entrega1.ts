import * as readlineSync from 'readline-sync';

let numero : number = readlineSync.questionInt ("Ingrese su numero: ");
 
if (numero==0) {
      console.log("Ingreso el numero 0, ingrese nuevamente");
   } else {
      if (numero%2==0) {
    console.log ("Numero par");
 } else {
    console.log ("Numero impar");
}
 }