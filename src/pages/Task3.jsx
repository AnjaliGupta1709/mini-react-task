import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Task3() {

  const [color, setColor] = useState("white");

  return (
    <div className="container">

      <Link to="/">
        <button>Back</button>
      </Link>

      <div className="card">

        <h2 className="heading">Color Changer</h2>

        <div
          className="line"
          style={{ backgroundColor: color }}
        >
          Color Box
        </div>

        <br />

        <button onClick={() => setColor("red")}>
          Red
        </button>

        <button onClick={() => setColor("green")}>
          Green
        </button>

        <button onClick={() => setColor("blue")}>
          Blue
        </button>

        <button onClick={() => setColor("white")}>
          Reset
        </button>

      </div>

    </div>
  );
}

export default Task3;