import { forwardRef } from "react";

// Whenever we need to pass the ref to child - we should wrap the component with forwardref
const UserSelect = forwardRef((props, ref) => {
  const { onChange, val } = props ?? {};

  return (
    <label>
      Select the User :
      <select name="user" onChange={onChange} value={val} ref={ref}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </label>
  );
});

export default UserSelect;
