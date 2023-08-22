import "./App.css";
import Felirat from "./felirat.component";

function App() {
  return (
    <div className="App">
      <div className="cim">
        <Felirat felirat="Az első felirat" />
      </div>
      <div className="masodik-container">
        <Felirat felirat="Második felirat" />
        <Felirat felirat="Harmadik felirat" />
      </div>
    </div>
  );
}

export default App;
