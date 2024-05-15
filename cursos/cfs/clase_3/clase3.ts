
/* let texto1 = 'Una frase con \'comillas simples\' dentro';
let texto2 = "Una frase con \"comillas dobles\" dentro";
let texto3 = "Una frase con \n Una nueva línea dentro";
let texto4 = "Una frase con \t Un tabulador dentro";
let texto5 = "Una frase con \\ Una barra inclinada dentro";

console.log(texto3 + "aca empieza el texto 4:" + texto4 + texto5);

 Pseudocodigo = planteo o pensamiento logico.
Codigo = algoritmo con codigos en un idioma de programacion.
Prueba de escritorio = verificacion del codigo al ejecutarlo.*/
import * as readlineSync from 'readline-sync';

/*let base : number = readlineSync.questionInt("Ingrese medida base: ");
let altura : number = readlineSync.questionInt("Ingrese medida altura: ");
let pared : number = base * altura;

/*let base,altura,pared : number;
altura= readlineSync...bla bla bla
base= readlineSync ... bla bla bla
pared = base + altura*/

/*if (pared<=20) {
    console.log("La pared es chica,no sirve.Mide" + pared);
}  else {
    console.log("La pared esta perfecta, mide "+ pared);
} */

// ejercicio mayor a 20

/*let ancho : number = readlineSync.questionInt ("Ingrese ancho de archivo: ");
let alto : number = readlineSync.questionInt ("Ingrese alto de archivo: ");
let archivo : number = ancho*alto;


if (archivo>=60) {
    console.log("Supera medida de impresión");
} else {
    console.log ("Su archivo mide " + archivo + ".Lo recibirá dentro de las 24hs");
}
// ejercicio de descuento
let producto1 : number = readlineSync.questionFloat ("Ingrese valor de prodicto1");
let producto2 : number = readlineSync.questionFloat ("Ingrese valor de prodicto2");
let producto3 : number = readlineSync.questionFloat ("Ingrese valor de prodicto3");
let TOTAL : number = producto1 + producto2 + producto3;

if (TOTAL>=1000) {
    console.log ("Total:" , TOTAL , "...-10%:" , TOTAL-TOTAL*0.1);
    } else {
    console.log ("Precio compra: " + TOTAL);
    }

    let medida : number = readlineSync.questionFloat ("Ingrese su altura");
    let medidaRequerida : number = 1.30;

    if (medida<medidaRequerida) {
        console.log ("No puede subir a la montaña rusa, su medida es menor a 1.30");
    } else {
        console.log ("Bienvenido a la montaña rusa");
    }*/

    let usuario : string = readlineSync.question ("Ingrese su nombre de usuario: ");
    let clave : string = readlineSync.question ("Ingrese su clave: ");
    let usuarioCorrecto : string = "Juan"; 
    let claveCorrecta : string = "claveJuan";
    
    if ((usuario=="Juan")&&(clave=="claveJuan")) {
        console.log ("Bienvenido");
    } else {
        console.log ("Su usuario o contraseña son incorrectos, vuelve a intentar");
    }


