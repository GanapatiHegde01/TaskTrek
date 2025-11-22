import React from "react";
import "./Tag.css";
const Tag = ({ tag_name, selectTags, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fffa96ff" },
    CSS: { backgroundColor: "#2bffceff" },
    JavaScript: { backgroundColor: "#b4d0ffff" },
    React: { backgroundColor: "#7050ffff" },
    default: { backgroundColor: "#fff" },
  };
  return (
    <button
      type="button"
      style={selected ? tagStyle[tag_name] : tagStyle.default} //If want to use the variable as key to get some value use it in the [var_name] else we can use the dot notations if that property is literral
      className="tag"
      onClick={() => selectTags(tag_name)}
    >
      {tag_name}
    </button>
  );
};

export default Tag;
