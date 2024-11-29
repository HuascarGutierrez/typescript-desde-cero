// string 

// comillas dobles
const str1: string = "Hello, I'm a string with comillas dobles."
//comillas simples 
const str2: string = 'Hello, Im a string with comillas dobles.'

//template literals (bakcticks)
const myName: string = 'Juan';
const age: number = 30;

const str3: string = `Hi, My name is ${myName}, I'm ${age} years old.`;

console.log(str3);

//numbers

//numeros enteros
const num1: number = 10;
//notacion exponencial
const num2: number = 3e8;
//notacion exponencial negativa
const num3: number = 5e-1;
//hexadecimales
const num4: number = 0xA;
//octales
const num5: number = 0o12;
//binarios
const num6: number = 0b101011;

//boleans

//valor booleano true
const bool1: boolean = true;
//valor booleano false
const bool2: boolean = false;

//undefined 

//declaracion de una variable con valor undefined 
let variableUndefined: undefined;
//asignacion de valor undefined
variableUndefined = undefined;

//NULL 

//Declaracion de una variable con valor null
let variableNull: null;
//asignacion de valor null
variableNull = null; 

//ARRAY

//arregle de numeros
const numeros: number[] = [1,2,3,4,5];
//arreglo de cadenas de texto
const nombres: string[] = ['juan','maria','pedro'];
//arreglo de booleanos
const valoresBool: boolean[] = [true, false, true];


//ENUM

//definicion de un enum para dias de la semana
enum DiasSemana {
    Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo,
}

//enum con valores de cadena 
enum Colores {
    rojo = "rojo",
    verde = 'verde',
    azul = 'azul', 
}

//functions

//declaracion de funcion con tipado explicito
function sumar(a: number, b: number): number {
    return a+b; 
}
//funciones flecha con retorno implicito (inferido por typescript)
const dividir = (a: number, b: number) => a/b
//funciones con parametros opcionales
function saludar(nombre:string, edad?:number):string {
    return edad !== undefined ? `Hello, my name is ${nombre} y I'm ${edad} years old.`:
    `Hello, my name is ${name}.`;
}
//funciones con parametros por defecto
function saludar_por_defecto(nombre: string, edad:number = 30):string {
    return `Hi, my name is ${nombre} and I'm ${edad} years old  `
}

//clases

class Person {
    nombre: string;

    constructor(nombre: string){
        this.nombre = nombre;
    }

    saludar(){
        alert(`Hi, my name is: ${this.nombre}.`)
        console.log('hola')
    }
}

//interfaces 

//interface basica
interface Persona {
    nombre: string;
    edad: number;
}
//interface con propiedades opcioonales 
interface Producto {
    nombre: string;
    precio: number;
    descripcion?: string;
}
//interface para funciones
interface Comparador{
    (a: number, b: number): boolean;
}
//interface para clases 
interface Persona {
    nombre: string;
    edad: number;
    saludar(): void;
}

//type
type Numero = number

const numeroDiferente: Numero = 0