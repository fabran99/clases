/////////////////////
// condicionales
////////////////////
// como lo indica el nombre, los condicionales son condiciones que le ponemos
// a cierto codigo para que se ejecute, si la condicion se cumple, entonces
// el codigo se ejecutara, sino no

////////////////////////
// 1 - if
/////////////////////////

// if significa si en ingles, si de condicion, no de afirmacion,
// por ejemplo, si soy mayor de 18 años puedo pasar

// la forma de escribirlo es if, entre parentesis la condicion, y el código a
// ejecutar va entre llaves

var edad = 25;

//condicion
if (edad > 18) {
  //   console.log("Puedes pasar") => Puedes pasar
}

// la condicion que va entre los parentesis puede ser tan compleja como uno quiera

///////////////////
// 2 - operadores logicos
///////////////////

// para mezclar varias condiciones hay varios operadores logicos

// se usa == para comparar 2 valores y ver si son iguales, literalmente
// es como decir es igual, pero no para dar valor, sino a modo de comparacion
// si mi nombre == tu nombre => nos llamamos iguales
var miNombre = "Jose";
var tuNombre = "Jose";

// esto es cierto, asi que se ejecuta
if (miNombre == tuNombre) {
  console.log("nos llamamos igual");
}

// esto sirve tambien para comparar mayores, mayores o iguales, menores
// o menores que iguales entre numeros, por ejemplo
// si mi edad es mayor a tu edad => yo soy mayor que vos, y viceversa
var miEdad = 15;
var tuEdad = 12;

// esto es cierto, asi que se ejecuta
if (miEdad > tuEdad) {
  console.log("soy mayor que vos");
}

// esto no es cierto, no se ejecuta
if (miEdad < tuEdad) {
  console.log("soy menor que vos");
}

// tambien se puede comparar si un numero es mayor o igual a otro, o menor o igual
// por ejemplo: si mi edad es mayor o igual a 18 => puedo comprar alcohol

miEdad = 18;

// esto es cierto, asi que se ejecuta
if (miEdad >= 18) {
  console.log("Puedo comprar alcohol");
}

// se usa && para decir ademas, es decir, si dos condiciones se cumplen
// EJ: Si sos Uruguayo y sos mayor de 18 => podes votar
// en este caso, la condicion es cierta unicamente si ambas afirmaciones son ciertas
// solo ser uruguayo o mayor de 18 no sirve para votar, tenes que complir
// ambas condiciones
var nacionalidad = "Uruguayo";
var edad = 22;

if (nacionalidad == "Uruguayo" && edad > 18) {
  console.log("Podes votar");
}

// se usa || para decir una condicion u otra, es decir, con que una de las 2
// afirmaciones sea cierta, la condicion se considera correcta
// la mejor forma de verlo, es pensar en o, si sos pensionista O trabajas,
// recibis plata todos los meses

// EJ: Si sos pensionista || trabajas => recibis plata
// no necesariamente tenes que cumplir ambas para que sea cierto, con que una
// sea cierta es suficiente para que la condicion sea verdadera, en este caso
// si soy pensionista y a la vez trabajo, tambien se considera cierto

var pensionista = false; // no soy pensionista, porque pensionista es falso
var trabajador = true; // soy trabajador, porque pensionista es verdadero

// esto es cierto, porque si bien no soy pensionista, si soy trabajador

if (pensionista || trabajador) {
  console.log("Gano plata");
}

// a la hora de hacer condiciones, lo que importa es que lo que este entre parentesis
// equivalga a true o false, osea sea verdadero, o si es falso no se ejecutara.
// en este caso las mismas variables pensionista y trabajador, son true y false,
// asique con que una sea true, es suficiente

// se usa != cuando queremos ver si 2 cosas son diferentes una de otra
// ej: mi nombre != tu nombre => nos llamamos diferente

var miNombre = "Carlos";
var tuNombre = "Jose";

// esto se cumple porque los nombres son distintos
if (miNombre != tuNombre) {
  console.log("Nos llamamos diferente");
}

// para decir que algo NO se tiene que cumplir, usamos el signo ! solo,
// por ejemplo, si NO soy trabajador => no gano plata

var trabajador = false;

// esto es cierto porque trabajador es false, por lo que no soy trabajador
// el signo ! lo que hace es negar lo que venga despues,
// al negar algo que es falso, lo convierto en verdadero, por lo que la condicion
// pasa a ser true, y se ejecuta

if (!trabajador) {
  console.log("no gano plata");
}

// efectivamente no soy trabajador, asique no gano plata

/////////////////////////
// 3- else if y else
/////////////////////////

// se pueden encadenar tantas condiciones como sean necesarias
// supongamos que estamos jugando a piedra papel o tijera
// si juego papel pueden pasar 3 cosas:

// 1- el otro juega papel y es empate
// 2- el otro juega tijera y pierdo
// 3- el otro juega piedra y gano

// la idea aca es que solo una de esas 3 va a ser cierta, las otras 2 no van a
// ocurrir, por lo tanto uso else if y else, que son literalmente => sino si pasa esto,
// y sino

// if sigue funcionando igual.

// Else if funciona igual que if, solo que su condicion
// sera evaluada unicamente si la condicion del if anterior no se cumple, se pueden
// encadenar tantos else if como uno quiera.

// Else se ejecutara si todas las condiciones que vinieran antes son falsas, es como
// la opcion por descarte, por lo que no lleva una condicion, simplemente se ejecuta
// si todo lo anterior es falso

var miJugada = "Piedra";
var jugadaDelOtro = "Tijera";

// en este caso voy a evaluar primero que mi jugada se piedra, y dentro de esa condicion
// voy a revisar que jugo el otro.
// Las demas condiciones van dentro de la condicion
// de que yo haya jugado piedra, por el hecho de que el resultado depende de lo que
// yo haya elegido.
// No es lo mismo que yo elija piedra y el otro tijera, a que yo elija papel y el otro tijera

// si jugue piedra
if (miJugada == "Piedra") {
  // si el otro jugo piedra es empate
  if (jugadaDelOtro == "Piedra") {
    console.log("Empate");
  }
  // si lo de arriba es falso, es decir el otro no jugo piedra,
  // reviso si jugo tijera
  else if (jugadaDelOtro == "Tijera") {
    console.log("Ganaste");
  }
  // sino, por descarte el otro jugo papel, porque solo son estas 3 opciones
  else {
    console.log("Perdiste");
  }
}
// en este caso saldra que ganaste, porque piedra le gana a tijera, pero para cubrir
// todos los casos, hay que hacer 2 condiciones mas en caso de que yo jugara tijera o papel,
// con los distintos resultados posibles de acuerdo a lo que juegue el otro

/////////////////////////////////
// ejercicio: Funcion que juegue al piedra papel o tijeras
////////////////////////////////

// hacer una funcion, que tome como parametro tu jugada
// la funcion debe generar una jugada aleatoria para compararla con la tuya
// para esto hay que usar Math.random() para elegir cual de las 3 opciones
// se elegira aleatoriamente para compararla, las 3 opciones deberian estar en un array

var jugadasPosibles = ["Piedra", "Papel", "Tijera"];

// y de acuerdo a su posicion, con math random tomaremos un valor u otro aleatoriamente

// luego de esto, hay que revisar tomando en cuenta lo que yo jugue y lo que salio al azar
// a ver quien gano, y mostrar en la consola un mensaje como:

// "Elegiste: 'Piedra', salio: 'Tijera' => Tu ganas "
