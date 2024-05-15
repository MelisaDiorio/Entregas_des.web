import * as readlineSync from 'readline-sync'; 

/*let ancho : number = readlineSync.questionInt ("Ingrese ancho de archivo: ");
let alto : number = readlineSync.questionInt ("Ingrese alto de archivo: ");
let archivo : number = ancho*alto;
let color : string = readlineSync.question ("Ingrese el color: ");
let colorCorrecto = "Azul";

if ((archivo<60)&&(color==colorCorrecto)) {
    console.log("Su archivo mide: " + archivo + ", y el color es correcto. Lo recibirá dentro de las 24hs");
} else {
    console.log ("Supera medida de impresión o el color no es correcto");
}*/

let ancho : number = readlineSync.questionInt ("Ingrese ancho de archivo: ");
let alto : number = readlineSync.questionInt ("Ingrese alto de archivo: ");
let archivo : number = ancho*alto;
let color : string = readlineSync.question ("Ingrese el color: ");
let colorCorrecto = "Azul";

if ((archivo>60)&&(color!=colorCorrecto)) {
    console.log ("Supera medida de impresión o el color no es correcto");
} else {
    console.log("Su archivo mide: " + archivo + ", y el color es correcto. Lo recibirá dentro de las 24hs");
}
