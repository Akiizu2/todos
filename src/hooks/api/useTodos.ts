import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/root";
import {
  getTodos as getTodosAction,
  createTodo as createTodoAction,
  updateTodo as updateTodoAction,
  deleteTodo as deleteTodoAction,
} from "../../redux/todos";
import type { Todo } from "../../model/todo";

export function useTodos() {
  const todoState = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispatch>();

  const getTodoList = () => {
    dispatch(getTodosAction());
  };

  const createTodo = (data: Todo) => {
    dispatch(createTodoAction(data));
  };

  const updateTodo = (data: Todo) => {
    dispatch(updateTodoAction(data));
  };

  const deleteTodo = (data: Todo) => {
    dispatch(deleteTodoAction(data));
  };

  return {
    todos: todoState.list,
    isLoading: todoState.isLoading,
    error: todoState.error,
    getTodoList,
    createTodo,
    updateTodo,
    deleteTodo,
  };
}
