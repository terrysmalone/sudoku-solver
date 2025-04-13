import React, { useState } from "react";
import { Board } from "./Board";
import { testVeryEasy } from "../utils/generate";
import "../Styles/Game.css";
import { isCompleted } from "../utils/completed";

export function Game() {
  const [grids, setGrids] = useState<(number | undefined)[][]>(testVeryEasy());

  const handleClick = (gridIndex: number, squareIndex: number) => {
    const newGrids = [...grids];

    newGrids[gridIndex][squareIndex] = getNextValue(
      grids[gridIndex][squareIndex],
    );

    setGrids(newGrids);
  };

  let status: string = "Not solved";
  if (isCompleted(grids)) {
    status = "Solved";
  }

  return (
    <>
      <div>{status}</div>
      <div className="game">
        <Board grids={grids} onSquareClick={handleClick} />
      </div>
    </>
  );
}

function getNextValue(num: number | undefined): number | undefined {
  if (num === undefined) {
    return 1;
  } else if (num === 9) {
    return undefined;
  } else {
    return num + 1;
  }
}
