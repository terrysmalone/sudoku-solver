import React, { useEffect, useState } from "react";
import { Board } from "./Board";
import "../styles/Game.css";
import "../styles/Centre.css";
import "../styles/Button.css";
import { isCompleted } from "../utils/completed";
import { getPuzzle, getPuzzleCount } from "../utils/puzzleProvider";
import { SudokuSquare } from "../types/SudokuSquare";
import { loadPuzzle, savePuzzle } from "../utils/fileManagement";

export function Game() {
  const puzzleCount = getPuzzleCount();
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [grids, setGrids] = useState<SudokuSquare[][]>(
    getPuzzle(currentPuzzle),
  );

  // Load the current puzzle
  useEffect(() => {
    const savedPuzzle = loadPuzzle(currentPuzzle);
    if (savedPuzzle) {
      setGrids(savedPuzzle);
    } else {
      setGrids(getPuzzle(currentPuzzle));
    }
  }, [currentPuzzle]);

  const handleClick = (gridIndex: number, squareIndex: number) => {
    const newGrids = [...grids];

    newGrids[gridIndex][squareIndex] = getNextValue(
      grids[gridIndex][squareIndex],
    );

    setGrids(newGrids);

    // Save the puzzle state
    savePuzzle(currentPuzzle, newGrids);
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
        <label>Puzzle {currentPuzzle + 1}</label>
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

function getNextValue(square: SudokuSquare): SudokuSquare {
  let nextNum: number | undefined = undefined;

  if (square.value === undefined) {
    nextNum = 1;
  } else if (square.value === 9) {
    nextNum = undefined;
  } else {
    nextNum = square.value + 1;
  }

  return {
    value: nextNum,
    isFixed: square.isFixed,
  };
}
