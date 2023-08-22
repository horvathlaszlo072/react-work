import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState("");
  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then(
      (res) => {
        setGeneratedExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      <h1>Generate An execuse</h1>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>
    </div>
  );
}

export default App;
