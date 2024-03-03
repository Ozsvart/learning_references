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
