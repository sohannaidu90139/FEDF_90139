import React from "react";
import { jsPDF } from "jspdf";

const ViewCGPA = ({ studentData }) => {
  console.log("ViewCGPA component is rendering"); // Debug log
  
  const handleDownloadPDF = () => {
    if (studentData) {
      const doc = new jsPDF();
      doc.text("Student Details", 20, 20);
      doc.text(`Student Name: ${studentData.studentName}`, 20, 30);
      doc.text(`Roll Number: ${studentData.rollNumber}`, 20, 40);
      doc.text(`CGPA: ${studentData.cgpa}`, 20, 50);
      doc.save("student-details.pdf");
    } else {
      alert("No student data available to download.");
    }
  };

  return (
    <div className="page page--view">
      <h2 className="title">View Student CGPA</h2>
      {studentData ? (
        <div className="card details">
          <div className="details-row"><span className="details-key">Student Name</span><span className="details-val">{studentData.studentName}</span></div>
          <div className="details-row"><span className="details-key">Roll Number</span><span className="details-val">{studentData.rollNumber}</span></div>
          <div className="details-row"><span className="details-key">CGPA</span><span className="details-val highlight">{studentData.cgpa}</span></div>
          <div className="actions">
            <button onClick={handleDownloadPDF} className="btn btn-primary">Download PDF</button>
          </div>
        </div>
      ) : (
        <p className="muted">No student data available. Please add CGPA first.</p>
      )}
    </div>
  );
};

export default ViewCGPA;
