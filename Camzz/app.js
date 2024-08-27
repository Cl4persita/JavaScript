'use strict';

//variables const var let
/* //tipos
const texto =
 '5+5' //todo lo que este entre comillas simples o docles es un texto

const number = 5 + 5

const booleana = true //true false null

console.log(texto)
console.log(number)
console.log(booleana)

const QueNuncaCambia = 'constante'
console.log(QueNuncaCambia)

var SiCambia = 'esta si cambia'

if (booleana) {
 SiCambia = 'otra cosa'

 let SiCambiaPeroSoloDentroDe =
  'si cambia  perosolo existe dentro de la funcion que se crea'
}
console.log(SiCambia)

//console.log(SiCambiaPeroSoloDentroDe)

//incluir una variable dentro de otra variable

const nombre = 'Mafe'
var edad = 15
const sexo = 'mujer'
var EstadoCivil = 'soltera'

var presentacion = `Hola mi nombre es ${nombre} tengo ${edad} años de edad, me identifico como una ${sexo} y mi estado civil es ${EstadoCivil}`

console.log(presentacion) */

//interacciones
/* alert(`alerta de texto con ${5 + 5} y todo tipo de variables`)

result  = promt(titulo, )
 */
/* // Operador &&
let edad = 16;
let plata = false;
let study = false;

if (edad >= 18 && plata) {
  console.log('Eso papuu');
} else {
  console.log('Nanai Cucas');
}

if (plata || study) {
  console.log('Olee Olee');
} else {
  console.log('NADAAA');
}

if (edad !== 19) {
  console.log('Si es diferente');
}


// Operador ??
let estatura = 160;
let plat = true;
console.log(estatura ?? plat ?? '170 cm');


// Operador ternario
console.log(estatura >= 170 ? 'Aguanta papuu' : 'No agt');


// Bucles
let estudiantes = 0;
while (estudiantes <= 24) {
  console.log(`Llamado a lista de alumno número ${estudiantes}`);
  estudiantes++;
}

let estudiantes2 = 24;
for (let i = 0; i < estudiantes2; i++) {
  console.log(`Asistencia de estudiantes número ${i}`);
}

let mercados = ['manzanas', 'bananos', 'peras', 'sandia', 'papa', 'papaya', 'piña'];
mercados.forEach((mercado) => {
  console.log(mercado);
});

let estudiantes3 = ['Juancho', 'Julius', 'Mafecita', 'cadenita', 'Brownie'];
estudiantes3.forEach((estudiante) => {
  console.log(estudiante);
});


// Switch
let s = 4 + 4;
switch (s) {
  case 3:
    console.log('No eres el resultado');
    break;
  case 5:
    console.log('Ya casiii');
    break;
  case 8:
    console.log('Si ese es el resultado');
    break;
  default:
    console.log('No se encontró el resultado');
}


// 2,15
let novia = 'Sarita';

function showMessage() {
  let message = 'Hola, ' + novia;
  alert(message);
}
showMessage();

function saludar(nombre, edad) {
  alert("Hola, " + nombre + ". Tienes " + edad + " años.");
}

saludar("Sarita", 15);


// 2,16
function Mafecita() {
  alert("Hola papuu");
}

let funct = Mafecita;

Mafecita();
funct();

function sayHi(name) {
  alert(`Hola mi chakalita, ${name}`);
}

sayHi("Sarita");


// 2,17
let sum = (a, b) => a + b;

alert(sum(99, 11)); */


//3,1
function calcularAlgo() {
  let x = 10;
  let y = 20;
  debugger; 
  let resultado = x + y;
  return resultado;
}


// 3,3
 function showPrimes(n) {
  nextPrime:
  for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    alert(i);
  }
}

showPrimes(100); 
 

//3,4
let mensaje = (edad >= 18) ? "Adulto" : (edad >= 13) ? "Adolescente" : "Niño"; 


//3,5
 describe("pow", function() {

  it("eleva a la n-ésima potencia", function() {
    assert.equal(pow(2, 3), 8);
  });

});


//3,6
height = height ?? 100;

height = (height !== undefined && height !== null) ? height : 100;

if (!Math.trunc) { 
  
  Math.trunc = function(number) {
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
} 


//4,1
/* let user = {
  name: "Sarita",
  Age: "15"
};

let key = prompt("Que te gustaria saber sobre mi bebecita?", "name");

 alert( user.key );
 */


//4,2
/* let objeto1 = { nombre: "Camz" };
let objeto2 = objeto1; 

objeto2.nombre = "Camilito";
console.log(objeto1.nombre); 

let objeto3 = { ...objeto1 };
objeto3.nombre = "Sarita";

console.log(objeto1.nombre); 
console.log(objeto3.nombre); 
 */


//4,3
// let objeto = { nombre: "Papuu" };
// objeto = null; 


//4,4
/* let usuario = {
  nombre: "Saris",
  saludar() {
      console.log(`Hola, soy ${this.nombre}`);
  }
};
usuario.saludar(); // " */


//4,5
/* function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}
let persona1 = new Persona("Laura", 28);
console.log(persona1.nombre);  */


//4.6
/* let usuario = {
  direccion: {
      ciudad: "Bogotá"
  }
};
console.log(usuario.direccion?.ciudad); 
console.log(usuario.contacto?.telefono); */


//4,7
/* let id = Symbol("id");
let usuario = {
    nombre: "Ana",
    [id]: 123 
};

console.log(usuario[id]); 
 


//4,8
/* let objeto = {
  valor: 10,
  toString() {
      return `Valor: ${this.valor}`;
  },
  valueOf() {
      return this.valor;
  }
};
console.log(objeto + 5); 
console.log(String(objeto));  


//5,0
/* let numero = 42; // number
let texto = "Hola"; // string
let booleano = true; // boolean
let indefinido; // undefined
let nulo = null; // null
let simbolo = Symbol("simbolo"); // symbol
let objeto = { nombre: "Luis" }; // object
 */


//5,1
let textoo = "hola mundo";
console.log(textoo.toUpperCase());  


//5,2
 let numero = 123.456;
console.log(numero.toFixed(2)); 
console.log(Number("123"));  


//5,3
 let texto = "JavaScript";
console.log(texto.length); 
console.log(texto.includes("Script"));  


//5,4
 let frutas = ["Manzana", "Banana", "Cereza"];
console.log(frutas[1]); 
 

//5,5
 let numeros = [1, 2, 3, 4];
let cuadrados = numeros.map(n => n * n);
console.log(cuadrados); 


//5,6
 let iterable = [10, 20, 30];
for (let valor of iterable) {
    console.log(valor); 
}
 

//5,7
let mapa = new Map();
mapa.set("nombre", "Pedro");
console.log(mapa.get("nombre")); 
let conjunto = new Set([1, 2, 3, 3]);
console.log(conjunto.size);  


//5,8
 let weakMapa = new WeakMap();
let obj = {};
weakMapa.set(obj, "valor")
console.log(weakMapa.get(obj)); 

let weakConjunto = new WeakSet();
let objetoo = {};
weakConjunto.add(objetoo);
console.log(weakConjunto.has(objetoo));  


//5,9
 let objeto = { nombre: "Luis", edad: 30 };
console.log(Object.keys(objeto)); 
console.log(Object.values(objeto));
console.log(Object.entries(objeto));  


//5,10
let usuarioo = { nombre: "Juan", edad: 25 };
let { nombre, edad } = usuarioo;
console.log(nombre); 
console.log(edad); 
 

 let user = {
  name: "Camilito",
  age: 16
};

for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); 
} 


//5,11
 let ahora = new Date();
console.log(ahora.toLocaleString());  


//5,12
let usuario = {
  nombre: "Potaxie",
  edad: 99,
  toJSON() {
      return { nombre: this.nombre };
  }
};

let json = JSON.stringify(usuario);
console.log(json); 





