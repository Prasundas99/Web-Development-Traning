import React from "react";

function FunctionVersionOfUseState() {
  const [counter, setCounter] = React.useState(0);

  /**
   * UseState is asynchronous
   * It does not update the state immediately. The state is updated after the component is re-rendered.
   * So, if we want to update the state based on the previous state, we should use the function version of UseState.
   */

  const increment = () => {
    // counter = 1
    setCounter(counter + 1);
    // counter = 1
    setCounter(counter + 1);
    // count increase by 1 instead of 2 after re-rendering
  };

  const decrement = () => {
    // counter = -1 
    setCounter((prevCounter) => prevCounter - 1);
    // counter = -2
    setCounter((prevCounter) => prevCounter - 1);
    //count decrease by 2 after re-rendering
};

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default FunctionVersionOfUseState;
