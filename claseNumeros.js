////////////////////////////////
// numeros
///////////////////////////////
// los numeros tienen pocas particularidades en javascript, simplemente
// hay que tener en cuenta que no pueden estar entre comillas para ser
// considerados numeros

//////////////////////////
// 1- operando con numeros
/////////////////////////

// las operaciones comunes se pueden hacer sin problemas igual que en
// una calculadora, la diferencia es que se pueden usar variables
// para representar los numeros, tambien tener en cuenta que al multiplicar no se usa
// la x sino *

var numero1 = 5;
var numero2 = 8;

//suma
var suma = numero1 + numero2;
// console.log(suma) => 13

// resta
var resta = numero1 - numero2;
// console.log(resta) => -3

// multiplicacion
var multiplicacion = numero1 * numero2;
// console.log(multiplicacion) => 40

// division
var division = numero1 / numero2;
// console.log(division) => 0.625

// hay otro operador, que lo que hace es indicar el resto que da
// la división entre 2 numeros, el operador es %
// por ejemplo al dividir 5 entre 2, da 2.5.
// En la forma tradicional de dividir, decimos que 5 dividido 2
// da 2 como resultado y me sobra 1, ese 1 es el resto

var resto = 5 % 2;
// console.log(resto) => 1

// esto es especialmente util para revisar si un numero es multiplo de otro
// o si es par o impar, si queremos saber si es par, simplemente usamos este
// operador para dividirlo entre 2, y revisar si da un resto distinto de 0

var resto2 = 6 % 2;
// console.log(resto2) => 0

// en este caso el resto es 0 porque 6 se puede dividir entre 2,
// la division es exacta

/////////////////////////////
//verificar si numero es par
/////////////////////////////
var numeroAverificar = 136;

// if (numeroAverificar % 2 == 0) {
//   console.log("el numero es par");
// } else {
//   console.log("el numero es impar");
// }

//////////////////////////
// 2- redondear numeros
/////////////////////////
// aveces necesitamos redondear un numero, y hay varias formas de hacerlo
// redondear al mas cercano, redondear hacia arriba o hacia abajo

// la funcion Math.round(numero) redondea al mas cercano
// la funcion Math.floor(numero) redondea hacia abajo
// la funcion Math.ceil(numero) redondea hacia arriba

var numeroConDecimal = 2.3;

// Math.round(numeroConDecimal) => 2
// Math.floor(numeroConDecimal) => 2
// Math.ceil(numeroConDecimal) => 3

///////////////////////////
// 3- redondear hasta ciertas comas
//////////////////////////

// hay casos donde el numero tiene muchas comas, y pretendemos redondear
// a cierta cantidad, un ejemplo es al dividir

var tercio = 10 / 3;
// console.log(tercio) =>3.3333333333333335

// para esto usamos la funcion toFixed(cantidadDeDecimales)

var tercioDecimal = tercio.toFixed(2);

// console.log(tercioDecimal) => 3.33

// es importante notar que toFixed convierte el numero en string, por lo que
// lo que obtenemos deja de ser un numero, en caso de querer seguir
// operando con el, lo mejor es convertirlo en numero con parseFloat()

// console.log(tercioDecimal + 1) => 3.331

var tercioDecimalNumerico = parseFloat(tercioDecimal);

// console.log(tercioDecimalNumerico + 1) => 4.331

//////////////////////////
// 4 - numeros aleatorios
/////////////////////////

// una forma de conseguir aleatoriedad es usando la funcion Math.random()
// que genera un numero al azar entre 0 y 1 cada vez que se ejecuta

var azar1 = Math.random();
// console.log(azar1) =>0.017503556420000344

// esta vez el numero es 0.017503556420000344 pero al volver a ejecutar este
// archivo, el numero sera distinto

// una limitante de Math.random() es que el numero que devuelve va entre 0 y 1
// por lo que si queremos un numero entre 0 y 10 por ejemplo,
//hay que operar con el.

var entre0y10 = Math.random() * 10;

// Lo que se hace es multiplicar el numero aleatorio por el tope
// al que se quiere llegar, esto hace que si da un numero muy bajo
// por ejemplo 0.1 el resultado será 1
// mientras que si da un numero alto como 0.9 el resultado será 9

var entre5y10 = 5 + Math.random() * 5;

// si se quiere establecer el minimo y el maximo lo que se hace es
// que inicialmente ya este sumado ese minimo antes de mezclarlo con el numero
// aleatorio, de esta forma te aseguras de que al menos sea 5

// en este caso lo que se hace es a ese 5 inicial, sumarle un numero
// aleatorio entre 0 y 5, lo que dará como resultado un numero entre 5 y 10
// para dar un numero exacto se puede usar una funcion de
//redondeo de las explicadas arriba

//////////////////////////
// 5- operaciones combinadas
/////////////////////////////
// se pueden hacer todo tipo de operaciones combinadas
//por ejemplo para calcular porcentajes, en algunos casos es necesario
// el uso de parentesis para separar que trozos de la cuenta son un bloque

var total = 150;

// 150 es el 100%, el 20% es (150 * 20 / 100)
var veintePorciento = (total * 20) / 100;
// console.log(veintePorciento) => 30

// si queremos que el porcentaje a calcular sea variable, podemos
// crear otra variable porcentaje

var porcentaje = 15.5;

var resultado = (total * porcentaje) / 100;

// console.log(resultado) => 23.25

///////////////////////////////
// ejercicio de logica
//////////////////////////////
// los colores rgb estan compuestos por 3 valores, de rojo verde y azul
// RED, GREEN, BLUE, estos valores van desde 0 hasta 255 y NO PUEDEN
// LLEVAR COMA, cuanto mas alto mas intenso es ese color en la mezcla final.

// ejemplo 1 :  rgb(255, 0, 0)
// 255 de rojo, 0 de verde y 0 de azul, da como resultado un rojo intenso

// ejemplo 2 : rgb(0, 0, 0)
// 0 de todos los colores da como resultado un negro.

// ejemplo 3: rgb(210, 57, 12)
// da un color naranja

// para escribir un color, que luego va a ser usado en una interfaz
// se debe escribir rgb y entre parentesis los 3 valores de rojo, verde y azul
// como en los ejemplos, en ese mismo orden.

// usando Math.random() y la mezcla de strings de la parte 9 de claseStrings.js
// mostrar en la consola una string que forme un color al azar
// tienen que ser 3 numeros enteros al azar entre 0 y 255
// ejemplo: rgb(numero1, numero2, numero3)

// en esta pagina se puede poner el codigo rgb de un color y apretando enter
// te muestra que color forma la mezcla
// comprobarlo en https://www.w3schools.com/colors/colors_rgb.asp

/////////////////////////
// solucion
////////////////////////

function rgbAzar() {
  // 3 numeros al azar entre 0 y 255
  var n1 = Math.random() * 255 + 0;
  var n2 = Math.random() * 255 + 0;
  var n3 = Math.random() * 255 + 0;

  // redondeo estos numeros, porque actualmente pueden tener decimales
  n1 = Math.round(n1);
  n2 = Math.round(n2);
  n3 = Math.round(n3);

  var resultado = `rgb(${n1}, ${n2}, ${n3})`;
  return resultado;
}

// console.log(rgbAzar()) => rgb(71, 50, 102) por ejemplo
