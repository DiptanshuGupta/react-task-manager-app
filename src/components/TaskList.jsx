// src/components/TaskList.jsx
import { useTasks } from "../context/useTasks";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks } = useTasks();

  if (tasks.length === 0) {
    return (
      <section className="card">
        <p className="empty">No tasks yet. Add your first task!</p>
      </section>
    );
  }

  return (
    <section className="card">
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </section>
  );
}