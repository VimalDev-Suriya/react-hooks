import TodoItem from "./TodoItem";
import { Link } from "react-router-dom";
import UserSelect from "./UserSelect";

// Note - useEffect, useRef
/*

*/
const TodoList = () => {
  if (error) {
    return <div>Error occured</div>;
  }

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Link to={"/use-state"}>Go Back</Link>
      <h1>Active User: </h1>
      <UserSelect />
      <ul>
        {todos?.map(({ title, completed, id }) => (
          <TodoItem
            title={title}
            completed={completed}
            key={`${title} ${id}`}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
