///////////
//strings
///////////
// una string es una linea de texto, se diferencian por estar rodeadas de comillas
// pueden ser comillas simples 'string', dobles "string" o especiales `string`
// la flecha señala el resultado que se mostraria en consola => resultado

///////////////////
// 1- string basica
///////////////////
var str = "test";

// console.log(str) => test

///////////////////////////
// 2- juntar (se le dice concatenar) varias strings
///////////////////////////
// una de las formas de hacerlo, es sumar ambas variables,
// lo que el programa hace es encadenarlas en una nueva string donde el contenido
// de ambas variables se pega

var str1 = "string 1";
var str2 = "string 2";

// console.log(str1 + str2) => string 1string 2
// en este caso al no tener espacios ambas strings quedan pegadas, se debe dejar
// un espacio al final de la primera string, o al principio de la segunda

str1 = "string 1 ";
// console.log(str1 + str2) => string 1 string 2

/////////////////////////
// 3- mezclar texto con variables string
////////////////////////
// al igual que en el ejemplo anterior, simplemente se suma la string a
// el resto del texto

var str3 = "Jose";

// console.log("Mi nombre es " + str3) => Mi nombre es Jose

///////////////////////////
//4- Escribir comillas dentro de una string
///////////////////////////
// un problema que se puede tener, es querer poner comillas dentro de
// una string, como una cita de un texto que iria entre comillas
// en este caso, lo que se suele hacer es, habiendo 3 tipos de comillas "" '' ``
// simplemente usamos uno para rodear la string, y otro para ser comillas
// lo que hace javascript, es ignorar las comillas que rodean todo el texto, porque
// su utilidad es simplemente decirle que lo que esta dentro va a ser una string

var str4 = 'Un sabio dijo una vez: "La vida es dura pero mas dura la verdura"';
// console.log(str4) => Un sabio dijo una vez: "La vida es dura pero mas dura la verdura"

////////////////////////////
// 5- Cortar una string
////////////////////////////
//Las strings suelen ir de la mano con los arrays, una forma de cortarlas
//es separarlas en fragmentos, y hacer que esos fragmentos formen un array
// donde luego se van a poder manejar de forma individual

var str5 = "Manzana,Banana,Anana,Pera,Sandia";
//Para separar una string en partes, se usa la funcion split()
// split lleva entre sus parentesis, que caracteres se van a usar para separar
// la string, es decir, en que lugares la vamos a cortar
// en el caso de la string str5, las palabras van separadas por coma
// asique se usaria de la siguiente manera

var stringCortada = str5.split(",");

// console.log(stringCortada) => [ 'Manzana', 'Banana', 'Anana', 'Pera', 'Sandia' ]
// es importante notar que split, es una funcion que va asociada a todos los strings
// por defecto, son parte del sistema de javascript, y estas funciones, como otras
// se las llama de esta forma: string.nombredelafuncion(parametros)

/////////////////////////
// 6- Convertir string en numero
/////////////////////////
// hay casos en que tenemos que operar con un numero, pero el mismo esta entre
// comillas por lo que es una string, y al usarlo para operar daria errores
// o resultados inesperados, para esto lo que se usa es la funcion parseFloat()
// o parseInt()

var str6 = "225";
// parseInt() sirve para transformar un numero entero, es decir, que no lleve coma
// parseFloat() sirve para transformar cualquier tipo de numero,
// inclusive numeros con coma

var transformado = parseInt(str6);
// en este caso parseInt es una funcion del sistema, y no va asociada necesariamente
// a las string, por lo que no se pone variable.parseInt()
// sino que se pone parseInt(variable)
// con el uso vas a poder identificar cuales funcionan de una manera u otra

str6 = "a25sdd2";
// si usamos parseInt o parseFloat en una string que ademas del numero, tiene texto
// pueden pasar 2 cosas: si la string empieza por un caracter que no sea numerico
// va a dar como resultado NaN, es decir Not A Number, lo que es similar a un error
// pero no hace crashear el programa.
// Si la string comienza con un numero y luego tiene letras o simbolos, tomara
// unicamente los primeros numeros que encuentre para convertirlos

// console.log(parseInt(str6)) => NaN

str6 = "25 de mayo de 1958";

// console.log(parseInt(str6)) => 25

//////////////////////////
// 7- reordenar una string
//////////////////////////
// Hay casos donde necesitamos alterar una string para que cumpla con un
// formato concreto, un ejemplo son las fechas estadounidenses, que se escriben
// generalmente como: año-dia-mes
// mientras que nosotros la escribimos: dia-mes-año

var str7 = "2019-22-5";
// supongamos que queremos reordenar la fecha de arriba a nuestro formato,
//para esto podemos usar una mezcla de los pasos anteriores
// primero la separamos en 3 partes, dia, mes y año usando split, para separarlos
// vamos a usar el guión, que es la separación que se usa en la string

var str7cortada = str7.split("-");
// console.log(str7cortada) => [ '2019', '22', '5' ]

// en este momento tenemos un array con los elementos de la fecha separados
// pero siguen en el mismo orden, en este caso los lugares son:
// año: lugar 0
// dia: lugar 1
// mes: lugar 2
// y queremos reordenarlos para que queden dia mes año, es decir: 1,2,0
// como es un array simplemente usamos los trozos y los unimos en una cadena

var reordenada = str7cortada[1] + str7cortada[2] + str7cortada[0];

// console.log(reordenada) => 2252019

// en este caso los numeros aparecen todos juntos porque no pusimos ninguna
// separación entre un elemento y otro, para esto, entre medio de un trozo y
// otro pondremos un guión (-) o barra (/)

reordenada = str7cortada[1] + "/" + str7cortada[2] + "/" + str7cortada[0];

// console.log(reordenada) => 22/5/2019

// es importante poner las barras entre comillas, porque van a ser una string
// y siempre poner los signos de + cuando luego de lo que estamos escribiendo
// va a venir otro trozo de texto o variable.

/////////////////////////////////
// 8- convertir texto a minusculas
/////////////////////////////////
// en algunos, vamos a tener que comparar 2 strings que esten
// una con mayusculas y otra totalmente en minusculas, o una mezcla de ambas

var str8min = "texto";
var str8may = "TEXTO";

// al compararlas, se considera que son distintas

// console.log(str8min == str8may) => false

// por lo que si se da el caso, suele ser util convertir ambas strings
// a minusculas para asegurarse que el texto sea el mismo, sin importar como esten
// escritas, la funcion que se encarga es toLowerCase(), es una funcion nativa
// de las strings, y es importante escribir la L y la C de toLowerCase en mayusculas,
// de otra forma no funciona, lo mismo con todos los nombres de funciones o variables
// es fundamental escribir perfectamente los nombres respetando mayusculas

// console.log(str8may.toLowerCase()) => texto

// ahora puedo comparar

// console.log(str8may.toLowerCase() == str8min.toLowerCase())  => true

/////////////////////////////////////////////
// 9 - mezclar texto con variables (avanzado)
/////////////////////////////////////////////
// hay una segunda manera mas nueva y mas comoda de mezclar texto
// con variables en javascript, para esto es obligatorio
// que la string vaya rodeada con este tipo de
// comillas especiales ``: Lo que se hace es escribir las variables
// entre llaves como la de los objetos, antecedidos por un signo de dolar
// `${variable}`

var animal = "Conejo";

var mezcla = `${animal} es un animal de las praderas del norte de mongolia`;

// console.log(mezcla) => Conejo es un animal de las praderas del norte de mongolia

// la gracia de esta forma, es que entre las llaves podes poner
// expresiones simples, como condiciones o operaciones, y se ejecutan antes

var cuenta = `2 x 2 = ${2 * 2}`;
// console.log(cuenta) => 2 x 2 = 4

// se pueden poner tantas variables como se quiera
// tomando el ejemplo de las fechas

// de la otra forma debiamos escribir
reordenada = str7cortada[1] + "/" + str7cortada[2] + "/" + str7cortada[0];

// con esta escribimos
reordenada = `${str7cortada[1]}/${str7cortada[2]}/${str7cortada[0]}`;

// y el resultado es el mismo pero mas corto de escribir

// se puede escribir cualquier tipo de variable o funcion que retorne un valor
// entre las llaves, por ejemplo

var aleatorio = `Han pasado ${Math.random()} Años luz desde el domingo pasado`;
// console.log(aleatorio) => Han pasado 0.0001491299407106 Años luz desde el domingo pasado

/////////////////////////////////////
// ejercicio de formateo de texto
////////////////////////////////////
// en japones los nombres se suelen decir
// Primero el apellido y luego el nombre

var nombre = "Uzumaki Naruto";

// usando la funcion split() y la mezcla avanzada del punto 9, reordenar el
// nombre para que diga Naruto Uzumaki.
