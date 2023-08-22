import "./App.css";
import Axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [catFact, setCatFact] = useState("");
  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      //console.log(res.data.fact);
      setCatFact(res.data.fact);
    });
  };
  useEffect(() => {
    // Axios.get("https://catfact.ninja/fact").then((res) => {
    //   //console.log(res.data.fact);
    //   setCatFact(res.data.fact);
    fetchCatFact();
  }, []);
  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
