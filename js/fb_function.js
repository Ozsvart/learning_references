const database = [
  { username: "Viki", password: "123" },
  { username: "Panír", password: "Panka" },
  { username: "Csuszka", password: "Csuszmó" },
  { username: "Márk", password: "baba" },
  { username: "Andris", password: "mentor" },
];

/* Arrays are a special type of objects with numbered indexes.
In JS, arrays use numbered indexes.
In jS, objects use named indexes.*/

const newsFeed = [
  { username: "Bobby", timeline: "So tired from all this learning" },
  { username: "Sally", timeline: "Javascript is so cool!" },
  { username: "Mitch", timeline: "Javascript is pretty cool!" },
];

let usernamePrompt = prompt("What is your username?");
let passwordPrompt = prompt("What is your password?");

function isUserValid(username, password) {
  for (let i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
      /* You access an array element by referring to the index number.
      Array indexes start with 0.
      The length property is always one more than the highest array index.*/
    ) {
      return true;
    }
  }
}

/* The for statement creates a loop that consists of three optional expressions,
followed by a statement to be executed in the loop.
Syntax:
  for (initialization, condition, afterthought)
  statement
*/
/* An example:
let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// Expected output: "012345678"
*/

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Sorry,wrong username or password!");
  }
}

signIn(usernamePrompt, passwordPrompt);
