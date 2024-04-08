//***************************************************************************************************/
//                                       Operators
//***************************************************************************************************/

//Arithmetic operators
let num1 = 5;
let num2 = 10;

//Addition (+): Adds two operands.
console.log(num1 + num2);

//Subtraction (-): Subtract the second operand from the first one.
console.log(num1 - num2);

//Multiplication (*): Multiplies two operands.
console.log(num1 * num2);

//Division (/): Divides the first number by the second number. It returns a decimal value if the divisor is not zero.
//Division (/): Divides the first number by the second number. It returns a decimal value if the divisor is not zero.
//Division (/): Divides the first number by the second number. If there is a remainder it will be discarded and only the integer
//Division (/): Divides the first number by the second number. It returns a floating point value if there is a decimal part in the
//Division (/): Divides the first number by the second number. It returns a floating-point value.
console.log(num1 / num2);

//Modulus (%): Returns the remainder left after dividing the first number by the second number.
console.log(num1 % num2);

//Increment and Decrement operators
let counter = 3;

//Postfix increment operator (++x): Increments the value of x by  1 and then returns the new value.
counter++;
console.log("postfix:", counter);

//Prefix increment operator ++x : Increments the value of x by 1 and then returns the new value.
console.log("prefix: ", ++counter);

counter = 3;

//Postfix decrement operator (--x): Decreases the value of x by 1 and then returns the new value.
counter--;
console.log("postfix:", counter);

//Prefix decrement operator --x : Decreases the value of x by 1 and then returns the new value.
console.log("prefix: ", --counter);

/* Equality operators */
let a = 5,
  b = 4;
if (a == b) {
  console.log("Equal");
} else {
  console.log("Not equal");
}

if (a != b) {
  console.log("Not equal");
} else {
  console.log("Equal");
}

if (a === b) {
  console.log("Identical");
} else {
  console.log("Not identical");
}

if (a !== b) {
  console.log("Not identical");
} else {
  console.log("Identical");
}

/* Logical Operators AND & OR*/
let x = true,
  y = false;

if (x && y) {
  console.log(true); //False
} else {
  console.log(false);
}

if (!x || !y) {
  console.log(true); //True
} else {
  console.log(false);
}
