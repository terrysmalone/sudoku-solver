import React, { useState } from "react";
import { Board } from "./Board";
import { countUp } from "../utils/generate";
import "../Styles/Game.css";

export const Game = () => {
  const [grids, setGrids] = useState<(number | undefined)[][]>(countUp());

  const handleClick = (gridIndex: number, squareIndex: number) => {
    const newGrids = [...grids];

    newGrids[gridIndex][squareIndex] = getNextValue(
      grids[gridIndex][squareIndex],
    );

    setGrids(newGrids);
  };

  return (
    <div className="game">
      <Board grids={grids} onSquareClick={handleClick} />
    </div>
  );
};

function getNextValue(num: number | undefined): number | undefined {
  if (num === undefined) {
    return 1;
  } else if (num === 9) {
    return undefined;
  } else {
    return num + 1;
  }
}
