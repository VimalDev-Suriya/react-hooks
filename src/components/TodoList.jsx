import { useState } from "react";
import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";
import UserSelect from "./UserSelect";

// Note - useEffect, useRef
/*
1. What
2. When
3. Caveats
*/
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(null);

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
