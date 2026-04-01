import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // runs only once

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>User Data</h1>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Data */}
      {!loading && !error && (
        <ul style={{ listStyle: "none" }}>
          {data.map((user) => (
            <li key={user.id} style={{ margin: "10px" }}>
              <b>{user.name}</b> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;