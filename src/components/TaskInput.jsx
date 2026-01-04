// src/components/TaskInput.jsx
import { useState } from "react";
import { useTasks } from "../context/useTasks";
import { ACTIONS } from "../action/taskAction";

export default function TaskInput() {
  const { dispatch } = useTasks();
  const [name, setName] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TASK, payload: { name } });
    setName("");
  };

  const handleClearAll = () => {
    dispatch({ type: ACTIONS.CLEAR_TASKS });
  };

  return (
    <section className="card">
      <form className="task-form" onSubmit={handleAdd}>
        <input
          className="task-input"
          type="text"
          value={name}
          placeholder="Add a new task..."
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn primary" type="submit">
          Add Task
        </button>
        <button
          className="btn danger outline"
          type="button"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </form>
    </section>
  );
}