import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createTodoService,
  deleteTodoService,
  getTodoListService,
  updateTodoService,
} from "../services/todo";
import { Todo } from "../model/todo";

export const getTodos = createAsyncThunk("todos/getTodoList", async () => {
  const todos = await getTodoListService();
  return todos;
});

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (todo: Todo, thunkAPI) => {
    const result = await createTodoService(todo);
    // Refetch todo list
    thunkAPI.dispatch(getTodos());
    return result;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (todo: Todo, thunkAPI) => {
    const result = await updateTodoService(todo);
    // Refetch todo list
    thunkAPI.dispatch(getTodos());
    return result;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todo: Todo, thunkAPI) => {
    const result = await deleteTodoService(todo);
    // Refetch todo list
    thunkAPI.dispatch(getTodos());
    return result;
  }
);

export type TodoState = {
  list: Todo[];
  isLoading: boolean;
  error: object;
};

const initialState: TodoState = {
  list: [],
  isLoading: false,
  error: {},
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Todo
    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    });
    builder.addCase(getTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(createTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTodo.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export default todosSlice.reducer;
