// Declaration

function checkDriverAge() {
  var age = prompt("What is your age?");
  if (Number(age) < 18) {
    return "Sorry, you are too young to drive this car. Powering off";
  } else if (Number(age) > 18) {
    return "Powering On. Enjoy the ride!";
  } else if (Number(age) === 18) {
    return "Congratulations on your first year of driving. Enjoy the ride!";
  }
}

checkDriverAge();

// Expression

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
