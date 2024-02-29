import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";
import UserSelect from "./UserSelect";
import { useTodos } from "../hooks/useTodos";

// Note - useEffect, useRef
/*
1. What
2. When
3. Caveats
*/
const TodoList = () => {
  const [user, setUser] = useState(1);
  const { error, fetchHandle, loading, todos } = useTodos();

  const selectref = useRef();

  const handleKeyPress = () => {
    console.log("key press");
  };

  // excecuted on the mount of components (only once)
  useEffect(() => {
    fetchHandle();
  }, []);

  // will be executed at top level and also exceute after every dep value changes (compdidupdate)
  useEffect(() => {
    // Guard against initial call
    if (todos.length) {
      fetchHandle(user);
    }

    document.addEventListener("keypress", handleKeyPress);

    // Cleanup function
    // will be executed on the removal of comp (unmount phase)
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [user]);

  useEffect(() => {
    if (todos.length) {
      selectref.current.focus();
      // REF will take the entire selected components
      console.log(selectref.current);
    }
  }, [todos]);

  if (error) {
    return <div>Error occured</div>;
  }

  if (loading) {
    return <div>Loading</div>;
  }

  // A <>...</> is the React fragments
  return (
    <>
      <Link to={"/use-state"}>Go Back</Link>
      <h1>Active User: {user}</h1>
      <UserSelect
        val={user}
        onChange={(e) => setUser(e.target.value)}
        ref={selectref}
      />
      <ul>
        {todos?.map(({ title, completed, id }) => (
          <TodoItem
            title={title}
            completed={completed}
            // example DONT use useId here
            key={`${title} ${id}`}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
