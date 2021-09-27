import React from "react";
import { useDispatch } from "react-redux";

export default function Task({ task }) {
  const dispatch = useDispatch();

  function handleOnChange() {
    dispatch({ type: "TOGGLE_TASK", id: task.id });
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleOnChange}
      />
      {task.name}
    </div>
  );
}
