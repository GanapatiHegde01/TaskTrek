import React from "react";
import Tag from "./Tag";
import deteteIcon from "../assets/delete.png";
import "./TaskCard.css";

const TaskCard = ({ title, tags, handleDelete, index, setActiveCard }) => {
  return (
    <article
      className="task_card"
      draggable={true}
      onDragStart={()=>setActiveCard(index)}
      onDragEnd={()=>setActiveCard(null)}

    >
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_tags">
          {tags.map((tag, index) => {
            return <Tag key={index} tag_name={tag} selected />;
          })}
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={deteteIcon} className="delete_btn" alt="delete" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
