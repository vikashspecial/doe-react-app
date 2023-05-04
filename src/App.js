import { useState } from 'react';
import './style.css';

function App() {

  const [colorClass, setColorClass] = useState("green");

  const changeColor = () => {
    if (colorClass === "green") {
      setColorClass("red")
    } else {
      setColorClass("green");
    }
  }

  const getGreetings = (name) => {
    return `Welcome ${name}`;
  }



  return (
    <div>
      <h1 className={colorClass}>{getGreetings("to DoE")}</h1>
      <button onClick={changeColor}>Change to {colorClass === "green" ? "Red" : "Green"}</button>
    </div>
  );

}

export default App;
