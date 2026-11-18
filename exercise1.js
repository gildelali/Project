"use strict";

/**
 * EJERCICIO 1: Crea tus datos personales
 *
 * Crea una variable para cada uno de estos datos:
 * - Tu nombre, como string.
 * - Tu edad, como number.
 * - Si eres estudiante, como boolean.
 *
 * Muestra el valor y el tipo de cada variable en la consola.
 * Puedes comprobar el tipo con typeof.
 */

// TODO: Escribe aquí la solución del ejercicio 1.

/**
 * EJERCICIO 2: Describe un producto
 *
 * Crea las variables nombreProducto, precio y disponible utilizando
 * los tipos string, number y boolean.
 *
 * Después, crea una frase con una plantilla literal que muestre toda
 * la información del producto e imprímela en la consola.
 */

// TODO: Escribe aquí la solución del ejercicio 2.

/**
 * EJERCICIO 3: Practica con null y undefined
 *
 * Crea una variable llamada proximaClase con el valor null.
 * Crea otra variable llamada nota sin asignarle ningún valor.
 *
 * Muestra en la consola el valor y el tipo de ambas variables.
 * Finalmente, asigna valores nuevos y vuelve a mostrarlas.
 */

// TODO: Escribe aquí la solución del ejercicio 3.

// Ejercicio 1: Crea tus datos personales
let nombre = "Gilbert";
let edad = 26;
let esEstudiante = true;

console.log("Nombre:", nombre, "Tipo:", typeof nombre);
console.log("Edad:", edad, "Tipo:", typeof edad);
console.log("Es estudiante:", esEstudiante, "Tipo:", typeof esEstudiante);

// Ejercicio 2: Describe un producto
let nombreProducto = "MacBook Pro M5";
let precio = 3349.99;
let disponible = true;

let descripcionProducto = `Producto: ${nombreProducto}, Precio: $${precio}, Disponible: ${disponible}`;
console.log(descripcionProducto);
