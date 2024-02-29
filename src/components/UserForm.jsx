import { useId, useReducer } from "react";

// Reducers function that changes the state variable
const formreducer = (intialState, actions) => {
  switch (actions.value) {
    case "NAME":
      return {
        ...intialState,
        name: actions.payload,
      };
    case "EMAIL":
      return {
        ...intialState,
        email: actions.payload,
      };
    default:
      return intialState;
  }
};

const UserForm = () => {
  // A superlative of useState. (not a replacement of useState)
  // @return => state value and dispatch
  const [formValue, dispatch] = useReducer(formreducer, {
    name: "",
    email: "",
  });

  // Generation of unique id
  // Dont use in the place you create unique identification keys
  // Use only in DOM components like Modal, aria-attributes etc
  const nameId = useId();

  const handleSubmit = (e) => {
    // Prevents from refreshments
    e.preventDefault();

    console.log(formValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter the Name :
        <input
          id={nameId}
          type="text"
          value={formValue.name}
          placeholder="Enter your name"
          onChange={(e) => dispatch({ value: "NAME", payload: e.target.value })}
        />
      </label>

      <label>
        Enter the Email :
        <input
          type="text"
          value={formValue.email}
          placeholder="Enter your email"
          onChange={(e) =>
            dispatch({ value: "EMAIL", payload: e.target.value })
          }
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
