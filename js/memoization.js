// Memoization
/* A technique used to speed up the execution of recursive or computationally expensive functions
by caching the results of function calls and returning the cached results. */
function square(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result += 1;
    }
  }
  return result;
}

// += is addition assignment. x += y equals to x = x + y

// transforming to using memoization

const preValues = [];

function square(n) {
  if (preValues[n] != null) {
    return preValues[n];
  }
  let result = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result += 1;
    }
  }
  preValues[n] = result;
  return result;
}

// another basic implementation of memoization

const memoize = (fn) => {
  const cache = new Map();
  return (value) => {
    const cachedResult = cache.get(value);
    if (cachedResult !== undefined) return cachedResult;
    const result = fn(value);
    cache.set(value, result);
    return result;
  };
};

// Get a number from the Fibonacci Sequence

function fib(n, preValue = []) {
  if (preValue[n] != null) {
    return preValue[n];
  }
  let result;
  if (n <= 2) {
    result = 1;
  } else {
    result = fib(n - 1, preValue) + fib(n - 2, preValue);
  }
  preValue[n] = result;
  return result;
}

console.log(fib(4));
