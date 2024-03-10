//Recursion
// A recursive function calls itself inside the function. The base conditions breaks out of the loop.
// Count down with a loop
function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log("Hooray!");
}

// In a recursive function instead of a loop we call the same function over and over.

function countDownRecursive(n) {
  if (n <= 0) {
    console.log("Hooray!");
    return;
  }
  console.log(n);
  countDownRecursive(n - 1);
}

// An other example with loop
function sumRange(n) {
  let total = 0;
  for (let i = n; i > 0; i--) {
    total += i;
  }
  return total;
}

// And with recursive function

function sumRangeRecursive(n, total = 0) {
  if (n <= 0) {
    return total;
  }
  return sumRangeRecursive(n - 1, total + n);
}

//A third example

const tree = {
  name: "John",
  children: [
    { name: "Jim", children: [] },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        { name: "Sophia", children: [] },
      ],
    },
  ],
};

function printChildrenRecursive(t) {
  if (t.children.length === 0) {
    return;
  }
  t.children.forEach((child) => {
    console.log(child.name);
    printChildrenRecursive(child);
  });
}
