import React from "react";
import "./Styles/App.css";
import { Board } from "./components/Board";

function App() {
  const grids: (number | undefined)[][] = [
    Array(9).fill(1),
    Array(9).fill(2),
    Array(9).fill(3),
    Array(9).fill(4),
    Array(9).fill(5),
    Array(9).fill(6),
    Array(9).fill(7),
    Array(9).fill(7),
    Array(9).fill(8),
  ];

  return (
    <div>
      <Board grids={grids} />
    </div>
  );
}

export default App;
