import { SudokuSquare } from "../types/SudokuSquare";

export function solvePuzzle(puzzle: SudokuSquare[][]) {
  // const solvedPuzzle: SudokuSquare[][] = getEmptySudokuSquareGrid();

  solveSudoku(puzzle, 0, 0);
}

/*function getEmptySudokuSquareGrid(): SudokuSquare[][] {
  return Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => getEmptySquare()),
  );
}*/

/*function getEmptySquare(): SudokuSquare {
  return {
    value: undefined,
    isFixed: false,
  } as SudokuSquare;
}*/

function solveSudoku(
  puzzle: SudokuSquare[][],
  row: number,
  col: number,
): boolean {
  if (row === 8 && col === 9) return true;

  if (col === 9) {
    row++;
    col = 0;
  }

  // If cell is already solved then move forward
  // NOTE: Do we want to add something in here for if it has a num already?
  if (puzzle[row][col].isFixed) {
    return solveSudoku(puzzle, row, col + 1);
  }

  for (let num = 1; num <= 9; num++) {
    // If it is safe to place num at current position
    if (isSafe(puzzle, row, col, num)) {
      puzzle[row][col].value = num;
      if (solveSudoku(puzzle, row, col + 1)) {
        return true;
      }
      puzzle[row][col].value = 0;
    }
  }

  return false;
}

function isSafe(
  puzzle: SudokuSquare[][],
  row: number,
  col: number,
  num: number,
): boolean {
  // Check if num exists in the row
  for (let x = 0; x < 9; x++) if (puzzle[row][x].value === num) return false;

  // Check if num exists in the col
  for (let x = 0; x < 9; x++) if (puzzle[x][col].value === num) return false;

  // Check if num exists in the 3x3 sub-matrix
  const startRow = row - (row % 3),
    startCol = col - (col % 3);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (puzzle[i + startRow][j + startCol].value === num) {
        return false;
      }
    }
  }

  return true;
}
