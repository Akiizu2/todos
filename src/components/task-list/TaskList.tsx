import { Select } from "../select";
import { SelectOptions } from "../select/Select";
import { TaskItem } from "../task-item";

import "./taskList.styles.scss";

const filterOptions: SelectOptions[] = [
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

export type TaskListProps = {};

export function TaskList(props: TaskListProps) {
  return (
    <div className="task-list__container">
      <div className="task-list__header">
        <h3>Tasks</h3>
        <Select options={filterOptions} />
      </div>
      <div className="task-list__body">
        <TaskItem
          data={{
            value: "Publish a new blog",
            isCompleted: true,
          }}
        />
        <TaskItem
          data={{
            value: "Call Mom at 11:11AM",
            isCompleted: false,
          }}
        />
        <TaskItem />
      </div>
    </div>
  );
}
