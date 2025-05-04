import { SudokuSquare } from "../types/SudokuSquare";

function getEmptySquare(): SudokuSquare {
  return {
    value: undefined,
    isFixed: false,
  } as SudokuSquare;
}

export function getEmptySudokuSquareGrid(): SudokuSquare[] {
  return Array.from({ length: 9 }, () => getEmptySquare());
}

export function getSudokuSquareGrid(
  numbers: (number | undefined)[],
): SudokuSquare[] {
  const squareGrid: SudokuSquare[] = getEmptySudokuSquareGrid();

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    squareGrid[i] = {
      value: number,
      isFixed: number !== 0,
    };
  }

  return squareGrid;
}

export function getEmptyGrid(): SudokuSquare[][] {
  return Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => getEmptySquare()),
  );
}

export function getFilledGrid(
  array: (number | undefined)[][],
): SudokuSquare[][] {
  const squareGrid: SudokuSquare[][] = getEmptyGrid();

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      const number = array[i][j];

      squareGrid[i][j] = {
        value: number === 0 ? undefined : number,
        isFixed: number !== 0,
      };
    }
  }

  return squareGrid;
}
