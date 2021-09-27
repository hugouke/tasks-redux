import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const taskRef = useRef();

  const addTask = () => {
    const name = taskRef.current.value;
    if (name !== "") dispatch({ type: "ADD_TASK", name });
    taskRef.current.value = null;
  };

  const clearTasks = () => {
    dispatch({ type: "CLEAR_TASKS" });
  };

  const clearCompletedTasks = () => {
    dispatch({ type: "CLEAR_COMPLETED_TASKS" });
  };

  return (
    <>
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
      <input ref={taskRef} type="text" />
      <button onClick={addTask}>Add</button>
      <button onClick={clearTasks}>Clear</button>
      <button onClick={clearCompletedTasks}>Clear Completed</button>
    </>
  );
}
