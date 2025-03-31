import React from "react";
import "./App.css";
import { Square } from "./components/Square";

function App() {
  return (
    <div>
      <Square value={"3"} onSquareClick={() => {}} />
    </div>
  );
}

export default App;
