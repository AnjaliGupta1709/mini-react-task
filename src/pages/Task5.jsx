import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Task5() {

 const [data, setData] = useState({
  Today: [],
  Tomorrow: [],
  Week: [],
  Next: [],
  Unplanned: [
    "Task 1",
    "Task 2",
    "Task 3",
    "Task 4",
    "Task 5",
  ],
});

  const [item, setItem] = useState("");
  const [from, setFrom] = useState("");

  function drag(task, list) {
    setItem(task);
    setFrom(list);
  }

  function drop(list) {

    if (item === "") return;

    let temp = { ...data };

    temp[from] = temp[from].filter((t) => t !== item);

    temp[list].push(item);

    setData(temp);
  }

  return (
    <div className="container">

      <Link to="/">
        <button>Back</button>
      </Link>

      <h2 className="heading">Drag and Drop</h2>

      <div className="board">

        {Object.keys(data).map((list) => (

          <div
            key={list}
            className="box"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => drop(list)}
          >

            <h3>{list}</h3>

            {data[list].map((task) => (

              <div
                key={task}
                className="task"
                draggable
                onDragStart={() => drag(task, list)}
              >
                {task}
              </div>

            ))}

          </div>

        ))}

      </div>

    </div>
  );
}

export default Task5;