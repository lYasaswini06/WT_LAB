import React, { useState } from "react";
import "./StudentProfile.css";

function StudentProfile() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [section, setSection] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1>Student Profile</h1>

      <form onSubmit={handleSubmit} className="form">
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
          type="text"
          placeholder="Enter Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Section"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="card">
          <h2>Profile Details</h2>
          <p><b>Name:</b> {name}</p>
          <p><b>Department:</b> {department}</p>
          <p><b>Year:</b> {year}</p>
          <p><b>Section:</b> {section}</p>
        </div>
      )}
    </div>
  );
}

export default StudentProfile;