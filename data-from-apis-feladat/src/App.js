import "./App.css";
import Axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(0);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };

  return (
    <div className="App">
      <div className="app-header">
        <input
          className="input"
          placeholder="Ex. Pedro..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button onClick={fetchData} className="btn">
          Predict Age
        </button>
      </div>
      <div className="container">
        <h1>Name: {predictedAge?.name}</h1>
        <h1>Predicted Age: {predictedAge?.age}</h1>
        <h1>Count: {predictedAge?.count}</h1>
      </div>
    </div>
  );
}

export default App;
