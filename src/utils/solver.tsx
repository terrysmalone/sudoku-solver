import { SudokuSquare } from "../types/SudokuSquare";

export function solvePuzzle(puzzle: SudokuSquare[][]): SudokuSquare[][] {
  const solvedPuzzle: SudokuSquare[][] = getEmptySudokuSquareGrid();

  let currentSquare: number = 0;
  const currentNum: number = 1;

  while (currentSquare < 81) {
    const i = Math.trunc(currentSquare / 9);
    const j = currentSquare % 9;

    console.log("i:", i, " j:", j);

    if (puzzle[i][j].isFixed) {
      solvedPuzzle[i][j] = {
        value: puzzle[i][j].value,
        isFixed: puzzle[i][j].isFixed,
      };
    } else {
      solvedPuzzle[i][j].value = currentNum;
      //          start count at 1
      //          add count into this spot
      //          if it's still valid
    }

    currentSquare++;
  }

  return solvedPuzzle;
}

function getEmptySudokuSquareGrid(): SudokuSquare[][] {
  return Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => getEmptySquare()),
  );
}

function getEmptySquare(): SudokuSquare {
  return {
    value: undefined,
    isFixed: false,
  } as SudokuSquare;
}
