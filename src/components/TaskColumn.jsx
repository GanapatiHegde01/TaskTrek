import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";
import DropArea from "./DropArea";

export const TaskColumn = ({
  title,
  img,
  status,
  tasks,
  handleDelete,
  setActiveCard,
  onDrop,
}) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={img} alt="" /> {title}
      </h2>
      <DropArea onDrop={() => onDrop(status, 0)} />
      {tasks.map((task, index) => {
        return (
          status === task.status && (
            <React.Fragment key={index}>
              <TaskCard 
                title={task.task}
                tags={task.todos}
                handleDelete={handleDelete}
                index={index}
                setActiveCard={setActiveCard}
              />

              <DropArea onDrop={() => onDrop(status, index + 1)} />
            </React.Fragment>
          )
        );
      })}
    </section>
  );
};
