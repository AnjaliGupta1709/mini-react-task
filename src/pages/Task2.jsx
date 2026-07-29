import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Task2() {

  const [count, setCount] = useState(0);

  return (
    <div className="container">

      <Link to="/">
        <button>Back</button>
      </Link>

      <div className="card">

        <h2 className="heading">Counter</h2>

        <h1>{count}</h1>

        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>

        <button
          onClick={() => setCount(count - 1)}
          Decrease
          disabled={count === 0}
        >
          
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>

      </div>

    </div>
  );
}

export default Task2;