import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("default");
  const [income, setIncome] = useState("high");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const onSubmitHandle = () => {
    console.log('state =', name, income);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmitHandle}>
          <div>
            <span>Name: </span>
            <input value={name} type="text" onChange={handleNameChange}></input>
          </div>
          <div>
            <span>Income: </span>
            <select value={income} onChange={handleIncomeChange}>
              <option value="high">High</option>
              <option value="mid">Mid</option>
              <option value="low">Low</option>
            </select>
            <input type="submit" value="submit"></input>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
