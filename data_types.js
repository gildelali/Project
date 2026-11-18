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
const sum = num1 + num2 + Number(num3);
// convert "2" to 2, otherwise + joins them as text ("2.162")

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

// Array (lists).
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple
console.log(fruits.length); // 3

fruits.push("Orange"); // add Orange to the end of the array
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

// Array (friends)
const friends = ["Alice", "Bob", "Charlie"];

console.log(friends[1]); // Bob
console.log(friends.length); // 3

friends.push("David"); // add David to the end of the array
console.log(friends); // ["Alice", "Bob", "Charlie", "David"]

// Get the LAST friend using .length
// Positions:  0        1      2          3
//          "Alice", "Bob", "Charlie", "David"
// friends.length is 4, but the last position is 3
// so the last position is always: length - 1
const lastFriend = friends[friends.length - 1];
console.log(lastFriend); // David

// Why this is better than friends[3]:
// if we add another name, the same line still finds the new last one
friends.push("Emma");
console.log(friends[friends.length - 1]); // Emma

// Object
const person = {
  name: "Gilbert",
  age: 25,
  isStudent: true,
};

// 1. READ a value: use a dot
console.log(person.name); // Gilbert
console.log(person.age); // 25

// 2. CHANGE a value
person.age = 26;
console.log(person.age); // 26

// 3. ADD a new property
person.city = "Accra";
console.log(person); // now has name, age, isStudent, and city

// 4. USE it in a sentence (template string)
console.log(
  `${person.name} is ${person.age} years old and lives in ${person.city}.`,
); // Gilbert is 26 years old and lives in Accra.

// My turn

// Object
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  isElectric: true,
};

// 1. READ a value: use a dot
console.log(car.make); // Toyota
console.log(car.model); // Camry

// 2. CHANGE a value
car.year = 2021;
console.log(car.year); // 2021

// 3. ADD a new property
car.color = "Black and silver";
console.log(car); // now has make, model, year, isElectric, and color

// 4. USE it in a sentence (template string)
console.log(
  `My ${car.make} ${car.model} is a ${car.year} model and is ${car.isElectric ? "electric" : "not electric"}. It comes in ${car.color}.`,
);
