import classNames from "classnames";
import { type ChangeEventHandler, useState } from "react";

import { Button } from "../button";

import "./taskItem.styles.scss";
import { Menu } from "../menu";
import { Checkbox } from "../checkbox";

export type TaskItemData = {
  value?: string;
  isCompleted?: boolean;
};
export type TaskItemProps = {
  data?: TaskItemData;
  onChange?: (data: TaskItemData, isNew: boolean) => void;
};

export function TaskItem({ data, onChange }: TaskItemProps) {
  const isNew = !Boolean(data);
  const [isEditable, setIsEditable] = useState(isNew);
  const [editingValue, setEditingValue] = useState("");

  const isShowSaveButton = Boolean(editingValue);

  const handleEditingValueChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEditingValue(event.target.value);
  };

  const handleSave = () => {
    onChange?.(
      {
        isCompleted: data?.isCompleted ?? false,
        value: editingValue,
      },
      isNew
    );
    setIsEditable(false);
  };

  return (
    <div className="task-item__container">
      <div className="task-item__content with-margin-left">
        {isEditable ? (
          <input
            className="task-item__input"
            type="text"
            placeholder="Add your todo..."
            onChange={handleEditingValueChange}
            value={editingValue}
          />
        ) : (
          <>
            <Checkbox
              checked={data?.isCompleted}
              onChange={(e) => {
                console.log("e.target.checked", e.target.checked);
              }}
            />
            <p className={classNames({ completed: data?.isCompleted })}>
              {data?.value}
            </p>
          </>
        )}
      </div>
      <div>
        {isEditable ? (
          <>
            {isShowSaveButton ? (
              <Button onClick={handleSave}>Save</Button>
            ) : null}
          </>
        ) : (
          <Menu
            options={[
              { label: "Edit", onClick: () => {} },
              { label: "Delete", className: "error-text", onClick: () => {} },
            ]}
          />
        )}
      </div>
    </div>
  );
}
