import React from "react";
import StudentCard from "./Component/StudentCard.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>My Profile Card</h1>

      <StudentCard
        StudentName="Bhavy Ladva"
        Course="Full Stack Web Development"
        GridNumber="B-12"
        email="bhavy@example.com"
        phone="+91 98765 43210"
        skills={["HTML", "CSS", "JavaScript", "React"]}
      />
    </div>
  );
}

export default App;
