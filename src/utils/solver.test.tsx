import { SudokuSquare } from "../types/SudokuSquare";
import { getFilledGrid } from "../test-utils/sudukoSquareBuilder";
import { isCompleted } from "./completed";
import { solvePuzzle } from "./solver";

test("Can solve with missing ones", () => {
  const puzzleNums: number[][] = [
    [8, 9, 2, 5, 7, 6, 4, 3, 0],
    [7, 6, 0, 8, 4, 3, 2, 9, 5],
    [5, 3, 4, 0, 9, 2, 8, 6, 7],
    [6, 8, 3, 2, 0, 7, 9, 5, 4],
    [5, 2, 4, 6, 8, 9, 3, 0, 7],
    [9, 7, 0, 4, 5, 3, 2, 8, 6],
    [3, 2, 8, 7, 4, 9, 0, 6, 5],
    [4, 5, 6, 0, 3, 8, 9, 7, 2],
    [7, 0, 9, 6, 2, 5, 3, 4, 8],
  ];

  const puzzle: SudokuSquare[][] = getFilledGrid(puzzleNums);

  solvePuzzle(puzzle);

  expect(isCompleted(puzzle)).toBe(true);
});

test("Can solve complex puzzle", () => {
  const puzzleNums: number[][] = [
    [6, 0, 0, 0, 3, 0, 0, 0, 0],
    [8, 1, 0, 6, 0, 7, 5, 0, 0],
    [2, 7, 0, 9, 4, 0, 6, 3, 0],
    [4, 0, 6, 2, 1, 8, 7, 0, 0],
    [0, 7, 0, 0, 0, 9, 2, 0, 8],
    [0, 0, 3, 7, 0, 4, 0, 6, 0],
    [0, 0, 2, 1, 0, 0, 0, 0, 4],
    [4, 5, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 4, 9, 0, 5, 1, 6],
  ];

  const puzzle: SudokuSquare[][] = getFilledGrid(puzzleNums);

  solvePuzzle(puzzle);

  expect(isCompleted(puzzle)).toBe(true);
});
