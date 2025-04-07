export const testFullyPopulated = (): (number | undefined)[][] => {
  let grid: (number | undefined)[][] = [
    populateTestGrid(1),
    populateTestGrid(4),
    populateTestGrid(7),
    populateTestGrid(2),
    populateTestGrid(5),
    populateTestGrid(8),
    populateTestGrid(3),
    populateTestGrid(6),
    populateTestGrid(9),
  ];

  return grid;
};

const populateTestGrid = (startNumber: number): (number | undefined)[] => {
  let squares: (number | undefined)[] = [];

  for (let i = 0; i < 9; i++) {
    if (startNumber > 9) {
      startNumber = 1;
    }
    squares.push(startNumber);

    startNumber++;
  }

  return squares;
};

export const testVeryEasy = (): (number | undefined)[][] => {
  let grid: (number | undefined)[][] = [
    [9, 8, 6, 7, undefined, 2, 5, 4, 3],
    [3, 2, 4, 5, 9, 8, 6, 7, undefined],
    [undefined, 7, 8, 3, 4, 6, 9, 5, 2],
    [3, 2, 7, undefined, 5, 8, 4, 6, 9],
    [undefined, 5, 6, 9, 4, 2, 7, 8, 3],
    [4, 9, 8, 6, 3, 7, 5, 2, undefined],
    [6, 9, undefined, 2, 7, 5, 8, 3, 4],
    [8, 3, 5, 4, undefined, 9, 2, 6, 7],
    [2, 9, 4, 8, 6, 3, 7, undefined, 5],
  ];

  return grid;
};

export const countUp = (): (number | undefined)[][] => {
  let grid: (number | undefined)[][] = [];

  for (let i = 0; i < 9; i++) {
    grid[i] = [];
    for (let j = 0; j < 9; j++) {
      grid[i][j] = i * 9 + j;
    }
  }

  return grid;
};
