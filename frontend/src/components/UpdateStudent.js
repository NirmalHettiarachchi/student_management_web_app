import React, { useState } from "react";
import axios from "axios";

function UpdateStudent({ id }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newStudent = {
      name,
      age,
      gender,
    };

    axios
      .put(`http://localhost:8070/student/update/${id}`, newStudent)
      .then(() => {
        alert("Student Updated");
        window.location.href = "http://localhost:3000";
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <div className="form-group">
          <label htmlFor="name">Student Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Student Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Student Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Enter Student Age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Student Gender</label>
          <select
            class="form-control"
            id="gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option disabled selected value="">
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateStudent;
