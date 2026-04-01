import React, { useState } from "react";
import StudentCard from "./StudentCard";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [marks, setMarks] = useState("");

  const [students, setStudents] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();

    const newStudent = { name, department, marks };
    setStudents([...students, newStudent]);

    // clear inputs
    setName("");
    setDepartment("");
    setMarks("");
  };

  return (
    <div className="container">
      <h1>Student Cards</h1>

      {/* INPUT FORM */}
      <form onSubmit={handleAdd} className="form">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />

        <button type="submit">Add Student</button>
      </form>

      {/* DISPLAY CARDS */}
      <div className="card-container">
        {students.map((s, index) => (
          <StudentCard
            key={index}
            name={s.name}
            department={s.department}
            marks={s.marks}
          />
        ))}
      </div>
    </div>
  );
}

export default App;