export function isCompleted(grids: (number | undefined)[][]): boolean {
  // Check full grids
  for (let grid of grids) {
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

function isArrayComplete(array: (number | undefined)[]): boolean {
  if (array.length !== 9) {
    throw new RangeError(
      `Array should have 9 elements. It has ${array.length}`,
    );
  }

  let numUsed: boolean[] = new Array(10).fill(false);

  for (let i = 0; i < 9; i++) {
    if (isNaN(Number(array[i]))) {
      return false;
    }

    let currentNum = Number(array[i]);
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

function getRow(
  grids: (number | undefined)[][],
  rowIndex: number,
): (number | undefined)[] {
  let row: (number | undefined)[] = [];

  const rowLine: number[] = rowLines[rowIndex];

  for (let i = 0; i < 9; i++) {
    let gridIndex: number = Math.floor(rowLine[i] / 9);
    let squareIndex: number = rowLine[i] % 9;

    row[i] = grids[gridIndex][squareIndex];
  }

  return row;
}

const rowLines: number[][] = [
  [0, 1, 2, 9, 10, 11, 18, 19, 20],
  [3, 4, 5, 12, 13, 14, 21, 22, 23],
  [6, 7, 8, 15, 16, 17, 24, 25, 26],
  [27, 28, 29, 36, 37, 38, 45, 46, 47],
  [30, 31, 32, 39, 40, 41, 48, 49, 50],
  [33, 34, 35, 42, 43, 44, 51, 52, 53],
  [54, 55, 56, 63, 64, 65, 72, 73, 74],
  [57, 58, 59, 66, 67, 68, 75, 76, 77],
  [60, 61, 62, 69, 70, 71, 78, 79, 80],
];

const getColumn = (
  grids: (number | undefined)[][],
  columnIndex: number,
): (number | undefined)[] => {
  let column: (number | undefined)[] = [];

  const columnLine: number[] = columnLines[columnIndex];

  for (let i = 0; i < 9; i++) {
    let gridIndex: number = Math.floor(columnLine[i] / 9);
    let squareIndex: number = columnLine[i] % 9;

    column[i] = grids[gridIndex][squareIndex];
  }

  return column;
};

const columnLines: number[][] = [
  [0, 3, 6, 27, 30, 33, 54, 57, 60],
  [1, 4, 7, 28, 31, 34, 55, 58, 61],
  [2, 5, 8, 29, 32, 35, 56, 59, 62],
  [9, 12, 15, 36, 39, 42, 63, 66, 69],
  [10, 13, 16, 37, 40, 43, 64, 67, 70],
  [11, 14, 17, 38, 41, 44, 65, 68, 71],
  [18, 21, 24, 45, 48, 51, 72, 75, 78],
  [19, 22, 25, 46, 49, 52, 73, 76, 79],
  [20, 23, 26, 47, 50, 53, 74, 77, 80],
];

export const exportedForTesting = {
  isArrayComplete,
};
