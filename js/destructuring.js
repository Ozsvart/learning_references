//Destructuring

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

//Object destructuring

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
    console.log(personThree); */
  
  function printUser({ name, age, favoriteFood = "watermelon" }) {
    console.log(`Name is ${name}. Age is ${age}. Food is ${favoriteFood}.`);
  }
  
  printUser(personOne);
  
  const personThree = { ...personOne, ...personTwo };
  
  console.log(personThree);

// Destructuring arrays
const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = [1, 2, 3, 4, 5, 6];

const a = alphabet[0]
const b = alphabet[1]

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

function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

const [sum, multiply, division = "No division"] = sumAndMultiply(2, 3);
console.log(sum);
console.log(multiply);
console.log(division);


