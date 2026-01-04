// src/App.jsx
import { TaskProvider } from "./context/TaskContext";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskSummary from "./components/TaskSummary";
import "./styles/styles.css";

export default function App() {
  return (
    <TaskProvider>
      <div className="app-container">
        <header className="header">
          <h1>Task Manager</h1>
          <p>Manage tasks globally with Context + useReducer</p>
        </header>

        <main className="main">
          <TaskInput />
          <TaskSummary />
          <TaskList />
        </main>

        <footer className="footer">
          <small>Built with React, Context API, and useReducer</small>
        </footer>
      </div>
    </TaskProvider>
  );
}