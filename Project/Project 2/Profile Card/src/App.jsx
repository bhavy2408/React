import React from "react";
import ProfileCard from "./Component/ProfileCard.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>My Profile Card</h1>

      <ProfileCard
        image="https://i.pravatar.cc/200?img=12"
        name="Bhavy Ladva"
        education="B.Sc. IT Student"
        skills={["HTML", "CSS", "JavaScript", "React"]}
        email="bhavy@example.com"
        phone="+91 98765 43210"
        github="https://github.com/bhavy2408"
        linkedin="https://www.linkedin.com/"
      />
    </div>
  );
}

export default App;
