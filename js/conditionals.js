// Function Declaration

function checkDriverAge() {
  var age = prompt("What is your age?");
  if (Number(age) < 18) {
    /* The Number() function helps to convert values of other types
    to numbers.*/
    return "Sorry, you are too young to drive this car. Powering off";
  } else if (Number(age) > 18) {
    return "Powering On. Enjoy the ride!";
  } else if (Number(age) === 18) {
    return "Congratulations on your first year of driving. Enjoy the ride!";
  }
}

checkDriverAge();

/* The Number constructor contains constants and methods for working with numbers. */

// Function Expression

var checkDriverAge2 = function () {
  var age = prompt("What is your age?");
  if (Number(age) < 18) {
    return "Sorry, you are too young to drive this car. Powering off";
  } else if (Number(age) > 18) {
    return "Powering On. Enjoy the ride!";
  } else if (Number(age) === 18) {
    return "Congratulations on your first year of driving. Enjoy the ride!";
  }
};

checkDriverAge2();

// console.log instead of prompt, age is a parameter given to the function
function checkDriverAge(age) {
  if (Number(age) < 18) {
    console.log("Sorry, you are too young to drive this car. Powering off");
  } else if (Number(age) > 18) {
    console.log("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
    console.log(
      "Congratulations on your first year of driving. Enjoy the ride!"
    );
  }
}

checkDriverAge();

// Conditional (ternary) operator
/* The only operator that takes three operands: a condition, followed by a question mark, then an expression to execute if the condition is truthy,
followed by a colon and an expression to execute if the condition is falsy.
This operator is frequently used as an alternative to an if...else statement. */
/* falsy: it has a value that equals or can be converted to false. Falsy expressions are: null, NaN, 0, "", undefined.
    truthy: it has a value that equals or can be converted to true */
/* Syntax:
    condition ? expression1 : expression2; */

const answer = isUserValid(true) ? "You may enter" : "Access denied";

//
function isUserValid(bool) {
  return bool;
}

// using if...else statement
function condition() {
  if (isUserValid(true)) {
    return "Your account number is 1234";
  } else {
    return "Your account number is not available";
  }
}

const answer2 = condition();

// using ternary operator

const automatedAnswer =
  "Your account # is " + (isUserValid(false) ? "1234" : "not available");

// conditional chain

function example() {
  return con ? val : con2 ? val2 : con3 ? val3 : val4;
}

// switch statement

function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "You encounter a dragon";
      break;
    case "back":
      whatHappens = "You arrived home";
      break;
    case "right":
      whatHappens = "You found a river";
      break;
    case "left":
      whatHappens = "You saw a little troll";
      break;
    default:
      whatHappens = "Please enter a valid direction";
  }
  return whatHappens;
}
