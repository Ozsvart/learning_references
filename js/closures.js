//Closures
/* A closure gives you access to an outer function's scope from an inner function.*/

// Example no. 1
let first = () => {
  const greet = "Hi";
  let second = () => alert(greet);
  return second;
};

const newFunc = first();
newFunc();

// Example no. 2

let createHelloWorld = () => {
  const greet = "Hello World";
  let second = () => greet;
  return second;
};

const f = createHelloWorld();
console.log(f());

// Example no. 3 - making a counter
let createCounter = (n) => {
  let num = n;
  return () => {
    console.log(num);
    return num++;
  };
};

const counter = createCounter(10);
counter(); // 10
counter(); // 11
counter(); // 12
