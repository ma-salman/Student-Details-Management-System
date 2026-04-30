import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./StudentTable.css";

export default function StudentTable() {

  const [students, setStudents] = useState([]); // ✅ FIX 1
  const navigate = useNavigate();
  const DisplayDetails = (id) => {
    navigate("/student/view/" + id);

  }
  const EditDetails =(id)=>{
    navigate("/student/edit/" +id);
  }
  const DeleteDetails =(id)=>{
    if(window.confirm("Are you sure you want to Delete?")){
      fetch("http://localhost:8000/students/" + id, {
      method: "DELETE",
      
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update");
        alert("removed Student data Successfully ✅");
        window.location.reload();
      })
      .catch((err) => console.log(err.message));
    }
  }

  useEffect(() => {
    fetch('http://localhost:8000/students')
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);                      // ✅ FIX 2
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container">
      <h2>Student Records</h2>

      <div className="table-container">
        <Link to="/student/create" className="btn btn-primary">
          Add New Student
        </Link>

        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>PLACE</th>
              <th>PHONE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {students.map((item, index) => (            // ✅ no need for students &&
              <tr key={item.id}>                 {/* ✅ FIX 3 */}
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.place}</td>
                <td>{item.phone}</td>
                <td>
                  <button onClick={() => DisplayDetails(item.id)} className="btn">View</button>
                  <button onClick={()=> EditDetails(item.id)} className="btn">Edit</button>
                  <button onClick={()=> DeleteDetails(item.id)} className="btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
