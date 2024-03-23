import React, { useState } from "react";

// Hooks can't be used in class components, only in function components.
// The hooks must always execute in the same order. This is the reason why hooks can't be called conditionally.

function initialCount() {
  console.log("Run the function every time");
  return 4;
}
function App() {
  //const [count, setCount] = useState(4);

  /* Default state can also be a function version, which runs only once when the component is rendered the first time.
  This is the fastest solution. */
  /*const [count, setCount] = useState(() => {
    console.log("Run the function");
    return 4;
  }); */

  /* When a function is passed, it runs every time the page is rerendered.*/
  //const [count, setCount] = useState(initialCount());

  // Objects

  const [state, setState] = useState({ count: 4, theme: "blue" });
  const count = state.count;
  const theme = state.theme;
  /* function decrementCount() {
    setCount(count - 1);
  } */

  // the same decrementCount function in another way

  /* function decrementCount() {
    setCount((preCount) => preCount - 1);
  } */

  function decrementCount() {
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count - 1,
      };
    });
  }
  /* Difference between the two versions:
when used two times, the first version only decrements by one,
while the function version, which takes the preCount decrements by two.*/
  /* function incrementCount() {
    setCount(count + 1);
  } */
  function incrementCount() {
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    });
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
