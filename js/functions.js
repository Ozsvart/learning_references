// Functions

function print(value) {
  console.log(value);
}

print("Hello World!");

/* If you check console.dir(print), you will find that a function in JS is merely like an object.
A function is just like an object, except you can call it with a parenthesis, and you can pass different parameters to it. */

// Callback function
/* A callback function is a function passed into another function as an argument, which is then invoked inside the outer function. */
function useCallback(cb) {
  cb("Hello");
}

useCallback(print);
/* The above example is equal to
 
 const cb = print
 cb("Hello")
 */

// with arrow function

useCallback((value) => console.log(value));

// Converting normal functions to arrow functions

// Named function with two parameters
function sum(a, b) {
  return a + b;
}

let sum2 = (a, b) => a + b; // In this way everything after the arrow is supposed to be returned.

// Named function with one parameter
function isPositive(number) {
  return number >= 0;
}

let isPositive2 = (number) => number >= 0; // If there is only one parameter, the brackets can be removed.

// Named function with no parameters
function randomNumber() {
  return Math.random;
}

let randomNumber2 = () => Math.random;

// Anonymous function
/* This is the place where anonymous function really shine. */
document.addEventListener("click", function () {
  console.log("Click!");
});

document.addEventListener("click", () => console.log("Click!"));

/* Arrow functions redefine the .this keyword. */

class Person {
  constructor(name) {
    this.name = name;
  }
  printNameArrow() {
    setTimeout(() => {
      console.log("Arrow: " + this.name);
    }, 1000);
  }

  printNameFunction() {
    setTimeout(function () {
      console.log("Function: " + this.name);
    }, 1000);
  }
}

let someone = new Person("Bob");
someone.printNameArrow();
someone.printNameFunction();

//
function printPerson(cb) {
  console.log(cb);
}

const person = { name: "Kyle" };

printPerson(person.name);
/* Arrow function prints out the name, but normal function doesn't print out anything.
A normal function redefines this according to the scope, arrow function doesn't redefine this.*/

// A signin function

const database = [
  { username: "Viki", password: "123" },
  { username: "Panír", password: "Panka" },
  { username: "Csuszka", password: "Csuszmó" },
  { username: "Márk", password: "baba" },
  { username: "Andris", password: "mentor" },
];

const newsFeed = [
  { username: "Bobby", timeline: "So tired from all this learning" },
  { username: "Sally", timeline: "Javascript is so cool!" },
  { username: "Mitch", timeline: "Javascript is pretty cool!" },
];

let usernamePrompt = prompt("What is your username?");
let passwordPrompt = prompt("What is your password?");

function isUserValid(username, password) {
  for (let i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
      /* You access an array element by referring to the index number.
      Array indexes start with 0.
      The length property is always one more than the highest array index.*/
    ) {
      return true;
    }
  }
}

/* The for statement creates a loop that consists of three optional expressions,
followed by a statement to be executed in the loop.
Syntax:
  for (initialization, condition, afterthought)
  statement
*/
/* An example:
let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// Expected output: "012345678"
*/

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Sorry,wrong username or password!");
  }
}

signIn(usernamePrompt, passwordPrompt);
