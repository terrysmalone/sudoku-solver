import React, { useState } from "react";
import { Board } from "./Board";
import { populateTestGrid } from "../utils/generate";

export const Game = () => {
  const [grids, setGrids] = useState<(number | undefined)[][]>([
    [1, 2, undefined, 4, 5, 6, 7, 8, 9],
    [4, undefined, 6, 7, undefined, undefined, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    populateTestGrid(2),
    populateTestGrid(5),
    populateTestGrid(8),
    populateTestGrid(3),
    populateTestGrid(6),
    [1, 1, undefined, 1, 1, 1, 1, 1, 1],
    // populateTestGrid(9),
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
