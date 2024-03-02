const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

//filter
/* Returns a new array containing all the elements of the calling array
for which the provided filtering function returns true. */

const filteredItems = items.filter((item) => {
  return item.price < 100;
});

console.log(filteredItems);

// another filter
const filteredNames = items.filter((item) => item.name.length > 4)

console.log(filteredNames)

// filter implemented

/*  Parameters:
      cb:
        A function to execute for each element in the array.
          element:
            The current element being processed in the array.
          index:
            The index of the current element being processed in the array.
          array:
            The array filter() was called upon.
      thisArg:
        A value to use as this when executing cb.

    Return value:
      A shallow copy of the given array
      containing just the elements that pass the test.
      */

function filter(array, cb) {
  const newArray = [];
  for (let i = 0; i < array.length; i++);
  {
    const element = array[i];
    if (cb(element, i, array)) newArray.push(element);
  }
  return newArray;
}

// map
// Returns a new array containing the result of invoking a function
// on every element in the calling array.

const itemNames = items.map((item) => {
  return item.name;
});

console.log(itemNames);

const itemPrice = items.map((item) => {
  return item.price;
});

console.log(itemPrice);

// using map to reformat objects in an array

const reformattedItems = items.map(({name, price}) => ({[name]: price}))

console.log(reformattedItems)

// map implementation

// Return value:
//  A new array with each element being the result of the callback function.

function map(array, cb) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i], i, array));
  }
}

//reduce
// Executes a user supplied "reducer" callback function on each element of the array
//(from left to right), to reduce it to a single value.

const total = items.reduce((currentTotal, item) => {
  return currentTotal + item.price;
}, 0);
console.log(total);

// The accumulator ( in this case currentTotal) is the value resulting from the previous call to cb function.
// On the first call, its value is initialValue.
// If initialvalue is specified, cb starts executing with the first value in the array as currentValue.
// If initialvalue is not specified, accumulator is initialized to the first value in the array, and cb starts executing with the second value in the array as currentValue.


//another reduce example

const items = [
  { name: "Rice", price: 5 },
  { name: "Book", price: 20 },
  { name: "Chicken", price: 10 },
  { name: "Monitor", price: 100 },
];

let totalPrice = items.reduce((accumulator, item) => {
  return accumulator + item.price;
}, 0);

console.log(totalPrice);

//one more reduce example

const people = [
  { name: "Kyle", age: 26 },
  { name: "John", age: 31 },
  { name: "Sally", age: 42 },
  { name: "Jill", age: 42 },
];

const result = people.reduce((groupedPeople, person) => {
  const age = person.age;
  if (groupedPeople[age] == null) groupedPeople[age] = [];
  groupedPeople[age].push(person);
  return groupedPeople;
}, {});

console.log(result);

// reduce implementation

function reduce(array, cb, initialValue) 
const currentValue = initialValue;
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (initialValue = null && i === 0) {
    currentValue = element
  } else {
    currentValue = cb(currentValue, element, i, array)
  }
  return currentValue
}

// find
const foundItem = items.find((item) => {
  return item.name === "Book";
});

console.log(foundItem);

//forEach
items.forEach((item) => {
  console.log(item.name);
});

//includes

const items2 = [1, 2, 3, 4, 5];

const includesTwo = items.includes(2);

console.log(includesTwo);

//every
const inexpensiveItems2 = items.every((item) => {
  return item.price <= 100;
});
console.log(inexpensiveItems2);

//some

const inexpensiveItems = items.some((item) => {
  return item.price <= 100;
});
console.log(inexpensiveItems);



