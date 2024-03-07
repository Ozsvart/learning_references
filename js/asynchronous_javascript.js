// Promises (ES6)

/* A promise is an object that may produce a single value some time in the future.
Either a resolved value, or a reason that it's not resolved (it is rejected).
A promise can be:
    fulfilled
    rejected
    pending */
/* The Promise object represents the eventual completion or failure of an asynchronous operation and its resulting value. */
/* Doing several asynchronous operations in a row would lead to the classic callback pyramid of doom: */

doSomething(function (result) {
  doSomethingElse(
    result,
    function (newResult) {
      doThirdThing(
        newResult,
        function (finalResult) {
          console.log(`Got the final result: ${finalResult}`);
        },
        failureCallback
      );
    },
    failureCallback
  );
}, failureCallback);

//With promises you can create a promise chain:

const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);

// or

movePlayer(100, "Left", function () {
  movePlayer(400, "Left", function () {
    movePlayer(10, "Right", function () {
      movePlayer(350, "Left", function () {});
    });
  });
});

// the same function using promises

movePLayer(100, "Left")
  .then(() => movePLayer(400, "Left"))
  .then(() => movePLayer(10, "Right"))
  .then(() => movePLayer(350, "Left"));

// and the same in async function.
/* Async function is a function that returns a promise. */

async function playerStart() {
  await movePLayer(100, "Left");
  // await keyword means: pause this function until I get the response.
  await movePLayer(400, "Left");
  await movePLayer(10, "Right");
  await movePLayer(350, "Left");
}

// Fetching with Async Await (ES8)

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}

// How to create a promise

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("It worked");
  }
  reject("Oops, there is an error");
});

promise
  .then((result) => result + "!")
  .then((result2) => result2 + "?")
  .then((result3) => {
    console.log(result3 + "!");
  })
  .catch(() => console.log("error!"));

// The catch statement checks if anything before it fails.
// The example above gives:
// It worked!?!

// The same example with async await

async function myAsyncFunction() {
  try {
    const result = await promise;
    const result2 = result + "!";
    const result3 = result2 + "?";
    console.log(result3 + "!");
  } catch (error) {
    console.log("error!");
  }
}

// further promises, Promise.all
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Hi!");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Pookie");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Is it me you are looking for?");
});

Promise.all([promise, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});

/* Promise.all takes an array of promises, the values will be returned as an array. */

// Fetching data from an API

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

async function getData() {
  const [users, posts, albums] = await Promise.all(
    urls.map((url) => fetch(url).then((response) => response.json()))
  );
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
}
