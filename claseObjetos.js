///////////////////////////
// objetos
//////////////////////////
// los objetos son similares funcionalmente a los array, es decir son basicamente
// conjuntos de elementos, la diferencia es que en los objetos, cada elemento tiene un nombre
// en lugar de guiarse por la posicion que tienen, y ademas, los objetos pueden guardar
// funciones, cosa que los arrays no pueden hacer

//////////////////////
// 1- objetos basicos
//////////////////////

// para crear un objeto, es similar a un array solo que usamos llaves en lugar de parentesis
// rectos, y si bien separamos sus valores con comas, cada valor lleva un nombre

var objeto1 = {
  propiedad1: "valor 1",
  propiedad2: "valor 3"
};

// llamamos a una propiedad del objeto de 2 maneras

// 1- escribiendo nombredelobjeto.nombredelapropiedad
// console.log(objeto1.propiedad1) => valor1

// 2- escribiendo nombredelobjeto[nombredelapropiedadcomostring]
// console.log(objeto1["propiedad1"]) => valor1

// la segunda opcion es especialmente util cuando no tenemos el nombre de la propiedad
// sino que lo tenemos guardado en una variable

var nombre = "propiedad2";
// console.log(objeto1[nombre]) => valor2

// los objetos pueden tener varios niveles igual que un array, y pueden contener tambien arrays
// u otros objetos

var obj2 = {
  propiedad1: "valor 1",
  otroObj: {
    propiedad1: "valor del objeto interno",
    lista: ["Bunny", "Panes", "Carroca"]
  },
  lista: [1, 2, 3, 4]
};

// para acceder al objeto interior, entramos usando .propiedad.propiedad sucesivamente
// console.log(obj2.otroObj.propiedad1) => valor del objeto interno

// para acceder a un array usamos [posicion] igual que en cualquier array
// console.log(obj2.lista[2]) => 3

// de la misma forma podemos entrar a un array, dentro de un objeto dentro de otro objeto
// console.log(obj2.otroObj.lista[0]) => Bunny

// esto funciona siempre de la misma forma

///////////////////////////
// 2- Funciones dentro de objetos
///////////////////////////

var pikachu = {
  nombre: "pikachu",
  saludar: function() {
    console.log("Que andas amigo");
  }
};

// en este caso el objeto pikachu, tiene una propiedad saludar, que en realidad es una funcion
// que muestra su nombre en pantalla, como es una funcion lo que hacemos es llamarla usando
// parentesis, pero primero tenemos que entrar al objeto

// pikachu.saludar() => Que andas amigo

// esto es similar al uso que se le da a console.log(), log() es una funcion del objeto console,
// igual que Math.random() y Math.round() son funciones del objeto Math, que viene por defecto
// en javascript.

///////////////////
// 3- Recorrer objetos
///////////////////

// si un objeto tiene muchas propiedades, podemos usar un bucle for, que funciona ligeramente
// distinto, para recorrer las propiedades de un objeto

var pokemon = {
  nombre: "pikachu",
  tipo: "electrico",
  parientes: ["rata blanca", "ratatouille"]
};

// el uso de for en este caso, es que se ejecuta por cada propiedad dentro del objeto pokemon
// dentro de las llaves, propiedad equivale al nombre de la propiedad que estamos viendo
// actualmente, es decir, en este caso primero valdria como "nombre", luego como "tipo",
// finalmente como "parientes"

for (propiedad in pokemon) {
  // como propiedad es una string, tengo que usar parentesis rectos para mostrar el dato
  console.log(pokemon[propiedad]);
}

// esto muestra =>
// pikachu
// electrico
// [ 'rata blanca', 'ratatouille' ]

////////////////////////////////////////
// 4 - modificar objetos
////////////////////////////////////////
// al igual que los arrays, se pueden agregar propiedades nuevas a los objetos, tantas como queramos, y podemos sobreescribirlas y eliminarlas

var pokemon = {
  nombre: "pikachu",
  tipo: "electrico",
  parientes: ["rata blanca", "ratatouille"]
};

// si le quiero cambiar el nombre al pokemon uso:
pokemon.nombre = "Snorlax";

// console.log(pokemon) =>
//{ nombre: 'Snorlax',
// tipo: 'electrico',
// parientes: [ 'rata blanca', 'ratatouille' ] }

// simplemente se sobreescribe

// si quiero agregar otra propiedad, agrego una que aun no este definida

pokemon.edad = 12;
// console.log(pokemon) =>
//{ nombre: 'Snorlax',
// tipo: 'electrico',
// parientes: [ 'rata blanca', 'ratatouille' ],
// edad: 12 }

// para eliminar una propiedad usamos delete seguido de la propiedad a eliminar, en este caso la edad
delete pokemon.edad;
// console.log(pokemon) =>
//{ nombre: 'Snorlax',
// tipo: 'electrico',
// parientes: [ 'rata blanca', 'ratatouille' ]}

////////////////////////////////
// ejercicio: filtrar personajes del lol
////////////////////////////////

// la idea es hacer un array con 10 personajes o mas, como ya tenes hechos
// solo que el nombre tendria que ir dentro del objeto porque van a ir dentro de un array

// es decir en lugar de:

var Darius = {
  tipo: "Tanque",
  damage: "AD"
};

// seria:

var campeones = [
  {
    nombre: "Darius",
    tipo: "Tanque",
    damage: "AD"
  },
  {
    nombre: "Syndra",
    tipo: "Mago",
    damage: "AP"
  }
];

// una vez tengas el array armado, y todos los campeones tengan las mismas propiedades dentro
// con diferentes valores

// lo que vamos a hacer es crear un array vacio para los resultados, y luego
// recorrer el array con un bucle for comun, de los de la claseBucles

// la idea es agregar al array vacio, unicamente los campeones que sean AD

////////////////////////
// solucion
////////////////////////

// array de campeones
var campeones = [
  {
    nombre: "Darius",
    tipo: "Tanque",
    damage: "AD"
  },
  {
    nombre: "Syndra",
    tipo: "Mago",
    damage: "AP"
  },
  {
    nombre: "Yasuo",
    tipo: "Asesino",
    damage: "AD"
  },
  {
    nombre: "Veigar",
    tipo: "Mago",
    damage: "AP"
  },
  {
    nombre: "Tristana",
    tipo: "Tirador",
    damage: "AD"
  }
];

// array vacio para poner los resultados que cumplan los requisitos
var resultados = [];

for (let i = 0; i < campeones.length; i++) {
  //   si el tipo de damage del campeon
  // que estoy viendo actualmente en el bucle, es ad, lo agrego al
  // array de resultados
  if (campeones[i].damage == "AD") {
    // agrego el campeon a los resultados
    resultados.push(campeones[i]);
  }
  // si esto no es cierto no hago nada, simplemente sigue pasando el bucle
}

// console.log(resultados) =>
// [ { nombre: 'Darius', tipo: 'Tanque', damage: 'AD' },
//   { nombre: 'Yasuo', tipo: 'Asesino', damage: 'AD' },
//   { nombre: 'Tristana', tipo: 'Tirador', damage: 'AD' } ]

// ahora podemos filtrar los objetos de un array por cualquiera de sus propiedades con la condicion que queramos
