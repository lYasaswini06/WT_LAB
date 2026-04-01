import React from "react";

function StudentCard({ name, department, marks }) {
  return (
    <div style={{
      border: "1px solid black",
      padding: "10px",
      margin: "10px",
      width: "200px"
    }}>
      <h3>{name}</h3>
      <p>Dept: {department}</p>
      <p>Marks: {marks}</p>
    </div>
  );
}

export default StudentCard;