import React from "react";
import "./App.css";
import { Grid } from "./components/Grid";

function App() {
  const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <Grid squares={squares} />
    </div>
  );
}

export default App;
