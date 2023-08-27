import React, { useState, useEffect } from "react";
import axios from "axios";

function DeleteStudent({ id }) {
  const [student] = useState([]);

  useEffect(() => {
    function deleteStudent() {
      axios
        .delete(`http://localhost:8070/student/delete/${id}`)
        .catch((err) => {
          alert(err.message);
        });
    }
    deleteStudent();
  }, [id]);

  return (
    <div className="container">
      <h1>Student Removed Successfully</h1>
    </div>
  );
}

export default DeleteStudent;
