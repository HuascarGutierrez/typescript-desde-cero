"use strict";
// string 
// comillas dobles
const str1 = "Hello, I'm a string with comillas dobles.";
//comillas simples 
const str2 = 'Hello, Im a string with comillas dobles.';
//template literals (bakcticks)
const myName = 'Juan';
const age = 30;
const str3 = `Hi, My name is ${myName}, I'm ${age} years old.`;
console.log(str3);
//numbers
//numeros enteros
const num1 = 10;
//notacion exponencial
const num2 = 3e8;
//notacion exponencial negativa
const num3 = 5e-1;
//hexadecimales
const num4 = 0xA;
//octales
const num5 = 0o12;
//binarios
const num6 = 0b101011;
//boleans
//valor booleano true
const bool1 = true;
//valor booleano false
const bool2 = false;
//undefined 
//declaracion de una variable con valor undefined 
let variableUndefined;
//asignacion de valor undefined
variableUndefined = undefined;
//NULL 
//Declaracion de una variable con valor null
let variableNull;
//asignacion de valor null
variableNull = null;
//ARRAY
//arregle de numeros
const numeros = [1, 2, 3, 4, 5];
//arreglo de cadenas de texto
const nombres = ['juan', 'maria', 'pedro'];
//arreglo de booleanos
const valoresBool = [true, false, true];
//ENUM
//definicion de un enum para dias de la semana
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Lunes"] = 0] = "Lunes";
    DiasSemana[DiasSemana["Martes"] = 1] = "Martes";
    DiasSemana[DiasSemana["Miercoles"] = 2] = "Miercoles";
    DiasSemana[DiasSemana["Jueves"] = 3] = "Jueves";
    DiasSemana[DiasSemana["Viernes"] = 4] = "Viernes";
    DiasSemana[DiasSemana["Sabado"] = 5] = "Sabado";
    DiasSemana[DiasSemana["Domingo"] = 6] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
//enum con valores de cadena 
var Colores;
(function (Colores) {
    Colores["rojo"] = "rojo";
    Colores["verde"] = "verde";
    Colores["azul"] = "azul";
})(Colores || (Colores = {}));
//functions
//declaracion de funcion con tipado explicito
function sumar(a, b) {
    return a + b;
}
//funciones flecha con retorno implicito (inferido por typescript)
const dividir = (a, b) => a / b;
//funciones con parametros opcionales
function saludar(nombre, edad) {
    return edad !== undefined ? `Hello, my name is ${nombre} y I'm ${edad} years old.` :
        `Hello, my name is ${name}.`;
}
//funciones con parametros por defecto
function saludar_por_defecto(nombre, edad = 30) {
    return `Hi, my name is ${nombre} and I'm ${edad} years old  `;
}
//clases
class Person {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        alert(`Hi, my name is: ${this.nombre}.`);
        console.log('hola');
    }
}
const numeroDiferente = 0;
