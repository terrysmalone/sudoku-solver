import React, { useState } from "react";
import { Board } from "./Board";
import { populateTestGrid } from "../utils/generate";

export const Game = () => {
  const [grids, setGrids] = useState<(number | undefined)[][]>([
    populateTestGrid(1),
    populateTestGrid(4),
    populateTestGrid(7),
    populateTestGrid(2),
    populateTestGrid(5),
    populateTestGrid(8),
    populateTestGrid(3),
    populateTestGrid(6),
    populateTestGrid(9),
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
};
