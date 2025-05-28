import { SudokuSquare } from "../types/SudokuSquare";
import { getColumn, getRow } from "./checker";
import { gridToColumn, gridToRow } from "./pointTranslator";

export function solvePuzzle(puzzle: SudokuSquare[][]) {
  solveSudoku(puzzle, 0, 0);
}

function solveSudoku(
  puzzle: SudokuSquare[][],
  gridIndex: number,
  squareIndex: number,
): boolean {
  if (gridIndex === 8 && squareIndex === 9) {
    return true;
  }

  if (squareIndex === 9) {
    gridIndex++;
    squareIndex = 0;
  }

  // If cell is already solved then move forward
  // NOTE: Do we want to add something in here for if it has a num already?
  if (
    puzzle[gridIndex][squareIndex].isFixed ||
    (puzzle[gridIndex][squareIndex].value !== 0 &&
      puzzle[gridIndex][squareIndex].value !== undefined)
  ) {
    return solveSudoku(puzzle, gridIndex, squareIndex + 1);
  }

  for (let num = 1; num <= 9; num++) {
    // If it is safe to place num at current position
    if (isSafe(puzzle, gridIndex, squareIndex, num)) {
      puzzle[gridIndex][squareIndex].value = num;
      if (solveSudoku(puzzle, gridIndex, squareIndex + 1)) {
        return true;
      }
      puzzle[gridIndex][squareIndex].value = 0;
    }
  }

  return false;
}

function isSafe(
  puzzle: SudokuSquare[][],
  gridIndex: number,
  squareIndex: number,
  num: number,
): boolean {
  // Check if num exists in the row
  const rowIndex: number = gridToRow(gridIndex, squareIndex);
  const gridRow: SudokuSquare[] = getRow(puzzle, rowIndex);

  for (let i = 0; i < 9; i++) {
    if (gridRow[i].value === num) {
      return false;
    }
  }

  // Check if num exists in the colum
  const columnIndex: number = gridToColumn(gridIndex, squareIndex);

  const gridColumn: SudokuSquare[] = getColumn(puzzle, columnIndex);

  for (let i = 0; i < 9; i++) {
    if (gridColumn[i].value === num) {
      return false;
    }
  }

  // Check if num exists in grid
  const grid: SudokuSquare[] = puzzle[gridIndex];

  for (let i = 0; i < 9; i++) {
    if (grid[i].value === num) {
      return false;
    }
  }

  return true;
}
