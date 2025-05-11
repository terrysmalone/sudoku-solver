import { SudokuSquare } from "../types/SudokuSquare";

const SUDOKU_PUZZLE_KEY: string = "sudoku_puzzle_";

export function savePuzzle(
  puzzleNumber: number,
  puzzleState: SudokuSquare[][],
) {
  localStorage.setItem(
    SUDOKU_PUZZLE_KEY + puzzleNumber.toString(),
    JSON.stringify(puzzleState),
  );
}

export function loadPuzzle(puzzleNumber: number): SudokuSquare[][] | null {
  const puzzleState = localStorage.getItem(
    SUDOKU_PUZZLE_KEY + puzzleNumber.toString(),
  );

  if (puzzleState) {
    return JSON.parse(puzzleState);
  }

  return null;
}

export function clearSavedPuzzle(puzzleNumber: number) {
  localStorage.removeItem(SUDOKU_PUZZLE_KEY + puzzleNumber.toString());
}
