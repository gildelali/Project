// Variables
/**
 * Global Variable
 */
var num = 10;

// console.log(num);

/**
 * Block-scoped Variables (let can change, const cannot)
 */

let name = "Gilbert";

const PI = 3.14;

/**
 * Types of Data
 */

// String (text)
let greet = "Hello, my friend!";
const friend = "Mikel";

let message = greet + " " + friend;

const template = `Greet ${greet} ${friend}`;

console.log(message);
console.log(template);

//Number

let num1 = 1;
let num2 = 1.16;
let num3 = "2"; // the value of num3 is a string, not a number
const sum = num1 + num2 + Number(num3); // convert "2" to 2, otherwise + joins them as text ("2.162")

console.log(sum);
console.log(NaN); // Not a Number
console.log(undefined + 5); // undefined + 5 = NaN

//Boolean

const isTrue = true;
const isFalse = false;

//Null

const isNull = null;

//Undefined

const isUndefined = undefined;

/**
 * Composite Data
 */
