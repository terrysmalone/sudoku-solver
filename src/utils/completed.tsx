export const isCompleted = (grids: (number | undefined)[][]): boolean => {
  // Check full grids
  for (let grid of grids) {
    if (!isArrayComplete(grid)) {
      return false;
    }
  }

  // Check rows
  // for 0 yo 8
  //    if(!isArrayComplete(getRow(grids, i){
  //       return false;

  // Check columns
  // for 0 yo 8
  //    if(!isArrayComplete(getColumn(grids, i){
  //       return false;

  return true;
};

const isArrayComplete = (array: (number | undefined)[]): boolean => {
  if (array.length !== 9) {
    throw new RangeError(
      `Array should have 9 elements. It has ${array.length}`,
    );
  }

  let numUsed: boolean[] = new Array(9);

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
};

export const exportedForTesting = {
  isArrayComplete,
};
