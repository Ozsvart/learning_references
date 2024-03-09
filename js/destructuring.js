//Destructuring
/* The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.*/
/* Syntax:
        const [a, b] = array;
        const [a, , b] = array;
        const [a = aDefault, b] = array;
        const [a, b, ...rest] = array;
        const [a, , b, ...rest] = array;
        const [a, b, ...{ pop, push }] = array;
        const [a, b, ...[c, d]] = array;

        const { a, b } = obj;
        const { a: a1, b: b1 } = obj;
        const { a: a1 = aDefault, b = bDefault } = obj;
        const { a, b, ...rest } = obj;
        const { a: a1, b: b1, ...rest } = obj;
        const { [key]: a } = obj;

        let a, b, a1, b1, c, d, rest, pop, push;
        [a, b] = array;
        [a, , b] = array;
        [a = aDefault, b] = array;
        [a, b, ...rest] = array;
        [a, , b, ...rest] = array;
        [a, b, ...{ pop, push }] = array;
        [a, b, ...[c, d]] = array;

        ({ a, b } = obj); // parentheses are required
        ({ a: a1, b: b1 } = obj);
        ({ a: a1 = aDefault, b = bDefault } = obj);
        ({ a, b, ...rest } = obj);
        ({ a: a1, b: b1, ...rest } = obj);
*/

const obj = {
  player: "Bobby",
  experience: 100,
  wizardLevel: false,
};

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj;
let wizardLevel = obj;

// Destructuring arrays
const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = [1, 2, 3, 4, 5, 6];

const a = alphabet[0];
const b = alphabet[1];

const [a, , c] = alphabet;

console.log(a);
console.log(c);

// Spread operator
const [a, , c, ...rest] = alphabet;
console.log(a);
console.log(c);
console.log(rest);

const newArray = [...alphabet, ...numbers];
//same as concat, i.e. alphabet.concat(numbers)
console.log(newArray);

//
const personOne = {
  name: "Kyle",
  age: 24,
  address: {
    city: "Somewhere",
    state: "One of them",
  },
};

const personTwo = {
  name: "Sally",
  age: 32,
  address: {
    city: "Somewhere else",
    state: "Another one of them",
  },
  favoriteFood: "watermelon",
};

const {
  name,
  age,
  favoriteFood = "Rice",
  address: { city },
} = personTwo;
console.log(name);
console.log(age);
console.log(favoriteFood);
console.log(city);

const { name: firstName, ...rest } = personOne;
console.log(rest);

const personThree = { ...personOne, ...personTwo };
console.log(personThree);

function printUser({ name, age, favoriteFood = "watermelon" }) {
  console.log(`Name is ${name}. Age is ${age}. Food is ${favoriteFood}.`);
}

printUser(personOne);

const personThree = { ...personOne, ...personTwo };

console.log(personThree);

//
function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

const [sum, multiply, division = "No division"] = sumAndMultiply(2, 3);
console.log(sum);
console.log(multiply);
console.log(division);
