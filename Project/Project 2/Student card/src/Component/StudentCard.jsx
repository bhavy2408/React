import React from 'react'
import "./StudentCard.css"

const StudentCard = (props) => {
  return (
    <div className="student-card">
      <h2>{props.StudentName}</h2>
      <p>Course: {props.Course}</p>
      <p>Grid Number: {props.GridNumber}</p>   
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
      <p>Skills: {props.skills.join(', ')}</p>
           
    </div>
  )
}


export default StudentCard
