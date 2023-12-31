import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:8070/student/")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getStudents();
  }, []);

  return (
    <div className="container">
      <h1>All Students</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Student Name</th>
            <th scope="col">Student Age</th>
            <th scope="col">Student Gender</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id}>
              <th scope="row">{index + 1}</th>
              <td>
                <Link to={`/${student._id}`}>{student.name}</Link>
              </td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td className="vertical-center">
                <Link to={`/update/${student._id}`}>
                  <button type="button" className="btn btn-sm btn-primary">
                    Update
                  </button>
                </Link>
                <span style={{ margin: "0 5px" }}></span>
                <Link to={`/delete/${student._id}`}>
                  <button
                    type="button"
                    className="btn btn-sm btn-danger"
                    onClick={(e) => {
                      if (
                        !window.confirm(
                          "Are you sure you want to delete this student?"
                        )
                      ) {
                        e.preventDefault();
                      }
                    }}
                  >
                    Delete
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllStudents;
