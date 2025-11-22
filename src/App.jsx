import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import { TaskColumn } from "./components/TaskColumn";
import Todo from "./assets/direct-hit.png";
import Doing from "./assets/glowing-star.png";
import Completed from "./assets/check-mark-button.png";

const App = () => {
  const oldTask = localStorage.getItem("taskData");
  const [tasks, setTasks] = useState(JSON.parse(oldTask) || []);
  const [activeCard, setActiveCard] = useState(null);

  const onDrop = (status, position) => {
    if (activeCard === null || activeCard === undefined) return;

    const taskToMove = tasks[activeCard];
    const updatedTask = tasks.filter((task, index) => index !== activeCard);

    updatedTask.splice(position, 0, {
      ...taskToMove,
      status: status,
    });
    setTasks(updatedTask);
  };

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => taskIndex !== index);
    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("taskData", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className="container">
      <div className="app_header">
        <TaskForm setTasks={setTasks} />
      </div>
      <div className="main">
        <TaskColumn
          title={"Todo"}
          img={Todo}
          status={"todo"}
          tasks={tasks}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title={"Doing"}
          img={Doing}
          status={"doing"}
          tasks={tasks}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title={"Completed"}
          img={Completed}
          status={"completed"}
          tasks={tasks}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </div>
    </div>
  );
};

export default App;
