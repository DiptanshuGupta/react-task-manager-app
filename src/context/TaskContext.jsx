/* eslint-disable react-refresh/only-export-components */
// src/context/TaskProvider.jsx
import { createContext, useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";

export const TaskContext = createContext(null);

const initialState = {
  tasks: [],
};

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const value = {
    tasks: state.tasks,
    dispatch,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}