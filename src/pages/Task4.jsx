import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Task4() {

  const studentData = [
    { id: 1, name: "Anjali", course: "BCA", city: "Jaipur" },
    { id: 2, name: "Harshit", course: "B.Tech", city: "Delhi" },
    { id: 3, name: "khushu", course: "BBA", city: "Mumbai" },
    { id: 4, name: "Anii", course: "MCA", city: "Lucknow" },
    { id: 5, name: "Varun", course: "BCA", city: "Pune" },
  ];

  const [list, setList] = useState(studentData);
  const [search, setSearch] = useState("");
  const [course, setCourse] = useState("All");

  function sortData() {
    const temp = [...list];
    temp.sort((a, b) => a.name.localeCompare(b.name));
    setList(temp);
  }

  const result = list.filter((item) => {
    if (course === "All") {
      return item.name.toLowerCase().includes(search.toLowerCase());
    }

    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      item.course === course
    );
  });

  return (
    <div className="container">

      <Link to="/">
        <button>Back</button>
      </Link>

      <div className="card">

        <h2 className="heading">Student Data</h2>

        <input
          type="text"
          placeholder="Search Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option>All</option>
          <option>BCA</option>
          <option>B.Tech</option>
          <option>BBA</option>
          <option>MCA</option>
        </select>

        <button onClick={sortData}>
          Sort
        </button>

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

            {result.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.course}</td>
                <td>{item.city}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Task4;