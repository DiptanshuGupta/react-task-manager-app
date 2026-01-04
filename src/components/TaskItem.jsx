// src/components/TaskItem.jsx
import { useState } from "react";
import { useTasks } from "../context/useTasks";
import { ACTIONS } from "../action/taskAction";
import cx from "classnames";

export default function TaskItem({ task }) {
  const { dispatch } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(task.name);

  const toggle = () =>
    dispatch({ type: ACTIONS.TOGGLE_TASK, payload: { id: task.id } });

  const remove = () =>
    dispatch({ type: ACTIONS.DELETE_TASK, payload: { id: task.id } });

  const save = () => {
    dispatch({
      type: ACTIONS.EDIT_TASK,
      payload: { id: task.id, name: draft },
    });
    setIsEditing(false);
  };

  const cancel = () => {
    setDraft(task.name);
    setIsEditing(false);
  };

  return (
    <li
      className={cx("task-item", {
        completed: task.completed,
      })}
    >
      <div className="left">
        <input
          aria-label="toggle completed"
          type="checkbox"
          checked={task.completed}
          onChange={toggle}
        />
        {isEditing ? (
          <input
            className="edit-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") save();
              if (e.key === "Escape") cancel();
            }}
            autoFocus
          />
        ) : (
          <span className="task-name">{task.name}</span>
        )}
      </div>

      <div className="actions">
        {isEditing ? (
          <>
            <button className="btn success" onClick={save}>
              Save
            </button>
            <button className="btn warning outline" onClick={cancel}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className="btn secondary" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="btn danger" onClick={remove}>
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
}