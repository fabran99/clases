/////////////////////////////
//arrays
////////////////////////////
// los arrays son listas formadas por otras variables, para definirlos simplemente
// tenemos que rodear una serie de 0 o mas variables entre parentesis rectos

//////////
// 1- array simple
//////////

var array1 = [1, 2, 3, 4];

// en este caso array1 contiene los numeros del 1 al 4
// para acceder a sus valores, se debe seleccionar la posicion del valor dentro
// de la lista, poniendo el numero del lugar donde se encuentra, contando desde 0

// console.log(array1[0]) => 1
// console.log(array1[1]) => 2
// console.log(array1[3]) => 4

// si se intenta elegir un lugar donde no existe un elemento, devolvera undefined

// console.log(array1[1413]) => undefined

///////////////////
// 2- modificar valores de un array
///////////////////

var array2 = [1, 2, 3, 4, 5];

// console.log(array2[0]) => 1

// para modificar el valor de un elemento de un array, hay que igualarlo a el valor
// nuevo, como si fuera cualquier otra variable

array2[0] = 2019;
// console.log(array2[0]) => 2019

//////////////////////
//3- agregar elementos a un array
/////////////////////
var array3 = [1, 2, 3, 4];

// para agregar un elemento al final del array hay 2 formas, usando la funcion
// push(valornuevo), que lo que hace es agregar un valor mas al array

array3.push(5);
// ahora el array pasa a tener un quinto valor
// console.log(array3) => [ 1, 2, 3, 4, 5 ]

// tambien se puede asignar un valor nuevo al array usando el numero del lugar
// a donde va a quedar el valor nuevo, en este caso, en la posicion 5

array3[5] = 6;
// console.log(array3) => [ 1, 2, 3, 4, 5, 6 ]

// lo mejor suele ser usar la funcion push(), porque de esta forma te aseguras
// no dejar un espacio hueco, si usamos el segundo metodo y nos salteamos un lugar,
// dejaremos un espacio vacio en el array, que luego puede dar problemas.

array3[7] = 12;
// console.log(array3) => [ 1, 2, 3, 4, 5, 6, <1 empty item>, 12 ]

/////////////////////
// 4- mezclar arrays
////////////////////

// en caso de querer mezclar 2 arrays, usamos la funcion concat().
// se escribe array1.concat(array2)

var arrayInicial = [1, 2, 3, 4];
var arraySecundario = [5, 6, 7, 8];

// var mezcla = arrayInicial.concat(arraySecundario)
// console.log(mezcla) => [ 1, 2, 3, 4, 5, 6, 7, 8 ]

////////////////////////
// 5- buscar dentro de un array
///////////////////////

// si queremos buscar en que lugar esta un elemento de un array, usamos indexOf()
// indexOf(parametro) => donde parametro es el valor que estamos buscando.
// imaginemos que tenemos un ranking de elo, donde el que esta en primera posicion
// es el mejor, y el que esta en ultima posicion es el peor.

var ranking = ["Carrica", "Bardini", "Bunny", "Odazio", "Panes"];

// si quiero saber en que posición del ranking estoy, uso indexOf(minombre)

// console.log(ranking.indexOf("Panes")) => 4

// si recordamos, en realidad los arrays empiezan desde el 0, por lo que lo logico
// seria sumarle 1 al resultado

// console.log(
//   `Panes esta en el puesto ${ranking.indexOf("Panes") + 1} del ranking` =>
// );
// Panes esta en el puesto 5 del ranking

// en caso de que busquemos algo que no exista dentro del array
// ej: ranking.indexOf("bananas") => -1
// retornara -1, esto indica simplemente que no existe un elemento con ese valor

///////////////////////////
// 6 - Ordenar elementos de un array
//////////////////////////
// si queremos ordenar alfabeticamente los valores de un array
// usamos la funcion array.sort()

var nombres = ["Carrica", "Bardini", "Bunny", "Odazio", "Panes"];

// console.log(nombres.sort()) => [ 'Bardini', 'Bunny', 'Carrica', 'Odazio', 'Panes' ]

var numeros = [12, 1, 1.5, 5];
// en el caso de los numeros, por defecto los va a ordenar alfabeticamente,
// por lo que  el resultado que se espera no es el correcto, porque ignora
// que son numeros

// console.log(numeros.sort()) => [ 1, 1.5, 12, 5 ]

// para este caso hay que usar una función hecha a mano, que se explicara
// en la siguiente clase (quiza)

//////////////////////////
// 7- unir elementos de un array en una string
///////////////////////////
// para unir elementos usamos la funcion join()
// join lleva como parametro el caracter que vamos a usar para
// unir los elementos

var elementos = ["pera", "manzana", "naranja"];

var juntos = elementos.join(",");
// console.log(juntos) => pera,manzana,naranja

//////////////////
// 8 - Arrays de varios niveles
/////////////////

// Los arrays pueden tener cualquier tipo de variable dentro, inclusive otros arrays
var arrayMultinivel = [0, 5, [1, 4, 6], 6, 8];

//en este caso el elemento numero 2 del array, es un array tambien

// console.log(arrayMultinivel[2]) => [ 1, 4, 6 ]

// si quiero seleccionar un elemento de ese array, simplemente agrego la posicion del elemento en ese array

// console.log(arrayMultinivel[2][0]) => 1

// y así sucesivamente tantas veces como arrays tenga, pudiendo terminar algo como arrayMultinivel[2][0][8][12] etc...

///////////////////////////
// 9 - Objetos dentro de un array
//////////////////////////
// se puede tener objetos dentro de un array

var personas = [
  {
    nombre: "Bunny",
    ocupacion: "Eloboosteado",
    elo: "oro"
  },
  {
    nombre: "Panes",
    ocupacion: "Panadero",
    elo: "bronce 3"
  }
];

// el elemento 0 del array personas es bunny, y el 1 es panes, para acceder a sus propiedades,
// hace falta agregar .nombredelapropiedad al final de personas[posiciondelobjeto]

// console.log(personas[0].ocupacion) => Eloboosteado
// primero entro a personas, luego a la posicion 0 del array que es el objeto bunny, y entonces busco su ocupación

///////////////////////////
// 10 - eliminar elementos de un array
//////////////////////////
// hay varias formas de borrar una variable dentro de un array

// javascript permite borrar el ultimo, el primero, o tambien concretamente uno o mas
// usando su posición en el array

var conjunto = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// para borrar el ultimo usamos la funcion .pop(), que no lleva parametros

conjunto.pop();
// console.log(conjunto) => [ 1, 2, 3, 4, 5, 6, 7, 8 ]
// se borra el 9, importante notar que pop NO RETORNA el array nuevo sin el
// ultimo elemento, sino que modifica el array que ya existia

// para borrar el primer elemento usamos .shift()

conjunto.shift();

// console.log(conjunto) => [ 2, 3, 4, 5, 6, 7, 8 ]
// se borra el 1, al igual que pop, esta funcion modifica el array original
// en lugar de retornar uno nuevo.

// para borrar un elemento segun su posición usamos la función splice()
// splice tiene muchas utilidades, la mas basica es borrar elementos a partir
// del lugar que tomemos como parametro

var conjuntoNombres = ["Carrica", "Bardini", "Bunny", "Odazio", "Panes"];

// supongamos que queremos echar a odazio del grupo porque no juega al lol
// para revisar en que puesto del array está, usamos indexOf como en uno de los
// pasos anteriores

var lugar = conjuntoNombres.indexOf("Odazio");
// console.log(lugar) => 3

// para eliminarlo, vamos a usar la funcion splice(), splice lleva 2 parametros,
// el indice a partir de donde vas a eliminar, y el segundo parametro
// es la cantidad de elementos que vas a borrar a partir de ahi, en este caso
// solo vamos a borrar a Odazio, por lo que sera solo 1 elemento

conjuntoNombres.splice(lugar, 1);

// console.log(conjuntoNombres) => [ 'Carrica', 'Bardini', 'Bunny', 'Panes' ]

// al igual que pop y shift, splice() no retorna el array nuevo, sino que modifica
// el original
