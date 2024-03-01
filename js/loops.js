var todos = [
  "brush teeth",
  "clean room",
  "exercise",
  "study javascript",
  "eat healthy",
];

// for loop
/* A for loop repeats until a specified condition evaluates to false.
Syntax:
  for (initialization, condition, afterthought)
  statement
*/
for (var i = 0; i < todos.length; i++) {
  console.log(todos[i] + "!");
}

for (var i = 0; i < todos.length; i++) {
  todos[i] = todos[i] + "!";
}

var todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
  console.log(i);
}

var todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
  todos.pop();
}

// while loop
// A while statement executes its statement as long as
//a specified condition evaluates to true.

/* Syntax:

while(condition)
  statement */

var counterOne = 10;
while (counterOne > 10) {
  console.log("while", counterOne);
  counterOne--;
}

// do while loop
/* A do while statement repeats until a specified condition evaluates to false.
A do while statement looks like:

Syntax: 

do
  statement
while(condition) */

// Statement is always executed once before the condition is checked.

var counterTwo = 10;
do {
  console.log("do while", counterTwo);
  counterTwo--;
} while (counterTwo > 10);
