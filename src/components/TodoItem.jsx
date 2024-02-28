// Note - forwardRef, useImperativeHandle
/*
1. What
2. When
3. Caveats
*/

const TodoItem = (props) => {
  const { title, completed } = props ?? {};

  return <li className={`${completed ? "green" : "red"}`}>{title}</li>;
};

export default TodoItem;
