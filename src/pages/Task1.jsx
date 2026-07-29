import { useState } from "react";
import "../App.css";
import Child from "../Child";

function Task1() {

  const students = [
    { id: 1, name: "Anjali", course: "BCA", city: "Jaipur" },
    { id: 2, name: "Khushboo", course: "B.Tech", city: "Delhi" },
    { id: 3, name: "Anshika", course: "B.Tech", city: "Mumbai" },
    { id: 4, name: "Manoj", course: "MCA", city: "Lucknow" },
  ];

  const [show, setShow] = useState(true);
  const [btn, setBtn] = useState(false);
  const [name, setName] = useState("");
  const [children, setChildren] = useState([]);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  return (

    
    <div className="container">
        

      <h1>React Task 1</h1>

      {/* 1 */}
        <h2 className="heading">1. Display Simple JSX</h2>
        <h3>Hello React</h3>
        <p>Welcome to React.</p>
      

      {/* 2 */}
      <div className="card">
        <h2 className="heading">2. Display Array of Records</h2>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 3 */}
      <div className="card">
        <h2 className="heading">3. Show / Hide Element</h2>

        <button onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </button>

        <br /><br />

        {show && <h3>Hello React Students</h3>}
      </div>

      {/* 4 */}
      <div className="card">
        <h2 className="heading">4. Enable / Disable Button</h2>

        <button onClick={() => setBtn(!btn)}>
          {btn ? "Enable" : "Disable"}
        </button>

        <br /><br />

        <button disabled={btn}>
          Submit
        </button>
      </div>

      {/* 5 */}
      <div className="card">
        <h2 className="heading">5. Two Way Data Binding</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p>Your Name : {name}</p>
      </div>

      {/* 6 */}
      <div className="card">
        <h2 className="heading">6. Add Child Component</h2>

        <button
          onClick={() => setChildren([...children, children.length])}
        >
          Add Child
        </button>

        {children.map((item) => (
          <Child key={item} />
        ))}
      </div>

      {/* 7 */}
      <div className="card">
        <h2 className="heading">7. Sum of Two Numbers</h2>

        <input
          type="number"
          placeholder="Enter First Number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Second Number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <h3>Sum = {Number(num1) + Number(num2)}</h3>

      </div>

    </div>
  );
}

export default Task1;