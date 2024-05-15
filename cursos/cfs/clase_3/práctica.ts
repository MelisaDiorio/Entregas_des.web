import * as readlineSync from 'readline-sync';

/*let usuario : string = readlineSync.question ("Ingrese su nombre de usuario: ");
let clave : string = readlineSync.question ("Ingrese su clave: ");
let usuarioCorrecto : string = "Juan"; 
let claveCorrecta : string = "claveJuan";
    
if ((usuario==usuarioCorrecto)&&(clave==claveCorrecta)) {
    console.log ("Bienvenido");
} else {
    console.log ("Su usuario o contraseña son incorrectos, vuelve a intentar");
}*/

let ancho : number = readlineSync.questionInt ("Ingrese ancho de archivo: ");
let alto : number = readlineSync.questionInt ("Ingrese alto de archivo: ");
let archivo : number = ancho*alto;
let color : string = readlineSync.question ("Ingrese el color: ");
let colorCorrecto = "Azul";

if ((archivo>=60)&&(color==colorCorrecto)) {
    console.log("Supera medida de impresión o el color no es correcto");
} else {
    console.log ("Su archivo mide: " + archivo + ", y el color es correcto. Lo recibirá dentro de las 24hs");
}
