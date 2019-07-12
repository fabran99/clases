//////////////////////////////////
// funciones
/////////////////////////////////

// las funciones son una operación que ejecuta javascript para realizar una tarea, las hay por defecto, y tambien
// se pueden crear funciones propias para automatizar procesos que normalmente hacerlos a mano tardaria mucho

//////////////////
// 1- Funciones del sistema
/////////////////

// Las funciones se suelen ejecutar, o llamar, escribiendo su nombre y usando parentesis, que pueden o no
// llevar algo dentro, los parametros son opcionales y dependen de la función que estas ejecutando

Math.random();
// es una función del objeto Math, que es parte del sistema, esta función genera un numero
// al azar entre 0 y 1, y no lleva ningun parámetro, porque no varía, siempre hace lo mismo

// console.log() es una función del objeto consola, lo que pongas como parámetro entre paréntesis,
// aparece en la consola, ya sean variables, texto, etc.

// hay funciones que son exclusivamente para un tipo de variable, por ejemplo las de las strings

var str = "MAYUSCULAS";

// console.log(str.toLowerCase()) => mayusculas
// lo que hace es cambiar toda la string a minusculas

//////////////////////////
// 2- Funciones personalizadas
/////////////////////////

// para crear una función personalizada, hay 2 maneras, una simple y otra avanzada que por el momento
// no voy a explicar, para hacerla, escribimos function nombrequelepongoalafuncion y parentesis, luego llaves

function sumar() {}

// lo que esta entre paréntesis son los parámetros que va a utilizar, son opcionales, por lo que puede ir vacío
// lo que esta entre las llaves va a ser todas las tareas que va a ejecutar la función
// en este caso vamos a crear una función que sume 2 numeros y los muestre en la consola

var numero1 = 18;
var numero2 = 15;

function sumar() {
  console.log(numero1 + numero2);
}

// si la dejamos así, la funcion no hace nada, simplemente existe como si fuera una variable, tenemos que ejecutarla
// como las demas, escribiendo su nombre y parentesis

// sumar() => esto hara que en la consola aparezca 33

// Sin embargo ahora tenemos que cambiarle manualmente el valor a las variables
// para volver a sumar y que de algo diferente, asique si queremos sumar otros 2 numeros, tenemos que
// cambiarles el valor a las variables que sumamos dentro de la función, y recien ahí volverla a ejecutar
// para que sume los numeros nuevos

numero1 = 2;
numero2 = 15;

//sumar() => 17

// Por el momento, la función no equivale a un número como en el caso de Math.random(), que podemos multiplicarla
// asumiendo que es un numero al azar, si hacemos sumar() * 5, simplemente va a mostrar 17 en la consola, esto es porque
// no hicimos que la función retornara algo, es decir, la función no equivale a la suma, sino que lo que hace es mostrar
// la suma en la consola.
// para que podamos usarla en cuentas, tenemos que usar el método return

///////////////////
// 3 - funciones que retornan valores
////////////////////

function sumar() {
  return numero1 + numero2;
}

// console.log(sumar() * 5) => 85

// para hacer esto, escribimos return, seguido de la operación que queremos que equivalga, en este caso numero1 + numero2
// de esta forma, le decimos, sumar() equivale a numero1 + numero2, es exactamente igual que si usaramos una variable simple

var suma = numero1 + numero2;

// console.log(suma * 5) => 85

// la diferencia, es que mientras las variables tienen limitantes a la hora de declararlas, las funciones pueden procesar
// los datos de tantas formas como uno quiera, todo lo que esté entre las llaves {} se va a ejecutar antes de retornar
// un valor

var total = 255;
var porcentaje = 20;

// esta función retorna el 20% del total pero como una frase entera que contiene el resultado.

function calcularPorcentaje() {
  var resultado = (20 * 255) / 100;

  return `El ${porcentaje}% de ${total} es ${resultado}`;
}

// console.log(calcularPorcentaje()) => El 20% de 255 es 51

// si bien retornar valores es útil, no implica que todas las funciónes deban retornar algo,
// muchas veces solo necesitamos que haga algo concreto, como modificar una variable,
// o mostrar algo en consola si se da una condición

var edad = 18;

function revisar() {
  if (edad >= 18) {
    console.log("esta permitido");
  } else {
    console.log("no esta permitido");
  }
}

// revisar() => muestra en la consola "esta permitido";

//////////////////////////////
// 4 - funciones con parámetros
///////////////////////////

// sin embargo, la mayor utilidad de las funciónes es reciclar código, para poder utilizarlo varias veces
// a lo largo del programa ahorrando repetir tareas que se hagan varias veces,
// la mejor forma de hacerlo, es usando parametros, de esta forma no dependemos
// de una variable concreta para hacerla funcionar, sino que usando la misma función siempre, variando su resultado
// segun el parámetro que le pongamos entre parentesis, de la misma forma que console.log() se puede usar decenas de veces
// en cada programa, cambiando el contenido que va entre los paréntesis obtenes distintos resultados

// console.log("resultado 1") => resultado 1
// console.log("resultado 2") => resultado 2
// console.log("resultado 3") => resultado 3

// resultado distinto dependiendo del parámetro, pero la función sigue siendo console.log()

function sumar(primero, segundo) {
  return primero + segundo;
}

// para agregarle parametros a una función, al declararla, debemos ponerle un nombre a los parámetros que se vayan
// a usar, de esta forma, usamos ese mismo nombre de variable dentro de la función

// para llamar la funcion ahora, no basta con poner suma(), sino que entre paréntesis hay que poner los 2 valores que
// se van a sumar, separados por coma

// sumar(5, 10 ) => equivale a 15, ahora como equivale a un numero, puedo usarlo para hacer mas operaciones

// si quiero calcular el cuadrado de la suma de 2 numeros, los sumo y los multiplico
// console.log(sumar(5, 10) * sumar(5, 10)) => 225

// Por supuesto, los parametros pueden ser cualquier tipo de variable, eso va a depender del tipo de función que estemos
// haciendo, en este caso vamos a hacer una función que retorne un numero entero al azar, que se encuentre entre 2 numeros,
// el primer parámetro sera el numero minimo, y el segundo parametro será el maximo
// de forma que si llamamos azar(0, 5) => deberia retornar un numero entre 0 y 5 incluido

function azar(minimo, maximo) {
  // como se explicó en la claseNumeros, para hacer un numero al azar entre 2 numeros, hay que multiplicar
  // Math.random() por el tome máximo, y sumarle el mínimo
  var resultado = minimo + Math.random() * maximo;

  // el numero que tenemos hasta ahora, efectivamente esta entre 0 y 5, pero hay que redondearlo para que
  // de un entero como queremos, para esto retornamos el resultado con Math.round(resultado)

  return Math.round(resultado);
}

// console.log(azar(0, 5)) => cada vez que ejecutemos la función dará un numero entre 0 y 5
// ahora esta función la podemos reutilizar tantas veces como necesitemos, cambiando los parámetros que necesitemos
// por ejemplo, en el caso de que queramos simular una tirada de moneda, ponemos un numero entre 0 y 1, y dependiendo
// de lo que salga, decimos que es cara o cruz

function tirarMoneda() {
  if (azar(0, 1) == 0) {
    console.log("Cara");
  } else {
    console.log("Cruz");
  }
}

// tirarMoneda() => muestra en la consola  cara o cruz aleatoriamente, también podemos hacer que retorne el valor

function tirarMoneda() {
  if (azar(0, 1) == 0) {
    return "Cara";
  } else {
    return "Cruz";
  }
}

// console.log(tirarMoneda()) => Cara o Cruz aleatoriamente

////////////////////////
// ejercicio: crear una tirada de dados
////////////////////////

// dentro de una función se puede poner tanto código como sea necesario, y ese codigo se ejecutará cada vez que llamemos
// a la función, en este caso el ejercicio consiste en hacer una función que retorne una tirada de dados al azar,
// es decir que elija al azar un número entre 1 y 6, y compare lo que salió con lo que pongas como parámetro

// ejemplo: tirarDados(5) => si el numero al azar es 5 (el parámetro que elegí),
// deberia poner en la consola "acertaste", de lo contrario "fallaste"
// ejemplo: tirarDados(4) => si el numero al azar es 5 (el parámetro que elegí),
// deberia poner en la consola "acertaste", de lo contrario "fallaste"

// en caso de que la persona ponga un número que sea menor a 1, o mayor a 6 hay que poner una alerta
// y en vez de retornar "acertaste" o "fallaste" debería retornar "Numero incorrecto", ya que los dados tienen solo
// 6 caras
