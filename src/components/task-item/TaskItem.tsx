import classNames from "classnames";
import { type ChangeEventHandler, useState, useRef } from "react";

import { Button } from "../button";

import "./taskItem.styles.scss";
import { Menu } from "../menu";
import { Checkbox } from "../checkbox";
import { Todo } from "../../model/todo";

export type TaskItemProps = {
  isLoading?: boolean;
  data?: Todo;
  onChange?: (data: Todo, isNew?: boolean) => void;
  onDelete?: (data: Todo) => void;
};

export function TaskItem({
  isLoading,
  data,
  onChange,
  onDelete,
}: TaskItemProps) {
  const isNew = !Boolean(data);
  const [isEditable, setIsEditable] = useState(isNew);
  const [editingValue, setEditingValue] = useState("");

  const textInputRef = useRef<HTMLInputElement | null>(null);
  const isShowSaveButton = Boolean(editingValue);

  const handleEditingValueChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEditingValue(event.target.value);
  };

  const handleClickEdit = () => {
    setEditingValue(data?.title ?? "");
    setIsEditable(true);
    setTimeout(() => {
      textInputRef.current?.focus();
    }, 1);
  };

  const handleDelete = () => {
    if (data) {
      onDelete?.(data);
    }
  };

  const handleSave = () => {
    onChange?.(
      {
        ...data,
        completed: data?.completed ?? false,
        title: editingValue,
      },
      isNew
    );
  };

  const handleStatusChange = (completed: boolean) => {
    onChange?.(
      {
        ...data,
        completed: completed,
        title: data?.title ?? "",
      },
      false
    );
  };

  if (isLoading) {
    return <div className="task-item__container as-skeleton" />;
  }

  return (
    <div className="task-item__container">
      <div className="task-item__content with-margin-left">
        {isEditable ? (
          <input
            ref={textInputRef}
            className="task-item__input"
            type="text"
            placeholder="Add your todo..."
            onChange={handleEditingValueChange}
            value={editingValue}
          />
        ) : (
          <>
            <Checkbox
              checked={data?.completed}
              onChange={(e) => {
                handleStatusChange(e.target.checked);
              }}
            />
            <p className={classNames({ completed: data?.completed })}>
              {data?.title}
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
              { label: "Edit", onClick: handleClickEdit },
              {
                label: "Delete",
                className: "error-text",
                onClick: handleDelete,
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}
