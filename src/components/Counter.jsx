import { useState } from "react";

const Counter = () => {
  // state variable and setter function
  const [count, setCount] = useState(0);

  // should not be called at top level
  // setCount(count + 1);

  const handleCounter = () => {
    // 1. trigger the re-render
    // 2. will commit the changes to virtual dom (state update)
    // 3. update that changes to real dom

    // setter functions are always batched
    // setCount(count + 1); // count = 0
    // setCount(count + 1); // count = 0

    // state setter fn is always act as the async
    setCount((prevState) => prevState + 1); // prevState = 1
    // setCount((prevState) => prevState + 1); // prevState = 2

    console.log(count); // will always get previuos value

    // Don't mutate the state variable
    // count++;
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCounter}>+</button>
    </div>
  );
};

export default Counter;
