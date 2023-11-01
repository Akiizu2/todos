import { Card, ProgressCard, TaskList } from "../../components";

import "./todoAppContainer.styles.scss";

export type TodoAppContainerProps = {};

export function TodoAppContainer(props: TodoAppContainerProps) {
  return (
    <section className="todo-app__container">
      <Card className="todo-app__card">
        <ProgressCard />
        <TaskList />
      </Card>
    </section>
  );
}
