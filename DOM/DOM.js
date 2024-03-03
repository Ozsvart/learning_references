/* The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.
The DOM represents a document with a logical tree.
Each branch of the tree ends in a node, and each node contains objects.
DOM methods allow programmatic access to the tree and allows it to be manipulated.
With them one can change the document's structure, style, or content with a scripting language such as JavaScript.*/

//Data types:
//      Node:
//          Every object located within a document is a node of some kind. In an HTML document, an Object can be
//          an element node but also a text node or attribute node.
//      Element:
//          The element type is based on node.
//      NodeList:
//          A nodeList is an array of elements. They are accessed by index.

// Adding elements to page

const body = document.body;

const div = document.createElement("div");
const strong = document.createElement("strong");
strong.innerText = "Hello World!";
div.append(strong);
body.appendChild(div);

console.log(div.textContent);
console.log(div.innerText);

// innerText returns the visible text contained in a node,
// textContent returns also the hidden text
// Hidden text is any text that is not visible to the user, but can be read by search engines.

// Remove elements

const body = document.body;
const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
// hi is an id in the HTML
const spanBye = document.querySelector("#bye");

console.log(spanHi.dataset);
spanBye.remove();
div.append(spanBye);

div.removeChild(spanHi);

// another DOM example

var button = document.getElementsByTagName("button")[0];
// selects the first element with the appropriate tag

button.addEventListener("mouseenter", function () {
  console.log("CLICK!!!");
});

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll(".listitem");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  clickDone(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeydown(event) {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
}

function clickDone(item) {
  item.addEventListener("click", () => {
    item.classList.toggle("done");
  });
}

listItems.forEach(clickDone);

// ul.addEventListener("click", function () {
//   ul.classList.toggle("done");
// });

button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeydown);
