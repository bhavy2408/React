
import { useState } from 'react'

const State_objects = () => {
  // 1. Boolean State
  const [isvisible, setisvisible] = useState(false)

  // 2. String State
  const [name, setname] = useState('')

  
  // 3. Array State
  const[skills , setskills] = useState([
    "HTML",
    "CSS",
    "JAVASCRIPT"
  ])


  const[newskills , setnewskills] = useState("")

  let addskill = () => {
    if(newskills.trim() !== ""){
      setskills (prev => [...prev , newskills.trim()])
      setnewskills('')
    }
  }

  let remove = (index) => {
    setskills (prev => prev.filter((_ , i)=> i != index)) 


  const [student , setstudent] = useState({
    name:name,
    age:age
  })

  const addstudent = () => {
    
  }
    
  }
  return (
    <>
      <div>
        <h1>Hooks Objects</h1>

        {/* Boolean State */}
        <h2>1. Boolean State</h2>

        <button onClick={() => setisvisible(prev => !prev)}>
          {isvisible ? 'Hide Message' : 'Show Message'}
        </button>

        {isvisible && (
          <p>This is a message that can be toggled on and off.</p>
        )}

        {/* String State */}
        <h2>2. String State</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={e => setname(e.target.value)}
        />

        <p>Hello {name || 'No Name Available!'}</p>
        <p>Characters: {name.length}</p>

        <button onClick={() => setname('')}>Clear Name</button>
        <br />
        <br />
        {/* Array State */}
          <div>

            <input type="text" placeholder="Enter Your Skills" value={newskills} onChange={(e) => setnewskills(e.target.value)} />

            <button onClick={addskill}>Add Skill</button>

            <p>Skills {skills.length}</p>

            <h3>My Skills</h3>
            <ul>{
              skills.map((skill , index) => (
                <li key={index}>{skill}{""} <button onClick={() => remove(index)}>Remove</button></li>
              ))
              }</ul>
          </div>
      </div>
    </>
  )
}

export default State_objects
