import React, { useState } from "react";

function App() {
  // state (counter value)
  const [count, setCount] = useState(0);

  // increment
  const increase = () => {
    setCount(count + 1);
  };

  // decrement
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease} style={{ marginLeft: "10px" }}>
        Decrease
      </button>
    </div>
  );
}

export default App;