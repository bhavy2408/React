import React from "react";
import {useState} from "react";
import "./App.css";

function App() {
  const [count , setcount] = useState(0)

  const Increasecount = () => {
    setcount((PrevCount) => PrevCount + 1)
  };

  const Decreasecount = () => {
    setcount((PrevCount) => PrevCount - 1)
  };

  const Resetcount = () => {
    setcount(0)
  };

  return(
    <div>
      <p>Application of Counter</p>
      <p>{count}</p>
      <button onClick={Increasecount}>Increase</button>
      <button onClick={Decreasecount}>Decrease</button>
      <button onClick={Resetcount}>Reset</button>
    </div>
  )
  

}

export default App;
