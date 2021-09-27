import { v4 } from "uuid";

const actions = {
  ADD_TASK: (state, action) => [
    ...state,
    { id: v4(), name: action.name, completed: false },
  ],

  TOGGLE_TASK: (state, action) => {
    const newState = state.map((task) => {
      if (task.id === action.id) task.completed = !task.completed;
      return task;
    });
    return newState;
  },

  CLEAR_TASKS: () => [],

  CLEAR_COMPLETED_TASKS: (state) => {
    const newState = state.filter((task) => !task.completed);
    return newState;
  },
};

export default actions;
