import type { Todo } from "../../model/todo";
import { Card } from "../card";
import { ProgressBar } from "../progress-bar";

import "./progressCard.styles.scss";

export type ProgressCardProps = {
  list?: Todo[];
};

export function ProgressCard({ list }: ProgressCardProps) {
  const totalTodo = list?.length ?? 0;
  const completedCount =
    list?.reduce((count, todo) => (todo.completed ? count + 1 : count), 0) ?? 0;
  const progress = totalTodo === 0 ? 0 : completedCount / totalTodo;

  return (
    <Card className="progress-card__container">
      <h2 className="progress-card__header">Progress</h2>
      <ProgressBar progress={progress} />
      {<p className="progress-card__description">{completedCount} completed</p>}
    </Card>
  );
}
