// ASYNC AWAIT

// an example
movePLayer(100, "Left")
  .then(() => movePLayer(400, "Left"))
  .then(() => movePLayer(10, "Right"))
  .then(() => movePLayer(350, "Left"));

// and the same in async function

async function playerStart() {
  await movePLayer(100, "Left");
  await movePLayer(400, "Left");
  await movePLayer(10, "Right");
  await movePLayer(350, "Left");
}

// API fetch
// in this case you can create variables
async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}

// Promise

const urls4 = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

async function getData() {
  const [users, posts, albums] = await Promise.all(
    urls4.map((url) => fetch(url).then((response) => response.json()))
  );
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
}

// some more examples
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("It worked");
  }
  reject("Oops, there is an error");
});

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

promise
  .then((result) => result + "!")
  .then((result2) => result2 + "?")
  .catch(() => console.log("error!"))
  .then((result3) => {
    console.log(result3 + "!");
  });
