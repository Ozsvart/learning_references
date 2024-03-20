//Currying
/* Currying is the process of converting a function that takes multiple arguments
into a series of functions that take one argument each.
The function is transformed into a sequence of functions, and each function returns another function, until the final result is achieved. */
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4);
const multiplyBy5 = curriedMultiply(5);

multiplyBy5(5); // it will equal 25

/* Currying works well with function composition,
allowing you to create pipelines of functions that transform data step by step. */
