import { useEffect } from "react";
import { Card, ProgressCard, TaskList } from "../../components";
import { useTodos } from "../../hooks/api/useTodos";

import "./todoAppContainer.styles.scss";
import { Todo } from "../../model/todo";

export type TodoAppContainerProps = {};

export function TodoAppContainer(props: TodoAppContainerProps) {
  const { todos, isLoading, getTodoList, createTodo, updateTodo, deleteTodo } =
    useTodos();

  const handleTaskChange = (data: Todo, isNew?: boolean) => {
    if (isNew) {
      createTodo(data);
    } else {
      updateTodo(data);
    }
  };

  useEffect(() => {
    if (todos.length < 1) {
      getTodoList();
    }
  }, [getTodoList, todos.length]);

  return (
    <section className="todo-app__container">
      <Card className="todo-app__card">
        <ProgressCard list={todos} />
        <TaskList
          isLoading={isLoading}
          onChange={handleTaskChange}
          onDelete={deleteTodo}
          list={todos}
        />
      </Card>
    </section>
  );
}
