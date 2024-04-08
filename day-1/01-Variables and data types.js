//***************************************************************************************************/
//                                       Variables
//***************************************************************************************************/
// three types of variable : Let, var and const in js
let My_name = "John"; //can be change
var age = 25;//can be change
const country = "USA"; //can not be change

console.log(My_name);
console.log(age);
console.log(country);

//changing the value 
My_name = "Ankit Pathak";
age = 19;
country = "INDIA";

console.log("After Changes");
console.log(My_name);
console.log(age);
console.log(country);

//***************************************************************************************************/
//                                       Data Types
//***************************************************************************************************/
// data type string
let myName = "John Doe";
console.log(typeof myName); // output: string

myName = 'Jane Smith';
console.log(myName);

// data type number
let x = 17;
console.log(typeof x); // output: number

x = Math.PI;
console.log(typeof x); // output: number

x = "17";
console.log(typeof x); // output: string

// convert string to number using parseInt() function
x = parseInt("17");
console.log(typeof x); // output: number

// convert string to a boolean value (true/false) using Boolean() function
x = Boolean("0");
console.log(typeof x); // output: boolean
console.log(x);        // output: false

x = Boolean("Hello World!");
console.log(typeof x); // output: boolean
console.log(x);        // output: true

// null & undefined
let nulVal = null;
let undefVal = undefined;

console.log(nulVal === undefVal);   // output: false 

