import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CreateStudent.css";

export default function CreateStudent() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentData = {
      id: id.trim(),   // ✅ convert to number (better for json-server)
      name,
      place,
      phone,
    };

    fetch("http://localhost:8000/students", {
      method: "POST",
      headers: {                      // ✅ FIX: headers (not header)
        "Content-Type": "application/json", // ✅ FIX: correct header name
      },
      body: JSON.stringify(studentData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to save student");
        return res.json();
      })
      .then((data) => {
        alert("Student data Save Successfully");
        navigate("/"); // ✅ go back to table after saving (optional but useful)
      })
      .catch((err) => console.log(err.message));

  };

  return (
    <div className="container">
      <h2>Add New Student</h2>

      {/* ✅ FIX: add onSubmit */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID : </label>
        <input
          type="text"
          required
          name="id"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          onMouseDown={() => setValidation(true)}
        />
        {validation && id.length === 0 && <span className="errorMsg">please enter your Id</span>}

        <label htmlFor="name">Name : </label>
        <input
          type="text"
          required
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onMouseDown={() => setValidation(true)}
        />
        {validation && name.length === 0 && <span className="errorMsg">please enter your name</span>}

        <label htmlFor="place">Place : </label>
        <input
          type="text"
          required
          name="place"
          id="place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          onMouseDown={() => setValidation(true)}
        />
        {validation && place.length === 0 && <span className="errorMsg">please enter your place</span>}


        <label htmlFor="phone">Phone : </label>
        <input
          type="text"
          name="phone"
          required
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onMouseDown={() => setValidation(true)}
        />
        {validation && phone.length === 0 && <span className="errorMsg">please enter your phone</span>}


        {/* ✅ Make Save submit the form */}
        <button type="submit" className="btn btn-save">
          Save
        </button>

        <Link to="/" className="btn btn-back">
          Back
        </Link>
      </form>
    </div >
  );
}
