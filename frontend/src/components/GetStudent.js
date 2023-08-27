import React, { useState, useEffect } from "react";
import axios from "axios";

function GetStudent({ id }) {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    function getStudent() {
      axios
        .get(`http://localhost:8070/student/get/${id}`)
        .then((res) => {
          setStudent(res.data.student);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getStudent();
  }, [id]);

  return (
    <div className="container">
      <h1>Student Profile</h1>
      <div className="d-flex p-2">Name: {student.name}</div>
      <div className="d-flex p-2">Age: {student.age}</div>
      <div className="d-flex p-2">Gender: {student.gender}</div>
    </div>
  );
}

export default GetStudent;
