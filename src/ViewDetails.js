import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./ViewDetails.css";

export default function ViewDetails() {
  const { studentid } = useParams();
  const [studentData, setStudentData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setStudentData(null);
    setNotFound(false);

    fetch("http://localhost:8000/students/" + studentid)
      .then((res) => {
        if (!res.ok) {
          setNotFound(true);
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data) setStudentData(data);
      })
      .catch((err) => console.log(err.message));
  }, [studentid]); // ✅ IMPORTANT FIX

  return (
    <div className="container">
      <h1>Student Details</h1>

      {notFound && <p style={{ color: "red" }}>Student not found for ID: {studentid}</p>}

      {studentData && (
        <div className="details">
          <p><strong>ID: </strong>{studentData.id}</p>
          <p><strong>NAME: </strong>{studentData.name}</p>
          <p><strong>PLACE: </strong>{studentData.place}</p>
          <p><strong>PHONE: </strong>{studentData.phone}</p>
        </div>
      )}

      <Link to="/" className="btn btn-primary">Back</Link>
    </div>
  );
}
