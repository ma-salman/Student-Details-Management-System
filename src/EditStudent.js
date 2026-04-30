import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditStudent() {
  const { studentid } = useParams();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");

  const [validation, setValidation] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
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
        if (data) {
          // ✅ fill the form with existing data
          setId(data.id);
          setName(data.name);
          setPlace(data.place);
          setPhone(data.phone);
        }
      })
      .catch((err) => console.log(err.message));
  }, [studentid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidation(true);

    // ✅ basic validation
    if (id.length === 0 || name.length === 0 || place.length === 0 || phone.length === 0) {
      return;
    }

    const studentData = { id, name, place, phone };

    fetch("http://localhost:8000/students/" + studentid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(studentData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update");
        alert("Updated Successfully ✅");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="container">
      <h2>Edit Student Details</h2>

      {notFound && <p className="errorMsg">Student not found ❌</p>}

      {!notFound && (
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
          {validation && id.length === 0 && (
            <span className="errorMsg">please enter your Id</span>
          )}

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
          {validation && name.length === 0 && (
            <span className="errorMsg">please enter your name</span>
          )}

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
          {validation && place.length === 0 && (
            <span className="errorMsg">please enter your place</span>
          )}

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
          {validation && phone.length === 0 && (
            <span className="errorMsg">please enter your phone</span>
          )}

          <button type="submit" className="btn btn-save">
            Update
          </button>

          <Link to="/" className="btn btn-back">
            Back
          </Link>
        </form>
      )}
    </div>
  );
}