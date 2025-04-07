export const isCompleted = (): boolean => {
  return false;
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
