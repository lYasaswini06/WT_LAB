import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};

    if (name === "") {
      tempErrors.name = "Name is required";
    }

    if (email === "") {
      tempErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      tempErrors.email = "Invalid email";
    }

    if (password === "") {
      tempErrors.password = "Password is required";
    } else if (password.length < 6) {
      tempErrors.password = "Min 6 characters required";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully!");

      // reset form
      setName("");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>User Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.name}</p>
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.email}</p>
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.password}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;