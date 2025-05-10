import { SudokuSquare } from "../types/SudokuSquare";

export function savePuzzle(
  puzzleNumber: number,
  puzzleState: SudokuSquare[][],
) {
  localStorage.setItem(
    "sudoku_puzzle_" + puzzleNumber.toString(),
    JSON.stringify(puzzleState),
  );
}

export function loadPuzzle(puzzleNumber: number): SudokuSquare[][] | null {
  const puzzleState = localStorage.getItem(
    "sudoku_puzzle_" + puzzleNumber.toString(),
  );

  if (puzzleState) {
    return JSON.parse(puzzleState);
  }

  return null;
}
