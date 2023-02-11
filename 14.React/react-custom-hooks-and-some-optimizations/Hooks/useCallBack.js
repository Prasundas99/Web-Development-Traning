import React from "react";

/**
 * What is UseCallback?
 * - UseCallback is a hook that returns a memoized version of the callback function that only changes if one of the dependencies has changed.
 * - UseCallback is used to memorize the function so that the function is not called every time the component is re-rendered.
 * - UseCallback is used to prevent the child component from re-rendering when the parent component is re-rendered.
 *
 * Difference between UseMemo and UseCallback?
 * - UseMemo is used to memorize the value of a function.
 * - UseCallback is used to memorize the function.
 */
function useCallBackExample() {
  const [number, setNumber] = React.useState(0);
  const [dark, setDark] = React.useState(false);

  // problem: the slowFunction is called every time the component is re-rendered
  const getItems = () => {
    return [number, number + 1, number + 2];
  };

  // Solution: useCallback
  // now the slowFunction is called only when the number changes
  const getItems1 = React.useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  const List = () => {
    return (
      <div>
        {getItems().map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    );
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <List />
    </div>
  );
}

export default useCallBackExample;
