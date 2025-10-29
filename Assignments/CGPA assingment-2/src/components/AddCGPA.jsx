import React, { useState } from "react";
import { jsPDF } from "jspdf";

const AddCGPA = ({ setStudentData }) => {
  console.log("AddCGPA component is rendering"); // Debug log
  
  const [studentName, setStudentName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [cgpa, setCgpa] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentName && rollNumber && cgpa) {
      setStudentData({ studentName, rollNumber, cgpa });
      alert("Student CGPA Added Successfully!");
    } else {
      alert("Please fill all fields!");
    }
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text("Student Details", 20, 20);
    doc.text(`Name: ${studentName}`, 20, 30);
    doc.text(`Roll Number: ${rollNumber}`, 20, 40);
    doc.text(`CGPA: ${cgpa}`, 20, 50);
    doc.save("student-details.pdf");
  };

  return (
    <div className="page page--add">
      <h2 className="title">Add Student CGPA</h2>
      <form onSubmit={handleSubmit} className="card form">
        <div className="form-row">
          <label className="label">Student Name</label>
          <input className="input"
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter name"
            required
          />
        </div>
        <div className="form-row">
          <label className="label">Roll Number</label>
          <input className="input"
            type="text"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            placeholder="Enter roll number"
            required
          />
        </div>
        <div className="form-row">
          <label className="label">CGPA</label>
          <input className="input"
            type="number"
            step="0.01"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            placeholder="Enter CGPA"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add CGPA</button>
      </form>
      <button onClick={handleDownload} className="btn btn-secondary btn-inline">Download PDF</button>
    </div>
  );
};

export default AddCGPA;
