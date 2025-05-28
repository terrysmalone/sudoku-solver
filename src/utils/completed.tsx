import { SudokuSquare } from "../types/SudokuSquare";
import { getColumn, getRow } from "./checker";

export function isCompleted(grids: SudokuSquare[][]): boolean {
  // Check full grids
  for (const grid of grids) {
    if (!isArrayComplete(grid)) {
      return false;
    }
  }

  // Check rows
  for (let i = 0; i < 9; i++) {
    if (!isArrayComplete(getRow(grids, i))) {
      return false;
    }
  }

  // Check columns
  for (let i = 0; i < 9; i++) {
    if (!isArrayComplete(getColumn(grids, i))) {
      return false;
    }
  }

  return true;
}

function isArrayComplete(array: SudokuSquare[]): boolean {
  if (array.length !== 9) {
    throw new RangeError(
      `Array should have 9 elements. It has ${array.length}`,
    );
  }

  const numUsed: boolean[] = new Array(10).fill(false);

  for (let i = 0; i < 9; i++) {
    if (isNaN(Number(array[i].value))) {
      return false;
    }

    const currentNum = Number(array[i].value);
    if (currentNum < 1 || currentNum > 9) {
      throw new RangeError(
        `Array should only contain numbers 1-9. It contains ${currentNum}`,
      );
    }

    if (numUsed[currentNum]) {
      return false;
    }

    numUsed[currentNum] = true;
  }

  return true;
}

export const exportedForTesting = {
  isArrayComplete,
};
