import { useState } from "react";
import type { Todo } from "../../model/todo";
import { Select, type SelectOption } from "../select";
import { TaskItem, TaskItemProps } from "../task-item";

import "./taskList.styles.scss";

const filterOptions: SelectOption[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Done",
    value: "done",
  },
  {
    label: "Undone",
    value: "undone",
  },
];

export type TaskListProps = {
  isLoading?: boolean;
  list?: Todo[];
  onChange?: TaskItemProps["onChange"];
  onDelete?: TaskItemProps["onDelete"];
};

export function TaskList({
  isLoading,
  list,
  onChange,
  onDelete,
}: TaskListProps) {
  const [filter, setFilter] = useState("all");

  const displayingData =
    filter === "all"
      ? list
      : list?.filter((todo) =>
          filter === "done" ? todo.completed : !todo.completed
        );

  // FYI: just try to do it for fun to make it display as amount of latest
  const skeletonItems = new Array(Math.max(list?.length ?? 0, 4)).fill({});

  return (
    <div className="task-list__container">
      <div className="task-list__header">
        <h3>Tasks</h3>
        <Select options={filterOptions} value={filter} onChange={setFilter} />
      </div>
      <div className="task-list__body">
        {isLoading ? (
          <>
            {skeletonItems?.map((todo) => (
              <TaskItem key={todo.id} isLoading />
            ))}
            <TaskItem isLoading />
          </>
        ) : (
          <>
            {displayingData?.map((todo) => (
              <TaskItem
                key={todo.id}
                data={todo}
                onChange={onChange}
                onDelete={onDelete}
              />
            ))}
            <TaskItem onChange={onChange} />
          </>
        )}
      </div>
    </div>
  );
}
