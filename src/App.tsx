import React, { useState } from "react";
import "./Styles/App.css";
import { Board } from "./components/Board";

function App() {
  const [grids, setGrids] = useState<(number | undefined)[][]>([
    Array(9).fill(1),
    Array(9).fill(2),
    Array(9).fill(3),
    Array(9).fill(4),
    Array(9).fill(5),
    Array(9).fill(6),
    Array(9).fill(7),
    Array(9).fill(8),
    Array(9).fill(9),
  ]);

  const handleClick = (gridIndex: number, squareIndex: number) => {
    console.log("gridIndex: ", gridIndex);
    console.log("squareIndex: ", squareIndex);

    const newGrids = [...grids];

    const val = grids[gridIndex][squareIndex];
    console.log("val: ", val);

    if (val === undefined) {
      newGrids[gridIndex][squareIndex] = 1;
    } else if (val === 9) {
      newGrids[gridIndex][squareIndex] = undefined;
    } else {
      // @ts-ignore
      newGrids[gridIndex][squareIndex]++;
    }
    setGrids(newGrids);
  };

  return (
    <div>
      <Board grids={grids} onSquareClick={handleClick} />
    </div>
  );
}

export default App;
