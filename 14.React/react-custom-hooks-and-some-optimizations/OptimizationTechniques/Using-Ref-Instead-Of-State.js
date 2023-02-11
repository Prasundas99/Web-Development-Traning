import React from "react";

function UsingRefInsteadOfState() {
  // UseRef is used to get the value of the input field
  //without re-rendering the component
  //when we do not reqire to store the state of the input field or do something in between we should use UseRef
  const [name, setName] = React.useState("");
  const inputRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleSubmit2}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UsingRefInsteadOfState;
