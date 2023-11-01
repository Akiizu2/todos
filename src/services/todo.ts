import axios from "axios";
import { Todo } from "../model/todo";

const BASE_PATH = "http://localhost:3001";

export async function getTodoListService(): Promise<Todo[]> {
  const response = await axios.get(`${BASE_PATH}/todos`);
  return response.data;
}

export async function createTodoService(todo: Todo) {
  const response = await axios.post(`${BASE_PATH}/todos`, todo);
  return response.data;
}

export async function updateTodoService(todo: Todo) {
  const response = await axios.put(`${BASE_PATH}/todos/${todo.id}`, todo);
  return response.data;
}

export async function deleteTodoService(todo: Todo) {
  const response = await axios.delete(`${BASE_PATH}/todos/${todo.id}`);
  return response.data;
}
