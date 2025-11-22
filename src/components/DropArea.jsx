import React, { useState } from "react";
import "./DropArea.css";
const DropArea = ({ onDrop }) => {
  const [showDropArea, setShowDropArea] = useState(false);
  return (
    <div
      className={showDropArea ? "drop-area" : "hide-area"}
      onDragEnter={() => setShowDropArea(true)}
      onDragLeave={() => setShowDropArea(false)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => {
        onDrop();
        setShowDropArea(false);
      }}
    >
      DropArea
    </div>
  );
};

export default DropArea;
