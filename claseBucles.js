/////////////
// bucles
/////////////
// los bucles se utilizan para realizar una tarea una determinada cantidad de veces
// esto puede servir sobre todo para repetir un codigo concreto, o por ejemplo
// para operar con todos los elementos de un array

/////////////////////////
// 1- bucle while
/////////////////////////

// while significa mientras, y funciona similar a un if, mientras que la condicion
// que le pongas sea cierta, todo lo que va dentro se va a seguir ejecutando

// en este caso hay que asegurarse de que en algun momento la condicion deje de ser cierta
// para que el bucle no siga indefinidamente

// supongamos que queremos contar hasta 1000 y mostrar los 1000 numeros en consola,
// en este caso podemos hacer un bucle que haga esto

var contador = 1;

// inicialmente comenzamos con un contador, que es lo que se va a mostrar en consola
// cada vez que se ejecute el bucle, y antes de finalizarlo, lo que hacemos es
// agregarle 1 al contador, para que la siguiente vez que el bucle se ejecute, contador sea
// 2, y luego 3, y luego 4 y asi hasta el resultado que uno quiera.

// en este caso voy a contar solo hasta 5
// mientras  el contador sea menor a 6, es decir, hasta 1000
while (contador < 6) {
  // muestro el numero que vaya en el contador
  console.log(contador);

  // le sumo 1 al contador, para que se vaya acercando al resultado, y muestre un
  // numero diferente cada vez, el contador ahora, pasa a ser su valor actual + 1

  contador = contador + 1;
}
// esto muestra 1 2 3 4 5

///////////////////////
// 2- usando while con arrays
////////////////////////

var nombres = ["Carrica", "Bardini", "Bunny", "Odazio", "Panes"];

// esto es especialmente util para trabajar con arrays, ya que los arrays usan numeros
// para seleccionar que valores estoy mostrando, es decir nombres[0] es carrica,
// nombres[2] es bunny, etc...

contador = 0;
// en los arrays comenzamos con el contador en 0, porque se cuentan desde 0
// como se explico en la clase de los arrays, si trato de entrar a un elemento
// del array que no existe, me devuelve undefined, undefined funciona igual que false,
// es decir, si la condicion que tomo para el bucle da undefined, el bucle se corta,
// porque considera que es falsa

// en cambio si en la condicion simplemente elijo un valor que SI EXISTE dentro del array,
// aunque el valor no sea igual a true, decimos que el valor existe, por lo que la condicion
// si se cumple en este caso

// si hay un valor asignado en el lugar donde actualmente esta el contador
while (nombres[contador]) {
  // muestro el valor que esta en el lugar por el que va pasando el contador
  console.log(nombres[contador]);

  // le sumo 1 al contador para que vaya avanzando de valor en valor
  contador = contador + 1;
}

// esto mostrara en consola =>  // Carrica
// Bardini
// Bunny
// Odazio
// Panes

// en determinado momento va a llegar a nombres[5] que no existe, y va a cortar el bucle.

///////////////////////////////
// 3- bucle for
///////////////////////////////
// el bucle for funciona igual que while, pero tanto el contador como la condicion
// se declaran como parametros, en este caso separados por punto y coma
// primero ponemos el contador, luego la condicion, y luego le sumamos uno al contador

// decimos:
var nombres = ["Carrica", "Bardini", "Bunny", "Odazio", "Panes"];

for (var contador = 0; nombres[contador]; contador = contador + 1) {
  console.log(nombres[contador]);
}

// esto mostrara en consola =>  // Carrica
// Bardini
// Bunny
// Odazio
// Panes

// El resultado es el mismo pero escribimos todo en una linea,
// una manera comun de ponerlo, es usando un nuevo tipo de variable que se llama let,
// las variables let, en vez de ser var se declaran como:
// let nombrevariable = valor;

// la diferencia es que las variables let solo existen dentro del bucle, es decir, una vez
// que termine el bucle let deja de existir, esto es util porque podemos crear
// una variable que solo actue como contador del indice en el que estamos dentro del
// array, donde indice a partir de ahora va a ser sinonimo de posicion dentro del array

// ejemplo: "Carrica" esta en el indice 0 del array nombres, en el lugar 0

// para simplificar se suele poner simplemente la letra i de indice como contador
// de esta forma se ahorra monton de codigo

// otra forma de ahorrar codigo, es que si simplemente queremos sumarle 1 a un numero
// podemos usar ++, es decir contador++ es lo mismo que poner contador = contador + 1

for (let i = 0; nombres[i]; i++) {
  console.log(nombres[i]);
}

// esto mostrara en consola =>  // Carrica
// Bardini
// Bunny
// Odazio
// Panes

// en este caso, aprovechando la sintaxis podemos ahorrar muchisimo codigo,

// mientras en el bucle while teniamos que usar 3 o 4 lineas para recorrer un array
// con for usamos unicamente 2

////////////////////////////
// 4- cortar un bucle o saltarse un valor
////////////////////////////

var nombres = ["Carrica", "Bardini", "Bunny", "Odazio", "Panes"];

// imaginemos que nos cae mal Odazio, y queremos que a el no lo muestre cuando
// el bucle pase por su lugar, el indice 3
// en este caso podemos haer 2 cosas, o saltarnos su valor y seguir con panes
// o directamente cortar ahi, y tambien cortar todo lo que venga despues, es decir
// terminamos con el bucle

// para el primer caso, usamos continue
// simplemente ponemos una condicion, en este caso que el valor actual sea Odazio,
// y si eso es cierto usamos continue, su nombre no  se mostrara

for (let i = 0; nombres[i]; i++) {
  // si el valor actual, osea nombres[i] es "Odazio"
  if (nombres[i] == "Odazio") {
    // continua con el bucle ignorandolo
    continue;
  }
  // sino muestro el valor actual
  else {
    console.log(nombres[i]);
  }
}

// esto muestra en consola salteandose a Odazio => Carrica
// Bardini
// Bunny
// Panes

// si queremos que al llegar a odazio se corte la funcion, porque solo queremos ver
// quienes vienen antes que el, lo que usamos es break, el funcionamiento es igual que
// con continue, solo que en este caso el bucle se corta y todo lo que vendria despues
// no se ejecuta

for (let i = 0; nombres[i]; i++) {
  // si el valor actual, osea nombres[i] es "Odazio"
  if (nombres[i] == "Odazio") {
    // corta el bucle
    break;
  }
  // sino muestro el valor actual
  else {
    console.log(nombres[i]);
  }
}

// esto muestra en consola solo los nombres anteriores a odazio => Carrica
// Bardini
// Bunny

// si queremos que incluya a odazio y luego corte, solo cambiamos el orden de las cosas
// es decir primero mostramos el nombre, y luego cortamos el bucle si comprobamos
// que llegamos a odazio

for (let i = 0; nombres[i]; i++) {
  // muestro el nombre
  console.log(nombres[i]);

  // si el valor actual, osea nombres[i] es "Odazio"
  if (nombres[i] == "Odazio") {
    // corta el bucle
    break;
  }
}

// esto muestra en consola los datos hasta odazio inclusive => Carrica
// Bardini
// Bunny
// Odazio

///////////////////////////
// ejercicio: crear array con colores rgb al azar
///////////////////////////

// la idea es crear un array, usando un bucle y la funcion anterior
// que creamos, que genera colores rgb al azar, de forma que vallamos llenando
// un array, con 5 colores distintos

// inicialmente deberiamos tener un array vacio, y usando la funcion push(), dentro del
// bucle le iriamos agregando de a 1 color, hasta que hayan 5

var colores = [];
// el array esta vacio

// el contador deberia empezar en 1 y llegar hasta que sea igual o menor a 5
// dentro del bucle se deberia ejecutar la funcion que genere el color rgb,
// y la string que genera la agregamos como parametro, es decir

// colores.push(colornuevo)

// de forma que finalmente colores termine siendo algo similar a esto en la consola

// [ 'rgb(163, 70, 51)',
//   'rgb(30, 127, 98)',
//   'rgb(90, 172, 75)',
//   'rgb(253, 100, 200)',
//   'rgb(245, 175, 204)' ]

///////////////////////////////////
// solucion al ejercicio anterior
///////////////////////////////////

// creo el array vacio para agregarle los colores
var colores = [];

// funcion para elegir un numero al azar entre un valor y otro
function numAzar(minimo, maximo) {
  var resultado = minimo + Math.random() * (maximo - minimo);
  var redondeado = Math.round(resultado);
  return redondeado;
}

// crear color rgb al azar y retornar uno distinto cada vez
function rgbAzar() {
  var n1 = numAzar(0, 255);
  var n2 = numAzar(0, 255);
  var n3 = numAzar(0, 255);

  var resultado = `rgb(${n1}, ${n2}, ${n3})`;
  return resultado;
}

// bucle desde 1 hasta 5

for (let i = 1; i <= 5; i++) {
  colores.push(rgbAzar());
}

// console.log(colores) => [ 'rgb(163, 70, 51)',
// 'rgb(30, 127, 98)',
// 'rgb(90, 172, 75)',
// 'rgb(253, 100, 200)',
// 'rgb(245, 175, 204)' ]
