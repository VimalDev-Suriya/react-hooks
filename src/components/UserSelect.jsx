// Note - forwardRef
/*

*/
const UserSelect = (props) => {
  const { onChange } = props ?? {};

  return (
    <label>
      Select the User :
      <select name="user" onChange={onChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </label>
  );
};

export default UserSelect;
