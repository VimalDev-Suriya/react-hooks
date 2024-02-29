// 1. "use" prefix always while nameing custome hooks
// 2. dont think like utilities
// 3. reusable state function
// 4. used to reuse functionalities not a values

import { useState } from "react";
import { TodoService } from "../services";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(null);

  const fetchHandle = async (userId = 1) => {
    try {
      setLoading(true);
      const resp = await new TodoService().fetchTodosWithUserId(userId);

      setTodos(resp.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return {
    todos,
    error,
    loading,
    fetchHandle,
  };
};
