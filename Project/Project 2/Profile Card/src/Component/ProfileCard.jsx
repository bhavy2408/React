
import React from "react";
function ProfileCard(props) {
  return (
    <div className="profile-card">
      <img
        src={props.image}
        alt={props.name}
        className="profile-image"
      />

      <h2>{props.name}</h2>
      <p>{props.education}</p>

      <h3>My Skills</h3>

      <div className="skills">
        {props.skills.map((skill, index) => (
          <span className="skill" key={index}>
            {skill}
          </span>
        ))}
      </div>

      <h3>Contact Information</h3>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>

      <h3>Social Media</h3>
      <div className="social-links">
        <a href={props.github} target="_blank" rel="noreferrer">
          GitHub
        </a>

        <a href={props.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
