import React, { useEffect, useState } from "react";
import { Board } from "./Board";
import "../Styles/Game.css";
import "../Styles/Centre.css";
import "../Styles/Button.css";
import { isCompleted } from "../utils/completed";
import { getPuzzle, getPuzzleCount } from "../utils/PuzzleProvider";

export function Game() {
  const puzzleCount = getPuzzleCount();
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [grids, setGrids] = useState<(number | undefined)[][]>(
    getPuzzle(currentPuzzle),
  );

  useEffect(() => {
    setGrids(getPuzzle(currentPuzzle));
    console.log("currentPuzzle:", currentPuzzle);
  }, [currentPuzzle]);

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
      <div className="centre">
        <button
          onClick={() => setCurrentPuzzle(currentPuzzle - 1)}
          className="button"
          disabled={currentPuzzle === 0}
        >
          {"<"}
        </button>
        <button
          onClick={() => setCurrentPuzzle(currentPuzzle + 1)}
          className="button"
          disabled={currentPuzzle >= puzzleCount - 1}
        >
          {">"}
        </button>
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
