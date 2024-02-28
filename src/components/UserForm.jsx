// Note - useReducer, useId
/*

*/
const UserForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter the Name :
        <input type="text" placeholder="Enter your name" />
      </label>

      <label>
        Enter the Email :
        <input type="text" placeholder="Enter your email" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
