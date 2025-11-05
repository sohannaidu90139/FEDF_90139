import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "1.5rem",
      width: "200px",
      textAlign: "center",
      boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
      backgroundColor: "rgba(255, 255, 255, 0.05)"
    }}>
      <h3>{book.title}</h3>
      <p><em>{book.author}</em></p>
      <Link 
        to={`/book/${book.id}`} 
        style={{
          display: "inline-block",
          padding: "0.5rem 1rem",
          backgroundColor: "white",
          color: "black",
          borderRadius: "5px",
          marginTop: "0.5rem",
          textDecoration: "none",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#646cff";
          e.target.style.color = "white";
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "white";
          e.target.style.color = "black";
          e.target.style.transform = "scale(1)";
        }}
      >
        View Details
      </Link>
    </div>
  );
}

export default BookCard;
