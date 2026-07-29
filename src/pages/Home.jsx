import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="container">
      <h1>React Mini Assignment</h1>

      <div className="card">
        
        <h2 className="heading">Task 1 - React Basics</h2>
        <Link to="/task1">
          <button>Open</button>
        </Link>
      </div>

      <div className="card">
        <h2 className="heading">Task 2 - Counter</h2>
        <Link to="/task2">
          <button>Open</button>
        </Link>
      </div>

      <div className="card">
        <h2 className="heading">Task 3 - Build Search Filter </h2>
        <Link to="/task3">
          <button>Open</button>
        </Link>
      </div>

      <div className="card">
        <h2 className="heading">Task 4 - Create a Datagrid</h2>
        <Link to="/task4">
          <button>Open</button>
        </Link>
      </div>

      <div className="card">
        <h2 className="heading">Task 5 - Drag $ Drop Task </h2>
        <Link to="/task5">
          <button>Open</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;