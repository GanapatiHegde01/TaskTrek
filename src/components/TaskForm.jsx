import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";
const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    todos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, taskData];
    });

    setTaskData({
      task: "",
      status: "todo",
      todos: [],
    });
  };

  const selectTags = (tag) => {
    if (taskData.todos.some((item) => item === tag)) {
      let filteredTags = taskData.todos.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, todos: filteredTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, todos: [...prev.todos, tag] };
      });
    }
  };

  const checkSelected = (tag) => {
    return taskData.todos.some((item) => item === tag);
  };

  return (
    <form className="form_add_task" onSubmit={handleSubmit}>
      <input
        name="task"
        type="text"
        value={taskData.task}
        className="task_input"
        placeholder="Enter Task..."
        onChange={handleChange}
      />
      <div className="task_creation_bns">
        <div>
          <Tag
            tag_name={"HTML"}
            selectTags={selectTags}
            selected={checkSelected("HTML")}
          />
          <Tag
            tag_name={"CSS"}
            selectTags={selectTags}
            selected={checkSelected("CSS")}
          />
          <Tag
            tag_name={"JavaScript"}
            selectTags={selectTags}
            selected={checkSelected("JavaScript")}
          />
          <Tag
            tag_name={"React"}
            selectTags={selectTags}
            selected={checkSelected("React")}
          />
        </div>
        <div>
          <select
            value={taskData.status}
            className="progess"
            name="status"
            id=""
            onChange={handleChange}
          >
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="completed">Completed</option>
          </select>
          <button className="add_task_btn">+Add Task</button>
        </div>
      </div>
    </form>
  );
};
export default TaskForm;
