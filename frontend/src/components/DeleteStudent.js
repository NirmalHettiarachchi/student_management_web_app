import React, { useEffect } from "react";
import axios from "axios";

function DeleteStudent({ id }) {
  useEffect(() => {
    function deleteStudent() {
      axios
        .delete(`http://localhost:8070/student/delete/${id}`)
        .then(() => {
          window.location.href = "http://localhost:3000";
        })
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
