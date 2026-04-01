import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  // add item
  const addItem = (e) => {
    e.preventDefault();
    if (item === "") return;

    const newItem = {
      id: Date.now(),   // unique key
      value: item
    };

    setList([...list, newItem]);
    setItem("");
  };

  // remove item
  const removeItem = (id) => {
    const updatedList = list.filter((i) => i.id !== id);
    setList(updatedList);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Item List</h1>

      {/* INPUT */}
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {/* LIST */}
      {list.length === 0 ? (
        <p>No items available</p>
      ) : (
        <ul style={{ listStyle: "none" }}>
          {list.map((i) => (
            <li key={i.id} style={{ margin: "10px" }}>
              {i.value}
              <button
                onClick={() => removeItem(i.id)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;