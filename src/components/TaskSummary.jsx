// src/components/TaskSummary.jsx
import { useTasks } from "../context/useTasks";

export default function TaskSummary() {
  const { tasks } = useTasks();
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;

  return (
    <section className="card summary">
      <div className="summary-grid">
        <div className="summary-box">
          <span className="summary-label">Total</span>
          <strong className="summary-value">{total}</strong>
        </div>
        <div className="summary-box">
          <span className="summary-label">Completed</span>
          <strong className="summary-value">{completed}</strong>
        </div>
        <div className="summary-box">
          <span className="summary-label">Remaining</span>
          <strong className="summary-value">{total - completed}</strong>
        </div>
      </div>
    </section>
  );
}