//***************************************************************************************************/
//                                       Control Flow
//***************************************************************************************************/

//Conditional Statements: if, else if and switch statements.
//if statement
let temperature = 25;

if (temperature > 30) {
    console.log("It's a hot day!");
}

//if-else statement
let x = 10;

if(x < 5){
   console.log('Small');
} else{
   console.log('Big');
}

//else if can be used instead of multiple if-else blocks to make the code more readable.

//switch statement
let dayOfWeek = 'Tuesday';

switch(dayOfWeek) {
    case 'Monday':
        console.log('Starting week!');
        break;
    case 'Tuesday':
        console.log('Tuesday is coming!');
        break;
    default:
        console.log('What day is it?')
}

/****************************************************************************************************/
/*                                         Loops                                                                                                      */
/****************************************************************************************************/
//for Loop
/* A for loop is used when you know how many times you want to execute a block of code. */

for (let i=0; i<5; i++) {
    console.log(`This is line number ${i+1}`);
}

//while loop
var i = 0;
while (i < 5) {
    console.log("Iteration " + (i + 1));
    i++;
}

//do-while loop
var i = 0;
do {
    console.log("Iteration " + (i + 1));
    i++;
} while (i < 5);
var person = {name: "John", age: 30, city: "New York"};
for (var key in person) {
    console.log(key + ": " + person[key]);
}

//for...in Loop:
var colors = ["red", "green", "blue"];
for (var color of colors) {
    console.log(color);
}
for (var i = 0; i < 5; i++) {
    if (i === 3) {
        break; // terminate the loop when i equals 3
    }
    console.log("Iteration " + (i + 1));
}

for (var i = 0; i < 5; i++) {
    if (i === 3) {
        continue; // skip the iteration when i equals 3
    }
    console.log("Iteration " + (i + 1));
}
