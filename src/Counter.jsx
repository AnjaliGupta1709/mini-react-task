import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <h1>Counter App</h1>

        <h2>Counter Value: {count}</h2>

       <button onClick={() => setCount(count + 1)}>
  Increase
</button>

<button onClick={() => setCount(count - 1)}>
  Decrease
</button>
      </div>
    </div>
  );
}

export default Counter;