// src/reducers/taskReducer.js
import { ACTIONS } from "../action/taskAction";

export function taskReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TASK: {
      const name = action.payload?.name?.trim();
      if (!name) return state;
      const newTask = {
        id: Date.now(),
        name,
        completed: false,
      };
      return { ...state, tasks: [newTask, ...state.tasks] };
    }

    case ACTIONS.TOGGLE_TASK: {
      const { id } = action.payload;
      const tasks = state.tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      );
      return { ...state, tasks };
    }

    case ACTIONS.EDIT_TASK: {
      const { id, name } = action.payload;
      const updatedName = name.trim();
      if (!updatedName) return state;
      const tasks = state.tasks.map((t) =>
        t.id === id ? { ...t, name: updatedName } : t
      );
      return { ...state, tasks };
    }

    case ACTIONS.DELETE_TASK: {
      const { id } = action.payload;
      const tasks = state.tasks.filter((t) => t.id !== id);
      return { ...state, tasks };
    }

    case ACTIONS.CLEAR_TASKS: {
      return { ...state, tasks: [] };
    }

    default:
      return state;
  }
}