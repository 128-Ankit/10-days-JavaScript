//***************************************************************************************************/
//                                     Normal Functions
//***************************************************************************************************/

// Functions declaration
function showMsg() {
  console.log("This is a message from the JavaScript code.");
}

//calling a function
console.log("Before calling the function...");
showMsg();
// showMsg();
// showMsg();

function name(parameter1, parameter2, ...parameterN) {
  // body
}

//Local variables
// A variable declared inside a function is only visible inside that function.
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  console.log(message);
}

showMessage(); // Hello, I'm JavaScript!

//console.log( message ); // <-- Error! The variable is local to the function

// Global variables
// A function can access an Global variable as well, for example:
let x = 5;

function addXAndY() {
  let y = 7;
  console.log(x + y);
}
addXAndY();

let userName = "John";
function showMessage2() {
  userName = "Bob"; // (1) changed the outer variable

  let message = "Hello, " + userName;
  console.log(message);
}

console.log(userName); // John before the function call

showMessage2();

console.log(userName); // Bob, the value was modified by the function

// Parameters
// We can pass arbitrary data to functions using parameters.
function parameter1(num1, num2) {
  console.log(num1 + num2);
}
let a = 10,
  b = 50;
parameter1(2, 3); // Outputs 5
parameter1(a, b); // Outputs 60

function parameter2(from, text) {
  from = "111" + from + "222";
  console.log(from + ": " + text);
}

let from = "raju";
parameter2(from, "kaise ho");

// Returning a value
// A function can return a value back into the calling code as the result.

function addTwoNum(num1, num2) {
  return num1 + num2;
}
const res = addTwoNum(4, 7); // Returns 11
console.log(res);

//eg
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return console.log("Do you have permission from your parents?");
  }
}

let age = 8;

if (checkAge(age)) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// examples
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i); // a prime
  }
}

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i); // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}


//***************************************************************************************************/
//                                     Arrow Functions
//***************************************************************************************************/

const newFun = () => {
    console.log("this is arrow function nothing change only syntax");
}
newFun();

const addNumbers = (a, b) => a + b;
console.log(addNumbers(5,7));
 

//***************************************************************************************************/