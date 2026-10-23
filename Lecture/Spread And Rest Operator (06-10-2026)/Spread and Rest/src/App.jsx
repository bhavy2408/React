import './App.css'

function App() {

  // spread operator with array
  const Fruit = ["Mango","Graps","orange"]
  const fruits = [...Fruit ,"bananana"]

   // spread operator with two arrays

   const vegetable = ["potato","carrote", "tomato"]

   const Fooditems = [...fruits,...vegetable]

    // spread operator with object

    const student = {
      name : "Bhavy",
      age : 25
    }

    const UpadatedStudent = {
      ...student,
      City : "surat",   
      State : "Gujarat",
      Country : "India"
    }


    
  // Rest Parameter in function

  function add (...numbers){
    let total = 0;

    for (let num of numbers){
      total = total + num;
      }

      return total;
  }

  const total = add(10 ,20 , 40 ,30 ,50 ,60,70 , 80 ,90 ,100)


    // Rest Parameter with first Parameter

    function studentshow(name , ...subjects){
      return(
        <div>
          <p>Student : {name}</p>

            <p>Subject</p>

            <ul>
              {subjects.map((subject) => <li>{subject}</li>)}
            </ul>


        </div>
      )
    }


    let data  = studentshow("Bhavy","maths","physics","chemistry")
      return(
    <div>
      
      {/* // spread operator with array */}
      <ul>
        {fruits.map((item) => (<li>{item}</li>))}
      </ul>

      {/* // spread operator with two arrays */}
      
      <ul>
        {Fooditems.map((item)=> <li>{item}</li>)}
      </ul>



      {/* // spread operator with object */}

      <div>
        <h1>Personal Information</h1>
        <div>Name:-{UpadatedStudent.name}</div>
        <div>Age:-{UpadatedStudent.age}</div>
        <div>City:-{UpadatedStudent.City}</div>
        <div>State:-{UpadatedStudent.State}</div>
        <div>Country:-{UpadatedStudent.Country}</div>
      </div>


  
        {/* // Rest Parameter in function */}
        <br/>
        <div> total :- {total}</div>

        {/* // Rest Parameter with first Parameter */}

        <div>
          {data}
        </div>
    </div>    
  )
}

export default App
